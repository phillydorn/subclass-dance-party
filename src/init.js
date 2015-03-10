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
  $("span").on('click',function(event){
    $('body').css({'background-color': 'blue'})
    var close1 = 0;
    var close2 = 0;
    var calcDistance = function(x, y){
      var aSquared = Math.abs(Math.pow((x.top - y.top), 2));
      var bSquared = Math.abs(Math.pow((x.left - y.left), 2));
      return Math.sqrt(aSquared + bSquared);
    }
    for(var i = 0; i < dancers.length; i++){
      if(calcDistance($(this), dancers[i]) < calcDistance($(this), dancers[close1])){
        close1 = i;
      } else if (calcDistance($(this), dancers[i]) < calcDistance($(this), dancers[close2])){
        close2 = i;
      } 
    }
    // dancers[close1].$node.animate({height: "300px"});
  });
});

