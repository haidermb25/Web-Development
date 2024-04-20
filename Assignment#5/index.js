const express = require('express');
const mongoose = require('mongoose');

const employeeRoute=require('./routes/employessRoutes')

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/UserAuthentication', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Database connection successful!");
})
.catch((error) => {
    console.log("Error connecting to database:", error);
});

const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


app.use('/employee',employeeRoute)