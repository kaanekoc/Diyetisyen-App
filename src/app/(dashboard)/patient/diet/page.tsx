"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, CheckCircle2, AlertCircle, Info, Sunrise, Sun, Sunset, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PatientDietPage() {
  const dailyPlan = [
    {
      id: 1,
      mealName: "Kahvaltı",
      time: "08:30 - 09:30",
      icon: <Sunrise className="w-6 h-6 text-amber-500" />,
      items: [
        { name: "Yulaf ezmesi", portion: "3 yemek kaşığı (40g)", alt: "veya 2 dilim tam buğday ekmeği" },
        { name: "Yarım yağlı süt", portion: "1 su bardağı (200ml)", alt: "veya laktozsuz süt" },
        { name: "Haşlanmış Yumurta", portion: "1 Adet", alt: "veya 1 dilim az yağlı beyaz peynir" }
      ],
      notes: "Sütün içine tarçın ekleyebilirsiniz."
    },
    {
      id: 2,
      mealName: "Ara Öğün",
      time: "11:00",
      icon: <Sun className="w-6 h-6 text-yellow-500" />,
      items: [
        { name: "Yeşil Elma", portion: "1 Küçük Boy", alt: "veya 1 adet kivi" },
        { name: "Çiğ Badem", portion: "10 Adet", alt: "veya 2 tam ceviz" }
      ]
    },
    {
      id: 3,
      mealName: "Öğle Yemeği",
      time: "13:30 - 14:30",
      icon: <Sun className="w-6 h-6 text-orange-500" />,
      items: [
        { name: "Izgara Tavuk Göğsü", portion: "120g", alt: "veya 4 köfte kadar yağsız et" },
        { name: "Mevsim Salata", portion: "Sınırsız", alt: "1 tatlı kaşığı zeytinyağı ile" },
        { name: "Karabuğday", portion: "3 Yemek Kaşığı", alt: "veya 1 ince dilim tam buğday ekmeği" }
      ]
    },
    {
      id: 4,
      mealName: "Akşam Yemeği",
      time: "18:30 - 19:30",
      icon: <Sunset className="w-6 h-6 text-rose-500" />,
      items: [
        { name: "Zeytinyağlı Sebze Yemeği", portion: "8 Yemek Kaşığı", alt: "Susuz olarak tüketilecek" },
        { name: "Yoğurt", portion: "1 Kase (150g)", alt: "Ev yapımı tercih edilmeli" }
      ],
      notes: "Akşam 20:00'dan sonra hiçbir şey yememeye özen gösterin."
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Diyet Programım</h2>
          <p className="text-muted-foreground mt-1">Diyetisyeniniz tarafından size özel hazırlanan güncel beslenme planınız.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-900/50">
            <Download className="w-4 h-4 mr-2" /> PDF İndir
          </Button>
        </div>
      </div>

      <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 rounded-xl p-5 shadow-sm flex items-start gap-4">
        <div className="p-3 bg-emerald-100 dark:bg-emerald-900/50 rounded-full shrink-0">
          <Info className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
        </div>
        <div>
          <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-1">Diyetisyeninizin Mesajı:</h4>
          <p className="text-emerald-800/80 dark:text-emerald-300/80 text-sm">
            Merhaba, bu hafta karbonhidrat oranımızı biraz düşürdük. Akşam yemeklerini olabildiğince erken yemeye çalışalım. Öğün aralarında bol su içmeyi unutmayın. Başarılar dilerim!
          </p>
        </div>
      </div>

      <div className="grid xl:grid-cols-3 gap-8 pt-4">
        <div className="xl:col-span-2 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-2">
            <CalendarDaysIcon className="w-5 h-5 text-slate-400" />
            <h3 className="font-semibold text-lg text-slate-700 dark:text-slate-300">Günlük Beslenme Planı</h3>
            <Badge className="ml-auto bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800">Geçerli Liste</Badge>
          </div>

          <div className="space-y-4">
            {dailyPlan.map((meal) => (
              <Card key={meal.id} className="border-none shadow-md overflow-hidden bg-white dark:bg-card">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-48 bg-slate-50 dark:bg-slate-900/50 p-6 flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-100 dark:border-slate-800 shrink-0">
                    {meal.icon}
                    <h4 className="font-bold text-lg mt-3 text-slate-800 dark:text-slate-200">{meal.mealName}</h4>
                    <Badge variant="outline" className="mt-2 bg-white dark:bg-card border-slate-200 dark:border-slate-700">
                      {meal.time}
                    </Badge>
                  </div>
                  <div className="p-6 flex-1">
                    <ul className="space-y-4">
                      {meal.items.map((item, idx) => (
                        <li key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-50 dark:border-slate-800/50 last:border-0 last:pb-0">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-slate-900 dark:text-slate-100">{item.name}</span>
                              <div className="text-xs text-muted-foreground flex items-center mt-1">
                                <AlertCircle className="w-3 h-3 mr-1 text-orange-400" />
                                <span>Alternatif: {item.alt}</span>
                              </div>
                            </div>
                          </div>
                          <Badge variant="secondary" className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 w-fit sm:w-auto text-center justify-center ml-8 sm:ml-0">
                            {item.portion}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                    {meal.notes && (
                      <div className="mt-5 text-sm bg-amber-50 dark:bg-amber-950/20 text-amber-800 dark:text-amber-300 p-3 rounded-lg border border-amber-100 dark:border-amber-900/30">
                        <span className="font-semibold">Not:</span> {meal.notes}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="xl:col-span-1 space-y-6">
          <Card className="border-none shadow-md bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/20 dark:to-card border-indigo-100 dark:border-indigo-900/30">
            <CardHeader>
              <CardTitle className="text-lg text-indigo-900 dark:text-indigo-300">Makro Hedefleri</CardTitle>
              <CardDescription>Günlük almanız gereken tahmini değerler</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Kalori</span>
                  <span className="font-bold text-slate-900 dark:text-white">~1650 kcal</span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-800 dark:bg-slate-200 rounded-full w-full"></div>
                </div>
              </div>
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-rose-600 dark:text-rose-400">Protein (%30)</span>
                  <span className="font-bold">120g</span>
                </div>
                <div className="h-2 w-full bg-rose-50 dark:bg-rose-950/50 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-500 rounded-full w-[30%]"></div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-amber-600 dark:text-amber-400">Karbonhidrat (%40)</span>
                  <span className="font-bold">165g</span>
                </div>
                <div className="h-2 w-full bg-amber-50 dark:bg-amber-950/50 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-[40%]"></div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-yellow-600 dark:text-yellow-400">Yağ (%30)</span>
                  <span className="font-bold">55g</span>
                </div>
                <div className="h-2 w-full bg-yellow-50 dark:bg-yellow-950/50 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full w-[30%]"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-white dark:bg-card">
            <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800">
              <CardTitle className="text-lg">Genel Kurallar</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  "Günde en az 2.5 Litre su içilmelidir.",
                  "Öğün saatlerine sadık kalınmalıdır.",
                  "Çay ve kahve şekersiz tüketilmelidir.",
                  "Asitli içecekler ve hazır meyve suları yasaktır."
                ].map((rule, i) => (
                  <li key={i} className="p-4 text-sm text-slate-600 dark:text-slate-400 flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                    {rule}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function CalendarDaysIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}
