
export function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ erro: "Token não enviado" });
  }

  if (token !== process.env.TOKEN) {
    return res.status(401).json({ erro: "Token inválido" });
  }

  next();
}