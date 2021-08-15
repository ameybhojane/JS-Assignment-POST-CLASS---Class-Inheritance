// import using require

// declare class

// import using require
const {Shape} = require('./shape.js') 
// const imp={require('./shape.js')}

// declare class
class Circle extends Shape{
    constructor(color){
        super(color);
    }
    calculateArea(){
        return "pi*r*Square";
    }
}
module.exports.Circle=Circle;
// export class using module.exports
// export class using module.exports
