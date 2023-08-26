function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // For simplicity, you can check username and password here
    if (username === "user" && password === "pass") {
        alert("You are successfully logged in as student.");
    } 
    else if(username === "faculty" && password === "pass"){
        alert("You are successfully logged in as teacher.");
    }
    else {
        alert("Login failed. Incorrect username or password.");
    }
}
