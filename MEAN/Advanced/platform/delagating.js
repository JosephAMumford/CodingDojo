function leadBootcamp(language, leader){
    var outcome = leader(language);
    console.log(outcome);
}
function Mike(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
function Charlie(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
function Jimmy(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
    'iOS':'successful leader',
    'java_android':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
leadBootcamp('java_android', Mike);
leadBootcamp('java_android', Charlie);
leadBootcamp('java_android', Jimmy);

// This is a function that just prints the result of another list of instructions
function printResult(doSomething) {
    var result = doSomething();         // store the return value of the callback parameter
    console.log(result);                // print the result!
   }
   printResult(function returnFive(){ return 5 })  // this should print "5"
