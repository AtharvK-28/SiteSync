import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // State to make inputs "Typable"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { email, password });
  };

  return (
    <div className="min-h-screen w-screen bg-slate-100 flex items-center justify-center p-4">
      <div
        className="
          h-auto 
          w-full 
          max-w-[480px] /* Slightly wider to fit 3 buttons in footer */
          bg-white 
          shadow-2xl 
          rounded-[2.5rem] 
          flex 
          flex-col 
          overflow-hidden
        "
      >
        {/* HEADER */}
        <div className="px-6 pt-8">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-1.5 rounded-full bg-slate-900 text-[10px] text-white font-bold hover:bg-slate-800 transition-all"
          >
            ← Back
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div className="px-10 pt-6 pb-8 flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl mb-4">
            🛠️
          </div>

          <h2 className="text-2xl font-black text-slate-900">Welcome Back</h2>
          <p className="text-sm text-slate-500 mt-1">Sign in to manage operations</p>

          {/* FORM */}
          <form onSubmit={handleLogin} className="w-full mt-8 space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                Mobile Number or Email
              </label>
              <input
  type="text"
  placeholder="e.g. 9876543210"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="
    w-full
    h-12
    rounded-xl
    border
    border-slate-200
    px-4
    text-sm
    text-slate-900
    placeholder:text-slate-900
    placeholder:font-medium
    focus:ring-2
    focus:ring-blue-500
    outline-none
    transition-all
  "
/>

            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                Password
              </label>
              <input
  type="password"
  placeholder="Enter Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="
    w-full
    h-12
    rounded-xl
    border
    border-slate-200
    px-4
    text-sm
    text-slate-900
    placeholder:text-slate-900
    placeholder:font-medium
    focus:ring-2
    focus:ring-blue-500
    outline-none
    transition-all
  "
/>

            </div>

            <div className="flex justify-end">
              <button type="button" className="bg-slate-900 text-[10px] text-blue-400 px-3 py-1 rounded-md font-bold hover:bg-black">
                Forgot Password?
              </button>
            </div>

            <button 
              type="submit"
              className="w-full h-12 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-black transition-all active:scale-[0.98]"
            >
              Log In →
            </button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100"></span></div>
              <div className="relative flex justify-center text-[10px] uppercase font-bold text-slate-300 tracking-tighter"><span className="bg-white px-2">or</span></div>
            </div>

            <button type="button" className="w-full h-12 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-black transition-all flex items-center justify-center gap-2">
              📩 Log in via OTP
            </button>
          </form>
        </div>

        {/* FOOTER: 3-Column Grid for all roles */}
        <div className="px-6 pb-10 pt-6 bg-slate-50/50 border-t border-slate-100">
          <p className="text-[10px] text-slate-400 font-black uppercase text-center mb-4 tracking-widest">Quick Access</p>
          <div className="grid grid-cols-3 gap-2">
            <button type="button" className="h-14 bg-slate-900 text-blue-400 text-[10px] font-bold rounded-xl hover:bg-black transition-colors leading-tight px-1">
              Site <br/> Manager
            </button>
            <button type="button" className="h-14 bg-slate-900 text-blue-400 text-[10px] font-bold rounded-xl hover:bg-black transition-colors leading-tight px-1">
              Project <br/> Manager
            </button>
            <button type="button" className="h-14 bg-slate-900 text-blue-400 text-[10px] font-bold rounded-xl hover:bg-black transition-colors leading-tight px-1">
              Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;