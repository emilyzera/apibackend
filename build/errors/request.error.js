"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestError = void 0;
class RequestError {
    static FieldNotProvid(res, field) {
        return res.status(400).send({
            ok: false,
            message: field + " não encontrado",
        });
    }
    static notFound(res, entity) {
        return res.status(404).send({
            ok: false,
            message: entity + " não encontrado",
        });
    }
}
exports.RequestError = RequestError;
