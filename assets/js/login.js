import './dropdown.js';
import '../sass/main.scss';
//Constantes
const name = $('#inputName');
const firstSurname = $('#inputSurnameA');
const lastSurname = $('#inputSurnameB');
const email = $('#inputEmailA');
const emailConfirm = $('#inputEmailB');
const password = $('#inputPasswordA');
const passwordConfirm = $('#inputPasswordB');
const emailLogin = $('#inputEmail');
const passwordLogin = $('#inputPassword');
let userRegister = [];

name.keypress(() => {
    name.removeClass('is-invalid')
})
name.blur(()=>{
    name.removeClass('is-invalid')
})
firstSurname.keypress(() => {
    firstSurname.removeClass('is-invalid')
})
firstSurname.blur(()=>{
    firstSurname.removeClass('is-invalid')
})
lastSurname.keypress(() => {
    lastSurname.removeClass('is-invalid')
})
lastSurname.blur(()=>{
    lastSurname.removeClass('is-invalid')
})
email.keypress(() => {
    email.removeClass('is-invalid')
    $('#mail').css("display", "none")
})
email.blur(() => {
    email.removeClass('is-invalid')
    $('#mail').css("display", "none")
})
emailConfirm.keypress(() => {
    emailConfirm.removeClass('is-invalid')
})
emailConfirm.blur(() => {
    emailConfirm.removeClass('is-invalid')
})
password.keypress(() => {
    password.removeClass('is-invalid')
    $('#pass1').css("display", "none")
})
password.blur(() => {
    password.removeClass('is-invalid')
    $('#pass1').css("display", "none")
})
passwordConfirm.keypress(() => {
    passwordConfirm.removeClass('is-invalid')
    $('#pass2').css("display", "none")
})
passwordConfirm.blur(() => {
    passwordConfirm.removeClass('is-invalid')
    $('#pass2').css("display", "none")
})

const validateInputsRegister = () =>{
    name.val() ? '' : name.addClass('is-invalid')
    firstSurname.val() ? '' : firstSurname.addClass('is-invalid')
    lastSurname.val() ? '' : lastSurname.addClass('is-invalid')
    email.val() ? '' : email.addClass('is-invalid')
    emailConfirm.val() ? '' : emailConfirm.addClass('is-invalid')
    password.val() ? '' : password.addClass('is-invalid')
    passwordConfirm.val() ? '' : passwordConfirm.addClass('is-invalid')
    console.log(password.val(), passwordConfirm.val())
    if(name.val() && firstSurname.val() && lastSurname.val() && email.val() && emailConfirm.val() && password.val() && passwordConfirm.val() !== ''){
        if (validateEmail(email.val(), emailConfirm.val()) && validatePassword(password.val(), passwordConfirm.val())){
          addUser()
      }
    }
  }

window.validateInputsRegister = validateInputsRegister

const validateEmail = (email_, emailConfirm_) =>{
    if( email_ == emailConfirm_){
       return true;
    }else{
        email.addClass('is-invalid')
        emailConfirm.addClass('is-invalid')
        $('#mail').css("display", "block")
        return false;
    }
}
const validatePassword = (password_, passwordConfirm_) =>{
    if (password_ == passwordConfirm_){
        console.log(password_, passwordConfirm_)
        if( password_.length < 6){
            password.addClass('is-invalid')
            $('#pass1').css("display", "block")
            passwordConfirm.addClass('is-invalid')
            return false
            
        }else{
            console.log('entre a más de 6 carácteres')
            return true
        }
    }else{
        password.addClass('is-invalid')
        passwordConfirm.addClass('is-invalid')
        $('#pass2').css("display", "block")
        return false
    }
}
const validateInputsLogin = () =>{
    emailLogin.val() ? '' : emailLogin.addClass('is-invalid')
    passwordLogin.val() ? '' : passwordLogin.addClass('is-invalid')
    if(emailLogin.val() && passwordLogin.val() !== ''){
        add()
    }
}
const addUser = () => {
    const newItem = {
      name : name.val(),
      firstSurname: firstSurname.val(),
      lastSurname: lastSurname.val(),
      email: email.val(),
      password: password.val()
    }
    userRegister.push(newItem)
    console.log(userRegister)
    
  }
