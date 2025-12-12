"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Shield } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function CTASection() {
  const { language, t } = useI18n()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    endpoints: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <Badge variant="outline" className="mb-4 border-accent/50 text-accent">
                <Shield className="w-4 h-4 mr-2" />
                {language === "vi" ? "Dùng thử miễn phí 30 ngày" : "30-Day Free Trial"}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("cta.title")}</h2>
              <p className="text-muted-foreground text-lg">{t("cta.subtitle")}</p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{language === "vi" ? "Cảm ơn bạn!" : "Thank you!"}</h3>
                <p className="text-muted-foreground">{t("cta.note")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("cta.form.name")} *</Label>
                    <Input
                      id="name"
                      placeholder={language === "vi" ? "Nguyen Van A" : "John Doe"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("cta.form.email")} *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("cta.form.phone")} *</Label>
                    <Input
                      id="phone"
                      placeholder="0912 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">{t("cta.form.company")}</Label>
                    <Input
                      id="company"
                      placeholder={language === "vi" ? "Tên công ty" : "Company name"}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endpoints">{t("cta.form.endpoints")}</Label>
                  <Input
                    id="endpoints"
                    placeholder={language === "vi" ? "VD: 50-100" : "e.g. 50-100"}
                    value={formData.endpoints}
                    onChange={(e) => setFormData({ ...formData, endpoints: e.target.value })}
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 group"
                >
                  {t("cta.form.submit")}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-center text-sm text-muted-foreground">{t("cta.note")}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
