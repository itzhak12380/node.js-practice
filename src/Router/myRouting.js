const fs = require('fs');
const path = require("path");
const testRouter = require('express').Router()
const test = require('../controller/testctrl')
const middleWareLogger = require('../middleware/middleware')
testRouter.get('/',test.getTest)
testRouter.post('/',test.postTest)
testRouter.put('/:id',test.putTest)
testRouter.delete('/:id',test.deletFunc)

module.exports = testRouter;


/*
const express = require("express");
const testRouter = express.Router();
const testCtrl = require('../routers/testRouter')
const middleWareLogger = require('./middleWare/middleWare');

testRouter.use(middleWareLogger);
testRouter.get('/',testCtrl.getTest);
testRouter.post('/',testCtrl.postTest);
testRouter.get("/:fname",testCtrl.getParamsTest);
testRouter.delete('/',testCtrl.deleteTest);
*/