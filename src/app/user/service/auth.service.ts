import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/viewModel/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: IUser;

  constructor(private http: HttpClient) { }

  loginUser(userName: string, password: string) {
    let loginInfo = { username: userName, password: password };
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = <IUser><unknown>data['user' as keyof typeof data];
      })).pipe(
        catchError(err => { return of(false) })
      )

    // this.currentUser={
    //   id:1,
    //   userName:userName,
    //   firstName:'john',
    //   lastName:'papa',
    //   // password:password
    // }

  }
  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName,
      this.currentUser.lastName = lastName
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
  checkAuthStatus() {
    return this.http.get('/api/currentIdentity').subscribe(data => {
      if (data instanceof Object) {
        this.currentUser = <IUser>data
      }
    })
  }
  logOut() {
    this.currentUser = undefined!;
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.post('/api/logout', {}, options)


  }
}
