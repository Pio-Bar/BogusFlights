import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserDataService } from '../../services/user-data.service'
import { usersDB } from '../../services/usersDB'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogLogin, {
      width: '600px',
    });
  }
  ngOnInit(): void {
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.html',
  styleUrls: ['./login.component.scss'],
})
export class DialogLogin {
  hide = true;
  showRegistration = false;
  wrongPassword = false;
  usersDB: any
  firstNameInput = '';
  lastNameInput = '';
  emailInput = '';
  passwordInput = '';
  confirmPasswordInput = '';
  control = new FormControl('', Validators.required);

  constructor(
    public userData: UserDataService,
    public dialogRef: MatDialogRef<DialogLogin>,
    public login: LoginComponent,
    ) { }


  closeDialog() {
    this.dialogRef.close();
  }
  openDialog(){
    this.login.openDialog()
  }

  //Check DB for existing user and log in
  logIn(){
    for(let user of usersDB){
      if(this.emailInput === user.email){
        if(this.passwordInput === user.password){
          console.log('Logged in!!!')
          this.userData.userIsLoggedIn = true;
          this.userData.loggedInUser.firstName = user.firstName;
          this.userData.loggedInUser.lastName = user.lastName;
          this.userData.loggedInUser.email = user.email;
          this.wrongPassword = false;
          this.closeDialog()
          return
        } 
      }
    }
    this.wrongPassword = true
    console.log('Invalid Email or Password!')
  }

  //Adds a new user to DB
  register(){
    for(let user of usersDB){
      if (this.emailInput === user.email){
       return console.log('user already has an account!')
      }
    }
    usersDB.push(
      {
        email: this.emailInput,
        password: this.passwordInput,
        firstName: this.firstNameInput,
        lastName: this.lastNameInput,
      }
    )
    this.showRegistration = false
    this.logIn()
    console.log(usersDB)
  }

  //toggles between login and registration screen
  toggleRegistration(){
    this.showRegistration = !this.showRegistration
    this.wrongPassword = false;
    this.control.reset('')
  }
}
