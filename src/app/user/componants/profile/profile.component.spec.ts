import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let mockHttp:any , mockToster:any, mockAuth:any;

  beforeEach(async () => {
    mockAuth= {currentUser:{firstName:"heba",lastName:"ibrahem"}}
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      providers:[{provide: HttpClient, useValue:mockHttp},
        {provide: AuthService, useValue:mockAuth},
        {provide: ToastrService, useValue:mockToster}],
      imports:[RouterTestingModule,
      FormsModule,
    ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
