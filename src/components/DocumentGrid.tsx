import { useState } from "react"
import { Grid, List, Table } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DocumentCard } from "./DocumentCard"

const mockDocuments = [
  {
    title: "Q3 2024 Financial Report - Final",
    description: "Auto summary placeholder: concise overview of the document contents with key highlights...",
    author: "Sarah Johnson",
    date: "2024-10-15",
    size: "2.3 MB",
    views: 45,
    type: "PDF",
    tags: ["financial", "quarterly", "reports", "revenue"],
    successRate: 96
  },
  {
    title: "Budget Allocation Spreadsheet Q3",
    description: "Auto summary placeholder: concise overview of the document contents with key highlights...",
    author: "Mike Chen",
    date: "2024-09-28",
    size: "1.8 MB",
    views: 23,
    type: "XLSX",
    tags: ["budget", "allocation", "department", "Q3"],
    successRate: 87
  },
  {
    title: "Board Meeting Minutes - Q3 Review",
    description: "Auto summary placeholder: concise overview of the document contents with key highlights...",
    author: "Jennifer Lopez",
    date: "2024-10-12",
    size: "456 KB",
    views: 12,
    type: "DOCX",
    tags: ["meeting", "board", "minutes", "review"]
  },
  {
    title: "Sales Performance Dashboard Q3",
    description: "Auto summary placeholder: concise overview of the document contents with key highlights...",
    author: "David Park",
    date: "2024-10-08",
    size: "3.1 MB",
    views: 78,
    type: "PDF",
    tags: ["sales", "performance", "dashboard", "metrics"]
  }
]

export function DocumentGrid() {
  const [viewMode, setViewMode] = useState<"cards" | "list" | "table">("cards")

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Found 47 documents (0.234s) • Semantic + Keyword
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "cards" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("cards")}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "table" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("table")}
          >
            <Table className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {viewMode === "cards" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockDocuments.map((doc, index) => (
            <DocumentCard key={index} {...doc} />
          ))}
        </div>
      )}

      {viewMode === "list" && (
        <div className="space-y-2">
          {mockDocuments.map((doc, index) => (
            <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-accent/50">
              <div className="flex-1">
                <h3 className="font-medium">{doc.title}</h3>
                <p className="text-sm text-muted-foreground">{doc.author} • {doc.date} • {doc.size}</p>
              </div>
              <div className="flex gap-2">
                {doc.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-secondary text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {viewMode === "table" && (
        <div className="border rounded-lg">
          <table className="w-full">
            <thead className="border-b">
              <tr className="text-left">
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Author</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Size</th>
                <th className="p-4 font-medium">Views</th>
              </tr>
            </thead>
            <tbody>
              {mockDocuments.map((doc, index) => (
                <tr key={index} className="border-b hover:bg-accent/50">
                  <td className="p-4">{doc.title}</td>
                  <td className="p-4">{doc.author}</td>
                  <td className="p-4">{doc.date}</td>
                  <td className="p-4">{doc.size}</td>
                  <td className="p-4">{doc.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}