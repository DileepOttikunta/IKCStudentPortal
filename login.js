// Pre-defined user login details
const java = [
    { username: "seshu", password: "1234" },
    { username: "djava", password: "djava" }
  
];
const python = [
    { username: "ikc", password: "ikc" },
    { username: "dpython", password: "dpython" }
  
];

const web = [
    { username: "bhanu", password: "4321" },
    { username: "Ganesh", password: "Gani" },
    { username: "muni sekhar", password: "Abhi" },
    { username: "kethan kumar", password: "kethan" },
    { username: "Hema", password: "12345054" },
     { username: "Prathima", password: "4823" },
    {username : "Dhanush", password:"Dhanu"},
   
    { username: "dweb", password: "dweb" }
];

document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value.trim();

    // Check if the entered username and password match any of the users in the 'java' array
    const javaUser = java.find(user => user.username === usernameInput && user.password === passwordInput);

    // Check if the entered username and password match any of the users in the 'python' array
    const pythonUser = python.find(user => user.username === usernameInput && user.password === passwordInput);
    
    // Check if the entered username and password match any of the users in the 'web' array
    const webUser = web.find(user => user.username === usernameInput && user.password === passwordInput);

    if (javaUser) {
        // Redirect to java.html if credentials match in the 'java' array
        window.location.href = "java.html";
    } else if (webUser) {
        // Redirect to web.html if credentials match in the 'web' array
        window.location.href = "web.html";
    } else if (pythonUser) {
        // Redirect to web.html if credentials match in the 'python' array
        window.location.href = "python.html";
    }else {
        // Alert if credentials are incorrect
        alert('Invalid username or password!');
    }
});
