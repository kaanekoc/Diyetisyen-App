"use client";

import { useState, Fragment } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from '@headlessui/react';
import { 
  IconUser, 
  IconHeartbeat, 
  IconFileText, 
  IconAlertCircle, 
  IconDeviceFloppy, 
  IconUpload,
  IconX
} from "@tabler/icons-react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

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
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Profil ve Sağlık Verileri</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Kişisel bilgilerinizi ve sağlık geçmişinizi güncel tutun.</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-xl shadow-emerald-500/20 h-12 px-6 rounded-2xl font-bold group">
          <IconDeviceFloppy stroke={2} className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" /> 
          Değişiklikleri Kaydet
        </Button>
      </div>

      <TabGroup>
        <TabList className="flex space-x-2 rounded-2xl bg-slate-200/50 dark:bg-slate-800/50 p-1.5 max-w-2xl">
          <Tab
            className="w-full rounded-xl py-3 text-sm font-semibold leading-5 transition-all duration-200 focus:outline-none flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-slate-200 data-selected:bg-white data-selected:dark:bg-slate-900 data-selected:text-emerald-600 data-selected:dark:text-emerald-400 data-selected:shadow-sm"
          >
            <IconUser stroke={2} className="w-5 h-5" /> Kişisel Bilgiler
          </Tab>
          <Tab
            className="w-full rounded-xl py-3 text-sm font-semibold leading-5 transition-all duration-200 focus:outline-none flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-slate-200 data-selected:bg-white data-selected:dark:bg-slate-900 data-selected:text-emerald-600 data-selected:dark:text-emerald-400 data-selected:shadow-sm"
          >
            <IconHeartbeat stroke={2} className="w-5 h-5" /> Sağlık Durumu
          </Tab>
          <Tab
            className="w-full rounded-xl py-3 text-sm font-semibold leading-5 transition-all duration-200 focus:outline-none flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-slate-200 data-selected:bg-white data-selected:dark:bg-slate-900 data-selected:text-emerald-600 data-selected:dark:text-emerald-400 data-selected:shadow-sm"
          >
            <IconFileText stroke={2} className="w-5 h-5" /> Tahlil Sonuçları
          </Tab>
        </TabList>

        <TabPanels className="mt-8">
          <TabPanel className="focus:outline-none">
            <Card className="border-0 shadow-xl shadow-slate-200/30 dark:shadow-none bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl overflow-hidden">
              <CardHeader className="bg-slate-50/50 dark:bg-slate-800/20 border-b border-slate-100 dark:border-slate-800/50 p-6 sm:p-8">
                <CardTitle className="text-xl font-bold text-slate-800 dark:text-white">Fiziksel Özellikler ve Hedefler</CardTitle>
                <CardDescription className="text-slate-500 mt-1">Diyetisyeninizin size en uygun programı hazırlayabilmesi için bu alanları doğru doldurun.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Boy (cm)</label>
                  <Input type="number" defaultValue="165" className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus-visible:ring-emerald-500 font-medium" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Mevcut Kilo (kg)</label>
                  <Input type="number" defaultValue="72" className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus-visible:ring-emerald-500 font-medium" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Yaş</label>
                  <Input type="number" defaultValue="34" className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus-visible:ring-emerald-500 font-medium" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Cinsiyet</label>
                  <select className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Kadın</option>
                    <option>Erkek</option>
                    <option>Belirtmek İstemiyorum</option>
                  </select>
                </div>
                <div className="space-y-3 md:col-span-2">
                  <label className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">Hedef Kilo (kg)</label>
                  <Input type="number" defaultValue="65" className="h-14 text-lg rounded-xl border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-900/10 focus-visible:ring-emerald-500 font-bold text-emerald-900 dark:text-emerald-100 shadow-inner shadow-emerald-100/50 dark:shadow-none" />
                </div>
              </CardContent>
            </Card>
          </TabPanel>

          <TabPanel className="focus:outline-none space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl shadow-slate-200/30 dark:shadow-none bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl overflow-hidden">
                <CardHeader className="bg-rose-50/50 dark:bg-rose-900/10 border-b border-rose-100 dark:border-rose-800/50 p-6">
                  <CardTitle className="text-lg font-bold flex items-center text-rose-600 dark:text-rose-400">
                    <IconAlertCircle stroke={2} className="w-6 h-6 mr-3" /> Alerjenler & İntoleranslar
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="flex flex-wrap gap-2.5">
                    {allergies.map(allergy => (
                      <Badge key={allergy} className="px-4 py-2 text-sm bg-rose-100 text-rose-700 hover:bg-rose-200 dark:bg-rose-900/40 dark:text-rose-300 dark:hover:bg-rose-900/60 rounded-xl cursor-pointer group transition-colors">
                        {allergy} <IconX stroke={2} className="w-4 h-4 ml-2 text-rose-400 group-hover:text-rose-600 dark:text-rose-500 dark:group-hover:text-rose-300" onClick={(e) => { e.stopPropagation(); removeAllergy(allergy); }} />
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Yeni Ekle (Enter'a Basın)</label>
                    <Input 
                      placeholder="Örn: Laktoz, Gluten, Çilek..." 
                      value={newAllergy}
                      onChange={e => setNewAllergy(e.target.value)}
                      onKeyDown={addAllergy}
                      className="h-12 rounded-xl border-rose-200 dark:border-rose-800/50 bg-white dark:bg-slate-900 focus-visible:ring-rose-500"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl shadow-slate-200/30 dark:shadow-none bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl overflow-hidden">
                <CardHeader className="bg-indigo-50/50 dark:bg-indigo-900/10 border-b border-indigo-100 dark:border-indigo-800/50 p-6">
                  <CardTitle className="text-lg font-bold flex items-center text-indigo-600 dark:text-indigo-400">
                    <IconHeartbeat stroke={2} className="w-6 h-6 mr-3" /> Kronik Rahatsızlıklar
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="flex flex-wrap gap-2.5">
                    {diseases.map(disease => (
                      <Badge key={disease} className="px-4 py-2 text-sm bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900/40 dark:text-indigo-300 dark:hover:bg-indigo-900/60 rounded-xl cursor-pointer group transition-colors">
                        {disease} <IconX stroke={2} className="w-4 h-4 ml-2 text-indigo-400 group-hover:text-indigo-600 dark:text-indigo-500 dark:group-hover:text-indigo-300" onClick={(e) => { e.stopPropagation(); removeDisease(disease); }} />
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Yeni Ekle (Enter'a Basın)</label>
                    <Input 
                      placeholder="Örn: Haşimato, Tip 2 Diyabet..." 
                      value={newDisease}
                      onChange={e => setNewDisease(e.target.value)}
                      onKeyDown={addDisease}
                      className="h-12 rounded-xl border-indigo-200 dark:border-indigo-800/50 bg-white dark:bg-slate-900 focus-visible:ring-indigo-500"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabPanel>

          <TabPanel className="focus:outline-none">
            <Card className="border-0 shadow-xl shadow-slate-200/30 dark:shadow-none bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl overflow-hidden">
              <CardHeader className="bg-slate-50/50 dark:bg-slate-800/20 border-b border-slate-100 dark:border-slate-800/50 p-6 sm:p-8">
                <CardTitle className="text-xl font-bold">Tahlil Sonuçları & Belgeler</CardTitle>
                <CardDescription className="text-slate-500 mt-1">Son yaptırdığınız kan tahlillerini PDF veya görsel olarak sisteme yükleyin.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="group border-2 border-dashed border-emerald-200 dark:border-emerald-800/50 rounded-3xl p-12 text-center bg-emerald-50/30 dark:bg-emerald-900/5 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 cursor-pointer">
                  <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm ring-1 ring-emerald-100 dark:ring-emerald-800 group-hover:scale-110 transition-transform">
                    <IconUpload stroke={1.5} className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="font-bold text-xl text-emerald-900 dark:text-emerald-100 mb-2">Dosyaları Buraya Sürükleyin</h3>
                  <p className="text-emerald-600/70 dark:text-emerald-400/70 mb-8 font-medium">veya bilgisayarınızdan seçmek için tıklayın (PDF, JPG, PNG)</p>
                  <Button className="bg-white hover:bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-slate-900 dark:border-emerald-800 dark:text-emerald-400 h-12 px-8 rounded-xl font-bold shadow-sm" variant="outline">
                    Dosya Seç
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="bg-slate-50/50 dark:bg-slate-800/20 border-t border-slate-100 dark:border-slate-800/50 p-6 sm:p-8">
                <div className="w-full">
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-4">Yüklenen Dosyalar</h4>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="bg-rose-50 dark:bg-rose-500/10 p-3 rounded-xl">
                        <IconFileText stroke={1.5} className="w-6 h-6 text-rose-500" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white">Kan_Tahlili_Ekim_2025.pdf</div>
                        <div className="text-sm font-medium text-slate-500 mt-0.5">1.2 MB • 2 ay önce yüklendi</div>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 rounded-xl font-semibold">Görüntüle</Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
