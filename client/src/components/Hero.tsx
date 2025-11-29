import { Button } from "@/components/ui/button";
import { Clock, ArrowDown, MessageCircle } from "lucide-react";
import heroBanner from "@assets/generated_images/PO25.png";

interface HeroProps {
  onTelegramClick: () => void;
}

export default function Hero({ onTelegramClick }: HeroProps) {
  return (
    <section id="home" className="relative bg-gradient-to-br from-muted via-background to-accent/20">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-primary/30 blur-2xl" />
        <div className="absolute top-32 right-32 w-16 h-16 rounded-full bg-accent/30 blur-xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left" data-testid="hero-content">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/80 rounded-full border border-accent-foreground/20">
              <Clock className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">
                Preorder Spesial
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              PREORDER DIBUKA!
            </h1>

            <div className="space-y-2">
              <p className="text-2xl md:text-3xl font-semibold text-primary">
                15 NOVEMBER - 25 NOVEMBER
              </p>
              <p className="text-xl md:text-2xl font-medium text-foreground">
                untuk sekitaran sihanoukville 
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-card-border w-full max-w-md">
              <p className="text-lg font-semibold text-foreground mb-2">
                Menu Spesial:
              </p>
              <p className="text-xl text-primary font-medium">
                Sandwich Buah & Brownies Coklat
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md pt-4">
              <Button
                size="lg"
                onClick={onTelegramClick}
                className="text-lg gap-2"
                data-testid="button-preorder-telegram"
              >
                <MessageCircle className="w-5 h-5" />
                Pesan Sekarang via Telegram
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg"
              >
                <a href="#produk" data-testid="link-view-products">
                  Lihat Produk
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground animate-bounce pt-4">
              <ArrowDown className="w-4 h-4" />
              <span className="text-sm">Scroll untuk melihat lebih banyak</span>
            </div>
          </div>

          <div className="relative" data-testid="hero-image">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50" />
            <img
              src={heroBanner}
              alt="Preorder Special - Sandwich Buah & Brownies Coklat"
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
