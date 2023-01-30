import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  templateUrl: './formValid.component.html',
  styleUrls: ['./formValid.component.css'],
})
export class FormValidComponent {
  code: '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appService: AppService
  ) {
    this.code = this.activatedRoute.snapshot.params['code'];
    let validationCode = this.activatedRoute.snapshot.params['validationCode'];
    let isCorrect = this.appService.checkValidationCode(validationCode);
    if (!isCorrect) {
      this.home();
    }
  }

  home() {
    this.router.navigateByUrl('');
  }
}
