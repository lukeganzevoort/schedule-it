# Setup Guide - Multi-User Schedule It Application

## Overview

This application now supports:

- **User Authentication** (username/password)
- **Multiple Leagues per User**
- **Personal Dashboards**
- **Demo Mode** (try without signing up)

## Quick Start

### 1. Start MongoDB

```bash
./start-mongo.sh
```

### 2. Set Up Backend

```bash
cd server
npm install
```

Create `.env` file in `server/` directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/schedule-it-rec-leagues
NODE_ENV=development
JWT_SECRET=dev-secret-key-change-in-production
```

Start the server:

```bash
npm run dev
```

The API will run on `http://localhost:3000`

### 3. Set Up Frontend

```bash
cd client
npm install
npm start
```

The application will run on `http://localhost:4200`

## How It Works

### For New Users

1. **Visit Homepage** (`http://localhost:4200`)

   - Try the demo without signing up
   - Create an account
   - Sign in

2. **Create Account** (`/register`)

   - Enter username, email, name, and password
   - Automatically logged in after registration

3. **Dashboard** (`/dashboard`)

   - View all your leagues
   - Create new leagues
   - Manage existing leagues

4. **League Management** (`/league/:id`)
   - Add teams, fields, and referees
   - Generate schedules
   - Save your league data

### Demo Mode

- Available at `/demo`
- Try the scheduler without creating an account
- Changes are NOT saved
- Perfect for testing the schedule generation algorithm

## API Endpoints

### Authentication

- `POST /api/auth/register` - Create new user account
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires auth)

### Leagues

- `GET /api/leagues` - Get all leagues for current user
- `GET /api/leagues/:id` - Get specific league
- `POST /api/leagues` - Create new league
- `PUT /api/leagues/:id` - Update league
- `DELETE /api/leagues/:id` - Delete league

### Users (Legacy)

- `GET /api/users` - Get all users
- Other user management endpoints...

## Architecture Changes

### Backend

- **User Model**: Now includes `username` and `password` fields
- **League Model**: New model for storing league data
- **Auth Middleware**: JWT-based authentication
- **Protected Routes**: Leagues require authentication

### Frontend

- **Auth Service**: Manages user authentication state
- **League Service**: CRUD operations for leagues
- **Auth Guard**: Protects routes requiring authentication
- **Auth Interceptor**: Adds JWT token to API requests
- **New Components**:
  - Login
  - Register
  - Dashboard
  - Updated ScheduleBuilder (works with leagues and demo mode)

## Security Notes

**⚠️ Development Only**: This authentication is for development purposes only.

For production, you should:

- Use HTTPS
- Add email verification
- Implement password reset
- Add rate limiting
- Use environment-specific JWT secrets
- Add CSRF protection
- Implement proper session management

## Testing the Application

1. **Create a test account**:

   - Username: `testuser`
   - Password: `password123`
   - Name: `Test User`
   - Email: `test@example.com`

2. **Create a league**:

   - Name: `Summer Basketball League`
   - Description: `Our annual summer tournament`

3. **Add teams and generate schedule**:

   - Add at least 4 teams
   - Add 2-3 fields
   - Add referees
   - Generate schedule

4. **Save the league**:

   - Click "Save League" button
   - Data persists in MongoDB

5. **Test demo mode**:
   - Visit `/demo`
   - Try the scheduler without logging in

## Troubleshooting

### Backend won't start

- Check MongoDB is running: `docker ps`
- Check `.env` file exists in `server/` directory
- Run `npm install` in `server/` directory

### Frontend won't start

- Run `npm install` in `client/` directory
- Check Node.js version (should be v20+)

### Can't login

- Check browser console for errors
- Verify backend is running on port 3000
- Check MongoDB is accessible

### CORS errors

- Backend should have CORS enabled (already configured)
- Check both frontend and backend are running

## Next Steps

Potential improvements:

- Email verification
- Password reset functionality
- League sharing/collaboration
- Export schedules to PDF/iCal
- Real-time updates with WebSockets
- Role-based permissions (admin, coach, player)
