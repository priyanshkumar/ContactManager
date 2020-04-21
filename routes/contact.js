const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const Contact = require('../models/Contact')
// @route GET contacts
// @desc Get all contacts from db    
// @access Public
router.get('/', async (req,res)=>{
    try{
        const contact = await Contact.find().sort({firstName: -1});
        res.json(contact);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    res.send(req.body);
});

// @route POST contacts
// @desc Add new contact  
// @access Public
router.post('/', [
    check('firstName', 'Please add name')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
  ], async (req ,res)=>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const { firstName, lastName, email, phone} = req.body;

    try {
      const newContact = new Contact({
        firstName,
        lastName,
        email,
        phone,
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }

});

// @route PUT contacts/:id
// @desc Get all contacts from db    
// @access Public
router.put('/', async (req,res)=>{
    const { firstName, lastName, email, phone} = req.body;

    const contactFields = {};

  if (firstName) contactFields.firstName = firstName;
  if (lastName) contactFields.lastName = lastName;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({ msg: 'Contact not found' });

    contact = await Contact.findByIdAndUpdate(
        req.params.id,
        {
          $set: contactFields
        },
        { new: true }
      );
      res.json(contact);
    } 
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route DELETE contacts/:id
// @desc Get all contacts from db    
// @access Public
router.delete('/', async (req,res)=>{
    try {
        let contact = await Contact.findById(req.params.id);
    
        if (!contact) return res.status(404).json({ msg: 'Contact not found' });
        await Contact.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Contact removed' });
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
});
module.exports = router;