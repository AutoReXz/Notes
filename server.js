import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { initModels } from './models/index.js';
import noteRoutes from './routes/noteRoutes.js';
import migrateCategories from './utils/migrate-categories.js';
import { mysqlErrorMiddleware } from './utils/mysql-error-handler.js';

// Load environment variables
dotenv.config();

// Get __dirname equivalent in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Body parsing middleware with increased logging
app.use(cors());
app.use(express.json({
    verify: (req, res, buf) => {
        try {
            JSON.parse(buf);
        } catch (e) {
            console.error('Invalid JSON:', e.message);
            throw new Error('Invalid JSON');
        }
        
        // Log request body for debugging
        if (req.method === 'POST' || req.method === 'PUT') {
            console.log('Request body:', JSON.parse(buf.toString()));
        }
    }
}));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api', noteRoutes);

// Route all other requests to index.html (for SPA functionality)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// MySQL error handling middleware - place this AFTER routes
app.use(mysqlErrorMiddleware);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ error: err.message });
});

// Start server
const startServer = async () => {
    try {
        // Initialize models (sync with MySQL database)
        await initModels();
        console.log('MySQL database models initialized');
        
        // Run migration to update notes without categories
        await migrateCategories();
        
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
            console.log(`Connected to MySQL database on ${process.env.DB_HOST}`);
        });
    } catch (error) {
        console.error('Unable to start the server:', error);
        process.exit(1);
    }
};

startServer();
