const express = require('express');
const router = express.Router();

//end point GET api/users
router.get('/', (req, res) => {
	res.send('Get contacts');
});

//end point POST api/users
router.post('/', (req, res) => {
	res.send('Add contacts');
});

//end point PUT api/users/:id
router.put('/:id', (req, res) => {
	res.send('Update contact');
});

//end point DELETE api/users/:id
router.delete('/:id', (req, res) => {
	res.send('Delete contact');
});

module.exports = router;