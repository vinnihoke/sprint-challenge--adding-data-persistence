const express = require('express');

const Resources = require('./resources-model.js');

const router = express.Router();

router.get('/:projectId', async (req, res) => {
    try {
        const item = await Resources.findResourcesById(req.params.projectId);
        if(!!item){
            res.status(200).json({ message: "Successfully ...", item });  
        } else {
            res.status(404).json({ message: "No Resources for user"});
        }
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const item = await Resources.add(req.body);
        if(!!item){
            res.status(200).json({ message: "Successfully ...", item });  
        } else {
            res.status(404).json({ message: "Resource information required"});
        }
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});

router.put('/:r_id', async (req, res) => {
    try {
        const item = await Resources.update(req.params.r_id, req.body);
        if(!!item){
            res.status(200).json({ message: "Successfully ...", item });  
        } else {
            res.status(404).json({ message: "Updated resource information required"});
        }
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});

router.delete('/:r_id', async (req, res) => {
    try {
        const item = await Resources.delete(req.params.r_id);
        if(!!item){
            res.status(200).json({ message: "Successfully ...", item });  
        } else {
            res.status(404).json({ message: "Resource does not exist"});
        }
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});



module.exports = router