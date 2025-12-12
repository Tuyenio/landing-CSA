"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"

export default function BlogPage() {
  const { language, t } = useI18n()

  const posts = [
    {
      title: language === "vi" ? "5 Mối đe dọa Endpoint phổ biến năm 2025" : "5 Common Endpoint Threats in 2025",
      excerpt:
        language === "vi"
          ? "Tìm hiểu về các mối đe dọa bảo mật endpoint phổ biến nhất và cách phòng chống hiệu quả cho doanh nghiệp."
          : "Learn about the most common endpoint security threats and how to effectively prevent them.",
      date: "2025-01-15",
      author: "ICS Security Team",
      readTime: language === "vi" ? "5 phút" : "5 min",
      category: language === "vi" ? "Bảo mật" : "Security",
      image: "/images/dashboard-health.png",
    },
    {
      title: language === "vi" ? "Hướng dẫn triển khai DLP cho Doanh nghiệp" : "DLP Deployment Guide for Enterprises",
      excerpt:
        language === "vi"
          ? "Quy trình triển khai giải pháp chống thất thoát dữ liệu từ A đến Z cho mọi quy mô doanh nghiệp."
          : "A to Z process of deploying data loss prevention solutions.",
      date: "2025-01-10",
      author: "Nguyễn Văn Minh",
      readTime: language === "vi" ? "8 phút" : "8 min",
      category: language === "vi" ? "Hướng dẫn" : "Guide",
      image: "/images/storage-control.png",
    },
    {
      title: language === "vi" ? "USB - Kẻ thù thầm lặng của Bảo mật" : "USB - The Silent Enemy of Security",
      excerpt:
        language === "vi"
          ? "Tại sao USB lại là vector tấn công nguy hiểm nhất và cách kiểm soát hiệu quả trong môi trường doanh nghiệp."
          : "Why USB is a dangerous attack vector and how to control it effectively.",
      date: "2025-01-05",
      author: "Trần Thị Lan",
      readTime: language === "vi" ? "6 phút" : "6 min",
      category: language === "vi" ? "Phân tích" : "Analysis",
      image: "/images/device-policy.png",
    },
    {
      title: language === "vi" ? "Nghị định 13 và Bảo vệ Dữ liệu Cá nhân" : "Decree 13 and Personal Data Protection",
      excerpt:
        language === "vi"
          ? "Tìm hiểu về Nghị định 13/2023/NĐ-CP và cách CSA giúp doanh nghiệp tuân thủ quy định pháp luật."
          : "Learn about Decree 13/2023/ND-CP and how CSA helps businesses comply.",
      date: "2024-12-28",
      author: "ICS Legal Team",
      readTime: language === "vi" ? "10 phút" : "10 min",
      category: language === "vi" ? "Pháp lý" : "Legal",
      image: "/images/software-control.png",
    },
    {
      title:
        language === "vi" ? "Kiểm soát ứng dụng Whitelist vs Blacklist" : "Application Control: Whitelist vs Blacklist",
      excerpt:
        language === "vi"
          ? "So sánh hai phương pháp kiểm soát ứng dụng và hướng dẫn lựa chọn phù hợp cho doanh nghiệp của bạn."
          : "Compare two application control methods and guide you to choose the right one for your business.",
      date: "2024-12-20",
      author: "Lê Hoàng Nam",
      readTime: language === "vi" ? "7 phút" : "7 min",
      category: language === "vi" ? "Công nghệ" : "Technology",
      image: "/images/software-control.png",
    },
    {
      title: language === "vi" ? "Tổng quan về An ninh mạng cho SMB" : "Cybersecurity Overview for SMBs",
      excerpt:
        language === "vi"
          ? "Hướng dẫn toàn diện về bảo mật endpoint dành cho doanh nghiệp vừa và nhỏ với ngân sách hạn chế."
          : "Comprehensive guide to endpoint security for small and medium businesses with limited budgets.",
      date: "2024-12-15",
      author: "Phạm Minh Tuấn",
      readTime: language === "vi" ? "12 phút" : "12 min",
      category: language === "vi" ? "Doanh nghiệp" : "Enterprise",
      image: "/images/machine-status.png",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            {t("blog.badge")}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            {t("blog.title")}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {t("blog.titleHighlight")}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("blog.subtitle")}</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-2 duration-300 group"
              >
                <div className="relative h-48 bg-secondary overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">{post.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 text-foreground">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-xs">{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn text-primary hover:text-primary">
                      {t("blog.readMore")}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
            >
              {t("blog.viewAll")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{t("blog.subscribe")}</h2>
            <p className="text-muted-foreground mb-8">{t("blog.subscribeDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="flex-1 px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 px-8">
                {t("footer.subscribe")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
