// Pre-defined user login details
const java = [
    { username: "seshu", password: "1234" },
    { username: "djava", password: "djava" }
];

const javaSep = [
    { username: "Peruvaila", password: "Kiran@1507" }
];

const web = [
    { username: "bhanu", password: "4321" },
    { username: "Ganesh", password: "Gani" },
    { username: "muni sekhar", password: "Abhi" },
    { username: "kethan kumar", password: "kethan" },
    { username: "Hema", password: "12345054" },
    { username: "Prathima", password: "4823" },
    { username: "Dhanush", password: "Dhanu" },
    { username: "dweb", password: "dweb" }
];

document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value.trim();

    // Check if the entered username and password match any of the users in the 'java' array
    const javaUser = java.find(user => user.username === usernameInput && user.password === passwordInput);

    // Check if the entered username and password match any of the users in the 'javaSep' array
    const javaSepUser = javaSep.find(user => user.username === usernameInput && user.password === passwordInput);

    // Check if the entered username and password match any of the users in the 'web' array
    const webUser = web.find(user => user.username === usernameInput && user.password === passwordInput);

    if (javaUser || javaSepUser) {
        // Redirect to java.html if credentials match in the 'java' or 'javaSep' array
        window.location.href = "java.html";
    } else if (webUser) {
        // Redirect to web.html if credentials match in the 'web' array
        window.location.href = "web.html";
    } else {
        // Alert if credentials are incorrect
        alert('Invalid username or password!');
    }
});
