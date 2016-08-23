import { Component } from '@angular/core';
import { Message } from 'primeng/primeng';

@Component({
    selector: 'dr-navbar',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent {
    dropdown: boolean = false;
    item: string = "";
    msgs: Message[] = [];

    isActivate(event): void {
        event.preventDefault();
        let itemText = event.target.text;
        this.msgs.push({
          severity: 'info',
          summary: 'Confirmation message',
          detail: itemText + ' has been activated!'
        });
        this.dropdown = false;
    }

    isOpen(event): void {
        event.preventDefault();
        this.dropdown = !this.dropdown;
    }

}
