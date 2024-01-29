//Enumerating Properties

function Circle(radius){

    this.radius = radius;
    this.draw = function(){

        console.log("Ahhhh Serna is an ARTIST");
    }
}

const circle = new Circle(10);
circle['circumference of circle'] = "2*pi*radius*radius";
for(let key in circle){
    //returns properties and methods names

    console.log(key);
//returns properties and methods names and contents as well
    console.log(key,circle[key]);
}

const keyArray = Object.keys(circle);
console.log(keyArray);

if('radius' in circle){
    console.log("circle DOES have a radius");
}