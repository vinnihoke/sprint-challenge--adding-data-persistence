const express = require('express');

const Tasks = require('./task-model.js');

const router = express.Router();

// Operational
router.get('/:projectId', async (req, res) => {
    try {
        const item = await Tasks.findTasksById(req.params.projectId);
        if(!!item){
            res.status(200).json({ message: "Successfully ...", item });
        } else {
            res.status(404).json({ message: "No tasks for user"});
        }
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});

// Operational
router.post('/:projectId/', async (req, res) => {
    try {
        const item = await Tasks.add(req.body);
        if(!!item){
            res.status(200).json({ message: "Successfully ...", item });
        } else {
            res.status(404).json({ message: "Task information required"});
        }
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});

// Operational
router.put('/:projectId/:t_id', async (req, res) => {
    try {
        const item = await Tasks.update(req.params.t_id, req.body);
        if(!!item){
            res.status(200).json({ message: "Successfully ...", item });  
        } else {
            res.status(404).json({ message: "Updated task information required"});
        }
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});

// Operational
router.delete('/:projectId/:t_id', async (req, res) => {
    try {
        const item = await Tasks.remove(req.params.t_id);
        if(!!item){
            res.status(200).json({ message: "Successfully ...", item });  
        } else {
            res.status(404).json({ message: "Task does not exist"});
        }
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});



module.exports = router