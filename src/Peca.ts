

import { TipoPeca, StatusPeca } from './enums.js';

export class Peca {
    private _nome: string;
    private _tipo: TipoPeca;
    private _fornecedor: string;
    private _status: StatusPeca;

    constructor(nome: string, tipo: TipoPeca, fornecedor: string) {
        this._nome = nome;
        this._tipo = tipo;
        this._fornecedor = fornecedor;
        this._status = StatusPeca.EM_PRODUCAO;
    }


    public atualizarStatus(novoStatus: StatusPeca): void {
        this._status = novoStatus;
        console.log(`Status da peça ${this._nome} atualizado para: ${novoStatus}`);
    }


    public detalhes(): string {
        return `
Nome: ${this._nome}
Tipo: ${this._tipo}
Fornecedor: ${this._fornecedor}
Status: ${this._status}`;
    }

    public get nome(): string { return this._nome; }
    public get status(): StatusPeca { return this._status; }
}