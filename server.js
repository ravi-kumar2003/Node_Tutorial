const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body

const PORT = process.env.PORT||3000;

app.get('/', function (req, res) {
    res.send('Welcome to our Hotel');
})

// Import the router files
const personRoutes = require('./Routes/personRoutes');
const menuItemRoutes = require('./Routes/menuItemRoutes');

// Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);
  
app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})
