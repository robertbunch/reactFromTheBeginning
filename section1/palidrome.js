function isPalidrome(str){
  const stringAsArray = str.split('');
  const reversedArray = stringAsArray.reverse();
  const reversedString = reversedArray.join('');
  if(reversedString === str){
    return `${str} is a palidrome`;
  }else{
    return `${str} is not a palidrome`;
  }

}

const answer = isPalidrome('racecar');
console.log(answer)
