import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Send } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  preOrderDays: number;
  onViewDetails: (id: string) => void;
  onOrderTelegram: (id: string, name: string) => void;
}

export default function ProductCard({
  id,
  name,
  category,
  price,
  image,
  preOrderDays,
  onViewDetails,
  onOrderTelegram,
}: ProductCardProps) {
  const isPriceUnset = price === 0;
  const formatPrice = (price: number) => {
    const riel = price * 4000;
    return `$${price} / ៛${riel.toLocaleString("en-US")}`;
  };

  return (
    <Card
      className="overflow-hidden hover-elevate cursor-pointer transition-all"
      data-testid={`card-product-${id}`}
    >
      <div onClick={() => onViewDetails(id)}>
        <div className="relative aspect-square overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <Badge
            className="absolute top-3 right-3 text-xs"
            data-testid={`badge-category-${id}`}
          >
            {category}
          </Badge>
        </div>
        <CardContent className="p-4">
          <h3
            className="font-medium text-lg mb-2 line-clamp-2"
            data-testid={`text-product-name-${id}`}
          >
            {name}
          </h3>
          {isPriceUnset ? (
            <p className="text-base font-medium text-muted-foreground mb-2">
              Hubungi kami terlebih dahulu untuk informasi harga
            </p>
          ) : (
            <p
              className="text-2xl font-bold text-primary mb-2"
              data-testid={`text-price-${id}`}
            >
              {formatPrice(price)}
            </p>
          )}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Pre-order {preOrderDays} November</span>
          </div>
        </CardContent>
      </div>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onOrderTelegram(id, name);
          }}
          className="w-full gap-2"
          data-testid={`button-order-telegram-${id}`}
        >
          <Send className="w-4 h-4" />
          Pesan via Telegram
        </Button>
      </CardFooter>
    </Card>
  );
}
