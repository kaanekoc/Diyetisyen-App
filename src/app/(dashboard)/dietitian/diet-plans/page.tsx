"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash, Save } from "lucide-react";

export default function DietPlanCreatorPage() {
  const [meals, setMeals] = useState([{ id: 1, name: "Kahvaltı", description: "Yulaf ezmesi, 1 bardak süt, 1 adet muz", calories: 350 }]);

  const addMeal = () => {
    setMeals([...meals, { id: Date.now(), name: "Yeni Öğün", description: "", calories: 0 }]);
  };

  const removeMeal = (id: number) => {
    setMeals(meals.filter(m => m.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Diyet Listesi Oluşturucu</h2>
          <p className="text-muted-foreground">Hastalarınız için kişiselleştirilmiş programlar hazırlayın.</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
          <Save className="mr-2 h-4 w-4" /> Programı Kaydet
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Program Bilgileri</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Hasta Seçimi</label>
                <select className="w-full flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                  <option>Ayşe Yılmaz</option>
                  <option>Elif Demir</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Başlangıç Tarihi</label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Bitiş Tarihi</label>
                <Input type="date" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-4">
          <Card>
            <CardHeader className="flex flex-row justify-between items-center">
              <div>
                <CardTitle>Öğün Planları</CardTitle>
                <CardDescription>Oluşturduğunuz günlük beslenme dökümü</CardDescription>
              </div>
              <Button variant="outline" onClick={addMeal}>
                <Plus className="mr-2 h-4 w-4" /> Yeni Öğün Ekle
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {meals.map((meal) => (
                <div key={meal.id} className="p-4 border rounded-md relative group bg-gray-50 dark:bg-gray-900 dark:border-gray-800">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-950/50"
                    onClick={() => removeMeal(meal.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                  <div className="grid gap-4 w-[90%]">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-500">Öğün Adı / Zamanı</label>
                      <Input defaultValue={meal.name} className="bg-background text-foreground border-input" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-500">İçerik (Ne Yenecek?)</label>
                      <textarea 
                        className="w-full min-h-[60px] p-2 border border-input rounded-md bg-background text-foreground focus:outline-emerald-500 text-sm"
                        defaultValue={meal.description}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-500">Hedef Kalori (Opsiyonal)</label>
                      <Input type="number" defaultValue={meal.calories} className="bg-background text-foreground border-input" />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
