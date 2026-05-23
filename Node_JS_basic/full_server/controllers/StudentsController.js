// Task 8: Create a full server with organized structure using Express

import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const fieldMap = await readDatabase(process.argv[2]);
      let responseText = 'This is the list of our students\n';

      const fields = Object.keys(fieldMap)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      for (const field of fields) {
        responseText += `Number of students in ${field}: ${fieldMap[field].length}. `;
        responseText += `List: ${fieldMap[field].join(', ')}\n`;
      }

      response.status(200).send(responseText.trimEnd());
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fieldMap = await readDatabase(process.argv[2]);

      if (!fieldMap[major]) {
        response.status(200).send('List: ');
        return;
      }

      const responseText = `List: ${fieldMap[major].join(', ')}`;
      response.status(200).send(responseText);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}
