import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  IconUsers, 
  IconUserPlus, 
  IconCalendarEvent, 
  IconActivityHeartbeat, 
  IconBellRinging, 
  IconTrendingUp, 
  IconClockHour4,
  IconChartPie,
  IconChevronRight
} from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function DietitianDashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 slide-in-from-bottom-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white/50 dark:bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl shadow-slate-200/20 dark:shadow-none backdrop-blur-xl">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            Hoş Geldiniz, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Diyetisyen Hanım</span> 👋
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">İşte bugün klinikteki genel durumunuz ve kritik özet verileriniz.</p>
        </div>
        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <Button variant="outline" className="relative border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-2xl h-12 px-5 font-semibold transition-all">
            <IconBellRinging stroke={1.5} className="w-5 h-5 mr-2 text-indigo-500" /> 
            Bildirimler
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-500 border-2 border-white dark:border-slate-800"></span>
            </span>
          </Button>
          <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg shadow-indigo-500/25 h-12 px-6 rounded-2xl font-bold transition-all hover:scale-105">
            <IconCalendarEvent stroke={2} className="w-5 h-5 mr-2" /> Hızlı Randevu Ver
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-0 shadow-xl shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-300 bg-white dark:bg-slate-900 ring-1 ring-slate-100 dark:ring-slate-800 rounded-3xl overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10 p-6">
            <CardTitle className="text-sm font-bold text-slate-500 dark:text-slate-400">Toplam Danışan</CardTitle>
            <div className="p-2.5 bg-blue-50 dark:bg-blue-500/10 rounded-2xl text-blue-600 dark:text-blue-400">
              <IconUsers stroke={2} className="h-5 w-5" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10 px-6 pb-6">
            <div className="text-4xl font-black text-slate-800 dark:text-white tracking-tight">142</div>
            <p className="text-sm font-semibold text-emerald-500 mt-2 flex items-center bg-emerald-50 dark:bg-emerald-500/10 w-max px-2 py-1 rounded-lg">
              <IconTrendingUp stroke={2} className="w-4 h-4 mr-1.5" /> %12 (Geçen aya göre)
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-xl shadow-emerald-500/5 hover:shadow-emerald-500/10 transition-all duration-300 bg-white dark:bg-slate-900 ring-1 ring-slate-100 dark:ring-slate-800 rounded-3xl overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10 p-6">
            <CardTitle className="text-sm font-bold text-slate-500 dark:text-slate-400">Yeni Kayıtlar</CardTitle>
            <div className="p-2.5 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl text-emerald-600 dark:text-emerald-400">
              <IconUserPlus stroke={2} className="h-5 w-5" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10 px-6 pb-6">
            <div className="text-4xl font-black text-slate-800 dark:text-white tracking-tight">12</div>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2">
              Son 30 gün içinde eklendi
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl shadow-orange-500/5 hover:shadow-orange-500/10 transition-all duration-300 bg-white dark:bg-slate-900 ring-1 ring-slate-100 dark:ring-slate-800 rounded-3xl overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10 p-6">
            <CardTitle className="text-sm font-bold text-slate-500 dark:text-slate-400">Bugünkü Görüşmeler</CardTitle>
            <div className="p-2.5 bg-orange-50 dark:bg-orange-500/10 rounded-2xl text-orange-600 dark:text-orange-400">
              <IconCalendarEvent stroke={2} className="h-5 w-5" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10 px-6 pb-6">
            <div className="text-4xl font-black text-slate-800 dark:text-white tracking-tight">8</div>
            <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 mt-2 flex items-center bg-orange-50 dark:bg-orange-500/10 w-max px-2 py-1 rounded-lg">
              3 Onaylı, 2 Bekleyen
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl shadow-indigo-500/5 hover:shadow-indigo-500/10 transition-all duration-300 bg-white dark:bg-slate-900 ring-1 ring-slate-100 dark:ring-slate-800 rounded-3xl overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10 p-6">
            <CardTitle className="text-sm font-bold text-slate-500 dark:text-slate-400">Genel Uyum Oranı</CardTitle>
            <div className="p-2.5 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl text-indigo-600 dark:text-indigo-400">
              <IconActivityHeartbeat stroke={2} className="h-5 w-5" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10 px-6 pb-6">
            <div className="text-4xl font-black text-slate-800 dark:text-white tracking-tight">%84</div>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2">
              Danışanların diyete uyumu
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Schedule */}
        <Card className="lg:col-span-2 border-0 shadow-xl shadow-slate-200/40 dark:shadow-none bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl overflow-hidden">
          <CardHeader className="bg-slate-50/50 dark:bg-slate-800/20 border-b border-slate-100 dark:border-slate-800/50 p-6 sm:p-8 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-xl font-bold text-slate-800 dark:text-white">Bugünün Randevu Takvimi</CardTitle>
              <CardDescription className="text-slate-500 font-medium mt-1">Görüşme planınızı buradan takip edin.</CardDescription>
            </div>
            <Button variant="ghost" className="text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 font-bold rounded-xl hidden sm:flex">
              Tüm Takvim <IconChevronRight stroke={2} className="w-4 h-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {[
                { time: "10:30", name: "Ayşe Yılmaz", type: "İlk Görüşme", status: "Onaylandı", color: "emerald", duration: "45 dk" },
                { time: "13:15", name: "Mehmet Kaya", type: "Kilo Kontrol", status: "Bekliyor", color: "orange", duration: "30 dk" },
                { time: "15:00", name: "Elif Demir", type: "Ölçüm", status: "Onaylandı", color: "emerald", duration: "15 dk" },
                { time: "16:45", name: "Burak Şahin", type: "Diyet Değişimi", status: "Onaylandı", color: "emerald", duration: "30 dk" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-6 sm:px-8 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group">
                  <div className="flex items-center gap-6">
                    <div className="font-bold text-lg w-16 text-slate-500 flex flex-col items-center">
                      <span className="text-slate-800 dark:text-white text-xl">{item.time}</span>
                      <span className="text-xs text-slate-400 font-semibold">{item.duration}</span>
                    </div>
                    <div className="w-1 h-12 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:bg-indigo-400 transition-colors"></div>
                    <div>
                      <div className="font-bold text-lg text-slate-900 dark:text-slate-100">{item.name}</div>
                      <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
                        <IconChartPie stroke={2} className="w-4 h-4 text-slate-400" />
                        {item.type}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Badge variant="outline" className={`px-3 py-1.5 rounded-xl font-bold text-xs border ${
                      item.color === 'emerald' 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800/50'
                        : 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800/50'
                    }`}>
                      {item.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 sm:hidden border-t border-slate-100 dark:border-slate-800/50">
              <Button variant="ghost" className="w-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 font-bold rounded-xl">
                Tüm Takvim <IconChevronRight stroke={2} className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications Sidebar */}
        <Card className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl overflow-hidden flex flex-col">
          <CardHeader className="bg-white/40 dark:bg-slate-900/40 border-b border-indigo-100 dark:border-indigo-900/30 p-6 sm:p-8 backdrop-blur-md">
            <CardTitle className="text-xl font-bold flex items-center text-slate-800 dark:text-white">
              <IconBellRinging stroke={2} className="w-6 h-6 mr-2.5 text-indigo-500" /> 
              Kritik Uyarılar
            </CardTitle>
            <CardDescription className="text-slate-500 font-medium mt-1">İlgilenmeniz gereken danışan durumları.</CardDescription>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 space-y-5 flex-1">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-rose-100 dark:border-rose-900/30 shadow-md shadow-rose-500/5 relative overflow-hidden group cursor-pointer hover:border-rose-200 dark:hover:border-rose-800 transition-colors">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-rose-500 rounded-l-2xl"></div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-rose-50 dark:bg-rose-500/10 rounded-xl mt-0.5">
                  <IconActivityHeartbeat stroke={2} className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <div className="text-sm font-bold mb-1 text-slate-800 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">Su Tüketimi Düşük</div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                    <span className="font-bold text-slate-700 dark:text-slate-300">Burak Şahin</span> son 3 gündür hedeflenen su miktarının sadece %40'ına ulaştı.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-orange-100 dark:border-orange-900/30 shadow-md shadow-orange-500/5 relative overflow-hidden group cursor-pointer hover:border-orange-200 dark:hover:border-orange-800 transition-colors">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-400 rounded-l-2xl"></div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-50 dark:bg-orange-500/10 rounded-xl mt-0.5">
                  <IconCalendarEvent stroke={2} className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <div className="text-sm font-bold mb-1 text-slate-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">Onay Bekleyen Randevu</div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                    <span className="font-bold text-slate-700 dark:text-slate-300">Mehmet Kaya</span> yarın 13:15 için randevu talebi gönderdi.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 shadow-md shadow-emerald-500/5 relative overflow-hidden group cursor-pointer hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500 rounded-l-2xl"></div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl mt-0.5">
                  <IconChartPie stroke={2} className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <div className="text-sm font-bold mb-1 text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Yeni Tahlil Sonuçları</div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                    <span className="font-bold text-slate-700 dark:text-slate-300">Elif Demir</span> sisteme yeni kan tahlillerini yükledi. İncelemeye hazır.
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
