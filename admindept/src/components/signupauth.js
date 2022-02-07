import app from '../utils/firebase'
import {getDatabase} from 'firebase/database'
import {onSignInSubmit, submitPhn} from 'auth.js'
import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-dom'
import toast, {toaster} from 'react-hot-toast'
import { notLoading } from './auth'


const fireDb = getDatabase(app)

const initialState = {
            studentname: "",
            phone: "",
            email: "",
            roll_no: ""
        }

// export const onInput = (e) =>{
//     const initialState = {
//         name: "",
//         phone: "",
//         email: "",
//         roll_no: ""
//     }    

//     const [state, setState] = useState(initialState)
//     const [data, setData] = useState({})

//     const {name, phone, email, roll_no} = state

//     const {name, value} = e.target
//     setState[ {...state, [name]: value}]
// }
export const onSignUpSubmit=(e)=>{
    e.preventDefault()

    const studentname = e.target.studentname.value
    const phone = e.target.phone.value
    const email = e.target.email.value
    const roll_no = e.target.roll_no.value

    
    const userData = {
        studentname,
        phone,
        email,
        roll_no,
    }

    submitPhn(userData.phone)
    return userData
}
export const onSubmit = e => {
    e.preventDefault()
    
    onSignUpSubmit(e)
        .then(
            fireDb.child("Users").push(state, (err)=>{
                if(!err){
                    toast.success("Welcome aboard Mr", userData.studentname)
                }else{
                    toast.error(err)
                } 
            })
        )
}


