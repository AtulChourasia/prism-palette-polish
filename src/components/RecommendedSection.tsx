import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const recommendedDocuments = [
  {
    title: "Q4 Budget Analysis",
    description: "Personalized recommendation"
  },
  {
    title: "Compliance Guidelines", 
    description: "Personalized recommendation"
  },
  {
    title: "Market Research 2024",
    description: "Personalized recommendation"
  }
]

export function RecommendedSection() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Recommended for you</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recommendedDocuments.map((doc, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{doc.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">{doc.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}