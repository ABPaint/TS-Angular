import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppDemo } from './demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { FormComponent } from './form/form.component';
import { BackgroundComponent } from './background/background.component';

@NgModule({
  declarations: [
    AppComponent, 
    AppDemo, Demo2Component, FormComponent, BackgroundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
