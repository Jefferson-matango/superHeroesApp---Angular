import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin():void {
    this.authService.login( 'jefferson@gmail.com', '123456' )
      .subscribe( user => {
        this.router.navigate(['/'])
      })
  }
}
