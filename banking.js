// handle deposit 
document.getElementById('deposit-btn').addEventListener('click',function(event){
    event.preventDefault()
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount= previousDepositText;
    const newDepositTotal = parseFloat(previousDepositAmount) + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
// update balance
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText= balanceTotal.innerText;
const previousBalanceTotal=parseFloat(balanceTotalText)
const newBalanceTotal= previousBalanceTotal + newDepositAmount;
balanceTotal.innerText=newBalanceTotal;




    depositInput.value='';
})