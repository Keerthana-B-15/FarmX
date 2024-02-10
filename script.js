const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function togglePasswordVisibility(inputId){
    var passwordInput = document.getElementById(inputId);
    if(passwordInput.type === "password"){
        passwordInput.type ="text";
    }else{
        passwordInput.type = "password";
    }
}