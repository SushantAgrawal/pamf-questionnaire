"use strict";
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
let util = require('util');
var config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
var def = require('./definitions');
var messages = require('./messages');
var express = require('express');
var _ = require('lodash');
var app = express();
var options = require('./options');
app.set('config', config);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(path.join(__dirname, 'public', 'biobank')));
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

app.post("/pamf/:page", (req, res, next) => {
    let page = req.params.page;
    if (page == "submit-questionnaire") {
        res.json({ "formPost": "true" });
    } else {
        let nodeServerBaseUrl = options.pamfOptions.nodeServerBaseUrl;
        let nodeServerPath = options.pamfOptions.nodeServerPath;
        let redirectPath = options.pamfOptions.redirection[page];
        if (_.isFunction(redirectPath)) {
            redirectPath = redirectPath(req);
        }
        let redirectUrl = util.format("%s/%s/%s", nodeServerBaseUrl, nodeServerPath, redirectPath);
        res.writeHead(301, { Location: redirectUrl });
        res.end();
    }
});

app.get("/pamf/:page", (req, res, next) => {
    let page = req.params.page;
    if (page == "submit-questionnaire") {
        res.json({ "formPost": "true" });
    } else {
        let nodeServerBaseUrl = options.pamfOptions.nodeServerBaseUrl;
        let nodeServerPath = options.pamfOptions.nodeServerPath;
        let redirectPath = options.pamfOptions.redirection[page];
        if (_.isFunction(redirectPath)) {
            redirectPath = redirectPath(req);
        }
        let redirectUrl = util.format("%s/%s/%s", nodeServerBaseUrl, nodeServerPath, redirectPath);
        res.redirect(redirectUrl);
        // res.writeHead(301, { Location: redirectUrl });
        res.end();
    }
});


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
                res.json({ error: err });
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
            res.json({ error: err });
        }
    });
