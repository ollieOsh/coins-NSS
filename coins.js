/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter (cash) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  
  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

  while(cash > 0){
    if(cash - 25 >= 0){
      cash -= 25;
      coinPurse.quarters++;
    }else if(cash - 10 >= 0){
      cash -= 10;
      coinPurse.dimes++;
    }else if(cash - 5 >= 0){
      cash -= 5;
      coinPurse.nickels++;
    }else{
      cash -= 1;
      coinPurse.pennies++;
    }
  }

  return coinPurse;
}

document.getElementById('myForm').onsubmit = function() {
  var money = document.getElementById('moneys'),
      cash = Math.floor(money.value * 100),
      coins = coinCounter(cash);

  console.log(coins);
}