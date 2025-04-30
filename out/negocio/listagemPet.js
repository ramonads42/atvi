"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
const entrada_1 = __importDefault(require("../io/entrada"));
class ListagemPets extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    listar() {
        console.log("\nListagem de pets");
        console.log("Escolha uma opção:");
        console.log("1 - Listar todos os pets");
        console.log("2 - Listar pets de um cliente específico");
        const opcao = this.entrada.receberNumero("Digite o número da opção: ");
        if (opcao === 1) {
            this.listarTodosPets();
        }
        else if (opcao === 2) {
            this.listarPetsCliente();
        }
        else {
            console.log("\nOpção inválida!");
        }
    }
    listarTodosPets() {
        console.log("\nLista de todos os pets:");
        // Variável para verificar se existem pets
        let encontrouPets = false;
        // Loop para percorrer todos os clientes
        for (let i = 0; i < this.clientes.length; i++) {
            let cliente = this.clientes[i];
            let pets = cliente.getPets;
            // Verifica se o cliente tem pets
            if (pets.length > 0) {
                console.log("\nPets de " + cliente.nome + ":");
                // Loop para listar os pets deste cliente
                for (let j = 0; j < pets.length; j++) {
                    let pet = pets[j];
                    console.log("Nome: " + pet.getNome);
                    console.log("Tipo: " + pet.getTipo);
                    console.log("Raça: " + pet.getRaca);
                    console.log("Gênero: " + pet.getGenero);
                    console.log("--------------------------------------");
                }
                encontrouPets = true;
            }
        }
        if (!encontrouPets) {
            console.log("\nNenhum pet cadastrado!");
        }
    }
    listarPetsCliente() {
        const cpf = this.entrada.receberTexto("\nDigite o CPF do cliente: ");
        // Variável para verificar se encontrou o cliente
        let clienteEncontrado = false;
        // Loop para encontrar o cliente pelo CPF
        for (let i = 0; i < this.clientes.length; i++) {
            let cliente = this.clientes[i];
            if (cliente.getCpf.getValor === cpf) {
                clienteEncontrado = true;
                let pets = cliente.getPets;
                // Verifica se o cliente tem pets
                if (pets.length > 0) {
                    console.log("\nPets de " + cliente.nome + ":");
                    // Loop para listar os pets
                    for (let j = 0; j < pets.length; j++) {
                        let pet = pets[j];
                        console.log("Nome: " + pet.getNome);
                        console.log("Tipo: " + pet.getTipo);
                        console.log("Raça: " + pet.getRaca);
                        console.log("Gênero: " + pet.getGenero);
                        console.log("--------------------------------------");
                    }
                }
                else {
                    console.log("\nEste cliente não possui pets cadastrados!");
                }
                break;
            }
        }
        if (!clienteEncontrado) {
            console.log("\nCliente não encontrado!");
        }
    }
}
exports.default = ListagemPets;
