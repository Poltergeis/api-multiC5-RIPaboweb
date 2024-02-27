import { PostPerroUseCase } from "../../application/postPerroUseCase";
import { Request,Response } from "express";
import { Perro } from "../../domain/Perro";

export class PostPerroController{
    constructor(readonly postPerroUseCase:PostPerroUseCase){}

    async run(req:Request,res:Response){
        try{
            
            const data = req.body;

            if(!data) return res.status(404).send({ status: "empty body", message: "didn't get the request body" });

            const {
                nombre, raza, edad, tamanio
            } = req.body as { nombre:string, raza:string, edad:number, tamanio:string };

            const perro = await this.postPerroUseCase.run(nombre,raza,edad,tamanio);

            if(!perro) return res.status(404).send({ status: "not found", messasge: "couldn't create a new Perro" });

            return res.status(201).send({
                status: "created",
                data: perro as Perro
            });

        }catch(error){
            console.log('Error:',error);
            return res.status(500).send({
                status: "error",
                message: "controller error\n",error
            });
        }
    }
}