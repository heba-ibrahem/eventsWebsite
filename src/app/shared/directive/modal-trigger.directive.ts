import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { JQ_TOKEN } from 'src/app/services/jquery.service';
// import  $ from 'jquery';
// declare var $: any;

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  @Input('appModalTrigger') modalId: any ;


  private el: HTMLElement;

  constructor( ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }
  ngOnInit(): void {
    this.el.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal('show')
    console.log("hello",`#${this.modalId}`)
    })

}

}
