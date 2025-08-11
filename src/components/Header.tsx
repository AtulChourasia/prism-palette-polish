import { useState } from "react";
import { Database, Plus, Upload, User, Settings, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ThemeSelector } from "./ThemeSelector";
export function Header() {
  const [sharepointUrl, setSharepointUrl] = useState("");
  return <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Link2 className="mr-2 h-4 w-4" />
                Upload via URL
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload from SharePoint URL</DialogTitle>
                <DialogDescription>
                  Enter a SharePoint URL to import documents directly.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="sharepoint-url">SharePoint URL</Label>
                  <Input id="sharepoint-url" placeholder="https://company.sharepoint.com/sites/..." value={sharepointUrl} onChange={e => setSharepointUrl(e.target.value)} />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Import Documents</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          
          <ThemeSelector />
          <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>;
}