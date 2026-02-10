import express from "express";
import {
  listarAlunos,
  pegarAlunoPorId,
  criarAluno,
  atualizarAluno,
  deletarAluno
} from "../controllers/alunos.js";

import { authMiddleware } from "../middlewares/auth.js";

const router = express.Router();

// GET
router.get("/", listarAlunos);
router.get("/:id", pegarAlunoPorId);

// ROTAS PROTEGIDAS
router.post("/", authMiddleware, criarAluno);
router.put("/:id", authMiddleware, atualizarAluno);
router.delete("/:id", authMiddleware, deletarAluno);

export default router;
