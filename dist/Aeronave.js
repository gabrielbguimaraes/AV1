import { StatusEtapa } from './enums.js';
export class Aeronave {
    constructor(codigo, modelo, tipo, capacidade, alcance) {
        this._codigo = codigo;
        this._modelo = modelo;
        this._tipo = tipo;
        this._capacidade = capacidade;
        this._alcance = alcance;
        this._pecas = [];
        this._etapas = [];
        this._testes = [];
    }
    adicionarPeca(peca) {
        this._pecas.push(peca);
        console.log(`Peça '${peca.nome}' adicionada à aeronave ${this._codigo}.`);
    }
    adicionarTeste(teste) {
        this._testes.push(teste);
        console.log(`Teste de ${teste.tipo} adicionado à aeronave ${this._codigo}.`);
    }
    adicionarEtapa(etapa) {
        this._etapas.push(etapa);
        console.log(`Etapa '${etapa.nome}' adicionada ao fluxo de produção.`);
    }
    iniciarEtapa(nomeEtapa) {
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
    finalizarEtapa(nomeEtapa) {
        const etapa = this._etapas.find(e => e.nome === nomeEtapa);
        if (etapa) {
            return etapa.finalizarEtapa();
        }
        console.warn(`Erro: Etapa '${nomeEtapa}' não encontrada para finalização.`);
        return false;
    }
    detalhes() {
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
    get codigo() { return this._codigo; }
    get modelo() { return this._modelo; }
    get pecas() { return this._pecas; }
    get etapas() { return this._etapas; }
    get testes() { return this._testes; }
}
//# sourceMappingURL=Aeronave.js.map