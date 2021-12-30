const express = require('express')
const {getStudentInfo,
    createStudentInfo,
    getStudentInfoWithId,
    editStudentInfo,
    deleteStudentInfo} =require('./../controllers/profile')
const router = express.Router()

router.route('/').get(getStudentInfo).post(createStudentInfo)

router.route('/:classes').get(getStudentInfoWithId).patch(editStudentInfo).delete(deleteStudentInfo)



module.exports = router