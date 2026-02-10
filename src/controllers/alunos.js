import { alunos } from "../model/database.js";

// LISTAR TODOS
export function listarAlunos(req, res) {
  res.json(alunos);
}

// PEGAR POR ID
export function pegarAlunoPorId(req, res) {
  const id = req.params.id;
  const aluno = alunos.find(a => a && a.id === id);

  if (!aluno) {
    return res.status(404).json({ erro: "Aluno não encontrado" });
  }

  res.json(aluno);
}

// CRIAR
export function criarAluno(req, res) {
  const novoAluno = req.body;
  alunos.push(novoAluno);
  res.status(201).json(novoAluno);
}

// ATUALIZAR
export function atualizarAluno(req, res) {
  const id = req.params.id;
  const index = alunos.findIndex(a => a && a.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Aluno não encontrado" });
  }

  alunos[index] = { ...alunos[index], ...req.body };
  res.json(alunos[index]);
}

// DELETAR
export function deletarAluno(req, res) {
  const id = req.params.id;
  const index = alunos.findIndex(a => a && a.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Aluno não encontrado" });
  }

  alunos.splice(index, 1);
  res.json({ mensagem: "Aluno removido com sucesso" });
}
