import { inject, Aurelia } from 'aurelia-framework';

// First, we must inject the Aurelia object. This is the same Aurelia object
// passed into our configure function on main.js.
@inject(Aurelia)
export class Login {
  
  username = '';
  password = '';
  error = '';

  constructor(aurelia) {

    // Once we have access to the Aurelia object, we can use it from
    // within our login function to set the new root view model to 
    // our main App on succesful login.
    this.login = () => {
      if (this.username && this.password) {
        aurelia.setRoot('app');
      } else {
        this.error = 'Please enter a username and password.';
      }
    }
  }
}
