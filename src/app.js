const express = require('express');
const app = express();
require('dotenv').config();


app.use(express.json());


app.get('/', (req, res) => {
    res.send("Hello!");
});


const clubRoutes = require('./controllers/clubController');
const eventsRoutes = require('./controllers/eventsController');


app.use('/clubs', clubRoutes);
app.use('/events', eventsRoutes);


const PORT = process.env.PORT || 5555;


app.listen(PORT, () => {
    console.log(`Running at ${PORT}`);
});
