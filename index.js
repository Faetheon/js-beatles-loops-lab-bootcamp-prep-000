function theBeatlesPlay(musicians, instruments) {
  var mine = [];
  for(i = 0; i < musicians.length; i++) {
    mine.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return mine;
}