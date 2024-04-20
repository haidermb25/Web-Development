const { response } = require('express')
const Employee=require('../models/employeeModels')

//show the list of all the students

const index=(req,res,next)=>{
    Employee.find().
    then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:'An error has been occured'
        })
    })
}

//show the element by use of id

const show=(req,res,next)=>{
    const employeeID=req.body.employeeID
    Employee.findById(employeeID)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:'An error has been occured'
        })
    })    
}


//Added a new data in mongodb

const add=(req,res,next)=>{
    let employee=new Employee(
        {
            name: req.body.name,
            email:req.body.email,
            hobby:req.body.hobby
        }
    )
    employee.save()
    .then(response=>{
        res.json({
            messsage:'Data Added successfully'
        })
    })
    .catch(error=>[
        res.json({
            message:'An error has been occured'
        })
    ])
}


//Function to update the employee id

const update=(req,res,next)=>{
        let employeeID=req.body.employeeID
        let updateData={
            name: req.body.name,
            email:req.body.email,
            hobby:req.body.email           
        }
        Employee.findByIdAndUpdate(employeeID,{$set:updateData})
        .then(response=>{
            res.json({
                message:"Data has been updated successfully"
            })
        })
        .catch(error=>{
            res.json({
                message:"There is some error in updation"
            })
        })
}

//Function to delete the employeee

const Delete=(req,res,next)=>{
    let employeeID=req.body.employeeID
    Employee.findByIdAndDelete(employeeID)
    .then(()=>{
        res.json({
            message:"Data has been deleted successfully"
        })
    })
    .catch(()=>{
        res.json({
            message:"There is some problem in deletion"
        })
    })
}


module.exports={
    index,show,add,update,Delete
}