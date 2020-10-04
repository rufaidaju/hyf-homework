
 document.addEventListener('submit',(event) => {
    event.preventDefault();
    searchForGiphy();
    document.addEventListener('submit',function() { window.location.reload()});
    document.querySelector(".search-again").addEventListener('click',function() { window.location.reload()});

})

function searchForGiphy(){
    let api = 'https://api.giphy.com/v1/gifs/search?api_key=uHMG4xkYv7sDfshvvUHjRJr8IwIGJh71&q=' ,
    userInput = document.querySelector(".search-input").value ,
    userLimit = document.querySelector(".limit-input").value ,
    limit = '&limit='+ userLimit;
    let apiUrl = api + userInput + limit + '&offset=0&rating=G&lang=en';
    let xhr = $.get(apiUrl);
    if (userLimit != 0){
        document.querySelector(".search-btn").style.display ="none";
        document.querySelector(".search-again").style.display ="block";
        // Get the data from the api 
        let xhr = $.get(apiUrl);
        xhr.done(function(response) { 
            let  giphyData = response.data;
            giphyData.forEach(element => {
                document.querySelector('.add-giphy').insertAdjacentHTML('beforeend',
                `<img  class="giphy-img" src = ${element.images.fixed_height.url}  alt=${element.title}/>`);
            });
        });
    } 
}



