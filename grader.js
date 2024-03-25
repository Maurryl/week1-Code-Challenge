//This function prompts the user to  input student marks and returns the corresponding grade.
function generateGrade( grade){
    //Get user input for students marks
  let marks = prompt("Please enter the student's marks (0-100): ");
  // Ensure the input is a number and within the valid range
  if( isNaN(marks) || marks < 0 || marks >100){
    return"Invalid marks. Please enter a number between 0 and 100.";
  }
  //Determine grade
    if (marks > 79) {
      return "Grade A";
    } else if (marks >= 60) {
      return "Grade B"
    } else if (marks >= 49) {
      return "Grade C";
    } else if (marks >= 40) {
      return "Grade D";
    } else {
      return "Grade E";
    }
  }
  //Example.usage
  console.log(generateGrade(grade))
  