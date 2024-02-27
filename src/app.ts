import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import signale from 'signale';
import { runDatabase } from './database/database';
import dotenv from 'dotenv';
import { perroRouter } from './perros/infrastructure/perroRouter';

dotenv.config();

const corsOptions = {
    origin: []
}

const app:express.Application = express();

app.use('/perro', perroRouter);

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());

const server = http.createServer(app);

(async() => {
    await runDatabase().then(() => {
        server.listen(9000, () => {
            signale.success('server running');
        });
    });
})();