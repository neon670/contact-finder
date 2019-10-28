const express = require('express');
const connectDB = require('./config/db');

//connect db
connectDB();

//middleware
// app.use(express.json({extended: false}));

const app = express();

app.get('/', (req, res) => res.json ({msg: 'welcome to the contact api'})
	);

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const port = process.env.PORT || 5000;
app.listen(port, error => {
	if(error) throw error;
	console.log('server running on port ' + port);
});