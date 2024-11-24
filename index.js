const express = require('express')
const dotenv = require('dotenv');
const { ConnectDB } = require("./src/config/db.config")
const authRoutes = require("./src/routes/auth.routes")

// Initialize Express app
const app = express();


// Check the environment: development or production
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';

dotenv.config({ path: envFile });


// ********  JSON Data parsed *********//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//  *****   Database Connection   *******//
ConnectDB();


app.get('/', (req, res) => {
    res.redirect('/register');
});

// ********  Route Setup ***********//
app.use('/api/auth', authRoutes);


//*****   404 Error Handling   *******/ 
app.use((req, res) => {
    res.status(404).send("Page not found")
})



const PORT = process.env.PORT || 5000
app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
    }
    // console.log(`Server running on port http://localhost:${PORT}`)
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
})