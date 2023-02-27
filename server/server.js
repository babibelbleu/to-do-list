const express = require('express');
const tasksRoutes = require('./routes/tasks');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();


// Middleware
app.use(express.json()); // Permet de parser le body des requêtes en JSON
app.use((req, res, next) => {
    console.log('Request URL: ' + req.url + ' with method ' + req.method);
    next();
});

// Toutes les routes commençant par /api/tasks seront gérées par le fichier tasks.js
app.use('/api/tasks', tasksRoutes);

// avoid deprecation warning
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfuly connected to database !');
        app.listen(process.env.PORT || 4000, () => {
            console.log('Server started on port ' + (process.env.PORT || 4000));
        });
    })
    .catch(err => console.log('Error while connecting to database with error : ' + err));