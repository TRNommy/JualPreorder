import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Send, Package } from "lucide-react";
import type { Product } from "./ProductGrid";

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onOrderTelegram: (id: string, name: string) => void;
}

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
  onOrderTelegram,
}: ProductDetailModalProps) {
  if (!product) return null;
  const isPriceUnset = product.price === 0;

  const formatPrice = (price: number) => {
    if (price === 0) {
      return "Hubungi kami terlebih dahulu untuk informasi harga";
    }
    const riel = price * 4000;
    return `$${price} / ៛${riel.toLocaleString("en-US")}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <Badge className="absolute top-4 right-4">{product.category}</Badge>
          </div>

          <div>
            {isPriceUnset ? (
              <p className="text-lg font-medium text-muted-foreground mb-4">
                Hubungi kami terlebih dahulu untuk informasi harga
              </p>
            ) : (
              <p className="text-3xl font-bold text-primary mb-4">
                {formatPrice(product.price)}
              </p>
            )}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="bg-accent/50 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Waktu Pre-Order</h4>
                <p className="text-sm text-muted-foreground">
                  {product.preOrderDays} November
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Cara Pemesanan</h4>
                <p className="text-sm text-muted-foreground">
                  Hubungi kami via Telegram untuk melakukan pre-order
                </p>
              </div>
            </div>
          </div>

          <Button
            onClick={() => onOrderTelegram(product.id, product.name)}
            className="w-full gap-2"
            size="lg"
            data-testid="button-order-telegram-modal"
          >
            <Send className="w-5 h-5" />
            Pesan via Telegram
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
