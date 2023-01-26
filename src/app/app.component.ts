import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { questions } from './questions.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  value2 = '';
  questions = questions;
  form = new FormGroup({});
  verified = false;

  constructor() {
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
    console.log(
      this.questions.map((item) => ({
        id: item.id,
        question: item.question,
        correct: item.anwswer,
        inserted: this.form.get(String(item.id))?.value,
      }))
    );
    this.verified = true;
  }
}
