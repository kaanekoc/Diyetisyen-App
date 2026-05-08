"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Utensils } from "lucide-react";

export default function MealsPage() {
  const [mealText, setMealText] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setAnalyzing(true);
    
    // AI Endpoint call simulation
    setTimeout(() => {
      setResult({
        calories: Math.floor(Math.random() * 400 + 200),
        protein: Math.floor(Math.random() * 30 + 10),
        carbs: Math.floor(Math.random() * 60 + 20),
        fat: Math.floor(Math.random() * 20 + 5)
      });
      setAnalyzing(false);
      setMealText("");
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Öğün Ekle (AI Analizi)</h2>
        <p className="text-muted-foreground">Yediğiniz yemeği yazın, yapay zeka kalorisini tahmin etsin.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Ne Yedin?</CardTitle>
            <CardDescription>Örneğin: "1 tabak taze fasulye ve 3 kaşık yoğurt"</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAnalyze} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Metin Olarak Yazın</label>
                <textarea 
                  className="w-full p-3 border border-input rounded-md focus:outline-emerald-500 bg-background" 
                  rows={3} 
                  placeholder="Öğününüzü detaylıca yazın... (Örn: 1 kase mercimek çorbası)"
                  value={mealText}
                  onChange={(e) => setMealText(e.target.value)}
                  disabled={analyzing}
                />
              </div>

              <div className="relative border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-md p-6 flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors bg-background">
                <Input type="file" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" disabled={analyzing} />
                <div className="text-center">
                  <div className="text-muted-foreground mb-1 font-medium">📷 Veya görsel yükleyin</div>
                  <div className="text-xs text-slate-400">Yapay zeka analiz için PNG, JPG (Maks 5MB)</div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white border-none" disabled={analyzing || (!mealText && false)}>
                {analyzing ? "Yapay Zeka Analiz Ediyor..." : "Analiz Et ve Kaydet"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {result && (
          <Card className="bg-emerald-50 border-emerald-200">
            <CardHeader>
              <CardTitle className="flex items-center text-emerald-800">
                <Utensils className="mr-2" />
                Analiz Sonucu
              </CardTitle>
              <CardDescription className="text-emerald-600">Başarıyla kaydedildi.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-emerald-200 pb-2">
                  <span className="font-medium text-emerald-800">Kalori</span>
                  <span className="font-bold text-emerald-900">{result.calories} kcal</span>
                </div>
                <div className="flex justify-between items-center border-b border-emerald-200 pb-2">
                  <span className="font-medium text-emerald-800">Protein</span>
                  <span className="font-bold text-emerald-900">{result.protein} g</span>
                </div>
                <div className="flex justify-between items-center border-b border-emerald-200 pb-2">
                  <span className="font-medium text-emerald-800">Karbonhidrat</span>
                  <span className="font-bold text-emerald-900">{result.carbs} g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-emerald-800">Yağ</span>
                  <span className="font-bold text-emerald-900">{result.fat} g</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
