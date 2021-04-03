import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';


@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes : Cliente[] = [];

  clienteSelecionado : Cliente;
  mensagemSucesso : string;
  mensagemErro : string;

  constructor(private service : ClientesService, private router : Router) { }

  ngOnInit(): void {
    this.service.getClients()
    .subscribe(response => this.clientes = response);
  }

  novoCadastro(){
    this.router.navigate(['/clientes-form'])
  }

  preparaDelecao(cliente : Cliente){
    this.clienteSelecionado = cliente;
  }

  deletarCliente(){
    this.service
    .delete(this.clienteSelecionado.id)
    .subscribe(
      response => this.mensagemSucesso = 'Cliente removido com sucesso.',
      erro => this.mensagemErro = 'Erro ao remover cliente.'
    )
  }
}
