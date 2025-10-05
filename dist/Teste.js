export class Teste {
    constructor(tipo, resultado) {
        this._tipo = tipo;
        this._resultado = resultado;
    }
    detalhes() {
        return `
Tipo de Teste: ${this._tipo}
Resultado: ${this._resultado}`;
    }
    get tipo() { return this._tipo; }
    get resultado() { return this._resultado; }
    salvar() {
        console.log(`Dados do teste ${this._tipo} prontos para persistência.`);
    }
}
//# sourceMappingURL=Teste.js.map