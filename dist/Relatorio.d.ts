import { Aeronave } from './Aeronave.js';
export declare class Relatorio {
    private _aeronave;
    private _cliente;
    private _dataEntrega;
    constructor(aeronave: Aeronave, cliente: string, dataEntrega: string);
    private gerarConteudo;
    salvarRelatorio(): string;
}
//# sourceMappingURL=Relatorio.d.ts.map