const PORT = 4000;

const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const {connectDB} = require('./database/connect');
const {router} = require('./routers/router');

app.use(express.json());
app.use(morgan('tiny'));
app.use('/api/v1', router);

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        console.log('Connected to database');
        app.listen(PORT, () => {
            console.log(`server listening on port ${PORT}`);
        })
    }catch(err){
        console.log('Error connecting to database');
    }
}

start();