const express = require('express');

const Tasks = require('./task-model.js');

const router = express.Router();
router.get('/', async (req, res) => {
    try {
        const item = await Tasks.findById(req.params.id);
        if(!!item){
            res.status(200).json({ message: "Successfully ...", item });    
        } else {
            res.status(404).json({ message: "User", item });    
        }
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});

module.exports = router