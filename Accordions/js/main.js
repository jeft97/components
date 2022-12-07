const accordianContent= document.querySelector('.js-is-hidden');
const accordianContainer = document.querySelector('.js-row');

const allAccordianContents = document.querySelectorAll('.js-all-accordian-content')
const allHeading = document.querySelectorAll('.heading-3');
const allAriaHidden = document.querySelectorAll('[aria-hidden]');
const allAriaExpanded =  document.querySelectorAll('[aria-expanded]');


const isHiddenAriaExpanded = function(elem,attr, value,){
    return elem.getAttribute(attr) === value;
}

const changeStateAttributeAria = function(elem,attr,state){
    elem.setAttribute(attr,state);
   
}
const openAndCloseAccordian = function(event){

    const btnClicked = event.target.closest('svg');

    if(!btnClicked)return;

    
    allHeading.forEach(elem => {elem.classList.remove('u-is-active');});
    
    

    const {parentElement} = btnClicked.parentElement.parentElement;
    const {lastElementChild} = parentElement;

    const ariaHidden = parentElement.querySelector('[aria-hidden]')

    if(!isHiddenAriaExpanded(btnClicked.parentElement, 'aria-expanded','true')){

        changeStateAttributeAria(btnClicked.parentElement,'aria-expanded','true');
        changeStateAttributeAria(ariaHidden,'aria-hidden','false');
        parentElement.querySelector('.js-heading').classList.toggle('u-is-active');

    }else{
        changeStateAttributeAria(btnClicked.parentElement,'aria-expanded','false');
        changeStateAttributeAria(ariaHidden,'aria-hidden','true');
        
    }


    lastElementChild.classList.toggle('is-hidden');
    
    
}


accordianContainer.addEventListener('click', openAndCloseAccordian);