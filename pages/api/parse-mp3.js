// js/parse-mp3.js

import { parseFile } from 'music-metadata';
import fs from 'fs-extra';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const filePath = path.join(process.cwd(), 'public', 'music', 'God.mp3');
      const metadata = await parseFile(filePath);
      console.log("parseFile done !")
      res.status(200).json(metadata);
    } catch (error) {
        console.log("parseFile Failed !")
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
