import { Component, OnInit } from '@angular/core';
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
  usersDB: any
  firstNameInput = '';
  lastNameInput = '';
  emailInput = '';
  passwordInput = '';
  confirmPasswordInput = '';

  constructor(
    public userData: UserDataService,
    public dialogRef: MatDialogRef<DialogLogin>
    ) { }


  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  logIn(){
    for(let user of usersDB){
      if(this.emailInput === user.email){
        if(this.passwordInput === user.password){
          console.log('Logged in!!!')
          this.userData.userIsLoggedIn = true;
          this.userData.loggedInUser.firstName = user.firstName;
          this.userData.loggedInUser.lastName = user.lastName;
          this.userData.loggedInUser.email = user.email;
          this.closeDialog()
          return
        } 
      }
    }
    console.log('Invalid Email or Password!')
  }


  toggleRegistration(){
    this.showRegistration = !this.showRegistration 
  }
}
