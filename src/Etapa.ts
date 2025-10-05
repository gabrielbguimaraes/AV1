import { StatusEtapa } from './enums.js';
import { Funcionario } from './Funcionario.js';

export class Etapa {
    private _nome: string;
    private _prazo: string;
    private _status: StatusEtapa;
    private _funcionarios: Funcionario[];

    constructor(nome: string, prazo: string) {
        this._nome = nome;
        this._prazo = prazo;
        this._status = StatusEtapa.PENDENTE;
        this._funcionarios = [];
    }


    public iniciarEtapa(): boolean {
        if (this._status === StatusEtapa.PENDENTE) {
            this._status = StatusEtapa.ANDAMENTO;
            console.log(`Etapa '${this._nome}' iniciada e em andamento.`);
            return true;
        }
        console.warn(`Erro: A etapa '${this._nome}' não pode ser iniciada. Status atual: ${this._status}`);
        return false;
    }


    public finalizarEtapa(): boolean {
        if (this._status === StatusEtapa.ANDAMENTO) {
            this._status = StatusEtapa.CONCLUIDA;
            console.log(`Etapa '${this._nome}' concluída.`);
            return true;
        }
        console.warn(`Erro: A etapa '${this._nome}' só pode ser finalizada se estiver em ANDAMENTO. Status atual: ${this._status}`);
        return false;
    }


    public associarFuncionario(funcionario: Funcionario): boolean {

        if (this._funcionarios.some(f => f.id === funcionario.id)) {
            console.warn(`Funcionário ID ${funcionario.id} já está associado à etapa.`);
            return false;
        }
        this._funcionarios.push(funcionario);
        console.log(`Funcionário ${funcionario.nome} associado à etapa '${this._nome}'.`);
        return true;
    }


    public listarFuncionarios(): string {
        if (this._funcionarios.length === 0) {
            return "Nenhum funcionário associado.";
        }
        return this._funcionarios.map(f => ` - ${f.nome} (ID: ${f.id}, Permissão: ${f.nivelPermissao})`).join('\n');
    }

    public detalhes(): string {
        return `
Etapa: ${this._nome}
Prazo: ${this._prazo}
Status: ${this._status}
Funcionários: ${this._funcionarios.length}`;
    }
    

    public get nome(): string { return this._nome; }
    public get status(): StatusEtapa { return this._status; }
    public get funcionarios(): Funcionario[] { return this._funcionarios; }


    public salvar(): void {
        console.log(`Dados da etapa ${this._nome} prontos para persistência.`);
    }
}