"use strict";
let path = require('path');
let util = require('util');
let fs = require('fs');
let bodyParser = require('body-parser');
let config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
let def = require('./definitions');
let messages = require('./messages');
let express = require('express');
let app = express();
// let mustache = require('mustache');
let options = require('./options');

app.set('config', config);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
let p = path.join(__dirname, 'public','dist');
app.use(express.static(p));


process.env.NODE_ENV = config.env;

let cmdPort;
let args = process
    .argv
    .slice(2);
(args.length >= 2) && (args[0] == '-p') && (cmdPort = args[1]);

//for cross domain
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization, Content-Length, X-Requested-With, A' +
            'ccess-Control-Allow-Origin,x-access-token');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
};
app.use(allowCrossDomain);

app.get('/bio/:page', function (req, res,next) {
    try {
        let pageShortName = req.params.page;
        let invCode = req.query.c1;
        let c4 = req.query.c4;        
        let pageObj = options.urls && options.pages && options.pages[pageShortName];

        let nextPageUrl = '';
            // nextPage1Url = '';
        if (pageObj) {
            // let path1 = path.join(__dirname, 'public', 'biobank', pageObj.htmlFileName);
            // let template = fs.readFileSync(path1, 'utf8');

            if (pageObj.maestroPage) {
                invCode = invCode
                    ? '?invitation-code=' + invCode
                    : '';
                nextPageUrl = util.format('%s/%s/%s%s', options.urls.maestroBaseUrl, options.urls.maestroPath, pageObj.maestroPage, invCode);
            } else if (pageObj.nextPage) {
                invCode = invCode
                    ? '?c1=' + invCode
                    : '';
                nextPageUrl = util.format('%s/%s/%s%s', options.urls.nodeServerBaseUrl, options.urls.nodeServerPath, pageObj.nextPage, invCode);

                // if (pageObj.nextPage1) {
                //     nextPage1Url = util.format('%s/%s/%s%s', options.urls.nodeServerBaseUrl, options.urls.nodeServerPath, pageObj.nextPage1, invCode);
                // }
            } else {
                nextPageUrl = options.sutterHealthUrl;
            }
            // if (pageObj.gender) {
            if (c4) {
                if (nextPageUrl.indexOf("?") != -1) {
                    c4 = '&c4=' + c4;
                } else {
                    c4 = '?c4=' + c4;
                }
            } else {
                c4 = ''
            }
            nextPageUrl = util.format('%s%s', nextPageUrl, c4);
            // nextPage1Url = util.format('%s%s', nextPage1Url, c4);
            // }
            // let file1 = mustache.render(template, {
            //     nextPage: nextPageUrl,
            //     nextPage1: nextPage1Url,
            //     questionPost: pageObj.questionPost && (pageObj.questionPost.concat(invCode
            //         ? '?invitation-code=' + req.query.c1
            //         : '')),
            //     progressBar: progressBarTemplate
            // });
            // (pageObj.status || pageObj.status == 0) && (file1 = mustache.render(file1, {status: pageObj.status*25}));
            // res.send(file1);
        } else {
            //error
            res
                .status(400)
                .end(messages['errInvalidPage']);
        }
        return;
    } catch (error) {
        let err = new def.NError(500, messages.errInternalServerError, error.message);
        next(err);
    }
});
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','dist', 'index.html'));
})

var server = app.listen(cmdPort || process.env.PORT || config.port, function () {
    console.log('Node server running at port: ' , server.address().port);
});

app.use(function (err, req, res, next) {
    if (err) {
        if (err.hasOwnProperty('body')) {
            var error = new def.NError(err.status, err.message, err.body);
            err = error;
        }
    } else {
        err = new def.NError(404, messages.errUrlNotFound, messages.messUrlNotFoundDetails);
    }
    next(err);
});

//development error handler
if (process.env.NODE_ENV === 'staging') {
    app
        .use(function (err, req, res) {
            console.log(messages.errDevError);
            if (!res.finished) {
                res.status(err.status || 500);
                res.json({error: err});
            }
        });
}
//production error handler
app
    .use(function (err, req, res) {
        console.log(messages.errProdError);
        // if (err.message) { delete err.message; } if (err.details) { delete
        // err.details; }
        if (!res.finished) {
            res.status(err.status || 500);
            res.json({error: err});
        }
    });
