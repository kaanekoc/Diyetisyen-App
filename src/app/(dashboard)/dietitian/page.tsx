import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserPlus, Calendar, Activity, Bell, TrendingUp, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function DietitianDashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Hoş Geldiniz, Diyetisyen Hanım/Bey</h2>
          <p className="text-muted-foreground mt-1">İşte bugün klinikteki genel durumunuz ve özet verileriniz.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="relative border-slate-200 dark:border-slate-800">
            <Bell className="w-4 h-4 mr-2" /> Bildirimler
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <Calendar className="w-4 h-4 mr-2" /> Hızlı Randevu Ver
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-card border-blue-100 dark:border-blue-900/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-blue-800 dark:text-blue-300">Toplam Danışan</CardTitle>
            <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
              <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-950 dark:text-blue-100">142</div>
            <p className="text-xs font-medium text-emerald-600 mt-1 flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" /> %12 (Geçen aya göre)
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/20 dark:to-card border-emerald-100 dark:border-emerald-900/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">Yeni Kayıtlar</CardTitle>
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg">
              <UserPlus className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-emerald-950 dark:text-emerald-100">12</div>
            <p className="text-xs font-medium text-emerald-600/70 dark:text-emerald-400/70 mt-1">
              Son 30 gün içinde eklendi
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-card border-orange-100 dark:border-orange-900/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-orange-800 dark:text-orange-300">Bugünkü Görüşmeler</CardTitle>
            <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
              <Calendar className="h-4 w-4 text-orange-600 dark:text-orange-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-950 dark:text-orange-100">8</div>
            <p className="text-xs font-medium text-orange-600/70 dark:text-orange-400/70 mt-1">
              3 Onaylı, 2 Bekleyen
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/20 dark:to-card border-indigo-100 dark:border-indigo-900/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-indigo-800 dark:text-indigo-300">Genel Uyum Oranı</CardTitle>
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
              <Activity className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-indigo-950 dark:text-indigo-100">%84</div>
            <p className="text-xs font-medium text-indigo-600/70 dark:text-indigo-400/70 mt-1">
              Danışanların programa uyumu
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-slate-100 dark:border-slate-800 shadow-sm">
          <CardHeader className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20">
            <CardTitle className="text-lg">Bugünün Randevu Takvimi</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { time: "10:30", name: "Ayşe Yılmaz", type: "İlk Görüşme", status: "Onaylandı", color: "emerald" },
                { time: "13:15", name: "Mehmet Kaya", type: "Kilo Kontrol", status: "Bekliyor", color: "orange" },
                { time: "15:00", name: "Elif Demir", type: "Ölçüm", status: "Onaylandı", color: "emerald" },
                { time: "16:45", name: "Burak Şahin", type: "Diyet Değişimi", status: "Onaylandı", color: "emerald" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="font-bold text-lg w-16 text-slate-400 flex flex-col items-center">
                      <Clock className="w-4 h-4 mb-1" />
                      <span className="text-sm">{item.time}</span>
                    </div>
                    <div className="w-px h-10 bg-slate-200 dark:bg-slate-800 mx-2"></div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-slate-100">{item.name}</div>
                      <div className="text-sm text-muted-foreground">{item.type}</div>
                    </div>
                  </div>
                  <div>
                    <Badge variant="outline" className={
                      item.color === 'emerald' 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800'
                        : 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800'
                    }>
                      {item.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 text-center">
              <Button variant="link" className="text-indigo-600 dark:text-indigo-400">Tüm Randevuları Gör</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-100 dark:border-slate-800 shadow-sm bg-indigo-50/50 dark:bg-indigo-950/10">
          <CardHeader className="border-b border-indigo-100 dark:border-indigo-900/30">
            <CardTitle className="text-lg flex items-center">
              <Bell className="w-5 h-5 mr-2 text-indigo-600" /> Kritik Bildirimler
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="bg-white dark:bg-card p-3 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm border-l-4 border-l-rose-500">
              <div className="text-sm font-semibold mb-1 text-rose-700 dark:text-rose-400">Su Tüketimi Düşük</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Burak Şahin son 3 gündür hedeflenen su miktarının sadece %40'ına ulaştı.</div>
            </div>
            
            <div className="bg-white dark:bg-card p-3 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm border-l-4 border-l-orange-500">
              <div className="text-sm font-semibold mb-1 text-orange-700 dark:text-orange-400">Onay Bekleyen Randevu</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Mehmet Kaya yarın 13:15 için randevu talebi gönderdi.</div>
            </div>

            <div className="bg-white dark:bg-card p-3 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm border-l-4 border-l-emerald-500">
              <div className="text-sm font-semibold mb-1 text-emerald-700 dark:text-emerald-400">Yeni Tahlil Sonuçları</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Elif Demir sisteme yeni kan tahlillerini yükledi. İncelemeye hazır.</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
