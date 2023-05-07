import { recados} from "../database/recados";
import { Recado } from "../models/recado.model";

export class recadosdatabase{
    public list() {
        return[...recados];
    }

    public get(id: string) {
        return recados.find((recados) => recados.id === id);
    }

    public getIndex(id: string) {
        return recados.findIndex((recados) => recados.id === id);
    }

    public create( recado: Recado){
        recados.push(recado);
    }

    public delete(index: number){
        recados.splice(index, 1);
    }
}