import app from '../utils/firebase'
import {getDatabase} from 'firebase/database'
import {loading, notLoading, onSignInSubmit, submitPhn} from 'auth.js'
import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-dom'
import toast, {toaster} from 'react-hot-toast'
import { notLoading } from './auth'


const fireDb = getDatabase(app)

export const onInput = (e) =>{
    const initialState = {
        name: "",
        phone: "",
        email: "",
        roll_no: ""
    }    

    const [state, setState] = useState(initialState)
    const [data, setData] = useState({})

    const {name, phone, email, roll_no} = state

    const {name, value} = e.target
    setState[ {...state, [name]: value}]
}

export const onSubmit = e => {
    e.preventDefault()
    
    if(!name || !phone || !email ||roll_no){
        toast.error("Please provide output in each field")
    }else{
        onSignInSubmit(e).then(
            fireDb.child("Users").push(state, (err)=>{
                if(!err){
                    toast.success("Welcome aboard Mr", $state.name)
                }else{
                    toast.error(err)
                } 
            })
        )
        
        
    }
}
