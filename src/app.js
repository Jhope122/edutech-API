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

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
