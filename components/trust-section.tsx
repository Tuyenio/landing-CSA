"use client"

import { Badge } from "@/components/ui/badge"
import { Building2, Quote } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function TrustSection() {
  const { language, t } = useI18n()

  const stats = [
    { value: "500+", label: language === "vi" ? "Khách hàng" : "Clients" },
    { value: "50,000+", label: "Endpoints" },
    { value: "99.9%", label: "Uptime" },
    { value: "10+", label: language === "vi" ? "Năm kinh nghiệm" : "Years Experience" },
  ]



  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <div className="text-center mb-8">
            <Badge variant="outline" className="border-primary/50 text-primary">
              {t("trust.badge")}
            </Badge>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-12 bg-muted rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}
