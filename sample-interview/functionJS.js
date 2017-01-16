//testing call, apply, bind
function Product(price,productType){
  this.price = price;
  this.productType = productType;
}


function FoodProduct(price,productType,category){
  Product.call(this,price,productType);
  this.category = category;
}

function Paper(price,productType,size){
  Product.call(this,[price,productType]);
  this.size = size;
}

var paperObj = new Paper(20,'paper','A4');

var foodObj = new FoodProduct(10,'food','V');



//bind sample

var x = 9;    // this referes to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

this.x = 9;

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
console.log(module.getX.bind(this));
