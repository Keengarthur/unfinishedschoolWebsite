const Students = require('./../models/models')
// const bodyPaser = require('body-parser')

const getStudentInfo = async(req,res)=>{
    const student =await Students.find({})
    res.json({student})
    console.log('working')
}

const createStudentInfo = async(req,res)=>{
    // const {name,subjects} = req.body
    const student = await Students.create({name:req.body.name
        ,subjects:req.body.subjects,class:req.body.class})
    res.json({student})
    console.log('watching...')
}
const getStudentInfoWithId = async(req,res)=>{
    const {classes} = req.params
    const student = await Students.find({class:classes})
    res.json({student})
    console.log(req.params)
}

const getIndividualStudent =(req,res)=>{
    res.json({name:'arthur'})
}
const editStudentInfo =(req,res)=>{

    res.json({name:'arthur'})
}
const deleteStudentInfo = async(req,res)=>{
    const {classes} = req.params
    const student = await Students.findOneAndDelete({class:classes})
    res.json({student})
}


module.exports = {
getStudentInfo,
createStudentInfo,
getStudentInfoWithId,
editStudentInfo,
deleteStudentInfo,getIndividualStudent
}