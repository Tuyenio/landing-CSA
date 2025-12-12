"use client"

import { Badge } from "@/components/ui/badge"
import { Download, Settings, BarChart3, FileText } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function HowItWorksSection() {
  const { t } = useI18n()

  const steps = [
    {
      number: "01",
      icon: Download,
      title: t("how.step1.title"),
      description: t("how.step1.desc"),
    },
    {
      number: "02",
      icon: Settings,
      title: t("how.step2.title"),
      description: t("how.step2.desc"),
    },
    {
      number: "03",
      icon: BarChart3,
      title: t("how.step3.title"),
      description: t("how.step3.desc"),
    },
    {
      number: "04",
      icon: FileText,
      title: t("how.step4.title"),
      description: t("how.step4.desc"),
    },
  ]

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            {t("how.badge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t("how.title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {t("how.titleHighlight")}
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}

              <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-2 duration-300 group">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg shadow-primary/25">
                  {step.number}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
