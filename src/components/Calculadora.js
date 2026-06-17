"use client";

import { useState } from "react";

export default function Calculadora({ dict }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-dorado/20 w-full max-w-sm">
      <h2 className="text-dorado text-xl font-bold mb-1">{dict.question}</h2>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-marron-oscuro/60 text-sm mb-4 cursor-pointer flex justify-between items-center"
      >
        {dict.placeholder}
        <span className="text-xs">▼</span>
      </button>

      <hr className="border-t border-dorado/30" />
    </div>
  );
}