import { Perro } from "../domain/Perro";
import { PerroRepository } from "../domain/PerroRepository";
import { PerroModel } from "./models/PerroModel";
import { IPerro } from "../domain/IPerro";

export class MongoPerroRepository implements PerroRepository{
    async postPerro(nombre: string, raza: string, edad: number, tamanio: string): Promise<Perro | null> {
        try{
            const perro = new Perro(nombre,raza,edad,tamanio);
            const perroDoc = await PerroModel.create({ nombre: perro.nombre, raza: perro.raza, edad: perro.edad, tamanio: perro.tamanio });

            if(!perroDoc) return null;

            await perroDoc.save();

            return perro;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async getByName(nombre: string): Promise<Perro | null> {
        try{
            const perro = await PerroModel.findOne({ nombre:nombre }) as IPerro;
            if(!perro) return null;
            return perro as Perro;            
        }catch(error){
            return null;
        }
    }
}