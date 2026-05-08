"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { User, Activity, FileText, AlertCircle, Save, Upload } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PatientProfilePage() {
  const [allergies, setAllergies] = useState(["Yer fıstığı"]);
  const [newAllergy, setNewAllergy] = useState("");
  const [diseases, setDiseases] = useState(["İnsülin Direnci"]);
  const [newDisease, setNewDisease] = useState("");

  const addAllergy = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newAllergy.trim()) {
      e.preventDefault();
      setAllergies([...allergies, newAllergy.trim()]);
      setNewAllergy("");
    }
  };

  const removeAllergy = (allergy: string) => {
    setAllergies(allergies.filter(a => a !== allergy));
  };

  const addDisease = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newDisease.trim()) {
      e.preventDefault();
      setDiseases([...diseases, newDisease.trim()]);
      setNewDisease("");
    }
  };

  const removeDisease = (disease: string) => {
    setDiseases(diseases.filter(d => d !== disease));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Profil ve Sağlık Verileri</h2>
          <p className="text-muted-foreground mt-1">Kişisel bilgilerinizi ve sağlık geçmişinizi güncel tutun.</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md">
          <Save className="w-4 h-4 mr-2" /> Değişiklikleri Kaydet
        </Button>
      </div>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 max-w-2xl bg-white dark:bg-card border border-slate-200 dark:border-slate-800 p-1 rounded-xl shadow-sm h-auto">
          <TabsTrigger value="personal" className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700 dark:data-[state=active]:bg-emerald-900/50 dark:data-[state=active]:text-emerald-400 py-2.5 rounded-lg">
            <User className="w-4 h-4 mr-2" /> Kişisel Bilgiler
          </TabsTrigger>
          <TabsTrigger value="health" className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700 dark:data-[state=active]:bg-emerald-900/50 dark:data-[state=active]:text-emerald-400 py-2.5 rounded-lg">
            <Activity className="w-4 h-4 mr-2" /> Sağlık Durumu
          </TabsTrigger>
          <TabsTrigger value="tests" className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700 dark:data-[state=active]:bg-emerald-900/50 dark:data-[state=active]:text-emerald-400 py-2.5 rounded-lg">
            <FileText className="w-4 h-4 mr-2" /> Tahlil Sonuçları
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="personal" className="m-0 space-y-6">
            <Card className="border-none shadow-md">
              <CardHeader className="bg-slate-50/50 dark:bg-slate-900/20 border-b border-slate-100 dark:border-slate-800">
                <CardTitle className="text-lg">Fiziksel Özellikler ve Hedefler</CardTitle>
                <CardDescription>Diyetisyeninizin size en uygun programı hazırlayabilmesi için bu alanları doğru doldurun.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Boy (cm)</label>
                  <Input type="number" defaultValue="165" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Mevcut Kilo (kg)</label>
                  <Input type="number" defaultValue="72" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Yaş</label>
                  <Input type="number" defaultValue="34" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Cinsiyet</label>
                  <select className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm">
                    <option>Kadın</option>
                    <option>Erkek</option>
                    <option>Belirtmek İstemiyorum</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Hedef Kilo (kg)</label>
                  <Input type="number" defaultValue="65" className="border-emerald-200 focus-visible:ring-emerald-500" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="health" className="m-0 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-none shadow-md">
                <CardHeader className="bg-rose-50/50 dark:bg-rose-950/20 border-b border-rose-100 dark:border-rose-900/30">
                  <CardTitle className="text-lg flex items-center text-rose-700 dark:text-rose-400">
                    <AlertCircle className="w-5 h-5 mr-2" /> Alerjenler & İntoleranslar
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {allergies.map(allergy => (
                      <Badge key={allergy} variant="secondary" className="px-3 py-1.5 text-sm bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300 hover:bg-rose-200 cursor-pointer" onClick={() => removeAllergy(allergy)}>
                        {allergy} <span className="ml-2 text-rose-500">×</span>
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-2">
                    <label className="text-xs text-muted-foreground mb-1 block">Yeni ekle (Yazıp Enter'a basın)</label>
                    <Input 
                      placeholder="Örn: Laktoz, Gluten, Çilek..." 
                      value={newAllergy}
                      onChange={e => setNewAllergy(e.target.value)}
                      onKeyDown={addAllergy}
                      className="border-rose-200 focus-visible:ring-rose-500"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader className="bg-indigo-50/50 dark:bg-indigo-950/20 border-b border-indigo-100 dark:border-indigo-900/30">
                  <CardTitle className="text-lg flex items-center text-indigo-700 dark:text-indigo-400">
                    <Activity className="w-5 h-5 mr-2" /> Kronik Rahatsızlıklar
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {diseases.map(disease => (
                      <Badge key={disease} variant="secondary" className="px-3 py-1.5 text-sm bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 hover:bg-indigo-200 cursor-pointer" onClick={() => removeDisease(disease)}>
                        {disease} <span className="ml-2 text-indigo-500">×</span>
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-2">
                    <label className="text-xs text-muted-foreground mb-1 block">Yeni ekle (Yazıp Enter'a basın)</label>
                    <Input 
                      placeholder="Örn: Haşimato, Tip 2 Diyabet..." 
                      value={newDisease}
                      onChange={e => setNewDisease(e.target.value)}
                      onKeyDown={addDisease}
                      className="border-indigo-200 focus-visible:ring-indigo-500"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tests" className="m-0 space-y-6">
            <Card className="border-none shadow-md">
              <CardHeader className="bg-slate-50/50 dark:bg-slate-900/20 border-b border-slate-100 dark:border-slate-800">
                <CardTitle className="text-lg">Tahlil Sonuçları & Belgeler</CardTitle>
                <CardDescription>Son yaptırdığınız kan tahlillerini PDF veya görsel olarak sisteme yükleyin.</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="border-2 border-dashed border-emerald-200 dark:border-emerald-800 rounded-xl p-12 text-center bg-emerald-50/30 dark:bg-emerald-950/10 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors cursor-pointer">
                  <Upload className="w-10 h-10 mx-auto text-emerald-500 mb-4 opacity-75" />
                  <h3 className="font-semibold text-lg text-emerald-900 dark:text-emerald-100 mb-1">Dosyaları Buraya Sürükleyin</h3>
                  <p className="text-sm text-emerald-600/80 dark:text-emerald-400/80 mb-6">veya bilgisayarınızdan seçmek için tıklayın (PDF, JPG, PNG)</p>
                  <Button className="bg-white hover:bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-card dark:border-emerald-800 dark:text-emerald-400" variant="outline">
                    Dosya Seç
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="bg-slate-50/50 dark:bg-slate-900/20 border-t border-slate-100 dark:border-slate-800 p-4">
                <div className="w-full">
                  <h4 className="font-semibold mb-3 text-sm">Yüklenen Dosyalar</h4>
                  <div className="flex items-center justify-between p-3 bg-white dark:bg-card rounded-lg border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-rose-500" />
                      <div>
                        <div className="font-medium text-sm">Kan_Tahlili_Ekim_2025.pdf</div>
                        <div className="text-xs text-muted-foreground">1.2 MB • 2 ay önce yüklendi</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-slate-500">Görüntüle</Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
