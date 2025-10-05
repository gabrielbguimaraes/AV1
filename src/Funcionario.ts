// src/Funcionario.ts

import { NivelPermissao } from './enums.js';
import * as fs from 'fs';

export class Funcionario {
    private readonly _id: number;
    private _nome: string;
    private _telefone: string;
    private _endereco: string;
    private _usuario: string;
    private _senha: string;
    private _nivelPermissao: NivelPermissao;

    constructor(
        id: number,
        nome: string,
        telefone: string,
        endereco: string,
        usuario: string,
        senha: string,
        nivelPermissao: NivelPermissao
    ) {
        this._id = id;
        this._nome = nome;
        this._telefone = telefone;
        this._endereco = endereco;
        this._usuario = usuario;
        this._senha = senha;
        this._nivelPermissao = nivelPermissao;
    }

    public autenticar(usuario: string, senha: string): boolean {
        return this._usuario === usuario && this._senha === senha;
    }

    public detalhes(): string {
        return `
ID: ${this._id}
Nome: ${this._nome}
Telefone: ${this._telefone}
Endereço: ${this._endereco}
Usuário: ${this._usuario}
Permissão: ${this._nivelPermissao}`;
    }

    public toJSON() {
        return {
            id: this._id,
            nome: this._nome,
            telefone: this._telefone,
            endereco: this._endereco,
            usuario: this._usuario,
            senha: this._senha,
            nivelPermissao: this._nivelPermissao
        };
    }
    
    public salvar(): void {
        console.log(`Dados do funcionário ${this._nome} prontos para persistência.`);
    }

    public get id(): number { return this._id; }
    public get nome(): string { return this._nome; }
    public get nivelPermissao(): NivelPermissao { return this._nivelPermissao; }
    public get usuario(): string {
        return this._usuario;
    }
}
