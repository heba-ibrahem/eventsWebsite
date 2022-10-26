import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName = '';
  password = '';
  mouseoverLogin!: boolean;
  logintInvaild = false;
  constructor(private auth: AuthService, private route: Router) {

  }

  ngOnInit(): void {
  }
  login(formValue: any) {
    console.log(formValue)
    this.auth.loginUser(formValue.userName, formValue.password)
      .subscribe(res => {
        if (!res) {
          this.logintInvaild = true
        } else {
          this.route.navigate(['/user/profile']);
        }
      })
  }
  cancel() {
    this.route.navigate(['/events']);
  }


}
