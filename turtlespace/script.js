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

const wrapper = document.querySelector(".wrapper"),
editableInput = wrapper.querySelector(".editable"),
readonlyInput = wrapper.querySelector(".readonly"),
placeholder = wrapper.querySelector(".placeholder"),
counter = wrapper.querySelector(".counter"),
button = wrapper.querySelector("button");

editableInput.onfocus = ()=>{
  placeholder.style.color = "#c5ccd3";
}
editableInput.onblur = ()=>{
  placeholder.style.color = "#98a5b1";
}

editableInput.onkeyup = (e)=>{
  let element = e.target;
  validated(element);
}
editableInput.onkeypress = (e)=>{
  let element = e.target;
  validated(element);
  placeholder.style.display = "none";
}

function validated(element){
  let text;
  let maxLength = 100;
  let currentlength = element.innerText.length;

  if(currentlength <= 0){
    placeholder.style.display = "block";
    counter.style.display = "none";
    button.classList.remove("active");
  }else{
    placeholder.style.display = "none";
    counter.style.display = "block";
    button.classList.add("active");
  }

  counter.innerText = maxLength - currentlength;

  if(currentlength > maxLength){
    let overText = element.innerText.substr(maxLength); //extracting over texts
    overText = `<span class="highlight">${overText}</span>`; //creating new span and passing over texts
    text = element.innerText.substr(0, maxLength) + overText; //passing overText value in textTag variable
    readonlyInput.style.zIndex = "1";
    counter.style.color = "#e0245e";
    button.classList.remove("active");
  }else{
    readonlyInput.style.zIndex = "-1";
    counter.style.color = "#333";
  }
  readonlyInput.innerHTML = text; //replacing innerHTML of readonly div with textTag value

  
}
