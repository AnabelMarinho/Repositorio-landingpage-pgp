import { Component } from '@angular/core';
import { CardComponent } from '../../shared/bigCard/bigCard.component';

@Component({
  selector: 'app-mitos-everdades',
  imports: [CardComponent],
  templateUrl: './mitos-everdades.html',
  styles: ``
})
export class MitosEVerdades {

  currentIndex = 0;

  cards = [
    {
      icon: 'cancel',
      title: 'A vacina causa gripe?',
      content: 'Mito! Ela é produzida com vírus inativados, portanto, não causa a doença. Podem sim surgir alguns efeitos adversos leves como dor no local da aplicação, febre baixa, mal estar,  que desaparecem em até 48 horas',
      type: 'alerta'
    },
    {
      icon: 'cancel',
      title: 'Não preciso tomar a vacina da gripe todos os anos?',
      content: 'Mito! A imunização anual com vacina é indispensável. Isso porque o vírus tem a capacidade de se modificar com frequência. Com todo, o sistema imunológico de uma pessoa que não toma a vacina há muito tempo não poderá reconhecer novas cepas.',
      type: 'alerta'
    },
    {
      icon: 'cancel',
      title: 'A vacina não funciona',
      content: 'Mito! Ela reduz drasticamente o risco de complicações graves, hospitalizações e óbitos, mesmo que não impeça todos os casos.',
      type: 'alerta'
    },
    {
      icon: 'cancel',
      title: 'Gestantes não podem tomar a vacina da gripe',
      content: 'Mito! As gestantes fazem parte do grupo prioritário para receber a imunização, que é a melhor forma de prevenir a doença.',
      type: 'alerta'
    },
    {
      icon: 'check_circle',
      title: 'Mesmo vacinado ainda posso contrair a gripe',
      content: 'Verdade! Mas as chances de uma gripe grave com complicações são muito menores.',
      type: 'positivo'
    },
    {
      icon: 'check_circle',
      title: 'A vacinação ajuda a proteger outras pessoas também',
      content: 'Verdade! Quanto mais pessoas vacinadas, menos o vírus circula, isso protege até quem não pode tomar a vacina.',
      type: 'positivo'
    },
    {
      icon: 'check_circle',
      title: 'Posso sim tomar outras vacinas junto com a da gripe',
      content: 'Verdade! A dose da influenza pode ser administrada na mesma ocasião de outras vacinas do Calendário Nacional de Vacinação.',
      type: 'positivo'
    },
    {
      icon: 'check_circle',
      title: 'Os recém nascidos não podem tomar vacina da gripe',
      content: 'Verdade! A idade para a imunização é acima de 6 meses.',
      type: 'positivo'
    }
  ];

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
  }
}
