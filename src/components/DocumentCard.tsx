import { FileText, Eye, Hash, Tag, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface DocumentCardProps {
  title: string
  description: string
  author: string
  date: string
  size: string
  views: number
  type: string
  tags: string[]
  successRate?: number
}

export function DocumentCard({
  title,
  description,
  author,
  date,
  size,
  views,
  type,
  tags,
  successRate
}: DocumentCardProps) {
  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return 'bg-red-500/10 text-red-500 border-red-500/20'
      case 'xlsx':
        return 'bg-green-500/10 text-green-500 border-green-500/20'
      case 'docx':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20'
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
    }
  }

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-muted-foreground" />
            <Badge variant="outline" className={getTypeColor(type)}>
              {type.toUpperCase()}
            </Badge>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
        <h3 className="font-semibold text-sm leading-tight">{title}</h3>
      </CardHeader>
      
      <CardContent className="pb-3">
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>{author}</span>
            <span>{date}</span>
            <span>{size}</span>
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              <span>{views} views</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs px-2 py-0">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <div className="flex w-full gap-2">
          <Button variant="ghost" size="sm" className="flex-1 h-8">
            <Eye className="mr-1 h-3 w-3" />
            View
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 h-8">
            <Hash className="mr-1 h-3 w-3" />
            Summarize
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 h-8">
            <Tag className="mr-1 h-3 w-3" />
            Tag
          </Button>
          {successRate && (
            <div className="flex items-center">
              <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/20">
                {successRate}%
              </Badge>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}