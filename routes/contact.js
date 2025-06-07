const router = require("express").Router();
const contact = require("../models/contact");
router.post("/post", async (req, res) => {
    try{
        const {name, number, address, city, state, message} = req.body;
        const newContact = new contact({name, number, address, city, state, message});
        await newContact.save().then(() => {
            res.status(200).json({ message:"Data Saved" });
    }, () => {
        res.status(400).json({message: "Data Not Saved" });
    });
    }catch(error){
        res.status(400).json({message: "Technical Error Occured" });
    }
});

module.exports =  router;