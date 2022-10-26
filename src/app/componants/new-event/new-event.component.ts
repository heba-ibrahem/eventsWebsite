import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';


@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit {

  newEvent: any;
  constructor(private route: Router, private eventSer: EventsService) { }

  ngOnInit(): void {
  }

  addEvent(formValue: any) {
    this.eventSer.saveEvent(formValue).subscribe(() => {
      this.route.navigate(['/events']);
    });
  };
  cancel() {
    this.route.navigate(['/events']);
  };

};
