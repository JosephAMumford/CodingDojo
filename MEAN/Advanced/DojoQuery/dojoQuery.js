const $Dojo = function(elementId) {
    //Return immediate function
    return (function($dojo){
    
        //Get DOM object with id
        $dojo.myId = document.getElementById(elementId);
        
        //Use callback function when clicked
        $dojo.click = function (callback) {
            this.myId.addEventListener("click", callback);
        };
  
        //Use callback function when hover in or out
        $dojo.hover = function (hoverin, hoverout) {
            this.myId.addEventListener("mouseover", hoverin);
            this.myId.addEventListener("mouseout", hoverout);
        };
    
        //Return element
        return $dojo;
    
    })({});
  };