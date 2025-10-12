import { ElementRef } from '@angular/core';
import { ElementHighlightDirective } from './elementhighlight.directive';

describe('Highlight', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new ElementHighlightDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
