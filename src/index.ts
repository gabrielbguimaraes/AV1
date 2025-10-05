import { AeronaveManager } from './AeronaveManager.js';
import { Aeronave } from './Aeronave.js';
import { Funcionario } from './Funcionario.js';
import { Peca } from './Peca.js';
import { Etapa } from './Etapa.js';
import { Teste } from './Teste.js';
import { Relatorio } from './Relatorio.js';
import { TipoAeronave, NivelPermissao, TipoPeca, StatusPeca, TipoTeste, ResultadoTeste } from './enums.js';
import { FuncionarioManager } from './FuncionarioManager.js';

const aeronaveManager = new AeronaveManager();
const funcionarioManager = new FuncionarioManager();

function simularFluxoProducao(usuarioLogado: Funcionario) {
    console.log("\n==============================================");
    console.log("=== SIMULAÇÃO DE PRODUÇÃO: E-195-E2 ===");
    console.log("==============================================\n");

    const e195 = new Aeronave(
        'E195E2-001',
        'E-195-E2',
        TipoAeronave.COMERCIAL,
        146,
        4800
    );
    aeronaveManager.adicionarAeronave(e195);

    const etapaFus = new Etapa('Montagem Fuselagem', '20 dias');
    const etapaAsas = new Etapa('Instalação das Asas', '15 dias');
    const etapaTestes = new Etapa('Testes Finais e Certificação', '10 dias');

    e195.adicionarEtapa(etapaFus);
    e195.adicionarEtapa(etapaAsas);
    e195.adicionarEtapa(etapaTestes);
    
    const todosFuncionarios = funcionarioManager.getTodosFuncionarios();
    const funcionarioEng = todosFuncionarios.find(f => f.nivelPermissao === NivelPermissao.ENGENHEIRO);
    const funcionarioAdmin = todosFuncionarios.find(f => f.nivelPermissao === NivelPermissao.ADMINISTRADOR);

    const pecaMotor = new Peca('Motor LEAP-1B', TipoPeca.IMPORTADA, 'GE Aviation');
    const pecaTremPouso = new Peca('Trem de Pouso Principal', TipoPeca.NACIONAL, 'Aero-Nac');
    e195.adicionarPeca(pecaMotor);
    e195.adicionarPeca(pecaTremPouso);

    console.log("\n--- Execução das Etapas ---");

    console.log("\n-> Iniciando 1ª Etapa (Montagem Fuselagem)");
    if (usuarioLogado.nivelPermissao === NivelPermissao.ADMINISTRADOR || usuarioLogado.nivelPermissao === NivelPermissao.ENGENHEIRO) {
        e195.iniciarEtapa('Montagem Fuselagem');
        if(funcionarioEng) etapaFus.associarFuncionario(funcionarioEng);
        if(funcionarioAdmin) etapaFus.associarFuncionario(funcionarioAdmin);
        etapaFus.listarFuncionarios();
        e195.finalizarEtapa('Montagem Fuselagem');
    } else {
        console.log("Permissão negada para gerenciar etapas.");
    }

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
}

function main() {
    console.log("==============================================");
    console.log("       BEM-VINDO ao AEROCÓDE - CLI v1.0       ");
    console.log("==============================================");
    
    const usuarioCLI = 'admin';
    const senhaCLI = '123';

    const usuarioLogado = funcionarioManager.buscarFuncionario(usuarioCLI);
    
    if (usuarioLogado && usuarioLogado.autenticar(usuarioCLI, senhaCLI)) {
        console.log(`\nAutenticação bem-sucedida! Usuário: ${usuarioLogado.nome} (Nível: ${usuarioLogado.nivelPermissao})\n`);
        
        if (usuarioLogado.nivelPermissao === NivelPermissao.ADMINISTRADOR) {
            simularFluxoProducao(usuarioLogado);
        } else {
            console.log(`Usuário ${usuarioLogado.nivelPermissao} logado, mas sem permissão para executar o fluxo de produção.`);
        }
        
    } else {
        console.error("Falha na autenticação. Verifique usuário e senha.");
    }

    funcionarioManager.salvarDados();
    aeronaveManager.salvarDados();
}

main();