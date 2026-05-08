"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  IconActivity,
  IconUser,
  IconClipboardList,
  IconToolsKitchen2,
  IconDroplet,
  IconChartLine,
  IconCalendarEvent,
  IconMessageCircle,
  IconLayoutDashboard,
  IconUsers
} from "@tabler/icons-react";

const patientNav = [
  {
    title: "Genel",
    items: [
      { name: "Özetim", href: "/patient", icon: IconActivity },
      { name: "Profil & Sağlık", href: "/patient/profile", icon: IconUser }
    ]
  },
  {
    title: "Beslenme",
    items: [
      { name: "Diyet Programım", href: "/patient/diet", icon: IconClipboardList },
      { name: "Yapay Zeka Öğün", href: "/patient/meals", icon: IconToolsKitchen2 },
      { name: "Su & Egzersiz", href: "/patient/water", icon: IconDroplet }
    ]
  },
  {
    title: "İletişim & Analiz",
    items: [
      { name: "Gelişim Grafikleri", href: "/patient/progress", icon: IconChartLine },
      { name: "Randevular", href: "/patient/appointments", icon: IconCalendarEvent },
      { name: "Diyetisyen Mesajları", href: "/patient/messages", icon: IconMessageCircle }
    ]
  }
];

const dietitianNav = [
  {
    title: "Ana Menü",
    items: [
      { name: "Dashboard", href: "/dietitian", icon: IconLayoutDashboard },
      { name: "Hastalarım (CRM)", href: "/dietitian/patients", icon: IconUsers }
    ]
  },
  {
    title: "Yönetim",
    items: [
      { name: "Diyet Listeleri", href: "/dietitian/diet-plans", icon: IconClipboardList },
      { name: "Randevular & Takvim", href: "/dietitian/appointments", icon: IconCalendarEvent }
    ]
  }
];

export function SidebarNav({ role }: { role: "patient" | "dietitian" }) {
  const pathname = usePathname();
  const sections = role === "patient" ? patientNav : dietitianNav;
  const theme = role === "patient" ? "emerald" : "indigo";

  return (
    <nav className="flex-1 py-8 px-4 space-y-1.5 overflow-y-auto scrollbar-hide">
      {sections.map((section, idx) => (
        <div key={idx} className={idx > 0 ? "mt-6" : ""}>
          <p className="px-4 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
            {section.title}
          </p>
          <div className="space-y-1.5">
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              
              let activeClasses = "";
              let inactiveClasses = "hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200";
              
              if (theme === "emerald") {
                activeClasses = "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400";
              } else {
                activeClasses = "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400";
              }

              return (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className={`group flex items-center px-4 py-3 text-sm font-bold rounded-2xl transition-all duration-200 ${isActive ? activeClasses : inactiveClasses}`}
                >
                  <item.icon stroke={isActive ? 2.5 : 2} className={`mr-3 h-5 w-5 transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}
