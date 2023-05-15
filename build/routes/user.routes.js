"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouters = void 0;
const user_controllers_1 = require("../controllers/user.controllers");
const usuario_validator_middleware_1 = require("../middlewares/usuario.validator.middleware");
const express_1 = require("express");
const userRouters = () => {
    const app = (0, express_1.Router)();
    app.post("/create", [
        usuario_validator_middleware_1.Usuariovalidator.ValidateRegister
    ], new user_controllers_1.usercontroller().create); //criar
    app.post("/login", usuario_validator_middleware_1.Usuariovalidator.ValidateRegister, new user_controllers_1.usercontroller().login); //validar se existe
    app.get("/", new user_controllers_1.usercontroller().listaruser); //listar recados
    return app;
};
exports.userRouters = userRouters;
