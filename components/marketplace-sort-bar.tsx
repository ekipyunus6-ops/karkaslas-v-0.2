import { Search, LayoutGrid, List, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MarketplaceSidebar } from "./marketplace-sidebar"

export function MarketplaceSortBar() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="relative flex-1 md:max-w-sm">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search products..." className="pl-8" />
      </div>

      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="sr-only">Filters</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <div className="py-4">
              <MarketplaceSidebar />
            </div>
          </SheetContent>
        </Sheet>

        <Select defaultValue="featured">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest Arrivals</SelectItem>
            <SelectItem value="rating">Best Rating</SelectItem>
          </SelectContent>
        </Select>

        <div className="hidden items-center gap-1 border-l pl-2 sm:flex">
          <Button variant="ghost" size="icon" className="bg-muted">
            <LayoutGrid className="h-4 w-4" />
            <span className="sr-only">Grid view</span>
          </Button>
          <Button variant="ghost" size="icon">
            <List className="h-4 w-4" />
            <span className="sr-only">List view</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
