function drawCircle (x,y,radius,sAngle,eAngle){
    let canvas = document.getElementById('myCanvas') ,
        ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(x,y,radius,sAngle,eAngle);
        ctx.stroke();
        ctx.fillStyle = 'green';
        ctx.fill();
    
}
drawCircle (100, 75, 50, 0, 2 * Math.PI);