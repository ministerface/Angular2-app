import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class AuthService {

  private isAuth = new Subject<boolean>();
  dataString$ = this.isAuth.asObservable();

  logout(data) {
    this.isAuth.next(data);
  }
}
