

let startGame = function(){
    document.querySelector("#start-game").style.display ="none";
    let seconds= document.querySelector('.input').value ;
    console.log(seconds*1000);
    let presser1 = presser2 = 0 ;
    document.addEventListener("keypress",function(event){
        if (event.which == 108){
            presser1 += 1;
        }else if(event.which == 115){
            presser2 += 1;
        }
    });
    
    setTimeout(function(){
        console.log(presser1,presser2);

        $('#l-presser').append('<p>',presser1,'</p>');
        $('#s-presser').append('<p>',presser2,'</p>');
        if (presser1 > presser2 ){
            $('#l-presser').append('<p class="the-winner"> The Winner</p><img class="winner-img" src="giphy.gif"  alt="The winner"/>');
        }else if(presser1 < presser2 ){
            $('#s-presser').append('<p class="the-winner">The winner</p><img class="winner-img" src="giphy.gif"  alt="The winner"/>');
        }else{
            $('#s-presser').append('<p> Equal result</p>');
            $('#l-presser').append('<p>Equal result</p>')
        }
        document.getElementById("play-again").style.display ="block";
        console.log('l',presser1);
        console.log('s',presser2)

    },seconds*1000)
}

