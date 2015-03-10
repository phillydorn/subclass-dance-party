var TrigDancer = function(top, left, timeBetweenSteps) {
  var middle = slicePx($("body").css("height"))/2; //number
  this.middle = middle
  Dancer.call(this, middle, 0, timeBetweenSteps);
  this.top = middle;
  this.left = 0;
  /*this.$node.css({
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
  position: relative;
})*/
};

TrigDancer.prototype = Object.create(Dancer.prototype);
TrigDancer.prototype.constructor = TrigDancer;
TrigDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.left = this.left < slicePx($("body").css("width")) ? this.left +100 : 0; //number
  this.top = addPx(this.middle + (Math.sin(this.left))*100); 
  this.$node.animate({top: this.top, left: addPx(this.left)});
}