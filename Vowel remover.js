function shortcut(string){
   let strArr = string.split('');
  for (let x = 0; x < string.length; x++) {
    let char = string[x];
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
      strArr[x] = '';
    }
  }
  return strArr.join('');
}
