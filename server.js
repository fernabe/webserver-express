const express = require('express')
const app = express()

const hbs = require('hbs')
require('./hbs/helpers.js')

const port = process.env.PORT || 3000;

app.use( express.static(__dirname + '/public'))

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

hbs.registerHelper('getAnio', ()=> {
    return new Date().getFullYear()
});

hbs.registerHelper('capitalizar', (text) => {
    let palabras = text.split(' ');
    palabras.forEach( (palabra, index )=> {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});

app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'fernando barrabes',
    })
});
app.get('/about', function (req, res) {
    res.render('about',{
        nombre: 'Fernando barrabes',
    })
});

 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
});