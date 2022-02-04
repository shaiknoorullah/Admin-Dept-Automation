
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import app from '../utils/firebase'




// const auth = getAuth();



// User Phone Number Stored

// export const submitUsrPhn = (e)=> {
//     e.preventDefault()
//     const phone=e.target.phone.value;
//     // console.log(phone)
//     let usrPhone = Number(phone)

//     const auth = getAuth();

//     window.recaptchaVerifier = new RecaptchaVerifier('phnsubmitbtn', {
//       'size': 'invisible',
//       'callback': (response) => {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//         // onSignInSubmit();
//       }
//     }, auth);

//     signInWithPhoneNumber(auth, usrPhone, window.recaptchaVerifier)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//       // ...
//     }).catch((error) => {
//       // Error; SMS not sent
//       // ...
//     });




//     // console.log(usrPhone)
//     return usrPhone
    

const auth = getAuth()

export const setUpRecaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: function (response) {
        console.log("Captcha Resolved");
        this.onSignInSubmit();
      },
      defaultCountry: "IN",
    },auth
  );
};

export const onSignInSubmit = (e) => {
  e.preventDefault();
  this.setUpRecaptcha();
  let phoneNumber = "+91" + this.state.mobile;
  console.log(phoneNumber);
  let appVerifier = window.recaptchaVerifier;
  
  signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // console.log(confirmationResult);
      console.log("OTP is sent");
    })
    .catch(function (error) {
      console.log(error);
    });
};



// User Phone Number Validation

export function validation (val) {

    
    let phoneCheck = val.target.value
    
    let numberPattern = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/

    if(numberPattern.test(phoneCheck))
    {
        val.target.style.backgroundColor = "#00ff00"
    }
    else
    {
        val.target.style.backgroundColor = "#ff0000"
    }

}


 


