# ES6 Promises

## Project Overview
This project covers ES6 Promise concepts including:
- Promises (how, why, and what)
- Using the then, resolve, catch methods
- Every method of the Promise object
- Throw / Try
- The await operator
- How to use an async function

## Tasks

### Task 0 - Keep every promise you make
Return a Promise using the `getResponseFromAPI()` function.

**File:** `0-promise.js`

### Task 1 - Don't make a promise...if you know you can't keep it
Return a promise based on a boolean argument using `getFullResponseFromAPI(success)`.

**File:** `1-promise.js`

### Task 2 - Catch me if you can!
Append three handlers to `handleResponseFromAPI(promise)` for resolution, rejection, and finally.

**File:** `2-then.js`

### Task 3 - Handle multiple successful promises
Use `Promise.all` to collectively resolve `uploadPhoto` and `createUser` promises.

**File:** `3-all.js`

### Task 4 - Simple promise
Write and export `signUpUser` that returns a resolved promise with firstName and lastName.

**File:** `4-user-promise.js`

### Task 5 - Reject the promises
Write and export `uploadPhoto` that returns a Promise rejecting with an error message.

**File:** `5-photo-reject.js`

### Task 6 - Handle multiple promises
Use `Promise.allSettled` to call `signUpUser` and `uploadPhoto` and return an array of results.

**File:** `6-final-user.js`

### Task 7 - Load balancer
Write `loadBalancer` that returns the value of the first promise to resolve.

**File:** `7-load_balancer.js`

### Task 8 - Throw an error
Write `divideFunction` that throws an error when dividing by zero.

**File:** `8-try.js`

### Task 9 - Throw error / try catch
Write `guardrail` that executes a math function and captures errors in an array.

**File:** `9-try.js`

### Task 10 - Await / Async
Write an async function `asyncUploadUser` that calls `uploadPhoto` and `createUser`.

**File:** `100-await.js`

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
```bash
npm run dev <filename>.js
```

## Running Tests
```bash
npm run test
```

## Running Lint
```bash
npm run lint
```

## Requirements
- NodeJS v20.x.x
- npm v10.x.x
- All files must end with a new line
- Code tested with Jest and ESLint
