import { Component, OnInit, ViewChild,} from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild(LoginComponent) login:any;

  constructor(
    public userData: UserDataService,
    private router: Router ) { }

  openLogin(){
    this.login.openDialog()
  }
  logOut(){
    window.location.assign('')
  }
  ngOnInit(): void {
  }

}
