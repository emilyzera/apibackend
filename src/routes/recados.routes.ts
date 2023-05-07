import {NextFunction, Request, Response, Router} from 'express'
import { recadoscontroller } from "../controllers/recado.controller";
import { recadosValidatorMiddleware } from '../middlewares/recados-validator.middleware';

export const recadoRoutes = () => {

    const app = Router();
    app.get("/", new recadoscontroller().listarrecados);
    app.get("/:id", new recadoscontroller().get )
    app.post("/create",
    [
    recadosValidatorMiddleware.validatorMandatoryFields
    ],
    new recadoscontroller().create)
    app.delete("/:id", new recadoscontroller().delete);
    app.put("/:id", new recadoscontroller().update)

    return app;
}

