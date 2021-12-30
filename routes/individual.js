const {getIndividualStudent} = require('./../controllers/profile')
const express = require('express')
const individual = express.Router()

individual.route('/').post(getIndividualStudent)

module.exports= individual