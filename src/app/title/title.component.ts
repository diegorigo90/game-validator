import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent {
  @Input() text = 'Title';
}
