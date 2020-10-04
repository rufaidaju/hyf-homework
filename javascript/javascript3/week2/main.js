const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');
const boxes = [redBox, blueBox, greenBox];
const span = document.querySelector('span');
const targetPositions = [{x: 20, y: 300},{x: 400, y: 300},{x: 400, y: 20}];

// Find the move distance between the start position and target position 
function translate (box,targetPosition){
    let moveDistance =
    {
        x:targetPosition.x - box.getBoundingClientRect().x,
        y:targetPosition.y -box.getBoundingClientRect().y
    }
    return function(){return moveDistance}
}

 let moveBoxes =[
    {box:redBox,translate:translate(redBox,targetPositions[0])},
    {box:blueBox,translate:translate(blueBox,targetPositions[1])},
    {box:greenBox,translate:translate(greenBox,targetPositions[2])}
]

function translateOneByOne(){
    moveElement(moveBoxes[0].box,moveBoxes[0].translate)
    .then(() => {
        moveElement(moveBoxes[1].box,moveBoxes[1].translate)
        .then(()=>{
            moveElement(moveBoxes[2].box,moveBoxes[2].translate)

        })
    }).catch((err)=>console.log(err))
}

translateOneByOne()
    
function translateAllAtOnce (){
    return Promise.all([
                moveElement(moveBoxes[0].box,moveBoxes[0].translate()),
                moveElement(moveBoxes[1].box,moveBoxes[1].translate()),
                moveElement(moveBoxes[2].box,moveBoxes[2].translate())
                ])
            .then (()=> {console.log('All boxes fulfilled')
            }).catch((err)=>{
                console.log('error:couldnt fulfilled',err)}
            )
}

translateAllAtOnce ()