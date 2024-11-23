require('dotenv').config()
const express = require('express')
const { ConnectDB } = require("./src/config/db.config")
const authRoutes = require("./src/routes/auth.routes")

// Initialize Express app
const app = express();


// ********  serve the static file from the 'public' directory *********//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//  *****   Database Connection   *******//
ConnectDB();







app.get('/', (req, res) => {
    res.redirect('/register');
});

// ********  Route Setup ***********//
app.use('/', authRoutes);


//*****   404 Error Handling   *******/ 
app.use((req, res) => {
    res.status(404).send("Page not found")
})



const PORT = process.env.PORT || 5000
app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
    }
    console.log(`Server running on port http://localhost:${PORT}`)
})