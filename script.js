const form = document.getElementById('contact-form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const message = document.getElementById('message')
const queryType = document.querySelector('input[name="query_type"]:checked')
const checkbox = document.getElementById('consent')

form.addEventListener('submit', event =>{
    event.preventDefault();
    checkInputs()
})

function checkInputs(){
    const fnameValue = firstName.value.trim()
    const lnameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const query = queryType ?  queryType.value.trim(): ''
    const messageContent = message.value.trim()

    if(fnameValue === ''){
        setErrorFor(firstName, 'This field is requred')
    }

    if(lnameValue === ''){
        setErrorFor(lastName, 'This field is requred')
    }

    if(emailValue === ''){
        setErrorFor(email, 'This field is requred')
    }else if(!isEmail(emailValue)){
        setErrorFor(email,'Please enter a valid email address')
    }

    if(query === ''){
        setErrorFor(queryType, 'Please select a query type')
    }

    if(messageContent === ''){
        setErrorFor(message, 'This field is requred')
    }

    if(!checkbox.checked){
        setErrorFor(checkbox, 'To submit this form, please consent to being contacted')
    }

}


function setErrorFor(input, message){
    if(input === document.getElementById('consent') ){
        const formControl = input.parentElement.parentElement;
        const small = formControl.querySelector('small')
        small.classList.add ('error')
        small.innerText = message
        return
    }else if(input===null){
        const radioContainer = document.querySelector(".radio-container")
        const small = radioContainer.querySelector('small')
        small.classList.add ('error')
        small.innerText = message
        return
    }
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.classList.add ('error')
    input.classList.add('error')
    small.innerText = message
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}