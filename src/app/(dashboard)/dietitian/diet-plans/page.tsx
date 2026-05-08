"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash, Save, Copy, FileText, Search, Activity, CalendarDays, ChevronDown, CheckCircle2 } from "lucide-react";
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
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Diyet Listesi Oluşturucu</h2>
          <p className="text-muted-foreground mt-1">Hastalarınız için makro hesaplamalı, detaylı beslenme programları hazırlayın.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-900/50">
            <Copy className="mr-2 h-4 w-4" /> Şablon Olarak Kaydet
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md">
            <Save className="mr-2 h-4 w-4" /> Programı Ata ve Kaydet
          </Button>
        </div>
      </div>

      <div className="grid xl:grid-cols-12 gap-8">
        
        {/* Left Sidebar: Patient & Macros */}
        <div className="xl:col-span-3 space-y-6">
          <Card className="border-none shadow-md overflow-hidden bg-white dark:bg-card">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 text-white">
              <CardTitle className="text-lg flex items-center">
                <FileText className="w-5 h-5 mr-2" /> Program Detayları
              </CardTitle>
            </div>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Danışan Seçimi</label>
                <select className="w-full h-10 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 px-3 py-2 text-sm focus:outline-emerald-500">
                  <option>Ayşe Yılmaz (Aktif, 72kg)</option>
                  <option>Mehmet Kaya (Beklemede, 88kg)</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Başlangıç Tarihi</label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input type="date" className="pl-9 bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Bitiş Tarihi</label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input type="date" className="pl-9 bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-white dark:bg-card">
            <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800">
              <CardTitle className="text-base flex items-center gap-2">
                <Activity className="w-5 h-5 text-indigo-500" /> Anlık Makro Özeti
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-5">
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Kalori</span>
                  <span className="font-bold">{totalC} / {targetC} kcal</span>
                </div>
                <Progress value={(totalC/targetC)*100} className="h-2 bg-slate-100 dark:bg-slate-800 [&>div]:bg-emerald-500" />
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-rose-600 dark:text-rose-400">Protein</span>
                  <span className="font-bold">{totalP} / {targetP} g</span>
                </div>
                <Progress value={(totalP/targetP)*100} className="h-2 bg-rose-50 dark:bg-rose-950/50 [&>div]:bg-rose-500" />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-amber-600 dark:text-amber-400">Karbonhidrat</span>
                  <span className="font-bold">{totalCb} / {targetCb} g</span>
                </div>
                <Progress value={(totalCb/targetCb)*100} className="h-2 bg-amber-50 dark:bg-amber-950/50 [&>div]:bg-amber-500" />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-yellow-600 dark:text-yellow-400">Yağ</span>
                  <span className="font-bold">{totalF} / {targetF} g</span>
                </div>
                <Progress value={(totalF/targetF)*100} className="h-2 bg-yellow-50 dark:bg-yellow-950/50 [&>div]:bg-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Area: Meal Builder */}
        <div className="xl:col-span-9 space-y-6">
          <div className="flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/50">
            <div>
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-300">Günlük Plan (Pazartesi)</h3>
              <p className="text-sm text-emerald-600/80 dark:text-emerald-400/80">Besin veritabanından seçim yaparak öğünleri doldurun.</p>
            </div>
            <Button onClick={addMeal} variant="outline" className="bg-white hover:bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-card dark:border-emerald-800 dark:text-emerald-400">
              <Plus className="w-4 h-4 mr-2" /> Öğün Ekle
            </Button>
          </div>

          <div className="space-y-6">
            {meals.map((meal, index) => (
              <Card key={meal.id} className="border-slate-200 dark:border-slate-800 shadow-sm relative overflow-visible group">
                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 border-2 border-white dark:border-card flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs shadow-sm z-10">
                  {index + 1}
                </div>
                
                <CardHeader className="py-3 px-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 flex flex-row items-center justify-between">
                  <div className="flex items-center gap-3 w-1/3">
                    <Input defaultValue={meal.name} className="h-8 font-semibold bg-transparent border-transparent hover:border-slate-200 focus:bg-white focus:border-emerald-500 transition-colors shadow-none px-2" />
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {meal.items.reduce((a, b) => a + b.c, 0)} kcal
                    </span>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-rose-500 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/50" onClick={() => removeMeal(meal.id)}>
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0">
                  {meal.items.length > 0 ? (
                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                      {meal.items.map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 px-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-rose-600 dark:text-rose-400 w-12 text-right">{item.p}g P</span>
                            <span className="text-amber-600 dark:text-amber-400 w-12 text-right">{item.cb}g K</span>
                            <span className="text-yellow-600 dark:text-yellow-400 w-12 text-right">{item.f}g Y</span>
                            <Badge variant="secondary" className="w-16 justify-center bg-slate-100 dark:bg-slate-800">{item.c} kcal</Badge>
                            <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-400 hover:text-rose-500">
                              <Trash className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-slate-400 flex flex-col items-center">
                      <Search className="w-8 h-8 mb-2 opacity-20" />
                      <p className="text-sm">Bu öğüne henüz besin eklenmedi.</p>
                    </div>
                  )}
                </CardContent>
                
                <CardFooter className="p-3 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800">
                  <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-600" />
                    <Input placeholder="Besin arayıp ekle... (Örn: Yumurta, Yulaf)" className="pl-9 h-9 border-emerald-200 focus-visible:ring-emerald-500 dark:border-emerald-800 bg-white dark:bg-card" />
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
