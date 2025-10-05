import { Funcionario } from './Funcionario.js';
export declare class FuncionarioManager {
    private funcionarios;
    constructor();
    adicionarFuncionario(funcionario: Funcionario): boolean;
    buscarFuncionario(usuario: string): Funcionario | undefined;
    getTodosFuncionarios(): Funcionario[];
    salvarDados(): void;
    carregarDados(): void;
    private carregarPadrao;
}
//# sourceMappingURL=FuncionarioManager.d.ts.map