'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface IndustriesHeroProps {
  lang: string;
  backLink: string;
}

const translations = {
  ar: {
    breadcrumb: 'ترستد جاردز / القطاعات / الصناعات',
    title: 'الصناعات',
    subtitle: 'نحمي المناطق الصناعية من خلال إدارة المخاطر والمراقبة وبروتوكولات السلامة الصارمة لضمان استمرارية العمليات.',
    backText: 'العودة إلى القطاعات',
    missionTitle: 'المهمة',
    missionDesc: 'حماية المنشآت الصناعية والكوادر والمعدات من خلال إدارة مخاطر استباقية، ومراقبة مستمرة، وبروتوكولات سلامة صارمة.',
    visionTitle: 'رؤيتنا في القطاع الصناعي',
    visionDesc: 'تقديم منظومة أمن صناعي متقدمة تحمي الكوادر والعمليات ونقاط الوصول وتحد من المخاطر التشغيلية.',
    focusAreasTitle: 'مجالات التركيز',
    goalsTitle: 'الأهداف',
    achievementsTitle: 'إنجازاتنا',
    focusAreas: [
      'مراقبة المواقع الصناعية',
      'تقييم المخاطر والتخفيف منها',
      'أنظمة الدخول وحماية المحيط'
    ],
    goals: [
      'ضمان سلامة واستمرارية العمليات الصناعية',
      'تقليل المخاطر والحد من الحوادث',
      'تطبيق إجراءات أمنية مثالية للمنشآت الصناعية'
    ],
    achievements: [
      'تأمين المناطق الصناعية والمنشآت الإنتاجية بنجاح',
      'تنفيذ استراتيجيات مستباقية للمراقبة وإدارة المخاطر',
      'تعزيز السلامة والامتثال في العمليات الصناعية'
    ]
  },
  en: {
    breadcrumb: 'Trusted Guards / Sectors / Industries',
    title: 'Industries',
    subtitle: 'We protect industrial environments through disciplined risk management, continuous surveillance, and strict safety protocols that sustain operational continuity.',
    backText: 'Back to Sectors',
    missionTitle: 'Mission',
    missionDesc: 'Protect industrial facilities, personnel, and equipment through proactive risk management, continuous monitoring, and strict safety protocols.',
    visionTitle: 'Our Vision for Industry',
    visionDesc: 'Deliver advanced industrial security that protects personnel, operations, and access points while reducing operational risk.',
    focusAreasTitle: 'Focus Areas',
    goalsTitle: 'Goals',
    achievementsTitle: 'Achievements',
    focusAreas: [
      'Industrial site monitoring',
      'Risk assessment and mitigation',
      'Access control and perimeter protection'
    ],
    goals: [
      'Ensure safety and continuity of industrial operations',
      'Reduce risks and prevent incidents',
      'Implement best security practices for industrial facilities'
    ],
    achievements: [
      'Successfully securing industrial zones and production facilities',
      'Implementing proactive surveillance and risk-management strategies',
      'Enhancing safety and compliance across industrial operations'
    ]
  }
};

export function IndustriesHero({ lang, backLink }: IndustriesHeroProps) {
  const t = lang === 'ar' ? translations.ar : translations.en;
  const isRTL = lang === 'ar';

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Link 
        href={backLink} 
        className="inline-flex items-center text-primary hover:text-secondary transition-colors gap-2"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {isRTL ? (
          <>
            <span>{t.backText}</span>
            <ChevronRight className="w-4 h-4 rotate-180" />
          </>
        ) : (
          <>
            <ChevronRight className="w-4 h-4 rotate-180" />
            <span>{t.backText}</span>
          </>
        )}
      </Link>

      {/* Hero Section with Background Image */}
      <div className="hero-bg-industries relative rounded-xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className={`absolute inset-0 flex items-end justify-between p-8 md:p-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="flex-1">
            {/* Breadcrumb */}
            <p className="text-accent text-sm md:text-base mb-6 font-medium">
              {t.breadcrumb}
            </p>
            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-balance">
              {t.title}
            </h1>
          </div>

          {/* Right decorative accent */}
          {!isRTL && (
            <div className="hidden lg:flex items-center justify-center mr-8">
              <div className="space-y-3">
                <div className="w-12 h-1 bg-accent"></div>
                <div className="w-12 h-1 bg-accent ml-4"></div>
                <div className="w-12 h-1 bg-accent ml-8"></div>
              </div>
            </div>
          )}
          {isRTL && (
            <div className="hidden lg:flex items-center justify-center ml-8">
              <div className="space-y-3">
                <div className="w-12 h-1 bg-accent"></div>
                <div className="w-12 h-1 bg-accent mr-4"></div>
                <div className="w-12 h-1 bg-accent mr-8"></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="bg-white rounded-xl p-8 md:p-12" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Top Text */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-primary text-lg md:text-xl font-medium leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h2 className="text-primary text-2xl md:text-3xl font-bold mb-6 pb-3 border-b-2 border-accent">
              {t.missionTitle}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t.missionDesc}
            </p>
          </div>

          {/* Vision */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h2 className="text-primary text-2xl md:text-3xl font-bold mb-6 pb-3 border-b-2 border-accent">
              {t.visionTitle}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t.visionDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Three Cards Section */}
      <div className="grid md:grid-cols-3 gap-6" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Focus Areas Card */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4 0h1m-1-4h1m4 0h1m-1-4h1" />
              </svg>
            </div>
          </div>
          <h3 className={isRTL ? 'text-primary text-xl font-bold mb-6 text-right' : 'text-primary text-xl font-bold mb-6 text-center'}>
            {t.focusAreasTitle}
          </h3>
          <ul className={isRTL ? 'space-y-3 text-gray-600 text-right' : 'space-y-3 text-gray-600 text-left'}>
            {t.focusAreas.map((area, idx) => (
              <li key={idx} className="flex items-start gap-3">
                {!isRTL && <span className="text-accent font-bold mt-1">•</span>}
                <span>{area}</span>
                {isRTL && <span className="text-accent font-bold mt-1">•</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Goals Card */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h3 className={isRTL ? 'text-primary text-xl font-bold mb-6 text-right' : 'text-primary text-xl font-bold mb-6 text-center'}>
            {t.goalsTitle}
          </h3>
          <ul className={isRTL ? 'space-y-3 text-gray-600 text-right' : 'space-y-3 text-gray-600 text-left'}>
            {t.goals.map((goal, idx) => (
              <li key={idx} className="flex items-start gap-3">
                {!isRTL && <span className="text-accent font-bold mt-1">•</span>}
                <span>{goal}</span>
                {isRTL && <span className="text-accent font-bold mt-1">•</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements Card */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h3 className={isRTL ? 'text-primary text-xl font-bold mb-6 text-right' : 'text-primary text-xl font-bold mb-6 text-center'}>
            {t.achievementsTitle}
          </h3>
          <ul className={isRTL ? 'space-y-3 text-gray-600 text-right' : 'space-y-3 text-gray-600 text-left'}>
            {t.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-3">
                {!isRTL && <span className="text-accent font-bold mt-1">•</span>}
                <span>{achievement}</span>
                {isRTL && <span className="text-accent font-bold mt-1">•</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
