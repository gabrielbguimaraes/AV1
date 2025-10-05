import * as fs from 'fs';
import { Aeronave } from './Aeronave.js';
import { Funcionario } from './Funcionario.js'; 
import { Etapa } from './Etapa.js';
import { Peca } from './Peca.js';
import { Teste } from './Teste.js';
import { NivelPermissao, TipoAeronave } from './enums.js';

const ARQUIVO_DADOS = 'data/aeronaves.json';

export class AeronaveManager {
    private aeronaves: Aeronave[] = [];

    constructor() {
        this.carregarDados();
    }


    private toSerializableObject(): any {
        return this.aeronaves.map(aeronave => {
            return {
                codigo: aeronave.codigo,
                modelo: aeronave.modelo,
            };
        });
    }

    public salvarDados(): void {
        try {
            const data = JSON.stringify(this.aeronaves, null, 2);
            fs.writeFileSync(ARQUIVO_DADOS, data, 'utf-8');
            console.log(`\n[PERSISTÊNCIA] Dados de ${this.aeronaves.length} aeronaves salvos com sucesso.`);
        } catch (error) {
            console.error(`\n[PERSISTÊNCIA] Erro ao salvar dados: ${error}`);
        }
    }

    public carregarDados(): void {
        try {
            const data = fs.readFileSync(ARQUIVO_DADOS, 'utf-8');
            const dados = JSON.parse(data);
            
            this.aeronaves = dados.map((d: any) => new Aeronave(d.codigo, d.modelo, d.tipo, d.capacidade, d.alcance));

            console.log(`\n[PERSISTÊNCIA] ${this.aeronaves.length} aeronaves carregadas.`);
        } catch (error: any) {
            if (error.code === 'ENOENT') {
                console.log('\n[PERSISTÊNCIA] Arquivo de dados não encontrado. Iniciando com dados vazios.');
            } else {
                console.error(`\n[PERSISTÊNCIA] Erro ao carregar dados: ${error.message}`);
            }
        }
    }


    public adicionarAeronave(aeronave: Aeronave): boolean {
        if (this.aeronaves.some(a => a.codigo === aeronave.codigo)) {
            console.error(`Erro: Aeronave com código ${aeronave.codigo} já existe.`);
            return false;
        }
        this.aeronaves.push(aeronave);
        console.log(`Aeronave ${aeronave.codigo} cadastrada com sucesso.`);
        return true;
    }

    public buscarAeronave(codigo: string): Aeronave | undefined {
        return this.aeronaves.find(a => a.codigo === codigo);
    }
}