import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {
    this.form = this.fb.group({
      teamCode: '',
      code: '',
    });
  }

  check() {
    let teamCode = String(this.form.get('teamCode')?.value);
    let code = String(this.form.get('code')?.value);
    if (this.appService.checkTeam(teamCode)) {
      if (this.appService.checkCode(teamCode, code)) {
        let url = `/validation/${teamCode}/${code}`;
        console.log(`Navigating to ${url}`);
        this.router.navigateByUrl(url);
      } else {
        alert('Il codice non è corretto!!!');
      }
    } else {
      alert('La squadra non esiste!!!');
    }
  }
}
