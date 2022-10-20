import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { BackendService } from '../backend.service';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-consumindo-api',
  templateUrl: './consumindo-api.component.html',
  styleUrls: ['./consumindo-api.component.css']
})
export class ConsumindoApiComponent implements OnInit {
  pokemon!:string;
  email:string ="";
  senha:string = "";

  constructor(private service:PokemonService, private servicoBack:BackendService) { }

  ngOnInit(): void {}

  buscar():void{
    this.service.quemEhEssePokemon(this.pokemon)
    .pipe(
      catchError(
        (error)=> {
          let lista = ["Ariana", "Moreira", "Silva"]
          return of(lista)
        }
      )
    ).subscribe((response)=>{
      console.log("Aeee" , response)
    })
  }

  buscarTipos(){
    this.service.quaisOsTipos()
    .pipe(
      catchError(
        (error)=> {
          let lista = ["Ariana", "Moreira", "Silva"]
          return of(lista)
        }
      )
    ).subscribe((response)=>{
      console.log("Aeee" , response)
    })
  }

  login(){
    this.servicoBack.login(this.getDados())
    .pipe(
      catchError(
      (error:any) =>{
        return of(error);
      }
    )).subscribe((response:any))=>{
      console.log("aaaaaaaaaaaaaaaaaa")
      
    }
  }

  register():void{

  }

  // retorna os dados da tela
  getDados():any{
    return {
      email: this.email,
      senha: this.senha
    }
  }



}
