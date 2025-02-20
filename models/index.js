import sequelize from '../config/database.js';
import Note from './note.js';

const initModels = async () => {
    await sequelize.sync();
};

export {
    initModels,
    Note
};
