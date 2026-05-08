"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  IconPlus, 
  IconTrash, 
  IconDeviceFloppy, 
  IconCopy, 
  IconFileText, 
  IconSearch, 
  IconActivityHeartbeat, 
  IconCalendarEvent, 
  IconMeat,
  IconFlame,
  IconBread,
  IconDroplet
} from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function DietPlanCreatorPage() {
  const [meals, setMeals] = useState([
    { id: 1, name: "Kahvaltı (08:30)", items: [{ id: 101, name: "Yulaf ezmesi (40g)", c: 150, p: 5, cb: 27, f: 3 }, { id: 102, name: "Süt (200ml)", c: 120, p: 6, cb: 10, f: 4 }] },
    { id: 2, name: "Ara Öğün (11:00)", items: [{ id: 201, name: "Yeşil Elma (1 Adet)", c: 95, p: 0, cb: 25, f: 0 }, { id: 202, name: "Çiğ Badem (10 Adet)", c: 70, p: 3, cb: 2, f: 6 }] },
  ]);

  const addMeal = () => {
    setMeals([...meals, { id: Date.now(), name: "Yeni Öğün", items: [] }]);
  };

  const removeMeal = (id: number) => {
    setMeals(meals.filter(m => m.id !== id));
  };

  // Calculate Totals
  let totalC = 0, totalP = 0, totalCb = 0, totalF = 0;
  meals.forEach(m => {
    m.items.forEach(item => {
      totalC += item.c; totalP += item.p; totalCb += item.cb; totalF += item.f;
    });
  });

  const targetC = 2000, targetP = 120, targetCb = 250, targetF = 65;

  return (
    <div className="space-y-6 animate-in fade-in duration-700 slide-in-from-bottom-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white/50 dark:bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl shadow-slate-200/20 dark:shadow-none backdrop-blur-xl">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            Diyet Listesi Oluşturucu
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Hastalarınız için makro hesaplamalı, detaylı beslenme programları hazırlayın.</p>
        </div>
        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <Button variant="outline" className="h-12 px-5 rounded-2xl font-bold border-indigo-200 text-indigo-700 hover:bg-indigo-50 dark:border-indigo-800 dark:text-indigo-400 dark:hover:bg-indigo-900/50 transition-colors">
            <IconCopy stroke={2} className="mr-2 h-5 w-5" /> Şablon Kaydet
          </Button>
          <Button className="h-12 px-6 rounded-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105">
            <IconDeviceFloppy stroke={2} className="mr-2 h-5 w-5" /> Programı Ata & Kaydet
          </Button>
        </div>
      </div>

      <div className="grid xl:grid-cols-12 gap-8">
        
        {/* Left Sidebar: Patient & Macros */}
        <div className="xl:col-span-3 space-y-6">
          <Card className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none overflow-hidden bg-white dark:bg-slate-900 rounded-3xl">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <CardTitle className="text-lg font-bold flex items-center relative z-10">
                <IconFileText stroke={2} className="w-5 h-5 mr-2 text-indigo-400" /> Program Detayları
              </CardTitle>
            </div>
            <CardContent className="p-6 space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Danışan Seçimi</label>
                <select className="w-full h-11 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-shadow">
                  <option>Ayşe Yılmaz (Aktif, 72kg)</option>
                  <option>Mehmet Kaya (Beklemede, 88kg)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Başlangıç Tarihi</label>
                <div className="relative">
                  <IconCalendarEvent stroke={2} className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input type="date" className="pl-10 h-11 rounded-xl font-medium bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus-visible:ring-indigo-500" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bitiş Tarihi</label>
                <div className="relative">
                  <IconCalendarEvent stroke={2} className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input type="date" className="pl-10 h-11 rounded-xl font-medium bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus-visible:ring-indigo-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none bg-white dark:bg-slate-900 rounded-3xl">
            <CardHeader className="p-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <IconActivityHeartbeat stroke={2} className="w-5 h-5 text-indigo-500" /> Anlık Makro Özeti
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5"><IconFlame stroke={2} className="w-4 h-4 text-indigo-500"/> Kalori</span>
                  <span className="font-black text-indigo-600 dark:text-indigo-400">{totalC} <span className="text-xs font-semibold text-slate-400">/ {targetC} kcal</span></span>
                </div>
                <Progress value={(totalC/targetC)*100} className="h-2.5 bg-slate-100 dark:bg-slate-800 [&>div]:bg-gradient-to-r [&>div]:from-indigo-400 [&>div]:to-indigo-500 rounded-full" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5"><IconMeat stroke={2} className="w-4 h-4"/> Protein</span>
                  <span className="font-black text-rose-600 dark:text-rose-400">{totalP} <span className="text-xs font-semibold text-rose-400/50">/ {targetP} g</span></span>
                </div>
                <Progress value={(totalP/targetP)*100} className="h-2.5 bg-rose-50 dark:bg-rose-950/50 [&>div]:bg-rose-500 rounded-full" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5"><IconBread stroke={2} className="w-4 h-4"/> Karbonhidrat</span>
                  <span className="font-black text-amber-600 dark:text-amber-400">{totalCb} <span className="text-xs font-semibold text-amber-400/50">/ {targetCb} g</span></span>
                </div>
                <Progress value={(totalCb/targetCb)*100} className="h-2.5 bg-amber-50 dark:bg-amber-950/50 [&>div]:bg-amber-500 rounded-full" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-yellow-600 dark:text-yellow-400 flex items-center gap-1.5"><IconDroplet stroke={2} className="w-4 h-4"/> Yağ</span>
                  <span className="font-black text-yellow-600 dark:text-yellow-400">{totalF} <span className="text-xs font-semibold text-yellow-400/50">/ {targetF} g</span></span>
                </div>
                <Progress value={(totalF/targetF)*100} className="h-2.5 bg-yellow-50 dark:bg-yellow-950/50 [&>div]:bg-yellow-500 rounded-full" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Area: Meal Builder */}
        <div className="xl:col-span-9 space-y-6">
          <div className="flex items-center justify-between bg-indigo-50/50 dark:bg-indigo-950/20 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-900/50">
            <div>
              <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-100">Günlük Plan Düzenleyici</h3>
              <p className="text-sm font-medium text-indigo-700/80 dark:text-indigo-300/80 mt-1">Besin veritabanından seçim yaparak öğünleri oluşturun.</p>
            </div>
            <Button onClick={addMeal} variant="outline" className="h-11 px-5 rounded-xl font-bold bg-white hover:bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-slate-900 dark:border-indigo-800 dark:text-indigo-400 transition-colors shadow-sm">
              <IconPlus stroke={2} className="w-5 h-5 mr-2" /> Öğün Ekle
            </Button>
          </div>

          <div className="space-y-6">
            {meals.map((meal, index) => (
              <Card key={meal.id} className="border-0 shadow-lg shadow-slate-200/30 dark:shadow-none bg-white dark:bg-slate-900 rounded-3xl relative overflow-visible group">
                <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border-4 border-slate-50 dark:border-slate-950 flex items-center justify-center text-white font-black text-sm shadow-md z-10">
                  {index + 1}
                </div>
                
                <CardHeader className="py-4 px-6 sm:px-8 border-b border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-t-3xl">
                  <div className="flex items-center gap-3 w-full sm:w-1/2">
                    <Input defaultValue={meal.name} className="h-10 text-lg font-bold bg-transparent border-transparent hover:border-slate-200 focus:bg-white dark:focus:bg-slate-950 focus:border-indigo-500 transition-colors shadow-none px-3" />
                  </div>
                  <div className="flex items-center gap-4 text-sm w-full sm:w-auto justify-between sm:justify-end">
                    <Badge variant="secondary" className="px-3 py-1.5 text-sm font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900">
                      {meal.items.reduce((a, b) => a + b.c, 0)} kcal
                    </Badge>
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl text-rose-500 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/50 transition-colors" onClick={() => removeMeal(meal.id)}>
                      <IconTrash stroke={2} className="w-5 h-5" />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0">
                  {meal.items.length > 0 ? (
                    <div className="divide-y divide-slate-100 dark:divide-slate-800/50">
                      {meal.items.map((item, i) => (
                        <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 px-6 sm:px-8 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 shrink-0"></div>
                            <span className="font-bold text-slate-800 dark:text-slate-200">{item.name}</span>
                          </div>
                          <div className="flex items-center flex-wrap sm:flex-nowrap gap-3 sm:gap-5 text-sm font-semibold">
                            <span className="text-rose-600 dark:text-rose-400 w-14 text-right bg-rose-50 dark:bg-rose-950/30 px-2 py-1 rounded-md">{item.p}g P</span>
                            <span className="text-amber-600 dark:text-amber-400 w-14 text-right bg-amber-50 dark:bg-amber-950/30 px-2 py-1 rounded-md">{item.cb}g K</span>
                            <span className="text-yellow-600 dark:text-yellow-400 w-14 text-right bg-yellow-50 dark:bg-yellow-950/30 px-2 py-1 rounded-md">{item.f}g Y</span>
                            <Badge variant="secondary" className="w-16 justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">{item.c} kcal</Badge>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/50">
                              <IconTrash stroke={2} className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-10 text-center text-slate-400 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-3">
                        <IconSearch stroke={1.5} className="w-8 h-8 text-slate-300 dark:text-slate-600" />
                      </div>
                      <p className="font-medium">Bu öğüne henüz besin eklenmedi.</p>
                      <p className="text-xs text-slate-400 mt-1">Aşağıdaki arama çubuğunu kullanarak ekleyebilirsiniz.</p>
                    </div>
                  )}
                </CardContent>
                
                <CardFooter className="p-4 sm:p-6 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50 rounded-b-3xl">
                  <div className="relative w-full">
                    <IconSearch stroke={2} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500" />
                    <Input placeholder="Besin arayıp ekle... (Örn: Yumurta, Yulaf, Somon)" className="pl-12 h-12 rounded-xl font-medium border-indigo-200 focus-visible:ring-indigo-500 dark:border-indigo-800 bg-white dark:bg-slate-950 shadow-sm" />
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
