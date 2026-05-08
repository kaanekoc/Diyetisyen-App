"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  IconSearch, 
  IconUserPlus, 
  IconFileText, 
  IconActivityHeartbeat, 
  IconAlertCircle, 
  IconTrendingDown, 
  IconClipboardList 
} from "@tabler/icons-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const initialPatients = [
  { 
    id: "1", name: "Ayşe Yılmaz", plan: "Aktif", lastVisit: "12 Mar 2026", progress: "%85", goal: 65, currentWeight: 72, startWeight: 80,
    age: 34, gender: "Kadın", height: 165,
    allergies: ["Gluten İntoleransı", "Yer Fıstığı"],
    diseases: ["Haşimato Tiroidi"],
    bloodTest: "D Vitamini Eksikliği (15 ng/mL), B12 Sınırda",
    avatar: "AY"
  },
  { 
    id: "2", name: "Mehmet Kaya", plan: "Beklemede", lastVisit: "10 Mar 2026", progress: "%60", goal: 80, currentWeight: 88, startWeight: 95,
    age: 42, gender: "Erkek", height: 182,
    allergies: ["Yok"],
    diseases: ["Tip 2 Diyabet Başlangıcı", "Hipertansiyon"],
    bloodTest: "Açlık Kan Şekeri 115 mg/dL, Kolesterol Yüksek",
    avatar: "MK"
  },
  { 
    id: "3", name: "Elif Demir", plan: "Aktif", lastVisit: "15 Mar 2026", progress: "%92", goal: 55, currentWeight: 58, startWeight: 63,
    age: 26, gender: "Kadın", height: 160,
    allergies: ["Laktoz İntoleransı"],
    diseases: ["Polikistik Over Sendromu (PKOS)"],
    bloodTest: "İnsülin Direnci (HOMA-IR 2.8)",
    avatar: "ED"
  },
  { 
    id: "4", name: "Burak Şahin", plan: "Pasif", lastVisit: "01 Mar 2026", progress: "%40", goal: 75, currentWeight: 85, startWeight: 88,
    age: 29, gender: "Erkek", height: 178,
    allergies: ["Deniz Ürünleri"],
    diseases: ["Yok"],
    bloodTest: "Tüm değerler normal aralıkta",
    avatar: "BŞ"
  },
];

