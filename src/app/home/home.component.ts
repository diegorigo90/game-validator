import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { questions } from '../questions.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  value2 = '';
  questions = questions;
  form = new FormGroup({});
  verified = false;

  constructor(private router: Router) {
    questions.forEach((item) =>
      this.form.addControl(
        String(item.id),
        new FormControl('', [
          Validators.required,
          Validators.pattern(item.anwswer),
        ])
      )
    );
  }

  submit() {
    this.verified = true;
    if (this.form.valid) {
      this.router.navigateByUrl('/formValid');
    }
  }
}
