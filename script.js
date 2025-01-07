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
const form = document.querySelector("form");
const messageDiv = document.querySelector(".message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.email.value.trim();
  const name = event.target.name.value.trim();
  const user = new User(name, email);
  user.toggleLoginStatus();
  console.log(user.isLoggedIn);
});

if (user.isLoggedIn) {
  const welcomeMessage = document.createElement("h1");
  welcomeMessage.textContent = "Logout";
  const logoutButton = document.createElement("button");
  logoutButton.textContent = "Logout";
  messageDiv.appendChild(welcomeMessage);
  messageDiv.appendChild(logoutButton);
}

logoutButton.addEbventListener("click", () => {
  user.toggleLoginStatus();
  welcomeMessage.textContent = user.logout();
});
