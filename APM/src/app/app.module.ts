// This is the application's root Angular module

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';

@NgModule({
  // defines which components belong to AppModule
  // component can ony belong to one Angular module
  declarations: [AppComponent, WelcomeComponent],
  // define external modules to be availabe to all the components belonging to AppModule
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
    ProductModule,
  ],
  // start-up component of the application
  // start-up component should contain the selector component used in index.html
  bootstrap: [AppComponent],
})
export class AppModule {}
