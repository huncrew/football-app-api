// app that lets you store your principles, then enter your current life challenge and area of life that it affects, and it delivers your most 
// poignent principle and suggests a decision for you.
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const principleRoutes = require('./routes/teams');
const authRoutes = require('./routes/auth');
const databaseConnect = require('./db/connect');
const pageNotFound = require('./middleware/not_found');
const errorHandlingMiddleware = require('./middleware/error_handling');
const sendEmail = require('./controllers/email');
const helmet = require('helmet');
require('dotenv').config() 

//middleware
app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(express.urlencoded({ extended: false }));
app.use(jsonParser);

// routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/football', principleRoutes);

app.get('/send', sendEmail);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/public', 'index.html'));
});

//middleware errors
app.use(pageNotFound);
app.use(errorHandlingMiddleware);

//security
app.use(helmet());

const start = async () => {
    try {
        const db = await databaseConnect(process.env.MONGO_URI);
        console.log('connection to Database Successful')
        app.listen(5000, () => {
            console.log('server open port 5000')
        })
    } catch (error) {
        console.log(error)
    }
}
start();

