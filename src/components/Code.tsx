import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const languages = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'Python', value: 'python' },
  { label: 'HTML', value: 'html' },
  { label: 'CSS', value: 'css' },
  { label: 'Java', value: 'java' },
  { label: 'C++', value: 'cpp' },
  { label: 'TypeScript', value: 'typescript' },
];

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');  

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-white">
      {/* Left Side: Code Input */}
      <div className="lg:w-1/2 p-4 border-r border-gray-700">
        <h1 className="text-2xl font-bold mb-4">Code Editor</h1>

        <div className="mb-4">
          <label htmlFor="language-select" className="block mb-2">
            Select Language:
          </label>
          <select
            id="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="select select-bordered w-full max-w-xs bg-gray-800 text-white"
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="code-input" className="block mb-2">
            Enter your code:
          </label>
          <textarea
            id="code-input"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="textarea textarea-bordered w-full bg-gray-800 text-white h-64"
            placeholder="Paste your code here..."
          />
        </div>
      </div>

      {/* Right Side: Syntax Highlighted Code */}
      <div className="lg:w-1/2 p-4 relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Highlighted Code</h2>
        </div>
        <div className="bg-gray-800 p-4 rounded overflow-auto h-full relative">
          {/* Snowflakes */}                      
          <SyntaxHighlighter language={language} style={dracula}>
            {code || '// Your highlighted code will appear here...'}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
