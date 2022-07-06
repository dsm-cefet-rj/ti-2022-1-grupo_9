import { verify } from "crypto";
import { Router } from "express";

import { AuthController } from "./controllers/auth.controller";
import { QuartoController } from "./controllers/quarto.controller";
import { ReservaController } from "./controllers/reserva.controller";


const routes = Router();

routes.use('/auth', new AuthController().router);
routes.use('/quarto', new QuartoController().router);
routes.use('/reserva', new ReservaController().router);

export default routes;