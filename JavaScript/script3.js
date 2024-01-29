function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw me Serna");
    }
}

const circle = new Circle(10);

circle.location = {x:1,y:1};

circle['circle circumference'] = 'pi*radius';

delete circle;