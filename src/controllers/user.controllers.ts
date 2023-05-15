import { Request, Response } from "express";
import { Users } from "../database/users";
import { RequestError } from "../errors/request.error";
import { ServerError } from "../errors/server.error";
import { Usuario } from "../models/usuario.model";
import { SucessResponse } from "../util/sucess.response";

export class usercontroller {
  public listaruser(req: Request, res: Response) {
    try {
      const usersData = [...Users];
      return SucessResponse.created(res, "recado criado com sucesso", Users);
    } catch (error: any) {
      return RequestError.FieldNotProvid(res, error);
    }
  }

  public create(req: Request, res: Response) {
    try {
      const { email, senha } = req.body;

      const usuario = new Usuario(email, senha);

      Users.push(usuario);

      return SucessResponse.created(res, "user criado com sucesso", Usuario);
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }

  public login(req: Request, res: Response) {
    try {
      const { email, senha } = req.body;
      const usersData = Users;
      const Usuario = usersData.find((Usuario) => Usuario.email === email);

      return SucessResponse.ok(res, "login feito com sucesso", {
        id: Usuario?.id,
      });
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }

  public getByEmail(email: string) {
    const usersData = [...Users];
    const emailExists = usersData.find((Usuario) => Usuario.email === email);
    return emailExists;
  }

  public get(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const usersData = [...Users];
      const Usuario = usersData.find((Usuario) => Usuario.id === id);
      if (Usuario) {
        return res.status(200).send({
          ok: true,
          message: "usuario encontrado",
        });
      }
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }
}

/*const usuariovalidMiddleware = (req: Request, res: Response, next: NextFunction) => {
   try{
    const {usuario} = req.body;
    if(!usuario){
        return res.status(400).send({
            ok:false,
            message: "usuario não encontrado"
        })
    }
    console.log(usuario);
    next();

   } catch (error: any) {
    return res.status(500).send({
        ok:false,
        messagem: error.toString(),
    });
   }
};
   */
