import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FormValidComponent } from './formValid/formValid.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, FormValidComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
