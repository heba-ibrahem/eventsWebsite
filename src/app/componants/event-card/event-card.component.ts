import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from 'src/app/shared/viewModel/i-event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() event:any

  constructor() { }

  ngOnInit(): void {
  }

}
