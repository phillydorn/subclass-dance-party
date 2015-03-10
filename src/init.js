$(document).ready(function(){
  window.dancers = [];
  window.timeOutFunction;

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

  });
  $('.lineUpDancers').on('click', function(event){    
    for(var i = 0; i < dancers.length; i++){
      dancers[i].lineUp(dancers,i);
    }
  });
  var close1 = 0; 
  var close2 = 0;
  var close1Pos = [];
  var close2Pos = [];
  $(document).on('mouseenter', 'span',function(event){
    //Helper Functions
    var slicePx = function(string){
      return +string.slice(0, -2);
    }

    var addPx = function(num){
      return ""+ num + "px";
    }

    var calcDistance = function(x, y){
      var xTop = slicePx(x.css("top"));
      var yTop = slicePx(y.css("top"));
      var xLeft = slicePx(x.css("left"));
      var yLeft = slicePx(y.css("left"));
      var aSquared = Math.abs(Math.pow((xTop - yTop), 2));
      var bSquared = Math.abs(Math.pow((xLeft - yLeft), 2));
      return Math.sqrt(aSquared + bSquared);
    }
    for(var i = 0; i < dancers.length; i++){
      if((dancers[i].$node !== $(this) && calcDistance($(this), dancers[i].$node) < calcDistance($(this), dancers[close1].$node)) || calcDistance($(this), dancers[close1].$node) === 0){
        close1 = i;
      } else if ((dancers[i].$node !== $(this) && calcDistance($(this), dancers[i].$node) < calcDistance($(this), dancers[close2].$node)) || calcDistance($(this), dancers[close2].$node) === 0){
        close2 = i;
      } 
    }
    close1Pos = [dancers[close1].$node.css("top"), dancers[close1].$node.css("left")];
    close2Pos = [dancers[close2].$node.css("top"), dancers[close2].$node.css("left")]; 
    var thisLeft = slicePx($(this).css("left"));
    thisLeft += slicePx($(this).css("width"));
    dancers[close1].$node.animate({top: $(this).css("top"), left: addPx(thisLeft)});
    dancers[close2].$node.animate({top: $(this).css("top"), left: addPx(thisLeft)});
  });

  $(document).on('mouseleave', 'span', function(event){
    dancers[close1].$node.animate({top: close1Pos[0], left: close1Pos[1]});
    dancers[close2].$node.animate({top: close2Pos[0], left: close2Pos[1]});    
  });
});

