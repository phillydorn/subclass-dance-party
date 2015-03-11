var TrigDancer = function(top, left, timeBetweenSteps) {
  var middle = slicePx($("body").css("height"))/2; //number
  this.middle = middle
  Dancer.call(this, middle, 0, timeBetweenSteps);
  this.top = middle;
  this.left = 0;
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node.addClass('star');
};

TrigDancer.prototype = Object.create(Dancer.prototype);
TrigDancer.prototype.constructor = TrigDancer;
TrigDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.left = this.left < slicePx($("body").css("width")) ? this.left +100 : 0; //number
  this.top = addPx(this.middle + (Math.sin(this.left))*100); 
  this.$node.animate({top: this.top, left: addPx(this.left)});
}
TrigDancer.prototype.lineUp = function(dancers,i) {
  this.$node.addClass("lineUp");
}
TrigDancer.prototype.unline = function(){
  this.setPosition(this.top, this.left);
  this.$node.removeClass("lineUp");
  this.step();
}