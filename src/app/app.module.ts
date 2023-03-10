import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { BrancoComponent } from './branco/branco.component';






@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BrancoComponent
  ],
  imports: [
    CardModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatMenuModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
