"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  IconDroplet, 
  IconGlassFull, 
  IconTrophy, 
  IconInfoCircle, 
  IconClock, 
  IconCheck 
} from "@tabler/icons-react";
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
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-cyan-950 dark:text-cyan-100">Su Takibi</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Su içmek sağlığınız için çok önemlidir. Hedefinize ulaşın!</p>
        </div>
        {isGoalReached && (
          <Badge className="bg-emerald-500 text-white px-4 py-2 text-sm font-bold shadow-xl shadow-emerald-500/20 rounded-xl border-none">
            <IconTrophy stroke={2} className="w-5 h-5 mr-2" />
            Günlük Hedef Tamamlandı!
          </Badge>
        )}
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Visual Water Tracker */}
        <div className="lg:col-span-7">
          <Card className="border-0 shadow-2xl shadow-cyan-500/10 overflow-hidden relative h-full min-h-[550px] flex flex-col justify-between bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl">
            {/* Background Water Fill Animation */}
            <div 
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyan-400/30 to-cyan-200/10 dark:from-cyan-900/40 dark:to-cyan-900/10 transition-all duration-1000 ease-in-out z-0 flex items-end justify-center overflow-hidden ${animating ? 'scale-y-105' : ''}`}
              style={{ height: `${Math.max(progress, 15)}%` }}
            >
              <div className="absolute top-0 w-[200%] h-8 -translate-x-1/4">
                 {/* Simple wave illusion */}
                <div className="w-full h-full bg-cyan-300/40 dark:bg-cyan-800/40 rounded-[100%] absolute -top-4 opacity-50 blur-md"></div>
              </div>
            </div>

            <CardHeader className="text-center relative z-10 pt-12">
              <div className="mx-auto w-28 h-28 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-cyan-500/10 ring-1 ring-cyan-100 dark:ring-cyan-800">
                <IconDroplet stroke={1.5} className={`h-14 w-14 text-cyan-500 ${animating ? 'animate-bounce' : ''}`} />
              </div>
              <CardTitle className="text-6xl font-black text-cyan-950 dark:text-white tracking-tighter">
                {waterAmount} <span className="text-2xl text-cyan-600 dark:text-cyan-400 font-bold opacity-80">/ {dailyGoal} ml</span>
              </CardTitle>
              <CardDescription className="text-lg mt-4 font-medium text-slate-500">
                Bugün hedefinizin %{Math.round(progress)}'ini tamamladınız.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative z-10 pb-12 space-y-10 mt-auto">
              <div className="px-8">
                <Progress value={progress} className="h-5 bg-cyan-100/50 dark:bg-cyan-950/50 [&>div]:bg-gradient-to-r [&>div]:from-cyan-400 [&>div]:to-cyan-500 shadow-inner rounded-full" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 sm:px-8">
                <Button 
                  variant="outline" 
                  className="flex flex-col items-center justify-center h-32 border-2 border-cyan-100/50 bg-white/80 backdrop-blur-md hover:bg-cyan-50 hover:border-cyan-300 dark:bg-slate-900/80 dark:border-cyan-900/30 dark:hover:bg-cyan-900/50 transition-all shadow-sm rounded-2xl group" 
                  onClick={() => addWater(200)}
                >
                  <div className="bg-cyan-50 dark:bg-cyan-500/10 p-3 rounded-2xl mb-3 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-sm">
                    <IconGlassFull stroke={2} className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <span className="text-sm font-extrabold text-cyan-950 dark:text-white">Bardak</span>
                  <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mt-1 opacity-80">+200 ml</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex flex-col items-center justify-center h-32 border-2 border-cyan-100/50 bg-white/80 backdrop-blur-md hover:bg-cyan-50 hover:border-cyan-300 dark:bg-slate-900/80 dark:border-cyan-900/30 dark:hover:bg-cyan-900/50 transition-all shadow-sm rounded-2xl group" 
                  onClick={() => addWater(330)}
                >
                  <div className="bg-cyan-50 dark:bg-cyan-500/10 p-3 rounded-2xl mb-3 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-sm">
                    <IconDroplet stroke={2} className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <span className="text-sm font-extrabold text-cyan-950 dark:text-white">Kutu</span>
                  <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mt-1 opacity-80">+330 ml</span>
                </Button>

                <Button 
                  variant="outline" 
                  className="flex flex-col items-center justify-center h-32 border-2 border-cyan-100/50 bg-white/80 backdrop-blur-md hover:bg-cyan-50 hover:border-cyan-300 dark:bg-slate-900/80 dark:border-cyan-900/30 dark:hover:bg-cyan-900/50 transition-all shadow-sm rounded-2xl group" 
                  onClick={() => addWater(500)}
                >
                  <div className="bg-cyan-50 dark:bg-cyan-500/10 p-3 rounded-2xl mb-3 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-sm">
                    <IconGlassFull stroke={2} className="h-7 w-7 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <span className="text-sm font-extrabold text-cyan-950 dark:text-white">Şişe</span>
                  <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mt-1 opacity-80">+500 ml</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex flex-col items-center justify-center h-32 border-2 border-cyan-100/50 bg-white/80 backdrop-blur-md hover:bg-cyan-50 hover:border-cyan-300 dark:bg-slate-900/80 dark:border-cyan-900/30 dark:hover:bg-cyan-900/50 transition-all shadow-sm rounded-2xl group" 
                  onClick={() => addWater(1000)}
                >
                  <div className="bg-cyan-50 dark:bg-cyan-500/10 p-3 rounded-2xl mb-3 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-sm">
                    <IconDroplet stroke={2} className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <span className="text-sm font-extrabold text-cyan-950 dark:text-white">Sürahi</span>
                  <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mt-1 opacity-80">+1 L</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Info & History */}
        <div className="lg:col-span-5 space-y-8">
          <Card className="border-l-4 border-cyan-500 border-y-0 border-r-0 rounded-r-3xl rounded-l-md bg-gradient-to-r from-cyan-50 to-white dark:from-cyan-900/20 dark:to-slate-900/50 shadow-md">
            <CardContent className="p-6 sm:p-8 flex items-start gap-5">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shrink-0 shadow-sm">
                <IconInfoCircle stroke={2} className="h-8 w-8 text-cyan-500" />
              </div>
              <div>
                <h4 className="font-extrabold text-cyan-950 dark:text-white mb-2 text-lg">Neden Su İçmeliyiz?</h4>
                <p className="text-base text-cyan-800/80 dark:text-cyan-200/70 font-medium leading-relaxed">Yeterli su tüketimi metabolizmanızı hızlandırır, cildinizi güzelleştirir ve gün boyu enerjik hissetmenizi sağlar. Öğünlerden 30 dakika önce su içmek sindirime yardımcı olur.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl h-[420px] flex flex-col overflow-hidden">
            <CardHeader className="border-b border-slate-100 dark:border-slate-800/50 p-6 sm:p-8 shrink-0">
              <CardTitle className="text-xl font-extrabold flex items-center justify-between text-slate-800 dark:text-white">
                <span>Bugünkü Kayıtlar</span>
                <Badge className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-none dark:bg-slate-800 dark:text-slate-400 px-3 py-1 rounded-xl font-bold">{history.length} Kez</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-1 overflow-auto">
              {history.length > 0 ? (
                <div className="divide-y divide-slate-100 dark:divide-slate-800/50">
                  {history.map((record) => (
                    <div key={record.id} className="p-6 sm:px-8 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors animate-in slide-in-from-left-2">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-inner">
                          <IconCheck stroke={2} className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-extrabold text-slate-800 dark:text-white text-lg">{record.amount} <span className="text-sm font-bold opacity-70">ml Su</span></p>
                          <p className="text-sm font-bold text-slate-400 flex items-center mt-1">
                            <IconClock stroke={2} className="w-4 h-4 mr-1.5" />
                            {record.time}
                          </p>
                        </div>
                      </div>
                      <Badge className="text-cyan-700 bg-cyan-100 hover:bg-cyan-200 dark:bg-cyan-900/40 dark:text-cyan-300 px-3 py-1.5 rounded-xl font-bold border-none">
                        Eklendi
                      </Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 p-8 text-center">
                  <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                    <IconGlassFull stroke={1} className="w-10 h-10 text-slate-300 dark:text-slate-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">Bugün Su İçmediniz</h3>
                  <p className="text-base font-medium">İlk bardağınızı şimdi ekleyin!</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
