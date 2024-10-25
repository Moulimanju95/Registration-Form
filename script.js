const form = document.getElementById('form');
const username = document.getElementById('uname');
const emailAddress = document.getElementById('email');
const Password = document.getElementById('password');
const CPassword2 = document.getElementById('password2');
const PhoneNumber = document.getElementById('phonenumber');
const CGender = document.getElementById('cgender');
const Termsset = document.getElementById('termsset');

form.addEventListener('submit', event => {
  event.preventDefault();
  let x = document.querySelector('form').elements;
  console.log("Username: ", x['uname'].value);
  console.log("Password: ", x['password'].value);
  console.log("Confirm Password: ", x['password2'].value);
  console.log("Email: ", x['email'].value);
  console.log("Phone Number: ", x['phonenumber'].value);
  /* console.log("Gender: ", x['cgender.checked'].value);
  console.log("T&C: ", x['termsset.checked'].value);
 */  validateForm();
});


// Email 
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


  validateuser();
  validatepwd();
  validatecpwd();
  validateemail();
  validatephno();
  validategender();
  validtermsset();

  function validateuser() {
    //username validation
    if (usernamevalue === '') {
      setError(username, 'Username is required');
    }
    else if (usernamevalue.length < 4) {
      setError(username, 'Username length must be atleast 4 characters');
    } else {
      setSuccess(username)
    }
  }

  function validatepwd() {
    //pasword validation
    if (passwordvalue === "") {
      setError(Password, 'Password is required');
    }
    else {
      setSuccess(Password)
    }
  }

  function validatecpwd() {
    //confirm Password2value
    if (cpassword2value === "") {
      setError(CPassword2, 'Confirm password is required');
    }
    else
      if (passwordvalue !== cpassword2value) {
        setError(CPassword2, 'Password does not match');
      } else {
        setSuccess(CPassword2)
      }
  }

  function validateemail() {
    if (emailvalue === "") {
      setError(emailAddress, 'Email is required');
    }
    else if (!emailIsValid(emailAddress.value)) {
      setError(emailAddress, 'Provide a valid email address');
    } else {
      setSuccess(emailAddress)
    }
  }

  function validatephno() {
    // Validate phone number 
    if (phonenumbervalue === "") {
      setError(PhoneNumber, 'Please enter your Phone Number');
    }
    else if (!phoneNumberIsValid(phonenumbervalue)) {
      setError(PhoneNumber, 'Please enter a valid 10-digit phone number');
    } else {
      setSuccess(PhoneNumber)
    }
  }
  function validategender() {
    var genderM = form.gender_male;
    var genderF = form.gender_female;
    var genderO = form.gender_other;

    if(genderM.checked == false && genderF.checked == false && genderO.checked == false) {
      console.log('Gender: unchecked');
    }
    else {
      console.log('Gender: checked');
    }
  }
    function validtermsset()
  {
    if( Termsset.checked == false)
    {
      console.log('Terms: unchecked');
    }
    else {
      console.log('Terms: checked');
    }
  }
  }
  const setError = (element, message) => {
    const inputbox = element.parentElement;
    const errorDisplay = inputbox.querySelector('.error');
    inputbox.className = "inputbox";

    errorDisplay.innerText = message;
    inputbox.classList.add('error');
    inputbox.classList.remove('success');
  }
  const setSuccess = (element) => {
    const inputbox = element.parentElement;
    const errorDisplay = inputbox.querySelector('.error');
    errorDisplay.innerText = '';
    inputbox.classList.add('success');
    inputbox.classList.remove('error');
   
  }
  
  alert("form validation done")








