# ES6 Classes

## Project Overview
This project covers ES6 class concepts including:
- Defining classes and constructors
- Adding methods to classes
- Static methods
- Class inheritance (extends)
- Getters and Setters
- Metaprogramming and Symbols
- Computed method names

## Tasks

### Task 0 - ClassRoom
Define a `ClassRoom` class with a `maxStudentsSize` attribute.

**File:** `0-classroom.js`

### Task 1 - Make Classrooms
Create an `initializeRooms` function that returns an array of 3 `ClassRoom` instances.

**File:** `1-make_classrooms.js`

### Task 2 - HolbertonCourse
Implement a `HolbertonCourse` class with getters and setters for `name`, `length`, and `students`.

**File:** `2-hbtn_course.js`

### Task 3 - Currency
Implement a `Currency` class with getters, setters, and a `displayFullCurrency` method.

**File:** `3-currency.js`

### Task 4 - Pricing
Implement a `Pricing` class that uses `Currency`, with a static `convertPrice` method.

**File:** `4-pricing.js`

### Task 5 - Building
Implement an abstract `Building` class that enforces `evacuationWarningMessage` override in subclasses.

**File:** `5-building.js`

### Task 6 - SkyHighBuilding
Create a `SkyHighBuilding` class that extends `Building` with `floors` attribute.

**File:** `6-sky_high.js`

### Task 7 - Airport
Implement an `Airport` class with a custom `toString` method.

**File:** `7-airport.js`

### Task 8 - HolbertonClass (Metaprogramming)
Implement a `HolbertonClass` class with custom `Symbol.toPrimitive` for type coercion.

**File:** `8-hbtn_class.js`

### Task 9 - Hoisting
Fix the hoisting issue in the provided code by reordering exports and declarations.

**File:** `9-hoisting.js`

### Task 10 - Car (Symbols)
Implement a `Car` class with a `cloneCar` method using Symbols.

**File:** `10-car.js`

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

## Requirements
- NodeJS v20.x.x
- npm v10.x.x
- All files must end with a new line
- Code tested with Jest and ESLint
