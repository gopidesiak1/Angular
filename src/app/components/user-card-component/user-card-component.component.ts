import { Component, Input } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-card-component',
  templateUrl: './user-card-component.component.html',
  styleUrls: ['./user-card-component.component.css'],
})
export class UserCardComponentComponent {
  @Input() user: User;
}
