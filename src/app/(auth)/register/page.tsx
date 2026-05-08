"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  IconLeaf, 
  IconMail, 
  IconLock, 
  IconUserPlus, 
  IconLoader2,
  IconAlertCircle,
  IconArrowRight,
  IconStethoscope,
  IconUser,
  IconHeartbeat,
  IconSalad,
  IconChartLine,
  IconUsers,
  IconClipboardList,
  IconCalendarEvent
} from "@tabler/icons-react";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("PATIENT");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const isDietitian = role === "DIETITIAN";

  const handleRoleChange = (newRole: string) => {
    if (newRole === role || isAnimating) return;
    setIsAnimating(true);
    setRole(newRole);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Kayıt sırasında hata oluştu");
      }

      router.push("/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Theme colors based on role
  const accent = isDietitian ? {
    ring: "focus-visible:ring-indigo-500 focus-visible:border-indigo-500",
    btn: "from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow-indigo-500/25 hover:shadow-indigo-500/35",
    link: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300",
    icon: "text-indigo-500",
    label: "Profesyonel Hesap",
  } : {
    ring: "focus-visible:ring-emerald-500 focus-visible:border-emerald-500",
    btn: "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-emerald-500/25 hover:shadow-emerald-500/35",
    link: "text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300",
    icon: "text-emerald-500",
    label: "Danışan Hesabı",
  };

  return (
    <div className="flex min-h-screen w-full bg-slate-50 dark:bg-slate-950 overflow-hidden relative">

      {/* ======== BRANDING PANEL ======== */}
      <div 
        className={`hidden lg:flex absolute top-0 bottom-0 w-1/2 xl:w-[55%] z-20 transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
          isDietitian ? "left-0" : "left-1/2 xl:left-[45%]"
        }`}
      >
        {/* Green Panel (Patient) */}
        <div className={`absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-500 to-emerald-700 transition-opacity duration-500 ${isDietitian ? "opacity-0" : "opacity-100"}`}>
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-32 left-16 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-teal-300/15 rounded-full blur-2xl"></div>
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          </div>
        </div>

        {/* Indigo Panel (Dietitian) */}
        <div className={`absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 transition-opacity duration-500 ${isDietitian ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-32 right-16 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-300/15 rounded-full blur-2xl"></div>
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          </div>
        </div>

        {/* Branding Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16 w-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform duration-500">
              <IconLeaf stroke={2} className="w-7 h-7 text-white" />
            </div>
            <span className="font-black text-2xl text-white tracking-tight">
              Fit<span className={`transition-colors duration-500 ${isDietitian ? "text-indigo-200" : "text-emerald-200"}`}>Care</span>
            </span>
          </div>

          {/* Hero Content - Patient */}
          <div className={`max-w-lg transition-all duration-500 ${isDietitian ? "opacity-0 translate-y-8 absolute pointer-events-none" : "opacity-100 translate-y-0"}`}>
            <h1 className="text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight">
              Sağlıklı yaşam
              <br />
              <span className="text-emerald-200">yolculuğunuz</span>
              <br />
              burada başlıyor.
            </h1>
            <p className="text-emerald-100/90 text-lg font-medium mt-6 leading-relaxed max-w-md">
              Kişiselleştirilmiş diyet programları, yapay zeka destekli öğün analizi ve profesyonel diyetisyen desteğiyle hedefinize ulaşın.
            </p>
            <div className="mt-10 space-y-4">
              {[
                { icon: IconSalad, label: "Kişiselleştirilmiş beslenme planları" },
                { icon: IconChartLine, label: "Detaylı ilerleme grafikleri" },
                { icon: IconHeartbeat, label: "Sağlık veri takibi ve analizi" },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-emerald-50/90 bg-white/10 p-3 rounded-xl backdrop-blur-sm" style={{ transitionDelay: `${i * 80}ms` }}>
                  <feature.icon stroke={2} className="w-5 h-5 text-emerald-200 shrink-0" />
                  <span className="font-semibold text-sm">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Content - Dietitian */}
          <div className={`max-w-lg transition-all duration-500 ${isDietitian ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 absolute pointer-events-none"}`}>
            <h1 className="text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight">
              Profesyonel
              <br />
              <span className="text-indigo-200">beslenme</span>
              <br />
              yönetimi.
            </h1>
            <p className="text-indigo-100/90 text-lg font-medium mt-6 leading-relaxed max-w-md">
              Hastalarınızı tek panelden yönetin, diyet listeleri oluşturun ve randevularınızı planlayın.
            </p>
            <div className="mt-10 space-y-4">
              {[
                { icon: IconUsers, label: "Gelişmiş hasta CRM sistemi" },
                { icon: IconClipboardList, label: "Makro hesaplamalı diyet oluşturucu" },
                { icon: IconCalendarEvent, label: "Akıllı randevu takvimi" },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-indigo-50/90 bg-white/10 p-3 rounded-xl backdrop-blur-sm" style={{ transitionDelay: `${i * 80}ms` }}>
                  <feature.icon stroke={2} className="w-5 h-5 text-indigo-200 shrink-0" />
                  <span className="font-semibold text-sm">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          <p className={`text-sm font-medium transition-colors duration-500 ${isDietitian ? "text-indigo-200/60" : "text-emerald-200/60"}`}>
            © 2026 FitCare. Tüm hakları saklıdır.
          </p>
        </div>
      </div>

      {/* ======== FORM PANEL ======== */}
      <div 
        className={`w-full lg:w-1/2 xl:w-[45%] flex items-center justify-center p-6 sm:p-10 transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
          isDietitian ? "lg:ml-auto" : "lg:ml-0"
        }`}
      >
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="flex items-center gap-3 mb-10 lg:hidden">
            <div className={`w-12 h-12 rounded-2xl shadow-xl flex items-center justify-center text-white transition-all duration-500 ${
              isDietitian 
                ? "bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-indigo-500/30" 
                : "bg-gradient-to-tr from-emerald-500 to-teal-400 shadow-emerald-500/30"
            }`}>
              <IconLeaf stroke={2} className="w-7 h-7" />
            </div>
            <span className="font-black text-2xl tracking-tight text-slate-900 dark:text-white">
              Fit<span className={`transition-colors duration-500 ${isDietitian ? "text-indigo-500" : "text-emerald-500"}`}>Care</span>
            </span>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Hesap Oluşturun
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">
              Sisteme katılarak {isDietitian ? "hastalarınızı profesyonelce yönetin" : "sağlıklı yaşam yolculuğunuza başlayın"}.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Role Selection - Visual Cards */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <IconUser stroke={2} className={`w-4 h-4 transition-colors duration-500 ${accent.icon}`} />
                Hesap Türü
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleRoleChange("PATIENT")}
                  className={`relative p-4 rounded-2xl border-2 transition-all duration-300 text-left group ${
                    !isDietitian 
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 shadow-lg shadow-emerald-500/10 scale-[1.02]" 
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                    !isDietitian ? "bg-emerald-500 text-white scale-110" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                  }`}>
                    <IconHeartbeat stroke={2} className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-sm text-slate-800 dark:text-white">Danışan</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Hasta Hesabı</div>
                  <div className={`absolute top-3 right-3 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center transition-all duration-300 ${!isDietitian ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleRoleChange("DIETITIAN")}
                  className={`relative p-4 rounded-2xl border-2 transition-all duration-300 text-left group ${
                    isDietitian 
                      ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30 shadow-lg shadow-indigo-500/10 scale-[1.02]" 
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                    isDietitian ? "bg-indigo-500 text-white scale-110" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                  }`}>
                    <IconStethoscope stroke={2} className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-sm text-slate-800 dark:text-white">Diyetisyen</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Profesyonel Hesap</div>
                  <div className={`absolute top-3 right-3 w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center transition-all duration-300 ${isDietitian ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Email */}
            <div className={`space-y-2 transition-all duration-500 ${isAnimating ? (isDietitian ? "translate-x-3 opacity-0" : "-translate-x-3 opacity-0") : "translate-x-0 opacity-100"}`} style={{ transitionDelay: isAnimating ? "0ms" : "100ms" }}>
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <IconMail stroke={2} className={`w-4 h-4 transition-colors duration-500 ${accent.icon}`} />
                E-posta Adresi
              </label>
              <Input 
                type="email" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="ornek@email.com"
                className={`h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 pl-4 font-medium transition-all duration-300 ${accent.ring}`}
              />
            </div>

            {/* Password */}
            <div className={`space-y-2 transition-all duration-500 ${isAnimating ? (isDietitian ? "translate-x-3 opacity-0" : "-translate-x-3 opacity-0") : "translate-x-0 opacity-100"}`} style={{ transitionDelay: isAnimating ? "50ms" : "200ms" }}>
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <IconLock stroke={2} className={`w-4 h-4 transition-colors duration-500 ${accent.icon}`} />
                Şifre
              </label>
              <Input 
                type="password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min. 6 karakter"
                className={`h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 pl-4 font-medium transition-all duration-300 ${accent.ring}`}
              />
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2.5 p-3.5 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50 rounded-xl text-rose-700 dark:text-rose-400 text-sm font-semibold animate-in fade-in slide-in-from-top-2 duration-300">
                <IconAlertCircle stroke={2} className="w-5 h-5 shrink-0" />
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className={`transition-all duration-500 ${isAnimating ? (isDietitian ? "translate-x-3 opacity-0" : "-translate-x-3 opacity-0") : "translate-x-0 opacity-100"}`} style={{ transitionDelay: isAnimating ? "100ms" : "300ms" }}>
              <Button 
                type="submit" 
                className={`w-full h-13 rounded-xl font-bold text-base bg-gradient-to-r text-white shadow-xl transition-all duration-500 hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 ${accent.btn}`}
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <IconLoader2 stroke={2} className="w-5 h-5 animate-spin" />
                    Kayıt Olunuyor...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <IconUserPlus stroke={2} className="w-5 h-5" />
                    {isDietitian ? "Profesyonel Hesap Oluştur" : "Kayıt Ol"}
                  </span>
                )}
              </Button>
            </div>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-slate-50 dark:bg-slate-950 px-3 text-slate-400 font-bold tracking-wider">veya</span>
            </div>
          </div>

          {/* Login CTA */}
          <div className="text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Zaten hesabınız var mı?
            </p>
            <Link 
              href="/login" 
              className={`inline-flex items-center gap-2 mt-3 text-sm font-bold transition-colors duration-500 group ${accent.link}`}
            >
              Giriş Yapın
              <IconArrowRight stroke={2.5} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
