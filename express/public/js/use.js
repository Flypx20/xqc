const express = require('express');
var bookRouter = express.Router();

bookRouter
    .get('/',function (req, res) {
        res.send(' user get data....1');
    })
    .put('/',function (req, res) {
       res.send('user post data....');
    })
    .post('/',function (req, res) {
        res.send('user put data....');
    })
    .delete('/',function (req, res) {
       res.send('user delete data....');
    });

module.exports = bookRouter;