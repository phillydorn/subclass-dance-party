var HarshDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="src/harsh.jpeg">');
  this.$node.css({'border': 'none'})
  timeBetweenSteps/=10
}

HarshDancer.prototype = Object.create(Dancer.prototype);
HarshDancer.prototype.constructor = HarshDancer;

HarshDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var size = 300*Math.random()
  this.$node.children().css({'width' : size
, 'height' : size});
}