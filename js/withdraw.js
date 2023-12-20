//step1 get withdraw btn
document.getElementById('withdraw-btn').addEventListener('click',function(){
    
    //step2: get withdraw field value and make it float value
   const withdrawNew = document.getElementById('withdraw-field');
   const withdrawNewString = withdrawNew.value;
   const withdrawNewValue =parseFloat(withdrawNewString);
  

   withdrawNew.value ='';

   //step 3: get withdraw before value and make it parse float
   const withdrawBefore = document.getElementById('withdraw-before');
   const withdrawBeforeString = withdrawBefore.innerText;
   const withdrawBeforeValue = parseFloat(withdrawBeforeString);

   //step 4 : calculate new withdraw value and before withdraw value 
   const updateWithdrawValue = withdrawNewValue + withdrawBeforeValue;
   withdrawBefore.innerText = updateWithdrawValue;

   //step 5: get the Total balance and make it float number
   const totalBalance = document.getElementById('total-balance');
   const totalBalanceString =totalBalance.innerText;
   const totalBalanceValue =parseFloat(totalBalanceString);
   //step:6 - calculate new value with total balance

const UpdatetotalWithdraw = totalBalanceValue - withdrawNewValue;
totalBalance.innerText=UpdatetotalWithdraw;

})