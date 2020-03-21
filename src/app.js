const path = require('path');

const express = require('express');
const hbs = require('hbs');

const geocode = require('./utils/geocode');
const forecast =require('./utils/forecast');

const app = express();

//Defines paths for express config
const publicDirectoryPath = path.join(__dirname, './../public');
const viewDirectoryPath = path.join(__dirname, './../templates/views');
const partialsPath = path.join(__dirname, './../templates/partials');

//Sets the view engine value for a given express setting
app.set('view engine', 'hbs');

//Set up views location. The default location is views and inorder to use template folder we should enable this
app.set('views', viewDirectoryPath);
hbs.registerPartials(partialsPath);

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
        title: 'About',
        name: 'Aashish'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Aashish',
        helpText: 'For any kind of help please contact @ itsmeasish98@gmail.com'
    })
})


app.get('/weather', (req,res) => {
    if(!req.query.address){
        return res.send({
           error: 'Please provide address!!!'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error){
            return res.send({ error });
        }
            
            
        forecast(latitude, longitude, (error, {weatherSummary, currentTemperature, rainProbability} = {}) => {
            if(error){
                return res.send({ error });
            }
            res.send({
                location,
                summary: weatherSummary,
                current_temperature: currentTemperature,
                rain_probability: rainProbability
            })
        });
    });
})

//displaying error for the url after help that mismatches
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Aashish',
        errorMessage: 'Help article not found.'
    })
})

//displaying own message for error
app.get('*', (req, res) => {
    res.render('404',{
        title: '404',
        errorMessage: 'Page Not Found !!!',
        name: 'Aashish'
    });
})

app.listen(3000, () => {
    console.log("sever is listening at port 3000");
});