import { app } from "../utils/firebase";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
  confirmationResult,
} from "firebase/auth";
import { CheckUsrPhnInDb } from "./database";
import Otpmodal from "./otpmodal";

export function loading() {
  const loading = document.getElementById("loading");
  const otpText = document.getElementById("otptext");
  loading.classList.remove("hidden");
  otpText.textContent = "Processing";
}

export function notLoading() {
  const loading = document.getElementById("loading");
  const tick = document.getElementById("tick");
  const otpText = document.getElementById("otptext");
  loading.classList.add("hidden");
  otpText.textContent = "OTPSent";
  tick.classList.remove("hidden");
}

const auth = getAuth(app);

// Submit Phone Number && verify recaptcha && send otp
export const submitPhn = null;
// export const onSignInSubmit = (phoneNumber) => {
//   // e.preventDefault();
//   // store user phone number
//   // const phoneNumber = e.target.mobile.value;
//   CheckUsrPhnInDb(phoneNumber)
//   .then(submitPhn(phoneNumber))
//   .catch(error => {
//     console.log("The Phone Number does not exist in DB")
//   })

// };

export const sendOTP = (number) => {
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
  return signInWithPhoneNumber(auth, number, appVerifier);
};

export const confirmOTP = (confirmResult, userOTP) => {
  const result = confirmResult
    .confirm(userOTP)
    .then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(user, "is signed in!");
      return true;
      // Here we check if the user is available in the database
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
