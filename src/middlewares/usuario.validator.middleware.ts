import { Request, Response, NextFunction } from "express";
import { usercontroller } from "../controllers/user.controllers";
import { RequestError } from "../errors/request.error";
import { ServerError } from "../errors/server.error";

export class Usuariovalidator {
    public static ValidateRegister(req: Request,res: Response,next: NextFunction) {
                try {
                  const { email, senha, reSenha } = req.body;
                  const emailExists = new usercontroller().getByEmail(email);

                  if (!email) {
                    return  RequestError.FieldNotProvid(res, "email")
                  }
                  if (!senha) {
                    return  RequestError.FieldNotProvid(res, "senha")
                  }
            
                  if (!reSenha) {
                    return RequestError.FieldNotProvid(res, "reSenha");
                  }
            
                  if (reSenha != senha) {
                    return ServerError.genericError(res,Error)
                    
                  }
            
                  if (emailExists) {
                    return ServerError.genericError(res,Error)
                  }
                  
                  next();
            
        }catch (error: any) {
            return ServerError.genericError(res,error)
        }
    }
    
}

