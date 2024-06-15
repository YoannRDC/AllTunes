import { useEffect, useState } from 'react';

export default function Home() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('/api/files?folder=uploads');
      const data = await response.json();
      setFiles(data);
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h1>List of files in the uploads folder</h1>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
    </div>
  );
}
