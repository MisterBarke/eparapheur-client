'use client';

import React, { useState, useRef, useEffect } from 'react';
const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    files: [] as File[],
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const folderInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (folderInputRef.current) {
      folderInputRef.current.setAttribute('webkitdirectory', 'true');
      folderInputRef.current.setAttribute('directory', 'true');
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const filesArray = Array.from(files);
      setFormData((prevData) => ({
        ...prevData,
        files: [...prevData.files, ...filesArray],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto p-6  shadow-2xl space-y-6 bg-white border border-green-200  rounded  "
    >
      <div>
        <label
          htmlFor="title"
          className="block text-xl font-semibold text-gray-800 mb-2"
        >
          Titre du dossier
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={handleChange}
          className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700`}
          placeholder="Entrez le titre du dossier"
          required
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-xl font-semibold text-gray-800 mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
          placeholder="Entrez une description"
          rows={5}
          required
        />
      </div>

      <div>
        <label
          htmlFor="files"
          className="block text-xl font-semibold text-gray-800 mb-2"
        >
          Sélectionner des fichiers
        </label>
        <input
          type="file"
          id="files"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
          multiple
        />
      </div>

      {/* <div>
        <label
          htmlFor="folders"
          className="block text-xl font-semibold text-gray-800 mb-2"
        >
          Sélectionner des dossiers
        </label>
        <input
          type="file"
          id="folders"
          ref={folderInputRef}
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          multiple
        />
      </div> */}

      {formData.files.length > 0 && (
        <ul className="max-w-lg mt-3 space-y-3 p-2 bg-white rounded-lg shadow-lg text-gray-700  hover:shadow-xl transition duration-200 ease-in-out">
        {formData.files.map((file, index) => (
          <li
            key={index}
            className=""
          >
            <div className="flex items-center justify-between">
              <div className="text-lg font-medium">{file.webkitRelativePath || file.name}</div>
              <div className="text-sm text-gray-500">{/* Add any additional file details here, like size */}</div>
            </div>
          </li>
        ))}
      </ul>
      
      )}

      <button
        type="submit"
        className="w-full py-3 bg-green-700 text-white font-bold rounded-md shadow-lg hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Soumettre
      </button>
    </form>
  );
};

export default Form;
