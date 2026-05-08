"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";

const mockWeightData = [
  { date: "1 Mar", weight: 75.2 },
  { date: "7 Mar", weight: 74.8 },
  { date: "14 Mar", weight: 74.1 },
  { date: "21 Mar", weight: 73.5 },
  { date: "28 Mar", weight: 72.9 },
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
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">İlerleme ve Grafikler</h2>
        <p className="text-muted-foreground">Kilonuzun ve kalori tüketiminizin zaman içindeki değişimi.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Weight Change Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Kilo Değişimi</CardTitle>
            <CardDescription>Son 1 aylık kilo takibiniz</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockWeightData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="date" />
                <YAxis domain={["dataMin - 1", "dataMax + 1"]} />
                <Tooltip />
                <Line type="monotone" dataKey="weight" stroke="#10b981" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} name="Kilo (kg)" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Weekly Calories Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Haftalık Kalori Alımı</CardTitle>
            <CardDescription>Bu hafta aldığınız kalori vs hedef kalori</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockCalorieData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="calorie" fill="#0ea5e9" name="Alınan" radius={[4, 4, 0, 0]} />
                <Bar dataKey="goal" fill="#e2e8f0" name="Hedef" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
