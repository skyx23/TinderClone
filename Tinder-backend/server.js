import express from 'express';
import mongoose from 'mongoose';
import cards from './dbcards.js';
import cors from 'cors';


// GmdroeUUSowRCt2G
const app = express()

const port = process.env.PORT||3000
const conncetion_url = 'mongodb+srv://admin:GmdroeUUSowRCt2G@cluster0.nqfo8.mongodb.net/tinderdb?retryWrites=true&w=majority'

//connecting to data base
mongoose.connect(conncetion_url,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology: true,
})

// middleware
app.use(express.json());
app.use(cors());

//api end points or routes
app.get('/',(req,res)=>{
    res.send('Working');
    res.status(200);
})

app.post('/tinder/card',(req,res)=> {
        const dbcards = req.body;

        cards.create( dbcards,(err,data)=>{
            if (err) {
                res.status(501).send(err);
            } else {
                res.status(201).send(data);
            }
        })
})

app.get('/tinder/card',(req,res)=> {

    cards.find((err,data)=>{
        if (err) {
            res.status(501).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})
 //listener
app.listen(port, ()=> {
    console.log(`listening on ${port}`);
})
