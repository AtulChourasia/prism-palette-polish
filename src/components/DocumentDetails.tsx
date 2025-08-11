import { Download, Edit, FileText, Link, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface DocumentDetailsProps {
  isOpen: boolean
  onClose: () => void
  document: {
    title: string
    summary: string
    keyEntities: string[]
    relatedDocuments: string[]
    auditTrail: string
  }
}

export function DocumentDetails({ isOpen, onClose, document }: DocumentDetailsProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-lg font-semibold">Document Details & Actions</DialogTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-lg">{document.title}</h3>
          </div>
          
          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-2">Summary:</h4>
            <p className="text-sm">{document.summary}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-2">Key Entities:</h4>
            <div className="flex flex-wrap gap-2">
              {document.keyEntities.map((entity, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {entity}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-2">Related Documents:</h4>
            <div className="space-y-1">
              {document.relatedDocuments.map((doc, index) => (
                <div key={index} className="text-sm text-blue-600 hover:underline cursor-pointer">
                  {doc}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-2">Audit Trail:</h4>
            <p className="text-sm">{document.auditTrail}</p>
          </div>
          
          <Separator />
          
          <div className="flex flex-wrap gap-2">
            <Button size="sm" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Edit className="h-4 w-4" />
              Edit Tags
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Generate Summary
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Find Similar
            </Button>
          </div>
          
          <div className="flex items-center gap-2 pt-2">
            <Link className="h-4 w-4 text-muted-foreground" />
            <Button variant="ghost" size="sm" className="p-0 h-auto text-muted-foreground hover:text-foreground">
              Copy Link
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}