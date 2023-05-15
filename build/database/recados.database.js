"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recadosdatabase = void 0;
const recados_1 = require("../database/recados");
class recadosdatabase {
    list() {
        return [...recados_1.recados];
    }
    get(id) {
        return recados_1.recados.find((recados) => recados.id === id);
    }
    getIndex(id) {
        return recados_1.recados.findIndex((recados) => recados.id === id);
    }
    create(recado) {
        recados_1.recados.push(recado);
    }
    delete(index) {
        recados_1.recados.splice(index, 1);
    }
}
exports.recadosdatabase = recadosdatabase;
