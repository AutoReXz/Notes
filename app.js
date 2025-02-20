import express from 'express';
import cors from 'cors';
import { initModels } from './models/index.js';
import noteRoutes from './routes/noteRoutes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api', noteRoutes);

const startServer = async () => {
    try {
        await initModels();
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to start the server:', error);
    }
};

startServer();
//sdfsfd
