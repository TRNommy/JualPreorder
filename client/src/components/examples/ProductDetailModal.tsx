import { useState } from 'react';
import ProductDetailModal from '../ProductDetailModal';
import { Button } from '@/components/ui/button';
import productImage from '@assets/generated_images/Skincare_product_flatlay_bae039f1.png';

export default function ProductDetailModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  const product = {
    id: '1',
    name: 'Korean Skincare Set Premium',
    category: 'Skincare',
    price: 250000,
    image: productImage,
    preOrderDays: 7,
    description: 'Set lengkap skincare Korea dengan bahan-bahan premium. Termasuk cleanser, toner, serum, dan moisturizer. Cocok untuk semua jenis kulit dan telah teruji dermatologi.',
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Product Detail</Button>
      <ProductDetailModal
        product={product}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onOrderTelegram={(id, name) => console.log('Order:', id, name)}
      />
    </div>
  );
}
