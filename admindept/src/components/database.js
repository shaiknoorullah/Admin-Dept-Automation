import {app} from '../utils/firebase'
import 'firebase/firestore'
import { Firestore, getFirestore, addDoc, getDoc, setDoc, collection, query, where, Timestamp } from 'firebase/firestore'
import  {rollNoEval} from './rollNoEval'
// import {firebase} from 'firebase'
import toast from 'react-hot-toast'



export const appdb = getFirestore()

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

    if(!studentname || !mobile || !email || !roll_no){
        console.log("please don't leave a blank field")
    }



    const studentData = rollNoEval(roll_no)
    // console.log(studentData)

    try{


    const userRef = await addDoc(collection(appdb, "users"),{
        studentname: studentname,
        phone: mobile,
        email: email,
        roll_no: roll_no,
        CollegeCode: studentData.CollegeCode,
        YearOfAdmission: studentData.YearOfAdmission,
        Branch: studentData.Branch,
        CurrentYear: studentData.CurrentYear,
        ClassRollNo: studentData.ClassRollNo,
    }
    )
    console.log("Document written with ID: ", userRef);
    }catch (e) {
    console.log("Error adding document: ", e);
    }
}
