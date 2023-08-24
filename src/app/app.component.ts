import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Botão', url: 'botao', icon: 'browsers' },
    { title: 'Navegação', url: 'navegacao', icon: 'boat'},
    { title: 'Alerta', url: 'alerta', icon: 'chatbox'}
  ];

  constructor(private nav: NavController) {}

  irParaHome(){
    this.nav.navigateForward('home');
  } 
}
