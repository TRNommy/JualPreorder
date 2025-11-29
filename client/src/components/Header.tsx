import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onTelegramClick: () => void;
}

export default function Header({ onTelegramClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Produk", href: "#produk" },
    { name: "Preorder", href: "#preorder" },
    { name: "Hubungi Kami", href: "#hubungi" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-card-border bg-card/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              BYFROM A'Ling
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                data-testid={`link-nav-${item.name.toLowerCase().replace(' ', '-')}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              onClick={onTelegramClick}
              className="gap-2"
              data-testid="button-telegram-header"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Pesan via Telegram</span>
              <span className="sm:hidden">Pesan</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-card-border py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors px-2 py-2 rounded-lg hover-elevate"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.name.toLowerCase().replace(' ', '-')}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
