import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  // properties
  nome:string = 'Ariana';
  sobrenome! :string;

  idade:number = 22;
  chuva:boolean = false;

  enderecoImg: string = "https://res.cloudinary.com/practicaldev/image/fetch/s--X2dFVlPj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hvfiwnnxyx33s3acen7u.jpg"
  padrao:string = '100';
  google:string='https://google.com.br'
  alvo:string = '_blank';
  tabela:string='table table-bordered table striped'

  constructor() { }

  ngOnInit(): void {
  }

}
