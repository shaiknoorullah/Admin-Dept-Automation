import {app} from '../utils/firebase'
import 'firebase/firestore'
import { Firestore, getFirestore, addDoc, getDoc, collection, query, where } from 'firebase/firestore'
import  {rollNoEval} from './rollNoEval'
// import {firebase} from 'firebase'
import toast from 'react-hot-toast'



const appdb = getFirestore()

export async function CheckUsrPhnInDb(phoneNumber){

    const q = query(collection(appdb, "users"), where("mobile", "==", phoneNumber))
    if(phoneNumber==q){
        return
    }
    else{
        console.log("the user already exists")
    }
    console.log("q", q)
}

export const createUserDocument = async (studentname, mobile, email, roll_no)=>{

    rollNoEval(roll_no)


    if(!studentname || !mobile || !email || !roll_no){
        toast.error("please don't leave a blank field")
    }

    try{
    const userRef = addDoc(collection(appdb, "users"),{
        studentname: studentname,
        phone: mobile,
        email: email,
        roll_no: roll_no
    })
    toast.success("Document written with ID: ", userRef);
    }catch (e) {
    toast.error("Error adding document: ", e);
    }
}
