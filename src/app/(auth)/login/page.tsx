"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  IconLeaf, 
  IconMail, 
  IconLock, 
  IconLogin2, 
  IconLoader2,
  IconAlertCircle,
  IconArrowRight,
  IconShieldCheck
} from "@tabler/icons-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError(res.error);
      setLoading(false);
    } else {
      window.location.href = "/patient"; // Redirect to dashboard based on role later
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-slate-50 dark:bg-slate-950">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-[55%] relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-500 to-emerald-700">
        {/* Decorative Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-16 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-teal-300/15 rounded-full blur-2xl"></div>
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16 w-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <IconLeaf stroke={2} className="w-7 h-7 text-white" />
            </div>
            <span className="font-black text-2xl text-white tracking-tight">
              Fit<span className="text-emerald-200">Care</span>
            </span>
          </div>

          {/* Hero Content */}
          <div className="max-w-lg">
            <h1 className="text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight">
              Sağlıklı yaşam
              <br />
              <span className="text-emerald-200">yolculuğunuz</span>
              <br />
              burada başlıyor.
            </h1>
            <p className="text-emerald-100/90 text-lg font-medium mt-6 leading-relaxed max-w-md">
              Kişiselleştirilmiş diyet programları, yapay zeka destekli öğün analizi ve profesyonel diyetisyen desteği ile hedefinize ulaşın.
            </p>
            
            {/* Features */}
            <div className="mt-10 space-y-4">
              {[
                "AI destekli öğün analizi ve besin takibi",
                "Gerçek zamanlı diyetisyen iletişimi",
                "Kişiye özel makro hesaplamaları"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-emerald-50/90">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <IconShieldCheck stroke={2.5} className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <p className="text-emerald-200/60 text-sm font-medium">
            © 2026 FitCare. Tüm hakları saklıdır.
          </p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="flex items-center gap-3 mb-10 lg:hidden">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 shadow-xl shadow-emerald-500/30 flex items-center justify-center text-white">
              <IconLeaf stroke={2} className="w-7 h-7" />
            </div>
            <span className="font-black text-2xl tracking-tight text-slate-900 dark:text-white">
              Fit<span className="text-emerald-500">Care</span>
            </span>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Tekrar hoş geldiniz
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">
              Hesabınıza giriş yaparak panele erişin.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <IconMail stroke={2} className="w-4 h-4 text-emerald-500" />
                E-posta Adresi
              </label>
              <div className="relative">
                <Input 
                  type="email" 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ornek@email.com"
                  className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 pl-4 font-medium focus-visible:ring-emerald-500 focus-visible:border-emerald-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <IconLock stroke={2} className="w-4 h-4 text-emerald-500" />
                  Şifre
                </label>
                <button type="button" className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
                  Şifremi Unuttum
                </button>
              </div>
              <Input 
                type="password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 pl-4 font-medium focus-visible:ring-emerald-500 focus-visible:border-emerald-500 transition-all"
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
              className="w-full h-13 rounded-xl font-bold text-base bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100" 
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <IconLoader2 stroke={2} className="w-5 h-5 animate-spin" />
                  Giriş Yapılıyor...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <IconLogin2 stroke={2} className="w-5 h-5" />
                  Giriş Yap
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

          {/* Register CTA */}
          <div className="text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Henüz hesabınız yok mu?
            </p>
            <Link 
              href="/register" 
              className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group"
            >
              Ücretsiz Hesap Oluştur
              <IconArrowRight stroke={2.5} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
