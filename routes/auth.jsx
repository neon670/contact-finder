const express = require('express');
const router = express.Router();

//end point GET api/users
router.get('/', (req, res) => {
	res.send('get a logged in user');
});


router.get('/', (req, res) => {
	res.send('log in user');
});

module.exports = router;