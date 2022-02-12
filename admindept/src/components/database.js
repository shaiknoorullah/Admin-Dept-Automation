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
import toast from "react-hot-toast";

export const appdb = getFirestore();

// const q = query(collection(db, "users"), where("mobile", "==", phoneNumber));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });

export async function CheckUsrPhnInDb(mobile, rollNo) {
  // const studentRef = appdb.collection("users");

  const checkUsrPhnNo = query(
    collection(appdb, "users"),
    where("phone", "==", mobile)
  );
  const checkUsrRollNo = query(
    collection(appdb, "users"),
    where("roll_no", "==", rollNo)
  );

  const checkUsr = queryEqual(checkUsrPhnNo, checkUsrRollNo);

  if (checkUsr) {
    const querySnapshot = await getDocs(checkUsrPhnNo);

    if (querySnapshot.empty) {
      console.log("No matching documents.");
      return true;
    } else {
      console.log("The User already exists");
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });
    }
  }
}

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
