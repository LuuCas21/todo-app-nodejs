const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const cors = require('cors');

const app = express();

// IMPORTS
const router = require('./routes/route');
const connectDB = require('./database/DB');

// APP CONFIGURATION
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(cors());

const DB = async () => {
    console.log('Connected to DB');
    await connectDB();
};

DB().catch(err => console.log(err));

app.use('/', router);

app.listen(4000, () => {
    console.log('Server is running on port 4000')
});

