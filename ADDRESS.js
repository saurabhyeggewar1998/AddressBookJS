//var helper = require('./addressregex.js');
//console.log(helper);
// let readlineSync = require("readline-sync");
// class Contact {
    
//     firstName;
//     lastName;
//     address;
//     city;
//     state;
//     zipCode;
//     phoneNumber;
//     emailId;

    
//     constructor(...parameters) {
//         this.firstName = parameters[0];
//         this.lastName = parameters[1];
//         this.address = parameters[2];
//         this.city = parameters[3];
//         this.state = parameters[4];
//         this.zipCode = parameters[5];
//         this.phoneNumber = parameters[6];
//         this.emailId = parameters[7];
//     }

//     toString() {
//         return `First Name: ${this.firstName}\tLast Name: ${this.lastName}\tAddress: ${this.address}\tCity: ${this.city}\tState: ${this.state}\tZipCode: ${this.zipCode}\tPhone Number: ${this.phoneNumber}\tEmail-Id: ${this.emailId}\n`;
//     }
// }


// function AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId) {
//     let contact
//     try {
       
//         contact = new Contact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
//     } catch (e) {
//         console.error(e)
//     }
//     return contact;
// }

// //uc2
// function getContactDetails() {
//     try {
        
//         let firstName = readlineSync.question('Enter Your FirstName : ');
//         helper.checknamePattern(firstName);
      
//         let lastName = readlineSync.question('Enter Your LastName : ');
//         helper.checknamePattern(lastName);
        
//         let address = readlineSync.question('Enter Your Address : ');
//         helper.checknamePattern(address);
       
//         let city = readlineSync.question('Enter Your City Name: ');
//         helper.checknamePattern(city);
        
//         let state = readlineSync.question('Enter Your State Name : ');
//         helper.checknamePattern(state);
        
//         let zipCode = parseInt(readlineSync.question('Enter Your Zip Code : '));
//         helper.checkZipCodePattern(zipCode);
        
//         let phoneNumber = parseInt(readlineSync.question('Enter Your Phone Number : '));
//         helper.CheckphoneNumPattern(phoneNumber);
//         let emailId = readlineSync.question('Enter Your Email Id : ');
//         helper.CheckemailIdPattern(emailId);
//         let contactDetails = AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
//         console.log("\nContact Details: ");
//         console.log(contactDetails.toString());
        
//     } catch (e) {
//         console.error(e);
//     }
// }
// getContactDetails();


//uc3 add contact

// var prompt=require('prompt-sync')();

// const NAME_REGEX_PATTERN = RegExp('^[A-Z]{1}[a-z]{2,}$');
//  const ADDRESS_REGEX_PATTERN = RegExp('^[a-zA-z]{3,}$');
//  const PINCODE_REGEX_PATTERN = RegExp('^[0-9]{6}$');
//  const PHONE_NUMBER_PATTERN = RegExp('^[9][1][6-9]{1}[0-9]{9}$'); 
//  const EMAIL_REGEX_PATTERN=RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$');
//  let contactArray = [ ];

// class contact {

//     set firstName(firstName) {
//         if (NAME_REGEX_PATTERN.test(firstName))
//             this.perFirstName = firstName;
//         else throw "Invalid first name ";
//     }
//     get firstName() {
//         return this.perFirstName;
//     }
//     set lastName(lastName) {
//         if (NAME_REGEX_PATTERN.test(lastName))
//             this.perLastName = lastName;
//         else throw "Invalid last name";
//     }
//     get lastName() {
//         return this.perLastName;
//     }
//     set address(address) {
//         if (ADDRESS_REGEX_PATTERN.test(address))
//             this.perAddress = address;
//         else throw "Invalid address";
//     }
//     get address() {
//         return this.perAddress;
//     }
//     set city(city) {
//         if (ADDRESS_REGEX_PATTERN.test(city))
//             this.perCity = city;
//         else throw "Invalid city name";
//     }
//     get city() {
//         return this.perCity;
//     }
//     set state(state) {
//         if (ADDRESS_REGEX_PATTERN.test(state))
//             this.perState = state;
//         else throw "Invalid state";
//     }
//     get state() {
//         return this.perState;
//     }
//     set zip(zip) {
//         if (PINCODE_REGEX_PATTERN.test(zip))
//             this.perZip = zip;
//         else throw "Invalid zip code";
//     }
//     get zip() {
//         return this.perZip;
//     }
//     set phoneNumber(phoneNumber) {
//         if (PHONE_NUMBER_PATTERN.test(phoneNumber))
//             this.perPhoneNumber = phoneNumber;
//         else throw "Invalid phone number";
//     }
//     get phoneNumber() {
//         return this.perPhoneNumber;
//     }
//     set email(email) {
//         if (EMAIL_REGEX_PATTERN.test(email))
//             this.perEmail = email;
//         else throw "Invalid email";
//     }
//     get email() {
//         return this.perEmail;
//     }

