
export async function rollNoEval(roll_no){
    

    let rollNoInfo = {
        CollegeCode: "",
        YearOfAdmission: "",
        Branch: "",
        CurrentYear: "",
        RollNo: "",
    }
    const temproll = toString(roll_no) 
    rollNoInfo.CollegeCode = temproll.substr(0, 4)
    rollNoInfo.YearOfAdmission = temproll.substring(4, 7)
    rollNoInfo.Branch = temproll.charAt("")
    if()
}