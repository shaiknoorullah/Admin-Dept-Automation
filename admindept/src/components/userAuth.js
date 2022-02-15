import { app } from "../utils/firebase";
import {
  getAuth,
  RecaptchaVerifier,
  signOut,
  confirmationResult,
  signInWithPhoneNumber,
} from "firebase/auth";
import { CheckUsrPhnInDb } from "./database";
import Otpmodal from "./otpmodal";


const auth = getAuth(app);

// Submit Phone Number && verify recaptcha && send otp
export const submitPhn = null;
// export const onSignInSubmit = (mobile) => {
//   // e.preventDefault();
//   // store user phone number
//   // const mobile = e.target.mobile.value;
//   CheckUsrPhnInDb(mobile)
//   .then(submitPhn(mobile))
//   .catch(error => {
//     console.log("The Phone Number does not exist in DB")
//   })

// };

export const sendOTP = (mobile) => {
  let appVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
        console.log("recaptcha success!");
      },
      "expired-callback": () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        // ...
        console.log("recaptcha expired! please send otp again");
      },
      defaultCountry: "IN",
    },
    auth
  );
  return signInWithPhoneNumber(auth, mobile, appVerifier);
};

export const confirmOTP = async (confirmResult, userOTP) => {
  const result = await confirmResult
    .confirm(userOTP)
    .then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(user, "is signed in!");
      return true;
    })
    .catch((error) => {
      // User couldn't sign in (bad verification code?)
      console.error(error);
      return false;
    });
  return result;
};

// Signout the user

export const UsrSignOut = () => {
  signOut = auth
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
