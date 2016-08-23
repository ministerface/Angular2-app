import { Component } from '@angular/core';
import { NavbarComponent, AuthService  } from './shared/index';

@Component({
    selector: 'app',
    templateUrl: './app.template.html'
})

export class AppComponent {
    isAuth: boolean = true;
    constructor(private authService: AuthService){}
    ngOnInit() {
    this.authService.dataString$.subscribe(
      data => {
        this.isAuth = data;
      });
    }

    title = 'Wholesale access interface';

}
