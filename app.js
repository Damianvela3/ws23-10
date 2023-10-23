let express = require('express');
let app = express();

//html erabiltzeko midleware
app.use(express.static('public')) 
//formularioa tratatzeko midleware
app.use(express.urlencoded({ extended: false })); 


app.listen( 3000, function() {
    console.log("Zerbitzaria 3000 portuan entzuten");
})

"Cannot GET /"
app.get("/", function(req, res) {
    res.send("Kaixo mundua!");
});

app.post('/bezeroa', function(req, res) {
    res.send(`Kaixo ${req.body.izena} ${req.body.abizena}`);
});

app.get('/bezeroa/:izena', function(req, res) {
    res.send("Bezeroaren izena: " + req.params.izena);
});

app.get('/bezeroa', function(req, res) {
    res.send("Bezeroaren izena: " + req.query.izena);
});