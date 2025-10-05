import { StatusEtapa } from './enums.js';
export class Etapa {
    constructor(nome, prazo) {
        this._nome = nome;
        this._prazo = prazo;
        this._status = StatusEtapa.PENDENTE;
        this._funcionarios = [];
    }
    iniciarEtapa() {
        if (this._status === StatusEtapa.PENDENTE) {
            this._status = StatusEtapa.ANDAMENTO;
            console.log(`Etapa '${this._nome}' iniciada e em andamento.`);
            return true;
        }
        console.warn(`Erro: A etapa '${this._nome}' não pode ser iniciada. Status atual: ${this._status}`);
        return false;
    }
    finalizarEtapa() {
        if (this._status === StatusEtapa.ANDAMENTO) {
            this._status = StatusEtapa.CONCLUIDA;
            console.log(`Etapa '${this._nome}' concluída.`);
            return true;
        }
        console.warn(`Erro: A etapa '${this._nome}' só pode ser finalizada se estiver em ANDAMENTO. Status atual: ${this._status}`);
        return false;
    }
    associarFuncionario(funcionario) {
        if (this._funcionarios.some(f => f.id === funcionario.id)) {
            console.warn(`Funcionário ID ${funcionario.id} já está associado à etapa.`);
            return false;
        }
        this._funcionarios.push(funcionario);
        console.log(`Funcionário ${funcionario.nome} associado à etapa '${this._nome}'.`);
        return true;
    }
    listarFuncionarios() {
        if (this._funcionarios.length === 0) {
            return "Nenhum funcionário associado.";
        }
        return this._funcionarios.map(f => ` - ${f.nome} (ID: ${f.id}, Permissão: ${f.nivelPermissao})`).join('\n');
    }
    detalhes() {
        return `
Etapa: ${this._nome}
Prazo: ${this._prazo}
Status: ${this._status}
Funcionários: ${this._funcionarios.length}`;
    }
    get nome() { return this._nome; }
    get status() { return this._status; }
    get funcionarios() { return this._funcionarios; }
    salvar() {
        console.log(`Dados da etapa ${this._nome} prontos para persistência.`);
    }
}
//# sourceMappingURL=Etapa.js.map