export class Funcionario {
    constructor(id, nome, telefone, endereco, usuario, senha, nivelPermissao) {
        this._id = id;
        this._nome = nome;
        this._telefone = telefone;
        this._endereco = endereco;
        this._usuario = usuario;
        this._senha = senha;
        this._nivelPermissao = nivelPermissao;
    }
    autenticar(usuario, senha) {
        return this._usuario === usuario && this._senha === senha;
    }
    detalhes() {
        return `
ID: ${this._id}
Nome: ${this._nome}
Telefone: ${this._telefone}
Endereço: ${this._endereco}
Usuário: ${this._usuario}
Permissão: ${this._nivelPermissao}`;
    }
    toJSON() {
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
    salvar() {
        console.log(`Dados do funcionário ${this._nome} prontos para persistência.`);
    }
    get id() { return this._id; }
    get nome() { return this._nome; }
    get nivelPermissao() { return this._nivelPermissao; }
    get usuario() {
        return this._usuario;
    }
}
//# sourceMappingURL=Funcionario.js.map