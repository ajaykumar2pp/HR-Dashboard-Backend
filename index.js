const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');
const { ConnectDB } = require("./src/config/db.config")
const authRoutes = require("./src/routes/auth.routes")

// Initialize Express app
const app = express();

//****** Set up environment variables by default development mode ******/
const NODE_ENV = process.env.NODE_ENV || 'development';

// Check the environment: development or production
const envFile = NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: envFile });

// console.log(`Environment: ${NODE_ENV}`);

// ********  Middleware  *********//
app.use(cors());  // Enable CORS for cross-origin requests
app.use(express.json());  // Parse JSON bodies for incoming requests
app.use(express.urlencoded({ extended: false }));   // Parse URL-encoded bodies



//  ********  Connect to the Database  *******//
ConnectDB().catch((err) => {
    console.error("Failed to connect to the database :", err.message);
});


app.get('/', (req, res) => {
    res.redirect('/register');
});

// ********  Routes Setup ***********//
app.use('/api/auth', authRoutes);


//*****   404 Error Handling   *******/ 
app.use((req, res) => {
    res.status(404).json({ error: "Page not found" });
})


// ***** Global Error Handler ***** //
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});


// *********   Server Listener   **********//
const PORT = process.env.PORT || 5000
app.listen(PORT, (err) => {
    if (err) {
        console.error('❌ Failed to start server:', err.message);
    }
    else {
        // console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on http://localhost:${PORT}`);
        console.log(`🚀 Server running in ${NODE_ENV} mode on http://localhost:${PORT}`);
    }
})