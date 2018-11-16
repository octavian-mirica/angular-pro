import { Component } from '@angular/core';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
      <app-auth-form
        (submitted)="createUser($event)">
        <h3>Create account</h3>
        <button type="submit">
          Join us
        </button>
      </app-auth-form>
      <app-auth-form (submitted)="loginUser($event)">
        <h3>Login</h3>
        <app-auth-remember (checked)="rememberUser($event)"></app-auth-remember>
        <app-auth-remember (checked)="rememberUser($event)"></app-auth-remember>
        <app-auth-remember (checked)="rememberUser($event)"></app-auth-remember>
        <button type="submit">
          Login
        </button>
      </app-auth-form>
    </div>
  `
})
export class AppComponent {

  rememberMe = false;

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user, this.rememberMe);
  }
}
