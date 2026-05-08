"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  IconCalendarEvent, 
  IconClock, 
  IconUser, 
  IconCircleCheck, 
  IconCircleX, 
  IconSettings, 
  IconChevronLeft, 
  IconChevronRight, 
  IconBellRinging, 
  IconPlus 
} from "@tabler/icons-react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <div className="space-y-6 animate-in fade-in duration-700 slide-in-from-bottom-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white/50 dark:bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl shadow-slate-200/20 dark:shadow-none backdrop-blur-xl">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            Takvim ve Randevular
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Görüşmelerinizi planlayın, çalışma saatlerinizi yönetin.</p>
        </div>
        
        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          {/* Takvim Ayarları Dialog */}
          <Dialog>
            <DialogTrigger render={
              <Button variant="outline" className="h-12 px-5 rounded-2xl font-bold border-indigo-200 text-indigo-700 hover:bg-indigo-50 dark:border-indigo-800 dark:text-indigo-400 dark:hover:bg-indigo-900/50 shadow-sm transition-colors" />
            }>
              <IconSettings stroke={2} className="mr-2 h-5 w-5" /> Çalışma Saatleri
            </DialogTrigger>
            <DialogContent className="sm:max-w-md p-6 rounded-3xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-slate-900 dark:text-white">Takvim ve Çalışma Saatleri</DialogTitle>
                <DialogDescription className="text-slate-500 dark:text-slate-400 mt-1">Müsait olduğunuz günleri ve saatleri belirleyin.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                {['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'].map((day) => (
                  <div key={day} className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300 w-24">{day}</span>
                    <div className="flex items-center gap-2">
                      <Input type="time" defaultValue="09:00" className="w-24 h-9 rounded-lg border-slate-200 dark:border-slate-700" />
                      <span className="text-slate-400">-</span>
                      <Input type="time" defaultValue="17:00" className="w-24 h-9 rounded-lg border-slate-200 dark:border-slate-700" />
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between p-3 rounded-xl opacity-50">
                  <span className="text-sm font-bold text-slate-500 w-24">Cumartesi</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-bold">Kapalı</Badge>
                  </div>
                </div>
                <DialogClose render={<Button className="w-full h-12 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 mt-4 text-white" />}>
                  Ayarları Kaydet
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>

          {/* Yeni Randevu Dialog */}
          <Dialog>
            <DialogTrigger render={
              <Button className="h-12 px-6 rounded-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 border-none" />
            }>
              <IconPlus stroke={2} className="mr-2 h-5 w-5" /> Yeni Randevu
            </DialogTrigger>
            <DialogContent className="sm:max-w-md p-6 rounded-3xl">
               <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-slate-900 dark:text-white">Yeni Randevu Oluştur</DialogTitle>
                  <DialogDescription className="text-slate-500 mt-1">Seçili gün ({format(selectedDate, "d MMMM")}) için randevu planlayın.</DialogDescription>
               </DialogHeader>
               <div className="space-y-5 py-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Danışan Seçin</label>
                    <select 
                      className="w-full h-12 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-sm font-semibold focus:ring-2 focus:ring-indigo-500 outline-none"
                      value={newApptPatient}
                      onChange={(e) => setNewApptPatient(e.target.value)}
                    >
                      <option>Ayşe Yılmaz</option>
                      <option>Mehmet Kaya</option>
                      <option>Elif Demir</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Saat</label>
                    <Input type="time" className="h-12 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" value={newApptTime} onChange={(e) => setNewApptTime(e.target.value)} />
                  </div>
                  <DialogClose render={<Button className="w-full h-12 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 text-white" onClick={handleAddAppointment} />}>
                    Randevuyu Kaydet
                  </DialogClose>
               </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid xl:grid-cols-12 gap-8">
        {/* Left Area: Calendar Navigator */}
        <div className="xl:col-span-4 space-y-6">
          <Card className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none overflow-hidden bg-white dark:bg-slate-900 rounded-3xl">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 text-white flex justify-between items-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -ml-10 -mt-10"></div>
              <h3 className="font-bold text-xl flex items-center relative z-10">
                <IconCalendarEvent stroke={2} className="w-6 h-6 mr-2.5" />
                {format(selectedDate, "MMMM yyyy", { locale: tr })}
              </h3>
              <div className="flex gap-1 relative z-10">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl text-white hover:bg-white/20 transition-colors">
                  <IconChevronLeft stroke={2} className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl text-white hover:bg-white/20 transition-colors">
                  <IconChevronRight stroke={2} className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold mb-4 text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                <div>Pt</div><div>Sa</div><div>Ça</div><div>Pe</div><div>Cu</div><div>Ct</div><div>Pz</div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-sm font-semibold">
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
                      className={`h-11 w-full flex items-center justify-center rounded-xl cursor-pointer transition-all relative
                        ${isSelected ? "bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/30 transform scale-105" : "hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"}
                        ${isToday && !isSelected ? "text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/20" : ""}
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

          <Card className="border-0 shadow-md bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-slate-900/50 border border-indigo-100 dark:border-indigo-900/50 rounded-3xl">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl shrink-0">
                <IconBellRinging stroke={2} className="h-6 w-6 text-indigo-700 dark:text-indigo-400" />
              </div>
              <div>
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-1.5">Onay Bekleyenler</h4>
                <p className="text-sm font-medium text-indigo-800/80 dark:text-indigo-300/80 leading-relaxed">
                  Sisteme düşen <strong>2 adet</strong> yeni randevu talebi bulunuyor. Lütfen gün içinde onaylayın veya alternatif saat önerin.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Area: Daily Schedule */}
        <div className="xl:col-span-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 gap-4">
            <h3 className="text-2xl font-black text-slate-800 dark:text-white flex items-center gap-2">
              {format(selectedDate, "d MMMM yyyy, EEEE", { locale: tr })}
              {activeAppointments.length > 0 && (
                <Badge variant="secondary" className="ml-2 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 font-bold px-3 py-1 text-sm rounded-lg border border-indigo-100 dark:border-indigo-800/50">
                  {activeAppointments.length} Görüşme
                </Badge>
              )}
            </h3>
            
            <Tabs defaultValue="all" className="w-full sm:w-[320px]">
              <TabsList className="grid w-full grid-cols-3 h-12 bg-slate-100 dark:bg-slate-800/80 rounded-xl p-1.5">
                <TabsTrigger value="all" className="rounded-lg font-bold">Tümü</TabsTrigger>
                <TabsTrigger value="confirmed" className="rounded-lg font-bold">Onaylı</TabsTrigger>
                <TabsTrigger value="pending" className="rounded-lg font-bold">Bekleyen</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="space-y-4">
            {activeAppointments.length === 0 ? (
              <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800">
                <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <IconCalendarEvent stroke={1.5} className="w-10 h-10 text-slate-400 dark:text-slate-500" />
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300 font-bold">Bu tarihte randevu bulunmuyor.</p>
                <p className="text-sm font-medium text-slate-500 mt-2">Yeni bir görüşme planlamak için "Yeni Randevu" butonunu kullanın.</p>
              </div>
            ) : (
              activeAppointments.map((apt) => (
                <div key={apt.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl bg-white dark:bg-slate-900 hover:shadow-lg shadow-slate-200/30 dark:hover:shadow-none transition-all gap-5 group">
                  <div className="flex items-center gap-5">
                    <div className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-300 font-black p-3 rounded-xl flex flex-col items-center justify-center w-24 h-24 shrink-0 transition-colors group-hover:border-indigo-200 dark:group-hover:border-indigo-800">
                      <IconClock stroke={2} className="h-5 w-5 mb-1.5 text-indigo-500" />
                      <span className="text-lg">{apt.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 text-indigo-700 dark:text-indigo-400 font-bold flex items-center justify-center shrink-0 border-2 border-white dark:border-slate-800 shadow-sm">
                        {apt.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-lg text-slate-900 dark:text-slate-100">
                          {apt.patient}
                        </div>
                        <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 flex items-center mt-1">
                          <IconUser stroke={2} className="w-4 h-4 mr-1.5 text-slate-400" /> {apt.type}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto mt-2 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-0 border-slate-100 dark:border-slate-800">
                    <div className="w-32 flex justify-start">
                      {apt.status === "confirmed" && <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800 px-3 py-1.5 font-bold"><IconCircleCheck stroke={2} className="h-4 w-4 mr-1.5" /> Onaylandı</Badge>}
                      {apt.status === "pending" && <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800 px-3 py-1.5 font-bold"><IconClock stroke={2} className="h-4 w-4 mr-1.5" /> Bekliyor</Badge>}
                      {apt.status === "cancelled" && <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-400 dark:border-rose-800 px-3 py-1.5 font-bold"><IconCircleX stroke={2} className="h-4 w-4 mr-1.5" /> İptal Edildi</Badge>}
                    </div>
                    
                    <div className="flex gap-2 shrink-0">
                      {apt.status === "pending" && (
                        <>
                          <Button size="sm" variant="outline" className="h-10 px-4 rounded-xl font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:hover:bg-emerald-900/40 transition-colors" onClick={() => handleEditStatus(apt.id, 'confirmed')}>
                            <IconCircleCheck stroke={2} className="w-5 h-5 mr-1" /> Onayla
                          </Button>
                          <Button size="sm" variant="outline" className="h-10 px-4 rounded-xl font-bold text-rose-600 hover:text-rose-700 hover:bg-rose-50 border-rose-200 dark:hover:bg-rose-900/20 transition-colors" onClick={() => handleEditStatus(apt.id, 'cancelled')}>
                            Reddet
                          </Button>
                        </>
                      )}
                      {apt.status === "confirmed" && (
                        <Button size="sm" variant="outline" className="h-10 px-4 rounded-xl font-bold text-rose-600 hover:bg-rose-50 border-rose-200 transition-colors" onClick={() => handleEditStatus(apt.id, 'cancelled')}>İptal Et</Button>
                      )}
                      {apt.status === "cancelled" && (
                        <Button size="sm" variant="outline" className="h-10 px-4 rounded-xl font-bold transition-colors" onClick={() => handleEditStatus(apt.id, 'confirmed')}>Geri Al</Button>
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
