import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { ServiceModule } from './services/service.module';
import { CheckboxComponent } from './shared/components/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent, CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
