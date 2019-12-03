const express = require('express');

const Projects = require('./project-model.js');
const Resources = require('./resources-model.js');
const Tasks = require('./task-model.js');

const router = express.Router();

// Operational
router.get('/', async (req, res) => {
    try {
        const item = await Projects.find();
        res.status(200).json(item);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Operational
router.get('/:id', async (req, res) => {
    try {
        const item = await Projects.findById(req.params.id);
        const resources = await Resources.findResourcesById(req.params.id)
        const tasks = await Tasks.findTasksById(req.params.id)
        item.resources = resources;
        item.tasks = tasks
        if(item){
            res.status(200).json({ item });    
        } else {
            res.status(404).json({ message: "User does not exist"});    
        }
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});

// Operational
router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const item = await Projects.add(req.body);
        if(item){
            res.status(200).json({ message: "Successfully ...", item });    
        } else {
            res.status(404).json({ message: "Project info required"});    
        }
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});

// ! Add extra error handling to let the user know as much as possible 

// Operational
router.put('/:id', async (req, res) => {
    try {
        console.log(req.body)
        const item = await Projects.update(req.params.id, req.body);
        if(item){
            res.status(200).json({ message: "Successfully ...", item });    
        } else {
            res.status(404).json({ message: "Updated info required"});    
        }
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});

// Operational
router.delete('/:id', async (req, res) => {
    try {
        const item = await Projects.remove(req.params.id);
        if(item){
            res.status(200).json({ message: "Successfully ...", item });    
        } else {
            res.status(404).json({ message: "Updated info required"});    
        }
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});

module.exports = router