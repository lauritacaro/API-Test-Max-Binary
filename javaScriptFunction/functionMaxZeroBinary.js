function getConsecutiveZerosBetweenOnes(num) {
    const numberBinary = (num >>> 0).toString(2);
  
    let searchOne = false;
    let countMaxZero = 0;
    let currentAmountZero =0;
    for (let i = 0; i < numberBinary.length; i++) {
      if (numberBinary[i] === '1') {
          if (searchOne)
          {
              countMaxZero = Math.max(countMaxZero,currentAmountZero);
          }
          else{
              searchOne = true
          }
          currentAmountZero = 0;
      }
      else{
          currentAmountZero++;
      }
     
    }
    return countMaxZero;
  }
  
  
  function is32BitInteger(num) {
      return Number.isSafeInteger(num) && num >= 1 && num <= 2147483647;
    }
  
    const decimalNumber = 545;
  if (is32BitInteger(decimalNumber)) {
    const consecutiveZeros = getConsecutiveZerosBetweenOnes(decimalNumber);
    console.log("Max 0s ===> ", consecutiveZeros);
  } else console.log("Its not a valid number!");
  