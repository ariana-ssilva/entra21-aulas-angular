import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  links!:Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.links = new Array();
    this.links.push({
      rota: "outro",
      textContent: "Outro",
      cor: "nav-icon far fa-circle text-danger"
    });
    this.links.push({
      rota: "pagina",
      textContent: "Página",
      cor: "nav-icon far fa-circle text-success"
    });
    this.links.push({
      rota: "inicio",
      textContent: "Inicio",
      cor: "nav-icon far fa-circle text-warning"
    });
    this.links.push({
      rota: "outro",
      textContent: "Outro",
      cor: "nav-icon far fa-circle text-danger"
    });
    this.links.push({
      rota: "property",
      textContent: "Property",
      cor: "nav-icon far fa-circle text-warning"
    });
    this.links.push({
      rota: "event",
      textContent: "Event",
      cor: "nav-icon far fa-circle text-success"
    });
    this.links.push({
      rota: "mao-dupla",
      textContent: "Mão Dupla",
      cor: "nav-icon far fa-circle text-danger"
    });
    this.links.push({
      rota: ["receber", "Ariana", 22, "jba"],
      textContent: "Receber",
      cor: "nav-icon far fa-circle text-warning"
    });
    this.links.push({
      rota: "enviar",
      textContent: "Enviar Component",
      cor: "nav-icon far fa-circle ",
      hexa: "text-warning"
    });
    this.links.push({
      rota: "diretiva",
      textContent: "Diretiva FOR",
      cor: "nav-icon far fa-circle text-success"
    });
    this.links.push({
      rota: "pokeapi",
      textContent: "PokeApi",
      cor: "nav-icon far fa-circle text-success"
    });
  }

}
