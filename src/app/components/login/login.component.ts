import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


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

  toggleRegistration(){
    this.showRegistration = !this.showRegistration 
  }
}
