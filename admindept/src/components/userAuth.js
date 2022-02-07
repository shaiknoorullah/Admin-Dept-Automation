import {app} from '../utils/firebase'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signOut, confirmationResult} from "firebase/auth";
import {CheckUsrPhnInDb} from './database'


export function loading (){
    const loading=document.getElementById('loading');
    const otpText=document.getElementById('otptext')
    loading.classList.remove('hidden')
    otpText.textContent="Processing"
}

export function notLoading (){
    const loading=document.getElementById('loading');
    const tick=document.getElementById('tick')
    const otpText=document.getElementById('otptext')
    loading.classList.add('hidden')
    otpText.textContent="OTPSent"
    tick.classList.remove('hidden')
}

const auth = getAuth(app);

var window = {
  confirmationResult: undefined
}


// Submit Phone Number && verify recaptcha && send otp

export const onSignInSubmit = (e) => {
  e.preventDefault();
  // store user phone number
  const phoneNumber = e.target.mobile.value;
  CheckUsrPhnInDb(phoneNumber)
  .then(submitPhn(phoneNumber))
  .catch("the phone number does not exist")
  
};

export async function submitPhn(phoneNumber){
  
  loading()


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
      confirmationResult.confirm(
        // letstrythis()
        prompt("please enter your otp", "123456")
        
        )
      .then((result)=>{
        const user = result.user
        console.log(user, "is signed in!")
        // Here we check if the user is available in the database
        console.log(phoneNumber, "is signed in")
        // Here you will add the route to the student dashboard and log in the user
      })
      
      // window.confirmationResult = confirmationResult.confirm(otp);
      // console.log(confirmationResult);
      notLoading()
      console.log("OTP is sent");
    })
    .catch(function (error) {
      console.log(error);
    });
    return null
};

// Get Opt from User





// Signout the user

export const UsrSignOut = () => {
  signOut = (auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.


  });

}