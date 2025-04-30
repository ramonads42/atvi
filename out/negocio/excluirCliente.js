"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
class ExclusaoCliente {
    constructor(clientes) {
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    excluir() {
        console.log("\nExclusão de cliente");
        let cpf = this.entrada.receberTexto("Digite o CPF do cliente que deseja excluir: ");
        // Variáveis para controle
        let clienteEncontrado = false;
        let indiceCliente = -1;
        // Loop para encontrar o cliente
        for (let i = 0; i < this.clientes.length; i++) {
            let cliente = this.clientes[i];
            if (cliente.getCpf.getValor === cpf) {
                clienteEncontrado = true;
                indiceCliente = i;
                console.log("\nCliente encontrado: " + cliente.nome);
                let confirmacao = this.entrada.receberTexto("Tem certeza que deseja excluir este cliente? (S/N): ");
                // Conversão para maiúscula e verificação simples
                if (confirmacao === "S" || confirmacao === "s") {
                    // Remover cliente usando splice
                    this.clientes.splice(indiceCliente, 1);
                    console.log("\nCliente excluído com sucesso!");
                }
                else {
                    console.log("\nOperação cancelada.");
                }
                break;
            }
        }
        if (!clienteEncontrado) {
            console.log("\nCliente não encontrado!");
        }
    }
}
exports.default = ExclusaoCliente;
