import "firebase/firestore";
import {
  getFirestore,
  addDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { rollNoEval } from "./rollNoEval";
// import {firebase} from 'firebase'

//Initializing firebase DB instance
export const appdb = getFirestore();

//Function to check if the user exists in DB this will be used for signup
export const CheckUsrPhnInDb = async (mobile, rollNo) => {
  // Reference of the collection in which students data is stored
  const studentRef = collection(appdb, "users");

  // queries to DB for phone number and roll number
  const phnQuery = query(studentRef, where("phone", "==", mobile));
  const rollQuery = query(studentRef, where("roll_no", "==", rollNo));

  const usrPhnExists = await getDocs(phnQuery);
  const usrollExists = await getDocs(rollQuery);

  // shoulsign is a boolean that tells if a user could signup based on true or false
  let shouldsign;

  // Letting the user signup only if either of the queries return null
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
export const getUsrData = async (mobile) => {
  // Reference of the collection in which students data is stored
  const studentRef = collection(appdb, "users");

  // queries to DB for phone number and roll number
  const phnQuery = query(studentRef, where("phone", "==", mobile));

  const userdocument = await getDocs(phnQuery);

  // shoulsign is a boolean that tells if a user could signup based on true or false
  let user = {};

  // Letting the user signup only if either of the queries return null
  if (userdocument.empty) {
    console.log("the user doesnt exist");
  } else {
    userdocument.forEach((doc) => {
      user = doc._document.data.value.mapValue.fields;
    });
  }
  return user;
};

// Checking user in DB if exists, allow signin otherwise give an error
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

// This function is called to store the users data in DB
export const createUserDocument = async (
  studentname,
  mobile,
  email,
  rollNo
) => {
  // If any field is empty, return an error
  if (!studentname || !mobile || !email || !rollNo) {
    console.log("please don't leave a blank field");
  }

  // Call a function from rollNoEval.js that evaluates info from students roll number
  const studentData = rollNoEval(rollNo);
  // console.log(studentData)

  // Sending and Storing the data
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

export const createUserQuery = async (studentname, mobile, email, rollNo) => {
  // If any field is empty, return an error
  if (!studentname || !mobile || !email || !rollNo) {
    console.log("please don't leave a blank field");
  }

  // Call a function from rollNoEval.js that evaluates info from students roll number
  const studentData = rollNoEval(rollNo);
  // console.log(studentData)

  // Sending and Storing the data
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
