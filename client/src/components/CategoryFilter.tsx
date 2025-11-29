import { Badge } from "@/components/ui/badge";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="w-full py-6">
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={`cursor-pointer px-6 py-3 text-sm font-medium whitespace-nowrap rounded-full transition-all ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "hover-elevate"
            }`}
            onClick={() => onCategoryChange(category)}
            data-testid={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  );
}
