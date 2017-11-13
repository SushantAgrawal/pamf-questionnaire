import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ROUTES} from './app.routes';
import { AppComponent } from './app.component';
import {AppService} from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
    //, RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
