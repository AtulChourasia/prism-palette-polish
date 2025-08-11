import { Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "./ThemeProvider"

const themes = [
  { name: "Light", value: "light" as const, color: "bg-slate-50" },
  { name: "Dark", value: "dark" as const, color: "bg-slate-900" },
  { name: "Blue", value: "blue" as const, color: "bg-blue-600" },
  { name: "Green", value: "green" as const, color: "bg-green-600" },
  
]

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  const currentTheme = themes.find(t => t.value === theme)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Select theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((themeOption) => (
          <DropdownMenuItem
            key={themeOption.value}
            onClick={() => setTheme(themeOption.value)}
            className="flex items-center gap-2"
          >
            <div className={`h-4 w-4 rounded-full ${themeOption.color}`} />
            <span>{themeOption.name}</span>
            {theme === themeOption.value && <span className="text-xs">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}