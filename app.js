const express = require('express');
const hp = require('./data.json');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200);
    res.json({
        hola: 'mundo con un cambio'
    });
});

app.post('/', (req, res) => {
    const data = req.body;
    console.log(data);
    res.json({
        msj: `Hola ${data.user}`,
        email: data.email,
    })
});

app.get('/hp/characters', (req, res) => {
    const { characters } = hp;
    const { name } = req.query;
    const char = characters.find((e) => name === e.name);
    if(!char){
        res.status(404);
        res.json({msj: "Character not found"});
    }
    res.json(char)
});


app.get('/hp/books/:id', (req, res) => {
    const {id} = req.params;
    const {books} = hp;
    const result = books.find((e) => e.id === id);
    res.json(result);
});



app.listen(3000, () => {
    console.log('Express server started at port 3000');
});
