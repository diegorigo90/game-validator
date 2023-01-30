import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QUESTIONS } from '../app.model';
import { AppService } from '../app.service';

@Component({
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css'],
})
export class ValidationComponent {
  questions = QUESTIONS;
  form = new FormGroup({});
  verified = false;
  teamName = '';
  code = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appService: AppService
  ) {
    this.code = this.activatedRoute.snapshot.params['code'];
    let teamCode = this.activatedRoute.snapshot.params['team'];
    this.teamName = this.appService.getTeamName(teamCode);
    if (!this.isAllRight()) {
      this.router.navigateByUrl('');
    }
    if (this.teamName)
      QUESTIONS.forEach((item) =>
        this.form.addControl(
          String(item.id),
          new FormControl('', [Validators.required, myValidator(item.anwswer)])
        )
      );
  }

  isAllRight(): boolean {
    return (
      this.appService.checkTeam(this.teamName) &&
      this.appService.checkCode(this.teamName, this.code)
    );
  }

  submit() {
    this.verified = true;
    this.form.markAllAsTouched();
    if (this.form.valid) {
      let validationCode = this.appService.getValidationCode(this.code);
      this.router.navigateByUrl(`/formValid/${this.code}/${validationCode}`);
    }
  }
}

export function myValidator(value: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const correct = value.toUpperCase() === control.value.toUpperCase();
    return correct ? null : { wrong: { value: control.value } };
  };
}
