import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { MyCompoComponent } from './my-compo/my-compo.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
