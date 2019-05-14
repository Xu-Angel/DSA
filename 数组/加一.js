 
var plusOne = function(digits) {
  for (let i = digits.length-1; i >= 0; i--) {
    let temp = digits[i] + 1;
    
    if (temp === 10) {
      digits[i] = 0;
      if (i===0) {
        digits.unshift(1);
      }
      continue;
    }
    digits[i] = temp;
    break;
  }
  return digits;
};

