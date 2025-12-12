"use client"

import { Badge } from "@/components/ui/badge"
import { PlayCircle } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function VideoSection() {
  const { language } = useI18n()

  return (
    <section id="video-section" className="py-24 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4 border-accent/50 text-accent">
            <PlayCircle className="w-4 h-4 mr-2" />
            {language === "vi" ? "Video Demo" : "Video Demo"}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {language === "vi" ? "Xem CSA " : "Watch CSA "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {language === "vi" ? "Hoạt Động" : "in Action"}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {language === "vi"
              ? "Khám phá cách CSA bảo vệ doanh nghiệp của bạn trong video demo 5 phút"
              : "Discover how CSA protects your business in this 5-minute demo video"}
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border-4 border-border shadow-2xl shadow-primary/20 group">
            {/* Decorative elements */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
            
            {/* Video iframe */}
            <div className="relative aspect-video bg-black">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/9tKdCLjlBGY" 
                title="CSA - DLP" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </div>

          {/* Video Info */}
          <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                label: language === "vi" ? "Thời lượng" : "Duration",
                value: "5:24"
              },
              {
                label: language === "vi" ? "Chủ đề" : "Topic",
                value: "DLP & Security"
              },
              {
                label: language === "vi" ? "Ngôn ngữ" : "Language",
                value: language === "vi" ? "Tiếng Việt" : "Vietnamese"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-card border border-border rounded-2xl">
                <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                <div className="font-semibold text-foreground">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional CTAs */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            {language === "vi"
              ? "Muốn xem thêm video hướng dẫn chi tiết?"
              : "Want to see more detailed tutorial videos?"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/docs"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
            >
              <PlayCircle className="w-5 h-5" />
              {language === "vi" ? "Xem thêm video" : "Watch more videos"}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
            >
              {language === "vi" ? "Đặt lịch demo trực tiếp" : "Schedule live demo"}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
