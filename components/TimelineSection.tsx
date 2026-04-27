'use client'

import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import { useI18n } from '@/lib/i18n-context'

type StoryStage = {
  year: string
  phase: string
  title: string
  description: string
  image: string
  imageAlt: string
}

const lineFillHeights = [
  'h-0',
  'h-[5%]',
  'h-[10%]',
  'h-[15%]',
  'h-[20%]',
  'h-[25%]',
  'h-[30%]',
  'h-[35%]',
  'h-[40%]',
  'h-[45%]',
  'h-[50%]',
  'h-[55%]',
  'h-[60%]',
  'h-[65%]',
  'h-[70%]',
  'h-[75%]',
  'h-[80%]',
  'h-[85%]',
  'h-[90%]',
  'h-[95%]',
  'h-full',
]

const getEasedProgress = (value: number) => 0.5 - Math.cos(Math.PI * value) / 2

export function TimelineSection() {
    // مراقبة التمرير وتحديث المؤشر والخط
    useEffect(() => {
      if (!timelineRef.current || stageRefs.current.length === 0) return;

      const updateLineProgress = () => {
        const timeline = timelineRef.current;
        const stages = stageRefs.current;
        if (!timeline) return;

        const timelineRect = timeline.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        const windowH = window.innerHeight;

        // تحديد المرحلة النشطة
        let foundActive = 0;
        stages.forEach((el, idx) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          if (rect.top < windowH * 0.5) {
            foundActive = idx;
          }
        });
        setActiveIndex(foundActive);

        // حساب نسبة ملء الخط
        const timelineTop = timelineRect.top + scrollY;
        const timelineHeight = timelineRect.height;
        const scrollPosition = scrollY + windowH - timelineTop;
        let progress = Math.max(0, Math.min(1, scrollPosition / timelineHeight));
        setLineFillStep(Math.round(progress * (lineFillHeights.length - 1)));
      };

      window.addEventListener('scroll', updateLineProgress);
      window.addEventListener('resize', updateLineProgress);
      updateLineProgress();

      return () => {
        window.removeEventListener('scroll', updateLineProgress);
        window.removeEventListener('resize', updateLineProgress);
      };
    }, []);
  const { language } = useI18n()
  const isArabic = language === 'ar'
  const [activeIndex, setActiveIndex] = useState(0)
  const [lineFillStep, setLineFillStep] = useState(0)
  const stageRefs = useRef<Array<HTMLDivElement | null>>([])
  const timelineRef = useRef<HTMLDivElement | null>(null)

  const storySummary = isArabic
    ? 'محطات مختصرة توضّح كيف تطورت Trusted Guards من تأسيس منظم إلى حضور مؤسسي أكثر نضجًا.'
    : 'A concise view of how Trusted Guards evolved from a disciplined foundation into a more mature institutional presence.'

  const stageIntro = isArabic
    ? 'أهم المراحل التي صنعت مسار الشركة، باختصار واضح ومباشر.'
    : 'The key stages that shaped the company, presented clearly and briefly.'

  const storyStages: StoryStage[] = isArabic
    ? [
        {
          year: '2011',
          phase: 'مرحلة التأسيس',
          title: 'التأسيس والانطلاق',
          description: 'تأسست الشركة ووضعت الأساس للنمو والثقة المستقبلية.',
          image: '/images/company-opening-clean.png',
          imageAlt: 'فريق Trusted Guards في بداية الرحلة',
        },
        {
          year: '2013',
          phase: 'مرحلة التثبيت',
          title: 'ترسيخ أسلوب العمل',
          description: 'ثُبتت آليات العمل وتوضحت الأدوار لرفع الاتساق اليومي.',
          image: '/images/___________Trusted_Guards_d3cfe3e9-b531-45c7-82ee-0d0a0ff66732.png',
          imageAlt: 'الفريق في مرحلة ترسيخ العمل',
        },
        {
          year: '2016',
          phase: 'مرحلة التطوير',
          title: 'رفع الجاهزية التشغيلية',
          description: 'تحسنت المتابعة والاستجابة بما رفع كفاءة التشغيل.',
          image: '/images/security_operator_no_hat.png',
          imageAlt: 'مركز متابعة وتشغيل أمني',
        },
        {
          year: '2018',
          phase: 'مرحلة التحسين',
          title: 'تعزيز الكفاءة التقنية',
          description: 'استُخدمت تقنيات أكثر فعالية لدعم القرار وتحسين التنفيذ.',
          image: '/images/security_camera_repair_indoor.png',
          imageAlt: 'تقنيات وحلول أمنية متقدمة',
        },
        {
          year: '2020',
          phase: 'مرحلة التوسع',
          title: 'نمو الحلول والشراكات',
          description: 'توسعت الحلول والشراكات بشكل مدروس ورفعت نطاق الحضور.',
          image: '/images/new_person_security.png',
          imageAlt: 'بيئة عمل احترافية لـ Trusted Guards',
        },
        {
          year: '2023',
          phase: 'مرحلة التكامل',
          title: 'اتساع الحضور المؤسسي',
          description: 'أصبحت صورة الشركة أكثر تكاملًا ووضوحًا في التنفيذ.',
          image: '/images/realistic_security_guards.png',
          imageAlt: 'الحضور المؤسسي والخدمات الأمنية',
        },
        {
          year: '2025',
          phase: 'المرحلة الحالية',
          title: 'ترسيخ الثقة والتطوير المستمر',
          description: 'تواصل الشركة تطوير نموذجها الأمني مع الحفاظ على الاعتمادية.',
          image: '/images/safety_zone_hyper_realistic_dome.png',
          imageAlt: 'حلول وتقنيات أمنية متقدمة',
        },
      ]
    : [
        {
          year: '2011',
          phase: 'Foundation stage',
          title: 'Foundation and launch',
          description: 'The company was founded, setting the base for future growth and trust.',
          image: '/images/company-opening-clean.png',
          imageAlt: 'Trusted Guards team at the beginning of its journey',
        },
        {
          year: '2013',
          phase: 'Stabilization stage',
          title: 'Establishing the working model',
          description: 'Operations were stabilized and roles clarified to improve consistency.',
          image: '/images/___________Trusted_Guards_d3cfe3e9-b531-45c7-82ee-0d0a0ff66732.png',
          imageAlt: 'Team during the working model establishment phase',
        },
        {
          year: '2016',
          phase: 'Development stage',
          title: 'Operational readiness',
          description: 'Monitoring and response improved, raising everyday operating quality.',
          image: '/images/security_operator_no_hat.png',
          imageAlt: 'Security operations and monitoring center',
        },
        {
          year: '2018',
          phase: 'Optimization stage',
          title: 'Strengthening technical efficiency',
          description: 'More effective tools were introduced to improve decisions and execution.',
          image: '/images/control_room_black_man.png',
          imageAlt: 'Advanced security technologies and systems',
        },
        {
          year: '2020',
          phase: 'Expansion stage',
          title: 'Solution and partnership growth',
          description: 'Services and partnerships expanded, widening reach and delivery capability.',
          image: '/images/trusted_guards_bright_office.png',
          imageAlt: 'Trusted Guards professional workspace',
        },
        {
          year: '2023',
          phase: 'Integration stage',
          title: 'Broader institutional presence',
          description: 'The company profile became more integrated through clearer solutions and delivery.',
          image: '/images/realistic_security_guards.png',
          imageAlt: 'Institutional presence and security services',
        },
        {
          year: '2025',
          phase: 'Current stage',
          title: 'Sustained trust and continuous development',
          description: 'The company continues refining its security model while maintaining dependable delivery.',
          image: '/images/handshake_dark_skin_4.png',
          imageAlt: 'Advanced security technologies and systems',
        },
      ]
      // نهاية تعريف مصفوفة المراحل، لا تغلق useEffect هنا
      // أكمل الكود بشكل طبيعي بدون قوس زائد

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end">
          <div className={isArabic ? 'lg:order-2' : ''}>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary/55">
              {isArabic ? 'قصتنا' : 'Our story'}
            </p>
            <h2 className="mt-3 text-3xl font-black text-primary md:text-[2.5rem] md:leading-[1.08]">
              {isArabic ? 'رحلة تطور مهني عبر محطات واضحة.' : 'A professional evolution through clear milestones.'}
            </h2>
          </div>

          {/* وصف القصة أو المرحلة هنا إذا لزم الأمر، بدون أي نص تجريبي أو مسارات صور */}
        </div>

        <div className="mt-12">
          <div className={`mx-auto max-w-4xl ${isArabic ? 'lg:pr-20' : 'lg:pl-20'}`}>
            <div ref={timelineRef} className="relative">
              <div
                className={`absolute top-6 w-[6px] rounded-full bg-[var(--brand-navy-soft)] transition-[height] duration-300 ${lineFillHeights[lineFillStep]} ${isArabic ? 'right-3 md:right-6' : 'left-3 md:left-6'}`}
              />

              <div className="space-y-16 md:space-y-20">
                {storyStages.map((item, index) => {
                  const isReached = index <= activeIndex
                  const isLineReached = index < activeIndex
                  const isActive = index === activeIndex

                  return (
                    <div
                      key={item.year}
                      ref={el => { stageRefs.current[index] = el }}
                      data-stage-index={index}
                      className="relative min-h-[18rem] md:min-h-[22rem]"
                    >
                      {index < storyStages.length - 1 ? (
                        <div
                          className={`absolute top-12 h-[calc(100%+2rem)] w-[6px] transition-colors duration-500 ${isLineReached ? 'bg-[var(--brand-navy-soft)]' : 'bg-[var(--brand-silver)]'} ${isArabic ? 'right-3 md:right-6' : 'left-3 md:left-6'}`}
                        />
                      ) : null}

                      <div
                        className={`absolute top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-[5px] bg-white transition-colors duration-500 md:h-14 md:w-14 ${isReached ? 'border-[var(--brand-navy-soft)]' : 'border-[var(--brand-silver)]'} ${isArabic ? 'right-0 md:right-0' : 'left-0 md:left-0'}`}
                      >
                        <div className={`h-5 w-5 rounded-full transition-colors duration-500 md:h-6 md:w-6 ${isReached ? 'bg-[var(--brand-navy-soft)]' : 'bg-[var(--brand-silver)]'}`} />
                      </div>

                      <div className={isArabic ? 'pr-20 text-center md:pr-28' : 'pl-20 text-center md:pl-28'}>
                        <div className={`mx-auto max-w-2xl transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                          <div className={`text-5xl font-black leading-none transition-colors duration-500 md:text-[4.75rem] ${isReached ? 'text-[var(--brand-navy-soft)]' : 'text-[var(--brand-ink)]'}`}>
                            {item.year}
                          </div>
                          <p className={`mt-4 text-lg font-bold leading-8 transition-colors duration-500 md:text-[1.7rem] md:leading-[1.45] ${isActive ? 'text-[var(--brand-ink)]' : 'text-[color:rgba(15,31,46,0.72)]'}`}>
                            {item.title}
                          </p>
                          <p className={`mx-auto mt-2 max-w-2xl text-base font-semibold leading-8 transition-colors duration-500 md:text-[1.15rem] md:leading-9 ${isActive ? 'text-[color:rgba(15,31,46,0.82)]' : 'text-[color:rgba(15,31,46,0.56)]'}`}>
                            {item.description}
                          </p>

                          <div className={`relative mx-auto mt-8 aspect-square w-[220px] md:w-[260px] lg:w-[300px] transition-all duration-500 ${isActive ? 'scale-100 opacity-100' : 'scale-[0.96] opacity-65'}`}>
                            <Image
                              src={item.image}
                              alt={item.imageAlt}
                              fill
                              sizes="300px"
                              className={`object-contain rounded-xl transition-all duration-500 ${isActive ? 'grayscale-0' : 'grayscale-[35%]'}`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
