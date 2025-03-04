# Notes App

A feature-rich notes application with a modern UI built using jQuery, AJAX, and Tailwind CSS.

## Features

- Create, read, update, and delete notes
- Categorize notes (Work, Personal, Study)
- Search functionality
- Responsive design with sidebar navigation
- Grid and list view options
- Filter notes by category
- Modern UI with animations and notifications

## Screenshots

![Notes App Screenshot](https://via.placeholder.com/800x450.png?text=Notes+App+Screenshot)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository or extract the files to your preferred location

2. Navigate to the project directory
```bash
cd "C:/Nitro/Cloud Computing/ngeprompt doang/Notes"
```

3. Install dependencies
```bash
npm install
```

4. Start the server
```bash
npm start
```

5. Open your browser and go to http://localhost:3000

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
│   └── database.js      # Database configuration
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
├── server.js            # Express server setup
└── package.json         # Project dependencies
```

## Built With

- [Express](https://expressjs.com/) - Web framework for Node.js
- [Sequelize](https://sequelize.org/) - Promise-based ORM for Node.js
- [jQuery](https://jquery.com/) - JavaScript library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Font Awesome](https://fontawesome.com/) - Icon library

## License

This project is licensed under the MIT License