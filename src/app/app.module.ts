import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Store } from './store';
import { SongsModule } from './songs/songs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SongsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
