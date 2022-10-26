import { HttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { AuthService } from './user/service/auth.service';

describe('AppComponent', () => {
  let mockAuth: any;
  let mockHttp: any;
  beforeEach(async () => {
    mockAuth = { checkAuthStatus: () => true, isAuthenticated: () => true, currentUser: { firstName: "Heba" } };

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent
      ],
      providers: [{ provide: AuthService, useValue: mockAuth },
      { provide: HttpClient, useValue: mockHttp },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });



  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('eventsWebsite app is running!');
  // });
});
