import { TarefaModel } from "./../model/TarefaModel";
import * as input from "readline-sync";
import * as readline from "readline-sync";
export class TarefaView {
  gerenciador: TarefaModel = new TarefaModel();
  // Deixei Gerenciador Tarefas porque poderia continuar como o nome da classe, fica mais explicativo

  exibirMenu(tarefa: TarefaModel) {
    let loop: boolean = true;

    while (loop) {
      console.log("\n===== GERENCIADOR DE TAREFAS ======");
      console.log("=============== MENU ==============");
      console.log("0 - Sair do sistema");
      console.log("1 - Listar todas as atividades");
      console.log("2 - Cadastrar uma atividade");
      console.log("3 - Buscar uma atividade");
      console.log("4 - Alterar uma atividade");
      console.log("5 - Remover uma atividade");
      console.log("6 - Listar atividades por status");
      console.log("===================================");
      let opcao: number = input.questionInt("Escolha uma opcao: ");
      console.log("===================================");
      console.clear();

      switch (opcao) {
        case 1:
          this.gerenciador.listarTarefas();
          readline.keyInPause();
          console.clear();
          break;

        case 2:
          let op: number = 0;
          do {
            this.gerenciador.cadastrarTarefas();
            op = input.questionInt(
              "Deseja realizar outro cadastro (1 - SIM / 2 - NAO): "
            );
            console.clear();
          } while (op === 1);
          readline.keyInPause();
          console.clear();
          break;

        case 3:
          this.gerenciador.buscarTarefas();
          readline.keyInPause();
          console.clear();
          break;

        case 4:
          this.gerenciador.atualizarTarefas();
          readline.keyInPause();
          console.clear();
          break;

        case 5:
          this.gerenciador.removerTarefas();
          readline.keyInPause();
          console.clear();
          break;

        case 6:
          this.gerenciador.ListarPorStatus();
          readline.keyInPause();
          console.clear();
          break;

        case 0:
          console.log("\n=======================================");
          console.log("Saindo do sistema");
          console.log("=======================================");
          loop = false;
          break;

        default:
          console.log();
          console.log("Opcao invalida!");
          readline.keyInPause();
          console.clear();
          break;
      }
    }
  }
}
