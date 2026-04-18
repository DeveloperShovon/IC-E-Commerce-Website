import React from "react";

const GlowBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[#020617] overflow-hidden text-white">

      {/* 🔥 Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-green-500 opacity-20 rounded-full blur-[140px]" />
      
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-emerald-400 opacity-20 rounded-full blur-[140px]" />
      
      <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-green-400 opacity-10 rounded-full blur-[120px]" />

      {/* 🌫️ Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-black"></div>

      {/* 📦 Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
};

export default GlowBackground;