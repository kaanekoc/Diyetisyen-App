"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, User, CheckCircle, XCircle } from "lucide-react";
import { format, addDays } from "date-fns";
import { tr } from "date-fns/locale";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function AppointmentsPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [newApptTime, setNewApptTime] = useState("");
  const [newApptPatient, setNewApptPatient] = useState("Ayşe Yılmaz");
  
  const [appointments, setAppointments] = useState([
    { id: 1, date: new Date().getDate(), time: "09:00", patient: "Ayşe Yılmaz", status: "confirmed", type: "İlk Görüşme" },
    { id: 2, date: new Date().getDate(), time: "10:30", patient: "Mehmet Kaya", status: "pending", type: "Kontrol" },
    { id: 3, date: new Date().getDate() + 1, time: "13:15", patient: "Elif Demir", status: "confirmed", type: "Ölçüm" },
    { id: 4, date: new Date().getDate(), time: "15:00", patient: "Burak Şahin", status: "cancelled", type: "Kontrol" },
  ]);

  const activeAppointments = appointments.filter(a => a.date === selectedDate.getDate());

  const handleAddAppointment = () => {
    if(!newApptTime) return;
    const newAppointment = {
      id: Date.now(),
      date: selectedDate.getDate(),
      time: newApptTime,
      patient: newApptPatient,
      status: "pending",
      type: "Yeni Görüşme"
    };
    setAppointments([...appointments, newAppointment]);
  };

  const handleEditStatus = (id: number) => {
    setAppointments(appointments.map(a => 
      a.id === id ? { ...a, status: a.status === 'confirmed' ? 'cancelled' : 'confirmed' } : a
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Randevular ve Takvim</h2>
          <p className="text-muted-foreground">Hastalarınızla olan görüşmelerinizi planlayın.</p>
        </div>
        
        <Dialog>
          <DialogTrigger className={buttonVariants({ className: "bg-indigo-600 hover:bg-indigo-700 text-white border-none" })}>
            <CalendarIcon className="mr-2 h-4 w-4" /> Yeni Randevu
          </DialogTrigger>
          <DialogContent>
             <DialogHeader>
                <DialogTitle>Yeni Randevu Ekle</DialogTitle>
                <DialogDescription>Seçili gün ({format(selectedDate, "d MMMM")}) için randevu ayarlayın.</DialogDescription>
             </DialogHeader>
             <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Hasta</label>
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
                <DialogClose className={buttonVariants({ className: "w-full" })} onClick={handleAddAppointment}>
                  Randevuyu Kaydet
                </DialogClose>
             </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 border rounded-md p-4 bg-card h-fit">
          <h3 className="font-semibold mb-4 text-center">Takvim (Mart)</h3>
          <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium mb-2 text-muted-foreground">
            <div>Pt</div><div>Sa</div><div>Ça</div><div>Pe</div><div>Cu</div><div>Ct</div><div>Pz</div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {/* Simple calendar mock spanning 30 days */}
            {Array.from({ length: 30 }).map((_, i) => {
              const hasAppt = appointments.some(a => a.date === i + 1);
              return (
                <div 
                  key={i} 
                  className={`p-2 rounded-full cursor-pointer transition-colors relative
                    ${i + 1 === selectedDate.getDate() ? "bg-indigo-600 text-white" : "hover:bg-indigo-100 dark:hover:bg-indigo-900"}
                  `}
                  onClick={() => setSelectedDate(new Date(2026, 2, i + 1))}
                >
                 {i + 1}
                 {hasAppt && i + 1 !== selectedDate.getDate() && (
                   <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-500 rounded-full" />
                 )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{format(selectedDate, "d MMMM yyyy, EEEE", { locale: tr })}</span>
                <span className="text-sm text-muted-foreground font-normal">{activeAppointments.length} Randevu</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeAppointments.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">Bu tarihte randevu bulunmuyor.</div>
              ) : (
                activeAppointments.map((apt) => (
                  <div key={apt.id} className="flex items-center justify-between p-4 border dark:border-gray-800 rounded-md bg-card hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 font-bold p-3 rounded-md flex flex-col items-center justify-center w-16">
                        <Clock className="h-4 w-4 mb-1" />
                        <span className="text-xs">{apt.time}</span>
                      </div>
                      <div>
                        <div className="font-semibold flex items-center gap-2">
                          <User className="h-4 w-4 text-slate-400" />
                          {apt.patient}
                        </div>
                        <div className="text-sm text-slate-500">{apt.type}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {apt.status === "confirmed" && <span className="flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-1 rounded-full"><CheckCircle className="h-3 w-3 mr-1" /> Onaylandı</span>}
                      {apt.status === "pending" && <span className="flex items-center text-xs font-semibold text-orange-600 bg-orange-50 dark:bg-orange-950/50 px-2 py-1 rounded-full"><Clock className="h-3 w-3 mr-1" /> Bekliyor</span>}
                      {apt.status === "cancelled" && <span className="flex items-center text-xs font-semibold text-red-600 bg-red-50 dark:bg-red-950/50 px-2 py-1 rounded-full"><XCircle className="h-3 w-3 mr-1" /> İptal</span>}
                      
                      <Button variant="ghost" size="sm" className="ml-2" onClick={() => handleEditStatus(apt.id)}>Durum Değiştir</Button>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
