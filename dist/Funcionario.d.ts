import { NivelPermissao } from './enums.js';
export declare class Funcionario {
    private readonly _id;
    private _nome;
    private _telefone;
    private _endereco;
    private _usuario;
    private _senha;
    private _nivelPermissao;
    constructor(id: number, nome: string, telefone: string, endereco: string, usuario: string, senha: string, nivelPermissao: NivelPermissao);
    autenticar(usuario: string, senha: string): boolean;
    detalhes(): string;
    private toJSON;
    salvar(): void;
    get id(): number;
    get nome(): string;
    get nivelPermissao(): NivelPermissao;
    get usuario(): string;
}
//# sourceMappingURL=Funcionario.d.ts.map