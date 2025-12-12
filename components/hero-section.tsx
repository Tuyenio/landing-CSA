"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Play, ArrowRight, Monitor, Lock } from "lucide-react"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden cyber-grid">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              {t("hero.badge")}
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                {t("hero.title1")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {t("hero.title2")}
                </span>
                <br />
                {t("hero.title3")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                  {t("hero.title4")}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-pretty">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-90 transition-all hover:shadow-primary/40 hover:scale-105 group h-12 shadow-lg shadow-primary/25 btn-glow"
              >
                {t("hero.demoBtn")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => {
                  const videoSection = document.getElementById("video-section")
                  videoSection?.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-primary hover:bg-primary/10 group bg-transparent h-12 font-semibold transition-colors"
              >
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {t("hero.videoBtn")}
              </button>
            </div>

            {/* Trust Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">{t("hero.stat1")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">50,000+</div>
                <div className="text-sm text-muted-foreground">{t("hero.stat2")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">{t("hero.stat3")}</div>
              </div>
            </div>
          </div>

          {/* Right - Dashboard Preview */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-border shadow-2xl shadow-primary/10 animate-float bg-card">
              <Image
                src="/images/dashboard-health.png"
                alt="CSA Dashboard - Server Health Analysis"
                width={800}
                height={500}
                className="w-full h-auto"
                priority
              />
              {/* Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-8 top-1/4 bg-card border-2 border-border rounded-xl p-4 shadow-xl animate-pulse-glow hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <div className="text-sm font-semibold">3 Clients Online</div>
                  <div className="text-xs text-muted-foreground">{t("hero.floatOnline")}</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 bg-card border-2 border-border rounded-xl p-4 shadow-xl hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold">USB Blocked</div>
                  <div className="text-xs text-muted-foreground">{t("hero.floatBlocked")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-sm">{t("hero.scroll")}</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
