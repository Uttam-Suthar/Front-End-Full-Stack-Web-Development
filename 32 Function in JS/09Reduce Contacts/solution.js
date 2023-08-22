// Reducing Contacts     question
// Send Feedback
// Suppose you are working on a contact application that stores contact details in a list of objects. Each contact object has the name and company information of a contact, as shown below:

// const contacts = [
// { name: "Alice", company: "ABC Inc." },
// { name: "Bob", company: "XYZ Corp." },
// { name: "Charlie", company: "ABC Inc." }
// ]


// Objectives:
// Create a function with name mapContactsToCompanies that accepts an array of contacts and returns an object with the company names as the keys and an array of the corresponding contact names as the values.
// Use the reduce function to get the expected output.

// Input:
// const contacts = [
// { name: "Alice", company: "ABC Inc." },
// { name: "Bob", company: "XYZ Corp." },
// { name: "Charlie", company: "ABC Inc." }
// ]
// mapContactsToCompanies(contacts)

// Output:

// {"ABC Inc.": ["Alice","Charlie"],"XYZ Corp.": ["Bob"]}

    function mapContactsToCompanies(contacts) {
      return contacts.reduce(function (obj, contact) {
        if (obj[contact.company] == undefined) obj[contact.company] = [];
        obj[contact.company].push(contact.name);
        return obj;
      }, {});
    }
    const contacts = [
      { name: "Alice", company: "ABC Inc." },
      { name: "Bob", company: "XYZ Corp." },
      { name: "Charlie", company: "ABC Inc." }
    ];
  


//   const contacts = [
//   { name: "Alice", company: "ABC Inc." },
//   { name: "Bob", company: "XYZ Corp." },
//   { name: "Charlie", company: "ABC Inc." }
// ];

// function mapContactsToCompanies(contacts) {
//   const companyMap = contacts.reduce((accumulator, contact) => {
//     const { name, company } = contact;
//     if (!accumulator[company]) {
//       accumulator[company] = [];
//     }
//     accumulator[company].push(name);
//     return accumulator;
//   }, {});

//   return companyMap;
// }

// const result = mapContactsToCompanies(contacts);
// console.log(result);