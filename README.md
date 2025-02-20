# Notes Web Service

This is a web service for managing notes, built using Express, CORS, and Sequelize with MySQL (XAMPP).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Setup](#database-setup)
- [Project Structure](#project-structure)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/notes-web-service.git
    cd notes-web-service
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Ensure you have MySQL running (e.g., using XAMPP) and create the database as described in the [Database Setup](#database-setup) section.

## Usage

1. Start the server:
    ```bash
    node app.js
    ```

2. The server will be running on `http://localhost:3000`.

## API Endpoints

- `GET /api/notes` - Retrieve all notes
- `GET /api/notes/:id` - Retrieve a note by ID
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note by ID
- `DELETE /api/notes/:id` - Delete a note by ID

## Database Setup

Run the following SQL script to create the `notes_db` database and the `Notes` table:

```sql
CREATE DATABASE IF NOT EXISTS notes_db;

USE notes_db;

CREATE TABLE IF NOT EXISTS Notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Project Structure

```
/C:/Nitro/Cloud Computing/notes
|-- config
|   |-- database.js
|-- controllers
|   |-- noteController.js
|-- models
|   |-- index.js
|   |-- note.js
|-- routes
|   |-- noteRoutes.js
|-- app.js
|-- package.json
|-- README.md
```

- **config/database.js**: Database configuration.
- **controllers/noteController.js**: Logic for handling notes.
- **models/index.js**: Model initialization.
- **models/note.js**: Note model definition.
- **routes/noteRoutes.js**: Routes for note endpoints.
- **app.js**: Main application file.
- **package.json**: Project metadata and dependencies.
- **README.md**: Project documentation.

## License

This project is licensed under the MIT License.