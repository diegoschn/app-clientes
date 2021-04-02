//ActivatedRoute - Serve para capturar parâmetros 

import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente : Cliente;
  success : boolean = false;
  errors : string[]; 
  id : number;

  constructor(private service : ClientesService, 
    private router : Router,
    private activatedRoute : ActivatedRoute) { 

    this.cliente = new Cliente;
  }

  ngOnInit(){
    let params = this.activatedRoute.params
      .subscribe( params => {
        if(params && params['id']){
          this.service
          .getClienteById(params.id)
          .subscribe( response => {
            this.cliente = response,
            errorResponse => this.cliente = new Cliente;
          })
        }
      })
    
  }
  
  onSubmit(){
    if(this.id){
        this.service
        .update(this.cliente)
        .subscribe( response => {
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o cliente.']
        })
    } else{
      this.service
      //Como esse método irá retornar um Observable
      .create(this.cliente)
      //Usado quando a requisição for assíncrona
      .subscribe(response => {
        console.log(response)
        //pega todos os dados de response e joga no template
        this.cliente = response;
        this.success = true
        this.errors = null;
      },errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      }
    );  
  } 
    
    
  }
  voltar(){
    this.router.navigate(['/clientes-lista'])
  }



}
