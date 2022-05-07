// document.querySelector('login-form').addEventListener('submit', validateUser);

// User object
class User {
     constructor(name, email, password) {
          this.name = name;
          this.email = email;
          this.password = password;
     }
}

// required variables
let registeredUserName, registeredEmail, registeredPassword, registeredConfirmation, isAgreed = false;

///////////////////////////////////////////////////////////
// addUser function => We'll declare this function in the other files and here, we will only need to call it when;
// the registered data is valid

let addUser = async (url, newRegisteredUser) => {
     const response = await fetch('_json/users.json');
}

// We'll be back after creating the REST API first in the server.js and
// create some fake users in users.json
///////////////////////////////////////////////////////////


document.querySelector('#register-user').addEventListener('keyup', (ru) => registeredUserName = ru.target.value);
document.querySelector('#register-email').addEventListener('keyup', (re) => registeredEmail = re.target.value);
document.querySelector('#register-password').addEventListener('keyup', (rp) => registeredPassword = rp.target.value);
document.querySelector('#register-password-confirm').addEventListener('keyup', (rc) => registeredConfirmation = rc.target.value);
document.querySelector('.agreed').addEventListener('change', () => isAgreed = true);

document.querySelector('#register-form').addEventListener('submit', (event) => {
     if (registeredUserName.length > 0) {
          if (registeredEmail.length > 0) {
               if (registeredPassword.length > 0) {
                    if (registeredConfirmation.length > 0) {
                         if (registeredConfirmation == RegisteredPassword) {
                              if (isAgreed) {
                                   // create a user with the given data and sign 'em up
                                   console.log("Congrats")
                                   let newRegisteredUser = new User(registeredUserName, registeredEmail, registeredPassword);
                                   addUser(newRegisteredUser);

                                   // Empty current values
                                   document.querySelector('#register-user').value 
                                   = document.querySelector('#register-email').value 
                                   = document.querySelector('#register-password').value 
                                   = document.querySelector('#register-password-confirm').value 
                                   = "";
                              } else {
                                   alert('Agreement is mandatory');
                              }
                         }
                    }
               }
          }
     } else {
          alert('Please provide valid data!');
     }
     event.preventDefault();
});
