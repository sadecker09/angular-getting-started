// This is the application's root Angular module

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  // defines which components belong to AppModule
  // component can ony belong to one Angular module
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
  ],
  // define external modules to be availabe to all the components belonging to AppModule
  imports: [BrowserModule, FormsModule, HttpClientModule],
  // start-up component of the application
  // start-up component should contain the selector component used in index.html
  bootstrap: [AppComponent],
})
export class AppModule {}
