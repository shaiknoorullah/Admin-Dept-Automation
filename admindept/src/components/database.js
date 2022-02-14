import { app } from "../utils/firebase";
import "firebase/firestore";
import {
  Firestore,
  getFirestore,
  addDoc,
  getDocs,
  setDoc,
  collection,
  query,
  where,
  Timestamp,
  queryEqual,
} from "firebase/firestore";
import { rollNoEval } from "./rollNoEval";
// import {firebase} from 'firebase'

export const appdb = getFirestore();

export const CheckUsrPhnInDb = async (mobile, rollNo) => {
  const studentRef = collection(appdb, "users");

  const phnQuery = query(studentRef, where("phone", "==", mobile));
  const rollQuery = query(studentRef, where("roll_no", "==", rollNo));

  const usrPhnExists = await getDocs(phnQuery);
  const usrollExists = await getDocs(rollQuery);

  let shouldsign;

  if (usrPhnExists.empty || usrollExists.empty) {
    console.log("the user doesnt exist");
    shouldsign = true;
  } else {
    usrPhnExists.forEach((doc) => {
      if (doc.id) {
        console.log("the user exists", doc.id);
      }
      shouldsign = false;
    });
  }
  return shouldsign;
};

export const CheckUsrPhnInDbForSignin = async (mobile) => {
  const studentRef = collection(appdb, "users");

  const phnQuery = query(studentRef, where("phone", "==", mobile));

  const usrPhnExists = await getDocs(phnQuery);

  let shouldsign;

  if (usrPhnExists.empty) {
    console.log("the user doesnt exist");
    shouldsign = true;
  } else {
    usrPhnExists.forEach((doc) => {
      if (doc.id) {
        console.log("the user exists", doc.id);
      }
      shouldsign = false;
    });
  }
  return shouldsign;
};

export const createUserDocument = async (
  studentname,
  mobile,
  email,
  rollNo
) => {
  if (!studentname || !mobile || !email || !rollNo) {
    console.log("please don't leave a blank field");
  }

  const studentData = rollNoEval(rollNo);
  // console.log(studentData)

  try {
    const userRef = await addDoc(collection(appdb, "users"), {
      studentname: studentname,
      phone: mobile,
      email: email,
      roll_no: rollNo,
      CollegeCode: studentData.CollegeCode,
      YearOfAdmission: studentData.YearOfAdmission,
      Branch: studentData.Branch,
      CurrentYear: studentData.CurrentYear,
      ClassRollNo: studentData.ClassRollNo,
    });
    console.log("Document written with ID: ", userRef);
  } catch (e) {
    console.log("Error adding document: ", e);
  }
};
