const express = require('express');
const router = express.Router();

// @route GET contacts
// @desc Get all contacts from db    
// @access Public
router.get('/', (req,res)=>{
    res.send("Reach get");
});

// @route POST contacts
// @desc Add new contact  
// @access Public
router.post('/', (req,res)=>{
    res.send("Reach add");
});

// @route PUT contacts/:id
// @desc Get all contacts from db    
// @access Public
router.put('/', (req,res)=>{
    res.send("Reach put");
});

// @route DELETE contacts/:id
// @desc Get all contacts from db    
// @access Public
router.delete('/', (req,res)=>{
    res.send("Reach put");
});
module.exports = router;