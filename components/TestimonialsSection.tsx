'use client'

import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'
import { useI18n } from '@/lib/i18n-context'

export function TestimonialsSection() {
  const { language, t } = useI18n()

  const testimonials = language === 'ar' ? [
    {
      id: 1,
      name: 'ثابو ماليننغا',
      position: 'مدير الأمن - فندق تيبل باي',
      image: 'https://api.dicebear.com/7.x/avataaars/jpg?seed=Thabo',
      rating: 5,
      text: 'خدمات Trusted Guards حسّنت من مستوى الأمان في الفندق بشكل ملحوظ جداً. الفريق احترافي وسريع الاستجابة، وتكنولوجيا المراقبة الحديثة تعطيك الاطمئنان الكامل.',
      company: 'فندق تيبل باي'
    },
    {
      id: 2,
      name: 'نوماليزو ندلوفو',
      position: 'مديرة التسويق - بنك ستاندرد',
      image: 'https://api.dicebear.com/7.x/avataaars/jpg?seed=Nomalizo',
      rating: 5,
      text: 'لقد اختبرنا عدة شركات أمنية، لكن Trusted Guards الأفضل من حيث الكفاءة والتكلفة والموثوقية. فريق عملهم يعمل 24/7 بكل احترافية.',
      company: 'بنك ستاندرد'
    },
    {
      id: 3,
      name: 'سيفو مويلا',
      position: 'مالك - مركز V&A الواجهة البحرية',
      image: 'https://api.dicebear.com/7.x/avataaars/jpg?seed=Sipho',
      rating: 5,
      text: 'الخدمة الأمنية المتقدمة التي تقدمها الشركة جعلتنا نركز على نمو النشاط التجاري. نظام المراقبة الذكي يوفر تقارير دقيقة وشاملة.',
      company: 'واجهة فيكتوريا وألفريد البحرية'
    },
    {
      id: 4,
      name: 'ليراتو موتسيبي',
      position: 'مديرة العمليات - مستشفى نتكير',
      image: 'https://api.dicebear.com/7.x/avataaars/jpg?seed=Lerato',
      rating: 5,
      text: 'في المجال الطبي، الأمان أولويتنا القصوى. فريق Trusted Guards يفهم احتياجاتنا الخاصة ويوفر حماية شاملة لمرضانا وموظفينا.',
      company: 'مستشفى نتكير'
    }
  ] : [
    {
      id: 1,
      name: 'Thabo Malenga',
      position: 'Security Director - Table Bay Hotel',
      image: 'https://api.dicebear.com/7.x/avataaars/jpg?seed=Thabo',
      rating: 5,
      text: 'Trusted Guards services significantly enhanced our hotel\'s security. The team is professional and responsive, with modern monitoring technology that provides complete peace of mind.',
      company: 'Table Bay Hotel'
    },
    {
      id: 2,
      name: 'Nomalizo Ndlovu',
      position: 'Marketing Director - Standard Bank',
      image: 'https://api.dicebear.com/7.x/avataaars/jpg?seed=Nomalizo',
      rating: 5,
      text: 'We tested several security companies, but Trusted Guards is the best in efficiency, cost, and reliability. Their team works 24/7 with complete professionalism.',
      company: 'Standard Bank'
    },
    {
      id: 3,
      name: 'Sipho Mwela',
      position: 'Operations Manager - V&A Waterfront',
      image: 'https://api.dicebear.com/7.x/avataaars/jpg?seed=Sipho',
      rating: 5,
      text: 'The advanced security service allowed us to focus on business growth. Their intelligent monitoring system provides detailed and comprehensive reports.',
      company: 'V&A Waterfront'
    },
    {
      id: 4,
      name: 'Lerato Motsepe',
      position: 'Operations Manager - Netcare Hospital',
      image: 'https://api.dicebear.com/7.x/avataaars/jpg?seed=Lerato',
      rating: 5,
      text: 'In the medical field, security is our top priority. The Trusted Guards team understands our needs and provides comprehensive protection for our patients and staff.',
      company: 'Netcare Hospital'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-medium">
            {language === 'ar'
              ? 'ثقة آلاف العملاء في خدماتنا الأمنية المتميزة تدل على جودة عملنا والتزامنا بالتفوق'
              : 'Thousands of clients trust our security services, proving our commitment to excellence'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full hover:shadow-2xl transition-all duration-300 border border-border bg-card group">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>

                {/* Quote */}
                <p className="text-sm text-foreground/70 font-medium mb-6 flex-grow leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Divider */}
                <div className="border-t border-border mb-6"></div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary shadow-md">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-secondary font-semibold">{testimonial.position}</p>
                    <p className="text-xs text-foreground/60">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-6 bg-muted rounded-2xl border border-border">
            <div>
              <p className="text-2xl font-black text-primary">+500</p>
              <p className="text-sm text-foreground/70 font-bold">{language === 'ar' ? 'عميل راضي' : 'Satisfied Clients'}</p>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div>
              <p className="text-2xl font-black text-primary">4.9★</p>
              <p className="text-sm text-foreground/70 font-bold">{language === 'ar' ? 'متوسط التقييم' : 'Average Rating'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
