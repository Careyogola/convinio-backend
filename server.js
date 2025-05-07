import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', function(req, res){
    res.send('Hello Server');
})
const port = process.env.PORT || 5000 ;

app.listen(port, ()=> {
    console.log(`convinio server running on: http://localhost:${port}`);
});