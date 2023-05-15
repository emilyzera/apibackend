"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recadoscontroller = void 0;
const recados_database_1 = require("../database/recados.database");
const request_error_1 = require("../errors/request.error");
const server_error_1 = require("../errors/server.error");
const recado_model_1 = require("../models/recado.model");
const sucess_response_1 = require("../util/sucess.response");
class recadoscontroller {
    listarrecados(req, res) {
        try {
            const { descrição } = req.query;
            const database = new recados_database_1.recadosdatabase();
            let recados = database.list();
            if (descrição) {
                recados = recados.filter((recados) => recados.descrição === descrição);
            }
            const result = recados.map(recado => recado.toJson());
            return sucess_response_1.SucessResponse.ok(res, "recado listados com sucesso", recados);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    get(req, res) {
        try {
            const { id } = req.params;
            const database = new recados_database_1.recadosdatabase();
            const recado = database.get(id);
            if (!recado) {
                return request_error_1.RequestError.notFound(res, "recado");
            }
            return sucess_response_1.SucessResponse.ok(res, "recado obtido com sucesso", recado);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    create(req, res) {
        try {
            const { titulo, data, descrição } = req.body;
            const recado = new recado_model_1.Recado(titulo, data, descrição);
            const database = new recados_database_1.recadosdatabase();
            database.create(recado);
            return sucess_response_1.SucessResponse.created(res, "recado criado com sucesso", recado);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    delete(req, res) {
        try {
            const { id } = req.params;
            const database = new recados_database_1.recadosdatabase();
            const recadoIndex = database.getIndex(id);
            if (recadoIndex < 0) {
                return request_error_1.RequestError.notFound(res, "recado");
            }
            database.delete(recadoIndex);
            return sucess_response_1.SucessResponse.ok(res, "recado deletado com sucesso", recadoIndex);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    update(req, res) {
        try {
            const { id } = req.params;
            const { titulo } = req.body;
            const database = new recados_database_1.recadosdatabase();
            const recado = database.get(id);
            if (!recado) {
                return request_error_1.RequestError.notFound(res, "recado");
            }
            if (titulo) {
                recado.titulo = titulo;
            }
            return sucess_response_1.SucessResponse.ok(res, "recado atualizado com sucesso", titulo);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.recadoscontroller = recadoscontroller;
