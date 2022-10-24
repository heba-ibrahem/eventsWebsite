import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { IEvent } from 'src/app/shared/viewModel/i-event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events:IEvent[] =[]
  constructor(private eventSer : EventsService) { }

  ngOnInit(): void {
    this.events=this.eventSer.getEvents()
  }

}
