import React from 'react';

export default function validate() {
  return <div></div>;
}
export function validation (val) {
    
    let phoneCheck = val.target.value
    let input=document.getElementById('input');
    let numberPattern = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/

    if(numberPattern.test(phoneCheck))
    {
        input.classList.add('border-green-500')
    }
    else
    {
        input.classList.add('border-red-600')
    }

}
