const express = require('express');

const Tasks = require('./task-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const item = await Tasks.find();
        res.status(200).json({ message: "Successfully ...", item });    
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});

module.exports = router