'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Start Express server.
 */
var app = (0, _express2.default)();

/**
 * Setup Express server.
 */
// SSL

app.use('/public', _express2.default.static(__dirname + '../public'));
// BODY
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, '../public', 'favicon.ico')));
// ROUTER
app.use(_router2.default);
// PORT
app.set('port', process.env.PORT || 3040);

/**
 * Run Express server.
 */
app.listen(app.get("port"), function () {
    console.log("  App is running at http://localhost:%d in %s mode", app.get("port"), app.get("env"));
    console.log("  Press CMD-C to stop\n");
});

// HANDLINGS ERRORS
var shuttingDown = false;

app.use(function (req, res, next) {
    if (!shuttingDown) return next();

    res.setHeader('Connection', 'close');
    var err = new Error('Server is in the process of restarting');
    err.status = 503;
    next(err);
});

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log(err);
    res.send({ 'error': err.message });
    if (app.get('env') === 'development') {
        console.log(err);
    }
});

exports.default = app;
//# sourceMappingURL=app.js.map