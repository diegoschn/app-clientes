import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  
  constructor() { }

  let
  var
  const
  
  getCliente() : Cliente {
    let cliente : Cliente = new Cliente();
    cliente.nome = "Diego Schneider";
    cliente.cpf = "11111111111";
    return cliente;
  }


}
