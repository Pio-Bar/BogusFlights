import { Injectable } from '@angular/core';
import { usersDB } from './usersDB'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userIsLoggedIn = false;

  loggedInUser = {
    email: '',
    firstName: '',
    lastName: '',
  }

  


  constructor() { }


}
