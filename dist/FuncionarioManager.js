import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'node:fs';
import { Funcionario } from './Funcionario.js';
import { NivelPermissao } from './enums.js';
const ARQUIVO_DADOS = './data/funcionarios.json';
export class FuncionarioManager {
    constructor() {
        this.funcionarios = [];
        this.carregarDados();
    }
    adicionarFuncionario(funcionario) {
        if (this.funcionarios.some(f => f.id === funcionario.id)) {
            console.error(`Erro: Funcionário com ID ${funcionario.id} já existe.`);
            return false;
        }
        this.funcionarios.push(funcionario);
        console.log(`Funcionário ${funcionario.nome} cadastrado.`);
        return true;
    }
    buscarFuncionario(usuario) {
        return this.funcionarios.find(f => f.usuario === usuario);
    }
    getTodosFuncionarios() {
        return this.funcionarios;
    }
    salvarDados() {
        try {
            const dir = './data';
            if (!existsSync(dir)) {
                mkdirSync(dir, { recursive: true });
            }
            const data = JSON.stringify(this.funcionarios.map(f => f.toJSON()), null, 2);
            writeFileSync(ARQUIVO_DADOS, data, 'utf-8');
            console.log(`\n[PERSISTÊNCIA] Dados de ${this.funcionarios.length} funcionários salvos com sucesso.`);
        }
        catch (error) {
            console.error(`\n[PERSISTÊNCIA] Erro ao salvar dados dos funcionários: ${error}`);
        }
    }
    carregarDados() {
        try {
            if (!existsSync(ARQUIVO_DADOS)) {
                console.log('\n[PERSISTÊNCIA] Arquivo de funcionários não encontrado. Iniciando com dados padrão.');
                this.carregarPadrao();
                this.salvarDados();
                return;
            }
            const data = readFileSync(ARQUIVO_DADOS, 'utf-8');
            const dados = JSON.parse(data);
            this.funcionarios = dados.map((d) => new Funcionario(d.id, d.nome, d.telefone, d.endereco, d.usuario, d.senha, d.nivelPermissao));
            console.log(`\n[PERSISTÊNCIA] ${this.funcionarios.length} funcionários carregados.`);
        }
        catch (error) {
            console.error(`\n[PERSISTÊNCIA] Erro ao carregar dados dos funcionários: ${error.message}`);
            this.carregarPadrao();
        }
    }
    carregarPadrao() {
        const funcionarioAdmin = new Funcionario(1, 'Ozires Silva', '11988887777', 'Rua Principal, 100', 'admin', '123', NivelPermissao.ADMINISTRADOR);
        const funcionarioEng = new Funcionario(2, 'Bartolomeu Gusmão', '11977776666', 'Rua do CTO, 50', 'eng', '456', NivelPermissao.ENGENHEIRO);
        this.funcionarios.push(funcionarioAdmin, funcionarioEng);
    }
}
//# sourceMappingURL=FuncionarioManager.js.map