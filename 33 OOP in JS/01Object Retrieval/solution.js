function main(){
    const userProfile = {
        name: "John Doe",
        email: "john.doe@example.com",
        address: {
          city: "New York",
          street: "123 Main St",
          zipCode: "10001"
        }
      };
      
      function getUserDetail(profile, keys) {
        let value = profile;
      
        for (const key of keys) {
          if (!(key in value)) {
            return "Not available";
          }
      
          value = value[key];
        }
      
        return value;
      }
      
//   function getUserDetail(profile, keys) {
//     // Implement your function here
//         let currentObj = profile;

//     for (const key of keys) {
//       if (currentObj.hasOwnProperty(key)) {
//         currentObj = currentObj[key];
//       } else {
//         return "Not available";
//       }
//     }

//     return currentObj;
//   }
    


      
return getUserDetail;      
}