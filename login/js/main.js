const btnInvisiblePassword = document.querySelector('.js-invisible-icon');

const inputPassword = document.querySelector('input[type="password"]');
const inputEmail = document.querySelector('input[type="email"]');

const containerInputEmail = document.querySelector('.js-input__email');
const containerInputPassword = document.querySelector('.js-input__password');


const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

const typeInput = {
    'password':'password',
    'text':'text'
};


btnInvisiblePassword.addEventListener('click', function(e){
  
    const valueOfType = typeInput[inputPassword.getAttribute('type')];
    inputPassword.setAttribute('type',valueOfType === 'password' ?'text': 'password');


})

const setColorAlertValidation = function(pattern, containerInput){

    if((!(pattern.test(this.value)) || !(this.value !==''))){
        containerInput.classList.add('u-border-color-error')
        return;
    }

    containerInput.classList.remove('u-border-color-error')
    containerInput.classList.add('u-border-color-sucess')

}
const removeColorAlertValidation = function(containerInput){
    containerInput.classList.remove('u-border-color-error');
    containerInput.classList.remove('u-border-color-sucess');
}

const clearInputs = function(...inputs){
    inputs.forEach(input=> input.value='');
}
inputPassword.addEventListener('input', function() {
    
    if(this.value === ''){
        btnInvisiblePassword.classList.add('is-hidden');
        return; 
    }

    btnInvisiblePassword.classList.remove('is-hidden'); 
})



inputEmail.addEventListener('input', setColorAlertValidation.bind(inputEmail,patternEmail,containerInputEmail));
inputPassword.addEventListener('input', setColorAlertValidation.bind(inputPassword,patternPassword,containerInputPassword));

inputEmail.addEventListener('focusout', removeColorAlertValidation.bind(null, containerInputEmail));
inputPassword.addEventListener('focusout', removeColorAlertValidation.bind(null, containerInputPassword));


window.addEventListener('submit', function(e){
    e.preventDefault();
    
    
    if(inputEmail.value ===''){
        inputEmail.focus();
        return;
    }
    if(inputPassword.value ===''){
        inputPassword.focus();
        return;
    }
   
})