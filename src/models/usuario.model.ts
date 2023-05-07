import { v4 as createUuid } from "uuid";

export class Usuario {

    private _id: string;
    static toJson: any;

    constructor(
        private _email:string,
        private _senha: string,
        ) {
            this._id = createUuid();
        } 
        //consulta
        public get email(){
            return this._email
        }
        public set titulo(titulo: string) {
            this._email = this.email;
        }
        public get senha(){
            return this._senha
        }
        public get id(){
            return this._id;
        }
        public toJson(){
            return {
                id: this._id,
                email: this._email,
                senha: this._senha,
            }
        }
    }