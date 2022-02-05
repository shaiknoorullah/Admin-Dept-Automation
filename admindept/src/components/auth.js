import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signOut, confirmationResult} from "firebase/auth";
import {app} from '../utils/firebase'


function loading (){
    const loading=document.getElementById('loading');
    const otpText=document.getElementById('otptext')
    loading.classList.remove('hidden')
    otpText.textContent="Processing"
}
function notLoading (){
    const loading=document.getElementById('loading');
    const tick=document.getElementById('tick')
    const otpText=document.getElementById('otptext')
    loading.classList.add('hidden')
    otpText.textContent="OTPSent"
    tick.classList.remove('hidden')
}

const auth = getAuth(app);

let confirmationResultForOtp

// Submit Phone Number && verify recaptcha && send otp

export const onSignInSubmit = (e) => {
  e.preventDefault();
  loading()
  // store user phone number
  const phoneNumber = e.target.mobile.value;

  // console.log(phoneNumber);

  // Recaptcha Verification passing the id of the submit button "recaptcha-container"
  let appVerifier =  new RecaptchaVerifier('recaptcha-container', {
    'size': 'invisible',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      // ...
      console.log("recaptcha success!")
    },
    'expired-callback': () => {
      // Response expired. Ask user to solve reCAPTCHA again.
      // ...
      console.log("recaptcha expired! please send otp again")
    },
    defaultCountry: "IN"
  },auth);


  // console.log("appVerifier", appVerifier)
  
  // Submitting the user phone number && sending the otp

  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      confirmationResultForOtp = confirmationResult;
      // console.log(confirmationResult);
      notLoading()
      console.log("OTP is sent");
    })
    .catch(function (error) {
      console.log(error);
    });
};

// Get Opt from User

export const getOtpFromUserInput = (e) =>{
  e.preventDefault()
  const otp = e.target.otp.value
  return otp
}



// Signout the user

export const UsrSignOut = () => {
  signOut = (auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.


  });

}