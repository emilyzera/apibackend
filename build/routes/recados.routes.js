"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recadoRoutes = void 0;
const express_1 = require("express");
const recado_controller_1 = require("../controllers/recado.controller");
const recados_validator_middleware_1 = require("../middlewares/recados-validator.middleware");
const recadoRoutes = () => {
    const app = (0, express_1.Router)();
    app.get("/", new recado_controller_1.recadoscontroller().listarrecados);
    app.get("/:id", new recado_controller_1.recadoscontroller().get);
    app.post("/create", [
        recados_validator_middleware_1.recadosValidatorMiddleware.validatorMandatoryFields
    ], new recado_controller_1.recadoscontroller().create);
    app.delete("/:id", new recado_controller_1.recadoscontroller().delete);
    app.put("/:id", new recado_controller_1.recadoscontroller().update);
    return app;
};
exports.recadoRoutes = recadoRoutes;
