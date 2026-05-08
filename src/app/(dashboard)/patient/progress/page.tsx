"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, Area, AreaChart } from "recharts";
import { TrendingDown, TrendingUp, Minus, Activity, Target, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const mockWeightData = [
  { date: "1 Mar", weight: 75.2 },
  { date: "7 Mar", weight: 74.8 },
  { date: "14 Mar", weight: 74.1 },
  { date: "21 Mar", weight: 73.5 },
  { date: "28 Mar", weight: 72.9 },
  { date: "4 Nis", weight: 72.1 },
];

const mockCalorieData = [
  { day: "Pzt", calorie: 1950, goal: 2000 },
  { day: "Sal", calorie: 2100, goal: 2000 },
  { day: "Çar", calorie: 1850, goal: 2000 },
  { day: "Per", calorie: 1980, goal: 2000 },
  { day: "Cum", calorie: 2200, goal: 2000 },
  { day: "Cts", calorie: 1900, goal: 2000 },
  { day: "Paz", calorie: 1750, goal: 2000 },
];

export default function ProgressPage() {
  const currentWeight = 72.1;
  const startWeight = 75.2;
  const targetWeight = 68.0;
  
  const weightLost = (startWeight - currentWeight).toFixed(1);
  const percentToGoal = Math.round(((startWeight - currentWeight) / (startWeight - targetWeight)) * 100);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-indigo-950 dark:text-indigo-100">İlerleme Analizi</h2>
          <p className="text-muted-foreground mt-1 text-lg">Kilo, kalori ve makro trendlerinizin detaylı görünümü.</p>
        </div>
        <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 border-indigo-200 dark:bg-indigo-900/50 dark:text-indigo-300 dark:border-indigo-800 px-4 py-2 text-sm font-medium">
          <Activity className="w-4 h-4 mr-2" />
          Son 30 Gün
        </Badge>
      </div>

      {/* Top Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-none shadow-md bg-gradient-to-br from-emerald-500 to-teal-600 text-white overflow-hidden relative">
          <div className="absolute -right-4 -top-4 opacity-20">
            <TrendingDown className="w-32 h-32" />
          </div>
          <CardContent className="p-6">
            <p className="text-emerald-100 font-medium mb-1">Toplam Verilen Kilo</p>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold">{weightLost}</span>
              <span className="text-xl text-emerald-100 mb-1">kg</span>
            </div>
            <div className="mt-4 text-sm bg-emerald-700/30 px-3 py-1.5 rounded-full inline-block backdrop-blur-sm">
              Başlangıç: {startWeight} kg
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md bg-white dark:bg-card">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-muted-foreground font-medium mb-1">Mevcut Kilo</p>
                <div className="flex items-end gap-2 text-slate-900 dark:text-slate-100">
                  <span className="text-4xl font-bold">{currentWeight}</span>
                  <span className="text-xl mb-1">kg</span>
                </div>
              </div>
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl">
                <Target className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Hedefe (68 kg) İlerleme</span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">%{percentToGoal}</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                <div className="bg-indigo-500 h-2 rounded-full" style={{ width: `${percentToGoal}%` }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md bg-white dark:bg-card">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-muted-foreground font-medium mb-1">Haftalık Kalori Ort.</p>
                <div className="flex items-end gap-2 text-slate-900 dark:text-slate-100">
                  <span className="text-4xl font-bold">1,960</span>
                  <span className="text-xl mb-1">kcal</span>
                </div>
              </div>
              <div className="p-3 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-2xl">
                <Flame className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm">
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800">
                <TrendingDown className="w-3 h-3 mr-1" />
                -40 kcal
              </Badge>
              <span className="text-muted-foreground">geçen haftaya göre</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Weight Change Chart */}
        <Card className="border-none shadow-md col-span-2 xl:col-span-1">
          <CardHeader>
            <CardTitle>Kilo Değişim Grafiği</CardTitle>
            <CardDescription>Zaman içindeki kilo kayıp trendiniz</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockWeightData} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
                <defs>
                  <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tickMargin={10} />
                <YAxis domain={["dataMin - 1", "dataMax + 1"]} axisLine={false} tickLine={false} tickMargin={10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="weight" 
                  stroke="#10b981" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorWeight)" 
                  name="Kilo (kg)"
                  activeDot={{ r: 8, strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Weekly Calories Chart */}
        <Card className="border-none shadow-md col-span-2 xl:col-span-1">
          <CardHeader>
            <CardTitle>Haftalık Kalori Alımı</CardTitle>
            <CardDescription>Bu hafta aldığınız kalori vs hedef kalori (2000 kcal)</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockCalorieData} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tickMargin={10} />
                <YAxis axisLine={false} tickLine={false} tickMargin={10} />
                <Tooltip 
                  cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="calorie" fill="#6366f1" name="Alınan (kcal)" radius={[4, 4, 0, 0]} maxBarSize={40} />
                <Bar dataKey="goal" fill="#cbd5e1" name="Hedef (kcal)" radius={[4, 4, 0, 0]} maxBarSize={40} opacity={0.5} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
