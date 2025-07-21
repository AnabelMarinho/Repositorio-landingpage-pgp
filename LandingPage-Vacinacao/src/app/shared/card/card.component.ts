import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() icon?: string;
  @Input() title = '';
  @Input() content = '';
}
