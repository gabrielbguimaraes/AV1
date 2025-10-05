import { TipoTeste, ResultadoTeste } from './enums.js';

export class Teste {
    private _tipo: TipoTeste;
    private _resultado: ResultadoTeste;

    constructor(tipo: TipoTeste, resultado: ResultadoTeste) {
        this._tipo = tipo;
        this._resultado = resultado;
    }

    public detalhes(): string {
        return `
Tipo de Teste: ${this._tipo}
Resultado: ${this._resultado}`;
    }


    public get tipo(): TipoTeste { return this._tipo; }
    public get resultado(): ResultadoTeste { return this._resultado; }
    

    public salvar(): void {
        console.log(`Dados do teste ${this._tipo} prontos para persistência.`);
    }
}