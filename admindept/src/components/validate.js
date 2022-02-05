import React from 'react';

export default function validate() {
  return <div></div>;
}
export function validation (val) {
    
    let phoneCheck = val.target.value
    let button=document.getElementById('button')
    let numberPattern = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/

    if(numberPattern.test(phoneCheck))
    {
        val.target.classList.add('border-green-500')
        val.target.classList.remove('border-red-600')
        button.disabled=false;
    }
    else
    {
        val.target.classList.add('border-red-600')
        button.disabled=true;
    }

}
