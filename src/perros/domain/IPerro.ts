import { Document } from "mongoose"

export interface IPerro extends Document{
    nombre:string,
    raza:string,
    edad:number,
    tamanio:string
}