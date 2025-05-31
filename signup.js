nm = document.querySelector(".name");
em = document.querySelector(".username");
pw = document.querySelector(".pass");

function login() {
    let email = em.value;
    let password = pw.value;
    let name = nm.value;
    if (email === "" || password === "" || name === "") {
        alert("Please Enter all the fields");
    }
    
    else{
        localStorage.setItem("name", name);
        localStorage.setItem("password", password);
        localStorage.setItem("email", email);
        window.location.href = "./confirmation.html";

    }

}