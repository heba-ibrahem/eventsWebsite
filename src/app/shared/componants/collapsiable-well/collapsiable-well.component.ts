import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsiable-well',
  templateUrl: './collapsiable-well.component.html',
  styleUrls: ['./collapsiable-well.component.scss']
})
export class CollapsiableWellComponent implements OnInit {
  visbile=true;

  constructor() { }

  ngOnInit(): void {
  }
  toggleContent(){
    this.visbile =!this.visbile
  }

}
