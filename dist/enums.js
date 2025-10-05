// Caminho: src/enums.ts
export var TipoAeronave;
(function (TipoAeronave) {
    TipoAeronave["COMERCIAL"] = "COMERCIAL";
    TipoAeronave["MILITAR"] = "MILITAR";
})(TipoAeronave || (TipoAeronave = {}));
export var TipoPeca;
(function (TipoPeca) {
    TipoPeca["NACIONAL"] = "NACIONAL";
    TipoPeca["IMPORTADA"] = "IMPORTADA";
})(TipoPeca || (TipoPeca = {}));
export var StatusPeca;
(function (StatusPeca) {
    StatusPeca["EM_PRODUCAO"] = "EM_PRODUCAO";
    StatusPeca["EM_TRANSPORTE"] = "EM_TRANSPORTE";
    StatusPeca["PRONTA"] = "PRONTA";
})(StatusPeca || (StatusPeca = {}));
export var StatusEtapa;
(function (StatusEtapa) {
    StatusEtapa["PENDENTE"] = "PENDENTE";
    StatusEtapa["ANDAMENTO"] = "EM_ANDAMENTO";
    StatusEtapa["CONCLUIDA"] = "CONCLUIDA";
})(StatusEtapa || (StatusEtapa = {}));
export var NivelPermissao;
(function (NivelPermissao) {
    NivelPermissao["ADMINISTRADOR"] = "ADMINISTRADOR";
    NivelPermissao["ENGENHEIRO"] = "ENGENHEIRO";
    NivelPermissao["OPERADOR"] = "OPERADOR";
})(NivelPermissao || (NivelPermissao = {}));
export var TipoTeste;
(function (TipoTeste) {
    TipoTeste["ELETRICO"] = "ELETRICO";
    TipoTeste["HIDRAULICO"] = "HIDRAULICO";
    TipoTeste["AERODINAMICO"] = "AERODINAMICO";
})(TipoTeste || (TipoTeste = {}));
export var ResultadoTeste;
(function (ResultadoTeste) {
    ResultadoTeste["APROVADO"] = "APROVADO";
    ResultadoTeste["REPROVADO"] = "REPROVADO";
})(ResultadoTeste || (ResultadoTeste = {}));
//# sourceMappingURL=enums.js.map