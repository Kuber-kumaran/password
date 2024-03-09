import React, { useState } from 'react'

const Password = () => {
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(true);
  const [password, setPassword] = useState("");


  const generatePassword = () => {
    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz"
    if (includeNumbers)   charset += "0123456789";
    if (includeSymbol)    charset += "!@#$%^&*()-_+=";
    let generatePassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatePassword += charset[randomIndex]
    }
    setPassword(generatePassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password Copied')
  };

  

  return (
  <div className="password-generator max-w-[400px] text-amber-400 font-semibold bg-violet-500 my-12 mx-auto p-5 rounded-md shadow-md">
    <h1 className='mb-5 text-center text-pink-500 text-lg font-bold uppercase'>Strong Password Generator</h1>
    <div className="input-group  mb-3">
      <label className='block  font-semibold mb-1' htmlFor='num'>Password Length: </label>  
      <input className='w-full p-2 border-2 border-stone-600 outline-none  rounded-md' type="number"  id="num" value={length} onChange={(e) => setLength(parseInt(e.target.value))}/>
    </div>
    <div className="checkbox-group mb-3">
        <input type="checkbox" cla  id="upper" checked={includeUppercase}
        onChange={(e) => setIncludeUppercase(e.target.checked)} />
        <label htmlFor="upper" className="upper">Include Uppercase</label>
    </div>
    <div className="checkbox-group mb-3">
        <input type="checkbox" id="lower" checked={includeLowercase}
        onChange={(e) => setIncludeLowercase(e.target.checked)} />
        <label htmlFor="lower" className="lower">Include Lowercase</label>
    </div>
    <div className="checkbox-group mb-3">
        <input type="checkbox" id="numbers"  checked={includeNumbers} 
        onChange={(e) => setIncludeNumbers(e.target.checked)} />
        <label htmlFor="numbers" className="numbers">Include Numbers</label>
    </div>
    <div className="checkbox-group mb-3">
        <input type="checkbox" id="symbol" checked={includeSymbol}
        onChange={(e) => setIncludeSymbol(e.target.checked)} />
        <label htmlFor="symbol" className="symbol">Include Symbol</label>
    </div>
    <button className='generate-btn py-2 px-4 bg-red-500 text-white rounded-md border-none cursor-pointer
     hover:bg-red-600 mb-2' onClick={generatePassword}>Generate Password</button>
    <div className="generated-password my-3 flex border-stone-600 border-2 rounded-md overflow-hidden ">
        <input type="text" className='   outline-none flex-1 p-2' value={password} readOnly/>
        <button className="copy-btn p-1.5  border-l-2 border-black bg-pink-500 text-amber-400 " onClick={copyToClipboard}>Copy</button>
    </div>
  </div>
  )
}


export default Password

