import { AeronaveManager } from './AeronaveManager.js';
import { Aeronave } from './Aeronave.js';
import { Funcionario } from './Funcionario.js';
import { Peca } from './Peca.js';
import { Etapa } from './Etapa.js';
import { Teste } from './Teste.js';
import { Relatorio } from './Relatorio.js';
import { TipoAeronave, NivelPermissao, TipoPeca, TipoTeste, ResultadoTeste } from './enums.js';
const manager = new AeronaveManager();
const funcionarioAdmin = new Funcionario(1, 'Ozires Silva', '11988887777', 'Rua Principal, 100', 'admin', '123', NivelPermissao.ADMINISTRADOR);
const funcionarioEng = new Funcionario(2, 'Bartolomeu Gusmão', '11977776666', 'Rua do CTO, 50', 'eng', '456', NivelPermissao.ENGENHEIRO);
const FFUNCIONARIOS = [funcionarioAdmin, funcionarioEng];
function simularFluxoProducao() {
    console.log("\n==============================================");
    console.log("=== SIMULAÇÃO DE PRODUÇÃO: E-195-E2 ===");
    console.log("==============================================\n");
    const e195 = new Aeronave('E195E2-001', 'E-195-E2', TipoAeronave.COMERCIAL, 146, 4800);
    manager.adicionarAeronave(e195);
    const etapaFus = new Etapa('Montagem Fuselagem', '20 dias');
    const etapaAsas = new Etapa('Instalação das Asas', '15 dias');
    const etapaTestes = new Etapa('Testes Finais e Certificação', '10 dias');
    e195.adicionarEtapa(etapaFus);
    e195.adicionarEtapa(etapaAsas);
    e195.adicionarEtapa(etapaTestes);
    const pecaMotor = new Peca('Motor LEAP-1B', TipoPeca.IMPORTADA, 'GE Aviation');
    const pecaTremPouso = new Peca('Trem de Pouso Principal', TipoPeca.NACIONAL, 'Aero-Nac');
    e195.adicionarPeca(pecaMotor);
    e195.adicionarPeca(pecaTremPouso);
    console.log("\n--- Execução das Etapas ---");
    console.log("\n-> Iniciando 1ª Etapa (Montagem Fuselagem)");
    e195.iniciarEtapa('Montagem Fuselagem');
    etapaFus.associarFuncionario(funcionarioEng);
    etapaFus.associarFuncionario(funcionarioAdmin);
    etapaFus.listarFuncionarios();
    e195.finalizarEtapa('Montagem Fuselagem');
    console.log("\n-> Iniciando 2ª Etapa (Instalação das Asas)");
    e195.iniciarEtapa('Instalação das Asas');
    e195.finalizarEtapa('Instalação das Asas');
    console.log("\n-> Iniciando 3ª Etapa (Testes Finais)");
    e195.iniciarEtapa('Testes Finais e Certificação');
    const testeAero = new Teste(TipoTeste.AERODINAMICO, ResultadoTeste.APROVADO);
    const testeHidro = new Teste(TipoTeste.HIDRAULICO, ResultadoTeste.REPROVADO);
    e195.adicionarTeste(testeHidro);
    e195.finalizarEtapa('Testes Finais e Certificação');
    console.log("\n--- Relatório Final ---");
    const relatorio = new Relatorio(e195, 'Cliente Aviação Brasil', '2025-10-30');
    relatorio.salvarRelatorio();
    manager.salvarDados();
}
function main() {
    console.log("==============================================");
    console.log("       BEM-VINDO ao AEROCÓDE - CLI v1.0       ");
    console.log("==============================================");
    const usuarioCLI = 'admin';
    const senhaCLI = '123';
    const usuarioLogado = FFUNCIONARIOS.find(f => f.usuario === usuarioCLI);
    if (usuarioLogado && usuarioLogado.autenticar(usuarioCLI, senhaCLI)) {
        console.log(`\nAutenticação bem-sucedida! Usuário: ${usuarioLogado.nome} (Nível: ${usuarioLogado.nivelPermissao})\n`);
        if (usuarioLogado.nivelPermissao === NivelPermissao.ADMINISTRADOR) {
            simularFluxoProducao();
        }
        else {
            console.log(`Usuário ${usuarioLogado.nivelPermissao} logado, mas sem permissão para executar o fluxo de produção.`);
        }
    }
    else {
        console.error("Falha na autenticação. Verifique usuário e senha.");
    }
}
main();
//# sourceMappingURL=index.js.map