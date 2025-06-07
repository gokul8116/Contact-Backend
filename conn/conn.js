const mongoose = require("mongoose");

const conn = async() => {
    try{
    await mongoose.connect("mongodb+srv://gokul:root@cluster0.ppchob6.mongodb.net/contact?retryWrites=true&w=majority&appName=Cluster0").then(
            () => {
            console.log("Connected");
        }, (error) => {
            console.log(error);
        })
    } catch (error){
        console.log(error);
    }
};

conn();
           