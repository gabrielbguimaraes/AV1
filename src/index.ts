import * as readline from 'readline';
import { AeronaveManager } from './AeronaveManager.js';
import { FuncionarioManager } from './FuncionarioManager.js';
import { Aeronave } from './Aeronave.js';
import { TipoAeronave } from './enums.js';


const aeronaveManager = new AeronaveManager();
const funcionarioManager = new FuncionarioManager();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function perguntar(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
}


async function criarNovaAeronave() {
    console.log("\n--- Cadastro de Nova Aeronave ---");
    const codigo = await perguntar("Digite o código único da aeronave: ");
    const modelo = await perguntar("Digite o modelo: ");
    
    let tipoStr = "";
    let tipoAeronave: TipoAeronave;
    while (tipoStr.toUpperCase() !== 'COMERCIAL' && tipoStr.toUpperCase() !== 'MILITAR') {
        tipoStr = await perguntar("Digite o tipo (COMERCIAL ou MILITAR): ");
    }
    tipoAeronave = tipoStr.toUpperCase() as TipoAeronave;

    const capacidade = parseInt(await perguntar("Digite a capacidade de passageiros: "), 10);
    const alcance = parseInt(await perguntar("Digite o alcance (km): "), 10);

    if (isNaN(capacidade) || isNaN(alcance)) {
        console.log("Capacidade e alcance devem ser números. Operação cancelada.");
        menuPrincipal();
        return;
    }

    const novaAeronave = new Aeronave(codigo, modelo, tipoAeronave, capacidade, alcance);
    if (aeronaveManager.adicionarAeronave(novaAeronave)) {
        console.log(`\nAeronave '${modelo}' com código '${codigo}' cadastrada com sucesso!`);
    }

    menuPrincipal();
}

async function verDetalhesAeronave() {
    console.log("\n--- Detalhes da Aeronave ---");
    const codigo = await perguntar("Digite o código da aeronave que deseja ver: ");
    const aeronave = aeronaveManager.buscarAeronave(codigo);

    if (aeronave) {
        console.log(aeronave.detalhes());
    } else {
        console.log(`\nAeronave com código '${codigo}' não encontrada.`);
    }

    menuPrincipal();
}

function sair() {
    console.log("\nSalvando todos os dados...");
    aeronaveManager.salvarDados();
    funcionarioManager.salvarDados();
    console.log("Dados salvos. Adeus!");
    rl.close();
}

// --- MENU PRINCIPAL ---

function menuPrincipal() {
    console.log("\n===== AEROCODE CLI - MENU PRINCIPAL =====");
    console.log("1. Criar Nova Aeronave");
    console.log("2. Ver Detalhes de Aeronave");
    console.log("3. Sair");

    rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao) {
            case '1':
                criarNovaAeronave();
                break;
            case '2':
                verDetalhesAeronave();
                break;
            case '3':
                sair();
                break;
            default:
                console.log("Opção inválida, tente novamente.");
                menuPrincipal();
                break;
        }
    });
}

function main() {

    console.log("==============================================");
    console.log("       BEM-VINDO ao AEROCÓDE - CLI v1.0       ");
    console.log("==============================================");
    menuPrincipal();
}

main();