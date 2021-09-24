import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFrameComponent } from './main-frame/main-frame.component';
import { JobsComponent } from './jobs/jobs.component';
import { ContatoViewComponent } from './contato-view/contato-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFrameComponent,
    JobsComponent,
    ContatoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
