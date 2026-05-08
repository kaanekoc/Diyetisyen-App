"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  IconDownload, 
  IconCircleCheckFilled, 
  IconAlertCircle, 
  IconInfoCircle, 
  IconSunrise, 
  IconSun, 
  IconSunset, 
  IconCalendarEvent
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export default function PatientDietPage() {
  const dailyPlan = [
    {
      id: 1,
      mealName: "Kahvaltı",
      time: "08:30 - 09:30",
      icon: <IconSunrise stroke={1.5} className="w-8 h-8 text-amber-500" />,
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
      icon: <IconSun stroke={1.5} className="w-8 h-8 text-yellow-500" />,
      items: [
        { name: "Yeşil Elma", portion: "1 Küçük Boy", alt: "veya 1 adet kivi" },
        { name: "Çiğ Badem", portion: "10 Adet", alt: "veya 2 tam ceviz" }
      ]
    },
    {
      id: 3,
      mealName: "Öğle Yemeği",
      time: "13:30 - 14:30",
      icon: <IconSun stroke={1.5} className="w-8 h-8 text-orange-500" />,
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
      icon: <IconSunset stroke={1.5} className="w-8 h-8 text-rose-500" />,
      items: [
        { name: "Zeytinyağlı Sebze Yemeği", portion: "8 Yemek Kaşığı", alt: "Susuz olarak tüketilecek" },
        { name: "Yoğurt", portion: "1 Kase (150g)", alt: "Ev yapımı tercih edilmeli" }
      ],
      notes: "Akşam 20:00'dan sonra hiçbir şey yememeye özen gösterin."
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Diyet Programım</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Diyetisyeniniz tarafından size özel hazırlanan güncel beslenme planınız.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-12 px-6 rounded-2xl border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-900/50 font-bold transition-all">
            <IconDownload stroke={2} className="w-5 h-5 mr-2" /> PDF İndir
          </Button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-l-4 border-emerald-500 rounded-2xl p-6 shadow-sm flex items-start gap-5">
        <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl shrink-0 shadow-sm">
          <IconInfoCircle stroke={2} className="w-8 h-8 text-emerald-500" />
        </div>
        <div>
          <h4 className="font-extrabold text-emerald-900 dark:text-emerald-100 mb-1.5 text-lg">Diyetisyeninizin Mesajı</h4>
          <p className="text-emerald-800/90 dark:text-emerald-300/90 text-base leading-relaxed">
            Merhaba, bu hafta karbonhidrat oranımızı biraz düşürdük. Akşam yemeklerini olabildiğince erken yemeye çalışalım. Öğün aralarında bol su içmeyi unutmayın. Başarılar dilerim!
          </p>
        </div>
      </div>

      <div className="grid xl:grid-cols-12 gap-8 lg:gap-12 pt-4">
        <div className="xl:col-span-8 space-y-8">
          <div className="flex items-center justify-between pb-4 border-b-2 border-slate-100 dark:border-slate-800/50">
            <div className="flex items-center gap-3">
              <IconCalendarEvent stroke={1.5} className="w-8 h-8 text-indigo-500" />
              <h3 className="font-extrabold text-2xl text-slate-800 dark:text-white tracking-tight">Günlük Beslenme Planı</h3>
            </div>
            <Badge className="bg-emerald-500 text-white hover:bg-emerald-600 px-4 py-1.5 rounded-xl font-bold shadow-md shadow-emerald-500/20">Geçerli Liste</Badge>
          </div>

          <div className="space-y-6">
            {dailyPlan.map((meal) => (
              <Card key={meal.id} className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none overflow-hidden bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl transition-transform hover:-translate-y-1 duration-300">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-56 bg-slate-50/80 dark:bg-slate-800/80 p-8 flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-100 dark:border-slate-800 shrink-0 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      {meal.icon}
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm mb-4">
                      {meal.icon}
                    </div>
                    <h4 className="font-extrabold text-xl text-slate-800 dark:text-white text-center">{meal.mealName}</h4>
                    <Badge variant="outline" className="mt-3 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 font-bold px-3 py-1">
                      {meal.time}
                    </Badge>
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
                    <ul className="space-y-5">
                      {meal.items.map((item, idx) => (
                        <li key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800/50 last:border-0 last:pb-0">
                          <div className="flex items-start gap-4">
                            <IconCircleCheckFilled className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-lg text-slate-800 dark:text-white">{item.name}</span>
                              <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center mt-1.5 font-medium">
                                <IconAlertCircle stroke={2} className="w-4 h-4 mr-1.5 text-amber-500" />
                                <span>Alternatif: {item.alt}</span>
                              </div>
                            </div>
                          </div>
                          <Badge variant="secondary" className="bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap self-start sm:self-auto">
                            {item.portion}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                    {meal.notes && (
                      <div className="mt-6 text-sm font-medium bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-400 p-4 rounded-2xl ring-1 ring-amber-200/50 dark:ring-amber-500/20">
                        <span className="font-extrabold block mb-1">Diyetisyen Notu:</span> {meal.notes}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="xl:col-span-4 space-y-8">
          <Card className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-900/10 dark:to-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl overflow-hidden">
            <CardHeader className="p-6 sm:p-8 border-b border-indigo-100 dark:border-indigo-800/30">
              <CardTitle className="text-xl font-extrabold text-indigo-950 dark:text-indigo-200 tracking-tight">Makro Hedefleri</CardTitle>
              <CardDescription className="text-base mt-1">Günlük almanız gereken tahmini değerler</CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2.5">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider text-xs">Günlük Kalori</span>
                  <span className="font-black text-2xl text-slate-900 dark:text-white">~1650 <span className="text-sm font-bold text-slate-400">kcal</span></span>
                </div>
                <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-slate-800 dark:bg-slate-400 rounded-full w-full"></div>
                </div>
              </div>
              <div className="space-y-2.5 pt-4">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-rose-500 dark:text-rose-400 text-sm">Protein <span className="text-xs opacity-70">(%30)</span></span>
                  <span className="font-extrabold text-lg">120g</span>
                </div>
                <div className="h-2.5 w-full bg-rose-100 dark:bg-rose-950/50 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-500 rounded-full w-[30%]"></div>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-amber-500 dark:text-amber-400 text-sm">Karbonhidrat <span className="text-xs opacity-70">(%40)</span></span>
                  <span className="font-extrabold text-lg">165g</span>
                </div>
                <div className="h-2.5 w-full bg-amber-100 dark:bg-amber-950/50 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-[40%]"></div>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-yellow-500 dark:text-yellow-400 text-sm">Yağ <span className="text-xs opacity-70">(%30)</span></span>
                  <span className="font-extrabold text-lg">55g</span>
                </div>
                <div className="h-2.5 w-full bg-yellow-100 dark:bg-yellow-950/50 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-400 rounded-full w-[30%]"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl shadow-slate-200/40 dark:shadow-none bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl overflow-hidden">
            <CardHeader className="p-6 border-b border-slate-100 dark:border-slate-800/50">
              <CardTitle className="text-lg font-extrabold flex items-center gap-2">
                <IconInfoCircle stroke={2} className="w-6 h-6 text-emerald-500" />
                Genel Kurallar
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2 sm:p-4">
              <ul className="divide-y divide-slate-100 dark:divide-slate-800/50">
                {[
                  "Günde en az 2.5 Litre su içilmelidir.",
                  "Öğün saatlerine sadık kalınmalıdır.",
                  "Çay ve kahve şekersiz tüketilmelidir.",
                  "Asitli içecekler ve hazır meyve suları yasaktır."
                ].map((rule, i) => (
                  <li key={i} className="px-4 py-4 text-sm font-medium text-slate-600 dark:text-slate-400 flex items-start gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
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
