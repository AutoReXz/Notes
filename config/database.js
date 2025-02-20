import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('notes_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;
