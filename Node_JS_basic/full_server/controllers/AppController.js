// Task 8: Create a full server with organized structure using Express

export default class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}
