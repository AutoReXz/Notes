# Notes App

A feature-rich notes application with a modern UI built using jQuery, AJAX, and Tailwind CSS, connected to a MySQL database hosted on Google Cloud Platform.

## Features

- Create, read, update, and delete notes
- Categorize notes (Work, Personal, Study)
- Search functionality
- Responsive design with sidebar navigation
- Grid and list view options
- Filter notes by category
- Modern UI with animations and notifications
- Cloud-hosted MySQL database on GCP
- Environment variable configuration

## Screenshots

![Notes App Screenshot](https://via.placeholder.com/800x450.png?text=Notes+App+Screenshot)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- MySQL database (hosted on GCP)

### Installation

1. Clone the repository or extract the files to your preferred location

2. Navigate to the project directory
```bash
cd "C:/Nitro/Cloud Computing/Final Notes/Tugas4/Notes"
```

3. Install dependencies
```bash
npm install
```

4. Configure environment variables
   - Rename `.env.example` to `.env` (if needed)
   - Update database credentials and other configurations in the `.env` file

5. Start the server
```bash
npm start
```

6. For development with auto-restart:
```bash
npm run dev
```

7. Open your browser and go to http://localhost:3000

## API Endpoints

The application uses the following REST API endpoints:

- `GET /api/notes` - Get all notes
- `GET /api/notes/:id` - Get a specific note
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a specific note
- `DELETE /api/notes/:id` - Delete a specific note
- `GET /api/notes/category/:category` - Get notes by category

## Project Structure

```
/Notes
├── config/
│   └── database.js      # Database configuration for GCP MySQL
├── controllers/
│   └── noteController.js # Controller functions for notes
├── models/
│   ├── index.js         # Models initialization
│   └── note.js          # Note model definition
├── public/
│   ├── css/
│   │   └── style.css    # Custom CSS styles
│   ├── js/
│   │   └── script.js    # Frontend JavaScript
│   └── index.html       # Main HTML file
├── routes/
│   └── noteRoutes.js    # API routes
├── utils/
│   ├── migrate-categories.js   # Category migration utility
│   └── mysql-error-handler.js  # MySQL error handling utilities
├── .env                 # Environment configuration
├── app.js               # Simple Express setup
├── server.js            # Main Express server with advanced features
└── package.json         # Project dependencies
```

## Environment Variables

The application uses the following environment variables defined in `.env`:

```
# Database Configuration
DB_HOST=your-gcp-mysql-ip
DB_PORT=3306
DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=notes_app

# Server Configuration
PORT=3000
```

## Error Handling

The application includes comprehensive error handling:

- MySQL-specific error detection and friendly messages
- Middleware for handling database connection issues
- Detailed logging for debugging

## Built With

- [Express](https://expressjs.com/) - Web framework for Node.js
- [Sequelize](https://sequelize.org/) - Promise-based ORM for Node.js
- [MySQL](https://www.mysql.com/) - Relational database on Google Cloud Platform
- [jQuery](https://jquery.com/) - JavaScript library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Font Awesome](https://fontawesome.com/) - Icon library
- [dotenv](https://www.npmjs.com/package/dotenv) - Environment variable management

## License

This project is licensed under the MIT License