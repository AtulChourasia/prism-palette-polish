import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RecommendedSection } from "./RecommendedSection"

export function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-lg bg-card p-4 text-center border border-border">
          <div className="text-2xl font-bold text-primary">4,963</div>
          <div className="text-sm text-muted-foreground">Total Documents</div>
        </div>
        <div className="rounded-lg bg-card p-4 text-center border border-border">
          <div className="text-2xl font-bold text-warning">47</div>
          <div className="text-sm text-muted-foreground">Processing</div>
        </div>
        <div className="rounded-lg bg-card p-4 text-center border border-border">
          <div className="text-2xl font-bold text-info">12,456</div>
          <div className="text-sm text-muted-foreground">Auto Tags Applied</div>
        </div>
        <div className="rounded-lg bg-card p-4 text-center border border-border">
          <div className="text-2xl font-bold text-success">98.7%</div>
          <div className="text-sm text-muted-foreground">Processing Success</div>
        </div>
      </div>

      <div className="rounded-lg bg-gradient-to-r from-secondary/50 to-accent/30 p-6">
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Search with keywords or natural language
          </h2>
        </div>
        
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Input
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10 bg-background/90 backdrop-blur text-foreground placeholder:text-muted-foreground"
            />
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>

        <div className="flex gap-4 justify-center">
          <div className="flex items-center space-x-2">
            <Checkbox id="semantic" defaultChecked />
            <Label htmlFor="semantic" className="text-sm">Semantic</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="keyword" defaultChecked />
            <Label htmlFor="keyword" className="text-sm">Keyword</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="ocr" />
            <Label htmlFor="ocr" className="text-sm">Include OCR</Label>
          </div>
        </div>
      </div>

      <RecommendedSection />
    </div>
  )
}