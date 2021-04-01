import { Component } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Router } from '@angular/router';

import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent {

  cliente : Cliente;
  success : boolean = false;
  errors : string[]; 

  constructor(private service : ClientesService, private router : Router) { 
    this.cliente = new Cliente;
  }

  onSubmit(){
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
  voltar(){
    this.router.navigate(['/clientes-lista'])
  }

}
