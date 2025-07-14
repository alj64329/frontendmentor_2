const form = document.getElementById('contact-form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const message = document.getElementById('message')
// const queryType = document.querySelector('input[name="query_type"]:checked')
const checkbox = document.getElementById('consent')

form.addEventListener('submit', event =>{
    event.preventDefault();
    checkInputs()
})

function checkInputs(){
    const fnameValue = firstName.value.trim()
    const lnameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const queryType = document.querySelector('input[name="query_type"]:checked')
    const messageContent = message.value.trim()

    let isValid = true

    if(fnameValue === ''){
        setErrorFor(firstName, 'This field is requred')
        isValid= false
    }
    if(lnameValue === ''){
        setErrorFor(lastName, 'This field is requred')
        isValid= false
    }
    if(emailValue === ''){
        setErrorFor(email, 'This field is requred')
        isValid= false
    }
    if(!isEmail(emailValue)){
        setErrorFor(email,'Please enter a valid email address')
        isValid= false
    }
    if(!queryType){
        setErrorFor(queryType, 'Please select a query type')
        isValid= false
    }
    if(messageContent === ''){
        setErrorFor(message, 'This field is requred')
        isValid= false
    }
    if(!checkbox.checked){
        setErrorFor(checkbox, 'To submit this form, please consent to being contacted')
        isValid= false
    }

    if(isValid){
        setSuccessFor()
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

function setSuccessFor(){
    const queryType = document.querySelector('input[name="query_type"]:checked')

    firstName.value =''
    lastName.value=''
    email.value =''
    queryType.checked= false
    message.value = ''
    checkbox.checked = false

    const div = document.createElement('div')
    div.className = 'success-message'

    div.innerHTML = `
      <div>
      <img src="./assets/images/icon-success-check.svg" alt="success-ico">
      <div class="header-message">Message Sent!</div>
      </div>
      <p class="success-text">Thanks for completing the form. We'll be in touch soon!</p>
    `

    const container = document.querySelector('.contact-container')

    container.appendChild(div)
}