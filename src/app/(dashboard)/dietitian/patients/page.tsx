"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus, FileText, Activity, AlertCircle, TrendingDown, ClipboardList } from "lucide-react";
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
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Danışan Yönetimi (CRM)</h2>
          <p className="text-muted-foreground mt-1">Sisteme kayıtlı hastalarınızın sağlık geçmişlerini ve gelişimlerini inceleyin.</p>
        </div>
        
        {/* Yeni Hasta Ekle Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white border-none shadow-md">
              <UserPlus className="mr-2 h-4 w-4" /> Yeni Danışan Ekle
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Yeni Danışan Profili Oluştur</DialogTitle>
              <DialogDescription>
                Hızlıca sisteme yeni bir danışan kaydedin ve davet bağlantısı gönderin.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Ad Soyad</label>
                <Input placeholder="Örn: Ahmet Yılmaz" value={newPatientName} onChange={(e) => setNewPatientName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">E-posta Adresi</label>
                <Input type="email" placeholder="ahmet@example.com" />
              </div>
              <DialogClose asChild>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={handleAddPatient}>
                  Kaydet ve Davet Linki Gönder
                </Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-card p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input 
            type="search" 
            placeholder="İsim, hastalık veya alerji ile ara..." 
            className="pl-9 bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="flex-1 sm:flex-none border-slate-200 dark:border-slate-800" onClick={() => setPatients([...patients].reverse())}>
            Tarihe Göre Sırala
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50/50 dark:bg-slate-900/50">
            <TableRow>
              <TableHead className="py-4">Danışan Adı</TableHead>
              <TableHead>Durum</TableHead>
              <TableHead>Hedef & İlerleme</TableHead>
              <TableHead>Son Görüşme</TableHead>
              <TableHead className="text-right">Aksiyonlar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPatients.map((patient) => (
              <TableRow key={patient.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                <TableCell className="py-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 border-2 border-slate-100 dark:border-slate-800">
                      <AvatarFallback className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400 font-semibold">
                        {patient.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100">{patient.name}</div>
                      <div className="text-xs text-muted-foreground">{patient.age} Yaş, {patient.gender}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={`font-medium ${
                    patient.plan === 'Aktif' ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800' : 
                    patient.plan === 'Beklemede' ? 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800' : 
                    'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                  }`}>
                    {patient.plan}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="space-y-1 w-32">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-emerald-600 dark:text-emerald-400">{patient.progress} Uyum</span>
                      <span>{patient.currentWeight}kg</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: patient.progress.replace('%','') + '%' }}></div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{patient.lastVisit}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    {/* Detailed CRM Profile Dialog */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800" onClick={() => setSelectedPatient(patient)}>
                          <FileText className="w-4 h-4 mr-1.5" /> Profil
                        </Button>
                      </DialogTrigger>
                      {selectedPatient?.id === patient.id && (
                        <DialogContent className="sm:max-w-[700px] h-[85vh] sm:h-auto flex flex-col p-0 gap-0 overflow-hidden">
                          <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-6 text-white shrink-0">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <Avatar className="h-16 w-16 border-2 border-white/20 shadow-md">
                                  <AvatarFallback className="bg-white/10 text-xl">{patient.avatar}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <DialogTitle className="text-2xl text-white m-0">{patient.name}</DialogTitle>
                                  <DialogDescription className="text-emerald-50 mt-1">
                                    {patient.age} Yaş • {patient.gender} • Boy: {patient.height} cm
                                  </DialogDescription>
                                </div>
                              </div>
                              <Badge className="bg-white/20 hover:bg-white/30 border-none text-white text-sm px-3 py-1">
                                {patient.plan} Danışan
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-background">
                            <Tabs defaultValue="health" className="w-full">
                              <TabsList className="w-full justify-start rounded-none border-b bg-white dark:bg-card px-6 h-12">
                                <TabsTrigger value="health" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-emerald-600 rounded-none px-4">Sağlık & Tahliller</TabsTrigger>
                                <TabsTrigger value="progress" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-emerald-600 rounded-none px-4">Gelişim</TabsTrigger>
                                <TabsTrigger value="diet" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-emerald-600 rounded-none px-4">Güncel Diyet</TabsTrigger>
                              </TabsList>
                              
                              <div className="p-6">
                                <TabsContent value="health" className="m-0 space-y-6">
                                  <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="bg-white dark:bg-card border border-rose-100 dark:border-rose-900/30 p-4 rounded-xl shadow-sm">
                                      <h4 className="font-semibold text-rose-800 dark:text-rose-400 flex items-center gap-2 mb-3">
                                        <AlertCircle className="w-4 h-4" /> Alerjenler
                                      </h4>
                                      <div className="flex flex-wrap gap-2">
                                        {patient.allergies.map((al:string, i:number) => (
                                          <Badge key={i} variant="secondary" className="bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300">{al}</Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="bg-white dark:bg-card border border-indigo-100 dark:border-indigo-900/30 p-4 rounded-xl shadow-sm">
                                      <h4 className="font-semibold text-indigo-800 dark:text-indigo-400 flex items-center gap-2 mb-3">
                                        <Activity className="w-4 h-4" /> Kronik Rahatsızlıklar
                                      </h4>
                                      <div className="flex flex-wrap gap-2">
                                        {patient.diseases.map((ds:string, i:number) => (
                                          <Badge key={i} variant="secondary" className="bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">{ds}</Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="bg-white dark:bg-card border border-slate-200 dark:border-slate-800 p-5 rounded-xl shadow-sm">
                                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                                      <FileText className="w-4 h-4 text-emerald-600" /> Kan Tahlili Özeti
                                    </h4>
                                    <p className="text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                                      {patient.bloodTest}
                                    </p>
                                    <div className="mt-4 flex gap-2">
                                      <Button variant="outline" size="sm" className="text-xs">Tam Raporu Gör (PDF)</Button>
                                      <Button variant="outline" size="sm" className="text-xs">Tahlil İste</Button>
                                    </div>
                                  </div>
                                </TabsContent>
                                
                                <TabsContent value="progress" className="m-0 space-y-6">
                                  <div className="grid grid-cols-3 gap-4">
                                    <div className="bg-white dark:bg-card border border-slate-100 dark:border-slate-800 p-4 rounded-xl text-center shadow-sm">
                                      <p className="text-xs text-muted-foreground mb-1 uppercase font-semibold tracking-wider">Başlangıç</p>
                                      <p className="text-2xl font-bold">{patient.startWeight}<span className="text-sm font-normal text-muted-foreground ml-1">kg</span></p>
                                    </div>
                                    <div className="bg-white dark:bg-card border border-emerald-100 dark:border-emerald-900/30 p-4 rounded-xl text-center shadow-sm">
                                      <p className="text-xs text-emerald-700 dark:text-emerald-400 mb-1 uppercase font-semibold tracking-wider">Mevcut</p>
                                      <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{patient.currentWeight}<span className="text-sm font-normal ml-1">kg</span></p>
                                      <div className="flex items-center justify-center text-xs text-emerald-600 mt-1 font-medium">
                                        <TrendingDown className="w-3 h-3 mr-1" />
                                        {(patient.startWeight - patient.currentWeight).toFixed(1)} kg verildi
                                      </div>
                                    </div>
                                    <div className="bg-white dark:bg-card border border-indigo-100 dark:border-indigo-900/30 p-4 rounded-xl text-center shadow-sm">
                                      <p className="text-xs text-indigo-700 dark:text-indigo-400 mb-1 uppercase font-semibold tracking-wider">Hedef</p>
                                      <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">{patient.goal}<span className="text-sm font-normal ml-1">kg</span></p>
                                    </div>
                                  </div>
                                  <div className="bg-white dark:bg-card border border-slate-200 dark:border-slate-800 p-5 rounded-xl shadow-sm flex items-center justify-center h-48 text-muted-foreground flex-col">
                                    <Activity className="w-8 h-8 mb-2 opacity-20" />
                                    <p>Detaylı Vücut Analiz Grafiği</p>
                                    <p className="text-xs mt-1">Son ölçüm: {patient.lastVisit}</p>
                                  </div>
                                </TabsContent>

                                <TabsContent value="diet" className="m-0">
                                  <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 p-8 rounded-xl shadow-sm text-center flex flex-col items-center">
                                    <ClipboardList className="w-12 h-12 text-emerald-500 mb-3 opacity-50" />
                                    <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Güncel Programı İncele veya Düzenle</h3>
                                    <p className="text-sm text-emerald-700 dark:text-emerald-300/80 mb-6 max-w-md">
                                      Danışanın mevcut beslenme programını görüntüleyebilir, makro hesaplamalarını yapabilir ve alternatif besinler ekleyebilirsiniz.
                                    </p>
                                    <Link href="/dietitian/diet-plans" className="w-full sm:w-auto">
                                      <Button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white shadow-md">
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
                      <Button size="sm" className="h-8 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800 dark:hover:bg-emerald-900/50">
                        <ClipboardList className="w-4 h-4 mr-1.5" /> Diyet Yaz
                      </Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {filteredPatients.length === 0 && (
          <div className="p-12 text-center text-muted-foreground">
            <Search className="w-8 h-8 mx-auto mb-3 opacity-20" />
            <p>Aradığınız kritere uygun danışan bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
}