//     constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.address = address;
//         this.city = city;
//         this.state = state;
//         this.zip = zip;
//         this.phoneNumber = phoneNumber;
//         this.email = email;
//     }

//     toString() {
//         return "First name: " + this.firstName + "\nLast name: " + this.lastName + "\nAddress: " + this.address + "\nCity: " + this.city + "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone number: " + this.phoneNumber + "\nEmail: " + this.email;
//     }
// }

// try {
//     let contact1 = new contact("Vaibhav", "Jagtap", "Shewalewadi", "Mumbai", "Maharashtra", 412307, 918007815003, "vaibhva53@gmail.com");
//     let contact2 = new contact("Suraj", "Khumbhar", "Wadi", "Nagpur", "Maharashtra", 453242, 919822639307, "suraj63@gmail.com");

//     contactArray.push(contact1);
//     contactArray.push(contact2);
//     console.log(contactArray);

// } catch (Exception) {
//     console.log(Exception)
// }

//uc4  Edit Contact

// const prompt = require("prompt-sync")();
// const validateContact = require("./ValidateContacts.js");
// let addressBookPersonArr = [];
// var personInfo;
// class PersonInfo {
//   firstName;
//   lastName;
//   address;
//   city;
//   state;
//   zip;
//   phoneNumber;
//   email;
//   constructor(firstName,lastName,address,city,state,zip,phoneNumber,email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.address = address;
//     this.city = city;
//     this.state = state;
//     this.zip = zip;
//     this.phoneNumber = phoneNumber;
//     this.email = email;
//   }
//   toString() {
//     return (
//       "First Name = " +
//       this.firstName +
//       ", Last Name = " +
//       this.lastName +
//       ",Address = " +
//       this.address +
//       ",City = " +
//       this.city +
//       ",State = " +
//       this.state +
//       ",Zip = " +
//       this.zip +
//       ",Phone Number = " +
//       this.phoneNumber +
//       ",Email = " +
//       this.email
//     );
//   }
// }
// function addContact() {
//   let firstName = prompt("Enter Your First Name ");
//   let lastName = prompt("Enter Your Last Name ");
//   let address = prompt("Enter Your address ");
//   let city = prompt("Enter Your city ");
//   let state = prompt("Enter Your state ");
//   let zip = prompt("Enter Your Zip Code ");
//   let phNumber = prompt("Enter Your Mobile Number ");
//   let email = prompt("Enter Your email ");
//   personInfo = new PersonInfo(firstName,lastName,address,city,state,zip,phNumber,email);
//   try {
//     validateContact.validateFirstName(personInfo.firstName);
//     validateContact.validateLastName(personInfo.lastName);
//     validateContact.validateAddress(personInfo.address);
//     validateContact.validateCity(personInfo.city);
//     validateContact.validateState(personInfo.state);
//     validateContact.validateZip(personInfo.zip);
//     validateContact.validatePhoneNumber(personInfo.phoneNumber);
//     validateContact.validateEmail(personInfo.email);
//   } catch (invalid) {
//     console.error(invalid);
//     addContact();
//   }
// }
// let EditContacts = () =>{
//   try{
//       if(addressBookPersonArr.length>0){
//           while(true){
//               var editPersonName = validateContact.validateFirstName('First name of person you want to edit');
//               if(editPersonName!=null)
//                   break;
//           }
//           let personDetails = addressBookPersonArr.find(x => x.firstName == editPersonName);
//           if(personDetails==null)
//               throw `Error!This ${editPersonName} name is not present`;
//           while(true){
//               console.log("1.Edit Firstname\n2.Edit Lastname\n3.Edit Address\n4.Edit city\n5.Edit State\n6.Zipcode\n7.Phone number\n8.email id\n9.Exit");
//               switch(parseInt(prompt('Enter the choice? : '))){
//                   case 1:
//                       //FirstName
//                       while(true){
//                           var fName =validateContact.validateFirstName('FirstName');
//                           if(fName!=null)
//                               break;
//                       }
//                       personDetails.firstName = fName;
//                       console.log("Edited");
//                       break;
//                   case 2:
//                       //LastName
//                       while(true){
//                           var lName = validateContact.validateLastName('LastName');
//                           if(lName!=null)
//                               break;
//                       }
//                       personDetails.lastName = lName;
//                       console.log("Edited");
//                       break;
//                   case 3:
//                       //Address
//                       while(true){
//                           var addr = validateContact.validateAddress('address');
//                           if(addr!=null)
//                               break;
//                       }
//                       personDetails.address = addr;
//                       console.log("Edited");
//                       break;
//                   case 4:
//                       //city
//                       while(true){
//                           var c = validateContact.validateCity('city');
//                           if(c!=null)
//                               break;
//                       }
//                       personDetails.city = c;
//                       console.log("Edited");
//                       break;
//                   case 5:
//                       //state
//                       while(true){
//                           var s =validateContact.validateState('state');
//                           if(s!=null)
//                               break;
//                       }
//                       personDetails.state = s;
//                       console.log("Edited");
//                       break;
//                   case 6:
//                       //zipCode
//                       while(true){
//                           var ZC = validateContact.validateZip('zip');
//                           if(ZC!=null)
//                               break;
//                       }
//                       personDetails.zipCode = ZC;
//                       console.log("Edited");
//                       break;
//                   case 7:
//                       //phone number
//                       while(true){
//                           var pN = validateContact.validatePhoneNumber();
//                           if(pN!=null)
//                               break;
//                       }
//                       personDetails.phoneNumber = pN;
//                       console.log("Edited");
//                       break;
//                   case 8:
//                       //email id
//                       while(true){
//                           var mailId = validateEmail();
//                           if(mailId!=null)
//                               break;
//                       }
//                       personDetails.emailId = mailId;
//                       console.log("Edited");
//                       break;
//                   case 9:
//                       console.log("Exited");
//                       return;
//                   default:
//                       console.log("Enter correct value");
//                       break;
//               }
//             }
//           }
//           else
//               throw 'Address book is empty'
//       }
//       catch(e){
//           console.error(e);
//       }    
//   }
//   EditContacts();

