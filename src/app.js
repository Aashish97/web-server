const path = require('path');

const express = require('express');

const app = express();

const publicDirectoryPath = path.join(__dirname, './../public')

//sets the view engine value for a given express setting
app.set('view engine', 'hbs');

//load static contents from the given directory path
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    //renders the views whose name matches the string
    res.render('index', {
        title: "Weather",
        name: 'Aashish'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About",
        name: 'Aashish'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: "This is a help message"
    })
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