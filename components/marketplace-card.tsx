import { Star, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface Product {
  id: string
  title: string
  price: number
  rating: number
  reviews: number
  image: string
  category: string
  isNew?: boolean
}

interface MarketplaceCardProps {
  product: Product
}

export function MarketplaceCard({ product }: MarketplaceCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.isNew && <Badge className="absolute left-2 top-2 bg-primary text-primary-foreground">New</Badge>}
        <Button
          size="icon"
          variant="secondary"
          className="absolute right-2 top-2 h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="outline" className="text-xs font-normal">
            {product.category}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span>{product.rating}</span>
            <span className="text-xs">({product.reviews})</span>
          </div>
        </div>
        <h3 className="line-clamp-2 text-base font-medium leading-tight">{product.title}</h3>
        <div className="mt-2 font-bold text-lg">${product.price.toFixed(2)}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
