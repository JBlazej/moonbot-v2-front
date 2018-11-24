'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var htmlPath = _path2.default.join(__dirname, '../public/front/', 'index.html');
//import requireDir from 'require-dir'

var css = _path2.default.join(__dirname, '../public/front/', 'app.css');

// Source https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/#usinges7asyncawait
// const wrap = fn => (...args) => fn(...args).catch(args[2])

var router = (0, _express.Router)();

// HOME
router.get('/', function (req, res) {
    res.status(200).sendFile(htmlPath);
});

router.get('/css', function (req, res) {
    res.status(200).sendFile(css);
});

exports.default = router;
//# sourceMappingURL=router.js.map