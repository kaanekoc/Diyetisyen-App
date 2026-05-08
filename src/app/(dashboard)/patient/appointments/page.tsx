"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, Video, MapPin, CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PatientAppointmentsPage() {
  const [selectedDay, setSelectedDay] = useState<number | null>(15);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const upcomingAppointments = [
    {
      id: 1,
      date: "12 Mart 2026, Perşembe",
      time: "14:30",
      type: "Online Görüşme",
      doctor: "Dyt. Ayşe Yılmaz",
      status: "Onaylandı",
      link: "meet.google.com/abc-defg-hij"
    }
  ];

  const availableDays = [14, 15, 16, 17, 18, 21, 22]; // Mock available days in current month
  const availableTimes = ["09:00", "09:30", "11:00", "14:30", "15:00", "16:30"];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Randevularım</h2>
        <p className="text-muted-foreground mt-1">Görüşmelerinizi takip edin ve yeni randevu talep edin.</p>
      </div>

      <div className="grid xl:grid-cols-2 gap-8">
        
        {/* Sol Taraf: Yaklaşan Randevular */}
        <div className="space-y-6">
          <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">Yaklaşan Randevular</h3>
          
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map((apt) => (
              <Card key={apt.id} className="border-emerald-200 dark:border-emerald-900/50 shadow-md bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/20 dark:to-card overflow-hidden">
                <div className="h-1.5 w-full bg-emerald-500"></div>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm text-center min-w-[80px]">
                        <div className="text-sm font-semibold text-rose-500">MART</div>
                        <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">{apt.date.split(' ')[0]}</div>
                      </div>
                      <div>
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-400 border-none mb-2">
                          <CheckCircle2 className="w-3 h-3 mr-1" /> {apt.status}
                        </Badge>
                        <div className="font-bold text-lg">{apt.doctor}</div>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Clock className="w-4 h-4 mr-1.5" /> {apt.time}
                          <span className="mx-2">•</span>
                          <Video className="w-4 h-4 mr-1.5" /> {apt.type}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button className="bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto">
                        <Video className="w-4 h-4 mr-2" /> Görüşmeye Katıl
                      </Button>
                      <Button variant="outline" className="w-full sm:w-auto text-rose-600 hover:text-rose-700 hover:bg-rose-50 border-rose-200 dark:hover:bg-rose-900/20">
                        İptal Et
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="border-dashed bg-slate-50 dark:bg-slate-900/50 shadow-none">
              <CardContent className="p-8 text-center text-slate-500 flex flex-col items-center">
                <CalendarDays className="w-12 h-12 mb-3 opacity-20" />
                <p>Yaklaşan bir randevunuz bulunmuyor.</p>
              </CardContent>
            </Card>
          )}

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 rounded-xl p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800 dark:text-amber-400">
              <span className="font-semibold block mb-1">Randevu İptal Politikası</span>
              Randevularınızı son 24 saate kadar iptal edebilirsiniz. Geç iptallerde diyetisyeninizin inisiyatifine bağlı olarak görüşme hakkınız yanabilir.
            </div>
          </div>
        </div>

        {/* Sağ Taraf: Randevu Al */}
        <div className="space-y-6">
          <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">Yeni Randevu Talep Et</h3>
          
          <Card className="border-none shadow-md">
            <CardHeader className="bg-slate-50/50 dark:bg-slate-900/20 border-b border-slate-100 dark:border-slate-800">
              <CardTitle className="text-base flex items-center">
                <CalendarDays className="w-5 h-5 mr-2 text-indigo-500" /> Uygun Günler (Mart 2026)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-7 gap-2 text-center mb-4 text-sm font-semibold text-slate-500">
                <div>Pt</div><div>Sa</div><div>Ça</div><div>Pe</div><div>Cu</div><div>Ct</div><div>Pz</div>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {/* Boşluklar */}
                {Array.from({ length: 6 }).map((_, i) => <div key={`empty-${i}`} />)}
                
                {/* Günler */}
                {Array.from({ length: 31 }).map((_, i) => {
                  const day = i + 1;
                  const isAvailable = availableDays.includes(day);
                  const isSelected = selectedDay === day;
                  const isPast = day < 12; // Mock bugünün tarihi 12

                  return (
                    <div 
                      key={day}
                      onClick={() => !isPast && isAvailable && setSelectedDay(day)}
                      className={`
                        h-10 rounded-full flex items-center justify-center transition-all
                        ${isSelected ? 'bg-indigo-600 text-white font-bold shadow-md transform scale-110' : ''}
                        ${!isSelected && isAvailable && !isPast ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-900/60' : ''}
                        ${(!isAvailable || isPast) && !isSelected ? 'text-slate-300 dark:text-slate-700 cursor-not-allowed' : ''}
                      `}
                    >
                      {day}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {selectedDay && (
            <Card className="border-none shadow-md animate-in slide-in-from-top-4">
              <CardHeader className="bg-slate-50/50 dark:bg-slate-900/20 border-b border-slate-100 dark:border-slate-800">
                <CardTitle className="text-base flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-indigo-500" /> {selectedDay} Mart İçin Uygun Saatler
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {availableTimes.map(time => (
                    <Button 
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      className={selectedTime === time ? "bg-indigo-600 hover:bg-indigo-700" : "border-slate-200 dark:border-slate-800"}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>

                {selectedTime && (
                  <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 animate-in fade-in">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 text-lg">
                      Randevuyu Onayla <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
