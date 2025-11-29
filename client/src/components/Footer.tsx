import { Send, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <h3
              className="text-2xl font-bold text-primary"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              BYFROM A'Ling
            </h3>
            <Heart className="w-5 h-5 text-primary fill-primary" />
          </div>

          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Menjual berbagai produk berkualitas dengan sistem pre-order.
            Jastip, skincare, dan makanan rumahan yang dibuat dengan cinta.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm">
            <Send className="w-4 h-4 text-primary" />
            <span className="font-medium text-foreground">
              Order via Telegram Only
            </span>
          </div>

          <div className="border-t pt-6">
            <p className="text-sm text-muted-foreground">
              © 2025 BYFROM A'Ling — All Rights Reserved
            </p>
            <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center gap-1">
              Made with <Heart className="w-3 h-3 text-primary fill-primary" /> for our lovely customers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
