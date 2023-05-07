import { Request, Response, NextFunction } from "express";
import { recadosdatabase } from "../database/recados.database";
import { RequestError } from "../errors/request.error";
import { ServerError } from "../errors/server.error";
import { Recado } from "../models/recado.model";

export class recadosValidatorMiddleware{
    public static validatorMandatoryFields(req: Request, res:Response, next:NextFunction){
        try{
            const{ titulo, data, descrição} = req.body

            if(!titulo){
                return RequestError.FieldNotProvid(res, "titulo")
        }
            if(!data){
                return RequestError.FieldNotProvid(res, "data")
        }
            if(!descrição){
                return RequestError.FieldNotProvid(res, "descrição")
        }

        const recado = new Recado( titulo, data, descrição);
        const database = new recadosdatabase();
        database.create(recado);

    next();
        } catch (error: any) {
            return ServerError.genericError(res,error)
        }
    }
}