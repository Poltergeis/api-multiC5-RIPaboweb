import { PerroRepository } from "../domain/PerroRepository";
import { Perro } from "../domain/Perro";

export class PostPerroUseCase {
    constructor(readonly perroRepository: PerroRepository){}

    async run(
        nombre:string,
        raza:string,
        edad:number,
        tamanio:string
    ):Promise<Perro | null>{
        try{
            return await this.perroRepository.postPerro(nombre,raza,edad,tamanio);
        }catch(error){
            console.log('Error:',error);
            return null;
        }
    }
}