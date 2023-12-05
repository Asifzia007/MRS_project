const express = require('express');
require('./config/db');
const Assignment = require('./models/assignmentModel');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended : false}));

app.get('/', async (req,res) => {
    res.send("Thanks for assignment.")
})

// code for assignment functionality
app.post('/assign', async (req,res) => {
    try{
        const assignmentDetails = new Assignment({
            Code : req.body.code,
            Assignment : req.body.assignment,
            From: req.body.from,
            To: req.body.to,
            Given_date: req.body.given_date,
            Deadline_date: req.body.deadline_date,
        });
        const postAssignment = await assignmentDetails.save();
        res.status(201).send(postAssignment);
} catch(error){
    res.status(400).send(error + "Here is the error");
}
})

app.listen(port,() => {
    console.log(`connection is setup at ${port}`);
})