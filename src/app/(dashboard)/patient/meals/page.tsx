"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Utensils, Camera, Type, Loader2, Sparkles, Image as ImageIcon, CheckCircle2, Apple, Clock } from "lucide-react";

export default function MealsPage() {
  const [mealText, setMealText] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  
  const [mealsHistory, setMealsHistory] = useState([
    { id: 1, name: 'Kahvaltı', desc: 'Yulaf ezmesi, muz, fıstık ezmesi', cals: 450, time: '08:30', icon: <Apple className="w-5 h-5" /> },
    { id: 2, name: 'Öğle Yemeği', desc: 'Izgara tavuk salata, zeytinyağlı', cals: 600, time: '13:00', icon: <Utensils className="w-5 h-5" /> },
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
        icon: <Apple className="w-5 h-5" />
      }, ...prev]);
      
      setAnalyzing(false);
      setMealText("");
    }, 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-emerald-900 dark:text-emerald-100">Öğünlerim</h2>
          <p className="text-muted-foreground mt-1 text-lg">Yediklerinizi kaydedin, yapay zeka sizin için analiz etsin.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Left Column: Add Meal Form */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="border-none shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-6 text-white">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-yellow-300" />
                Yapay Zeka ile Öğün Ekle
              </CardTitle>
              <CardDescription className="text-emerald-50 mt-2 text-base">
                Yemeğinizi yazın veya fotoğrafını çekin, gerisini bize bırakın.
              </CardDescription>
            </div>
            
            <Tabs defaultValue="text" className="w-full">
              <div className="px-6 pt-4 border-b">
                <TabsList className="grid w-full grid-cols-2 bg-emerald-50 dark:bg-emerald-950/50">
                  <TabsTrigger value="text" className="data-[state=active]:bg-white dark:data-[state=active]:bg-card data-[state=active]:text-emerald-700">
                    <Type className="w-4 h-4 mr-2" />
                    Metin ile
                  </TabsTrigger>
                  <TabsTrigger value="photo" className="data-[state=active]:bg-white dark:data-[state=active]:bg-card data-[state=active]:text-emerald-700">
                    <Camera className="w-4 h-4 mr-2" />
                    Fotoğraf ile
                  </TabsTrigger>
                </TabsList>
              </div>

              <CardContent className="p-6">
                <TabsContent value="text" className="mt-0 space-y-4">
                  <form onSubmit={handleAnalyze} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="mealDesc">Yemeğinizi detaylıca tarif edin</Label>
                      <Textarea 
                        id="mealDesc"
                        className="resize-none min-h-[120px] focus-visible:ring-emerald-500 text-base" 
                        placeholder="Örn: 1 porsiyon ızgara somon, yanında bol yeşillikli limonlu salata ve 1 dilim tam buğday ekmeği..."
                        value={mealText}
                        onChange={(e) => setMealText(e.target.value)}
                        disabled={analyzing}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full h-12 text-base bg-emerald-600 hover:bg-emerald-700 text-white" 
                      disabled={analyzing || !mealText}
                    >
                      {analyzing ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Analiz Ediliyor...
                        </>
                      ) : "Analiz Et ve Kaydet"}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="photo" className="mt-0">
                  <div className="border-2 border-dashed border-emerald-200 dark:border-emerald-800 rounded-xl p-10 flex flex-col items-center justify-center text-center hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 transition-colors cursor-pointer group relative bg-slate-50/50 dark:bg-slate-900/20">
                    <Input type="file" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">Fotoğraf Yükle veya Çek</h3>
                    <p className="text-sm text-muted-foreground max-w-xs">
                      Yemeğinizin net bir fotoğrafını yükleyin. Yapay zeka porsiyonu ve içeriği tahmin edecektir.
                    </p>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>

          {/* AI Result Alert */}
          {result && (
            <Card className="border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 shadow-sm animate-in fade-in slide-in-from-top-4">
              <CardHeader className="pb-3 border-b border-emerald-100 dark:border-emerald-900/50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-emerald-800 dark:text-emerald-300 flex items-center text-lg">
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Öğün Kaydedildi
                  </CardTitle>
                  <Badge variant="outline" className="bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-900 dark:text-emerald-300 dark:border-emerald-700">
                    AI Onaylı
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Tahmini Kalori</p>
                    <p className="text-3xl font-bold text-emerald-900 dark:text-emerald-100">{result.calories} <span className="text-base font-normal">kcal</span></p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-card p-3 rounded-lg border border-emerald-100 dark:border-emerald-800 text-center shadow-sm">
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Protein</p>
                    <p className="font-bold text-lg text-rose-600">{result.protein}g</p>
                  </div>
                  <div className="bg-white dark:bg-card p-3 rounded-lg border border-emerald-100 dark:border-emerald-800 text-center shadow-sm">
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Karb</p>
                    <p className="font-bold text-lg text-amber-600">{result.carbs}g</p>
                  </div>
                  <div className="bg-white dark:bg-card p-3 rounded-lg border border-emerald-100 dark:border-emerald-800 text-center shadow-sm">
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Yağ</p>
                    <p className="font-bold text-lg text-yellow-600">{result.fat}g</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right Column: Today's Meals History */}
        <div className="lg:col-span-5">
          <Card className="border-none shadow-md h-full">
            <CardHeader className="border-b">
              <CardTitle className="text-xl flex items-center justify-between">
                <span>Bugünkü Öğünler</span>
                <Badge variant="secondary" className="font-normal">{mealsHistory.length} Kayıt</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {mealsHistory.map((meal) => (
                  <div key={meal.id} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors flex gap-4">
                    <div className="mt-1 w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                      {meal.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 truncate">{meal.name}</h4>
                        <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full dark:bg-emerald-900/30 dark:text-emerald-400">
                          {meal.cals} kcal
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{meal.desc}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {meal.time}
                      </div>
                    </div>
                  </div>
                ))}
                
                {mealsHistory.length === 0 && (
                  <div className="p-8 text-center text-muted-foreground">
                    <Utensils className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
                    <p>Henüz bir öğün eklemediniz.</p>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="p-4 border-t bg-gray-50 dark:bg-card/50">
              <div className="w-full flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Toplam Alınan:</span>
                <span className="font-bold text-lg">{mealsHistory.reduce((acc, curr) => acc + curr.cals, 0)} kcal</span>
              </div>
            </CardFooter>
          </Card>
        </div>

      </div>
    </div>
  );
}
