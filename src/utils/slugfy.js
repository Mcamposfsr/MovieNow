const slugfy = (title) =>
  title
    .toLowerCase()
    .replace(/[:/\\?!]/g, "")      // Remove caracteres especiais
    .replace(/\s+/g, "-")             // Espaços por hífen
    .replace(/-+/g, "-")              // Hífens duplicados
    .replace(/^[-]+|[-]+$/g, "")      // Remove hífens nas pontas
    .trim();

export default slugfy