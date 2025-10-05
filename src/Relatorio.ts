import * as fs from 'fs';
import { Aeronave } from './Aeronave.js';
import { ResultadoTeste, StatusEtapa } from './enums.js'; 

export class Relatorio {
    private _aeronave: Aeronave;
    private _cliente: string;
    private _dataEntrega: string;

    constructor(aeronave: Aeronave, cliente: string, dataEntrega: string) {
        this._aeronave = aeronave;
        this._cliente = cliente;
        this._dataEntrega = dataEntrega;
    }

    private gerarConteudo(): string {
        const codigo = this._aeronave.codigo;

        let conteudo = `
===================================================
RELATÓRIO FINAL DE ENTREGA - AERONAVE ${codigo}
===================================================
Cliente: ${this._cliente}
Data de Entrega: ${this._dataEntrega}

${this._aeronave.detalhes()}

===================================================
STATUS GERAL DA PRODUÇÃO
===================================================
`;

        const testesAprovados = this._aeronave.testes.filter(t => t.resultado === ResultadoTeste.APROVADO).length;
        const totalTestes = this._aeronave.testes.length;

        conteudo += `
Testes Realizados: ${totalTestes}
Testes Aprovados: ${testesAprovados}
Status da Qualidade: ${testesAprovados === totalTestes && totalTestes > 0 ? 'PRONTO PARA ENTREGA' : 'PENDENTE/FALHAS'}
`;

        const etapasConcluidas = this._aeronave.etapas.every(e => e.status === StatusEtapa.CONCLUIDA);
        conteudo += `
Etapas de Produção Concluídas: ${etapasConcluidas ? 'SIM' : 'NÃO'}\n`;
        
        return conteudo;
    }

    public salvarRelatorio(): string {
        const conteudo = this.gerarConteudo();
        const nomeArquivo = `data/relatorio_${this._aeronave.codigo}_${Date.now()}.txt`;
        
        try {
            fs.writeFileSync(nomeArquivo, conteudo, 'utf-8');
            console.log(`Relatório salvo com sucesso em: ${nomeArquivo}`);
            return nomeArquivo;
        } catch (error) {
            console.error(`Erro ao salvar o relatório em arquivo: ${error}`);
            return '';
        }
    }
}