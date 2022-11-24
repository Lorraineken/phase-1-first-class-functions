function receivesAFunction(testOne){
testOne()
}
function returnsANamedFunction(){
 return function strangeThings(){}
}
function returnsAnAnonymousFunction(){
  return function(){
    return ''
  }
}