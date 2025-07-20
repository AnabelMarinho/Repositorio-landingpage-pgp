import { Component } from '@angular/core';
import { Home } from './sections/home/home'; 
import { Footer } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home, Footer], 
  template: `
    <app-home></app-home>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class App {}
