user= document.querySelector(".username")
pass=document.querySelector(".password")

function login(){
    username=user.value
    password=pass.value
    localStorage.getItem("username",username)
    localStorage.getItem("password",passwrod)
    
}

function Signup() {
    window.location.href = "signup.html";
  }