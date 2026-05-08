import { ReactNode } from "react";
import Link from "next/link";
import { User, Utensils, Droplets, LineChart, LogOut, ClipboardList, CalendarDays, MessageSquare, Activity } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function PatientLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-card border-r border-gray-200 dark:border-gray-800 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-800 font-bold text-xl text-emerald-600 dark:text-emerald-500">
          Diyetisyen<span className="text-slate-900 dark:text-white">App</span>
        </div>
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          <Link href="/patient" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 text-gray-700 dark:text-gray-300">
            <Activity className="mr-3 h-5 w-5" />
            Özetim
          </Link>
          <Link href="/patient/profile" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 text-gray-700 dark:text-gray-300">
            <User className="mr-3 h-5 w-5" />
            Profil & Sağlık
          </Link>
          <Link href="/patient/diet" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 text-gray-700 dark:text-gray-300">
            <ClipboardList className="mr-3 h-5 w-5" />
            Diyet Programım
          </Link>
          <Link href="/patient/meals" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 text-gray-700 dark:text-gray-300">
            <Utensils className="mr-3 h-5 w-5" />
            Yapay Zeka Öğün
          </Link>
          <Link href="/patient/water" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 text-gray-700 dark:text-gray-300">
            <Droplets className="mr-3 h-5 w-5" />
            Su & Egzersiz
          </Link>
          <Link href="/patient/progress" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 text-gray-700 dark:text-gray-300">
            <LineChart className="mr-3 h-5 w-5" />
            Gelişim Grafikleri
          </Link>
          <Link href="/patient/appointments" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 text-gray-700 dark:text-gray-300">
            <CalendarDays className="mr-3 h-5 w-5" />
            Randevular
          </Link>
          <Link href="/patient/messages" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 text-gray-700 dark:text-gray-300">
            <MessageSquare className="mr-3 h-5 w-5" />
            Diyetisyen Mesajları
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <Link href="/api/auth/signout" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/50 transition-colors">
            <LogOut className="mr-3 h-5 w-5" />
            Güvenli Çıkış
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 bg-white dark:bg-card border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-8 shadow-sm">
          <h1 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Danışan Paneli</h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="h-8 w-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              DK
            </div>
          </div>
        </header>
        <div className="p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
