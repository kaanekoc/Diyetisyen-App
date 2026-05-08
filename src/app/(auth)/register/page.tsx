"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  IconChartLine
} from "@tabler/icons-react";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("PATIENT");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="flex min-h-screen w-full bg-slate-50 dark:bg-slate-950">
      {/* Left Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 order-2 lg:order-1">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="flex items-center gap-3 mb-10 lg:hidden">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-xl shadow-indigo-500/30 flex items-center justify-center text-white">
              <IconLeaf stroke={2} className="w-7 h-7" />
            </div>
            <span className="font-black text-2xl tracking-tight text-slate-900 dark:text-white">
              Fit<span className="text-indigo-500">Care</span>
            </span>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Hesap Oluşturun
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">
              Sisteme katılarak sağlıklı yaşam yolculuğunuza başlayın.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Role Selection - Visual Cards */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <IconUser stroke={2} className="w-4 h-4 text-indigo-500" />
                Hesap Türü
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole("PATIENT")}
                  className={`relative p-4 rounded-2xl border-2 transition-all duration-200 text-left group ${
                    role === "PATIENT" 
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 shadow-lg shadow-emerald-500/10" 
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    role === "PATIENT" ? "bg-emerald-500 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                  }`}>
                    <IconHeartbeat stroke={2} className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-sm text-slate-800 dark:text-white">Danışan</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Hasta Hesabı</div>
                  {role === "PATIENT" && (
                    <div className="absolute top-3 right-3 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setRole("DIETITIAN")}
                  className={`relative p-4 rounded-2xl border-2 transition-all duration-200 text-left group ${
                    role === "DIETITIAN" 
                      ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30 shadow-lg shadow-indigo-500/10" 
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    role === "DIETITIAN" ? "bg-indigo-500 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                  }`}>
                    <IconStethoscope stroke={2} className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-sm text-slate-800 dark:text-white">Diyetisyen</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Profesyonel Hesap</div>
                  {role === "DIETITIAN" && (
                    <div className="absolute top-3 right-3 w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <IconMail stroke={2} className="w-4 h-4 text-indigo-500" />
                E-posta Adresi
              </label>
              <Input 
                type="email" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="ornek@email.com"
                className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 pl-4 font-medium focus-visible:ring-indigo-500 focus-visible:border-indigo-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <IconLock stroke={2} className="w-4 h-4 text-indigo-500" />
                Şifre
              </label>
              <Input 
                type="password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min. 6 karakter"
                className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 pl-4 font-medium focus-visible:ring-indigo-500 focus-visible:border-indigo-500 transition-all"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2.5 p-3.5 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50 rounded-xl text-rose-700 dark:text-rose-400 text-sm font-semibold animate-in fade-in slide-in-from-top-2 duration-300">
                <IconAlertCircle stroke={2} className="w-5 h-5 shrink-0" />
                {error}
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full h-13 rounded-xl font-bold text-base bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100" 
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
                  Kayıt Ol
                </span>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-slate-950 px-3 text-slate-400 font-bold tracking-wider">veya</span>
            </div>
          </div>

          {/* Login CTA */}
          <div className="text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Zaten hesabınız var mı?
            </p>
            <Link 
              href="/login" 
              className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group"
            >
              Giriş Yapın
              <IconArrowRight stroke={2.5} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-[55%] relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 order-1 lg:order-2">
        {/* Decorative Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-16 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-indigo-300/15 rounded-full blur-2xl"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16 w-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <IconLeaf stroke={2} className="w-7 h-7 text-white" />
            </div>
            <span className="font-black text-2xl text-white tracking-tight">
              Fit<span className="text-indigo-200">Care</span>
            </span>
          </div>

          {/* Hero Content */}
          <div className="max-w-lg">
            <h1 className="text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight">
              Profesyonel
              <br />
              <span className="text-indigo-200">beslenme</span>
              <br />
              yönetimi.
            </h1>
            <p className="text-indigo-100/90 text-lg font-medium mt-6 leading-relaxed max-w-md">
              İster danışan olarak kişisel sağlık hedefinize koşun, ister diyetisyen olarak hastalarınızı yönetin. Her iki yol da burada birleşiyor.
            </p>
            
            {/* Features */}
            <div className="mt-10 grid grid-cols-2 gap-5">
              {[
                { icon: IconSalad, label: "Akıllı Diyet Planlama" },
                { icon: IconChartLine, label: "Detaylı İlerleme Takibi" },
                { icon: IconHeartbeat, label: "Sağlık Veri Analizi" },
                { icon: IconStethoscope, label: "Profesyonel CRM" },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-indigo-50/90 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                  <feature.icon stroke={2} className="w-5 h-5 text-indigo-200 shrink-0" />
                  <span className="font-semibold text-sm">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <p className="text-indigo-200/60 text-sm font-medium">
            © 2026 FitCare. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </div>
  );
}
