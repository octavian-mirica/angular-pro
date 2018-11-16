import { AuthMessageComponent } from './auth-message.component';
import { AuthRememberComponent } from './auth-remember.component';
import { AuthFormComponent } from './auth-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthFormComponent,
    AuthRememberComponent
  ],
  providers: [

  ]
})
export class AuthFormModule {

}
