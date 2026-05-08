import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  IconToolsKitchen2, 
  IconDroplet, 
  IconTarget, 
  IconFlame, 
  IconActivity, 
  IconCalendarEvent, 
  IconPlus, 
  IconInfoCircle, 
  IconApple, 
  IconCircleCheckFilled,
  IconVideo
} from "@tabler/icons-react";
import Link from "next/link";

export default function PatientDashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Günlük Özet</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Bugünkü hedefleriniz, ilerlemeniz ve bildirimleriniz.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/patient/water">
            <Button variant="outline" className="h-12 px-5 rounded-2xl border-emerald-200 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-900/50 font-bold transition-all">
              <IconDroplet stroke={2} className="mr-2 h-5 w-5 text-cyan-500" />
              Su Ekle
            </Button>
          </Link>
          <Link href="/patient/meals">
            <Button className="h-12 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold shadow-xl shadow-emerald-500/20 transition-all">
              <IconPlus stroke={2} className="mr-2 h-5 w-5" />
              Öğün Ekle
            </Button>
          </Link>
        </div>
      </div>

      {/* Top Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="relative overflow-hidden border-0 shadow-xl shadow-emerald-500/20 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-3xl group transition-transform hover:-translate-y-1 duration-300">
          <div className="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4 group-hover:rotate-12 transition-transform duration-500">
            <IconTarget stroke={1.5} className="h-32 w-32" />
          </div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-6 px-6">
            <CardTitle className="text-emerald-50 font-bold text-sm tracking-wider uppercase">Günlük Kalori</CardTitle>
            <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
              <IconTarget stroke={2} className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <div className="text-4xl font-black tracking-tight">2,000</div>
            <p className="text-sm text-emerald-100 mt-1 font-semibold">kcal hedef</p>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none relative overflow-hidden group hover:ring-2 hover:ring-orange-400 transition-all bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl">
          <div className="absolute right-0 bottom-0 opacity-[0.03] dark:opacity-5 transform translate-x-4 translate-y-4 group-hover:scale-110 transition-transform duration-500">
            <IconFlame stroke={1.5} className="h-32 w-32 text-orange-600" />
          </div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-6 px-6">
            <CardTitle className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Alınan Kalori</CardTitle>
            <div className="p-2.5 bg-orange-50 dark:bg-orange-500/10 rounded-xl">
              <IconFlame stroke={2} className="h-5 w-5 text-orange-500" />
            </div>
          </CardHeader>
          <CardContent className="px-6 pb-6 relative z-10">
            <div className="text-3xl font-black text-slate-800 dark:text-white">1,250 <span className="text-sm font-bold text-slate-400">kcal</span></div>
            <div className="mt-5 space-y-2.5">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-400">%62.5 İlerleme</span>
                <span className="text-orange-500">Kalan: 750</span>
              </div>
              <Progress value={62.5} className="h-2.5 bg-orange-100 dark:bg-orange-950/50 [&>div]:bg-gradient-to-r [&>div]:from-orange-400 [&>div]:to-orange-500 rounded-full" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none relative overflow-hidden group hover:ring-2 hover:ring-indigo-400 transition-all bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl">
          <div className="absolute right-0 bottom-0 opacity-[0.03] dark:opacity-5 transform translate-x-4 translate-y-4 group-hover:scale-110 transition-transform duration-500">
            <IconToolsKitchen2 stroke={1.5} className="h-32 w-32 text-indigo-600" />
          </div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-6 px-6">
            <CardTitle className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Öğünler</CardTitle>
            <div className="p-2.5 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl">
              <IconToolsKitchen2 stroke={2} className="h-5 w-5 text-indigo-500" />
            </div>
          </CardHeader>
          <CardContent className="px-6 pb-6 relative z-10">
            <div className="text-3xl font-black text-slate-800 dark:text-white">2 <span className="text-sm font-bold text-slate-400">/ 4</span></div>
            <div className="mt-5 flex gap-1.5">
              <div className="h-2.5 flex-1 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-500 shadow-sm"></div>
              <div className="h-2.5 flex-1 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-500 shadow-sm"></div>
              <div className="h-2.5 flex-1 rounded-full bg-slate-100 dark:bg-slate-800 shadow-inner"></div>
              <div className="h-2.5 flex-1 rounded-full bg-slate-100 dark:bg-slate-800 shadow-inner"></div>
            </div>
            <p className="text-xs font-bold text-indigo-500 mt-2.5">2 öğün tamamlandı</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none relative overflow-hidden group hover:ring-2 hover:ring-cyan-400 transition-all bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl">
          <div className="absolute right-0 bottom-0 opacity-[0.03] dark:opacity-5 transform translate-x-4 translate-y-4 group-hover:scale-110 transition-transform duration-500">
            <IconDroplet stroke={1.5} className="h-32 w-32 text-cyan-600" />
          </div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-6 px-6">
            <CardTitle className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Su Tüketimi</CardTitle>
            <div className="p-2.5 bg-cyan-50 dark:bg-cyan-500/10 rounded-xl">
              <IconDroplet stroke={2} className="h-5 w-5 text-cyan-500" />
            </div>
          </CardHeader>
          <CardContent className="px-6 pb-6 relative z-10">
            <div className="text-3xl font-black text-slate-800 dark:text-white">1.5 <span className="text-sm font-bold text-slate-400">/ 2.5 L</span></div>
            <div className="mt-5 space-y-2.5">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-400">%60 Hedef</span>
                <span className="text-cyan-500">+1 Bardak İç!</span>
              </div>
              <Progress value={60} className="h-2.5 bg-cyan-100 dark:bg-cyan-950/50 [&>div]:bg-gradient-to-r [&>div]:from-cyan-400 [&>div]:to-cyan-500 rounded-full" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Main Content: Macronutrients & Latest Meals */}
        <div className="space-y-6 lg:col-span-4">
          <Card className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl overflow-hidden">
            <CardHeader className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20">
              <CardTitle className="flex items-center gap-3 text-xl font-extrabold text-slate-800 dark:text-white">
                <IconActivity stroke={2} className="h-7 w-7 text-indigo-500" />
                Makro Besin Dağılımı
              </CardTitle>
              <CardDescription className="text-base mt-1">Günlük karbonhidrat, protein ve yağ alımınız.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 shadow-sm"></div>
                      <span className="text-base font-bold text-slate-700 dark:text-slate-300">Karbonhidrat</span>
                    </div>
                    <span className="text-sm font-bold text-slate-500">120g / 250g</span>
                  </div>
                  <Progress value={48} className="h-3.5 bg-amber-100/50 dark:bg-amber-950/30 [&>div]:bg-gradient-to-r [&>div]:from-amber-400 [&>div]:to-amber-500 rounded-full" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-rose-400 to-rose-500 shadow-sm"></div>
                      <span className="text-base font-bold text-slate-700 dark:text-slate-300">Protein</span>
                    </div>
                    <span className="text-sm font-bold text-slate-500">85g / 120g</span>
                  </div>
                  <Progress value={70} className="h-3.5 bg-rose-100/50 dark:bg-rose-950/30 [&>div]:bg-gradient-to-r [&>div]:from-rose-400 [&>div]:to-rose-500 rounded-full" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-sm"></div>
                      <span className="text-base font-bold text-slate-700 dark:text-slate-300">Yağ</span>
                    </div>
                    <span className="text-sm font-bold text-slate-500">40g / 65g</span>
                  </div>
                  <Progress value={61} className="h-3.5 bg-yellow-100/50 dark:bg-yellow-950/30 [&>div]:bg-gradient-to-r [&>div]:from-yellow-400 [&>div]:to-yellow-500 rounded-full" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl overflow-hidden">
            <CardHeader className="p-6 sm:p-8 flex flex-row items-center justify-between border-b border-slate-100 dark:border-slate-800/50">
              <div>
                <CardTitle className="flex items-center gap-3 text-xl font-extrabold text-slate-800 dark:text-white">
                  <IconToolsKitchen2 stroke={2} className="h-7 w-7 text-emerald-500" />
                  Bugünkü Öğünler
                </CardTitle>
                <CardDescription className="text-base mt-1">Bugün tükettiğiniz öğünlerin özeti.</CardDescription>
              </div>
              <Link href="/patient/meals">
                <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-500/10 font-bold rounded-xl h-10 px-4">
                  Tümünü Gör
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100 dark:divide-slate-800/50">
                {[
                  { name: 'Kahvaltı', time: '08:30', cals: '450 kcal', items: 'Yulaf ezmesi, muz, fıstık ezmesi', icon: <IconApple stroke={1.5} className="w-6 h-6" /> },
                  { name: 'Öğle Yemeği', time: '13:00', cals: '600 kcal', items: 'Izgara tavuk salata, zeytinyağlı', icon: <IconToolsKitchen2 stroke={1.5} className="w-6 h-6" /> },
                ].map((meal, i) => (
                  <div key={i} className="flex items-start gap-5 p-6 sm:p-8 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                    <div className="p-3 bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 rounded-2xl group-hover:scale-110 transition-transform shadow-sm">
                      {meal.icon}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="font-extrabold text-lg text-slate-800 dark:text-white">{meal.name}</p>
                        <span className="text-sm font-bold text-slate-400">{meal.time}</span>
                      </div>
                      <p className="text-base text-slate-500 font-medium">{meal.items}</p>
                      <Badge className="mt-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-300 dark:hover:bg-emerald-500/30 border-none font-bold px-3 py-1 rounded-xl">
                        {meal.cals}
                      </Badge>
                    </div>
                  </div>
                ))}
                
                <div className="p-6 sm:p-8">
                  <Link href="/patient/meals">
                    <Button variant="outline" className="w-full h-14 border-2 border-dashed border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 text-emerald-600 dark:border-emerald-800/50 dark:hover:bg-emerald-900/20 dark:text-emerald-400 rounded-2xl font-bold text-base transition-all">
                      <IconPlus stroke={2} className="w-5 h-5 mr-2" /> Ara Öğün Ekle
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Content: Dietitian Notes & Tasks */}
        <div className="space-y-6 lg:col-span-3">
          <Card className="border-0 shadow-xl shadow-emerald-500/10 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 ring-1 ring-emerald-200/50 dark:ring-emerald-800/50 rounded-3xl overflow-hidden relative">
            <div className="absolute right-0 top-0 opacity-5 transform translate-x-4 -translate-y-4">
              <IconInfoCircle stroke={1.5} className="h-32 w-32 text-emerald-500" />
            </div>
            <CardHeader className="pb-4 p-6 sm:px-8 pt-8">
              <CardTitle className="flex items-center gap-3 text-emerald-800 dark:text-emerald-300 text-xl font-extrabold relative z-10">
                <IconInfoCircle stroke={2} className="h-6 w-6" />
                Diyetisyen Notu
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-8 sm:px-8 relative z-10">
              <div className="flex gap-5 items-start">
                <Avatar className="w-14 h-14 border-2 border-emerald-200 dark:border-emerald-700 shadow-md">
                  <AvatarImage src="https://i.pravatar.cc/150?u=dietitian" />
                  <AvatarFallback className="bg-emerald-100 text-emerald-700 font-bold">Dyt</AvatarFallback>
                </Avatar>
                <div className="space-y-3">
                  <p className="text-base text-slate-700 dark:text-slate-300 italic leading-relaxed font-medium">
                    "Harika gidiyorsun! Dünkü su tüketimin biraz düşüktü, bugün 2.5 litreyi tamamlamaya özen gösterelim. Akşam yemeğinde karbonhidratı kısıp protein ağırlıklı beslenmeyi unutma."
                  </p>
                  <p className="text-sm font-extrabold text-emerald-700 dark:text-emerald-400">- Dyt. Ayşe Yılmaz</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl overflow-hidden">
            <CardHeader className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800/50">
              <CardTitle className="flex items-center gap-3 text-xl font-extrabold text-slate-800 dark:text-white">
                <IconCircleCheckFilled stroke={2} className="h-7 w-7 text-indigo-500" />
                Günlük Görevler
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <ul className="space-y-4">
                {[
                  { text: "Sabah aç karnına 1 bardak ılık limonlu su", done: true },
                  { text: "Öğle yemeği sonrası 15 dk yürüyüş", done: true },
                  { text: "Akşam 8'den sonra bir şey yeme", done: false },
                  { text: "Günde 2 fincan yeşil çay tüket", done: false },
                ].map((task, i) => (
                  <li key={i} className="flex items-start gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors cursor-pointer group">
                    <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors ${task.done ? 'bg-emerald-500 border-emerald-500 shadow-sm shadow-emerald-500/20' : 'border-slate-300 dark:border-slate-600 group-hover:border-emerald-400'}`}>
                      {task.done && <IconCircleCheckFilled className="w-4 h-4 text-white" />}
                    </div>
                    <span className={`text-base leading-tight ${task.done ? 'text-slate-400 line-through' : 'font-bold text-slate-700 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400'}`}>
                      {task.text}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl shadow-indigo-500/20 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-3xl overflow-hidden relative group">
            <div className="absolute -right-4 -bottom-4 opacity-10 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <IconCalendarEvent stroke={1.5} className="h-40 w-40" />
            </div>
            <CardHeader className="p-6 sm:p-8 pb-4 relative z-10">
              <CardTitle className="flex items-center gap-3 text-white text-xl font-extrabold">
                <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                  <IconCalendarEvent stroke={2} className="h-6 w-6" />
                </div>
                Yaklaşan Randevu
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8 relative z-10">
              <div className="flex flex-col gap-2">
                <div className="text-4xl font-black tracking-tight">12 Mayıs</div>
                <div className="text-indigo-100 flex items-center justify-between font-bold text-lg mt-1">
                  <span>Çarşamba, 14:30</span>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 border-none px-3 py-1 rounded-xl backdrop-blur-md">Online</Badge>
                </div>
                <Button className="w-full h-14 mt-6 bg-white text-indigo-600 hover:bg-indigo-50 font-extrabold text-lg shadow-xl shadow-black/10 rounded-2xl transition-transform hover:-translate-y-1">
                  <IconVideo stroke={2} className="w-5 h-5 mr-2" />
                  Görüşmeye Katıl
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
