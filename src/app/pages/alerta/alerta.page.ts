import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(private alertControl: AlertController) { }

  ngOnInit() {
  }

  async emitirAlerta(){
    const alert = await this.alertControl.create({
      header: "Alerta",
      subHeader: "Demo",
      message: "Olá usuário Monstro!",
      buttons: ['ok']
    });

    alert.present();
  }

  async emitirAlerta2(){
    const alert = await this.alertControl.create({
      header: "Alerta",
      message: "Olá usuário Monstro!",
      buttons: ['ok', 'cancelar']
    });

    alert.present();    
  }

  async emitirAlerta3(){
    const alert = await this.alertControl.create({
      header: "Confirme",
      message: "Este é um alerta com <strong>funções</strong>",
      buttons: [
                {
                  text: 'ok',
                  handler: () => {console.log('pressionado ok')}
                },
                {
                  text: 'cancelar',
                  handler: () => {console.log('pressionado cancelar')}
                }
               ]
    });

    alert.present();    
  }
}
