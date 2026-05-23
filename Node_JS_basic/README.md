# NodeJS Basics

## Project Overview
This project covers fundamental NodeJS concepts including:
- Basic JavaScript execution with NodeJS
- Process stdin for command line input
- Synchronous and asynchronous file reading
- HTTP server creation using the native `http` module
- HTTP server creation using Express framework
- Organizing servers with controllers, routes, and utilities

## Tasks

### Task 0 - displayMessage
Create a function `displayMessage` that prints in STDOUT the string argument.

**File:** `0-console.js`

### Task 1 - Reading stdin
Create a program named `1-stdin.js` that:
- Displays "Welcome to Holberton School, what is your name?" on startup
- Accepts user input for their name
- Displays "Your name is: INPUT"
- Displays "This important software is now closing" when ended

**File:** `1-stdin.js`

### Task 2 - Counting Students (Synchronous)
Create a function `countStudents` in `2-read_file.js` that accepts a path argument. It should read the database file synchronously and display:
- "Number of students: NUMBER_OF_STUDENTS"
- For each field: "Number of students in FIELD: N. List: LIST_OF_FIRSTNAMES"

If the database is not available, it should throw an error with "Cannot load the database".

**File:** `2-read_file.js`

### Task 3 - Counting Students (Asynchronous)
Create a function `countStudents` in `3-read_file_async.js` that accepts a path argument. It should read the database file asynchronously and return a Promise:
- "Number of students: NUMBER_OF_STUDENTS"
- For each field: "Number of students in FIELD: N. List: LIST_OF_FIRSTNAMES"

If the database is not available, it should throw an error with "Cannot load the database".

**File:** `3-read_file_async.js`

### Task 4 - Simple HTTP Server (Native)
Create a small HTTP server using Node's native `http` module in `4-http.js`. The server:
- Listens on port 1245
- Returns "Hello Holberton School!" as plain text for any endpoint

**File:** `4-http.js`

### Task 5 - Complex HTTP Server (Native)
Create a small HTTP server using Node's native `http` module in `5-http.js`. The server:
- Listens on port 1245
- Accepts the database filename as command line argument
- `/` returns "Hello Holberton School!"
- `/students` displays the list of students (same output as task 3)

**File:** `5-http.js`

### Task 6 - Simple HTTP Server (Express)
Install Express and create a small HTTP server in `6-http_express.js`. The server:
- Listens on port 1245
- `/` returns "Hello Holberton School!"
- Other endpoints return HTML error for unhandled routes

**File:** `6-http_express.js`

### Task 7 - Complex HTTP Server (Express)
Create a small HTTP server using Express in `7-http_express.js`. The server:
- Listens on port 1245
- Accepts the database filename as command line argument
- `/` returns "Hello Holberton School!"
- `/students` displays the list of students

**File:** `7-http_express.js`

### Task 8 - Organized HTTP Server (Express)
Create a full server in a `full_server/` directory with proper structure:

#### 8.1 Utils Module (`full_server/utils.js`)
- Create `readDatabase` function that reads the database asynchronously and returns an object of arrays (firstnames per field).

#### 8.2 App Controller (`full_server/controllers/AppController.js`)
- Class `AppController` with static method `getHomepage(request, response)` returning "Hello Holberton School!" with status 200.

#### 8.3 Students Controller (`full_server/controllers/StudentsController.js`)
- Class `StudentsController` with:
  - `getAllUsers`: Returns list of all students grouped by field (status 200)
  - `getAllStudentsByMajor`: Accepts a major parameter (CS or SWE only), returns filtered student list. Invalid major returns status 500.

#### 8.4 Routes (`full_server/routes/index.js`)
- Map `/` to AppController
- Map `/students` and `/students/:major` to StudentsController

#### 8.5 Server (`full_server/server.js`)
- Express server listening on port 1245 using defined routes
- Database filename passed as argument but retrieved at request time

**Files:** `full_server/utils.js`, `full_server/controllers/AppController.js`, `full_server/controllers/StudentsController.js`, `full_server/routes/index.js`, `full_server/server.js`

## Setup

### Install NodeJS

**Linux:**
```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

**macOS:**
```bash
brew install node
```

**Windows:**
Download installer from https://nodejs.org/ (LTS v20.x.x) and run it.

Verify installation:
```bash
node -v    # v20.x.x
npm -v     # 10.x.x
```

### Install Dependencies
```bash
npm install
```

## Running the Code

**Single files:**
```bash
npm run dev <filename>.js
```

**Full server (Task 8):**
```bash
npm run dev ./full_server/server.js ./database.csv
```

## Running the Tests
```bash
npm run test
```

### Full Test Suite
```bash
npm run full-test
```

## Requirements
- NodeJS v20.x.x
- npm v10.x.x
- All files must end with a new line
- Code tested with Jest and ESLint
- All functions/classes must be exported using: `module.exports = myFunction;`
- Required project files: `package.json`, `babel.config.js`, `.eslintrc.js`, `database.csv`
