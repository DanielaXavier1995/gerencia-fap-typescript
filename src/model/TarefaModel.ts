import { Status } from "../enumerate/Status";

import * as input from "readline-sync";
export class TarefaModel {
  public titulo: string;
  public descricao: string;
  public dataDeEntrega: Date;
  private _idTarefa: number = 0;
  public status: Status;
  public tarefasList: TarefaModel[];

  constructor() {
    (this.titulo = this.titulo),
      (this.descricao = this.titulo),
      (this.dataDeEntrega = this.dataDeEntrega),
      (this._idTarefa = this._idTarefa++),
      (this.status = Status.INICIAR);
  }

  public get getIdTarefa(): number {
    return this._idTarefa;
  }

  public manipularData(): Date {
    const data: string = input.question(
      "Digite a data de entrega (dd/mm/aaaa): "
    );

    const dataDividida: string[] = data.split("/");

    const dia: number = parseInt(dataDividida[0]);
    const mes: number = parseInt(dataDividida[1]) - 1;
    const ano: number = parseInt(dataDividida[2]);

    this.dataDeEntrega = new Date(ano, mes, dia);

    return this.dataDeEntrega;
  }

  buscaPorId() {
    const buscarId: number = input.questionInt("Digite o codigo da tarefa: ");

    for (const t of this.tarefasList) {
      if (t.getIdTarefa == buscarId) {
        return t;
      }
    }
    throw console.error(
      "\nCODIGO INEXISTENTE, POR FAVOR DIGITE UM CODIGO VALIDO!!"
    );
  }
}
