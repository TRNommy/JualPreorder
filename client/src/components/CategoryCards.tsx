import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Shirt, Scissors, Footprints, UtensilsCrossed } from "lucide-react";

import clothingImg from "@assets/generated_images/Clothing_category_card_504d54da.png";
import pantsImg from "@assets/generated_images/Pants_category_card_25665d2b.png";
import shoesImg from "@assets/generated_images/Shoes_category_card_3cf182c9.png";
import foodImg from "@assets/generated_images/Food_category_card_1c1f6342.png";

interface Category {
  id: string;
  name: string;
  icon: typeof Shirt;
  image: string;
  count: number;
  emoji: string;
}

const categories: Category[] = [
  {
    id: "pakaian",
    name: "Pakaian",
    icon: Shirt,
    image: clothingImg,
    count: 50,
    emoji: ""
  },
  {
    id: "celana",
    name: "Celana",
    icon: Scissors,
    image: pantsImg,
    count: 30,
    emoji: ""
  },
  {
    id: "sepatu",
    name: "Sepatu",
    icon: Footprints,
    image: shoesImg,
    count: 25,
    emoji: ""
  },
  {
    id: "makanan",
    name: "Makanan",
    icon: UtensilsCrossed,
    image: foodImg,
    count: 15,
    emoji: ""
  }
];

interface CategoryCardsProps {
  onTelegramClick: () => void;
}

export default function CategoryCards({ onTelegramClick }: CategoryCardsProps) {
  return (
    <section id="produk" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Kategori Produk
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan berbagai produk pilihan dari kategori favorit Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group relative overflow-hidden rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
              data-testid={`card-category-${category.id}`}
            >
              <div className="aspect-square relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-accent-foreground">
                    {category.count}+ items
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: 'Fredoka, sans-serif' }}
                    >
                      {category.name}
                    </h3>
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full bg-white/90 backdrop-blur-sm hover:bg-white text-foreground border-none"
                    onClick={onTelegramClick}
                    data-testid={`button-order-${category.id}`}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Pesan via Telegram
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
