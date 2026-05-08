"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Paperclip, Image as ImageIcon, FileText, Check, CheckCheck, MoreVertical } from "lucide-react";
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
    <div className="h-[calc(100vh-8rem)] animate-in fade-in duration-500">
      <Card className="h-full border-none shadow-md overflow-hidden flex flex-col bg-white dark:bg-card">
        
        {/* Chat Header */}
        <CardHeader className="bg-emerald-50 dark:bg-emerald-950/20 border-b border-emerald-100 dark:border-emerald-900/50 flex flex-row items-center justify-between py-4 px-6 shrink-0">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-12 w-12 border-2 border-white dark:border-slate-800 shadow-sm">
                <AvatarFallback className="bg-emerald-100 text-emerald-700 font-bold dark:bg-emerald-900/50 dark:text-emerald-400">DY</AvatarFallback>
              </Avatar>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-card rounded-full"></span>
            </div>
            <div>
              <CardTitle className="text-lg text-emerald-900 dark:text-emerald-100">Dyt. Ayşe Yılmaz</CardTitle>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center mt-0.5">
                Şu an çevrimiçi
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-slate-500 hover:bg-emerald-100 dark:hover:bg-emerald-900/50">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>

        {/* Chat Messages */}
        <CardContent className="flex-1 overflow-y-auto p-6 bg-slate-50/50 dark:bg-background space-y-4">
          <div className="text-center mb-6">
            <Badge variant="outline" className="bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 font-medium">Bugün</Badge>
          </div>

          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'hasta' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex flex-col gap-1 max-w-[75%] sm:max-w-[60%] ${msg.sender === 'hasta' ? 'items-end' : 'items-start'}`}>
                <div 
                  className={`px-4 py-2.5 rounded-2xl text-sm ${
                    msg.sender === 'hasta' 
                      ? 'bg-emerald-600 text-white rounded-tr-sm' 
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-sm'
                  }`}
                >
                  {msg.text}
                  
                  {msg.file && (
                    <div className="mt-3 bg-white/20 dark:bg-slate-800/50 rounded-lg p-3 flex items-center gap-3 border border-white/30 dark:border-slate-700">
                      <div className="bg-rose-500 text-white p-2 rounded-md">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="flex-1 truncate">
                        <div className="font-semibold text-xs truncate">{msg.file.name}</div>
                        <div className="text-[10px] opacity-80">{msg.file.size} • Tıkla ve İndir</div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-1 text-xs text-slate-400 px-1">
                  {msg.time}
                  {msg.sender === 'hasta' && (
                    msg.read ? <CheckCheck className="w-3.5 h-3.5 text-blue-500" /> : <Check className="w-3.5 h-3.5" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardContent>

        {/* Chat Input */}
        <CardFooter className="bg-white dark:bg-card border-t border-slate-100 dark:border-slate-800 p-4 shrink-0">
          <div className="flex items-center gap-2 w-full bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 p-1.5 pl-4 pr-1.5 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-transparent transition-all">
            <Input 
              className="flex-1 bg-transparent border-none shadow-none focus-visible:ring-0 px-0" 
              placeholder="Mesajınızı yazın..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="flex items-center gap-1 shrink-0">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/50">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 hidden sm:flex">
                <ImageIcon className="w-4 h-4" />
              </Button>
              <Button size="icon" className="h-10 w-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-md ml-1" onClick={handleSend}>
                <Send className="w-4 h-4 -ml-0.5 mt-0.5" />
              </Button>
            </div>
          </div>
        </CardFooter>

      </Card>
    </div>
  );
}
