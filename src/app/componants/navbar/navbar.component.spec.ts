import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsService } from 'src/app/services/events.service';
import { AuthService } from 'src/app/user/service/auth.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let mockAuth: any, mockEventser: any;

  beforeEach(async () => {
    mockAuth = { isAuthenticated: () => true, currentUser: { firstName: "joe" } };
    await TestBed.configureTestingModule({

      declarations: [NavbarComponent],
      providers: [{ provide: AuthService, useValue: mockAuth },
      { provide: EventsService, useValue: mockEventser }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
