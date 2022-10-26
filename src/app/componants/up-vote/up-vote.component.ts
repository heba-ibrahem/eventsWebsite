import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-up-vote',
  templateUrl: './up-vote.component.html',
  styleUrls: ['./up-vote.component.scss']
})
export class UpVoteComponent implements OnInit {
  @Input() count: number | undefined;
  @Input() voted: boolean | undefined;
  @Output() vote = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.vote.emit();
  };
};
