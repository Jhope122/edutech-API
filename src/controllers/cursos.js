import { cursos } from "../model/database.js";

// LISTAR TODOS
export function listarCursos(req, res) {
  res.json(cursos);
}

// PEGAR POR ID
export function pegarCursoPorId(req, res) {
  const id = req.params.id;
  const curso = cursos.find(c => c && c.id === id);

  if (!curso) {
    return res.status(404).json({ erro: "Curso não encontrado" });
  }

  res.json(curso);
}

// CRIAR
export function criarCurso(req, res) {
  const novoCurso = req.body;
  cursos.push(novoCurso);
  res.status(201).json(novoCurso);
}

// ATUALIZAR
export function atualizarCurso(req, res) {
  const id = req.params.id;
  const index = cursos.findIndex(c => c && c.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Curso não encontrado" });
  }

  cursos[index] = { ...cursos[index], ...req.body };
  res.json(cursos[index]);
}

// DELETAR
export function deletarCurso(req, res) {
  const id = req.params.id;
  const index = cursos.findIndex(c => c && c.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Curso não encontrado" });
  }

  cursos.splice(index, 1);
  res.json({ mensagem: "Curso removido com sucesso" });
}
