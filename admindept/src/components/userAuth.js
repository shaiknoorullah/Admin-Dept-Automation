import { app } from "../utils/firebase";
import {
  getAuth,
  RecaptchaVerifier,
  signOut,
  confirmationResult,
  signInWithPhoneNumber
} from "firebase/auth";
import { CheckUsrPhnInDb } from "./database";
import Otpmodal from "./otpmodal";
import React, {useState} from "react";


export const auth = getAuth(app);


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

    if(result===true&&user!==null){
      return user
    }
  
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
