import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, Instagram, Mail, Heart, MessageCircle, Clock, Sparkles, Award } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="hubungi" className="py-16 bg-gradient-to-br from-muted via-accent/10 to-muted relative overflow-hidden">
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-primary fill-primary" />
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Hubungi Kami
            </h2>
            <Heart className="w-6 h-6 text-primary fill-primary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami siap melayani Anda! Hubungi kami melalui berbagai channel di bawah ini
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl border-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Send className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              Telegram
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Chat langsung untuk pemesanan
            </p>
            <Button
              asChild
              className="w-full"
              data-testid="button-contact-telegram"
            >
              <a
                href="https://t.me/byfromstore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                @byfromstore
              </a>
            </Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl border-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/30 mb-4">
              <Instagram className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              Instagram
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Follow untuk update produk terbaru
            </p>
            <Button
              variant="secondary"
              asChild
              className="w-full"
              data-testid="button-contact-instagram"
            >
              <a
                href="https://instagram.com/byfrom.l"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-4 h-4 mr-2" />
                @byfrom.l
              </a>
            </Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl border-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/30 mb-4">
              <Mail className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              Email
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Hubungi kami via Email
            </p>
            <Button
              variant="secondary"
              asChild
              className="w-full"
              data-testid="button-contact-email"
            >
              <a href="mailto:bsoalyuk@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                bsoalyuk@gmail.com
              </a>
            </Button>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-3 bg-accent/20 rounded-full border border-accent/30">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">
                Respon cepat dalam 5 menit
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4 text-accent-foreground fill-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">
                Pelayanan ramah
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">
                Trusted seller
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
