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

  constructor(private service : ClientesService) { 
    this.cliente = new Cliente;
    this.cliente = service.getCliente();
  }

  onSubmit(){
    console.log(this.cliente)
  }

}
