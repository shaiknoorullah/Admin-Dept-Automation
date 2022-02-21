import React from "react";

export default function validate() {
  return <div></div>;
}

// a function that validates the indian phone numbers
// and checks things like the number starts from 6,7,8,9 and is 10 digits or not
export function validation(val) {
  let phoneCheck = val.target.value;
  // let input = document.getElementById("input");
  let button = document.getElementById("recaptcha-container");
  let numberPattern = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;

  // Disable the submit button if the numberPattern is not true
  if (numberPattern.test(phoneCheck)) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
