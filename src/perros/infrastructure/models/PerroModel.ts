import mongoose, { Schema, model,Document } from "mongoose";
import { IPerro } from "../../domain/IPerro";

const perroSchema:Schema = new Schema<IPerro | Document>({
    nombre:{
        type: Schema.Types.String,
        required:true
    },
    raza:{
        type: Schema.Types.String,
        required:true
    },
    edad:{
        type: Schema.Types.Number,
        required:true
    },
    tamanio:{
        type: Schema.Types.String,
        required:true
    }
},{ versionKey:false });

export const PerroModel = model('Perros', perroSchema, 'Perros');