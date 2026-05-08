"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, Area, AreaChart } from "recharts";
import { 
  IconTrendingDown, 
  IconActivity, 
  IconTarget, 
  IconFlame 
} from "@tabler/icons-react";
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
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-indigo-950 dark:text-indigo-100">İlerleme Analizi</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Kilo, kalori ve makro trendlerinizin detaylı görünümü.</p>
        </div>
        <Badge className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-none dark:bg-indigo-500/20 dark:text-indigo-300 px-4 py-2 text-sm font-bold shadow-sm rounded-xl">
          <IconActivity stroke={2} className="w-5 h-5 mr-2" />
          Son 30 Gün
        </Badge>
      </div>

      {/* Top Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-0 shadow-xl shadow-emerald-500/20 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-3xl overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <IconTrendingDown stroke={1.5} className="w-32 h-32" />
          </div>
          <CardContent className="p-6 sm:p-8 relative z-10">
            <p className="text-emerald-100 font-bold uppercase tracking-wider text-xs mb-2">Toplam Verilen Kilo</p>
            <div className="flex items-end gap-2 mt-2">
              <span className="text-5xl font-black tracking-tight">{weightLost}</span>
              <span className="text-2xl font-bold text-emerald-100 mb-1">kg</span>
            </div>
            <div className="mt-6 text-sm bg-white/20 px-4 py-2 rounded-xl inline-block backdrop-blur-md font-bold shadow-sm">
              Başlangıç: {startWeight} kg
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl group hover:-translate-y-1 transition-transform duration-300">
          <CardContent className="p-6 sm:p-8">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-xs mb-2">Mevcut Kilo</p>
                <div className="flex items-end gap-2 text-slate-800 dark:text-white mt-2">
                  <span className="text-5xl font-black tracking-tight">{currentWeight}</span>
                  <span className="text-2xl font-bold mb-1 opacity-70">kg</span>
                </div>
              </div>
              <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-2xl group-hover:scale-110 transition-transform">
                <IconTarget stroke={2} className="w-8 h-8" />
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-slate-500">Hedefe (68 kg) İlerleme</span>
                <span className="text-indigo-600 dark:text-indigo-400">%{percentToGoal}</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-3 shadow-inner">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full" style={{ width: `${percentToGoal}%` }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl group hover:-translate-y-1 transition-transform duration-300">
          <CardContent className="p-6 sm:p-8">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-xs mb-2">Haftalık Kalori Ort.</p>
                <div className="flex items-end gap-2 text-slate-800 dark:text-white mt-2">
                  <span className="text-5xl font-black tracking-tight">1,960</span>
                  <span className="text-lg font-bold mb-1 opacity-70">kcal</span>
                </div>
              </div>
              <div className="p-3 bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-2xl group-hover:scale-110 transition-transform">
                <IconFlame stroke={2} className="w-8 h-8" />
              </div>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm">
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-none dark:bg-emerald-500/20 dark:text-emerald-400 font-bold px-3 py-1.5 rounded-xl">
                <IconTrendingDown stroke={2} className="w-4 h-4 mr-1" />
                -40 kcal
              </Badge>
              <span className="text-slate-500 font-medium">geçen haftaya göre</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Weight Change Chart */}
        <Card className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl overflow-hidden col-span-2 xl:col-span-1">
          <CardHeader className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800/50">
            <CardTitle className="text-xl font-extrabold text-slate-800 dark:text-white">Kilo Değişim Grafiği</CardTitle>
            <CardDescription className="text-base mt-1">Zaman içindeki kilo kayıp trendiniz</CardDescription>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockWeightData} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
                <defs>
                  <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tickMargin={15} tick={{ fontSize: 13, fontWeight: 500 }} />
                <YAxis domain={["dataMin - 1", "dataMax + 1"]} axisLine={false} tickLine={false} tickMargin={15} tick={{ fontSize: 13, fontWeight: 500 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="weight" 
                  stroke="#10b981" 
                  strokeWidth={4} 
                  fillOpacity={1} 
                  fill="url(#colorWeight)" 
                  name="Kilo (kg)"
                  activeDot={{ r: 8, strokeWidth: 0, fill: '#059669' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Weekly Calories Chart */}
        <Card className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl overflow-hidden col-span-2 xl:col-span-1">
          <CardHeader className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800/50">
            <CardTitle className="text-xl font-extrabold text-slate-800 dark:text-white">Haftalık Kalori Alımı</CardTitle>
            <CardDescription className="text-base mt-1">Bu hafta aldığınız kalori vs hedef kalori (2000 kcal)</CardDescription>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockCalorieData} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tickMargin={15} tick={{ fontSize: 13, fontWeight: 500 }} />
                <YAxis axisLine={false} tickLine={false} tickMargin={15} tick={{ fontSize: 13, fontWeight: 500 }} />
                <Tooltip 
                  cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontWeight: 'bold' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontWeight: 'bold' }} />
                <Bar dataKey="calorie" fill="#6366f1" name="Alınan (kcal)" radius={[6, 6, 0, 0]} maxBarSize={45} />
                <Bar dataKey="goal" fill="#cbd5e1" name="Hedef (kcal)" radius={[6, 6, 0, 0]} maxBarSize={45} opacity={0.5} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
