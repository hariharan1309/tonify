'use client'
import React, { useState } from 'react';

interface FileUploadProps {
  accept?: string;
  maxSize?: number; 
  title:string;
}

const FileUpload: React.FC<FileUploadProps> = ({ accept, maxSize,title }) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size <= (maxSize || 2 * 1024 * 1024) && selectedFile.type.startsWith('image/')) {
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
      } else {
        alert('Please select an image file below 2MB.');
      }
    }
  };

  const handleRemoveFile = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent default behavior
    setFile(null); // Reset the file state
    setPreview(null); // Reset the preview state
  };

  const humanFileSize = (size: number): string => {
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return (
      Number((size / Math.pow(1024, i)).toFixed(2)) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
    );
  };

  return (
    <div className="relative flex flex-col text-gray-400 rounded mb-5">
    <label htmlFor={title} className="block text-sm font-medium text-gray-700 dark:text-gray-400 py-1 "> {title} </label>

      <div className="relative flex flex-col text-gray-400 border-2 border-gray-200 rounded cursor-pointer">
        <input
          accept={accept || 'image/*'}
          type="file"
          onChange={handleFileChange}
          className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
          title={title}
          id={title}
        />
        {file ? (
          <div className="flex relative flex-col items-center  text-center">
                <img src={preview? preview : ''} alt="Preview" className="max-w-full h-full object-contain rounded-sm " />
                <div className='text-gray-900 absolute left-0 top-full flex flex-row flex-nowrap pt-2 items-start justify-around w-full z-100'>
                    <p className="text-sm font-medium text-blue-500">{file.name}</p>
                    {/* <p className="text-xs ">{humanFileSize(file.size)}</p> */}
                    <button onClick={handleRemoveFile} className=" text-xs cursor-pointer hover:scale-110 duration-200">
                        <svg className="w-5 h-5 fill-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
                        </svg>
                    </button>
                </div>
                    
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <svg className="w-6 h-6 mb-4 text-blue-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="m-0 text-sm"><span className="text-blue-500">Drag</span> your image here or click in this area.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;