//uc5 delate

const prompt = require("prompt-sync")();
const validateContact = require("./ValidateContacts.js");
const fs = require('fs');
const { exit } = require("process");
function readfile() 
{
  let raw = fs.readFileSync('./add.json','utf8');
  let punishments= JSON.parse(raw);
  console.log(punishments);
  console.log("raw",raw);
  return punishments;
  
}
function write(punishments){
  let data = JSON.stringify(punishments);
  console.log("data",data);
 return fs.writeFileSync('./add.json', data);
  
}
let addressBookArray = [];
var personInfo;
class PersonInfo {
  firstName;
  lastName;
  address;
  city;
  state;
  zip;
  phoneNumber;
  email;
  constructor(firstName,lastName,address,city,state,zip,phoneNumber,email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
  toString() {
    return (
      "First Name = " +
      this.firstName +
      ", Last Name = " +
      this.lastName +
      ",Address = " +
      this.address +
      ",City = " +
      this.city +
      ",State = " +
      this.state +
      ",Zip = " +
      this.zip +
      ",Phone Number = " +
      this.phoneNumber +
      ",Email = " +
      this.email
    );
  }
}
function addContact() {
  let firstName = prompt("Enter Your First Name ");
  getFirstName(firstName);
  let lastName = prompt("Enter Your Last Name ");
  let address = prompt("Enter Your address ");
  let city = prompt("Enter Your city ");
  let state = prompt("Enter Your state ");
  let zip = prompt("Enter Your Zip Code ");
  let phNumber = prompt("Enter Your Mobile Number ");
  let email = prompt("Enter Your email ");
  personInfo = new PersonInfo(firstName,lastName,address,city,state,zip,phNumber,email);
  try {
    validateContact.validateFirstName(personInfo.firstName);
    validateContact.validateLastName(personInfo.lastName);
    validateContact.validateAddress(personInfo.address);
    validateContact.validateCity(personInfo.city);
    validateContact.validateState(personInfo.state);
    validateContact.validateZip(personInfo.zip);
    validateContact.validatePhoneNumber(personInfo.phoneNumber);
    validateContact.validateEmail(personInfo.email);
    let myjson = readfile();
    //console.log(" before push", myjson);
    myjson.push(personInfo);
    console.log("personInfo",personInfo);
    //console.log("after push",myjson);
    write(myjson);
    console.log(myjson);
  } catch (invalid) {
    console.error(invalid);
    addContact();
  }
}
function editContact() {
  let contactFound = 0;
  let name = prompt("Enter Your First Name of the person to edit ");
  let myjson =readfile();
  for (let i = 0; i < myjson.length; i++) {
    if (myjson[i].firstName == name) {
      contactFound = 1;
      console.log(
        "Enter 1 to edit First Name, 2 for lastName, 3 for address, 4 for city"
      );
      console.log(
        " Enter 5 for state, 6 for Zip Code, 7 for phone number, 8 for email"
      );
      let choiceEdit = prompt("Enter Your choice to edit ");
      switch (choiceEdit) {
        case "1":
          let firstNameEdit = prompt("Enter Your First Name ");
          try {
            validateContact.validateFirstName(firstNameEdit);  
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          myjson[i].firstName = firstNameEdit;
          console.log(myjson);
          console.log(personInfo.toString());
          break;
        case "2":
          let lastNameEdit = prompt("Enter Your Last Name ");
          try {
            validateContact.validateLastName(lastNameEdit);  
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          myjson[i].lastName = lastNameEdit;
          console.log(myjson);
          console.log(personInfo.toString());
          break;
        case "3":
          let addressEdit = prompt("Enter Your address ");
          try {
            validateContact.validateAddress(addressEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          myjson[i].address = addressEdit;
          console.log(myjson);
          console.log(personInfo.toString());
          break;
        case "4":
          let cityEdit = prompt("Enter Your city ");
          try {
            validateContact.validateCity(cityEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          myjson[i].city = cityEdit;
          console.log(myjson);
          console.log(personInfo.toString());
          break;
        case "5":
          let stateEdit = prompt("Enter Your state ");
          try {
            validateContact.validateState(stateEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          myjson[i].state = stateEdit;
          console.log(myjson);
          console.log(personInfo.toString());
          break;
        case "6":
          let zipEdit = prompt("Enter Your Zip Code ");
          try {
            validateContact.validateZip(zipEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          myjson[i].zip = zipEdit;
          console.log(myjson);
          console.log(personInfo.toString());
          break;
        case "7":
          let phNumberEdit = prompt("Enter Your Mobile Number ");
          try {
            validateContact.validatePhoneNumber(phNumberEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          myjson[i].phoneNumber = phNumberEdit;
          console.log(myjson);
          console.log(personInfo.toString());
          break;
        case "8":
          let emailEdit = prompt("Enter Your email ");
          try {
            validateContact.validateEmail(emailEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          myjson[i].email = emailEdit;
          console.log(myjson);
          console.log(personInfo.toString());
          break;
      }
    }
  }
  write(myjson);
  console.log(myjson);
  if (contactFound == 0) console.log("Contact Not Found");
}
function deleteContact(){
  let contactFoundDelete = 0;
  let name = prompt("Enter Your First Name of the person to delete ");
  let myjson = readfile();
  for (let i = 0; i < myjson.length; i++) {
    if (myjson[i].firstName == name) {
      myjson.splice(i,1);
     //console.log("Contact Deleted");
      break;
    }
  }
  write(myjson);
  console.log(myjson);
  if (contactFoundDelete == 0) console.log("Contact is delated");
}
  function countContact(){
      return addressBookArray.length;
    }
    function getFirstName(firstNameCheck) {
        return firstNameCheck;
      }
      let sortAddressBook = () => {
        addressBookArray.sort((a, b) => {
          let firstName1 = a.firstName.toLowerCase();
          let firstName2 = b.firstName.toLowerCase();
          if (firstName1 < firstName2) {
            return -1;
          }
          if (firstName1 > firstName2) {
            return 1;
          }
          return 0;
        });
      };
      let sortAddressBookByCity = () => {
        addressBookArray.sort((a, b) => {
          let city1 = a.city.toLowerCase();
          let city2 = b.city.toLowerCase();
          if (city1 < city2) {
            return -1;
          }
          if (city1 > city2) {
            return 1;
          }
          return 0;
        });
      };
      let sortAddressBookByState = () => {
        addressBookArray.sort((a, b) => {
          let state1 = a.state.toLowerCase();
          let state2 = b.state.toLowerCase();
          if (state1 < state2) {
            return -1;
          }
          if (state1 > state2) {
            return 1;
          }
          return 0;
        });
      };
      let sortAddressBookByZip = () => {
        addressBookArray.sort((a, b) => {
          let zip1 = a.zip.toLowerCase();
          let zip2 = b.zip.toLowerCase();
          if (zip1 < zip2) {
            return -1;
          }
          if (zip1 > zip2) {
            return 1;
          }
          return 0;
        });
      };

let i = 0;
while (i == 0) {
  console.log("Enter 1 to add contacts, 2 to edit Contacts, 3 show and exit , 4 to Delete Contacts,5 to exit,6 to count,7 to sort entries by name, 8to sort entries by city, 9 to sort entries by State, 10 to sort entries by Zip Code");
  let choice = prompt("Enter your choice ");
  switch (choice) {
    case "1":
      addContact();
      addressBookArray.push(personInfo);
      break;
    case "2":
      editContact();
      break;
    case "3":
      i = 1;
      break;
    case "4":
      deleteContact();
      addressBookArray.splice(personInfo)
      break;
     case "5":
        console.log(exit)
        process.exit(1)
    case "6":
      console.log("The number of Contacts in the address book are: "+countContact());
      break;
      case "7":
      sortAddressBook();
      console.log("Sorted Address Book By Name");
      for (let k = 0; k < addressBookArray.length; k++) {
        console.log(addressBookArray[k]);
      }
      break;
    case "8":
      sortAddressBookByCity();
      console.log("Sorted Address Book By City");
      for (let k = 0; k < addressBookArray.length; k++) {
        console.log(addressBookArray[k]);
      }
      break;
    case "9":
      sortAddressBookByState();
      console.log("Sorted Address Book By State");
      for (let k = 0; k < addressBookArray.length; k++) {
        console.log(addressBookArray[k]);
      }
      break;
    case "10":
      sortAddressBookByZip();
      console.log("Sorted Address Book By Zip");
      for (let k = 0; k < addressBookArray.length; k++) {
        console.log(addressBookArray[k]);
      }
      break;
  }
}
for (let j = 0; j < addressBookArray.length; j++) {
  console.log(addressBookArray[j]);
}


//uc6 contact count

// const prompt = require("prompt-sync")();
// const validateContact = require("./ValidateContacts.js");
// let addressBookArray = [];
// var personInfo;
// class PersonInfo {
//   firstName;
//   lastName;
//   address;
//   city;
//   state;
//   zip;
//   phoneNumber;
//   email;
//   constructor(firstName,lastName,address,city,state,zip,phoneNumber,email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.address = address;
//     this.city = city;
//     this.state = state;
//     this.zip = zip;
//     this.phoneNumber = phoneNumber;
//     this.email = email;
//   }
//   toString() {
//     return (
//       "First Name = " +
//       this.firstName +
//       ", Last Name = " +
//       this.lastName +
//       ",Address = " +
//       this.address +
//       ",City = " +
//       this.city +
//       ",State = " +
//       this.state +
//       ",Zip = " +
//       this.zip +
//       ",Phone Number = " +
//       this.phoneNumber +
//       ",Email = " +
//       this.email
//     );
//   }
// }
// function addContact() {
//   let firstName = prompt("Enter Your First Name ");
//   let lastName = prompt("Enter Your Last Name ");
//   let address = prompt("Enter Your address ");
//   let city = prompt("Enter Your city ");
//   let state = prompt("Enter Your state ");
//   let zip = prompt("Enter Your Zip Code ");
//   let phNumber = prompt("Enter Your Mobile Number ");
//   let email = prompt("Enter Your email ");
//   personInfo = new PersonInfo(firstName,lastName,address,city,state,zip,phNumber,email);
//   try {
//     validateContact.validateFirstName(personInfo.firstName);
//     validateContact.validateLastName(personInfo.lastName);
//     validateContact.validateAddress(personInfo.address);
//     validateContact.validateCity(personInfo.city);
//     validateContact.validateState(personInfo.state);
//     validateContact.validateZip(personInfo.zip);
//     validateContact.validatePhoneNumber(personInfo.phoneNumber);
//     validateContact.validateEmail(personInfo.email);
//   } catch (invalid) {
//     console.error(invalid);
//     addContact();
//   }
// }
// function editContact() {
//   let contactFound = 0;
//   let name = prompt("Enter Your First Name of the person to edit ");
//   for (let i = 0; i < addressBookArray.length; i++) {
//     if (addressBookArray[i].firstName == name) {
//       contactFound = 1;
//       console.log(
//         "Enter 1 to edit First Name, 2 for lastName, 3 for address, 4 for city"
//       );
//       console.log(
//         " Enter 5 for state, 6 for Zip Code, 7 for phone number, 8 for email"
//       );
//       let choiceEdit = prompt("Enter Your choice to edit ");
//       switch (choiceEdit) {
//         case "1":
//           let firstNameEdit = prompt("Enter Your First Name ");
//           try {
//             validateContact.validateFirstName(firstNameEdit);
//           } catch (invalid) {
//             console.error(invalid);
//             editContact();
//           }
//           addressBookArray[i].firstName = firstNameEdit;
//           break;
//         case "2":
//           let lastNameEdit = prompt("Enter Your Last Name ");
//           try {
//             validateContact.validateLastName(lastNameEdit);
//           } catch (invalid) {
//             console.error(invalid);
//             editContact();
//           }
//           addressBookArray[i].lastName = lastNameEdit;
//           break;
//         case "3":
//           let addressEdit = prompt("Enter Your address ");
//           try {
//             validateContact.validateAddress(addressEdit);
//           } catch (invalid) {
//             console.error(invalid);
//             editContact();
//           }
//           addressBookArray[i].address = addressEdit;
//           break;
//         case "4":
//           let cityEdit = prompt("Enter Your city ");
//           try {
//             validateContact.validateCity(cityEdit);
//           } catch (invalid) {
//             console.error(invalid);
//             editContact();
//           }
//           addressBookArray[i].city = cityEdit;
//           break;
//         case "5":
//           let stateEdit = prompt("Enter Your state ");
//           try {
//             validateContact.validateState(stateEdit);
//           } catch (invalid) {
//             console.error(invalid);
//             editContact();
//           }
//           addressBookArray[i].state = stateEdit;
//           break;
//         case "6":
//           let zipEdit = prompt("Enter Your Zip Code ");
//           try {
//             validateContact.validateZip(zipEdit);
//           } catch (invalid) {
//             console.error(invalid);
//             editContact();
//           }
//           addressBookArray[i].zip = zipEdit;
//           break;
//         case "7":
//           let phNumberEdit = prompt("Enter Your Mobile Number ");
//           try {
//             validateContact.validatePhoneNumber(phNumberEdit);
//           } catch (invalid) {
//             console.error(invalid);
//             editContact();
//           }
//           addressBookArray[i].phoneNumber = phNumberEdit;
//           break;
//         case "8":
//           let emailEdit = prompt("Enter Your email ");
//           try {
//             validateContact.validateEmail(emailEdit);
//           } catch (invalid) {
//             console.error(invalid);
//             editContact();
//           }
//           addressBookArray[i].email = emailEdit;
//           break;
//       }
//     }
//   }
//   if (contactFound == 0) console.log("Contact Not Found");
// }
// function deleteContact(){
//   let contactFoundDelete = 0;
//   let name = prompt("Enter Your First Name of the person to delete ");
//   for (let i = 0; i < addressBookArray.length; i++) {
//     if (addressBookArray[i].firstName == name) {
//       contactFoundDelete = 1;
//       addressBookArray.splice(i,1);
//       console.log("Contact Deleted");
//       break;
//     }
//   }
//   if (contactFoundDelete == 0) console.log("Contact Not Found");
// }
// function countContact(){
//   return addressBookArray.length;
// }

// let i = 0;
// while (i == 0) {
//   console.log("Enter 1 to add contacts, 2 to edit Contacts, 3 to exit, 4 to Delete Contacts, 5 to get count of contacts");
//   let choice = prompt("Enter your choice ");
//   switch (choice) {
//     case "1":
//       addContact();
//       addressBookArray.push(personInfo);
//       break;
//     case "2":
//       editContact();
//       break;
//     case "3":
//       i = 1;
//       break;
//     case "4":
//       deleteContact();
//       break;
//     case "5":
//       console.log("The number of Contacts in the address book are: "+countContact());
//       break;
//   }
// }
// console.log(addressBookArray);

//uc7   sorting 

// const prompt = require("prompt-sync")();
//  const validateContact = require("./ValidateContacts.js");
// const fs = require('fs')
// function readfile() 
// {
//   let raw = fs.readFileSync('./add.json','utf8');
//   let punishments= JSON.parse(raw);
//   console.log(punishments);
//   console.log("raw",raw);
//   return punishments;
  
// }
// function write(punishments){
//   let data = JSON.stringify(punishments);
//   console.log("data",data);
//  return fs.writeFileSync('./add.json', data);
  
// }
// let addressBookArray = [];
// var personInfo;
// class PersonInfo {
//   firstName;
//   lastName;
//   address;
//   city;
//   state;
//   zip;
//   phoneNumber;
//   email;
//   constructor(
//     firstName,
//     lastName,
//     address,
//     city,
//     state,
//     zip,
//     phoneNumber,
//     email
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.address = address;
//     this.city = city;
//     this.state = state;
//     this.zip = zip;
//     this.phoneNumber = phoneNumber;
//     this.email = email;
//   }
//   toString() {
//     return (
//       "First Name = " +
//       this.firstName +
//       ", Last Name = " +
//       this.lastName +
//       ",Address = " +
//       this.address +
//       ",City = " +
//       this.city +
//       ",State = " +
//       this.state +
//       ",Zip = " +
//       this.zip +
//       ",Phone Number = " +
//       this.phoneNumber +
//       ",Email = " +
//       this.email
//     );
//   }
// }
// function addContact() {
//   let firstName = prompt("Enter Your First Name ");
//   getFirstName(firstName);
//   let lastName = prompt("Enter Your Last Name ");
//   let address = prompt("Enter Your address ");
//   let city = prompt("Enter Your city ");
//   let state = prompt("Enter Your state ");
//   let zip = prompt("Enter Your Zip Code ");
//   let phNumber = prompt("Enter Your Mobile Number ");
//   let email = prompt("Enter Your email ");
//   personInfo = new PersonInfo(
//     firstName,
//     lastName,
//     address,
//     city,
//     state,
//     zip,
//     phNumber,
//     email
//   );
//   try {
//     validateContact.validateFirstName(personInfo.firstName);
//     validateContact.validateLastName(personInfo.lastName);
//     validateContact.validateAddress(personInfo.address);
//     validateContact.validateCity(personInfo.city);
//     validateContact.validateState(personInfo.state);
//     validateContact.validateZip(personInfo.zip);
//     validateContact.validatePhoneNumber(personInfo.phoneNumber);
//     validateContact.validateEmail(personInfo.email);
//     let myjson = readfile();
//     console.log(" before push", myjson);
//     myjson.push(personInfo);
//     console.log("personInfo",personInfo);
//     console.log("after push",myjson);
//     write(myjson);
//     console.log(myjson);
//   } catch (invalid) {
//     console.error(invalid);
//     addContact();
//   }
// }
// function editContact() {
//   let contactFound = 0;
//   let name = prompt("Enter Your First Name of the person to edit ");
//   for (let i = 0; i < addressBookArray.length; i++) {
//     if (addressBookArray[i].firstName == name) {
//       contactFound = 1;
//       console.log(
//         "Enter 1 to edit First Name, 2 for lastName, 3 for address, 4 for city"
//       );
//       console.log(
//         " Enter 5 for state, 6 for Zip Code, 7 for phone number, 8 for email"
//       );
//       let choiceEdit = prompt("Enter Your choice to edit ");
//       switch (choiceEdit) {
//         case "1":
//           let firstNameEdit = prompt("Enter Your First Name ");
//           try {
//             validateContact.validateFirstName(firstNameEdit);
//             let myjson = readfile();
//             console.log(" before push", myjson);
//             myjson.push(personInfo);
//             console.log("personInfo",personInfo);
//             console.log("after push",myjson);
//             write(myjson);
//             console.log(myjson);
   
//           } catch (invalid) {
//             console.error(invalid);
//             editContact();
//           }
//           addressBookArray[i].firstName = firstNameEdit;
//           break;
//         case "2":
//           let lastNameEdit = prompt("Enter Your Last Name ");
//           try {
//             validateContact.validateLastName(lastNameEdit);
//             let myjson = readfile();
//             console.log(" before push", myjson);
//             myjson.push(personInfo);
//             console.log("personInfo",personInfo);
//             console.log("after push",myjson);
//             write(myjson);
//             console.log(myjson);
//           } catch (invalid) {
//             console.error(invalid);
//             editContact();
//           }
//           addressBookArray[i].lastName = lastNameEdit;
//           break;
//         case "3":
//           let addressEdit = prompt("Enter Your address ");
//           try {
//             validateContact.validateAddress(addressEdit);
//             let myjson = readfile();
//             console.log(" before push", myjson);
//             myjson.push(personInfo);
//             console.log("personInfo",personInfo);
//             console.log("after push",myjson);
//             write(myjson);
//             console.log(myjson);
//           } catch (invalid) {
//             console.error(invalid);
//             editContact();
//           }
//           addressBookArray[i].address = addressEdit;
//           break;
//         case "4":
//           let cityEdit = prompt("Enter Your city ");
//           try {
//             validateContact.validateCity(cityEdit); 
//             let myjson = readfile();
//             console.log(" before push", myjson);
//             myjson.push(personInfo);
//             console.log("personInfo",personInfo);
//             console.log("after push",myjson);
//             write(myjson);
//             console.log(myjson);
//           } catch (invalid) {
//             console.error(invalid);
//             editContact();
//           }
//           addressBookArray[i].city = cityEdit;
//           break;
//         case "5":
//           let stateEdit = prompt("Enter Your state ");
//           try {
//             validateContact.validateState(stateEdit);
//             let myjson = readfile();
//             console.log(" before push", myjson);
//             myjson.push(personInfo);
//             console.log("personInfo",personInfo);
//             console.log("after push",myjson);
//             write(myjson);
//             console.log(myjson);
//           } catch (invalid) {
//             console.error(invalid);
//             editContact();
//           }
//           addressBookArray[i].state = stateEdit;
//           break;
//         case "6":
//           let zipEdit = prompt("Enter Your Zip Code ");
//           try {
//             validateContact.validateZip(zipEdit); 
//             let myjson = readfile();
//             console.log(" before push", myjson);
//             myjson.push(personInfo);
//             console.log("personInfo",personInfo);
//             console.log("after push",myjson);
//             write(myjson);
//             console.log(myjson);
//           } catch (invalid) {
//             console.error(invalid);
//             editContact();
//           }
//           addressBookArray[i].zip = zipEdit;
//           break;
//         case "7":
//           let phNumberEdit = prompt("Enter Your Mobile Number ");
//           try {
//             validateContact.validatePhoneNumber(phNumberEdit);
//             let myjson = readfile();
//             console.log(" before push", myjson);
//             myjson.push(personInfo);
//             console.log("personInfo",personInfo);
//             console.log("after push",myjson);
//             write(myjson);
//             console.log(myjson);
//           } catch (invalid) {
//             console.error(invalid);
//             editContact();
//           }
//           addressBookArray[i].phoneNumber = phNumberEdit;
//           break;
//         case "8":
//           let emailEdit = prompt("Enter Your email ");
//           try {
//             validateContact.validateEmail(emailEdit);
//             let myjson = readfile();
//             console.log(" before push", myjson);
//             myjson.push(personInfo);
//             console.log("personInfo",personInfo);
//             console.log("after push",myjson);
//             write(myjson);
//             console.log(myjson);
//           } catch (invalid) {
//             console.error(invalid);
//             editContact();
//           }
//           addressBookArray[i].email = emailEdit;
//           break;
//       }
//     }
//   }
//   if (contactFound == 0) console.log("Contact Not Found");
// }
// function deleteContact() {
//   let contactFoundDelete = 0;
//   let name = prompt("Enter Your First Name of the person to delete ");
//   for (let i = 0; i < addressBookArray.length; i++) {
//     if (addressBookArray[i].firstName == name) {
//       contactFoundDelete = 1;
//       addressBookArray.splice(i, 1);
//       let myjson = readfile();
//     console.log(" before push", myjson);
//     myjson.push(personInfo);
//     console.log("personInfo",personInfo);
//     console.log("after push",myjson);
//     write(myjson);
//     console.log(myjson);
//       console.log("Contact Deleted");
//      break;
//     }
//   }
//   if (contactFoundDelete == 0) console.log("Contact Not Found");
// }
// function countContact() {
//   return addressBookArray.length;
// }
// function getFirstName(firstNameCheck) {
//   return firstNameCheck;
// }
// let sortAddressBook = () => {
//   addressBookArray.sort((a, b) => {
//     let firstName1 = a.firstName.toLowerCase();
//     let firstName2 = b.firstName.toLowerCase();
//     if (firstName1 < firstName2) {
//       return -1;
//     }
//     if (firstName1 > firstName2) {
//       return 1;
//     }
//     return 0;
//   });
// };
// let sortAddressBookByCity = () => {
//   addressBookArray.sort((a, b) => {
//     let city1 = a.city.toLowerCase();
//     let city2 = b.city.toLowerCase();
//     if (city1 < city2) {
//       return -1;
//     }
//     if (city1 > city2) {
//       return 1;
//     }
//     return 0;
//   });
// };
// let sortAddressBookByState = () => {
//   addressBookArray.sort((a, b) => {
//     let state1 = a.state.toLowerCase();
//     let state2 = b.state.toLowerCase();
//     if (state1 < state2) {
//       return -1;
//     }
//     if (state1 > state2) {
//       return 1;
//     }
//     return 0;
//   });
// };
// let sortAddressBookByZip = () => {
//   addressBookArray.sort((a, b) => {
//     let zip1 = a.zip.toLowerCase();
//     let zip2 = b.zip.toLowerCase();
//     if (zip1 < zip2) {
//       return -1;
//     }
//     if (zip1 > zip2) {
//       return 1;
//     }
//     return 0;
//   });
// };
// let i = 0;
// while (i == 0) {
//   console.log(
//     "Enter 1 to add contacts, 2 to edit Contacts, 3 to exit, 4 to Delete Contacts, 5 to get count of contacts, 6 to sort entries by name, 7 to sort entries by city, 8 to sort entries by State, 9 to sort entries by Zip Code"
//   );
//   let choice = prompt("Enter your choice ");
//   switch (choice) {
//     case "1":
//       addContact();
//       addressBookArray.push(personInfo);
//       break;
//     case "2":
//       editContact();
//       break;
//     case "3":
//       i = 1;
//       break;
//     case "4":
//       deleteContact();
//       break;
//     case "5":
//       console.log(
//         "The number of Contacts in the address book are: " + countContact()
//       );
//       break;
//     case "6":
//       sortAddressBook();
//       console.log("Sorted Address Book By Name");
//       for (let k = 0; k < addressBookArray.length; k++) {
//         console.log(addressBookArray[k]);
//       }
//       break;
//     case "7":
//       sortAddressBookByCity();
//       console.log("Sorted Address Book By City");
//       for (let k = 0; k < addressBookArray.length; k++) {
//         console.log(addressBookArray[k]);
//       }
//       break;
//     case "8":
//       sortAddressBookByState();
//       console.log("Sorted Address Book By State");
//       for (let k = 0; k < addressBookArray.length; k++) {
//         console.log(addressBookArray[k]);
//       }
//       break;
//     case "9":
//       sortAddressBookByZip();
//       console.log("Sorted Address Book By Zip");
//       for (let k = 0; k < addressBookArray.length; k++) {
//         console.log(addressBookArray[k]);
//       }
//       break;
//   }
// }
// for (let j = 0; j < addressBookArray.length; j++) {
//   console.log(addressBookArray[j]);
// }

//uc8