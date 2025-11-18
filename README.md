مشروع جاهز للمنصة التعليمية - Fullstack Starter
================================================

المحتويات:
- backend/  : خادم Node.js + Express + MongoDB
- frontend/ : تطبيق React (Vite) + Tailwind

خطوات التشغيل محليا:
1) Backend:
   - افتح مجلد backend
   - انسخ .env.example إلى .env واضبط MONGO_URI و JWT_SECRET
   - npm install
   - npm run dev

2) Frontend:
   - افتح مجلد frontend
   - npm install
   - npm run dev
   - لربط الواجهة بالـ API، تأكد أن VITE_API_URL مضبوط أو شغّل backend محليًا على 5000

رفع على الإنترنت (اقتراح بسيط):
- ارفع الكود على GitHub (مجلدان frontend و backend داخل repo واحد)
- استخدم Vercel لنشر الواجهة (Import from GitHub)
- استخدم Render أو Railway لتشغيل backend (Import from GitHub)
- ضع متغيرات البيئة على Render/Vercel: MONGO_URI, JWT_SECRET, NODE_ENV=production

سكربت نشر أوتوماتيكي (موجود كمثال):
- في حال أردت، يمكنني إعداد GitHub Actions وملفات إعداد Vercel/Render جاهزة.

ملاحظات أمانية:
- لا تشارك مفاتيحك السرية (مثل MONGO_URI) في الدردشة العامة.
- إن أردت أن أنشر لك المنصة فعليًا أحتاج صلاحية الوصول إلى GitHub أو مفاتيح النشر.
