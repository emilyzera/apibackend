import {Request, Response} from "express"
import { recadosdatabase } from "../database/recados.database"
import { RequestError } from "../errors/request.error";
import { ServerError } from "../errors/server.error";
import { Recado } from "../models/recado.model";
import { SucessResponse } from "../util/sucess.response";

export class recadoscontroller {
public  listarrecados(req: Request, res: Response) {
        try{
            const { descrição } = req.query
            const database = new recadosdatabase();
            let recados = database.list();

            if(descrição) {
                recados = recados.filter(
                    ( recados ) => recados.descrição === descrição)
            }
            const result = recados.map(recado => recado.toJson())
            return SucessResponse.ok(res,"recado listados com sucesso", recados);
        }catch(error: any){
            return ServerError.genericError(res,error)
}   
}

public get(req: Request, res: Response){
    try{
        const { id } = req.params;
        const database = new recadosdatabase();
        const recado = database.get(id);
        if(!recado){
            return  RequestError.notFound(res, "recado")
        }
        return SucessResponse.ok(res,"recado obtido com sucesso", recado);
    }catch(error: any){
        return ServerError.genericError(res,error)
}   
}

public create(req: Request, res: Response) {
    try{
    const{ titulo, data, descrição} = req.body
    const recado = new Recado( titulo, data, descrição);
    const database = new recadosdatabase();
    database.create(recado);
        return SucessResponse.created(res, "recado criado com sucesso", recado)
    }catch (error: any){
        return ServerError.genericError(res,error)
    }
}

public delete(req: Request, res: Response){
    try{
        const { id } = req.params;
        const database = new recadosdatabase();
        const recadoIndex = database.getIndex(id);
        if(recadoIndex < 0) {
            return RequestError.notFound(res, "recado")
        }
        database.delete(recadoIndex);   
        return SucessResponse.ok(res,"recado deletado com sucesso", recadoIndex);
    }catch(error: any){
        return ServerError.genericError(res,error)
    }
}

public update(req: Request, res: Response){
    try{
        const { id } = req.params;
        const { titulo } = req.body;
        const database = new recadosdatabase();
        const recado = database.get(id);
        if (!recado) {
            return RequestError.notFound(res, "recado")
        }
        if (titulo) {
            recado.titulo = titulo;
        }
        return SucessResponse.ok(res,"recado atualizado com sucesso",titulo);
    }catch (error: any){
        return ServerError.genericError(res,error)
    }
}
}