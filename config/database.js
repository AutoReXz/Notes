import { Sequelize } from 'sequelize';

// Create Sequelize instance with MySQL instead of SQLite
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',  // Your MySQL username (default is 'root' for XAMPP/phpMyAdmin)
    password: '',      // Your MySQL password (default is empty for XAMPP)
    database: 'notes_app',
    logging: console.log // Enable logging to see SQL queries
});

// Test the connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

export default sequelize;
