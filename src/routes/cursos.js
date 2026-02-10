import express from "express";
import {
  listarCursos,
  pegarCursoPorId,
  criarCurso,
  atualizarCurso,
  deletarCurso
} from "../controllers/cursos.js";

import { authMiddleware } from "../middlewares/auth.js";

const router = express.Router();

// GET
router.get("/", listarCursos);
router.get("/:id", pegarCursoPorId);

// ROTAS PROTEGIDAS
router.post("/", authMiddleware, criarCurso);
router.put("/:id", authMiddleware, atualizarCurso);
router.delete("/:id", authMiddleware, deletarCurso);

export default router;
