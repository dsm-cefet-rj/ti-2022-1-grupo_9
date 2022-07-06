import 'reflect-metadata';
import express from 'express';
import cors from "cors";
import routes from './routes';
import bodyParser from 'body-parser';
import { database } from '../infra/databases/typeorm';

const app = express();
const PORT: Number = 3030;

app.use(bodyParser.json());
app.use(cors());




app.use(routes);


database.initialize()
    .then(() => console.log("Banco inicializado com sucesso!"))
    .catch((error) => console.log(error))
// Server setup
app.listen(PORT, () => {
    console.log('listening on port http://localhost:' + PORT);
})





