// This is the application's root Angular module

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  // defines which components belong to AppModule
  declarations: [AppComponent],
  // define external modules to be availabe to all the components belonging to AppModule
  imports: [BrowserModule],
  // start-up component of the application
  // start-up component should contain the selector component used in index.html
  bootstrap: [AppComponent],
})
export class AppModule {}
