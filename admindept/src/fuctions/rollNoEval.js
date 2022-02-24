// Fuction to extract Information from students roll number

export function rollNoEval(roll_no) {
  //temporarily storing the roll no in const variable
  const temproll = roll_no;

  // the starting four digits of roll number are the college code
  const CollegeCode = temproll.substr(0, 4);
  // the next 2 digits are the year of admission
  const YearOfAdmission = temproll.substring(4, 6);
  // we get the current year of student by subtracting the YOA by current year
  const CurrentYear = String(
    new Date().getFullYear() - Number("20" + `${YearOfAdmission}`)
  );
  // the last 3 digits are the actual class roll number of the student
  const ClassRollNo = temproll.slice(-3);

  // according to osmania university, the branches are given specific
  // codes, these codes are used in roll numbers.

  const BranchIdentifier = Number(temproll.charAt(8)) - 2;

  const Branches = [
    "CIVIL",
    "CSE",
    "EEE",
    "ECE",
    "MECH",
    "IT",
    "Production",
    "instrumentation",
  ];
  // const BranchesId = ["2","3","4","5","6","7","8","9"]

  const Branch = Branches[BranchIdentifier];

  //creating the object rollNoInfo that holds all the information
  //extracted from roll number and return it

  const rollNoInfo = {
    CollegeCode,
    YearOfAdmission,
    Branch,
    CurrentYear,
    ClassRollNo,
  };
  // console.log(rollNoInfo);
  return rollNoInfo;
}
