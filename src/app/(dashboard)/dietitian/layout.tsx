import { ReactNode } from "react";
import Link from "next/link";
import { 
  IconLayoutDashboard, 
  IconCalendarEvent, 
  IconLogout, 
  IconMenu2,
  IconBell,
  IconSettings,
  IconStethoscope
} from "@tabler/icons-react";
import { Menu, MenuButton, MenuItems, MenuItem, Transition } from "@headlessui/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { SidebarNav } from "@/components/sidebar-nav";

export default function DietitianLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-emerald-500/30">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-72 flex-col bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-800/50 shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10 transition-all duration-300">
        <div className="h-24 flex items-center px-8 border-b border-slate-200/50 dark:border-slate-800/50 shrink-0">
          <Link href="/dietitian" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-xl shadow-indigo-500/30 flex items-center justify-center text-white shrink-0">
              <IconStethoscope stroke={2} className="w-7 h-7" />
            </div>
            <span className="font-black text-2xl tracking-tight text-slate-900 dark:text-white">
              Nutri<span className="text-indigo-500">Pro</span>
            </span>
          </Link>
        </div>
        
        <SidebarNav role="dietitian" />

        <div className="p-6 shrink-0">
          <Link href="/api/auth/signout" className="group flex items-center justify-center gap-3 w-full px-4 py-3.5 text-sm font-bold rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 shadow-xl shadow-slate-900/10 dark:shadow-white/10 transition-all duration-300">
            <IconLogout stroke={2} className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Güvenli Çıkış
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-slate-50/50 dark:bg-slate-950/50">
        
        {/* Top Navbar */}
        <header className="h-20 flex-shrink-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between px-4 sm:px-8 z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <IconMenu2 stroke={1.5} className="w-6 h-6" />
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white tracking-tight">Diyetisyen Paneli</h1>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <button className="relative p-2.5 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200">
              <IconBell stroke={1.5} className="w-5 h-5" />
              <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-indigo-500 border-2 border-white dark:border-slate-900"></span>
            </button>
            
            <ThemeToggle />

            {/* Headless UI Dropdown */}
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center gap-2 focus:outline-none rounded-full ring-2 ring-transparent hover:ring-indigo-100 dark:hover:ring-indigo-900 transition-all duration-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-400 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-500/20">
                  AY
                </div>
              </MenuButton>
              <Transition
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-slate-100 dark:divide-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl ring-1 ring-black/5 focus:outline-none">
                  <div className="px-4 py-3">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Giriş yapıldı</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">diyetisyen@mail.com</p>
                  </div>
                  <div className="px-2 py-2">
                    <MenuItem
                      as="a"
                      href="/dietitian/profile"
                      className="group flex w-full items-center rounded-xl px-3 py-2 text-sm transition-colors text-slate-700 dark:text-slate-300 data-focus:bg-indigo-50 data-focus:dark:bg-indigo-500/10 data-focus:text-indigo-700 data-focus:dark:text-indigo-400"
                    >
                      <IconSettings stroke={1.5} className="mr-3 h-4 w-4" />
                      Hesap Ayarları
                    </MenuItem>
                  </div>
                  <div className="px-2 py-2">
                    <MenuItem
                      as="a"
                      href="/api/auth/signout"
                      className="group flex w-full items-center rounded-xl px-3 py-2 text-sm transition-colors text-slate-700 dark:text-slate-300 data-focus:bg-rose-50 data-focus:dark:bg-rose-500/10 data-focus:text-rose-600 data-focus:dark:text-rose-400"
                    >
                      <IconLogout stroke={1.5} className="mr-3 h-4 w-4" />
                      Çıkış Yap
                    </MenuItem>
                  </div>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 scroll-smooth scrollbar-hide">
          <div className="max-w-7xl mx-auto pb-10">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
