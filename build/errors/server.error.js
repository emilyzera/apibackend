"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = void 0;
class ServerError {
    static genericError(res, error) {
        return res.status(500).send({
            ok: false,
            messagem: error.toString(),
        });
    }
}
exports.ServerError = ServerError;
