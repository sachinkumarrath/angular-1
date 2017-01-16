//Base obj constructor
function BaseObj(name){
  this.name = name;
}

//Child object constructor
function ChildObj(name,type){
  BaseObj.call(this,name);
  this.type = type;
}

var obj11 = Object.create(ChildObj.prototype);

var obj = new ChildObj('sachin','human');

// Extending ChildObj from Base obj
ChildObj.prototype = Object.create(BaseObj.prototype);
// Rectangle.prototype.constructor = Rectangle;

var obj1 = new ChildObj('skr','human');

var obj12 = Object.create(ChildObj.prototype);

console.log(obj, obj1);

//Cloning an object and adding additional properties
var obj2 = Object.assign({},obj1,{age:30});

console.log(obj2);

console.log(obj instanceof BaseObj);

console.log(obj1 instanceof BaseObj);

console.log(obj1 instanceof ChildObj);
