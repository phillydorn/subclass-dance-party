var HarshDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="src/harsh.jpeg">');
  this.$node.css({'border': 'none'})
  timeBetweenSteps/=10;
  this.top = top;
  this.left = left;
}

HarshDancer.prototype = Object.create(Dancer.prototype);
HarshDancer.prototype.constructor = HarshDancer;

HarshDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var size = 300*Math.random()
  this.$node.children().css({'width' : size
, 'height' : size});
}

HarshDancer.prototype.lineUp = function(dancers,i){
 var leftPosition = i> 0 ? dancers[i-1].left+=20 : 0
  this.setPosition(32,leftPosition)
  var deg = 0
  var rotate = function() {
    if (deg > 360) {
      deg = 0
    } else {
      deg++
    }
    this.$node.css.call(this.$node,{'-webkit-transform': 'rotate('+deg+'deg)'})
  }
  this.interval = setInterval(rotate.bind(this),1);
}

HarshDancer.prototype.unline = function(){
  this.setPosition(this.top, this.left);
  this.$node.removeClass("lineUp");
  clearInterval(this.interval)
  this.$node.css({'-webkit-transform': 'rotate(0deg)'})
  this.step();
}