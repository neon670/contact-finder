const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

//connect db
connectDB();

const app = express();

//middleware
app.use(express.json({ extended: false }));





//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const port = process.env.PORT || 5000;
app.listen(port, error => {
	if(error) throw error;
	console.log('server running on port ' + port);
});

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}