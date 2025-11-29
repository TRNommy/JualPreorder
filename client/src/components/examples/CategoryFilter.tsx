import { useState } from 'react';
import CategoryFilter from '../CategoryFilter';

export default function CategoryFilterExample() {
  const [selectedCategory, setSelectedCategory] = useState('Semua Produk');
  const categories = ['Semua Produk', 'Jastip', 'Skincare', 'Makanan Rumahan'];

  return (
    <CategoryFilter
      categories={categories}
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
    />
  );
}
