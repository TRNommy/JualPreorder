import ProductGrid from '../ProductGrid';
import image1 from '@assets/generated_images/Skincare_product_flatlay_bae039f1.png';
import image2 from '@assets/generated_images/Homemade_food_photography_24cefa95.png';
import image3 from '@assets/generated_images/ChinaST.png';

export default function ProductGridExample() {
  const products = [
    {
      id: '1',
      name: 'Korean Skincare Set',
      category: 'Skincare',
      price: 250000,
      image: image1,
      preOrderDays: 7,
      description: 'Set lengkap skincare Korea'
    },
    {
      id: '2',
      name: 'Sandwich & Cookies Homemade',
      category: 'Makanan',
      price: 50000,
      image: image2,
      preOrderDays: 2,
      description: 'Makanan segar buatan rumah'
    },
    {
      id: '3',
      name: 'Fashion Items China',
      category: 'Jastip',
      price: 350000,
      image: image3,
      preOrderDays: 14,
      description: 'Jastip fashion Pria China'
    },
  ];

  return (
    <ProductGrid
      products={products}
      onViewDetails={(id) => console.log('View details:', id)}
      onOrderTelegram={(id, name) => console.log('Order:', id, name)}
    />
  );
}
