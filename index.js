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
  }
  return array;
}