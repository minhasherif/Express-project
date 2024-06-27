//import  mongoose
const mongoose= require('mongoose');

mongoose.connect("mongodb+srv://minhasherif4:minhanimna@cluster0.4c4ygga.mongodb.net/db1?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db")
})
.catch((error)=>{
    console.log(error);
})