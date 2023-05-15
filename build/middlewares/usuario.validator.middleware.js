"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuariovalidator = void 0;
const user_controllers_1 = require("../controllers/user.controllers");
const request_error_1 = require("../errors/request.error");
const server_error_1 = require("../errors/server.error");
class Usuariovalidator {
    static ValidateRegister(req, res, next) {
        try {
            const { email, senha, reSenha } = req.body;
            const emailExists = new user_controllers_1.usercontroller().getByEmail(email);
            if (!email) {
                return request_error_1.RequestError.FieldNotProvid(res, "email");
            }
            if (!senha) {
                return request_error_1.RequestError.FieldNotProvid(res, "senha");
            }
            if (!reSenha) {
                return request_error_1.RequestError.FieldNotProvid(res, "reSenha");
            }
            if (reSenha != senha) {
                return server_error_1.ServerError.genericError(res, Error);
            }
            if (emailExists) {
                return server_error_1.ServerError.genericError(res, Error);
            }
            next();
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.Usuariovalidator = Usuariovalidator;
