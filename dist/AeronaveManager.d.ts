import { Aeronave } from './Aeronave.js';
export declare class AeronaveManager {
    private aeronaves;
    constructor();
    private toSerializableObject;
    salvarDados(): void;
    carregarDados(): void;
    adicionarAeronave(aeronave: Aeronave): boolean;
    buscarAeronave(codigo: string): Aeronave | undefined;
}
//# sourceMappingURL=AeronaveManager.d.ts.map