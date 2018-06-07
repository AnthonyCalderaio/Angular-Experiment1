import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WarningComponent } from '../warning/warning.component';
import { SuccessComponent } from '../success/success.component';
import { ServerComponent } from '../server/server.component';



@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent,
    ServerComponent
    
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
