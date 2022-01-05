const express = require('express');
const morgan = require('morgan');
const { addition, multiply, modulus } = require('./operations');
const { fibo } = require('./fibonacci');

const app = express();

const PORT = 3500;

app.use(morgan('dev'));

app.use(express.json());


app.post('/add', (req, res) => {
    return res.json(addition(req.body.num1, req.body.num2));
});

app.post('/multiply', (req, res) => {
    return res.json(multiply(req.body.num1, req.body.num2));
});

app.post('/modulus', (req, res) => {
    return res.json(modulus(req.body.num1, req.body.num2));
});

app.post('/fib', (req, res) => {
    return res.json(fibo(req.body.number));
});

app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));