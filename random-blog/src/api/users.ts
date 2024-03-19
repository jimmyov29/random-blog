export class UsersApi {
  urlBase = "https://jsonplaceholder.typicode.com";
  async getUsers() {
    try {
      const response = await fetch(`${this.urlBase}/users`);
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}