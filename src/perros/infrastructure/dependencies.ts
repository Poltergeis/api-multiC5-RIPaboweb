import { MongoPerroRepository } from "./mongoPerroRepository";

import { GetByNameUseCase } from "../application/GetByNameUseCase";
import { PostPerroUseCase } from "../application/postPerroUseCase";

import { GetByNameController } from "./controllers/GetByNameController";
import { PostPerroController } from "./controllers/PostPerroController";

export const mongoPerroRepository = new MongoPerroRepository();

export const getByNameUseCase = new GetByNameUseCase(mongoPerroRepository);
export const postPerroUseCase = new PostPerroUseCase(mongoPerroRepository);

export const getByNameController = new GetByNameController(getByNameUseCase);
export const postPerroController = new PostPerroController(postPerroUseCase);