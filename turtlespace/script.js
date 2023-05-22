// script.js

// Função para cadastrar usuário
function registerUser(event) {
  event.preventDefault();
  
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  
  if (password !== confirmPassword) {
    alert("A senha e a confirmação de senha não coincidem. Por favor, tente novamente.");
    return;
  }
  
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  
  alert("Usuário cadastrado com sucesso!");
  document.getElementById("registrationForm").reset();
}


function loginUser(event) {
  event.preventDefault();
  
  var usernameOrEmail = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  var storedUsername = localStorage.getItem("username");
  var storedEmail = localStorage.getItem("email");
  var storedPassword = localStorage.getItem("password");
  
  if ((usernameOrEmail === storedUsername || usernameOrEmail === storedEmail) && password === storedPassword) {
    alert("Login bem-sucedido!");
    window.location.href = "home.html";
  } else {
    alert("Nome de usuário ou senha inválidos!");
  }
  document.getElementById("loginForm").reset();
}
