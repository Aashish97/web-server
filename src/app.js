const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('<h1>Weather app</h1>');
});

app.get('/help', (req, res) => {
    res.send({
        name: 'Doraemon',
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