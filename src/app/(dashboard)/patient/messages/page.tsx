"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  IconSend, 
  IconPaperclip, 
  IconPhoto, 
  IconFileText, 
  IconCheck, 
  IconChecks, 
  IconDotsVertical 
} from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";

export default function PatientMessagesPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, sender: "diyetisyen", text: "Merhaba, yeni beslenme programınızı sisteme yükledim. İnceleyip aklınıza takılan bir şey olursa sorabilirsiniz.", time: "09:41", read: true },
    { id: 2, sender: "hasta", text: "Teşekkürler hocam, akşam yemeklerindeki yoğurdu laktozsuz tercih etsem olur mu?", time: "10:15", read: true },
    { id: 3, sender: "diyetisyen", text: "Tabii ki, laktozsuz yoğurt çok daha iyi bir tercih olacaktır. Şişkinlik probleminizi de azaltır.", time: "10:30", read: true },
    { id: 4, sender: "hasta", text: "Son tahlillerimi de eke ekliyorum.", time: "11:20", read: true, file: { name: "kan_tahlili_mart.pdf", type: "pdf", size: "1.2 MB" } },
    { id: 5, sender: "diyetisyen", text: "Görüyorum, D vitamini değerleriniz hala biraz düşük. Ek olarak takviye yazacağım.", time: "14:45", read: false }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    const newMsg = {
      id: Date.now(),
      sender: "hasta",
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: false
    };
    setMessages([...messages, newMsg]);
    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] animate-in fade-in duration-500 pb-8">
      <Card className="h-full border-0 shadow-2xl shadow-emerald-500/10 overflow-hidden flex flex-col bg-white dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-slate-800 rounded-3xl">
        
        {/* Chat Header */}
        <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-b border-emerald-100 dark:border-emerald-800/30 flex flex-row items-center justify-between py-5 px-6 shrink-0 relative overflow-hidden">
          <div className="flex items-center gap-4 relative z-10">
            <div className="relative">
              <Avatar className="h-14 w-14 border-2 border-white dark:border-slate-800 shadow-md">
                <AvatarFallback className="bg-gradient-to-br from-emerald-400 to-teal-500 text-white font-extrabold text-lg">DY</AvatarFallback>
              </Avatar>
              <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-slate-800 rounded-full shadow-sm"></span>
            </div>
            <div>
              <CardTitle className="text-xl font-extrabold text-emerald-950 dark:text-emerald-100">Dyt. Ayşe Yılmaz</CardTitle>
              <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center mt-0.5">
                Şu an çevrimiçi
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 relative z-10">
            <Button variant="ghost" size="icon" className="h-10 w-10 text-emerald-700 hover:bg-emerald-100 dark:text-emerald-300 dark:hover:bg-emerald-800/50 rounded-full transition-colors">
              <IconDotsVertical stroke={2} className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>

        {/* Chat Messages */}
        <CardContent className="flex-1 overflow-y-auto p-6 bg-slate-50/50 dark:bg-transparent space-y-6">
          <div className="text-center my-4">
            <Badge className="bg-slate-200/50 text-slate-500 hover:bg-slate-200/50 border-none dark:bg-slate-800/50 dark:text-slate-400 font-bold px-4 py-1.5 rounded-full shadow-sm">Bugün</Badge>
          </div>

          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'hasta' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex flex-col gap-1.5 max-w-[85%] sm:max-w-[65%] ${msg.sender === 'hasta' ? 'items-end' : 'items-start'}`}>
                <div 
                  className={`px-5 py-3.5 rounded-3xl text-base shadow-sm ${
                    msg.sender === 'hasta' 
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-tr-sm font-medium' 
                      : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-tl-sm font-medium'
                  }`}
                >
                  {msg.text}
                  
                  {msg.file && (
                    <div className="mt-3 bg-black/10 dark:bg-black/20 rounded-2xl p-3 flex items-center gap-4 border border-white/20">
                      <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-xl text-white shadow-inner">
                        <IconFileText stroke={1.5} className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0 pr-4">
                        <div className="font-extrabold text-sm truncate">{msg.file.name}</div>
                        <div className="text-xs opacity-80 mt-0.5 font-semibold">{msg.file.size} • Tıkla ve İndir</div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 px-2">
                  {msg.time}
                  {msg.sender === 'hasta' && (
                    msg.read ? <IconChecks stroke={3} className="w-4 h-4 text-emerald-500" /> : <IconCheck stroke={3} className="w-4 h-4" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardContent>

        {/* Chat Input */}
        <CardFooter className="bg-white dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800/50 p-5 shrink-0">
          <div className="flex items-center gap-2 w-full bg-slate-50 dark:bg-slate-800/50 rounded-full border border-slate-200 dark:border-slate-700 p-1.5 pl-6 pr-2 focus-within:ring-2 focus-within:ring-emerald-500/50 focus-within:border-emerald-500 transition-all shadow-inner">
            <Input 
              className="flex-1 bg-transparent border-none shadow-none focus-visible:ring-0 px-0 h-12 text-base font-medium" 
              placeholder="Mesajınızı yazın..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="flex items-center gap-1 shrink-0">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 transition-colors">
                <IconPaperclip stroke={2} className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 transition-colors hidden sm:flex">
                <IconPhoto stroke={2} className="w-5 h-5" />
              </Button>
              <Button size="icon" className="h-12 w-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/30 ml-2 transition-transform hover:scale-105" onClick={handleSend}>
                <IconSend stroke={2} className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </div>
        </CardFooter>

      </Card>
    </div>
  );
}
