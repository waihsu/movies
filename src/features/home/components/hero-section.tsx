import { Play, Sparkles, Film, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Main Headline */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-foreground">
              Premium Streaming Experience
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-8xl lg:text-9xl font-bold text-foreground text-balance tracking-tight text-shadow-glow leading-none">
            IMMERSIVE
          </h1>

          <p className="text-2xl md:text-3xl font-serif text-foreground/90 text-balance">
            Cinema Reimagined
          </p>

          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover thousands of movies and TV series in stunning quality.
            Experience entertainment like never before with our premium
            collection of content from around the world.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Play className="w-5 h-5 mr-2" />
            Start Watching
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="glass-card border-white/20 hover:bg-white/10 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
          >
            <Film className="w-5 h-5 mr-2" />
            Browse Collection
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-12">
          <div className="glass-card p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
              10K+
            </div>
            <div className="text-muted-foreground font-medium">
              Movies & Series
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
              4K
            </div>
            <div className="text-muted-foreground font-medium">
              Ultra HD Quality
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
              24/7
            </div>
            <div className="text-muted-foreground font-medium">
              Unlimited Access
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
