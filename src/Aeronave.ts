import { TipoAeronave, StatusEtapa } from './enums.js';
import { Peca } from './Peca.js';
import { Etapa } from './Etapa.js';
import { Teste } from './Teste.js';

export class Aeronave {
    private _codigo: string;
    private _modelo: string;
    private _tipo: TipoAeronave;
    private _capacidade: number;
    private _alcance: number;
    private _pecas: Peca[];
    private _etapas: Etapa[];
    private _testes: Teste[];

    constructor(
        codigo: string, 
        modelo: string, 
        tipo: TipoAeronave, 
        capacidade: number, 
        alcance: number
    ) {
        this._codigo = codigo;
        this._modelo = modelo;
        this._tipo = tipo;
        this._capacidade = capacidade;
        this._alcance = alcance;
        this._pecas = [];
        this._etapas = [];
        this._testes = [];
    }



    public adicionarPeca(peca: Peca): void {
        this._pecas.push(peca);
        console.log(`Peça '${peca.nome}' adicionada à aeronave ${this._codigo}.`);
    }

    public adicionarTeste(teste: Teste): void {
        this._testes.push(teste);
        console.log(`Teste de ${teste.tipo} adicionado à aeronave ${this._codigo}.`);
    }

    public adicionarEtapa(etapa: Etapa): void {
        this._etapas.push(etapa);
        console.log(`Etapa '${etapa.nome}' adicionada ao fluxo de produção.`);
    }


    public iniciarEtapa(nomeEtapa: string): boolean {
        const index = this._etapas.findIndex(e => e.nome === nomeEtapa);
        if (index === -1) {
            console.warn(`Erro: Etapa '${nomeEtapa}' não encontrada.`);
            return false;
        }


        if (index > 0) {
            const etapaAnterior = this._etapas[index - 1];
            if (etapaAnterior.status !== StatusEtapa.CONCLUIDA) {
                console.error(`Erro: Etapa anterior ('${etapaAnterior.nome}') deve estar concluída antes de iniciar '${nomeEtapa}'.`);
                return false;
            }
        }
        

        return this._etapas[index].iniciarEtapa();
    }


    public finalizarEtapa(nomeEtapa: string): boolean {
        const etapa = this._etapas.find(e => e.nome === nomeEtapa);
        if (etapa) {
            return etapa.finalizarEtapa();
        }
        console.warn(`Erro: Etapa '${nomeEtapa}' não encontrada para finalização.`);
        return false;
    }



    public detalhes(): string {
        const pecasDet = this._pecas.map(p => p.detalhes()).join('\n---\n');
        const etapasDet = this._etapas.map(e => e.detalhes()).join('\n---\n');
        const testesDet = this._testes.map(t => t.detalhes()).join('\n---\n');

        return `
=============================================
DETALHES DA AERONAVE: ${this._codigo}
=============================================
Modelo: ${this._modelo}
Tipo: ${this._tipo}
Capacidade: ${this._capacidade} passageiros
Alcance: ${this._alcance} km

--- PECAS UTILIZADAS (${this._pecas.length}) ---
${pecasDet || 'Nenhuma peça cadastrada.'}

--- ETAPAS DE PRODUÇÃO (${this._etapas.length}) ---
${etapasDet || 'Nenhuma etapa cadastrada.'}

--- TESTES DE QUALIDADE (${this._testes.length}) ---
${testesDet || 'Nenhum teste registrado.'}
`;
    }

    public get codigo(): string { return this._codigo; }
    public get modelo(): string { return this._modelo; }
    public get pecas(): Peca[] { return this._pecas; }
    public get etapas(): Etapa[] { return this._etapas; }
    public get testes(): Teste[] { return this._testes; }
}