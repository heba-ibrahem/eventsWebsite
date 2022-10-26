import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoterService } from 'src/app/services/voter.service';
import { DurationPipe } from 'src/app/shared/pipes/duration.pipe';
import { ISession } from 'src/app/shared/viewModel/i-event';
import { AuthService } from 'src/app/user/service/auth.service';

import { SessionListComponent } from './session-list.component';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let fixture: ComponentFixture<SessionListComponent>;
  let mockAuth: any, mockVoterService: any;
  let element: HTMLElement;
  let debugElem: DebugElement;

  beforeEach(async () => {
    // mockAuth= { isAuthenticated:()=>true, currentUser:{userName:"joe"}};
    // mockVoterService= {userHasVoted: ()=>true};
    await TestBed.configureTestingModule({
      declarations: [SessionListComponent, DurationPipe],
      providers: [
        { provide: AuthService, useValue: mockAuth },
        { provide: VoterService, useValue: mockVoterService }

      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    // debugElem = fixture.debugElement;
    // element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // describe('initail display', ()=>{
  //   it('should displayy the correct title ', ()=>{
  //     component.sessions= [
  //       {name:"se1", id:3, presenter:"heba",duration:1,level:"beginner",abstract:"abstract",
  //       voters:["joe","john"]
  //     }];
  //     component.filtering= "all";
  //     component.sorting="name";
  //     component.eventId=4;
  //     component.ngOnChanges();

  //     fixture.detectChanges();

  //     expect(element.querySelector('[well-title]')?.textContent).toContain('se2');
  //   })
  // })
});


// unit test isolated
describe('SessionlistComponant', () => {
  let componant: SessionListComponent;
  let mockAuth: any, MockVoter: any;
  beforeEach(() => {
    componant = new SessionListComponent(mockAuth, MockVoter);
  });
  describe('ngOnChange', () => {
    it('should filter session correctly', () => {
      componant.sessions = <ISession[]>[{ name: 'se1', level: 'inter' }, { name: 'se2', level: 'beg' }, { name: 'se3', level: 'inter' }];
      componant.filtering = "inter";
      componant.sorting = "name";
      componant.eventId = 3;
      componant.ngOnChanges();
      expect(componant.visisableSassions.length).toBe(2)
    })
    it('should sort session correctly', () => {
      componant.sessions = <ISession[]>[{ name: 'se1', level: 'inter' }, { name: 'se3', level: 'beg' }, { name: 'se2', level: 'inter' }];
      componant.filtering = "all";
      componant.sorting = "name";
      componant.eventId = 3;
      componant.ngOnChanges();
      expect(componant.visisableSassions[2].name).toBe('se3')
    })
  })
})
