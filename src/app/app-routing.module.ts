import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormValidComponent } from './formValid/formValid.component';
import { HomeComponent } from './home/home.component';
import { ValidationComponent } from './validation/validation.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'validation/:team/:code',
    component: ValidationComponent,
  },
  {
    path: 'formValid/:validationCode',
    component: FormValidComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
