export function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (token === "123456") {
    next();
  } else {
    res.status(401).json({ erro: "Acesso não autorizado" });
  }
}
