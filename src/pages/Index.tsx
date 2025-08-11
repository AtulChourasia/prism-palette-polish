import { Header } from "@/components/Header"
import { DocumentFilters } from "@/components/DocumentFilters"
import { SearchSection } from "@/components/SearchSection"
import { DocumentGrid } from "@/components/DocumentGrid"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Intelligent Document Discovery</h1>
        </div>
        
        <div className="flex gap-6">
          <DocumentFilters />
          
          <div className="flex-1 space-y-6">
            <SearchSection />
            <DocumentGrid />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
