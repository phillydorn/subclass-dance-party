var TangoDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps)
}

TangoDancer.prototype = Object.create(Dancer.prototype);
TangoDancer.prototype.constructor = TangoDancer;
// TangoDancer.prototype.changeColor = function(){
// }

TangoDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var red = Math.floor(Math.random()*255)
  var green = Math.floor(Math.random()*255)
  var blue = Math.floor(Math.random()*255)
  
  this.$node.css({'border-color': 'rgba('+red+','+green+','+blue+',1)'})
}