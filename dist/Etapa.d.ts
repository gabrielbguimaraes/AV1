import { StatusEtapa } from './enums.js';
import { Funcionario } from './Funcionario.js';
export declare class Etapa {
    private _nome;
    private _prazo;
    private _status;
    private _funcionarios;
    constructor(nome: string, prazo: string);
    iniciarEtapa(): boolean;
    finalizarEtapa(): boolean;
    associarFuncionario(funcionario: Funcionario): boolean;
    listarFuncionarios(): string;
    detalhes(): string;
    get nome(): string;
    get status(): StatusEtapa;
    get funcionarios(): Funcionario[];
    salvar(): void;
}
//# sourceMappingURL=Etapa.d.ts.map