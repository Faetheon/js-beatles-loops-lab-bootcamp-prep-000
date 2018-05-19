function theBeatlesPlay(musicians, instruments) {
  var mine = [];
  for(var i = 0; i < musicians.length; i++) {
    mine.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return mine;
}

function johnLennonFacts(array) {
  var i = 0;
  while(i < array.length) {
    array[i] = `${array[i]}!!!`
    i++
  }
  return array;
}

function iLoveTheBeatles(n) {
  var mine = [];
  if (n < 15) {
  while(n < 15) {
      mine.push("I love the Beatles!");
      n++;
  } 
  return mine;
  } else if (n > 15) {
    return "I love the Beatles!");
  }
  
}