import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contato } from '../modelo/Contato';
import { ContatoService } from '../servico/contato.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent {


  contato = new Contato();

  tabela: boolean = true;

  // Variável para visibilidade dos botões
  btnCadastro: boolean = true;

  contatos: Contato[] = [];


  constructor(private servico: ContatoService) { }

  selecionar(): void {
    this.servico.selecionar()
      .subscribe(retorno => this.contatos = retorno);
    console.log(this.contatos);
  }

  cadastrar(): void {
    this.servico.cadastrar(this.contato)
      .subscribe(retorno => { this.contatos.push(retorno) });

    this.contato = new Contato();
    alert("Contato cadastrado com sucesso!");
  }
  editar(): void {
    this.servico.editar(this.contato)
      .subscribe(retorno => {
        let posicao = this.contatos.findIndex(obj => {
          return obj.codigo = retorno.codigo;
        })
        this.contatos[posicao] = retorno;
      });

    this.contato = new Contato();

    this.btnCadastro = true;
    this.tabela = true;
    alert('Contato alterado com sucesso!');


  }

  remover(): void {
    this.servico.remover(this.contato.codigo)
      .subscribe(retorno => {
        let posicao = this.contatos.findIndex(obj => {
          return obj.codigo = this.contato.codigo;
        })

        this.contatos.splice(posicao, 1);
      })

    this.contato = new Contato();
    this.btnCadastro = true;
    this.tabela = true;
    alert('Contato removido com sucesso!');


  }

  selecionarContato(posicao: number): void {
    this.contato = this.contatos[posicao];
    this.btnCadastro = false;
    this.tabela = false;
  }

  cancelar():void{
    this.tabela = true;
    this.btnCadastro = true;
    this.contato = new Contato();
  }

  ngOnInit() {
    this.selecionar();
  }
}
