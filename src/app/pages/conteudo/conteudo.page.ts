import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.page.html',
  styleUrls: ['./conteudo.page.scss'],
})
export class ConteudoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logarScrollInicio(){
    console.log('Usuário está no início');
  }

  logarScrollFim(){
    console.log('Usuário está no final');
  }

}
