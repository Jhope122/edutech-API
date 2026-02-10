import { matriculas } from "../model/database.js";

// LISTAR TODAS
export function listarMatriculas(req, res) {
  res.json(matriculas);
}

// PEGAR POR ID
export function pegarMatriculaPorId(req, res) {
  const id = req.params.id;
  const matricula = matriculas.find(m => m && m.id === id);

  if (!matricula) {
    return res.status(404).json({ erro: "Matrícula não encontrada" });
  }

  res.json(matricula);
}

// CRIAR
export function criarMatricula(req, res) {
  const novaMatricula = req.body;
  matriculas.push(novaMatricula);
  res.status(201).json(novaMatricula);
}

// ATUALIZAR
export function atualizarMatricula(req, res) {
  const id = req.params.id;
  const index = matriculas.findIndex(m => m && m.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Matrícula não encontrada" });
  }

  matriculas[index] = { ...matriculas[index], ...req.body };
  res.json(matriculas[index]);
}

// DELETAR
export function deletarMatricula(req, res) {
  const id = req.params.id;
  const index = matriculas.findIndex(m => m && m.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Matrícula não encontrada" });
  }

  matriculas.splice(index, 1);
  res.json({ mensagem: "Matrícula removida com sucesso" });
}
