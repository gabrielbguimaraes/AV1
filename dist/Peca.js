import { StatusPeca } from './enums.js';
export class Peca {
    constructor(nome, tipo, fornecedor) {
        this._nome = nome;
        this._tipo = tipo;
        this._fornecedor = fornecedor;
        this._status = StatusPeca.EM_PRODUCAO;
    }
    atualizarStatus(novoStatus) {
        this._status = novoStatus;
        console.log(`Status da peça ${this._nome} atualizado para: ${novoStatus}`);
    }
    detalhes() {
        return `
Nome: ${this._nome}
Tipo: ${this._tipo}
Fornecedor: ${this._fornecedor}
Status: ${this._status}`;
    }
    get nome() { return this._nome; }
    get status() { return this._status; }
}
//# sourceMappingURL=Peca.js.map