import Entrada from "../io/entrada"
import Servico from "../modelo/servico"
import Cadastro from "./cadastro"

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log("\nCadastro de Serviço")
        
        // Obter informações do serviço de forma simples
        let nome = this.entrada.receberTexto("Digite o nome do serviço: ")
        let valor = this.entrada.receberNumero("Digite o valor do serviço: ")
        let descricao = this.entrada.receberTexto("Digite a descrição do serviço: ")
        
        // Criar o serviço (de forma simples, sem validações)
        let servico = new Servico(nome, valor, descricao)
        
        // Adicionar à lista
        this.servicos.push(servico)
        
        console.log("\nServiço cadastrado com sucesso!")
    }
}