export default function PatientsListPage() {
  const [patients, setPatients] = useState(initialPatients);
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [newPatientName, setNewPatientName] = useState("");

  const filteredPatients = patients.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddPatient = () => {
    if (!newPatientName) return;
    const newPatient = {
      id: Date.now().toString(),
      name: newPatientName,
      plan: "Yeni Kayıt",
      lastVisit: "-",
      progress: "%0",
      goal: 0,
      currentWeight: 0,
      startWeight: 0,
      age: 0, gender: "Bilinmiyor", height: 0,
      allergies: ["Belirtilmedi"],
      diseases: ["Belirtilmedi"],
      bloodTest: "Sisteme yüklenmedi",
      avatar: newPatientName.substring(0, 2).toUpperCase()
    };
    setPatients([newPatient, ...patients]);
    setNewPatientName("");
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-700 slide-in-from-bottom-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white/50 dark:bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl shadow-slate-200/20 dark:shadow-none backdrop-blur-xl">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            Danışan Yönetimi (CRM)
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Sisteme kayıtlı hastalarınızın sağlık geçmişlerini ve gelişimlerini detaylıca inceleyin.</p>
        </div>
        
        {/* Yeni Hasta Ekle Dialog */}
        <Dialog>
          <DialogTrigger render={
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg shadow-indigo-500/25 h-12 px-6 rounded-2xl font-bold transition-all hover:scale-105" />
          }>
            <IconUserPlus stroke={2} className="mr-2 h-5 w-5" /> Yeni Danışan Ekle
          </DialogTrigger>
          <DialogContent className="sm:max-w-md p-6 rounded-3xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-slate-900 dark:text-white">Yeni Danışan Profili Oluştur</DialogTitle>
              <DialogDescription className="text-slate-500 dark:text-slate-400 mt-2">
                Hızlıca sisteme yeni bir danışan kaydedin ve uygulamanız üzerinden davet bağlantısı gönderin.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-5 py-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Ad Soyad</label>
                <Input className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800" placeholder="Örn: Ahmet Yılmaz" value={newPatientName} onChange={(e) => setNewPatientName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">E-posta Adresi</label>
                <Input type="email" className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800" placeholder="ahmet@example.com" />
              </div>
              <DialogClose render={<Button className="w-full h-12 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 text-white" onClick={handleAddPatient} />}>
                Kaydet ve Davet Linki Gönder
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/80 dark:bg-slate-900/80 p-4 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md">
        <div className="relative w-full sm:w-96">
          <IconSearch stroke={2} className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <Input 
            type="search" 
            placeholder="İsim, hastalık veya alerji ile ara..." 
            className="pl-11 h-12 rounded-xl bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus-visible:ring-indigo-500 font-medium text-sm" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="flex-1 sm:flex-none h-12 px-6 rounded-xl border-slate-200 dark:border-slate-800 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300" onClick={() => setPatients([...patients].reverse())}>
            Tarihe Göre Sırala
          </Button>
        </div>
      </div>

      {/* CRM Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-200/60 dark:border-slate-800/60 overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50/80 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-slate-800/60">
            <TableRow className="hover:bg-transparent">
              <TableHead className="py-5 font-bold text-slate-600 dark:text-slate-400 pl-6">Danışan Adı</TableHead>
              <TableHead className="font-bold text-slate-600 dark:text-slate-400">Durum</TableHead>
              <TableHead className="font-bold text-slate-600 dark:text-slate-400">Hedef & İlerleme</TableHead>
              <TableHead className="font-bold text-slate-600 dark:text-slate-400">Son Görüşme</TableHead>
              <TableHead className="text-right font-bold text-slate-600 dark:text-slate-400 pr-6">Aksiyonlar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPatients.map((patient) => (
              <TableRow key={patient.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors border-b border-slate-100 dark:border-slate-800/60">
                <TableCell className="py-4 pl-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-indigo-100 dark:border-indigo-900">
                      <AvatarFallback className="bg-gradient-to-tr from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-400 font-bold">
                        {patient.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-base text-slate-900 dark:text-slate-100">{patient.name}</div>
                      <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{patient.age} Yaş, {patient.gender}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={`px-3 py-1 rounded-lg font-bold text-xs border ${
                    patient.plan === 'Aktif' ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800' : 
                    patient.plan === 'Beklemede' ? 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800' : 
                    'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                  }`}>
                    {patient.plan}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="space-y-2 w-36">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-indigo-600 dark:text-indigo-400">{patient.progress} Uyum</span>
                      <span className="text-slate-700 dark:text-slate-300">{patient.currentWeight}kg</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full" style={{ width: patient.progress.replace('%','') + '%' }}></div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-slate-500 dark:text-slate-400 font-medium text-sm">{patient.lastVisit}</TableCell>
                <TableCell className="text-right pr-6">
                  <div className="flex justify-end gap-2">
                    {/* Detailed CRM Profile Dialog */}
                    <Dialog>
                      <DialogTrigger render={
                        <Button variant="outline" size="sm" className="h-9 px-3 rounded-xl font-semibold border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors" onClick={() => setSelectedPatient(patient)} />
                      }>
                        <IconFileText stroke={2} className="w-4 h-4 mr-1.5" /> Profil
                      </DialogTrigger>
                      {selectedPatient?.id === patient.id && (
                        <DialogContent className="sm:max-w-[750px] h-[90vh] sm:h-auto flex flex-col p-0 gap-0 overflow-hidden rounded-3xl border-0 shadow-2xl shadow-indigo-500/10">
                          <div className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 p-8 text-white shrink-0 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                            <div className="flex items-start justify-between relative z-10">
                              <div className="flex items-center gap-5">
                                <Avatar className="h-20 w-20 border-4 border-white/20 shadow-xl">
                                  <AvatarFallback className="bg-white/10 text-2xl font-black">{patient.avatar}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <DialogTitle className="text-3xl font-extrabold text-white m-0 tracking-tight">{patient.name}</DialogTitle>
                                  <DialogDescription className="text-indigo-100 font-medium mt-1 text-sm flex items-center gap-2 opacity-90">
                                    {patient.age} Yaş • {patient.gender} • Boy: {patient.height} cm
                                  </DialogDescription>
                                </div>
                              </div>
                              <Badge className="bg-white/20 hover:bg-white/30 border-none text-white font-bold px-4 py-1.5 rounded-xl shadow-sm backdrop-blur-sm">
                                {patient.plan} Danışan
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950">
                            <Tabs defaultValue="health" className="w-full">
                              <TabsList className="w-full justify-start rounded-none border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 h-14">
                                <TabsTrigger value="health" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 font-bold text-sm rounded-none px-5 h-full transition-none">Sağlık & Tahliller</TabsTrigger>
                                <TabsTrigger value="progress" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 font-bold text-sm rounded-none px-5 h-full transition-none">Gelişim Takibi</TabsTrigger>
                                <TabsTrigger value="diet" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 font-bold text-sm rounded-none px-5 h-full transition-none">Güncel Diyet</TabsTrigger>
                              </TabsList>
                              
                              <div className="p-6 sm:p-8">
                                <TabsContent value="health" className="m-0 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                  <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="bg-white dark:bg-slate-900 border border-rose-100 dark:border-rose-900/30 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                      <h4 className="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2 mb-4">
                                        <IconAlertCircle stroke={2} className="w-5 h-5" /> Alerjenler & Hassasiyetler
                                      </h4>
                                      <div className="flex flex-wrap gap-2.5">
                                        {patient.allergies.map((al:string, i:number) => (
                                          <Badge key={i} variant="secondary" className="bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 font-semibold px-3 py-1 rounded-lg border-rose-100 dark:border-rose-900">{al}</Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/30 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                      <h4 className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2 mb-4">
                                        <IconActivityHeartbeat stroke={2} className="w-5 h-5" /> Kronik Rahatsızlıklar
                                      </h4>
                                      <div className="flex flex-wrap gap-2.5">
                                        {patient.diseases.map((ds:string, i:number) => (
                                          <Badge key={i} variant="secondary" className="bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300 font-semibold px-3 py-1 rounded-lg border-indigo-100 dark:border-indigo-900">{ds}</Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2 text-lg">
                                      <IconFileText stroke={2} className="w-5 h-5 text-emerald-500" /> Kan Tahlili Özeti
                                    </h4>
                                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 leading-relaxed">
                                      {patient.bloodTest}
                                    </p>
                                    <div className="mt-5 flex flex-wrap gap-3">
                                      <Button variant="outline" size="sm" className="font-bold rounded-xl h-10 px-4 border-slate-200 dark:border-slate-700">Tam Raporu Gör (PDF)</Button>
                                      <Button className="font-bold rounded-xl h-10 px-4 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800 dark:hover:bg-indigo-900/50">Tahlil İste</Button>
                                    </div>
                                  </div>
                                </TabsContent>
                                
                                <TabsContent value="progress" className="m-0 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                  <div className="grid grid-cols-3 gap-5">
                                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl text-center shadow-sm">
                                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 uppercase font-bold tracking-wider">Başlangıç</p>
                                      <p className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">{patient.startWeight}<span className="text-sm font-bold text-slate-400 ml-1">kg</span></p>
                                    </div>
                                    <div className="bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-200 dark:border-emerald-900/40 p-5 rounded-2xl text-center shadow-sm ring-1 ring-emerald-500/20">
                                      <p className="text-xs text-emerald-600 dark:text-emerald-400 mb-2 uppercase font-bold tracking-wider">Mevcut</p>
                                      <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">{patient.currentWeight}<span className="text-sm font-bold ml-1 opacity-70">kg</span></p>
                                      <div className="flex items-center justify-center text-xs text-emerald-600 dark:text-emerald-500 mt-2 font-bold bg-emerald-100 dark:bg-emerald-900/40 w-max mx-auto px-2 py-1 rounded-md">
                                        <IconTrendingDown stroke={2} className="w-3.5 h-3.5 mr-1" />
                                        {(patient.startWeight - patient.currentWeight).toFixed(1)} kg verildi
                                      </div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl text-center shadow-sm">
                                      <p className="text-xs text-indigo-600 dark:text-indigo-400 mb-2 uppercase font-bold tracking-wider">Hedef</p>
                                      <p className="text-3xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight">{patient.goal}<span className="text-sm font-bold ml-1 opacity-70">kg</span></p>
                                    </div>
                                  </div>
                                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm flex items-center justify-center h-56 text-slate-400 flex-col group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                      <IconActivityHeartbeat stroke={1.5} className="w-8 h-8 text-slate-400 dark:text-slate-500" />
                                    </div>
                                    <p className="font-bold text-slate-600 dark:text-slate-300">Detaylı Vücut Analizi Grafikleri</p>
                                    <p className="text-sm font-medium mt-1">Son ölçüm: {patient.lastVisit}</p>
                                  </div>
                                </TabsContent>

                                <TabsContent value="diet" className="m-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                  <div className="bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/50 p-10 rounded-3xl shadow-sm text-center flex flex-col items-center">
                                    <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mb-5">
                                      <IconClipboardList stroke={1.5} className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Güncel Programı İncele veya Düzenle</h3>
                                    <p className="text-sm font-medium text-indigo-700/80 dark:text-indigo-300/80 mb-8 max-w-md leading-relaxed">
                                      Danışanın mevcut beslenme programını görüntüleyebilir, makro hesaplamalarını yapabilir ve alternatif besinler ekleyebilirsiniz.
                                    </p>
                                    <Link href="/dietitian/diet-plans" className="w-full sm:w-auto">
                                      <Button className="w-full sm:w-auto h-12 px-8 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20 transition-all hover:scale-105">
                                        Diyet Listesi Oluşturucuya Git
                                      </Button>
                                    </Link>
                                  </div>
                                </TabsContent>
                              </div>
                            </Tabs>
                          </div>
                        </DialogContent>
                      )}
                    </Dialog>

                    <Link href="/dietitian/diet-plans">
                      <Button size="sm" className="h-9 px-3 rounded-xl font-bold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800 dark:hover:bg-indigo-900/50 transition-colors">
                        <IconClipboardList stroke={2} className="w-4 h-4 mr-1.5" /> Diyet Yaz
                      </Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {filteredPatients.length === 0 && (
          <div className="p-16 text-center text-slate-500 dark:text-slate-400">
            <IconSearch stroke={1.5} className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p className="font-bold text-lg">Sonuç Bulunamadı</p>
            <p className="text-sm font-medium mt-1">Aradığınız kritere uygun danışan bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
}
