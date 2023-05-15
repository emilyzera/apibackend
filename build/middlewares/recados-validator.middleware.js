"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recadosValidatorMiddleware = void 0;
const recados_database_1 = require("../database/recados.database");
const request_error_1 = require("../errors/request.error");
const server_error_1 = require("../errors/server.error");
const recado_model_1 = require("../models/recado.model");
class recadosValidatorMiddleware {
    static validatorMandatoryFields(req, res, next) {
        try {
            const { titulo, data, descrição } = req.body;
            if (!titulo) {
                return request_error_1.RequestError.FieldNotProvid(res, "titulo");
            }
            if (!data) {
                return request_error_1.RequestError.FieldNotProvid(res, "data");
            }
            if (!descrição) {
                return request_error_1.RequestError.FieldNotProvid(res, "descrição");
            }
            const recado = new recado_model_1.Recado(titulo, data, descrição);
            const database = new recados_database_1.recadosdatabase();
            database.create(recado);
            next();
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.recadosValidatorMiddleware = recadosValidatorMiddleware;
