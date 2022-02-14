document.getElementById('login-submit').addEventListener('click', function(event){
    event.preventDefault()
    const userField = document.getElementById('user-email');
    const userEmail = userField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail=='shop@gmail.com' && userPassword=='123456')
    {
        window.location.href ='banking.html'
    }
})