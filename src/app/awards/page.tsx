import React from 'react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Shield, Droplets, CheckCircle2, Star, StarHalf, ArrowRight } from 'lucide-react';

export const metadata = {
  title: "Awards, Ratings & Recognitions | Comfygen",
  description: "See Comfygen's verified awards, ratings & client reviews across Clutch, GoodFirms, DesignRush & more.",
};

export default function AwardsPage() {
  const badges = [
    {
      name: "Top Developer",
      category: "Web Development",
      icon: <Shield className="w-8 h-8 text-white" />,
      color: "bg-blue-600"
    },
    {
      name: "Clutch",
      category: "B2B Services",
      icon: <span className="font-black text-xl tracking-tighter text-black">Clutch</span>,
      color: "bg-white"
    },
    {
      name: "DesignRush",
      category: "Agency Directory",
      icon: <Droplets className="w-8 h-8 text-white" />,
      color: "bg-purple-600"
    },
    {
      name: "SelectedFirms",
      category: "IT Services",
      icon: <CheckCircle2 className="w-8 h-8 text-white" />,
      color: "bg-emerald-600"
    },
    {
      name: "GoodFirms",
      category: "Software Dev",
      icon: <Star className="w-8 h-8 text-white" />,
      color: "bg-amber-600"
    }
  ];

  const ratings = [
    { platform: "Clutch", score: 4.9, color: "bg-blue-500" },
    { platform: "GoodFirms", score: 4.8, color: "bg-amber-500" },
    { platform: "SelectedFirms", score: 4.9, color: "bg-emerald-500" },
    { platform: "DesignRush", score: 4.7, color: "bg-purple-500" },
    { platform: "Top Developer", score: 4.8, color: "bg-blue-600" }
  ];

  const testimonials = [
    {
      quote: "Deadlines were tight and they still delivered clean, well-tested code every sprint.",
      author: "via Clutch, CTO at a fintech startup"
    },
    {
      quote: "Communication was constant — we never had to chase a status update once.",
      author: "via GoodFirms, Product Lead at a healthtech company"
    },
    {
      quote: "They understood our scaling problems better than our previous in-house team did.",
      author: "via SelectedFirms, Founder of a logistics platform"
    }
  ];

  return (
    <main className="relative min-h-screen font-sans flex flex-col bg-[#0A0F24] text-white selection:bg-blue-500/30">
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header theme="dark" />
      </div>

      {/* Global Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-4 border-b border-white/5">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 text-sm text-blue-300 font-medium">
              / awards-and-ratings
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight !font-heading">
              Comfygen <span className="text-blue-400">Awards,</span><br/>
              Ratings & Recognition's
            </h1>
            
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-20 leading-relaxed">
              Our consistent presence on the industry's leading rating and review platforms reflects the trust our clients place in us and the quality we bring to every project we deliver.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-4xl mx-auto border-t border-white/10 pt-12">
              <div className="text-left md:text-center md:border-r border-white/10 last:border-0">
                <div className="text-3xl font-bold mb-2">4.9 / 5</div>
                <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Average Rating</div>
              </div>
              <div className="text-left md:text-center md:border-r border-white/10 last:border-0">
                <div className="text-3xl font-bold mb-2">210+</div>
                <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Verified Reviews</div>
              </div>
              <div className="text-left md:text-center md:border-r border-white/10 last:border-0">
                <div className="text-3xl font-bold mb-2">5</div>
                <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Platform Badges</div>
              </div>
              <div className="text-left md:text-center">
                <div className="text-3xl font-bold mb-2">Top 10</div>
                <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Ranked Category</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Badges Section */}
        <section className="py-24 px-4 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <div className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-4">Recognized By</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl !font-heading">Every badge on this page was earned, not bought.</h2>
              <p className="text-slate-400 max-w-2xl">
                Each platform verifies client reviews independently before awarding a listing — here's where Comfygen currently ranks.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {badges.map((badge, idx) => (
                <div key={idx} className="bg-[#131A36]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all hover:bg-[#1A2346]">
                  <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center shadow-lg ${badge.color}`}>
                    {badge.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{badge.name}</h3>
                  <p className="text-sm text-slate-500">{badge.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Ratings Bars Section */}
        <section className="py-24 px-4 border-b border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-4">By The Numbers</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-xl !font-heading">Ratings across every platform we're listed on.</h2>
              <p className="text-slate-400">
                Scores are pulled directly from each platform's public profile page.
              </p>
            </div>

            <div className="space-y-4">
              {ratings.map((item, idx) => (
                <div key={idx} className="bg-[#131A36]/80 backdrop-blur-sm border border-white/5 rounded-xl p-4 md:p-6 flex items-center gap-6">
                  <div className="w-32 flex items-center gap-3 shrink-0">
                    <div className={`w-2 h-2 rounded-full ${item.color}`} />
                    <span className="font-bold">{item.platform}</span>
                  </div>
                  
                  <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden relative">
                    <div 
                      className={`absolute top-0 left-0 bottom-0 ${item.color} rounded-full`}
                      style={{ width: `${(item.score / 5) * 100}%` }}
                    />
                  </div>
                  
                  <div className="w-12 text-right font-bold text-lg shrink-0">
                    {item.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Testimonials Section */}
        <section className="py-24 px-4 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <div className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-4">In Their Words</div>
              <h2 className="text-4xl md:text-5xl font-bold !font-heading">What verified clients say.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((test, idx) => (
                <div key={idx} className="bg-[#131A36]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-8 flex flex-col h-full">
                  <div className="flex gap-1 mb-6 text-amber-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-8 flex-1">
                    "{test.quote}"
                  </p>
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-sm text-slate-500">{test.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Final CTA */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#131A36]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 !font-heading">Curious how we'd approach your project?</h2>
              <p className="text-slate-400 mb-10 relative z-10">We'll walk you through past work on the exact platforms above.</p>
              
              <button className="relative z-10 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]">
                Start a project
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
