const express = require('express');
const morgan = require('morgan');
const { addition, multiply, modulus } = require('./operations');
const { fibo } = require('./fibonacci');

const app = express();

const PORT = 3500;

app.use(morgan('dev'));

app.use(express.json());


app.get('/', (req, res) => {
    res.json(addition(3, 5));
});

app.get('/multiply', (req, res) => {
    res.json(multiply(3, 5));
});

app.get('/modulus', (req, res) => {
    res.json(modulus(12, 4));
});

app.get('/fib', (req, res) => {
    res.json(fibo(10));
});

app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));