'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, ArrowRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n-context'

export function NewsSection() {
  const { language, t } = useI18n()

  const news = language === 'ar' ? [
    {
      id: 1,
      title: 'Trusted Guards تفوز بجائزة أفضل شركة أمنية مبتكرة في جنوب أفريقيا',
      date: '2025-11-15',
      category: 'جوائز',
      excerpt: 'حققت Trusted Guards تتويجاً مستحقاً بفوزها بجائزة أفضل شركة أمنية مبتكرة في جنوب أفريقيا، تقديراً لجهودها المتميزة والخدمات الراقية في مجال الحلول الأمنية المتكاملة'
    },
    {
      id: 2,
      title: 'افتتاح مركز تدريب أمني متقدم في كيب تاون بمعايير عالمية',
      date: '2025-10-20',
      category: 'توسع',
      excerpt: 'أطلقت Trusted Guards مركز تدريب أمني متطور في كيب تاون مجهز بأحدث التقنيات والمعدات، لرفع مستوى كفاءة الكوادر الأمنية المتخصصة بكل احترافية'
    },
    {
      id: 3,
      title: 'شراكة استراتيجية مع شركة عالمية رائدة في الأمن والتكنولوجيا',
      date: '2025-09-05',
      category: 'شراكات',
      excerpt: 'وقعت Trusted Guards عقد شراكة استراتيجية مع شركة عالمية رائدة في مجال الأمن والتكنولوجيا، لتقديم خدمات أمنية متكاملة على مستوى عالمي في القارة الأفريقية'
    },
  ] : [
    {
      id: 1,
      title: 'Trusted Guards Wins Best Innovative Security Company Award in South Africa',
      date: '2025-11-15',
      category: 'Awards',
      excerpt: 'Trusted Guards received recognition as the best innovative security company in South Africa, earning this prestigious award for outstanding service and excellence in integrated security solutions.'
    },
    {
      id: 2,
      title: 'Opening of Advanced Security Training Center in Cape Town',
      date: '2025-10-20',
      category: 'Expansion',
      excerpt: 'Trusted Guards launched an advanced training center in Cape Town equipped with state-of-the-art technology to enhance the skills of specialized security personnel.'
    },
    {
      id: 3,
      title: 'Strategic Partnership with Leading Global Security & Technology Firm',
      date: '2025-09-05',
      category: 'Partnerships',
      excerpt: 'Trusted Guards signed a strategic partnership with a leading global security firm to deliver comprehensive security services at international standards across the African continent.'
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight">
            {t('news.title')}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-medium">
            {language === 'ar'
              ? 'تابع آخر التطورات والإنجازات والأخبار المهمة عن Trusted Guards والخدمات الجديدة'
              : 'Stay updated with the latest developments, achievements, and important news from Trusted Guards'}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-border hover:border-accent bg-card flex flex-col cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="text-xs bg-primary text-primary-foreground font-bold group-hover:bg-accent transition-colors duration-300">
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-foreground/60 font-medium">
                    <Calendar size={14} />
                    <span>
                      {new Date(article.date).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-primary line-clamp-2 group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-base text-foreground/70 flex-1 font-medium group-hover:text-foreground transition-colors duration-300">
                  {article.excerpt}
                </CardDescription>
                <button className="inline-flex items-center gap-2 text-primary hover:text-accent font-bold mt-6 group/button transition-all active:scale-95">
                  {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                  <ArrowRight size={16} className="group-hover/button:translate-x-1 transition-transform duration-300" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground hover:shadow-2xl hover:scale-105 active:scale-95 rounded-lg transition-all duration-300 font-bold shadow-lg hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 group"
          >
            {language === 'ar' ? 'استعرض كل الأخبار والتحديثات' : 'View All News & Updates'}
            <span className="inline-flex group-hover:translate-x-1 transition-transform duration-300">{language === 'ar' ? '←' : '→'}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
