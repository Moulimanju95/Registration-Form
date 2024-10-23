const form = document.getElementById('form');
const username = document.getElementById('uname');
const emailAddress = document.getElementById('email');
const Password = document.getElementById('password');
const CPassword2 = document.getElementById('password2');
const PhoneNumber = document.getElementById('phonenumber');

form.addEventListener('submit',event => {
  event.preventDefault();

  validateForm();
});

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Regex pattern for 10-digit phone number
const phoneNumberIsValid = PhoneNumber => {
  return /^\d{10}$/.test(PhoneNumber);
}

const validateForm = () => {
  const usernamevalue = username.value.trim();
  const passwordvalue = Password.value.trim();
  const cpassword2value = CPassword2.value.trim();
  const phonenumbervalue = PhoneNumber.value.trim();
  const emailvalue = emailAddress.value.trim();
  
  
    //username validation
    if (usernamevalue === '') {
      setError(username, 'Username is required');
    }
    else if(usernamevalue.length < 4){
      setError(username, 'Username length must be atleast 4 characters');
    }else{
     setSuccess(username)
    }    
    //pasword validation
    if (passwordvalue === "") {
      setError(Password, 'Password is required');
    }
    else{
     setSuccess(Password)
    }
    //confirm Password2value
    if (cpassword2value === "") {
      setError(CPassword2, 'Confirm password is required');
    }
    else
     if(passwordvalue !== cpassword2value){
      setError(CPassword2, 'Password does not match');
    }else{
     setSuccess(CPassword2)
    }
    if (emailvalue === "") {
      setError(emailAddress, 'Email is required');
    }
    else if (!emailIsValid(emailAddress.value)) {
      setError(emailAddress, 'Provide a valid email address');
    }else{
      setSuccess(emailAddress)
    }
    // Validate phone number 
    if (phonenumbervalue === "") {
      setError(PhoneNumber, 'Please enter your Phone Number');
    }
    else if (!phoneNumberIsValid(phonenumbervalue)) {
      setError(PhoneNumber, 'Please enter a valid 10-digit phone number');
    }else{
      setSuccess(PhoneNumber)
    }
  };

const setError =(element,message) => {
  const inputbox = element.parentElement;
  const errorDisplay = inputbox.querySelector('.error');
  inputbox.className = "inputbox";

  errorDisplay.innerText = message;
  inputbox.classList.add('error');
  inputbox.classList.remove('success');
}
const setSuccess =(element) => {
  const inputbox = element.parentElement;
  const errorDisplay = inputbox.querySelector('.error');

  errorDisplay.innerText = '';
  inputbox.classList.add('success');
  inputbox.classList.remove('error');
}










