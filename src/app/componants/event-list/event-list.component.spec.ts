// import { HttpClientModule } from '@angular/common/http';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { EventsService } from 'src/app/services/events.service';

// import { EventListComponent } from './event-list.component';

// describe('EventListComponent', () => {
//   let component: EventListComponent;
//   let fixture: ComponentFixture<EventListComponent>;
//   let mockEventSer:any;

//   beforeEach(async () => {
//     mockEventSer= {getEvents:()=>true}
//     await TestBed.configureTestingModule({
//       declarations: [ EventListComponent ],
//       providers:[{provide: EventsService, useValue: mockEventSer}],
//       imports: [HttpClientModule],
//       schemas:[NO_ERRORS_SCHEMA]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(EventListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
