import sequelize from '../config/database.js';
import Note from './note.js';

/**
 * Initialize models and sync them with the database
 */
const initModels = async () => {
    try {
        await sequelize.sync({ alter: true }); // Use alter:true to make changes without dropping tables
        console.log('Database models synchronized');
    } catch (error) {
        console.error('Error syncing database models:', error);
        throw error;
    }
};

export {
    initModels,
    Note
};
