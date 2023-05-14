const loginForm = document.querySelector("#id_input");
const loginInput = loginForm.querySelector("input");
const greetingForm = document.querySelector("#greeting");

console.dir(loginInput);

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // submit의 기본 기능을 끈다.

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // username을 local storage에 저장한다.

    paintGreeting(username);
}

function paintGreeting(username) {
    greetingForm.classList.remove(HIDDEN_CLASSNAME);
    greetingForm.querySelector("h1").textContent = `Hello ${username}`;
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}