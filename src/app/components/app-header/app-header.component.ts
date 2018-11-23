import { User } from './../../../auth/shared/services/auth/auth.service';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app-header.component.scss'],
  template: `
    <div class="app-header">
      <div class="wrapper">
        <img src="/assets/img/logo.svg">
        <div class="app-header__user-info"
          *ngIf="user?.authenticated">
          <span (click)="logoutUser()"></span>
        </div>
      </div>
    </div>
  `
})
export class AppHeaderComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  logout = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  logoutUser() {
    this.logout.emit();
  }
}
