"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const uuid_1 = require("uuid");
class Usuario {
    constructor(_email, _senha) {
        this._email = _email;
        this._senha = _senha;
        this._id = (0, uuid_1.v4)();
    }
    //consulta
    get email() {
        return this._email;
    }
    set titulo(titulo) {
        this._email = this.email;
    }
    get senha() {
        return this._senha;
    }
    get id() {
        return this._id;
    }
    toJson() {
        return {
            id: this._id,
            email: this._email,
            senha: this._senha,
        };
    }
}
exports.Usuario = Usuario;
