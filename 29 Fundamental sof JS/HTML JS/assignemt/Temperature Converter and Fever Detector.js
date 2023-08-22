//Write the program to convert tempF to into celcius and also to detect fever.
//Assign the final answer in result variable.
//Do not alter anything else given in the starter code

function main(tempF) {
  let result;

  // write your code here
    
      const tempC = (tempF - 32) * 5 / 9;

  const roundedTempC = tempC.toFixed(1);


  if (tempC > 37) {
    result = `Patient's temperature: ${roundedTempC}°C. The patient has a fever.`;
  } else {
    result = `Patient's temperature: ${roundedTempC}°C. The patient does not have a fever.`;
  }


  return result;
}

