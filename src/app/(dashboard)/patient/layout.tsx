import { ReactNode } from "react";
import Link from "next/link";
import { User, Utensils, Droplets, LineChart, LogOut } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function PatientLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-card border-r border-gray-200 dark:border-gray-800 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-800 font-semibold text-lg text-emerald-600">
          DiyetisyenApp
        </div>
        <nav className="flex-1 py-4 px-3 space-y-1">
          <Link href="/patient" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 text-gray-700 dark:text-gray-300">
            <User className="mr-3 h-5 w-5" />
            Özetim
          </Link>
          <Link href="/patient/meals" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 text-gray-700 dark:text-gray-300">
            <Utensils className="mr-3 h-5 w-5" />
            Öğünlerim
          </Link>
          <Link href="/patient/water" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 text-gray-700 dark:text-gray-300">
            <Droplets className="mr-3 h-5 w-5" />
            Su Takibi
          </Link>
          <Link href="/patient/progress" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 text-gray-700 dark:text-gray-300">
            <LineChart className="mr-3 h-5 w-5" />
            İlerleme
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <Link href="/api/auth/signout" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/50">
            <LogOut className="mr-3 h-5 w-5" />
            Çıkış Yap
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 bg-white dark:bg-card border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-8">
          <h1 className="text-xl font-semibold">Danışan Paneli</h1>
          <ThemeToggle />
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
