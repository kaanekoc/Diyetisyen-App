<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-5.22-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
</p>

<h1 align="center">🌿 FitCare — Diyetisyen Yönetim Platformu</h1>

<p align="center">
  <b>Profesyonel diyetisyenler ve danışanları için tasarlanmış, modern ve kapsamlı bir beslenme yönetim platformu.</b>
  <br/>
  <sub>Premium glassmorphism UI · AI-ready altyapı · Gerçek zamanlı takip</sub>
</p>

---

## 📋 İçindekiler

- [Genel Bakış](#-genel-bakış)
- [Özellikler](#-özellikler)
- [Teknoloji Yığını](#-teknoloji-yığını)
- [Proje Yapısı](#-proje-yapısı)
- [Veritabanı Şeması](#-veritabanı-şeması)
- [Kurulum](#-kurulum)
- [Ortam Değişkenleri](#-ortam-değişkenleri)
- [Kullanım](#-kullanım)
- [Ekran Görüntüleri](#-ekran-görüntüleri)
- [Geliştirme Notları](#-geliştirme-notları)
- [Yol Haritası](#-yol-haritası)

---

## 🎯 Genel Bakış

**FitCare**, diyetisyenlerin hastalarını profesyonelce yönetmesini ve danışanların beslenme hedeflerini takip etmesini sağlayan full-stack bir web uygulamasıdır. Platform iki ana rol üzerinde yapılandırılmıştır:

| Rol | Panel | Açıklama |
|-----|-------|----------|
| **Diyetisyen** | `NutriPro` | Hasta CRM, diyet listesi oluşturma, randevu takvimi, dashboard |
| **Danışan** | `FitCare` | Günlük özet, öğün takibi, su & egzersiz, gelişim grafikleri |

---

## ✨ Özellikler

### 🩺 Diyetisyen Paneli (NutriPro)
- **Dashboard** — Aktif hasta sayısı, günlük randevu, haftalık plan ve uyum oranı istatistikleri
- **Hasta CRM** — Detaylı hasta profilleri, arama/filtreleme, sağlık-gelişim-diyet sekmeleri
- **Diyet Listesi Oluşturucu** — Makro hedef belirleme (kalori, protein, karbonhidrat, yağ), öğün bazlı planlama
- **Randevu Takvimi** — Aylık takvim görünümü, durum yönetimi (onaylı/bekleyen/iptal), çalışma saatleri ayarları

### 👤 Danışan Paneli (FitCare)
- **Günlük Özet** — Kalori, su, adım ve uyum kartları; günlük hedef takibi
- **Profil & Sağlık** — Kişisel bilgiler, vücut ölçüleri, hedef kilo
- **Diyet Programım** — Diyetisyen tarafından atanan günlük beslenme planı
- **Yapay Zeka Öğün** — AI-ready öğün analizi ve besin değeri hesaplama altyapısı
- **Su & Egzersiz** — Günlük su tüketimi takibi ve egzersiz kaydı
- **Gelişim Grafikleri** — Recharts ile kilo, BMI ve bel ölçüsü trendleri
- **Randevular** — Yaklaşan görüşmeleri görüntüleme ve yönetme
- **Diyetisyen Mesajları** — Mesajlaşma arayüzü (chat UI)

### 🔐 Kimlik Doğrulama
- **NextAuth.js** ile credentials tabanlı giriş
- Rol bazlı yönlendirme (Diyetisyen → `/dietitian`, Danışan → `/patient`)
- Middleware ile korumalı rotalar
- Çıkış onay dialogu (Evet/Hayır)

### 🎨 Tasarım & UX
- **Animasyonlu kayıt sayfası** — Rol seçimine göre kayan branding paneli ve renk geçişleri
- **Premium login** — Split-screen layout, gradient branding paneli
- **Glassmorphism UI** — Backdrop-blur, cam efektleri, rounded-3xl kartlar
- **Aktif sidebar navigasyonu** — `usePathname()` ile otomatik sayfa vurgulama
- **Tıklanabilir logo** — Anasayfaya yönlendirme
- **Dark/Light tema** — `next-themes` ile tam tema desteği
- **Responsive** — Mobil, tablet ve masaüstü uyumlu

---

## 🛠 Teknoloji Yığını

| Katman | Teknoloji |
|--------|-----------|
| **Framework** | Next.js 16.1.6 (App Router, Turbopack) |
| **Runtime** | React 19.2.3 |
| **Dil** | TypeScript 5.x |
| **Stil** | TailwindCSS v4, tw-animate-css |
| **UI Kütüphaneleri** | Base UI (Shadcn/UI), Headless UI v2 |
| **İkonlar** | Tabler Icons React |
| **Grafikler** | Recharts |
| **Veritabanı** | MySQL + Prisma ORM 5.22 |
| **Auth** | NextAuth.js 4.x (Credentials Provider) |
| **Şifreleme** | bcrypt |
| **Tema** | next-themes |
| **Tarih** | date-fns |

---

## 📁 Proje Yapısı

```
FitCare/
├── prisma/
│   ├── schema.prisma          # Veritabanı şeması (8 model)
│   ├── seed.ts                # Örnek veri seed dosyası
│   └── migrations/            # Prisma migration geçmişi
│
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/page.tsx       # Giriş sayfası (premium split-screen)
│   │   │   └── register/page.tsx    # Kayıt sayfası (animasyonlu panel)
│   │   │
│   │   ├── (dashboard)/
│   │   │   ├── dietitian/
│   │   │   │   ├── layout.tsx             # Diyetisyen sidebar layout
│   │   │   │   ├── page.tsx               # Dashboard
│   │   │   │   ├── patients/page.tsx      # Hasta CRM
│   │   │   │   ├── diet-plans/page.tsx    # Diyet oluşturucu
│   │   │   │   └── appointments/page.tsx  # Randevu takvimi
│   │   │   │
│   │   │   └── patient/
│   │   │       ├── layout.tsx             # Danışan sidebar layout
│   │   │       ├── page.tsx               # Günlük özet
│   │   │       ├── profile/page.tsx       # Profil & sağlık
│   │   │       ├── diet/page.tsx          # Diyet programı
│   │   │       ├── meals/page.tsx         # AI öğün analizi
│   │   │       ├── water/page.tsx         # Su & egzersiz
│   │   │       ├── progress/page.tsx      # Gelişim grafikleri
│   │   │       ├── appointments/page.tsx  # Randevular
│   │   │       └── messages/page.tsx      # Mesajlar
│   │   │
│   │   ├── api/
│   │   │   └── auth/
│   │   │       ├── [...nextauth]/route.ts # NextAuth API
│   │   │       └── register/route.ts      # Kayıt API
│   │   │
│   │   ├── globals.css          # Global stiller & TailwindCSS
│   │   ├── layout.tsx           # Root layout (ThemeProvider)
│   │   └── page.tsx             # Ana sayfa redirect
│   │
│   ├── components/
│   │   ├── ui/                  # Shadcn/Base UI bileşenleri (13 adet)
│   │   ├── sidebar-nav.tsx      # Dinamik sidebar navigasyonu
│   │   ├── logout-button.tsx    # Çıkış onay dialogu
│   │   ├── theme-provider.tsx   # Tema sağlayıcı
│   │   └── theme-toggle.tsx     # Dark/Light geçiş butonu
│   │
│   ├── lib/
│   │   ├── auth.ts              # NextAuth yapılandırması
│   │   ├── prisma.ts            # Prisma client singleton
│   │   └── utils.ts             # Yardımcı fonksiyonlar (cn)
│   │
│   ├── middleware.ts            # Rota koruma middleware
│   └── types/                   # TypeScript tip tanımları
│
├── .env                         # Ortam değişkenleri
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🗄 Veritabanı Şeması

Prisma ORM ile MySQL üzerine kurulmuş **8 model** ve **1 enum**:

```mermaid
erDiagram
    User ||--o| DietitianProfile : has
    User ||--o| PatientProfile : has
    DietitianProfile ||--o{ PatientProfile : manages
    DietitianProfile ||--o{ Appointment : schedules
    DietitianProfile ||--o{ DietPlan : creates
    PatientProfile ||--o{ Appointment : attends
    PatientProfile ||--o{ DietPlan : follows
    PatientProfile ||--o{ MealLog : logs
    PatientProfile ||--o{ WaterLog : tracks
    PatientProfile ||--o{ Measurement : records
    DietPlan ||--o{ DietMeal : contains

    User {
        string id PK
        string email UK
        string passwordHash
        enum role
        datetime createdAt
    }

    DietitianProfile {
        string id PK
        string userId FK
        string specialty
    }

    PatientProfile {
        string id PK
        string userId FK
        string dietitianId FK
        float targetWeightKg
        int dailyCalorieGoal
    }

    DietPlan {
        string id PK
        string title
        datetime startDate
        datetime endDate
    }

    MealLog {
        string id PK
        string timeOfDay
        float aiCalories
        float aiProtein
    }
```

---

## 🚀 Kurulum

### Gereksinimler

- **Node.js** ≥ 18.x
- **MySQL** 8.x (veya uyumlu bir veritabanı)
- **npm** veya **pnpm**

### Adımlar

```bash
# 1. Repoyu klonlayın
git clone https://github.com/kaanekoc/Diyetisyen-App.git
cd Diyetisyen-App

# 2. Bağımlılıkları yükleyin
npm install

# 3. Ortam değişkenlerini ayarlayın
cp .env.example .env
# .env dosyasını düzenleyin (aşağıya bakın)

# 4. Veritabanını oluşturun
npx prisma migrate dev

# 5. (Opsiyonel) Örnek verileri yükleyin
npx ts-node prisma/seed.ts

# 6. Geliştirme sunucusunu başlatın
npm run dev
```

Uygulama varsayılan olarak **http://localhost:3000** adresinde çalışır.

---

## 🔑 Ortam Değişkenleri

Proje kök dizininde bir `.env` dosyası oluşturun:

```env
# Veritabanı
DATABASE_URL="mysql://kullanici:sifre@localhost:3306/fitcare"

# NextAuth
NEXTAUTH_SECRET="super-gizli-bir-anahtar-buraya"
NEXTAUTH_URL="http://localhost:3000"
```

---

## 💡 Kullanım

### Hesap Oluşturma
1. `/register` sayfasına gidin
2. **Danışan** veya **Diyetisyen** rolünü seçin (animasyonlu geçiş)
3. E-posta ve şifre ile kayıt olun

### Giriş
1. `/login` sayfasından giriş yapın
2. Rolünüze göre otomatik olarak ilgili panele yönlendirilirsiniz

### Diyetisyen İş Akışı
1. **Dashboard**'dan genel durumu kontrol edin
2. **Hastalarım (CRM)** bölümünden danışan ekleyin ve profillerini yönetin
3. **Diyet Listeleri** ile kişiye özel beslenme planları oluşturun
4. **Randevular** bölümünden görüşmeleri planlayın ve onaylayın

### Danışan İş Akışı
1. **Özetim** sayfasından günlük hedeflerinizi görüntüleyin
2. **Yapay Zeka Öğün** ile öğünlerinizi kaydedin
3. **Su & Egzersiz** takibi yapın
4. **Gelişim Grafikleri**'nden ilerlemenizi izleyin

---

## 🎨 Ekran Görüntüleri

### Kayıt Sayfası (Animasyonlu Rol Geçişi)
> Danışan seçildiğinde sağ panel yeşil tonlarında, Diyetisyen seçildiğinde panel sola kayarak mavi/mor tonlarına geçer.

### Danışan Paneli
> Glassmorphism kartlar, emerald/teal renk paleti, gradient istatistik kartları.

### Diyetisyen Dashboard
> Indigo/purple tema, CRM tablosu, makro hesaplamalı diyet oluşturucu.

---

## 📝 Geliştirme Notları

### Tasarım Kararları

- **Headless UI v2 + Base UI hibrit yaklaşımı:** Dropdown menüler Headless UI, Dialog/Select/Button gibi bileşenler Base UI (Shadcn) üzerine kurulu.
- **Server/Client Component ayrımı:** Layout dosyaları Server Component olarak kalır, sidebar navigasyonu ve logout butonu ayrı Client Component'ler olarak izole edilmiştir. Bu yaklaşım hydration hatalarını önler.
- **`usePathname()` ile aktif navigasyon:** Sidebar linkleri mevcut URL ile karşılaştırılarak aktif/pasif durumu belirlenir.
- **`signOut()` programatik çağrı:** NextAuth'un `/api/auth/signout` sayfası yerine `signOut({ callbackUrl })` kullanılarak çıkış onay dialogu uygulanmıştır.

### Bilinen Kısıtlamalar

- Recharts SSR sırasında boyut uyarısı verir (çalışmayı etkilemez)
- Middleware dosyası deprecation uyarısı verir (Next.js 16 proxy geçişi)
- Şu an veriler statik mock data üzerine kurulu, Prisma entegrasyonu gelecek adımlarda yapılacak

---

## 🗺 Yol Haritası

- [ ] **Prisma Entegrasyonu** — Dashboard ve CRM sayfalarını gerçek veritabanı sorgularıyla bağlama
- [ ] **AI Öğün Analizi** — Fotoğraf tabanlı besin değeri tahmini (OpenAI Vision API)
- [ ] **Gerçek Zamanlı Mesajlaşma** — WebSocket veya Server-Sent Events ile canlı chat
- [ ] **PDF Rapor** — Haftalık/aylık beslenme raporu oluşturma ve indirme
- [ ] **Bildirim Sistemi** — Push notification ve e-posta hatırlatıcıları
- [ ] **Mobil Uygulama** — React Native veya PWA ile mobil deneyim
- [ ] **Admin Paneli** — Sistem yöneticisi için kullanıcı ve içerik yönetimi
- [ ] **Çoklu Dil Desteği** — i18n altyapısı (TR/EN)

---

## 📄 Lisans

Bu proje özel kullanım amaçlıdır.

---

<p align="center">
  <b>FitCare</b> ile sağlıklı yaşam bir tık uzağınızda. 🌿
</p>
