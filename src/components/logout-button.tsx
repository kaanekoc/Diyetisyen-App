"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { IconLogout, IconX, IconAlertTriangle } from "@tabler/icons-react";

export function LogoutButton() {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <>
      <button
        onClick={() => setShowConfirm(true)}
        className="group flex items-center justify-center gap-3 w-full px-4 py-3.5 text-sm font-bold rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 shadow-xl shadow-slate-900/10 dark:shadow-white/10 transition-all duration-300 cursor-pointer"
      >
        <IconLogout stroke={2} className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
        Güvenli Çıkış
      </button>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setShowConfirm(false)} 
          />
          
          {/* Dialog */}
          <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl shadow-slate-900/20 dark:shadow-black/40 w-full max-w-sm p-8 animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300 border border-slate-200/50 dark:border-slate-800/50">
            {/* Close button */}
            <button 
              onClick={() => setShowConfirm(false)}
              className="absolute top-4 right-4 p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <IconX stroke={2} className="w-5 h-5" />
            </button>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center mx-auto mb-5">
              <IconAlertTriangle stroke={2} className="w-8 h-8 text-rose-500" />
            </div>

            {/* Text */}
            <h3 className="text-xl font-black text-slate-900 dark:text-white text-center tracking-tight">
              Çıkış yapmak istiyor musunuz?
            </h3>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 text-center mt-2 leading-relaxed">
              Oturumunuz sonlandırılacak ve giriş ekranına yönlendirileceksiniz.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 h-12 rounded-xl font-bold text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              >
                Hayır, Kal
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 h-12 rounded-xl font-bold text-sm bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-500/25 transition-all hover:scale-[1.02]"
              >
                Evet, Çıkış Yap
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
