import express from 'express';

console.log('hello from typescript!');

const app = express();

app.get('/', (req) => {
    console.log('req.query', req.query);
});

app.listen(3001, () => {
    console.log('started');
});
