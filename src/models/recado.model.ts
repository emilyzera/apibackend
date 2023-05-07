import { v4 as createUuid } from "uuid";

export class Recado {
    private _id: string;

    constructor(
        private _titulo:string,
        private _data: number,
        private _descrição: string,
        ) {
            this._id = createUuid();
        } 
        //consulta
        public get titulo(){
            return this._titulo
        }
        public set titulo(titulo: string) {
            this._titulo = titulo;
        }
        public get descrição(){
            return this._descrição
        }
        public get id(){
            return this._id;
        }
        public toJson(){
            return {
                id: this._id,
                tutulo: this._titulo,
                data: this._data,
                descrição: this._descrição,
            }
        }
    }