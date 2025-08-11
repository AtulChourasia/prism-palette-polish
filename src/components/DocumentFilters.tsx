import { useState } from "react"
import { Calendar, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DocumentFilters() {
  const [startDate, setStartDate] = useState("01-01-2024")
  const [endDate, setEndDate] = useState("31-12-2024")

  return (
    <div className="w-80 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">DOCUMENT TYPE</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="pdf" defaultChecked />
              <Label htmlFor="pdf" className="text-sm">PDF</Label>
            </div>
            <span className="text-xs text-muted-foreground">1,247</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="word" defaultChecked />
              <Label htmlFor="word" className="text-sm">Word</Label>
            </div>
            <span className="text-xs text-muted-foreground">892</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">CLASSIFICATION</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="public" defaultChecked />
              <Label htmlFor="public" className="text-sm">Public</Label>
            </div>
            <span className="text-xs text-muted-foreground">2,341</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="internal" defaultChecked />
              <Label htmlFor="internal" className="text-sm">Internal</Label>
            </div>
            <span className="text-xs text-muted-foreground">1,676</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="confidential" />
              <Label htmlFor="confidential" className="text-sm">Confidential</Label>
            </div>
            <span className="text-xs text-muted-foreground">345</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">DATE RANGE</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="start-date" className="text-xs">From</Label>
            <div className="relative">
              <Input
                id="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="pr-10"
              />
              <Calendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="end-date" className="text-xs">To</Label>
            <div className="relative">
              <Input
                id="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="pr-10"
              />
              <Calendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">POPULAR TAGS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {["contracts", "legal", "finance", "hr", "marketing", "technical", "reports", "presentations"].map((tag) => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                className="h-7 text-xs"
              >
                {tag}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">DATA SOURCES</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="sharepoint" defaultChecked />
              <Label htmlFor="sharepoint" className="text-sm">SharePoint</Label>
            </div>
            <span className="text-xs text-muted-foreground">1,435</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="gdrive" defaultChecked />
              <Label htmlFor="gdrive" className="text-sm">Google Drive</Label>
            </div>
            <span className="text-xs text-muted-foreground">892</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="manual" />
              <Label htmlFor="manual" className="text-sm">Manual Upload</Label>
            </div>
            <span className="text-xs text-muted-foreground">234</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}