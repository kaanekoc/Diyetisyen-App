"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Droplets, Plus, GlassWater, Trophy, Info, Clock, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function WaterPage() {
  const [waterAmount, setWaterAmount] = useState(1200); // in ml
  const dailyGoal = 2500;
  const [history, setHistory] = useState([
    { id: 1, amount: 200, time: "08:30" },
    { id: 2, amount: 500, time: "10:15" },
    { id: 3, amount: 200, time: "12:00" },
    { id: 4, amount: 300, time: "14:30" },
  ]);

  const [animating, setAnimating] = useState(false);

  const addWater = (amount: number) => {
    setAnimating(true);
    setWaterAmount((prev) => Math.min(prev + amount, 5000));
    
    setHistory(prev => [{
      id: Date.now(),
      amount,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }, ...prev]);

    setTimeout(() => setAnimating(false), 800);
  };

  const progress = Math.min((waterAmount / dailyGoal) * 100, 100);
  const isGoalReached = waterAmount >= dailyGoal;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-cyan-950 dark:text-cyan-100">Su Takibi</h2>
          <p className="text-muted-foreground mt-1 text-lg">Su içmek sağlığınız için çok önemlidir. Hedefinize ulaşın!</p>
        </div>
        {isGoalReached && (
          <Badge className="bg-emerald-500 text-white hover:bg-emerald-600 px-4 py-2 text-sm">
            <Trophy className="w-4 h-4 mr-2" />
            Günlük Hedef Tamamlandı!
          </Badge>
        )}
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Left Column: Visual Water Tracker */}
        <div className="lg:col-span-7">
          <Card className="border-none shadow-md overflow-hidden relative h-full min-h-[500px] flex flex-col justify-between bg-white dark:bg-card">
            {/* Background Water Fill Animation */}
            <div 
              className={`absolute bottom-0 left-0 right-0 bg-cyan-100/50 dark:bg-cyan-900/20 transition-all duration-1000 ease-in-out z-0 flex items-end justify-center overflow-hidden ${animating ? 'scale-y-105' : ''}`}
              style={{ height: `${Math.max(progress, 15)}%` }}
            >
              <div className="absolute top-0 w-[200%] h-8 -translate-x-1/4">
                 {/* Simple wave illusion */}
                <div className="w-full h-full bg-cyan-200/50 dark:bg-cyan-800/30 rounded-[100%] absolute -top-4 opacity-50 blur-sm"></div>
              </div>
            </div>

            <CardHeader className="text-center relative z-10 pt-10">
              <div className="mx-auto w-24 h-24 bg-cyan-50 dark:bg-cyan-950/50 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <Droplets className={`h-12 w-12 text-cyan-500 ${animating ? 'animate-bounce' : ''}`} />
              </div>
              <CardTitle className="text-5xl font-bold text-cyan-950 dark:text-cyan-50 tracking-tighter">
                {waterAmount} <span className="text-2xl text-cyan-700 dark:text-cyan-400 font-medium">/ {dailyGoal} ml</span>
              </CardTitle>
              <CardDescription className="text-lg mt-2">
                Bugün hedefinizin %{Math.round(progress)}'ini tamamladınız.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative z-10 pb-10 space-y-8 mt-auto">
              <div className="px-6">
                <Progress value={progress} className="h-4 bg-cyan-100 dark:bg-cyan-950 [&>div]:bg-cyan-500 shadow-inner" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 px-2 sm:px-6">
                <Button 
                  variant="outline" 
                  className="flex flex-col items-center justify-center h-28 border-2 border-cyan-100 bg-white/80 backdrop-blur-sm hover:bg-cyan-50 hover:border-cyan-300 dark:bg-card/80 dark:border-cyan-900/50 dark:hover:bg-cyan-950/50 transition-all shadow-sm group" 
                  onClick={() => addWater(200)}
                >
                  <div className="bg-cyan-100 dark:bg-cyan-900/50 p-2 rounded-full mb-2 group-hover:scale-110 transition-transform">
                    <GlassWater className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <span className="text-sm font-semibold text-cyan-950 dark:text-cyan-100">Bardak</span>
                  <span className="text-xs text-cyan-600 dark:text-cyan-400 mt-1">+200 ml</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex flex-col items-center justify-center h-28 border-2 border-cyan-100 bg-white/80 backdrop-blur-sm hover:bg-cyan-50 hover:border-cyan-300 dark:bg-card/80 dark:border-cyan-900/50 dark:hover:bg-cyan-950/50 transition-all shadow-sm group" 
                  onClick={() => addWater(330)}
                >
                  <div className="bg-cyan-100 dark:bg-cyan-900/50 p-2 rounded-full mb-2 group-hover:scale-110 transition-transform">
                    <Droplets className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <span className="text-sm font-semibold text-cyan-950 dark:text-cyan-100">Kutu</span>
                  <span className="text-xs text-cyan-600 dark:text-cyan-400 mt-1">+330 ml</span>
                </Button>

                <Button 
                  variant="outline" 
                  className="flex flex-col items-center justify-center h-28 border-2 border-cyan-100 bg-white/80 backdrop-blur-sm hover:bg-cyan-50 hover:border-cyan-300 dark:bg-card/80 dark:border-cyan-900/50 dark:hover:bg-cyan-950/50 transition-all shadow-sm group" 
                  onClick={() => addWater(500)}
                >
                  <div className="bg-cyan-100 dark:bg-cyan-900/50 p-2 rounded-full mb-2 group-hover:scale-110 transition-transform">
                    <GlassWater className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <span className="text-sm font-semibold text-cyan-950 dark:text-cyan-100">Şişe</span>
                  <span className="text-xs text-cyan-600 dark:text-cyan-400 mt-1">+500 ml</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex flex-col items-center justify-center h-28 border-2 border-cyan-100 bg-white/80 backdrop-blur-sm hover:bg-cyan-50 hover:border-cyan-300 dark:bg-card/80 dark:border-cyan-900/50 dark:hover:bg-cyan-950/50 transition-all shadow-sm group" 
                  onClick={() => addWater(1000)}
                >
                  <div className="bg-cyan-100 dark:bg-cyan-900/50 p-2 rounded-full mb-2 group-hover:scale-110 transition-transform">
                    <Droplets className="h-7 w-7 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <span className="text-sm font-semibold text-cyan-950 dark:text-cyan-100">Sürahi</span>
                  <span className="text-xs text-cyan-600 dark:text-cyan-400 mt-1">+1 L</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Info & History */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="border-cyan-200 dark:border-cyan-800 bg-cyan-50/50 dark:bg-cyan-950/20 shadow-sm">
            <CardContent className="p-4 flex items-start gap-4">
              <div className="p-2 bg-cyan-100 dark:bg-cyan-900/50 rounded-full shrink-0">
                <Info className="h-5 w-5 text-cyan-700 dark:text-cyan-300" />
              </div>
              <div>
                <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-1">Neden Su İçmeliyiz?</h4>
                <p className="text-sm text-cyan-800/80 dark:text-cyan-300/80">Yeterli su tüketimi metabolizmanızı hızlandırır, cildinizi güzelleştirir ve gün boyu enerjik hissetmenizi sağlar. Öğünlerden 30 dakika önce su içmek sindirime yardımcı olur.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md h-[380px] flex flex-col">
            <CardHeader className="border-b pb-4">
              <CardTitle className="text-lg flex items-center justify-between">
                <span>Bugünkü Kayıtlar</span>
                <span className="text-sm font-normal text-muted-foreground">{history.length} Kez</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-1 overflow-auto">
              {history.length > 0 ? (
                <div className="divide-y">
                  {history.map((record) => (
                    <div key={record.id} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors animate-in slide-in-from-left-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                          <Check className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-semibold">{record.amount} ml Su</p>
                          <p className="text-xs text-muted-foreground flex items-center mt-0.5">
                            <Clock className="w-3 h-3 mr-1" />
                            {record.time}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-cyan-600 border-cyan-200 dark:border-cyan-800 dark:text-cyan-400">
                        Eklendi
                      </Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground p-8">
                  <GlassWater className="w-12 h-12 text-gray-300 dark:text-gray-600 mb-3" />
                  <p>Bugün henüz su içmediniz.</p>
                  <p className="text-sm mt-1">İlk bardağınızı şimdi ekleyin!</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
