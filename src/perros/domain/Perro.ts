import { IPerro } from "./IPerro";

export class Perro{
    constructor(
        readonly nombre:string,
        readonly raza:string,
        readonly edad:number,
        readonly tamanio:string
    ){}
}