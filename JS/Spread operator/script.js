var array1  = ['Javascript', 'Ruby', 'PHP'];
var array2  = ['Reactjs', 'Dart'];
var array3 = [...array2, ...array1];



var defaultConfig = {
  api: "https://domain-cources-page",
  apiVersion: "v1",
  other: "other"
}

var exercisesConfig = {
  ...defaultConfig,
  api: 'https://domain-exercises-page'
}



var array1 = ['javascript', 'php', 'ruby'];
function logger(a, b, c){
  console.log(a, b, c);
}

console.log(array1);