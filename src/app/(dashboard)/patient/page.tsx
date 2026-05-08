import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Utensils, Droplets, Target, Flame, Activity, CalendarDays, Plus, Info, Apple, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PatientDashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-emerald-900 dark:text-emerald-100">Günlük Özet</h2>
          <p className="text-muted-foreground mt-1 text-lg">Bugünkü hedefleriniz, ilerlemeniz ve bildirimleriniz.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="border-emerald-200 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-900/50">
            <Link href="/patient/water">
              <Droplets className="mr-2 h-4 w-4 text-cyan-500" />
              Su Ekle
            </Link>
          </Button>
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-200 dark:shadow-none">
            <Link href="/patient/meals">
              <Plus className="mr-2 h-4 w-4" />
              Öğün Ekle
            </Link>
          </Button>
        </div>
      </div>

      {/* Top Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="relative overflow-hidden border-none shadow-md bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">
          <div className="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4">
            <Target className="h-32 w-32" />
          </div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-emerald-50 font-medium">Günlük Kalori Hedefi</CardTitle>
            <Target className="h-5 w-5 text-emerald-100" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2,000</div>
            <p className="text-sm text-emerald-100 mt-1">kcal</p>
          </CardContent>
        </Card>
        
        <Card className="border-orange-100 dark:border-orange-900/50 shadow-sm relative overflow-hidden group hover:border-orange-300 transition-colors">
          <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-2 translate-y-2 group-hover:scale-110 transition-transform">
            <Flame className="h-24 w-24 text-orange-600" />
          </div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alınan Kalori</CardTitle>
            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-full">
              <Flame className="h-4 w-4 text-orange-600 dark:text-orange-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-800 dark:text-gray-100">1,250 <span className="text-sm font-normal text-muted-foreground">kcal</span></div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">İlerleme (%62.5)</span>
                <span className="font-medium text-orange-600 dark:text-orange-400">Kalan: 750</span>
              </div>
              <Progress value={62.5} className="h-2 bg-orange-100 dark:bg-orange-950 [&>div]:bg-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100 dark:border-blue-900/50 shadow-sm relative overflow-hidden group hover:border-blue-300 transition-colors">
          <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-2 translate-y-2 group-hover:scale-110 transition-transform">
            <Utensils className="h-24 w-24 text-blue-600" />
          </div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Öğünler</CardTitle>
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <Utensils className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-800 dark:text-gray-100">2 <span className="text-sm font-normal text-muted-foreground">/ 4</span></div>
            <div className="mt-4 flex gap-1">
              <div className="h-2 flex-1 rounded-full bg-blue-500"></div>
              <div className="h-2 flex-1 rounded-full bg-blue-500"></div>
              <div className="h-2 flex-1 rounded-full bg-gray-100 dark:bg-gray-800"></div>
              <div className="h-2 flex-1 rounded-full bg-gray-100 dark:bg-gray-800"></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">2 öğün tamamlandı</p>
          </CardContent>
        </Card>

        <Card className="border-cyan-100 dark:border-cyan-900/50 shadow-sm relative overflow-hidden group hover:border-cyan-300 transition-colors">
          <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-2 translate-y-2 group-hover:scale-110 transition-transform">
            <Droplets className="h-24 w-24 text-cyan-600" />
          </div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Su Tüketimi</CardTitle>
            <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-full">
              <Droplets className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-800 dark:text-gray-100">1.5 <span className="text-sm font-normal text-muted-foreground">/ 2.5 L</span></div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">%60 Hedef</span>
                <span className="font-medium text-cyan-600 dark:text-cyan-400">+1 Bardak İç!</span>
              </div>
              <Progress value={60} className="h-2 bg-cyan-100 dark:bg-cyan-950 [&>div]:bg-cyan-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Main Content: Macronutrients & Latest Meals */}
        <div className="space-y-6 lg:col-span-4">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-indigo-500" />
                Makro Besin Dağılımı
              </CardTitle>
              <CardDescription>Günlük karbonhidrat, protein ve yağ alımınız.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <span className="text-sm font-medium">Karbonhidrat</span>
                    </div>
                    <span className="text-sm text-muted-foreground">120g / 250g</span>
                  </div>
                  <Progress value={48} className="h-3 bg-amber-100 dark:bg-amber-950 [&>div]:bg-amber-500" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                      <span className="text-sm font-medium">Protein</span>
                    </div>
                    <span className="text-sm text-muted-foreground">85g / 120g</span>
                  </div>
                  <Progress value={70} className="h-3 bg-rose-100 dark:bg-rose-950 [&>div]:bg-rose-500" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span className="text-sm font-medium">Yağ</span>
                    </div>
                    <span className="text-sm text-muted-foreground">40g / 65g</span>
                  </div>
                  <Progress value={61} className="h-3 bg-yellow-100 dark:bg-yellow-950 [&>div]:bg-yellow-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-emerald-600" />
                  Bugünkü Öğünler
                </CardTitle>
                <CardDescription>Bugün tükettiğiniz öğünlerin özeti.</CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild className="text-emerald-600">
                <Link href="/patient/meals">Tümünü Gör</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Kahvaltı', time: '08:30', cals: '450 kcal', items: 'Yulaf ezmesi, muz, fıstık ezmesi', icon: <Apple className="w-4 h-4" /> },
                  { name: 'Öğle Yemeği', time: '13:00', cals: '600 kcal', items: 'Izgara tavuk salata, zeytinyağlı', icon: <Utensils className="w-4 h-4" /> },
                ].map((meal, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                    <div className="p-3 bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full">
                      {meal.icon}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-sm">{meal.name}</p>
                        <span className="text-xs text-muted-foreground">{meal.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{meal.items}</p>
                      <Badge variant="secondary" className="mt-2 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400">
                        {meal.cals}
                      </Badge>
                    </div>
                  </div>
                ))}
                
                <div className="flex items-center justify-center p-4 border-2 border-dashed border-emerald-100 dark:border-emerald-900/30 rounded-lg">
                  <Button variant="ghost" className="text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-900/30 dark:text-emerald-400" asChild>
                    <Link href="/patient/meals"><Plus className="w-4 h-4 mr-2" /> Ara Öğün Ekle</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Content: Dietitian Notes & Tasks */}
        <div className="space-y-6 lg:col-span-3">
          <Card className="border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
                <Info className="h-5 w-5" />
                Diyetisyen Notu
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 items-start">
                <Avatar className="border-2 border-emerald-200">
                  <AvatarImage src="https://i.pravatar.cc/150?u=dietitian" />
                  <AvatarFallback>Dr</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                    "Harika gidiyorsun! Dünkü su tüketimin biraz düşüktü, bugün 2.5 litreyi tamamlamaya özen gösterelim. Akşam yemeğinde karbonhidratı kısıp protein ağırlıklı beslenmeyi unutma."
                  </p>
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">- Dyt. Ayşe Yılmaz</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md border-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-indigo-500" />
                Günlük Görevler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  { text: "Sabah aç karnına 1 bardak ılık limonlu su", done: true },
                  { text: "Öğle yemeği sonrası 15 dk yürüyüş", done: true },
                  { text: "Akşam 8'den sonra bir şey yeme", done: false },
                  { text: "Günde 2 fincan yeşil çay tüket", done: false },
                ].map((task, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${task.done ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300 dark:border-gray-600'}`}>
                      {task.done && <CheckCircle2 className="w-3 h-3 text-white" />}
                    </div>
                    <span className={`text-sm ${task.done ? 'text-muted-foreground line-through' : 'font-medium'}`}>
                      {task.text}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md border-none bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-white">
                <CalendarDays className="h-5 w-5" />
                Yaklaşan Randevu
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-1">
                <div className="text-2xl font-bold">12 Mayıs</div>
                <div className="text-indigo-100 flex items-center justify-between">
                  <span>Çarşamba, 14:30</span>
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">Online</Badge>
                </div>
                <Button variant="secondary" className="w-full mt-4 bg-white text-indigo-600 hover:bg-indigo-50 font-semibold shadow-sm">
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
