"use client";

import { useState, Fragment } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from '@headlessui/react';
import { 
  IconCalendarEvent, 
  IconClock, 
  IconVideo, 
  IconCheck, 
  IconChevronRight, 
  IconAlertCircle,
  IconX
} from "@tabler/icons-react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

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

  const availableDays = [14, 15, 16, 17, 18, 21, 22];
  const availableTimes = ["09:00", "09:30", "11:00", "14:30", "15:00", "16:30"];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Randevularım</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Görüşmelerinizi takip edin ve yeni randevu talep edin.</p>
      </div>

      <div className="grid xl:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Sol Taraf: Randevular (Tabs) */}
        <div className="xl:col-span-7 space-y-6">
          <TabGroup>
            <TabList className="flex space-x-2 rounded-2xl bg-slate-200/50 dark:bg-slate-800/50 p-1.5 max-w-sm">
              <Tab
                className="w-full rounded-xl py-2.5 text-sm font-semibold leading-5 transition-all duration-200 focus:outline-none text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-slate-200 data-selected:bg-white data-selected:dark:bg-slate-900 data-selected:text-emerald-600 data-selected:dark:text-emerald-400 data-selected:shadow-sm"
              >
                Yaklaşan Randevular
              </Tab>
              <Tab
                className="w-full rounded-xl py-2.5 text-sm font-semibold leading-5 transition-all duration-200 focus:outline-none text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-slate-200 data-selected:bg-white data-selected:dark:bg-slate-900 data-selected:text-slate-900 data-selected:dark:text-white data-selected:shadow-sm"
              >
                Geçmiş
              </Tab>
            </TabList>
            <TabPanels className="mt-6">
              <TabPanel
                className={classNames(
                  'rounded-xl focus:outline-none focus:ring-0',
                  'ring-white/60 ring-offset-2 ring-offset-emerald-400'
                )}
              >
                {upcomingAppointments.length > 0 ? (
                  upcomingAppointments.map((apt) => (
                    <Card key={apt.id} className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none bg-white dark:bg-slate-900/50 overflow-hidden ring-1 ring-slate-200 dark:ring-slate-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
                      <div className="h-2 w-full bg-gradient-to-r from-emerald-400 to-teal-500"></div>
                      <CardContent className="p-6 sm:p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-700 text-center min-w-[100px] flex flex-col justify-center items-center group-hover:scale-105 transition-transform duration-300">
                              <div className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-1">MART</div>
                              <div className="text-4xl font-black text-slate-800 dark:text-white">{apt.date.split(' ')[0]}</div>
                            </div>
                            <div>
                              <Badge className="bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/50 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20 border-none mb-3 px-3 py-1 text-xs">
                                <IconCheck stroke={2} className="w-3.5 h-3.5 mr-1.5" /> {apt.status}
                              </Badge>
                              <div className="font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white mb-2">{apt.doctor}</div>
                              <div className="flex flex-wrap items-center text-sm font-medium text-slate-500 dark:text-slate-400 gap-y-2">
                                <span className="flex items-center bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                                  <IconClock stroke={1.5} className="w-4 h-4 mr-2 text-indigo-500" /> {apt.time}
                                </span>
                                <span className="mx-3 text-slate-300 dark:text-slate-700">•</span>
                                <span className="flex items-center bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                                  <IconVideo stroke={1.5} className="w-4 h-4 mr-2 text-sky-500" /> {apt.type}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-3 min-w-[140px]">
                            <Button className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 shadow-lg shadow-slate-900/10 w-full sm:w-auto h-11 rounded-xl font-bold">
                              <IconVideo stroke={2} className="w-5 h-5 mr-2" /> Katıl
                            </Button>
                            <Button variant="ghost" className="w-full sm:w-auto h-11 text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-xl font-semibold">
                              İptal Et
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="p-12 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl bg-slate-50/50 dark:bg-slate-900/20">
                    <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">
                      <IconCalendarEvent stroke={1.5} className="w-10 h-10 text-slate-300 dark:text-slate-500" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200 mb-1">Randevu Bulunamadı</h3>
                    <p className="text-slate-500 dark:text-slate-400">Yaklaşan bir randevunuz bulunmuyor.</p>
                  </div>
                )}
              </TabPanel>
              <TabPanel className="rounded-xl p-8 text-center text-slate-500 bg-slate-50 dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800">
                Geçmiş randevu kaydınız bulunmuyor.
              </TabPanel>
            </TabPanels>
          </TabGroup>

          <div className="bg-amber-50 dark:bg-amber-500/10 ring-1 ring-amber-200/50 dark:ring-amber-500/20 rounded-2xl p-5 flex items-start gap-4">
            <div className="bg-amber-100 dark:bg-amber-500/20 p-2 rounded-full shrink-0">
              <IconAlertCircle stroke={2} className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="text-sm text-amber-800 dark:text-amber-300/80 leading-relaxed">
              <span className="font-bold text-amber-900 dark:text-amber-300 block mb-1.5">Randevu İptal Politikası</span>
              Randevularınızı son 24 saate kadar iptal edebilirsiniz. Geç iptallerde diyetisyeninizin inisiyatifine bağlı olarak görüşme hakkınız yanabilir. Lütfen randevu saatlerinize özen gösterin.
            </div>
          </div>
        </div>

        {/* Sağ Taraf: Randevu Al */}
        <div className="xl:col-span-5 space-y-6">
          <h3 className="font-bold text-xl text-slate-800 dark:text-white px-2">Yeni Randevu Al</h3>
          
          <Card className="border-0 shadow-xl shadow-slate-200/30 dark:shadow-none bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl overflow-hidden">
            <CardHeader className="bg-slate-50/50 dark:bg-slate-800/20 border-b border-slate-100 dark:border-slate-800/50 p-6">
              <CardTitle className="text-lg font-bold flex items-center">
                <IconCalendarEvent stroke={1.5} className="w-6 h-6 mr-3 text-indigo-500" />
                Uygun Günler (Mart 2026)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-7 gap-2 text-center mb-6 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <div>Pt</div><div>Sa</div><div>Ça</div><div>Pe</div><div>Cu</div><div>Ct</div><div>Pz</div>
              </div>
              <div className="grid grid-cols-7 gap-x-2 gap-y-3 text-center text-sm font-semibold">
                {/* Boşluklar */}
                {Array.from({ length: 6 }).map((_, i) => <div key={`empty-${i}`} />)}
                
                {/* Günler */}
                {Array.from({ length: 31 }).map((_, i) => {
                  const day = i + 1;
                  const isAvailable = availableDays.includes(day);
                  const isSelected = selectedDay === day;
                  const isPast = day < 12;

                  return (
                    <button 
                      key={day}
                      onClick={() => !isPast && isAvailable && setSelectedDay(day)}
                      disabled={isPast || !isAvailable}
                      className={`
                        h-10 w-full rounded-xl flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500
                        ${isSelected ? 'bg-gradient-to-tr from-emerald-500 to-teal-400 text-white shadow-lg shadow-emerald-500/30 scale-110 ring-2 ring-offset-2 ring-emerald-500 dark:ring-offset-slate-900' : ''}
                        ${!isSelected && isAvailable && !isPast ? 'bg-slate-50 dark:bg-slate-800/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-indigo-500/20 ring-1 ring-slate-200 dark:ring-slate-700' : ''}
                        ${(!isAvailable || isPast) && !isSelected ? 'text-slate-300 dark:text-slate-600 opacity-50 cursor-not-allowed' : ''}
                      `}
                    >
                      {day}
                    </button>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {selectedDay && (
            <Card className="border-0 shadow-xl shadow-slate-200/30 dark:shadow-none bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl overflow-hidden animate-in slide-in-from-top-4 duration-300">
              <CardHeader className="bg-slate-50/50 dark:bg-slate-800/20 border-b border-slate-100 dark:border-slate-800/50 p-6">
                <CardTitle className="text-lg font-bold flex items-center">
                  <IconClock stroke={1.5} className="w-6 h-6 mr-3 text-indigo-500" />
                  {selectedDay} Mart İçin Uygun Saatler
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-3">
                  {availableTimes.map(time => (
                    <button 
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`
                        h-12 rounded-xl text-sm font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500
                        ${selectedTime === time 
                          ? "bg-slate-900 text-white shadow-md dark:bg-white dark:text-slate-900 scale-[1.02]" 
                          : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-slate-300 dark:hover:ring-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700"
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                {selectedTime && (
                  <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white h-14 text-lg font-bold rounded-2xl shadow-xl shadow-emerald-500/20 group">
                      Randevuyu Onayla 
                      <IconChevronRight stroke={3} className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
