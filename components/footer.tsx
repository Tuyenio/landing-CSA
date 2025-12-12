"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Facebook, Linkedin, Youtube, Music, Send } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t, language } = useI18n()

  const quickLinks = [
    { name: language === "vi" ? "Về chúng tôi" : "About Us", href: "https://icss.com.vn/ve-chung-toi/" },
    { name: language === "vi" ? "Tính năng sản phẩm" : "Product Features", href: "/features" },
    { name: language === "vi" ? "Bảng giá" : "Pricing", href: "/pricing" },
    { name: language === "vi" ? "Chính sách bảo mật" : "Privacy Policy", href: "/privacy" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Company Info - Logo bo tròn */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-white border-2 border-primary/30 shadow-lg shadow-primary/20">
                <Image src="/images/csa-logo.png" alt="CSA Logo" fill className="object-contain p-1" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  CSA
                </span>
                <span className="block text-xs text-muted-foreground">Endpoint Control Solution</span>
              </div>
            </Link>
            <p className="text-muted-foreground">{t("footer.tagline")}</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all hover:scale-110"
              >
                <Music className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact - Tiếng Việt có dấu */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t("footer.contact")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  TT3-5 Khu đô thị Đại Kim mới, Định Công, Hoàng Mai, Hà Nội
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <div>
                    Hotline: <span className="text-foreground font-medium">0707.806.860</span>
                  </div>
                  <div>
                    Tel: <span className="text-foreground">0931.487.231</span>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@icss.com.vn</span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t("footer.newsletter")}</h4>
            <p className="text-muted-foreground text-sm mb-4">{t("footer.newsletterDesc")}</p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="bg-secondary border-border focus:border-primary rounded-full"
              />
              <Button className="w-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 rounded-full">
                {t("footer.subscribe")}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">© 2025 {t("footer.copyright")}</p>
          <p className="text-sm text-muted-foreground">
            Website:{" "}
            <a href="https://www.icss.com.vn" className="text-primary hover:underline">
              www.icss.com.vn
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
