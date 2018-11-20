import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';
import { StockInventoryComponent } from './stock-inventory/containers/stock-inventory/stock-inventory.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StockInventoryModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
