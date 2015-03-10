var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this._top = top;
  this._left = left;
}
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  BlinkyDancer.prototype = Object.create(Dancer.prototype);
  BlinkyDancer.prototype.constructor = BlinkyDancer;
  BlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();

  };

  BlinkyDancer.prototype.lineUp = function(dancers, i){
    var leftPosition = i> 0 ? dancers[i-1].left+=20 : 0
    this.setPosition(32,leftPosition); 
    this.$node.append('<img src="src/glenn.jpg">'); 
  }

  BlinkyDancer.prototype.unline = function(){
  this.setPosition(this._top, this._left);
  this.$node.removeClass("lineUp");
  this.$node.children().hide();
  this.step();
}