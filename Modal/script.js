const button = document.querySelector('.btn');
const body = document.body;
const xButton = document.querySelector('.x');
button.addEventListener('click',function(event){

    if(body.classList.contains('modal-is-open')){

        body.classList.remove('modal-is-open');

    }
    else{
    body.classList.add('modal-is-open');

    }
})

xButton.addEventListener('click', event => {

    body.classList.remove('modal-is-open');

})
