// import express
var express = require('express');
const { connection}=require('mongoose');
require('./connection');
const user=require('./model/user');

//initialization

var app=express();


//middleware
app.use(express.json());

//api
app.get('/add',(req,res)=>{
    res.send("hello");
})

app.get('/login',(req,res)=>{
    res.send("logged in successfully")
})

// to add data to db
app.post('/add',(req,res)=>{
    try {
        console.log(req.body);
        user(req.body).save();
        res.send({message:"data added successfully!!"})
    } catch (error) {
        console.log(error)
    }
    
})
//to get data from db
app.get('/view',async(req,res)=>{
    try {
        const data = await user.find();
        res.send(data);
    } catch (error) {
        console.log(error)
    }
})

//to delete any user
app.delete('/remove/:id',async(req,res)=>{
    try {
        console.log(req.params.id);
        await user.findByIdAndDelete(req.params.id)
        res.send({message:"deleted"})
    } catch (error) {
        console.log(error) 
    }
    
})


app.put('/edit/:id',async(req,res)=>{
    try {
        var data = await user.findByIdAndUpdate(req.params.id, req.body);
        res.send({message:'updated successfully',data})
    } catch (error) {
        console.log(error) 
    }
})

//port allocation
app.listen(3000,()=>{
    console.log("port is up and running")
})