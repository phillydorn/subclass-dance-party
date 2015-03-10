var TangoDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps)
  this.top = top;
  this.left = left;
  this.$node.addClass("TangoDancer");
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


TangoDancer.prototype.lineUp = function(dancers, i){
  var leftPosition = i> 0 ? dancers[i-1].left+=20 : 0
  this.setPosition(32,leftPosition); 
  this.$node.addClass("lineUp"); 
}

TangoDancer.prototype.unline = function(){
  this.setPosition(this.top, this.left);
  this.$node.removeClass("lineUp");
  this.step();
}