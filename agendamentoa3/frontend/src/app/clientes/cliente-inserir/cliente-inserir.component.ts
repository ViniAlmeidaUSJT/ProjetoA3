import { Component, EventEmitter, Output } from "@angular/core";
import { Cliente } from "../cliente.model";
@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css'],
})
export class ClienteInserirComponent {

  @Output() clienteAdicionado = new EventEmitter<Cliente>();
  nome = "";
  especialidade = "";
  data = "";


  onAdicionarCliente() {
    const cliente: Cliente = {
      nome: this.nome,
      especialidade: this.especialidade,
      data: this.data,
    };
    this.clienteAdicionado.emit(cliente);
  }

}
