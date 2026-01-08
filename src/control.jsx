import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";

const ConstructionOnboarding = () => {
  const navigate = useNavigate();
  const images = [img1, img2, img3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    /* OUTER WRAPPER: Centers the card */
    <div className="min-h-screen w-screen bg-slate-100 flex items-center justify-center p-4">
      
      {/* THE APP CARD: Removed fixed heights to kill the scrollbar */}
      <div
        className="
          w-full 
          max-w-[450px] 
          bg-white 
          md:rounded-[2.5rem] 
          md:shadow-2xl 
          flex 
          flex-col 
          overflow-hidden /* This removes the scroller */
          relative
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-8">
          <span className="text-xl font-black text-blue-600 tracking-tight">SiteSync</span>
          <button className="text-xs font-bold border border-slate-200 px-4 py-1.5 rounded-full text-slate-600">
            🌐 EN / HI
          </button>
        </div>

        {/* Hero Image Section - Changed aspect-ratio to make it shorter */}
        <div className="px-6 pt-6">
          <div className="relative aspect-square md:aspect-video rounded-[2rem] overflow-hidden shadow-lg">
            <img
              src={images[currentImage]}
              alt="construction"
              className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-md">
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                Today’s Labor
              </p>
              <p className="text-sm font-bold text-slate-900">45 Present</p>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="px-8 mt-6 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 leading-tight">
            Manage Material <br /> & Labor
          </h2>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            Track attendance and inventory in real-time. Simplify invoicing for
            Indian construction sites.
          </p>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentImage === i ? "w-8 bg-blue-600" : "w-2 bg-slate-200"
              }`}
            />
          ))}
        </div>

        {/* BOTTOM SECTION: No longer using mt-auto to prevent stretching */}
        <div className="px-8 pb-10 pt-10">
          <button
            onClick={() => navigate("/login")}
            className="w-full h-14 bg-slate-900 text-white font-bold rounded-2xl shadow-lg hover:bg-black transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Get Started <span className="text-xl">→</span>
          </button>

          <p className="text-center text-sm text-slate-500 mt-6">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-600 font-bold cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConstructionOnboarding;