import { Component, OnInit } from '@angular/core';
import { Mes } from './check.model';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  meses: Mes[] = [
            {descricao: 'Janeiro'  , status: false},
            {descricao: 'Fevereiro', status: true},
            {descricao: 'Março'    , status: true},
            {descricao: 'Abril'    , status: false},
            {descricao: 'Maio'     , status: false},
            {descricao: 'Junho'    , status: false},
            {descricao: 'Julho'    , status: false},
            {descricao: 'Agosto'   , status: true},
            {descricao: 'Setembro' , status: false},
            {descricao: 'Outubro'  , status: false},
            {descricao: 'Novembro' , status: false},
            {descricao: 'Dezembro' , status: false},
         ];

    impressao = this.meses.filter((obj) => {return obj.status == true})

  constructor() { }

  ngOnInit() {
    this.imprimirNoConsole();
  }

  imprimirNoConsole(){
    for(let i = 0; i < this.meses.length; i++){
      if(this.meses[i].status){
        console.log(this.meses[i].descricao);
      }
    }
  }

  imprimirNoConsolePlus(){
    for(const mes of this.meses){
      if(mes.status){
        console.log(mes.descricao);
      }
    }
  }

  imprimirNoConsoleSenior() {
    console.log(this.impressao);
  }
}
