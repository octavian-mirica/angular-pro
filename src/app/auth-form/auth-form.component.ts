import { Component, Output, ViewChildren, AfterViewInit, EventEmitter, ContentChildren, QueryList, AfterContentInit, ChangeDetectorRef } from '@angular/core';


import { User } from './auth-form.interface';
import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

@Component({
  selector: 'app-auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form>
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email">
        </label>
        <label>
          Password
          <input type="password" name="password">
        </label>
        <ng-content select="app-auth-remember"></ng-content>
        <app-auth-message [style.display]="(showMessage ? 'inherit': 'none')"></app-auth-message>
        <app-auth-message [style.display]="(showMessage ? 'inherit': 'none')"></app-auth-message>
        <app-auth-message [style.display]="(showMessage ? 'inherit': 'none')"></app-auth-message>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMessage: boolean;

  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    if (this.message) {
      this.message.forEach((item) => {
          item.days = 30;
        });
        this.cd.detectChanges();
    }
  }

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
      // this.remember.checked.subscribe((checked: boolean) => this.showMessage = checked);
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
