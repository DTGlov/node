const express = require('express');
const morgan = require('morgan');
const { addition, multiply, modulus } = require('./operations');
const { fibo } = require('./fibonacci');

const app = express();

const PORT = 3500;

app.use(morgan('dev'));

app.use(express.json());


app.post('/add', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    res.json(addition(num1, num2));
});

app.post('/multiply', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    res.json(multiply(num1, num2));
});

app.post('/modulus', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    res.json(modulus(num1, num2));
});

app.post('/fib', (req, res) => {
    const number = req.body.number;
    res.json(fibo(number));
});

app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));