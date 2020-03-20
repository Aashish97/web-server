const path = require('path');

const express = require('express');

const app = express();

const publicDirectoryPath = path.join(__dirname, './../public')

app.use(express.static(publicDirectoryPath));

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