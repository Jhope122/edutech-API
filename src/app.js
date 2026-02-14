import dotenv from "dotenv";
dotenv.config();

import express from "express";
import alunosRoutes from "./routes/alunos.js";
import cursosRoutes from "./routes/cursos.js";
import matriculasRoutes from "./routes/matriculas.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Edutech está funcionando");
});

app.use("/alunos", alunosRoutes);
app.use("/cursos", cursosRoutes);
app.use("/matriculas", matriculasRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});