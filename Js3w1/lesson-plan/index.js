
    fetch('http://api.open-notify.org/astros.json')
        .then(response =>response.json())
        .then(outPutRender)

    function outPutRender (data){
        root = document.querySelector('#root');
        astronautsNames = data.people.map (item => `<li> ${item.name}</li>`);
        document.querySelector('#fetch-data').addEventListener('click',function (){
            console.log('astronammmes innn',astronautsNames)
            document.querySelector('#root').innerHTML = `There are ${data.number}  success astrunauts, they are : ${astronautsNames.join(' ')}`
        })
    }