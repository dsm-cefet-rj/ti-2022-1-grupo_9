import { DataSource } from "typeorm";
import { Quarto } from "../../domain/entities/quarto";
import { Reserva } from "../../domain/entities/reserva";
import { Usuario } from "../../domain/entities/usuario";
import 'dotenv/config';

export const database = new DataSource({
    type: "mongodb",
    url:process.env.DATABASE_URL,
    database:"psw",
    port: 27017,
    useNewUrlParser:true,
    synchronize: true,
    entities: [Usuario, Quarto, Reserva],
    subscribers: [],
    migrations: [],
    useUnifiedTopology:true,
})