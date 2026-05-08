"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import Link from "next/link";
import { useState } from "react";

const initialPatients = [
  { id: "1", name: "Ayşe Yılmaz", plan: "Aktif", lastVisit: "12 Mar 2026", progress: "%85", goal: 65, currentWeight: 72 },
  { id: "2", name: "Mehmet Kaya", plan: "Beklemede", lastVisit: "10 Mar 2026", progress: "%60", goal: 80, currentWeight: 88 },
  { id: "3", name: "Elif Demir", plan: "Aktif", lastVisit: "15 Mar 2026", progress: "%92", goal: 55, currentWeight: 58 },
  { id: "4", name: "Burak Şahin", plan: "Pasif", lastVisit: "01 Mar 2026", progress: "%40", goal: 75, currentWeight: 85 },
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
      currentWeight: 0
    };
    setPatients([newPatient, ...patients]);
    setNewPatientName("");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Hastalarım</h2>
          <p className="text-muted-foreground">Sisteme kayıtlı hastalarınızı yönetin.</p>
        </div>
        
        {/* Yeni Hasta Ekle Dialog */}
        <Dialog>
          <DialogTrigger className={buttonVariants({ className: "bg-slate-900 text-white dark:bg-emerald-600 border-none" })}>
            <UserPlus className="mr-2 h-4 w-4" /> Yeni Hasta Ekle
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Yeni Hasta Ekle</DialogTitle>
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
                <label className="text-sm font-medium">E-posta</label>
                <Input type="email" placeholder="ahmet@example.com" />
              </div>
              <DialogClose className={buttonVariants({ className: "w-full" })} onClick={handleAddPatient}>
                Kaydet ve Davet Et
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>

      </div>

      <div className="flex items-center space-x-2">
        <div className="relative w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Hasta ara..." 
            className="pl-8" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button variant="outline" onClick={() => setPatients([...patients].reverse())}>Sırala / Filtrele</Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ad Soyad</TableHead>
              <TableHead>Program Durumu</TableHead>
              <TableHead>Son Randevu</TableHead>
              <TableHead>Uyum Oranı</TableHead>
              <TableHead className="text-right">Aksiyonlar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPatients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">{patient.name}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    patient.plan === 'Aktif' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' : 
                    patient.plan === 'Beklemede' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                  }`}>
                    {patient.plan}
                  </span>
                </TableCell>
                <TableCell>{patient.lastVisit}</TableCell>
                <TableCell>{patient.progress}</TableCell>
                <TableCell className="text-right space-x-2 flex justify-end">
                  {/* Profil İnceleme Dialog'u */}
                  <Dialog>
                    <DialogTrigger className={buttonVariants({ variant: "outline", size: "sm" })} onClick={() => setSelectedPatient(patient)}>
                      Profil
                    </DialogTrigger>
                    {selectedPatient?.id === patient.id && (
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{patient.name} Profil Özeti</DialogTitle>
                          <DialogDescription>
                            Hastanın son güncel verileri ve program detayı.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="flex justify-between border-b dark:border-gray-800 pb-2">
                            <span className="font-medium">Hedef Kilo:</span>
                            <span>{patient.goal} kg</span>
                          </div>
                          <div className="flex justify-between border-b dark:border-gray-800 pb-2">
                            <span className="font-medium">Mevcut Kilo:</span>
                            <span>{patient.currentWeight} kg</span>
                          </div>
                          <div className="flex justify-between border-b dark:border-gray-800 pb-2">
                            <span className="font-medium">Uyum Oranı:</span>
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">{patient.progress}</span>
                          </div>
                          <div className="pt-2 flex justify-end">
                             <Link href="/dietitian/diet-plans">
                               <Button size="sm">Yeni Diyet Yaz</Button>
                             </Link>
                          </div>
                        </div>
                      </DialogContent>
                    )}
                  </Dialog>

                  {/* Diyet Yaz Linki */}
                  <Link href="/dietitian/diet-plans">
                    <Button variant="secondary" size="sm">Diyet Yaz</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
