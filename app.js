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

// handle deposit 
document.getElementById('deposit-btn').addEventListener('click',function(){
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmount;
})