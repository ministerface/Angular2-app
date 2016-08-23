import { Component, Inject } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    selector: 'dr-userbar',
    templateUrl: 'userbar.component.html'
})

export class UserbarComponent {
    display: boolean = false;
    draggable: boolean = false;
    isAuth: boolean = true;

    constructor( @Inject('Window') window: Window, private authService: AuthService) {}

    ngOnInit() {
    this.authService.dataString$.subscribe(
      data => {
        this.isAuth = data;
      });
    }

    closeTab(): void {
        window.close();
        this.authService.logout(false);
        this.display = false;
    }

    getWindow(event): void {
        event.preventDefault();
        this.display = true;
    }

    login(event):void {
        event.preventDefault();
        this.authService.logout(true);
    }

}
