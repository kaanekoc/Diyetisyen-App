import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with sample data...');

  const passwordHash = await bcrypt.hash('123456', 10);

  // 1. Diyetisyen Eklenmesi (Yönetici)
  const dietitianUser = await prisma.user.upsert({
    where: { email: 'diyetisyen@example.com' },
    update: {},
    create: {
      email: 'diyetisyen@example.com',
      passwordHash,
      role: 'DIETITIAN',
      dietitianProfile: {
        create: {
          specialty: 'Klinik Beslenme Uzmanı',
        },
      },
    },
    include: { dietitianProfile: true },
  });

  const dietitianId = dietitianUser.dietitianProfile!.id;

  // 2. Danışan 1 Eklenmesi
  const patientUser1 = await prisma.user.upsert({
    where: { email: 'hasta1@example.com' },
    update: {},
    create: {
      email: 'hasta1@example.com',
      passwordHash,
      role: 'PATIENT',
      patientProfile: {
        create: {
          dietitianId: dietitianId,
          targetWeightKg: 70.0,
          dailyCalorieGoal: 1800,
          dateOfBirth: new Date('1995-05-15'),
        },
      },
    },
    include: { patientProfile: true },
  });

  const patientId1 = patientUser1.patientProfile!.id;

  // 3. Danışan 2 Eklenmesi
  const patientUser2 = await prisma.user.upsert({
    where: { email: 'hasta2@example.com' },
    update: {},
    create: {
      email: 'hasta2@example.com',
      passwordHash,
      role: 'PATIENT',
      patientProfile: {
        create: {
          dietitianId: dietitianId,
          targetWeightKg: 55.0,
          dailyCalorieGoal: 1500,
          dateOfBirth: new Date('1998-11-20'),
        },
      },
    },
    include: { patientProfile: true },
  });

  const patientId2 = patientUser2.patientProfile!.id;

  // 4. Randevular
  await prisma.appointment.createMany({
    data: [
      {
        dietitianId,
        patientId: patientId1,
        scheduledAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2), // 2 gün sonra
        status: 'CONFIRMED',
      },
      {
        dietitianId,
        patientId: patientId2,
        scheduledAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5), // 5 gün sonra
        status: 'PENDING',
      },
    ],
  });

  // 5. Öğün (Meal Log) Kaydı
  await prisma.mealLog.createMany({
    data: [
      {
        patientId: patientId1,
        timeOfDay: 'Kahvaltı',
        description: '2 yumurta, 1 dilim kepek ekmeği, beyaz peynir',
        aiCalories: 350,
        aiProtein: 20,
        aiCarbs: 15,
        aiFat: 25,
      },
      {
        patientId: patientId1,
        timeOfDay: 'Öğle',
        description: 'Izgara tavuk salata',
        aiCalories: 400,
        aiProtein: 35,
        aiCarbs: 10,
        aiFat: 20,
      },
    ],
  });

  // 6. Su Kaydı
  await prisma.waterLog.createMany({
    data: [
      {
        patientId: patientId1,
        amountMl: 500,
      },
      {
        patientId: patientId1,
        amountMl: 300,
      },
    ],
  });

  // 7. Ölçüm Kaydı
  await prisma.measurement.createMany({
    data: [
      {
        patientId: patientId1,
        weightKg: 72.5,
        bmi: 24.5,
        waistCm: 85.0,
        recordedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), // 1 hafta önce
      },
      {
        patientId: patientId1,
        weightKg: 71.8,
        bmi: 24.2,
        waistCm: 84.0,
      },
    ],
  });

  // 8. Diyet Planı
  const dietPlan = await prisma.dietPlan.create({
    data: {
      dietitianId,
      patientId: patientId1,
      title: 'Haftalık Yağ Yakım Programı',
      startDate: new Date(),
      endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    },
  });

  await prisma.dietMeal.createMany({
    data: [
      {
        dietPlanId: dietPlan.id,
        timeOfDay: 'Kahvaltı',
        description: 'Yulaf ezmesi ve 1 bardak süt',
        targetCalories: 300,
      },
      {
        dietPlanId: dietPlan.id,
        timeOfDay: 'Öğle',
        description: '1 porsiyon ızgara somon, roko salatası',
        targetCalories: 450,
      },
    ],
  });

  console.log('✅ Seed işlemi başarıyla tamamlandı!');
  console.log('Diyetisyen Email: diyetisyen@example.com | Şifre: 123456');
  console.log('Danışan Email: hasta1@example.com | Şifre: 123456');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
