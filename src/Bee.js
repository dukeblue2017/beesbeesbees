var Bee = function() {
  // console.log('Grub.prototype', Grub.prototype)
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype)


Bee.prototype.constructor = Bee;