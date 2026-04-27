import RelatedBoxesCarousel from '@/components/RelatedBoxesCarousel';

export default function BoxesDemoPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              مربعات متحركة
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              مربعات تتحرك بسلاسة عند الانتقال من نقطة لأخرى
            </p>
          </header>

          <section className="bg-slate-50 dark:bg-slate-800 rounded-xl shadow-md p-12 flex justify-center">
            <RelatedBoxesCarousel autoPlay={true} interval={2500} />
          </section>
        </div>
      </div>
    </main>
  );
}
