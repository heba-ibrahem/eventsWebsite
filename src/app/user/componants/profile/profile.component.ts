import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  private firstName!: FormControl;
  private lastName!: FormControl 

  constructor(public auth:AuthService, private route:Router, private toster:ToastrService) {
   
   }

  ngOnInit(): void {

     this.firstName=new FormControl(this.auth.currentUser.firstName, [Validators.required,Validators.pattern('[a-zA-Z].*')]);
     this.lastName =new FormControl(this.auth.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName:this.firstName,
      lastName:this.lastName
    })
  
  }
  validateFirstName(){
    return  this.firstName.valid || this.firstName.untouched
  }
  validateLastName(){
    return  this.lastName.valid || this.lastName.untouched
  }
  edit(formsValue: { firstName: string; lastName: string; }){
    if(this.profileForm.valid){
      this.auth.updateCurrentUser(formsValue.firstName,formsValue.lastName)
      // this.route.navigate(['/events'])
      this.toster.success('profile edited successfully !')
    }
  }
  cancel(){
    this.route.navigate(['/events'])
  }
  logOut(){
    
    this.auth.logOut().subscribe(()=>{
      this.route.navigate(['/user/login'])
    })
  }

}
