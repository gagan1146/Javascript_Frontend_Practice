import React, { useState } from 'react';

const UseState = () => {
  const [password, setPassword] = useState('');
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeChars, setIncludeChars] = useState(false);
  const [length, setLength] = useState(12);

  const generatePassword = () => {
    let base = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) base += '0123456789';
    if (includeChars) base += '!@#$%^&*()-_=+[]{}<>?/';

    let pass = '';
    for (let i = 0; i < length; i++) {
      const rand = Math.floor(Math.random() * base.length);
      pass += base[rand];
    }
    setPassword(pass);
  };

  const copyToClipboard = () => {
    if (!password) return alert('Generate a password first!');
    navigator.clipboard.writeText(password);
    alert('✅ Password copied to clipboard!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Password Generator</h1>

        <input
          type="text"
          value={password}
          readOnly
          placeholder="Generated Password"
          className="border border-gray-400 rounded-lg px-3 py-2 w-full mb-3 text-center"
        />

        <div className="mb-4">
          <label className="font-medium block mb-1">Password Length: {length}</label>
          <input
            type="range"
            min="8"
            max="25"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full cursor-pointer accent-blue-600"
          />
        </div>

        <div className="flex justify-between mb-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            Numbers
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeChars}
              onChange={(e) => setIncludeChars(e.target.checked)}
            />
            Characters
          </label>
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={generatePassword}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Generate
          </button>
          <button
            onClick={copyToClipboard}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseState;