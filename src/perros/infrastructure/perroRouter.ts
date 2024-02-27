import { getByNameController } from "./dependencies";
import { postPerroController } from "./dependencies";
import express, { Router } from "express";

export const perroRouter:Router = Router();

perroRouter.use(express.json());

perroRouter.get('/getByName/:nombre', async(req,res) => {
    try{
        await getByNameController.run(req,res);
    }catch(error){
        console.log('routing error',error);
        return null;
    }
});

perroRouter.post('/add', async(req,res) => {
    try{
        await postPerroController.run(req,res);
    }catch(error){
        console.log('error:',error);
        return null;
    }
});