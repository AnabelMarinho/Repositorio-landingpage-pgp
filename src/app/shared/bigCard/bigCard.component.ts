import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bigcard',
  standalone: true,
  templateUrl: './bigCard.component.html',
  imports: [CommonModule],
})
export class CardComponent {
  @Input() icon?: string;
  @Input() title = '';
  @Input() content = '';
  @Input() type = '';
}
