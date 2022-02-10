import { type } from "@testing-library/user-event/dist/type"
import { CollectionReference } from "firebase/firestore"
import toast from "react-hot-toast"

export function rollNoEval(roll_no){
    

    
    const temproll = roll_no
    const CollegeCode = temproll.substr(0, 4)
    const YearOfAdmission = temproll.substring(4, 6)
    const CurrentYear = String((new Date().getFullYear() - Number('20' + `${YearOfAdmission}`)))
    const ClassRollNo = temproll.slice(-3)
    
    const BranchIdentifier = Number(temproll.charAt(8)) - 2
    
    const Branches = ["CIVIL", "CSE", "EEE", "ECE", "MECH", "IT","Production", "instrumentation"]
    // const BranchesId = ["2","3","4","5","6","7","8","9"]

    

    const Branch = Branches[BranchIdentifier]


   async function Branchofstudent(Branches, BranchesId){
       for(const i of BranchesId){

        console.log(typeof(BranchesId[i]))

            if(BranchesId[i]==BranchIdentifier){
                console.log(BranchesId[i], Branches[i])

                return Branch = Branches[i]
            }
            else{
                // console.log("Invalid Branch ID in Roll No")
                // console.log(typeof(Branches[i]))
                continue
            }
        }
    }
    
    const rollNoInfo = {
        CollegeCode,
        YearOfAdmission,
        Branch,
        CurrentYear,
        ClassRollNo,
    }
    console.log(rollNoInfo)
    return rollNoInfo
}


