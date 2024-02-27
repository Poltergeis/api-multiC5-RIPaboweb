import { Perro } from "./Perro";

export interface PerroRepository{
    getByName(nombre:string):Promise<Perro | null>;
    postPerro(
        nombre:string,
        raza:string,
        edad:number,
        tamanio:string
    ):Promise<Perro | null>;
}