import {app} from '../utils/firebase'
import 'firebase/firestore'
import {submitPhn} from './userAuth'
import toast, {toaster} from 'react-hot-toast'
import { createUserDocument } from './database'


// const fireDb = getDatabase(app)

const initialState = {
            studentname: "",
            mobile: "",
            email: "",
            roll_no: ""
}


// const pushToDb = (userData) => {
//     fireDb.ref(User).child("Users").push(userData, (err)=>{
//         if(!err){
//             toast.success("Welcome aboard Mr", userData.studentname)
//         }else{
//             toast.error(err)
//         } 
//     })
// }


export const onSignUpSubmit=(e)=>{
    e.preventDefault()

    const studentname = e.target.studentname.value
    const mobile = e.target.mobile.value
    const email = e.target.email.value
    const roll_no = e.target.roll_no.value

    
    const userData = {
        studentname,
        mobile,
        email,
        roll_no,
    }

    const signupandlogin = (userData) =>{
        
    submitPhn(userData.mobile)
        .then(
            createUserDocument(userData.studentname, userData.mobile, userData.email, userData.roll_no) 
        )
    }
    
    signupandlogin(userData)
}



