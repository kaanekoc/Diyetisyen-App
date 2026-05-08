"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Plus } from "lucide-react";

export default function WaterPage() {
  const [waterAmount, setWaterAmount] = useState(1000); // in ml
  const dailyGoal = 2500;

  const addWater = (amount: number) => {
    setWaterAmount((prev) => Math.min(prev + amount, 5000));
  };

  const progress = Math.min((waterAmount / dailyGoal) * 100, 100);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Su Takibi</h2>
        <p className="text-muted-foreground">Günlük su tüketiminizi takip edin.</p>
      </div>

      <Card className="max-w-md mx-auto">
        <CardHeader className="text-center pb-2">
          <CardTitle className="flex flex-col items-center gap-2">
            <Droplets className="h-10 w-10 text-cyan-500" />
            <span>{waterAmount} / {dailyGoal} ml</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div 
              className="bg-cyan-500 h-4 rounded-full transition-all duration-500" 
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Button variant="outline" className="flex flex-col h-auto py-3 border-cyan-200 hover:bg-cyan-50" onClick={() => addWater(200)}>
              <Plus className="h-4 w-4 mb-1 text-cyan-600" />
              <span className="text-xs">Bardak</span>
              <span className="text-xs font-bold text-cyan-700">200 ml</span>
            </Button>
            <Button variant="outline" className="flex flex-col h-auto py-3 border-cyan-200 hover:bg-cyan-50" onClick={() => addWater(500)}>
              <Plus className="h-4 w-4 mb-1 text-cyan-600" />
              <span className="text-xs">Şişe</span>
              <span className="text-xs font-bold text-cyan-700">500 ml</span>
            </Button>
            <Button variant="outline" className="flex flex-col h-auto py-3 border-cyan-200 hover:bg-cyan-50" onClick={() => addWater(1000)}>
              <Plus className="h-4 w-4 mb-1 text-cyan-600" />
              <span className="text-xs">Sürahi</span>
              <span className="text-xs font-bold text-cyan-700">1 L</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
