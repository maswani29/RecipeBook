import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false; //open is bootstrap class for dropdown

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
