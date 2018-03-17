(function() {
    console.log("I'm an immediate function!");
})();


//(function(param1, param2){
//    console.log("I'm an immediate function!");
//})(arg1,arg2);

//(function (global) {
//    console.log( window );               // logs the window object
//    console.log( global );               // logs the window object, but faster!
//}) ( window ) ;

 ( function() {
    var a = "Hi";
    var b = 38;
    function test() {
      //some codes here
    }
    function add() {
      //some codes here
    }
    test();
 }());