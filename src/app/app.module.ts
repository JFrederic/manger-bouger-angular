import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent }  from './app.component';
import { ConsommateurFormComponent }  from './consommateur-form.component';
import { MenuFormComponent }  from './menu-form.component';
import { ConsommateurService } from './consommateur.service'
import { MenuService } from './menu.service'

@NgModule({
  imports:      [ BrowserModule , FormsModule , HttpModule],
  declarations: [ AppComponent, ConsommateurFormComponent, MenuFormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ConsommateurService, MenuService]
})
export class AppModule { }
