import express from "express";
import {
  listarMatriculas,
  pegarMatriculaPorId,
  criarMatricula,
  atualizarMatricula,
  deletarMatricula
} from "../controllers/matriculas.js";

import { authMiddleware } from "../middlewares/auth.js";

const router = express.Router();

// GET
router.get("/", listarMatriculas);
router.get("/:id", pegarMatriculaPorId);

// ROTAS PROTEGIDAS
router.post("/", authMiddleware, criarMatricula);
router.put("/:id", authMiddleware, atualizarMatricula);
router.delete("/:id", authMiddleware, deletarMatricula);

export default router;
