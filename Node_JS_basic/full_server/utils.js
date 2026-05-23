// Task 8: Create a full server with organized structure using Express

import fs from 'fs';

export const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.toString().split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const students = lines.slice(1).map((line) => line.split(','));
    const fieldMap = {};

    for (const student of students) {
      const [firstname, , , field] = student;
      if (!fieldMap[field]) {
        fieldMap[field] = [];
      }
      fieldMap[field].push(firstname);
    }

    resolve(fieldMap);
  });
});

export default readDatabase;
