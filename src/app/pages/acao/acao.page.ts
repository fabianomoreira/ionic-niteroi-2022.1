import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.page.html',
  styleUrls: ['./acao.page.scss'],
})
export class AcaoPage implements OnInit {

  constructor(private action: ActionSheetController,
              private alert: AlertController) { }

  ngOnInit() {
  }

  async mostrarAlerta(mensagem: string){
    const alerta = await this.alert.create({
      header: 'Info',
      message: `${mensagem} executado com sucesso!`,
      buttons: ['ok']
    });

    alerta.present();
  }

  async emitir() {
    const actionController = await this.action.create({
      header: 'Fotos',
      buttons: [
        {
          text: 'Apagar',
          icon: 'trash',
          handler: () => {console.log('clicou em apagar')}
        },
        {
          text: 'Compartilhar',
          icon: 'share',
          handler: () => {this.mostrarAlerta('Compartilhar')}
        },
        {
          text: 'Exibir',
          icon: 'play',
          handler: () => {console.log('clicou em exibir')}
        },
        {
          text: 'Favoritar',
          icon: 'heart',
          handler: () => {console.log('clicou em favoritos')}
        }        
      ]
    });

    actionController.present();
  }
}
