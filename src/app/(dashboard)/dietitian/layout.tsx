import { ReactNode } from "react";
import Link from "next/link";
import { Users, LayoutDashboard, CalendarDays, ClipboardList, LogOut } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function DietitianLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 dark:bg-slate-950 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-800 font-semibold text-lg text-white">
          DiyetisyenApp Pro
        </div>
        <nav className="flex-1 py-4 px-3 space-y-1">
          <Link href="/dietitian" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-800 text-slate-300 hover:text-white">
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          <Link href="/dietitian/patients" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-800 text-slate-300 hover:text-white">
            <Users className="mr-3 h-5 w-5" />
            Hastalarım
          </Link>
          <Link href="/dietitian/diet-plans" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-800 text-slate-300 hover:text-white">
            <ClipboardList className="mr-3 h-5 w-5" />
            Diyet Listeleri
          </Link>
          <Link href="/dietitian/appointments" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-800 text-slate-300 hover:text-white">
            <CalendarDays className="mr-3 h-5 w-5" />
            Randevular
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <Link href="/api/auth/signout" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-red-400 hover:bg-slate-800 hover:text-red-300">
            <LogOut className="mr-3 h-5 w-5" />
            Çıkış Yap
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-card border-b flex items-center px-8 justify-between">
          <h1 className="text-xl font-semibold">Diyetisyen Yönetim Paneli</h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="bg-slate-100 dark:bg-slate-800 rounded-full h-8 w-8 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">D</div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
