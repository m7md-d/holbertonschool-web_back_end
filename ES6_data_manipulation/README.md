# ES6 Data Manipulation

## Project Overview
This project covers ES6 data manipulation concepts including:
- Array methods: `map`, `filter`, `reduce`
- Typed Arrays (ArrayBuffer, DataView)
- Set data structure
- Map data structure
- WeakMap data structure

## Tasks

### Task 0 - getListStudents
Create a function `getListStudents` that returns an array of student objects.

**File:** `0-get_list_students.js`

### Task 1 - getListStudentIds
Create a function `getListStudentIds` that returns an array of ids from a list of student objects using `map`.

**File:** `1-get_list_student_ids.js`

### Task 2 - getStudentsByLocation
Create a function `getStudentsByLocation` that filters students by city using `filter`.

**File:** `2-get_students_by_loc.js`

### Task 3 - getStudentIdsSum
Create a function `getStudentIdsSum` that returns the sum of all student ids using `reduce`.

**File:** `3-get_ids_sum.js`

### Task 4 - updateStudentGradeByCity
Create a function `updateStudentGradeByCity` that updates student grades for a specific city using `filter` and `map`.

**File:** `4-update_grade_by_city.js`

### Task 5 - createInt8TypedArray
Create a function `createInt8TypedArray` that returns a DataView with an Int8 value at a specific position.

**File:** `5-typed_arrays.js`

### Task 6 - setFromArray
Create a function `setFromArray` that returns a Set from an array.

**File:** `6-set.js`

### Task 7 - hasValuesFromArray
Create a function `hasValuesFromArray` that checks if all array elements exist within a set.

**File:** `7-has_array_values.js`

### Task 8 - cleanSet
Create a function `cleanSet` that returns a string of set values starting with a specific prefix.

**File:** `8-clean_set.js`

### Task 9 - groceriesList
Create a function `groceriesList` that returns a Map of groceries with quantities.

**File:** `9-groceries_list.js`

### Task 10 - updateUniqueItems
Create a function `updateUniqueItems` that updates map items with quantity 1 to 100.

**File:** `10-update_uniq_items.js`

### Task 100 - queryAPI (Advanced)
Export a `weakMap` and `queryAPI` function that tracks API calls and throws an error when load is high.

**File:** `100-weak.js`

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

## Running the Tests
```bash
npm run test
```

## Requirements
- NodeJS v20.x.x
- npm v10.x.x
- All files must end with a new line
- Code tested with Jest and ESLint
