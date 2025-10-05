import { writeFileSync, readFileSync } from 'node:fs';
import { Aeronave } from './Aeronave.js';
const ARQUIVO_DADOS = '../data/aeronaves.json';
export class AeronaveManager {
    constructor() {
        this.aeronaves = [];
        this.carregarDados();
    }
    toSerializableObject() {
        return this.aeronaves.map(aeronave => {
            return {
                codigo: aeronave.codigo,
                modelo: aeronave.modelo,
            };
        });
    }
    salvarDados() {
        try {
            const data = JSON.stringify(this.aeronaves, null, 2);
            writeFileSync(ARQUIVO_DADOS, data, 'utf-8');
            console.log(`\n[PERSISTÊNCIA] Dados de ${this.aeronaves.length} aeronaves salvos com sucesso.`);
        }
        catch (error) {
            console.error(`\n[PERSISTÊNCIA] Erro ao salvar dados: ${error}`);
        }
    }
    carregarDados() {
        try {
            const data = readFileSync(ARQUIVO_DADOS, 'utf-8');
            const dados = JSON.parse(data);
            this.aeronaves = dados.map((d) => new Aeronave(d.codigo, d.modelo, d.tipo, d.capacidade, d.alcance));
            console.log(`\n[PERSISTÊNCIA] ${this.aeronaves.length} aeronaves carregadas.`);
        }
        catch (error) {
            if (error.code === 'ENOENT') {
                console.log('\n[PERSISTÊNCIA] Arquivo de dados não encontrado. Iniciando com dados vazios.');
            }
            else {
                console.error(`\n[PERSISTÊNCIA] Erro ao carregar dados: ${error.message}`);
            }
        }
    }
    adicionarAeronave(aeronave) {
        if (this.aeronaves.some(a => a.codigo === aeronave.codigo)) {
            console.error(`Erro: Aeronave com código ${aeronave.codigo} já existe.`);
            return false;
        }
        this.aeronaves.push(aeronave);
        console.log(`Aeronave ${aeronave.codigo} cadastrada com sucesso.`);
        return true;
    }
    buscarAeronave(codigo) {
        return this.aeronaves.find(a => a.codigo === codigo);
    }
}
//# sourceMappingURL=AeronaveManager.js.map