var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;

var app  = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.set('views','./app/public/views');

app.use(express.static('./app/public'));


app.get('/home', function(req,res){
        res.render('home');
});

app.get('/historias', function(req,res){
        res.render('historias');
});

app.get('/faleconosco', function(req,res){
    res.render('faleconosco');
});

app.get('/beneficios', function(req,res){
    res.render('beneficios');
});

app.get('/medicamentos', function(req,res){
    res.render('medicamentos');
});




app.listen(port, function(){
    console.log('conectado na porta 5000');
});

