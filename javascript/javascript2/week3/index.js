
let startGame = function(){
    document.querySelector("#start-game").style.display ="none";
    document.querySelector(".input").style.display ="none";
    
    let seconds= document.querySelector('.input').value ;
    let presserL = presserS = 0 ;
    
    // Count presses L,S
    document.addEventListener("keypress",function(event){
        if (event.which == 108){
            presserL += 1;
        }else if(event.which == 115){
            presserS += 1;
        }
    });
    
    setTimeout(function(){
        document.querySelector('.l-presser').insertAdjacentHTML('beforeend','<p>',presserL,'</p>');
        document.querySelector('.s-presser').insertAdjacentHTML('beforeend','<p>',presserS,'</p>');

        if (presserL > presserS ){
            document.querySelector('.l-presser').insertAdjacentHTML('beforeend','<p class="the-winner"> The Winner</p><img class="winner-img" src="giphy.gif"  alt="The winner"/>');
        }else if(presserL < presserS ){
            document.querySelector('.s-presser').insertAdjacentHTML('beforeend','<p class="the-winner">The winner</p><img class="winner-img" src="giphy.gif"  alt="The winner"/>');
        }else{
            document.querySelector('.s-presser').insertAdjacentHTML('beforeend','<p> Equal result</p>');
            document.querySelector('.l-presser').insertAdjacentHTML('beforeend','<p>Equal result</p>')
        }
        document.querySelector("#play-again").style.display ="block";
    },seconds*1000)
}
   
let play=document.querySelector("#start-game,#play-again");
play.addEventListener('click',startGame);
