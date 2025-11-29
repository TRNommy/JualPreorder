import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import banner1 from "@assets/generated_images/OPENPO.png";
import banner2 from "@assets/generated_images/CHINARO.png";
import banner3 from "@assets/generated_images/BESTSEL.png";

const banners = [
  {
    id: 1,
    image: banner1,
    alt: "Preorder Dibuka - 22 November Jam 11.00-12.00 - Fruit Sandwich & Brownies",
  },
  {
    id: 2,
    image: banner2,
    alt: "Diskon 50% - Mulai dari $5 / ៛20,000 - Semua Kategori",
  },
  {
    id: 3,
    image: banner3,
    alt: "Produk Unggulan Minggu Ini",
  },
];

export default function PromoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-card-border bg-card">
            <div className="relative aspect-video md:aspect-[21/9]">
              {banners.map((banner, index) => (
                <div
                  key={banner.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                  data-testid={`banner-slide-${index}`}
                >
                  <img
                    src={banner.image}
                    alt={banner.alt}
                    className="w-full h-full object-cover"
                    data-testid={`banner-image-${index}`}
                  />
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
              data-testid="button-carousel-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
              data-testid="button-carousel-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-white/60 hover:bg-white/80"
                  }`}
                  data-testid={`button-carousel-dot-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
