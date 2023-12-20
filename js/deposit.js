//stet 1 get button
document.getElementById('deposit-btn').addEventListener('click',function(){
    
    //step 2 field area get and get value
    const fieldDeposit =document.getElementById('field-deposit');
    const fieldDepositStringNew = fieldDeposit.value;
    //step 2.5 convert string to number
    const fieldDepositNew = parseFloat(fieldDepositStringNew);
    fieldDeposit.value ='';
   
    //step 3: get before deposit and put new deposit value there
    const depositBefore = document.getElementById('deposit-before');
    const  depositBeforeString = depositBefore.innerText;
    const depositBeforeValue = parseFloat(depositBeforeString);

//    //step 4: new deposit and before deposit total calculate
   const NewdepositTotal  = fieldDepositNew + depositBeforeValue;

depositBefore.innerText = NewdepositTotal;

//step 5: get balance with number
const totalBalance = document.getElementById('total-balance');
const totalBalanceString = totalBalance.innerText;
const totalBalanceValue =parseFloat(totalBalanceString);

// step6: calculate new deposit value + total valance
const totalBalanceUpdate = fieldDepositNew + totalBalanceValue;
totalBalance.innerText = totalBalanceUpdate;

 

})