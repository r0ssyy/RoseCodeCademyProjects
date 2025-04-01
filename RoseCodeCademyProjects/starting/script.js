document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    
    if (name && email) {
        document.getElementById('message').textContent = `Thank you for joining, ${name}!`;
    } else {
        document.getElementById('message').textContent = "Please fill out all fields.";
    }
});
