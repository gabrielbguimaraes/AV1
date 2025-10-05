import { TipoPeca, StatusPeca } from './enums.js';
export declare class Peca {
    private _nome;
    private _tipo;
    private _fornecedor;
    private _status;
    constructor(nome: string, tipo: TipoPeca, fornecedor: string);
    atualizarStatus(novoStatus: StatusPeca): void;
    detalhes(): string;
    get nome(): string;
    get status(): StatusPeca;
}
//# sourceMappingURL=Peca.d.ts.map