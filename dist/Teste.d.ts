import { TipoTeste, ResultadoTeste } from './enums.js';
export declare class Teste {
    private _tipo;
    private _resultado;
    constructor(tipo: TipoTeste, resultado: ResultadoTeste);
    detalhes(): string;
    get tipo(): TipoTeste;
    get resultado(): ResultadoTeste;
    salvar(): void;
}
//# sourceMappingURL=Teste.d.ts.map