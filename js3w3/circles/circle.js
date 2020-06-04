const canvas = document.getElementById('my-canvas');
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
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
        // let myCanvas = document.getElementById('my-canvas');
        let ctx =  canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,this.sAngle,this.eAngle);
        ctx.stroke();
        ctx.fillStyle = this.fillColor;
        ctx.fill();
    }
}
// Draw random circles with random colors every 100 ms
    setInterval(()=>{
        let x = Math.floor((Math.random() *canvas.width) + 1);
        let y = Math.floor((Math.random() * canvas.height) + 1);
        let radius = Math.ceil((Math.random() * 100) + 1);
        let fillColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        let circle = new Circle(x,y,radius,0, 2 * Math.PI,fillColor);
        circle.draw()
    },100)


