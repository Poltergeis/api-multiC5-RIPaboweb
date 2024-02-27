import { IPerro } from "./IPerro";

export class Perro implements IPerro{
    constructor(
        readonly nombre:string,
        readonly raza:string,
        readonly edad:number,
        readonly tamanio:string
    ){}
}