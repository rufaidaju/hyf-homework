

let setTimer = function(){
    let seconds= document.getElementById('input').value ;
    console.log(seconds*1000);
    let presser1 = presser2 = 0 ;
    // console.log(presser1,presser2);
    document.addEventListener("keypress",function(event){
        if (event.which == 108){
            presser1 += 1;
        }else if(event.which == 115){
            presser2 += 1;
        }
    })
    setTimeout(function(){
        $('#s-presser').append('<p>',presser1,'</p>');
        $('#l-presser').append('<p>',presser2,'</p>')
        if (presser1 > presser2 ){
            $('#s-presser').append('<p> The Winner</p>');
        }else{
            $('#s-presser').append('<p>The winner</p>');
        }
        console.log('l',presser1);
        console.log('s',presser2)

    },seconds*1000)
}