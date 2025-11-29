import ProductCard from "./ProductCard";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  preOrderDays: number;
  description: string;
}

interface ProductGridProps {
  products: Product[];
  onViewDetails: (id: string) => void;
  onOrderTelegram: (id: string, name: string) => void;
}

export default function ProductGrid({
  products,
  onViewDetails,
  onOrderTelegram,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg">
          Tidak ada produk ditemukan
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          image={product.image}
          preOrderDays={product.preOrderDays}
          onViewDetails={onViewDetails}
          onOrderTelegram={onOrderTelegram}
        />
      ))}
    </div>
  );
}
