'use client';

import Image from 'next/image';

interface AviationTransportHeroProps {
  lang: string;
}

export function AviationTransportHero({ lang }: AviationTransportHeroProps) {
  const isArabic = lang === 'ar';

  const translations = {
    en: {
      breadcrumb: 'Trusted Guards / Sectors / Aviation & Transportation',
      title: 'Aviation & Transportation',
      mainHeading: 'We secure transportation networks and aviation facilities to support safe passenger and cargo movement in line with international standards.',
      mission: 'Mission',
      vision: 'Our Vision for Aviation & Transportation',
      missionDesc: 'Protect transportation networks and airport operations through smart security solutions and integrated safety systems.',
      visionDesc: 'Ensuring secure, safe and compliant air and transportation operations using advanced systems and continuous operational excellence.',
      focusAreas: 'Focus Areas',
      focusPoints: [
        'Terminal and airport security',
        'Cargo and vehicle protection',
        'Access point assessment and planning'
      ],
      goals: 'Goals',
      goalPoints: [
        'Ensure safe transport operations and procedures',
        'Protection of passengers and personnel at terminals',
        'Continuous development of security operations and capabilities'
      ],
      achievements: 'Achievements',
      achievementPoints: [
        'Securing transportation and cargo terminal facilities',
        'Implementation of integrated access and entry systems',
        'Enhanced operational safety and passenger security'
      ]
    },
    ar: {
      breadcrumb: 'ترستد جاردز / القطاعات / الطيران والنقل',
      title: 'الطيران والنقل',
      mainHeading: 'نؤمّن شبكات النقل ومرافق الطيران لضمان سلامة حركة الأفراد والبضائع مع الالتزام بالمعايير والتشريعات الدولية.',
      mission: 'المهمة',
      vision: 'رؤيتنا لقطاع الطيران والنقل',
      missionDesc: 'ضمان شبكات نقل ومرافق سفر آمنة وموثوقة من خلال حلول أمنية ذكية ومتطورة.',
      visionDesc: 'الارتقاء بأمن الطيران والنقل عبر أنظمة متقدمة وتميز تشغيلي مستمر.',
      focusAreas: 'مجالات التركيز',
      focusPoints: [
        'أمن المحطات والمطارات',
        'حماية الركاب والبضائع',
        'تقييم المخاطر والتخطيط للطوارئ'
      ],
      goals: 'الأهداف',
      goalPoints: [
        'ضمان نقل آمن وموثوق ومتوافق',
        'حماية المسافرين والعاملين والبنية التحتية',
        'تطوير العمليات والقدرات الأمنية بشكل مستمر'
      ],
      achievements: 'إنجازاتنا',
      achievementPoints: [
        'تأمين المحطات ومرافق النقل الحيوية بنجاح',
        'تنفيذ أنظمة مراقبة وصول متقدمة',
        'تعزيز السلامة التشغيلية وتأمين الركاب'
      ]
    }
  };

  const t = translations[isArabic ? 'ar' : 'en'];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-end overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/القطاعات/الطيران والنقل.png"
            alt="Airport terminal with aircraft"
            fill
            sizes="100vw"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35"></div>
        </div>

        {/* Gold Decorative Arrows - Right Side */}
        <div className={`absolute ${isArabic ? 'left-8 md:left-12' : 'right-8 md:right-12'} bottom-32 md:bottom-48 z-20 flex flex-col gap-4`}>
          <svg className="w-6 h-12 text-accent opacity-80" fill="none" viewBox="0 0 24 48">
            <path stroke="currentColor" strokeWidth="2" d="M6 12l12 12-12 12" />
          </svg>
          <svg className="w-6 h-12 text-secondary opacity-70" fill="none" viewBox="0 0 24 48">
            <path stroke="currentColor" strokeWidth="2" d="M6 12l12 12-12 12" />
          </svg>
          <svg className="w-6 h-12 text-primary opacity-60" fill="none" viewBox="0 0 24 48">
            <path stroke="currentColor" strokeWidth="2" d="M6 12l12 12-12 12" />
          </svg>
        </div>

        {/* Content Container */}
        <div className={`relative z-10 w-full px-6 md:px-12 pb-20 md:pb-32 ${isArabic ? 'text-right' : 'text-left'}`}>
          {/* Breadcrumb */}
          <div className={`text-xs md:text-sm text-accent mb-12 font-medium tracking-wide ${isArabic ? 'text-right' : 'text-left'}`}>
            {t.breadcrumb}
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight text-balance drop-shadow-lg">
            {t.title}
          </h1>

          {/* Vertical Text (Sidebar) */}
          <div className={`absolute bottom-6 ${isArabic ? 'right-4 md:right-8 vertical-text-rl' : 'left-4 md:left-8 vertical-text-rl-reverse'} text-xs text-white/50 tracking-widest`}>
            <span>Trusted Guards</span>
          </div>
        </div>
      </section>

      {/* Main Heading Section */}
      <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-relaxed text-balance ${isArabic ? 'text-right' : 'text-left'}`}>
            {t.mainHeading}
          </h2>
          <div className={`h-1 w-24 bg-gradient-to-r from-accent to-secondary mt-8 ${isArabic ? 'ml-auto' : ''}`}></div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full bg-white py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {/* Mission */}
          <div className={`${isArabic ? 'md:order-2' : ''}`}>
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {t.mission}
              </h3>
            </div>
            <div className="h-1 w-16 bg-accent mb-8"></div>
            <p className={`text-gray-700 text-base md:text-lg leading-relaxed ${isArabic ? 'text-right' : 'text-left'}`}>
              {t.missionDesc}
            </p>
          </div>

          {/* Vision */}
          <div className={`${isArabic ? 'md:order-1' : ''}`}>
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {t.vision}
              </h3>
            </div>
            <div className="h-1 w-16 bg-accent mb-8"></div>
            <p className={`text-gray-700 text-base md:text-lg leading-relaxed ${isArabic ? 'text-right' : 'text-left'}`}>
              {t.visionDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Three Feature Cards Section */}
      <section className="w-full bg-gray-50 py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Focus Areas Card */}
          <div className="bg-gray-100/80 rounded-lg p-10 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary text-center mb-4">
              {t.focusAreas}
            </h3>
            <div className="h-1 w-12 bg-accent mx-auto mb-8"></div>
            <ul className={`space-y-4 ${isArabic ? 'text-right' : 'text-left'}`}>
              {t.focusPoints.map((point, index) => (
                <li key={index} className="text-gray-700 flex items-start gap-3">
                  <span className="text-accent font-bold mt-1 flex-shrink-0">•</span>
                  <span className="text-sm md:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Goals Card */}
          <div className="bg-gray-100/80 rounded-lg p-10 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary text-center mb-4">
              {t.goals}
            </h3>
            <div className="h-1 w-12 bg-accent mx-auto mb-8"></div>
            <ul className={`space-y-4 ${isArabic ? 'text-right' : 'text-left'}`}>
              {t.goalPoints.map((point, index) => (
                <li key={index} className="text-gray-700 flex items-start gap-3">
                  <span className="text-accent font-bold mt-1 flex-shrink-0">•</span>
                  <span className="text-sm md:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements Card */}
          <div className="bg-gray-100/80 rounded-lg p-10 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary text-center mb-4">
              {t.achievements}
            </h3>
            <div className="h-1 w-12 bg-accent mx-auto mb-8"></div>
            <ul className={`space-y-4 ${isArabic ? 'text-right' : 'text-left'}`}>
              {t.achievementPoints.map((point, index) => (
                <li key={index} className="text-gray-700 flex items-start gap-3">
                  <span className="text-accent font-bold mt-1 flex-shrink-0">•</span>
                  <span className="text-sm md:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
