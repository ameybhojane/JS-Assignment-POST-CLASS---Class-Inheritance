// import using require

// declare class

// import using require
var Shape = require('./shape.js') 
// const imp={require('./shape.js')}

// declare class
class Circle extends Shape{
    constructor(){
        super();
    }
    calculateArea(){
        return "pi*r*Square";
    }
}
module.exports=Circle;
// export class using module.exports
// export class using module.exports
