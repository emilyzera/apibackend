import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import { recadoRoutes } from "./routes/recados.routes";
import { userRouters } from "./routes/user.routes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/recados", recadoRoutes());
app.use("/usuario", userRouters());

app.listen(process.env.REACT_APP_API_PORT, () => {
  console.log(`API esta rodando na porta: ${process.env.REACT_APP_API_PORT}`);
});
