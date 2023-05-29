import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {HeaderComponent} from "./layout/header/header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {SideNavComponent} from "./layout/side-nav/side.nav.component";
import {HomeComponent} from "./layout/home/home.component";
import {CommonModule} from "@angular/common";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MarcaCrudComponent} from "./cadastros/marca-crud/marca.crud.component";
import {CrudComponent} from "./layout/crud/crud.component";
import {MatInputModule} from "@angular/material/input";
import {TextBoxComponent} from "./core/text-box/text.box.component";
import {
  DevExtremeModule,
  DxButtonModule,
  DxDataGridModule,
  DxFormModule,
  DxTextAreaModule,
  DxTextBoxModule
} from "devextreme-angular";
import {HttpClientModule} from "@angular/common/http";
import {MarcaService} from "./service/marca.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    MarcaCrudComponent,
    CrudComponent,
    TextBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatSidenavModule,
    MatInputModule,
    DxFormModule,
    DxTextAreaModule,
    DxTextBoxModule,
    DxDataGridModule,
    DxButtonModule,
    HttpClientModule
  ],
  providers: [
    MarcaService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
