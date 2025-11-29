import { useState, useRef } from "react";
import { Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoCarousel from "@/components/PromoCarousel";
import CategoryCards from "@/components/CategoryCards";
import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid, { type Product } from "@/components/ProductGrid";
import ProductDetailModal from "@/components/ProductDetailModal";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import skincareImage1 from "@assets/generated_images/SkinCare.png";
import foodImage1 from "@assets/image_1762232470985.png";
import jastipImage1 from "@assets/generated_images/ChinaST.png";
import skincareImage2 from "@assets/generated_images/Makeup_jastip_items_fe03c38c.png";
import foodImage2 from "@assets/generated_images/Homemade_desserts_photo_133b0612.png";
import jastipImage2 from "@assets/generated_images/ChinaSF.png";

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Skincare Set Premium",
    category: "Skincare",
    price: 0,
    image: skincareImage1,
    preOrderDays: 15,
    description:
      "Set lengkap skincare dengan bahan-bahan premium. Termasuk cleanser, toner, serum, dan moisturizer. Cocok untuk semua jenis kulit dan telah teruji dermatologi.",
  },
  {
    id: "2",
    name: "Sandwich Buah",
    category: "Makanan Rumahan",
    price: 2,
    image: foodImage1,
    preOrderDays: 15,
    description:
      "Sandwich segar buatan rumah dengan bahan-bahan berkualitas. Dibuat fresh setiap hari dengan isian premium. Tersedia berbagai varian rasa yang lezat.",
  },
  {
    id: "3",
    name: "Fashion Items China Pria",
    category: "Jastip",
    price: 0,
    image: jastipImage1,
    preOrderDays: 15,
    description:
      "Jastip fashion China Pria terkini dengan harga terjangkau. Termasuk pakaian, aksesori, dan item fashion lainnya langsung dari China.",
  },
  {
    id: "4",
    name: "MakeUp Set",
    category: "Skincare",
    price: 0,
    image: skincareImage2,
    preOrderDays: 15,
    description:
      "Set makeup lengkap dengan berbagai produk pilihan. Langsung dari toko resmi di Korea. Dijamin original dan berkualitas tinggi.",
  },
  {
    id: "5",
    name: "Brownies & Dessert Box",
    category: "Makanan Rumahan",
    price: 3,
    image: foodImage2,
    preOrderDays: 15,
    description:
      "Brownies lembut dan dessert box dengan berbagai layer. Dibuat fresh setiap hari dengan resep rahasia keluarga. Perfect untuk gift atau dessert.",
  },
  {
    id: "6",
    name: "Fashion Items China Wanita",
    category: "Jastip",
    price: 0,
    image: jastipImage2,
    preOrderDays: 15,
    description:
      "Jastip fashion China Wanita terkini dengan harga terjangkau. Termasuk pakaian, aksesori, dan item fashion lainnya langsung dari China.",
  },
];

const categories = ["Semua Produk", "Jastip", "Skincare", "Makanan Rumahan"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Semua Produk");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  const filteredProducts =
    selectedCategory === "Semua Produk"
      ? mockProducts
      : mockProducts.filter((p) => p.category === selectedCategory);

  const handleViewDetails = (id: string) => {
    const product = mockProducts.find((p) => p.id === id);
    if (product) {
      setSelectedProduct(product);
      setIsModalOpen(true);
    }
  };

  const handleOrderTelegram = (id: string, name: string) => {
    const message = `Halo! Saya ingin memesan: ${name}`;
    const telegramUrl = `https://t.me/byfromstore?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, "_blank");
  };

  const handleViewProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/byfromstore", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onTelegramClick={handleTelegramClick} />

      <main className="flex-1">
        <Hero onTelegramClick={handleTelegramClick} />

        <PromoCarousel />

        <CategoryCards onTelegramClick={handleTelegramClick} />

        <div
          className="py-16 bg-gradient-to-br from-background via-muted/20 to-background"
          id="preorder"
          ref={productsRef}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                  <h2
                    className="text-4xl md:text-5xl font-bold text-foreground"
                    style={{ fontFamily: "Fredoka, sans-serif" }}
                  >
                    Produk Unggulan
                  </h2>
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Pilih kategori untuk melihat produk yang tersedia
                </p>
              </div>

              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />

              <ProductGrid
                products={filteredProducts}
                onViewDetails={handleViewDetails}
                onOrderTelegram={handleOrderTelegram}
              />
            </div>
          </div>
        </div>

        <ContactSection />
      </main>

      <Footer />

      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOrderTelegram={handleOrderTelegram}
      />
    </div>
  );
}
