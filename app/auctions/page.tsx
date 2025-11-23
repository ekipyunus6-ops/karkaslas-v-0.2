import { Button } from "@/components/ui/button"
import { MarketplaceCard } from "@/components/marketplace-card"
import { MarketplaceSidebar } from "@/components/marketplace-sidebar"
import { MarketplaceSortBar } from "@/components/marketplace-sort-bar"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// Dummy data
const products = [
  {
    id: "1",
    title: "Wireless Noise-Canceling Headphones",
    price: 299.99,
    rating: 4.8,
    reviews: 1240,
    image: "/placeholder.svg?height=400&width=400",
    category: "Electronics",
    isNew: true,
  },
  {
    id: "2",
    title: "Ergonomic Office Chair",
    price: 199.5,
    rating: 4.5,
    reviews: 850,
    image: "/placeholder.svg?height=400&width=400",
    category: "Home & Garden",
  },
  {
    id: "3",
    title: "Smart Fitness Watch",
    price: 149.0,
    rating: 4.2,
    reviews: 320,
    image: "/placeholder.svg?height=400&width=400",
    category: "Electronics",
  },
  {
    id: "4",
    title: "Organic Cotton T-Shirt",
    price: 24.99,
    rating: 4.6,
    reviews: 150,
    image: "/placeholder.svg?height=400&width=400",
    category: "Clothing",
  },
  {
    id: "5",
    title: "Professional DSLR Camera",
    price: 1299.0,
    rating: 4.9,
    reviews: 2100,
    image: "/placeholder.svg?height=400&width=400",
    category: "Electronics",
  },
  {
    id: "6",
    title: "Stainless Steel Water Bottle",
    price: 35.0,
    rating: 4.7,
    reviews: 500,
    image: "/placeholder.svg?height=400&width=400",
    category: "Sports",
    isNew: true,
  },
  {
    id: "7",
    title: "Mechanical Gaming Keyboard",
    price: 129.99,
    rating: 4.8,
    reviews: 980,
    image: "/placeholder.svg?height=400&width=400",
    category: "Electronics",
  },
  {
    id: "8",
    title: "Yoga Mat with Carrying Strap",
    price: 45.0,
    rating: 4.4,
    reviews: 320,
    image: "/placeholder.svg?height=400&width=400",
    category: "Sports",
  },
]

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              M
            </div>
            Marketplace
          </div>
          <nav className="hidden gap-6 md:flex">
            <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </a>
            <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Categories
            </a>
            <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Deals
            </a>
            <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Sell
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Sign In
            </a>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="container px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar - Hidden on mobile, shown in sheet via SortBar */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-24">
              <MarketplaceSidebar />
            </div>
          </aside>

          <div className="flex-1 space-y-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
              <p className="text-muted-foreground">Showing 1-8 of 120 products</p>
            </div>

            <MarketplaceSortBar />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <MarketplaceCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
