// User Phone Number Stored

export const submitUsrPhn = (e)=> {
    e.preventDefault()
    const phone=e.target.phone.value;
    // console.log(phone)
    let usrPhone = Number(phone)
    // console.log(usrPhone)
    return usrPhone
    
}

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





