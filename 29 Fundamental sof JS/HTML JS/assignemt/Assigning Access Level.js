// Assigning Access Level
// Send Feedback
// You are working on a system that assigns different access levels to employees based on their job titles and their years of experience.

// Write a program that assigns the access level of employees depending on their job titles and years of experience.



// Objectives

// Use the following conditions for assigning the access level:

// Employees with the job title Manager should be assigned "Full Access" regardless of the year of experience.
// For Employees with the job title Supervisor, if the years of experience is 5 or more, then "Full Access"  should be assigned. Otherwise, they should be assigned "Partial Access." 
// For Employees with the job title Associate, if the years of experience is 3 or more, then "Partial Access"  should be assigned. Otherwise, they should be assigned "Limited Access." 
// Employees with any other job title with 2 or more years of experience should be assigned "Limited Access."  Otherwise, they should be assigned "Trainee Access." 

//Write the program here to get the access level of the user depending upon the jobTitle and yearsOfExperience.
//Store your final result in the "accessLevel" variable.
//Please do not alter anything else in the starter code

function main(jobTitle, yearsOfExperience) {
  let accessLevel;
  //write your code here
  if (jobTitle === "Manager") {
    accessLevel = "Full Access";
  } else if (jobTitle === "Supervisor") {
    if (yearsOfExperience >= 5) {
      accessLevel = "Full Access";
    } else {
      accessLevel = "Partial Access";
    }
  } else if (jobTitle === "Associate") {
    if (yearsOfExperience >= 3) {
      accessLevel = "Partial Access";
    } else {
      accessLevel = "Limited Access";
    }
  } else {
    if (yearsOfExperience >= 2) {
      accessLevel = "Limited Access";
    } else {
      accessLevel = "Trainee Access";
    }
  }
  return accessLevel;
}
