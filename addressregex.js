module.exports = {
     NAME_REGEX_PATTERN : RegExp('^[A-Z]{1}[a-z]{2,}$'),
  ADDRESS_REGEX_PATTERN : RegExp('^[a-zA-z]{3,}$'),
  PINCODE_REGEX_PATTERN : RegExp('^[0-9]{6}$'),
  PHONE_NUMBER_PATTERN : RegExp('^[9][1][6-9]{1}[0-9]{9}$'), 
 EMAIL_REGEX_PATTERN :RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$'),


    checknamePattern(value){
       let nameRegEx = RegExp('^[A-Z]{1}[a-z]{2,}$')
           if(!nameRegEx.test(value))
             throw 'Error!! Invalid Value';
       },

       checkZipCodePattern(value){
       let zipCodeRegEx = new RegExp('^[0-9]{6}$')
       if(!zipCodeRegEx.test(value))
             throw 'Error!! Invalid Value';
       },

       CheckphoneNumPattern(value){
           let phoneNumRegEx = new RegExp('^[9][1][6-9]{1}[0-9]{9}$')
           if(!phoneNumRegEx.test(value))
                 throw 'Error!! Invalid Value';
       },

       CheckemailIdPattern (value){
           let emailIdmRegEx = new RegExp(/^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$/);
           if(!emailIdmRegEx.test(value))
                 throw 'Error!! Invalid Value';
       }
   }