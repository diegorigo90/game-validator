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
  questions: any[] | undefined = [];
  form = new FormGroup({});
  verified = false;
  teamName = '';
  teamCode = '';
  code = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appService: AppService
  ) {
    this.code = this.activatedRoute.snapshot.params['code'];
    this.teamCode = this.activatedRoute.snapshot.params['teamCode'];
    console.log('TEAM CODE', this.teamCode);
    this.teamName = this.appService.getTeamName(this.teamCode);
    console.log('TEAM NAME', this.teamName);
    if (!this.isAllRight()) {
      this.router.navigateByUrl('');
    }
    if (this.teamName) {
      this.questions = QUESTIONS.get(this.code);
      this.questions?.forEach((item) =>
        this.form.addControl(
          String(item.id),
          new FormControl('', [Validators.required, myValidator(item.anwswer)])
        )
      );
    }
  }

  isAllRight(): boolean {
    return (
      this.appService.checkTeam(this.teamCode) &&
      this.appService.checkCode(this.teamCode, this.code)
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
