const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;



const places = require('./data/places.json');
const hotels = require('./data/data.json');

app.use(cors());


app.get('/', (req, res) => {
    res.send('Travel is running');
})

app.get('/places', (req, res) => {
    res.send(places);
})

app.get('/hotels', (req, res) => {
    res.send(hotels);
})

app.get('/places/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const placeHotels = hotels.filter(hotel => parseInt(hotel.placeId) === id);
    res.send(placeHotels)
})

app.get('/hotel/:id', (req, res) => {
    const id = req.params.id;

    const hotel = hotels.find(hotel => hotel._id === id);
    res.send(hotel);
})


app.listen(port, () => {
    console.log(`travel API is running on port: ${port}`)
})
