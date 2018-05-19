function theBeatlesPlay(musicians, instruments) {
  var mine = [];
  for(var i = 0; i < musicians.length; i++) {
    mine.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return mine;
}

function johnLennonFacts(array) {
  var arr = [];
  var i = 0;
  while(array.length > 0) {
    arr.push(`${array[i]}!!!`);
    i++;
  }
  return arr;
}