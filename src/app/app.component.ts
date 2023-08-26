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
    { title: 'Alerta', url: 'alerta', icon: 'chatbox'},
    { title: 'Menu de Contexto', url: 'acao', icon: 'share'},
    { title: 'Badge', url: 'badge', icon: 'notifications'},
    { title: 'Cards', url: 'card', icon: 'images'},
    { title: 'Checkbox', url: 'check', icon: 'checkbox'},
    { title: 'Interação', url: 'conteudo', icon: 'videocam'},
    { title: 'Chip', url: 'chip', icon: 'id-card'},
    { title: 'Data', url: 'data', icon: 'calendar-number'}
  ];

  constructor(private nav: NavController) {}

  irParaHome(){
    this.nav.navigateForward('home');
  } 
}
