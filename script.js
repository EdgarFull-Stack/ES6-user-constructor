//1.
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.isLoggedIn = false;
    this.saveToLocalStorage();
  }
  saveToLocalStorage() {
    localStorage.setItem("user", JSON.stringify(this));
  }
  toggleLoginStatus() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  login() {
    return `Welcome, ${this.name}`;
  }
  logout() {
    return `See ya next time!`;
  }
}
//2.
