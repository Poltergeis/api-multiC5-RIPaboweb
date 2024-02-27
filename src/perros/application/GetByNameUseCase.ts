import { PerroRepository } from "../domain/PerroRepository";
import { Perro } from "../domain/Perro";

export class GetByNameUseCase{
    constructor(readonly perroRepository:PerroRepository){}

    async run(nombre:string):Promise<Perro | null>{
            try{
                return await this.perroRepository.getByName(nombre);
            }catch(error){
                console.log('Error in PerroUseCase\n:',error);
                return null;
            }
        }
}