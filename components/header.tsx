"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LoginModal } from "@/components/login-modal"
import { useTheme } from "next-themes"
import { useI18n } from "@/lib/i18n"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useI18n()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.features"), href: "/features" },
    { name: t("nav.solutions"), href: "/solutions" },
    { name: t("nav.docs"), href: "/docs" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden bg-white border-2 border-primary/30 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 group-hover:border-primary/50 transition-all duration-300">
              <Image src="/images/csa-logo.png" alt="CSA Logo" fill className="object-contain p-1" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                CSA
              </span>
              <span className="hidden lg:block text-xs text-muted-foreground font-medium">
                Endpoint Control Solution
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50">
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border-border">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link href={child.href} className="cursor-pointer">
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                >
                  {item.name}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden sm:flex items-center gap-2 h-10 px-4 rounded-full border-2 border-border bg-card hover:bg-secondary hover:border-primary/30 transition-all"
                >
                  <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                    {language === "vi" ? (
                      <div className="w-full h-full bg-gradient-to-b from-red-600 via-red-600 to-yellow-400 flex items-center justify-center">
                        <span className="text-[8px] text-yellow-400">★</span>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-b from-blue-900 via-white to-red-600" />
                    )}
                  </div>
                  <span className="text-sm font-semibold">{language === "vi" ? "VI" : "EN"}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[180px] p-2">
                <DropdownMenuItem
                  onClick={() => setLanguage("vi")}
                  className={`cursor-pointer rounded-lg px-3 py-3 ${language === "vi" ? "bg-primary/10 text-primary" : ""}`}
                >
                  <div className="w-7 h-7 rounded-full overflow-hidden mr-3 border border-border">
                    <div className="w-full h-full bg-gradient-to-b from-red-600 via-red-600 to-yellow-400 flex items-center justify-center">
                      <span className="text-[8px] text-yellow-400">★</span>
                    </div>
                  </div>
                  <span className="font-medium">Tiếng Việt</span>
                  {language === "vi" && <span className="ml-auto text-primary">✓</span>}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className={`cursor-pointer rounded-lg px-3 py-3 ${language === "en" ? "bg-primary/10 text-primary" : ""}`}
                >
                  <div className="w-7 h-7 rounded-full overflow-hidden mr-3 border border-border">
                    <div className="w-full h-full bg-gradient-to-b from-blue-900 via-white to-red-600" />
                  </div>
                  <span className="font-medium">English</span>
                  {language === "en" && <span className="ml-auto text-primary">✓</span>}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {mounted && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border-2 border-border bg-card hover:bg-secondary hover:border-primary/30 transition-all"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-primary" />
                )}
              </Button>
            )}

            <Button 
              onClick={() => setIsLoginOpen(true)}
              className="hidden sm:inline-flex h-10 px-6 bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:scale-105 rounded-full"
            >
              {language === "vi" ? "Đăng nhập" : "Login"}
            </Button>

            <button
              className="lg:hidden p-2 rounded-full hover:bg-secondary/50 transition-colors border border-border"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md rounded-b-2xl">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-xl transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-2 px-4 py-3 border-t border-border mt-2 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
                  className="flex-1 rounded-full"
                >
                  {language === "vi" ? "English" : "Tiếng Việt"}
                </Button>
                {mounted && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="rounded-full w-10 h-10 p-0"
                  >
                    {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </Button>
                )}
              </div>
              <Button 
                onClick={() => {
                  setIsLoginOpen(true)
                  setIsMobileMenuOpen(false)
                }}
                className="mx-4 mt-2 bg-gradient-to-r from-primary to-accent text-white rounded-full"
              >
                {language === "vi" ? "Đăng nhập" : "Login"}
              </Button>
            </nav>
          </div>
        )}
      </div>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  )
}
