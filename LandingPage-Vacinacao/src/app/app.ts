import { Component } from '@angular/core';
import { Home } from './sections/home/home'; 
import { Footer } from './sections/footer/footer';
import { Importancia } from './sections/importancia/importancia';
import { PublicoAlvo } from './sections/publico-alvo/publico-alvo';
import { OndeVacinar } from './sections/onde-vacinar/onde-vacinar';
import { MitosEVerdades } from './sections/mitos-verdades/mitos-everdades';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home, Importancia, PublicoAlvo, OndeVacinar, MitosEVerdades, Footer], 
  template: `
    <app-home></app-home>
    <app-importancia></app-importancia>
    <app-publico-alvo></app-publico-alvo>
    <app-onde-vacinar></app-onde-vacinar>
    <app-mitos-everdades></app-mitos-everdades>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class App {}
