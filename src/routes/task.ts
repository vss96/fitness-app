import express = require("express");

export const taskRouter = express.Router();

taskRouter.get('/', (req, res) => {
    const sampleTask = {
        id: 1,
        name: 'Buying clothes',
        labels: [{id: 1, name: 'personal'}],
        currentStatus: 'Doing'
    }
    res.status(200).send(sampleTask);
})
