const express = require('express')
const hbs = require('hbs');

const app = express()
const port = 8080;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Serve static content
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Sergio Mir',
        title: 'Node Course'
    });
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`The app is listening at http://localhost:${port}`);
});