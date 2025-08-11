import { Database, Plus, Upload, User, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "./ThemeToggle"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-6">
        <div className="flex items-center space-x-2">
          <Database className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">DataGov Platform</span>
        </div>
        
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
          <Button variant="ghost" className="text-sm font-medium">
            Search & Discovery
          </Button>
          <Button variant="ghost" className="text-sm font-medium text-muted-foreground">
            Catalog
          </Button>
          <Button variant="ghost" className="text-sm font-medium text-muted-foreground">
            Documents
          </Button>
          <Button variant="ghost" className="text-sm font-medium text-muted-foreground">
            Tagging
          </Button>
          <Button variant="ghost" className="text-sm font-medium text-muted-foreground">
            Analytics
          </Button>
          <Button variant="ghost" className="text-sm font-medium text-muted-foreground">
            Workflows
          </Button>
          <Button variant="ghost" className="text-sm font-medium text-muted-foreground">
            Governance
          </Button>
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            New Pipeline
          </Button>
          <Button variant="outline" size="sm">
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
          <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 text-xs">
            1
          </Badge>
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}