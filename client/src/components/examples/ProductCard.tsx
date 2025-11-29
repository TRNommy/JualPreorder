import ProductCard from '../ProductCard';
import productImage from '@assets/generated_images/Skincare_product_flatlay_bae039f1.png';

export default function ProductCardExample() {
  return (
    <div className="max-w-sm">
      <ProductCard
        id="1"
        name="Korean Skincare Set Premium"
        category="Skincare"
        price={250000}
        image={productImage}
        preOrderDays={7}
        onViewDetails={(id) => console.log('View details:', id)}
        onOrderTelegram={(id, name) => console.log('Order via Telegram:', id, name)}
      />
    </div>
  );
}
