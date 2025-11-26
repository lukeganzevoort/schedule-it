# Schedule It - Rec Leagues

A lightweight, open-source web application that helps recreational sports leagues generate conflict-free game schedules. Built with the MEAN stack (MongoDB, Express, Angular, Node.js), this application streamlines the process of assigning games to fields, teams, and referees while ensuring fair play time distribution.

## [Live Demo](https://schedule-it-rec-leagues.netlify.app/)

View the live demo to see the application in action.
[Live Demo](https://schedule-it-rec-leagues.netlify.app/)

## 🎯 Purpose

Manual scheduling for recreational sports leagues is time-consuming and error-prone. This application automates the scheduling process, handling complex constraints like:

- Field availability and conflicts
- Referee assignments
- Team preferences and fairness
- Multi-league coordination
- Conflict detection and resolution

## ✨ Features

### Current Features

- **Modern Angular UI** - Built with Angular 21 and TailwindCSS for a responsive, intuitive interface
- **Schedule Builder** - Interactive schedule creation and management
- **User Management** - Create and manage users, teams, and roles
- **RESTful API** - Clean Express backend with TypeScript
- **MongoDB Integration** - Persistent data storage with Mongoose ODM

### Planned Features

- Multi-tenant architecture for multiple independent leagues
- Role-based access control (league admins, schedulers, coaches, players)
- Interactive calendar with drag-and-drop game editing
- Automatic schedule generation with fair distribution algorithms
- Conflict detection and validation
- Export to CSV and iCal formats

## 🛠️ Tech Stack

| Layer        | Technology                     | Purpose                                             |
| ------------ | ------------------------------ | --------------------------------------------------- |
| **Frontend** | Angular 21 + TailwindCSS       | Modern component-driven UI with responsive design   |
| **Backend**  | Node.js + Express + TypeScript | RESTful API with type safety                        |
| **Database** | MongoDB + Mongoose             | Document-based storage for flexible scheduling data |
| **DevOps**   | Docker                         | Containerized development environment               |

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20 or higher)
- **npm** (v10 or higher)
- **Docker** (for MongoDB)
- **Angular CLI** (v21)

```bash
# Install Angular CLI globally
npm install -g @angular/cli
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd schedule-it-rec-leagues
```

### 2. Set Up the Database

Start MongoDB using the provided Docker script:

```bash
./start-mongo.sh
```

This will:

- Start a MongoDB container on port 27017
- Create a `mongo-data` directory for persistent storage
- Run in the foreground (press Ctrl+C to stop)

### 3. Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/schedule-it-rec-leagues
NODE_ENV=development
```

Start the development server:

```bash
npm run dev
```

The API will be available at `http://localhost:3000`

### 4. Set Up the Frontend

```bash
cd client
npm install
```

Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:4200`

## 📁 Project Structure

```
schedule-it-rec-leagues/
├── client/                 # Angular frontend application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/    # UI components
│   │   │   │   ├── home/
│   │   │   │   ├── schedule-builder/
│   │   │   │   ├── user-form/
│   │   │   │   └── user-list/
│   │   │   ├── models/        # TypeScript interfaces
│   │   │   ├── services/      # API services
│   │   │   └── app.routes.ts  # Routing configuration
│   │   └── index.html
│   ├── package.json
│   └── README.md
│
├── server/                # Express backend API
│   ├── src/
│   │   ├── config/           # Database configuration
│   │   ├── controllers/      # Request handlers
│   │   ├── models/           # MongoDB schemas
│   │   ├── routes/           # API routes
│   │   └── server.ts         # Entry point
│   ├── package.json
│   └── tsconfig.json
│
├── mongo-data/           # MongoDB data directory (git-ignored)
├── context.md            # Project context and vision
├── start-mongo.sh        # MongoDB Docker startup script
└── README.md             # This file
```

## 🔧 Development

### Backend Development

```bash
cd server

# Run in development mode with auto-restart
npm run dev

# Build TypeScript to JavaScript
npm run build

# Run production build
npm start
```

### Frontend Development

```bash
cd client

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Generate a new component
ng generate component component-name
```

### MongoDB Management

```bash
# Start MongoDB
./start-mongo.sh

# Connect to MongoDB shell (in another terminal)
docker exec -it schedule-it-mongo-dev mongosh
```

## 🧪 Testing

### Frontend Tests

```bash
cd client
npm test
```

### Backend Tests

```bash
cd server
# Tests to be implemented
```

## 📦 Building for Production

### Build the Backend

```bash
cd server
npm run build
```

The compiled JavaScript will be in the `server/dist` directory.

### Build the Frontend

```bash
cd client
npm run build
```

The production build will be in the `client/dist` directory.

## 🎨 Code Style

This project uses:

- **Prettier** for code formatting
- **TypeScript** for type safety
- **ESLint** (to be configured)

The Prettier configuration is in `client/package.json`:

- Print width: 100 characters
- Single quotes
- Angular HTML parser for templates

## 📄 License

This project is open-source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [Angular](https://angular.dev/)
- Backend powered by [Express](https://expressjs.com/)
- Database by [MongoDB](https://www.mongodb.com/)
- UI styling with [TailwindCSS](https://tailwindcss.com/)

## 📧 Contact

For questions, feedback, or suggestions, please open an issue on GitHub.

---

**Note**: This project is under active development. Some features mentioned in the roadmap are still in progress.
