import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/viewModel/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: IUser;

  constructor() { }

  loginUser(userName:string,password:string){
    this.currentUser={
      id:1,
      userName:userName,
      firstName:'Heba',
      lastName:'Ibrahem',
      // password:password
    }

  }
  updateCurrentUser(firstName:string,lastName:string){
    this.currentUser.firstName = firstName,
    this.currentUser.lastName = lastName

  }

  isAuthenticated(){
    return !!this.currentUser;
  }
}
