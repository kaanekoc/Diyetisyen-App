"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, User, CheckCircle, XCircle, Settings, ChevronLeft, ChevronRight, Bell, CalendarDays } from "lucide-react";
import { format, addDays } from "date-fns";
import { tr } from "date-fns/locale";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AppointmentsPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [newApptTime, setNewApptTime] = useState("");
  const [newApptPatient, setNewApptPatient] = useState("Ayşe Yılmaz");
  
  const [appointments, setAppointments] = useState([
    { id: 1, date: new Date().getDate(), time: "09:00", patient: "Ayşe Yılmaz", status: "confirmed", type: "İlk Görüşme", avatar: "AY" },
    { id: 2, date: new Date().getDate(), time: "10:30", patient: "Mehmet Kaya", status: "pending", type: "Kontrol", avatar: "MK" },
    { id: 3, date: new Date().getDate() + 1, time: "13:15", patient: "Elif Demir", status: "confirmed", type: "Ölçüm", avatar: "ED" },
    { id: 4, date: new Date().getDate(), time: "15:00", patient: "Burak Şahin", status: "cancelled", type: "Kontrol", avatar: "BŞ" },
  ]);

  const activeAppointments = appointments.filter(a => a.date === selectedDate.getDate()).sort((a,b) => a.time.localeCompare(b.time));

  const handleAddAppointment = () => {
    if(!newApptTime) return;
    const newAppointment = {
      id: Date.now(),
      date: selectedDate.getDate(),
      time: newApptTime,
      patient: newApptPatient,
      status: "pending",
      type: "Yeni Görüşme",
      avatar: newApptPatient.substring(0, 2).toUpperCase()
    };
    setAppointments([...appointments, newAppointment]);
  };

  const handleEditStatus = (id: number, status: string) => {
    setAppointments(appointments.map(a => 
      a.id === id ? { ...a, status } : a
    ));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Takvim ve Randevular</h2>
          <p className="text-muted-foreground mt-1">Görüşmelerinizi planlayın, çalışma saatlerinizi yönetin.</p>
        </div>
        
        <div className="flex gap-2">
          {/* Takvim Ayarları Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 dark:border-indigo-800 dark:text-indigo-400 dark:hover:bg-indigo-900/50 shadow-sm">
                <Settings className="mr-2 h-4 w-4" /> Çalışma Saatleri
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Takvim ve Çalışma Saatleri</DialogTitle>
                <DialogDescription>Müsait olduğunuz günleri ve saatleri belirleyin.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                {['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'].map((day) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="text-sm font-medium w-24">{day}</span>
                    <div className="flex items-center gap-2">
                      <Input type="time" defaultValue="09:00" className="w-24 h-8" />
                      <span>-</span>
                      <Input type="time" defaultValue="17:00" className="w-24 h-8" />
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between text-muted-foreground opacity-50">
                  <span className="text-sm font-medium w-24">Cumartesi</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Kapalı</span>
                  </div>
                </div>
                <DialogClose asChild>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 mt-4">Ayarları Kaydet</Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>

          {/* Yeni Randevu Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white border-none shadow-md">
                <Plus className="mr-2 h-4 w-4" /> Yeni Randevu
              </Button>
            </DialogTrigger>
            <DialogContent>
               <DialogHeader>
                  <DialogTitle>Yeni Randevu Oluştur</DialogTitle>
                  <DialogDescription>Seçili gün ({format(selectedDate, "d MMMM")}) için randevu planlayın.</DialogDescription>
               </DialogHeader>
               <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Danışan Seçin</label>
                    <select 
                      className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm"
                      value={newApptPatient}
                      onChange={(e) => setNewApptPatient(e.target.value)}
                    >
                      <option>Ayşe Yılmaz</option>
                      <option>Mehmet Kaya</option>
                      <option>Elif Demir</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Saat</label>
                    <Input type="time" value={newApptTime} onChange={(e) => setNewApptTime(e.target.value)} />
                  </div>
                  <DialogClose asChild>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700" onClick={handleAddAppointment}>
                      Randevuyu Kaydet
                    </Button>
                  </DialogClose>
               </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid xl:grid-cols-12 gap-8">
        {/* Left Area: Calendar Navigator */}
        <div className="xl:col-span-4 space-y-6">
          <Card className="border-none shadow-md overflow-hidden bg-white dark:bg-card">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white flex justify-between items-center">
              <h3 className="font-semibold text-lg flex items-center">
                <CalendarDays className="w-5 h-5 mr-2" />
                {format(selectedDate, "MMMM yyyy", { locale: tr })}
              </h3>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold mb-3 text-slate-500 uppercase tracking-wider">
                <div>Pt</div><div>Sa</div><div>Ça</div><div>Pe</div><div>Cu</div><div>Ct</div><div>Pz</div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {/* Blank days for calendar alignment (mocked) */}
                <div className="p-2 opacity-0"></div>
                <div className="p-2 opacity-0"></div>
                
                {/* Real Days */}
                {Array.from({ length: 31 }).map((_, i) => {
                  const hasAppt = appointments.some(a => a.date === i + 1 && a.status === 'confirmed');
                  const hasPending = appointments.some(a => a.date === i + 1 && a.status === 'pending');
                  const isSelected = i + 1 === selectedDate.getDate();
                  const isToday = i + 1 === new Date().getDate();

                  return (
                    <div 
                      key={i} 
                      className={`h-10 w-full flex items-center justify-center rounded-full cursor-pointer transition-all relative
                        ${isSelected ? "bg-indigo-600 text-white font-bold shadow-md transform scale-105" : "hover:bg-indigo-50 dark:hover:bg-indigo-900/50"}
                        ${isToday && !isSelected ? "text-indigo-600 dark:text-indigo-400 font-bold" : ""}
                      `}
                      onClick={() => setSelectedDate(new Date(new Date().getFullYear(), new Date().getMonth(), i + 1))}
                    >
                     {i + 1}
                     <div className="absolute bottom-1 flex gap-0.5">
                       {hasAppt && <span className={`w-1 h-1 rounded-full ${isSelected ? "bg-white" : "bg-emerald-500"}`} />}
                       {hasPending && <span className={`w-1 h-1 rounded-full ${isSelected ? "bg-indigo-200" : "bg-orange-400"}`} />}
                     </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-100 dark:border-indigo-900/50">
            <CardContent className="p-4 flex items-start gap-4">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full shrink-0">
                <Bell className="h-5 w-5 text-indigo-700 dark:text-indigo-300" />
              </div>
              <div>
                <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-1">Onay Bekleyenler</h4>
                <p className="text-sm text-indigo-800/80 dark:text-indigo-300/80">
                  Sisteme düşen <strong>2 adet</strong> yeni randevu talebi bulunuyor. Lütfen gün içinde onaylayın veya alternatif saat önerin.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Area: Daily Schedule */}
        <div className="xl:col-span-8 space-y-4">
          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-xl font-bold flex items-center gap-2">
              {format(selectedDate, "d MMMM yyyy, EEEE", { locale: tr })}
              {activeAppointments.length > 0 && (
                <Badge variant="secondary" className="ml-2 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300">
                  {activeAppointments.length} Görüşme
                </Badge>
              )}
            </h3>
            
            <Tabs defaultValue="all" className="w-[300px]">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">Tümü</TabsTrigger>
                <TabsTrigger value="confirmed">Onaylı</TabsTrigger>
                <TabsTrigger value="pending">Bekleyen</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="space-y-3 pt-2">
            {activeAppointments.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 dark:bg-card/50 rounded-xl border border-dashed border-slate-200 dark:border-slate-800">
                <CalendarIcon className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
                <p className="text-muted-foreground font-medium">Bu tarihte randevu bulunmuyor.</p>
                <p className="text-sm text-muted-foreground/70 mt-1">Yeni bir görüşme planlamak için "Yeni Randevu" butonunu kullanın.</p>
              </div>
            ) : (
              activeAppointments.map((apt) => (
                <div key={apt.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-card hover:shadow-md transition-all gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold p-3 rounded-xl flex flex-col items-center justify-center w-20 shrink-0">
                      <Clock className="h-4 w-4 mb-1 text-indigo-500" />
                      <span className="text-sm">{apt.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 font-bold flex items-center justify-center shrink-0">
                        {apt.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-base text-slate-900 dark:text-slate-100">
                          {apt.patient}
                        </div>
                        <div className="text-sm text-slate-500 flex items-center mt-0.5">
                          <User className="w-3 h-3 mr-1" /> {apt.type}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-0 border-slate-100 dark:border-slate-800">
                    <div className="w-28 flex justify-start">
                      {apt.status === "confirmed" && <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800"><CheckCircle className="h-3 w-3 mr-1.5" /> Onaylandı</Badge>}
                      {apt.status === "pending" && <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800"><Clock className="h-3 w-3 mr-1.5" /> Bekliyor</Badge>}
                      {apt.status === "cancelled" && <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-400 dark:border-rose-800"><XCircle className="h-3 w-3 mr-1.5" /> İptal Edildi</Badge>}
                    </div>
                    
                    <div className="flex gap-2 shrink-0">
                      {apt.status === "pending" && (
                        <>
                          <Button size="sm" variant="outline" className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:hover:bg-emerald-900/40" onClick={() => handleEditStatus(apt.id, 'confirmed')}>
                            <CheckCircle className="w-4 h-4 mr-1" /> Onayla
                          </Button>
                          <Button size="sm" variant="outline" className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 border-rose-200 dark:hover:bg-rose-900/20" onClick={() => handleEditStatus(apt.id, 'cancelled')}>
                            Reddet
                          </Button>
                        </>
                      )}
                      {apt.status === "confirmed" && (
                        <Button size="sm" variant="outline" className="text-rose-600 hover:bg-rose-50 border-rose-200" onClick={() => handleEditStatus(apt.id, 'cancelled')}>İptal Et</Button>
                      )}
                      {apt.status === "cancelled" && (
                        <Button size="sm" variant="outline" onClick={() => handleEditStatus(apt.id, 'confirmed')}>Geri Al</Button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
