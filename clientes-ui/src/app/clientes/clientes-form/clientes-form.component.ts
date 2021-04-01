import { Component } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';

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

  constructor(private service : ClientesService) { 
    this.cliente = new Cliente;
  }

  onSubmit(){
    this.service
    //Como esse método irá retornar um Observable
    .create(this.cliente)
    //Usado quando a requisição for assíncrona
    .subscribe(response => {
      console.log(response)
      this.success = true
    },errorResponse => {
      this.errors = errorResponse.error.errors;
    }
    );
  }

}
