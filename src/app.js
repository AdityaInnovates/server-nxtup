const express = require('express');
const app = express();
require('dotenv').config();
const db = require('../config/db')

app.use(express.json());


app.get('/', (req, res) => {
    res.send("Hello!");
});


const clubRoutes = require('./routes/clubRoutes'); 
const eventsRoutes = require('./routes/eventsRoutes');

app.use('/clubs', clubRoutes);
app.use('/events', eventsRoutes);


const PORT = process.env.PORT || 5555;


app.listen(PORT, () => {
    console.log(`Running at ${PORT}`);
});
