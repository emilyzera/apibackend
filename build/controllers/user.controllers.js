"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usercontroller = void 0;
const request_error_1 = require("../errors/request.error");
const server_error_1 = require("../errors/server.error");
const sucess_response_1 = require("../util/sucess.response");
const users_1 = require("../database/users");
const usuario_model_1 = require("../models/usuario.model");
class usercontroller {
    listaruser(req, res) {
        try {
            const usersData = [...users_1.Users];
            return sucess_response_1.SucessResponse.created(res, "recado criado com sucesso", users_1.Users);
        }
        catch (error) {
            return request_error_1.RequestError.FieldNotProvid(res, error);
        }
    }
    create(req, res) {
        try {
            const { email, senha } = req.body;
            const usuario = new usuario_model_1.Usuario(email, senha);
            users_1.Users.push(usuario);
            return sucess_response_1.SucessResponse.created(res, "user criado com sucesso", usuario_model_1.Usuario);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    login(req, res) {
        try {
            const { email, senha } = req.body;
            const usersData = users_1.Users;
            const Usuario = usersData.find((Usuario) => Usuario.email === email);
            return sucess_response_1.SucessResponse.ok(res, "login feito com sucesso", {
                id: Usuario?.id,
            });
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    getByEmail(email) {
        const usersData = [...users_1.Users];
        const emailExists = usersData.find((Usuario) => Usuario.email === email);
        return emailExists;
    }
    get(req, res) {
        try {
            const { id } = req.params;
            const usersData = [...users_1.Users];
            const Usuario = usersData.find((Usuario) => Usuario.id === id);
            if (Usuario) {
                return res.status(200).send({
                    ok: true,
                    message: "usuario encontrado",
                });
            }
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.usercontroller = usercontroller;
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
