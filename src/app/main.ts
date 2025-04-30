import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemCliente";
import AtualizacaoCliente from "../negocio/atualizarCliente";
import ExclusaoCliente from "../negocio/excluirCliente";
import CadastroPet from "../negocio/cadastroPet";
import ListagemPets from "../negocio/listagemPet";
import AtualizacaoPet from "../negocio/atualizarPet";
import ExclusaoPet from "../negocio/excluirPet";
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemProdutos from "../negocio/listagemProduto";
import AtualizacaoProduto from "../negocio/atualizarProduto";
import ExclusaoProduto from "../negocio/excluirProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemServico from "../negocio/listagemServico";
import ExclusaoServico from "../negocio/excluirServico";
import AtualizacaoServico from "../negocio/atualizarServico";
import RegistroConsumo from "../negocio/registroConsumo";

console.log("Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinárias");
let empresa = new Empresa();
let execucao = true;

// Loop principal do sistema
while (execucao) {
    console.log("\nOpções:");
    console.log("1 - Gerenciar clientes");
    console.log("2 - Gerenciar pets");
    console.log("3 - Gerenciar produtos");
    console.log("4 - Gerenciar serviços");
    console.log("5 - Registrar consumo");
    console.log("6 - Relatórios");
    console.log("0 - Sair");

    let entrada = new Entrada();
    let opcao = entrada.receberNumero("Por favor, escolha uma opção: ");

    // Menu principal
    if (opcao === 1) {
        // Menu de clientes
        let execucaoClientes = true;
        
        while (execucaoClientes) {
            console.log("\nGerenciamento de Clientes:");
            console.log("1 - Cadastrar cliente");
            console.log("2 - Listar clientes");
            console.log("3 - Atualizar cliente");
            console.log("4 - Excluir cliente");
            console.log("0 - Voltar ao menu principal");
            
            let opcaoClientes = entrada.receberNumero("Por favor, escolha uma opção: ");
            
            if (opcaoClientes === 1) {
                let cadastro = new CadastroCliente(empresa.getClientes);
                cadastro.cadastrar();
            } 
            else if (opcaoClientes === 2) {
                let listagem = new ListagemClientes(empresa.getClientes);
                listagem.listar();
            }
            else if (opcaoClientes === 3) {
                let atualizacao = new AtualizacaoCliente(empresa.getClientes);
                atualizacao.atualizar();
            }
            else if (opcaoClientes === 4) {
                let exclusao = new ExclusaoCliente(empresa.getClientes);
                exclusao.excluir();
            }
            else if (opcaoClientes === 0) {
                execucaoClientes = false;
            }
            else {
                console.log("\nOperação não entendida :(");
            }
        }
    }
    else if (opcao === 2) {
        // Menu de pets
        let execucaoPets = true;
        
        while (execucaoPets) {
            console.log("\nGerenciamento de Pets:");
            console.log("1 - Cadastrar pet");
            console.log("2 - Listar pets");
            console.log("3 - Atualizar pet (em desenvolvimento)");
            console.log("4 - Excluir pet (em desenvolvimento)");
            console.log("0 - Voltar ao menu principal");
            
            let opcaoPets = entrada.receberNumero("Por favor, escolha uma opção: ");
            
            if (opcaoPets === 1) {
                let cadastro = new CadastroPet(empresa.getClientes);
                cadastro.cadastrar();
            }
            else if (opcaoPets === 2) {
                let listagem = new ListagemPets(empresa.getClientes);
                listagem.listar();
            }
            else if (opcaoPets === 3) {
                let atualizacao = new AtualizacaoPet(empresa.getClientes);
                atualizacao.atualizar();
            }
            else if (opcaoPets === 4) {
                let exclusao = new ExclusaoPet(empresa.getClientes);
                exclusao.excluir();
            }
            else if (opcaoPets === 0) {
                execucaoPets = false;
            }
            else {
                console.log("\nOperação não entendida :(");
            }
        }
    }
    else if (opcao === 3) {
        // Menu de produtos
        let execucaoProdutos = true;
        while (execucaoProdutos) {
            console.log("\nGerenciamento de Produtos:");
            console.log("1 - Cadastrar produto");
            console.log("2 - Listar produtos");
            console.log("3 - Atualizar produto");
            console.log("4 - Excluir produto");
            console.log("0 - Voltar ao menu principal");
            
            let opcaoProdutos = entrada.receberNumero("Por favor, escolha uma opção: ");
            
            if (opcaoProdutos === 1) {
                let cadastro = new CadastroProduto(empresa.getProdutos);
                cadastro.cadastrar();
            }
            else if (opcaoProdutos === 2) {
                let listagem = new ListagemProdutos(empresa.getProdutos);
                listagem.listar();
            }
            else if (opcaoProdutos === 3) {
                let atualizacao = new AtualizacaoProduto(empresa.getProdutos);
                atualizacao.atualizar();
            }
            else if (opcaoProdutos === 4) {
                let exclusao = new ExclusaoProduto(empresa.getProdutos);
                exclusao.excluir();
            }
            else if (opcaoProdutos === 0) {
                execucaoProdutos = false;
            }
            else {
                console.log("\nOperação não entendida :(");
            }
        }
    }
    else if (opcao === 4) {
        // Menu de serviços
        let execucaoServicos = true;
        while (execucaoServicos) {
            console.log("\nGerenciamento de Serviços:");
            console.log("1 - Cadastrar serviço");
            console.log("2 - Listar serviços");
            console.log("3 - Atualizar serviço (em desenvolvimento)");
            console.log("4 - Excluir serviço");
            console.log("0 - Voltar ao menu principal");
            
            let opcaoServicos = entrada.receberNumero("Por favor, escolha uma opção: ");
            
            if (opcaoServicos === 1) {
                let cadastro = new CadastroServico(empresa.getServicos);
                cadastro.cadastrar();
            }
            else if (opcaoServicos === 2) {
                let listagem = new ListagemServico(empresa.getServicos);
                listagem.listar();
            }
            else if (opcaoServicos === 3) {
                let atualizacao = new AtualizacaoServico(empresa.getServicos);
                atualizacao.atualizar();
            }
            else if (opcaoServicos === 4) {
                let exclusao = new ExclusaoServico(empresa.getServicos);
                exclusao.excluir();
            }
            else if (opcaoServicos === 0) {
                execucaoServicos = false;
            }
            else {
                console.log("\nOperação não entendida :(");
            }
        }
    }
    else if (opcao === 5) {
        let registro = new RegistroConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
        registro.registrar();
    }
    else if (opcao === 6) {
        console.log("\nFuncionalidade de relatórios em desenvolvimento que vai mostrar a Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor, Listagem geral dos serviços ou produtos mais consumidos. Listagem dos serviços ou produtos mais consumidos por tipo e raça de pets. e  a Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.....");
    }
    else if (opcao === 0) {
        execucao = false;
        console.log("\nAté mais!");
    }
    else {
        console.log("\nOperação não entendida :(");
    }
}