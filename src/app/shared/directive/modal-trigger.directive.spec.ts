import { ElementRef } from '@angular/core';
import { ModalTriggerDirective } from './modal-trigger.directive';

describe('ModalTriggerDirective', () => {
  let mockRef:any, mockJquery:any;
  it('should create an instance', () => {
    mockRef = ElementRef
    const directive = new ModalTriggerDirective(mockRef,mockJquery);
    expect(directive).toBeTruthy();
  });
});
