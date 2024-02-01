//button

const button = document.querySelector('.btn');
const sideMenuDiv = document.querySelector('#side-menu');

button.addEventListener('click', function(event){
if(sideMenuDiv.classList.contains('display')){

    sideMenuDiv.classList.remove('display');
}
    
else{

    sideMenuDiv.classList.add('display');
}
}

    
)
