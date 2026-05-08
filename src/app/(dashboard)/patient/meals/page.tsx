"use client";

import { useState, Fragment } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from '@headlessui/react';
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  IconToolsKitchen2, 
  IconCamera, 
  IconTypography, 
  IconLoader2, 
  IconSparkles, 
  IconPhoto, 
  IconCircleCheckFilled, 
  IconApple, 
  IconClock 
} from "@tabler/icons-react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function MealsPage() {
  const [mealText, setMealText] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  
  const [mealsHistory, setMealsHistory] = useState([
    { id: 1, name: 'Kahvaltı', desc: 'Yulaf ezmesi, muz, fıstık ezmesi', cals: 450, time: '08:30', icon: <IconApple stroke={1.5} className="w-6 h-6" /> },
    { id: 2, name: 'Öğle Yemeği', desc: 'Izgara tavuk salata, zeytinyağlı', cals: 600, time: '13:00', icon: <IconToolsKitchen2 stroke={1.5} className="w-6 h-6" /> },
  ]);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mealText) return;
    
    setAnalyzing(true);
    
    // AI Endpoint call simulation
    setTimeout(() => {
      const newMeal = {
        calories: Math.floor(Math.random() * 400 + 200),
        protein: Math.floor(Math.random() * 30 + 10),
        carbs: Math.floor(Math.random() * 60 + 20),
        fat: Math.floor(Math.random() * 20 + 5),
        name: "Yapay Zeka Tahmini",
        desc: mealText
      };
      
      setResult(newMeal);
      
      // Add to history
      setMealsHistory(prev => [{
        id: Date.now(),
        name: 'Ara Öğün',
        desc: mealText,
        cals: newMeal.calories,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        icon: <IconApple stroke={1.5} className="w-6 h-6" />
      }, ...prev]);
      
      setAnalyzing(false);
      setMealText("");
    }, 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Öğünlerim</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Yediklerinizi kaydedin, yapay zeka sizin için anında analiz etsin.</p>
        </div>
      </div>

      <div className="grid xl:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Add Meal Form */}
        <div className="xl:col-span-7 space-y-8">
          <Card className="border-0 shadow-2xl shadow-emerald-500/10 dark:shadow-none overflow-hidden bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl">
            <div className="bg-gradient-to-tr from-emerald-500 to-teal-400 p-8 text-white relative overflow-hidden">
              <div className="absolute -right-10 -top-10 opacity-20 transform rotate-12 scale-150">
                <IconSparkles stroke={1} className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <CardTitle className="text-2xl sm:text-3xl font-extrabold flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-2xl backdrop-blur-md">
                    <IconSparkles stroke={2} className="w-8 h-8 text-white" />
                  </div>
                  Yapay Zeka ile Analiz
                </CardTitle>
                <CardDescription className="text-emerald-50 mt-3 text-lg font-medium opacity-90 max-w-md">
                  Yemeğinizi yazın veya fotoğrafını çekin, makro ve kalori değerlerini saniyeler içinde hesaplayalım.
                </CardDescription>
              </div>
            </div>
            
            <TabGroup>
              <div className="px-6 sm:px-8 pt-6">
                <TabList className="flex space-x-2 rounded-2xl bg-slate-100 dark:bg-slate-800/80 p-1.5 max-w-md">
                  <Tab
                    className="w-full rounded-xl py-3 text-sm font-bold leading-5 transition-all duration-200 focus:outline-none flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-slate-200 data-selected:bg-white data-selected:dark:bg-slate-900 data-selected:text-emerald-600 data-selected:dark:text-emerald-400 data-selected:shadow-md"
                  >
                    <IconTypography stroke={2} className="w-5 h-5" /> Metin
                  </Tab>
                  <Tab
                    className="w-full rounded-xl py-3 text-sm font-bold leading-5 transition-all duration-200 focus:outline-none flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-slate-200 data-selected:bg-white data-selected:dark:bg-slate-900 data-selected:text-emerald-600 data-selected:dark:text-emerald-400 data-selected:shadow-md"
                  >
                    <IconCamera stroke={2} className="w-5 h-5" /> Fotoğraf
                  </Tab>
                </TabList>
              </div>

              <CardContent className="p-6 sm:p-8">
                <TabPanels>
                  <TabPanel className="focus:outline-none space-y-6">
                    <form onSubmit={handleAnalyze} className="space-y-6">
                      <div className="space-y-3">
                        <Label htmlFor="mealDesc" className="text-sm font-bold text-slate-700 dark:text-slate-300">Yemeğinizi detaylıca tarif edin</Label>
                        <Textarea 
                          id="mealDesc"
                          className="resize-none min-h-[140px] focus-visible:ring-emerald-500 text-base rounded-2xl p-4 bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 font-medium" 
                          placeholder="Örn: 1 porsiyon ızgara somon, yanında bol yeşillikli limonlu salata ve 1 dilim tam buğday ekmeği..."
                          value={mealText}
                          onChange={(e) => setMealText(e.target.value)}
                          disabled={analyzing}
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full h-14 text-lg font-bold bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-white/10 transition-all duration-300" 
                        disabled={analyzing || !mealText}
                      >
                        {analyzing ? (
                          <>
                            <IconLoader2 stroke={2} className="mr-3 h-6 w-6 animate-spin" />
                            Yapay Zeka Düşünüyor...
                          </>
                        ) : "Analiz Et ve Kaydet"}
                      </Button>
                    </form>
                  </TabPanel>

                  <TabPanel className="focus:outline-none">
                    <div className="border-2 border-dashed border-emerald-200 dark:border-emerald-800/50 rounded-3xl p-12 flex flex-col items-center justify-center text-center hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-colors cursor-pointer group relative bg-slate-50/50 dark:bg-slate-900/20">
                      <Input type="file" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                      <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm ring-1 ring-emerald-100 dark:ring-emerald-800 group-hover:scale-110 transition-transform">
                        <IconPhoto stroke={1.5} className="w-10 h-10 text-emerald-500" />
                      </div>
                      <h3 className="font-extrabold text-xl text-slate-800 dark:text-white mb-2">Fotoğraf Yükle veya Çek</h3>
                      <p className="text-base text-slate-500 font-medium max-w-sm">
                        Yemeğinizin net bir fotoğrafını yükleyin. Yapay zeka içeriği otomatik algılayacaktır.
                      </p>
                    </div>
                  </TabPanel>
                </TabPanels>
              </CardContent>
            </TabGroup>
          </Card>

          {/* AI Result Alert */}
          {result && (
            <Card className="border-0 bg-emerald-50 dark:bg-emerald-500/10 ring-1 ring-emerald-200/50 dark:ring-emerald-500/20 rounded-3xl shadow-lg shadow-emerald-500/5 animate-in fade-in slide-in-from-top-4 duration-500 overflow-hidden">
              <CardHeader className="pb-4 p-6 sm:p-8 border-b border-emerald-100 dark:border-emerald-500/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <CardTitle className="text-emerald-800 dark:text-emerald-300 flex items-center text-xl font-extrabold">
                    <IconCircleCheckFilled className="w-8 h-8 mr-3 text-emerald-500" />
                    Öğün Kaydedildi
                  </CardTitle>
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-200 px-4 py-1.5 rounded-xl text-sm font-bold border-none self-start sm:self-auto">
                    Yapay Zeka Onaylı
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6 p-6 sm:p-8">
                <div className="mb-6">
                  <p className="text-sm font-bold text-emerald-600/70 dark:text-emerald-400/70 uppercase tracking-wider mb-1">Tahmini Kalori</p>
                  <p className="text-5xl font-black text-emerald-900 dark:text-emerald-100 tracking-tight">{result.calories} <span className="text-xl font-bold opacity-70">kcal</span></p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 text-center shadow-sm">
                    <p className="text-xs sm:text-sm text-slate-500 mb-1.5 uppercase tracking-widest font-bold">Protein</p>
                    <p className="font-black text-2xl text-rose-500">{result.protein}g</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 text-center shadow-sm">
                    <p className="text-xs sm:text-sm text-slate-500 mb-1.5 uppercase tracking-widest font-bold">Karb</p>
                    <p className="font-black text-2xl text-amber-500">{result.carbs}g</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 text-center shadow-sm">
                    <p className="text-xs sm:text-sm text-slate-500 mb-1.5 uppercase tracking-widest font-bold">Yağ</p>
                    <p className="font-black text-2xl text-yellow-500">{result.fat}g</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right Column: Today's Meals History */}
        <div className="xl:col-span-5">
          <Card className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl h-full flex flex-col">
            <CardHeader className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800/50 flex-shrink-0">
              <CardTitle className="text-2xl font-extrabold flex items-center justify-between text-slate-800 dark:text-white">
                Bugünkü Öğünler
                <Badge className="font-bold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-500/20 dark:text-indigo-300 border-none px-3 py-1 rounded-xl text-sm">{mealsHistory.length} Kayıt</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-1 overflow-y-auto">
              <div className="divide-y divide-slate-100 dark:divide-slate-800/50">
                {mealsHistory.map((meal) => (
                  <div key={meal.id} className="p-6 sm:p-8 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors flex gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                      {meal.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-extrabold text-lg text-slate-900 dark:text-white truncate pr-4">{meal.name}</h4>
                        <span className="text-sm font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl dark:bg-emerald-500/20 dark:text-emerald-400 shadow-sm shrink-0 whitespace-nowrap">
                          {meal.cals} kcal
                        </span>
                      </div>
                      <p className="text-base text-slate-500 dark:text-slate-400 font-medium line-clamp-2 leading-relaxed mb-3">{meal.desc}</p>
                      <div className="flex items-center text-sm font-semibold text-slate-400">
                        <IconClock stroke={2} className="w-4 h-4 mr-1.5" />
                        {meal.time}
                      </div>
                    </div>
                  </div>
                ))}
                
                {mealsHistory.length === 0 && (
                  <div className="p-16 text-center text-slate-400 flex flex-col items-center">
                    <div className="w-24 h-24 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                      <IconToolsKitchen2 stroke={1} className="w-12 h-12 text-slate-300 dark:text-slate-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">Henüz Öğün Yok</h3>
                    <p className="text-lg">Bugün henüz bir öğün eklemediniz.</p>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="p-6 sm:p-8 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/80 mt-auto flex-shrink-0">
              <div className="w-full flex justify-between items-end">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Toplam Alınan</span>
                <span className="font-black text-3xl text-emerald-600 dark:text-emerald-400">{mealsHistory.reduce((acc, curr) => acc + curr.cals, 0)} <span className="text-lg font-bold opacity-70">kcal</span></span>
              </div>
            </CardFooter>
          </Card>
        </div>

      </div>
    </div>
  );
}
