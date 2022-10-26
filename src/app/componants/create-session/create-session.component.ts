import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from 'src/app/shared/viewModel/i-event'

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {
  newSessionForm!: FormGroup;
  name!: FormControl;
  presenter!: FormControl;
  duration!: FormControl;
  level!: FormControl;
  abstract!: FormControl;
  @Output() SaveNewSession = new EventEmitter();
  @Output() cancelNewSession = new EventEmitter()



  constructor() { }

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, this.restrictedWords]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    })


  }
  restrictedWords(control: FormControl) {
    return control.value.includes("foo")
      ? { 'restrictedWords': 'foo' }
      : { "null": "" }

  }
  save(formValue: any) {
    console.log(formValue)
    let session: ISession = {
      id: 0,
      name: formValue.name,
      presenter: formValue.presenter,
      duration: formValue.duration,
      level: formValue.level,
      abstract: formValue.abstract,
      voters: []

    }
    this.SaveNewSession.emit(session)

  }
  cancel() {
    this.cancelNewSession.emit();
  }

}
