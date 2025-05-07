import express from 'express';

const app = express();

app.get('/', function(req, res){
    res.send('Hello Server');
})

app.listen(5000, ()=> {
    console.log('convinio server running on: http://localhost:5000');
});