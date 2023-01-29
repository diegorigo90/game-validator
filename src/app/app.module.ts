import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormValidComponent } from './formValid/formValid.component';
import { ValidationComponent } from './validation/validation.component';
import { HomeComponent } from './home/home.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    FormValidComponent,
    ValidationComponent,
    HomeComponent,
    TitleComponent,
  ],
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
