import { usercontroller } from "../controllers/user.controllers";
import { Usuariovalidator } from "../middlewares/usuario.validator.middleware";
import {NextFunction, Request, Response, Router} from 'express'

    export const userRouters = () => {
        
        const app = Router();
        app.post("/create",
    [
        Usuariovalidator.ValidateRegister
    ],
    new usercontroller().create); //criar
    app.post("/login",
    Usuariovalidator.ValidateRegister,
    new usercontroller().login); //validar se existe
    
    app.get("/", new usercontroller().listaruser); //listar recados

        return app;
    }

