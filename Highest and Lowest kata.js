function highAndLow(numbers){
let numArray = numbers.split(" ");
let max      = Number(numArray[0]);
let min      = Number(numArray[0]);
let num;

for(var i = 1; i< numArray.length; i++){

  num = Number(numArray[i]);
  
  if(num > max) max = num;
  if(num < min) min = num;
}

return max + " " + min;
}
