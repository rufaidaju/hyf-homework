class Circle {
    constructor (x,y,radius,sAngle,eAngle,fillColor){
        this.x = x,
        this.y = y,
        this.radius = radius,
        this.sAngle = sAngle,
        this.eAngle = eAngle,
        this.fillColor = fillColor
    }

    draw(){
        let canvas = document.getElementById('myCanvas') ,
        ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,this.sAngle,this.eAngle);
        ctx.stroke();
        ctx.fillStyle = this.fillColor;
        ctx.fill();
    }
}

const c1 = new Circle(40, 40, 20, 0, 2 * Math.PI, '#889812');
c1.draw();
const c2 = new Circle(70, 70, 15, 0, 2 * Math.PI, '#306600');
c2.draw();
const c3 = new Circle(90, 90, 10, 0, 2 * Math.PI, '#900000');
c3.draw();
const c4 = new Circle(110, 110, 8, 0, 2 * Math.PI, '#999269');
c4.draw();