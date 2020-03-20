const path = require('path');

const express = require('express');

const app = express();

const publicDirectoryPath = path.join(__dirname, './../public')

app.use(express.static(publicDirectoryPath));

app.get('/help', (req, res) => {
    res.send({
        name: 'Aashish',
        age: 22
     });
})

app.get('/about', (req, res) => {
    res.send('<h3>Stay happy!!! Stay jolly jolly :)</h3>');
})

app.get('/weather', (req,res) => {
    res.send({
        address: 'Lalitpur',
        temperature: 27.2,
        rainProbability: 48
    });
})

app.listen(3000, () => {
    console.log("sever is listening at port 3000");
});