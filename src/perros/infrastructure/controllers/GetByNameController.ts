import { GetByNameUseCase } from "../../application/GetByNameUseCase";
import { Request,Response } from "express";
import { Perro } from "../../domain/Perro";

export class GetByNameController{
    constructor(readonly getByNameUseCase: GetByNameUseCase){}

    async run(req:Request,res:Response){
        try{
            const { nombre } = req.params as { nombre:string };

            if(!nombre) return res.status(404).send({ status: "empty params", message: "didn't get a nombre from client" });

            const perro = await this.getByNameUseCase.run(nombre);

            if(!perro) return res.status(404).send({ status: "not found", message: "couldn't get a Perro back from Database" });

            return res.status(200).send({
                status: "found",
                data: perro as Perro
            });
        }catch(error){
            console.log('Error:',error);
            return res.status(500).send({
                status: "error",
                message: "error in getByName request\n",error
            })
        }
    }
}