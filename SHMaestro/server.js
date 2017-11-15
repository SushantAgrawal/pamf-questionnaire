"use strict";
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
let util = require('util');
var config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
var def = require('./definitions');
var messages = require('./messages');
var express = require('express');
var app = express();
let mustache = require('mustache');
var options = require('./options');
// app.set('messages', messages); app.set('def', def);
app.set('config', config);
app.disable('etag');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(express.static(path.join(__dirname, 'public', 'biobank')));
// app.use(express.static('public','biobank'));
process.env.NODE_ENV = config.env;

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

app.get('/grail/:page', function (req, res) {
    let page = req.params.page;
    let invCode = 'c1=' + req.query["invitation-code"];
    let redirectUrl = util.format("%s/%s/%s?%s", options.nodeServerBaseUrl, options.nodeServerGrailPath, options.grailRedirection[page], invCode);
    res.writeHead(301, {Location: redirectUrl});
    res.end();
})

app.get('/bio/:page', function (req, res) {
    let page = req.params.page;
    let invCode = 'c1=' + req.query["invitation-code"];
    let c2 = req.query.c2;
    c2 = c2
        ? c2 && '&c2=' + c2
        : '';
    let c3 = req.query.c3;
    c3 = c3
        ? c3 && '&c3=' + c3
        : '';
    let c4 = req.query.c4;
    c4 = c4
        ? c4 && '&c4=' + c4
        : '';
    let redirectUrl = util.format("%s/%s/%s?%s", options.nodeServerBaseUrl, options.nodeServerPath, options.redirection[page], invCode);
    redirectUrl = util.format('%s%s', redirectUrl, c4);
    res.writeHead(301, {Location: redirectUrl});
    res.end();
});

app.post('/bio/questionnaire', (req, res) => {
    res.json({status: 'Question posted'});
});

app.put('/bio/questionnaire', (req, res) => {
    res.json({status: 'Question posted'});
});

app.post("/pamf/testPamf", (req, res) => {    
    let redirectUrl = 'http://localhost:3001/pamf/letterLanding';
    redirectUrl = "http://localhost:4200/pamf/incorrectTjr"
    res.writeHead(301, {Location: redirectUrl});
    res.end();
});

app.post("/pamf/:page", (req, res, next) => {
    let page = req.params.page;
    let contact_type = req.body["contact_type"];
    let code = req.body["code"];
    let email = req.body["email"];
    let nodeServerBaseUrl = options.pamfOptions.nodeServerBaseUrl;
    let nodeServerPath = options.pamfOptions.nodeServerPath;
    let redirectPath = (page == 'landing-page') && (options.pamfOptions.redirection[page](contact_type, code, email));
    let redirectUrl = util.format("%s/%s/%s",nodeServerBaseUrl,nodeServerPath,redirectPath);
    res.writeHead(301, {Location: redirectUrl});
    res.end();
});

app.post('/bio/:page', function (req, res) {
    let page = req.params.page;
    let invCode = 'c1=' + req.query["invitation-code"];
    let c2 = req.query.c2;
    c2 = c2
        ? c2 && '&c2=' + c2
        : '';
    let c3 = req.query.c3;
    c3 = c3
        ? c3 && '&c3=' + c3
        : '';
    let c4 = req.query.c4;
    c4 = c4
        ? c4 && '&c4=' + c4
        : '';
    let redirectUrl = util.format("%s/%s/%s?%s", options.nodeServerBaseUrl, options.nodeServerPath, options.redirection[page], invCode);
    redirectUrl = util.format('%s%s', redirectUrl, c4);
    res.writeHead(301, {Location: redirectUrl});
    res.end();
});

app.get('/*', (req, res, next) => {
    //res.sendFile(path.join(__dirname, 'public','index.html'));
})

var server = app.listen(process.env.PORT || config.port, function () {
    console.log('Node server running at port: ' + config.port);
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
if (process.env.NODE_ENV === 'development') {
    app
        .use(function (err, req, res, next) {
            console.log(messages.errDevError);
            if (!res.finished) {
                res.status(err.status || 500);
                res.json({error: err});
            }
        });
}
//production error handler
app
    .use(function (err, req, res, next) {
        console.log(messages.errProdError);
        // if (err.message) { delete err.message; } if (err.details) { delete
        // err.details; }
        if (!res.finished) {
            res.status(err.status || 500);
            res.json({error: err});
        }
    });
