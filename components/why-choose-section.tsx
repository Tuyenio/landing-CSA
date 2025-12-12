"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, Users, Headphones, Award } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function WhyChooseSection() {
  const { t } = useI18n()

  const reasons = [
    {
      icon: Bot,
      title: t("why.item1.title"),
      description: t("why.item1.desc"),
    },
    {
      icon: Users,
      title: t("why.item2.title"),
      description: t("why.item2.desc"),
    },
    {
      icon: Headphones,
      title: t("why.item3.title"),
      description: t("why.item3.desc"),
    },
    {
      icon: Award,
      title: t("why.item4.title"),
      description: t("why.item4.desc"),
    },
  ]

  return (
    <section id="solutions" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-accent/50 text-accent">
            {t("why.badge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t("why.title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              {t("why.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("why.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-accent/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <reason.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
