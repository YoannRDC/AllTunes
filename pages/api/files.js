import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Chemin du dossier 'public/uploads'
  const directoryPath = path.join(process.cwd(), 'public', 'uploads');

  // Vérifiez que le chemin est une chaîne de caractères
  if (typeof directoryPath !== 'string') {
    return res.status(400).json({ error: 'Invalid directory path' });
  }

  // Lire le contenu du dossier
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to scan directory' });
    }
    // Envoyer la liste des fichiers en réponse
    res.status(200).json(files);
  });
}
