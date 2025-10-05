import { TipoAeronave } from './enums.js';
import { Peca } from './Peca.js';
import { Etapa } from './Etapa.js';
import { Teste } from './Teste.js';
export declare class Aeronave {
    private _codigo;
    private _modelo;
    private _tipo;
    private _capacidade;
    private _alcance;
    private _pecas;
    private _etapas;
    private _testes;
    constructor(codigo: string, modelo: string, tipo: TipoAeronave, capacidade: number, alcance: number);
    adicionarPeca(peca: Peca): void;
    adicionarTeste(teste: Teste): void;
    adicionarEtapa(etapa: Etapa): void;
    iniciarEtapa(nomeEtapa: string): boolean;
    finalizarEtapa(nomeEtapa: string): boolean;
    detalhes(): string;
    get codigo(): string;
    get modelo(): string;
    get pecas(): Peca[];
    get etapas(): Etapa[];
    get testes(): Teste[];
}
//# sourceMappingURL=Aeronave.d.ts.map