function theBeatlesPlay(musicians, instruments){
  var result = []
  for (let i = 0; i < musicians.length; i++){
    result[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return result
}

function johnLennonFacts(array){
  var count = 0
  while (count < array.length){
    array[count] = array[count] + '!!!'
    count--
  }
  return array
}