const fs = require('fs');
const path = require("path");
const testRouter = require('express').Router()
const test = require('../controller/testctrl')
testRouter.get('/',test.getTest)
testRouter.post('/',test.postTest)
testRouter.put('/:id',test.putTest)
testRouter.delete('/:id',test.deletFunc)

module.exports = testRouter;