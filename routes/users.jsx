const express = require('express');
const router = express.Router();

//end point POST api/users
router.post('/', (req, res) => {
	res.send('Register a user');
});

module.exports = router;