"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recado = void 0;
const uuid_1 = require("uuid");
class Recado {
    constructor(_titulo, _data, _descrição) {
        this._titulo = _titulo;
        this._data = _data;
        this._descrição = _descrição;
        this._id = (0, uuid_1.v4)();
    }
    //consulta
    get titulo() {
        return this._titulo;
    }
    set titulo(titulo) {
        this._titulo = titulo;
    }
    get descrição() {
        return this._descrição;
    }
    get id() {
        return this._id;
    }
    toJson() {
        return {
            id: this._id,
            tutulo: this._titulo,
            data: this._data,
            descrição: this._descrição,
        };
    }
}
exports.Recado = Recado;
