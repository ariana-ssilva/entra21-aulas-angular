import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mao-dupla',
  templateUrl: './mao-dupla.component.html',
  styleUrls: ['./mao-dupla.component.css']
})
export class MaoDuplaComponent implements OnInit {
  curso:string= "angular"
  constructor() { }

  ngOnInit(): void {
    setTimeout(() =>{
      this.curso="Merendar"
    }, 15000)
  }

}
