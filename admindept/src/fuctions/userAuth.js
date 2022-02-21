import { app } from "../utils/firebase";
import {
  getAuth,
  RecaptchaVerifier,
  signOut,
  signInWithPhoneNumber
} from "firebase/auth";

// Initializing the firebase auth instance
export const auth = getAuth(app);

// A function that sends otp to students phone and verifies recaptcha
// The signInWithPhoneNumber method issues the reCAPTCHA challenge to the user,
//and if the user passes the challenge, requests that Firebase Authentication send an
//SMS message containing a verification code to the user's phone.

export const sendOTP = (mobile) => {
  let appVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
        // console.log("recaptcha success!");
      },
      "expired-callback": () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        // ...
        // console.log("recaptcha expired! please send otp again");
      },
      defaultCountry: "IN",
    },
    auth
  );
  return signInWithPhoneNumber(auth, mobile, appVerifier);
};


// confirm the otp from the user and use the .confirmResult method of signinwithphonenumber
// to confirm the otp.
// If the Otp is correct; use the result to sign in the user and store in {user} constant
// this can be returned later if the result is true && user!=null

export const confirmOTP = async (confirmResult, userOTP) => {
  let user
  const result = await confirmResult
    .confirm(userOTP)
    .then((result) => {
      // User signed in successfully.
      user = result.user;
      console.log(user, "is signed in!");
      return true;
    })
    .catch((error) => {
      // User couldn't sign in (bad verification code?)
      console.error(error);
      return false;
    });

    // return the user, user is an object returned by auth instance
    // when user signs in. It contains useful information such as time of authentication, unique id (uid), etc
    if(result===true&&user!==null){
      return user
    }
  
};

// Signout the user

export const UsrSignOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("signed out")
      window.location.reload()
    })
    .catch((error) => {
      // An error happened.
    });
};
