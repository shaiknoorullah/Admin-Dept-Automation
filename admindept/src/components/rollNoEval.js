import toast from "react-hot-toast"

export async function rollNoEval(roll_no){
    

    let rollNoInfo = {
        CollegeCode: "",
        YearOfAdmission: "",
        Branch: "",
        CurrentYear: "",
        ClassRollNo: "",
    }
    const temproll = toString(roll_no) 
    rollNoInfo.CollegeCode = temproll.substr(0, 4)
    rollNoInfo.YearOfAdmission = temproll.substring(4, 7)
    rollNoInfo.CurrentYear = toString(new Date().getFullYear() - Number(rollNoInfo.YearOfAdmission))
    rollNoInfo.ClassRollNo = temproll.slice(-3)
    
    
    let Branches = ["CIVIL", "CSE", "EEE", "ECE", "MECH", "IT","Production", "instrumentation"]
    let BranchesId = [2,3,4,5,6,7,8,9]

    
    rollNoInfo.Branch = BranchesId.forEach(element => {
        if(temproll.charAt(8)==BranchesId[element]){
            return Branches[element]
        }else{
            toast.error("Invalid Branch ID in Roll No")
        }
    });

    // console.log(rollNoInfo)
    return rollNoInfo

}

