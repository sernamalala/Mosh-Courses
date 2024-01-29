//OOP in JavaScript

//Objects

//can contain properties and methods
//Object Literals
/*const circle = {

    radius: 1,
    location:{
        x:1,
        y:1
    },
    draw: function(){
        console.log("draw circle");
    }
};

circle.draw();
*/

//Factories
//if object has one or more methods it has behaviour

function createCircle(radius){

    return {

        radius,
        draw: function(){
            console.log("draw circle");
        }
    };
}

const circle = createCircle(1);
circle.draw();

//Constructor Function
//upperCase
//almost like classses in java
function Circle(radius){

    this.radius = radius;
    this.draw = function(){
        console.log("draw me");
    }

}

const another = new Circle(1);
another.draw();

//functions are objects

Circle.call({},1);

//value as reference types

