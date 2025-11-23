import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export function MarketplaceSidebar() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground">
          Clear all
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["category", "price", "rating"]} className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Electronics", "Clothing", "Home & Garden", "Sports", "Toys"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`cat-${category}`} />
                  <Label
                    htmlFor={`cat-${category}`}
                    className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider defaultValue={[0, 1000]} max={1000} step={10} />
              <div className="flex items-center justify-between text-sm">
                <span className="rounded border px-2 py-1">$0</span>
                <span className="text-muted-foreground">to</span>
                <span className="rounded border px-2 py-1">$1000</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating">
          <AccordionTrigger>Rating</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${rating}`} />
                  <Label htmlFor={`rating-${rating}`} className="flex items-center gap-1 text-sm font-normal">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={`text-lg ${i < rating ? "text-yellow-400" : "text-muted"}`}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-muted-foreground">& Up</span>
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
