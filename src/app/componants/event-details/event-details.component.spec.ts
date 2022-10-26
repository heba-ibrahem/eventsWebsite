// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ActivatedRoute, Router } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import { EventsService } from 'src/app/services/events.service';
// import { AuthService } from 'src/app/user/service/auth.service';

// import { EventDetailsComponent } from './event-details.component';

// describe('EventDetailsComponent', () => {
//   let component: EventDetailsComponent;
//   let fixture: ComponentFixture<EventDetailsComponent>;
//   let mockAuth:any, mockEventSer:any, mockRoute:any;

//   beforeEach(async () => {
//     mockRoute = {
//       snapshot: { data: {  } }
//     } 
//     await TestBed.configureTestingModule({
//       declarations: [ EventDetailsComponent ],
//       providers:[
//         {provide: ActivatedRoute, useValue:mockRoute},
//         {provide: EventsService, useValue:mockEventSer}
//        ],
//        imports:[
//         RouterTestingModule,
//        ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(EventDetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
