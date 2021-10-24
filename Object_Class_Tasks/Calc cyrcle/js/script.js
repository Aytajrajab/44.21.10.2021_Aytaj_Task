class Circle{
    constructor(radius){
        this.radius = radius;
    }

    calcArea(){
        return(Math.PI*Math.pow(this.radius,2)).toFixed(2);
    }
    calcLength(){
        return(2*Math.PI*this.radius).toFixed(2)
    }
}
let radius = Number(prompt("Enter radius: "))
let circle = new Circle(radius)
alert(`Area is ${circle.calcArea()}`)
alert(`Length is ${circle.calcLength()}`)
