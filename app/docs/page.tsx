"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ComparisonTable } from "@/components/comparison-table"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n"
import { 
  Book, FileText, Video, Download, ChevronRight, 
  BookOpen, PlayCircle, FileCode, HelpCircle 
} from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  const { language } = useI18n()

  const docCategories = [
    {
      icon: BookOpen,
      title: { vi: "Hướng dẫn Bắt đầu", en: "Getting Started" },
      desc: { vi: "Tài liệu cài đặt và cấu hình ban đầu", en: "Installation and initial configuration docs" },
      color: "from-blue-500 to-cyan-500",
      items: [
        { vi: "Cài đặt Agent", en: "Agent Installation" },
        { vi: "Cấu hình Server", en: "Server Configuration" },
        { vi: "Kết nối Database", en: "Database Connection" },
      ]
    },
    {
      icon: Book,
      title: { vi: "Tài liệu Tính năng", en: "Feature Documentation" },
      desc: { vi: "Hướng dẫn chi tiết từng tính năng", en: "Detailed feature guides" },
      color: "from-purple-500 to-pink-500",
      items: [
        { vi: "Quản lý USB Whitelist", en: "USB Whitelist Management" },
        { vi: "Kiểm soát Phần mềm", en: "Software Control" },
        { vi: "DLP & File Monitoring", en: "DLP & File Monitoring" },
      ]
    },
    {
      icon: Video,
      title: { vi: "Video Hướng dẫn", en: "Video Tutorials" },
      desc: { vi: "Video demo và hướng dẫn sử dụng", en: "Demo and usage video tutorials" },
      color: "from-red-500 to-orange-500",
      items: [
        { vi: "Video Overview CSA", en: "CSA Overview Video" },
        { vi: "Cấu hình Dashboard", en: "Dashboard Configuration" },
        { vi: "Troubleshooting", en: "Troubleshooting" },
      ]
    },
    {
      icon: FileCode,
      title: { vi: "API Documentation", en: "API Documentation" },
      desc: { vi: "Tài liệu API tích hợp", en: "API integration documentation" },
      color: "from-green-500 to-emerald-500",
      items: [
        { vi: "REST API Reference", en: "REST API Reference" },
        { vi: "WebSocket Events", en: "WebSocket Events" },
        { vi: "Authentication", en: "Authentication" },
      ]
    },
    {
      icon: HelpCircle,
      title: { vi: "FAQ & Troubleshooting", en: "FAQ & Troubleshooting" },
      desc: { vi: "Câu hỏi thường gặp và xử lý sự cố", en: "Frequently asked questions and troubleshooting" },
      color: "from-yellow-500 to-amber-500",
      items: [
        { vi: "Câu hỏi thường gặp", en: "Frequently Asked Questions" },
        { vi: "Xử lý lỗi thường gặp", en: "Common Error Handling" },
        { vi: "Best Practices", en: "Best Practices" },
      ]
    },
    {
      icon: Download,
      title: { vi: "Tải về", en: "Downloads" },
      desc: { vi: "Agent, Tools và tài liệu PDF", en: "Agent, Tools and PDF documents" },
      color: "from-indigo-500 to-blue-500",
      items: [
        { vi: "CSA Agent Windows", en: "CSA Agent Windows" },
        { vi: "CSA Admin Console", en: "CSA Admin Console" },
        { vi: "User Manual PDF", en: "User Manual PDF" },
      ]
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 relative cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            {language === "vi" ? "Tài liệu CSA" : "CSA Documentation"}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {language === "vi" ? "Tài Liệu & " : "Documentation & "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {language === "vi" ? "Hướng Dẫn" : "Guides"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "vi"
              ? "Tất cả tài liệu, hướng dẫn và video tutorial để bạn sử dụng CSA hiệu quả nhất"
              : "All documentation, guides and video tutorials to help you use CSA most effectively"}
          </p>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-3xl p-8 hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 duration-300 group relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {category.title[language]}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {category.desc[language]}
                  </p>
                  
                  {/* Items List */}
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i}>
                        <Link 
                          href="#" 
                          className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors group/item"
                        >
                          <ChevronRight className="w-4 h-4 group-hover/item:translate-x-1 transition-transform" />
                          <span>{item[language]}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorial Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="outline" className="mb-4 border-accent/50 text-accent">
              <PlayCircle className="w-4 h-4 mr-2" />
              {language === "vi" ? "Video Demo" : "Video Demo"}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "vi" ? "Video Giới Thiệu CSA" : "CSA Introduction Video"}
            </h2>
            <p className="text-muted-foreground">
              {language === "vi"
                ? "Xem video tổng quan về toàn bộ tính năng và cách sử dụng CSA"
                : "Watch overview video about all features and how to use CSA"}
            </p>
          </div>

          {/* YouTube Video Embed */}
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border-2 border-border shadow-2xl aspect-video">
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

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              {language === "vi"
                ? "Cần hỗ trợ thêm? Liên hệ đội ngũ kỹ thuật 24/7"
                : "Need more support? Contact our 24/7 technical team"}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
              >
                {language === "vi" ? "Liên hệ hỗ trợ" : "Contact Support"}
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
              >
                <Download className="w-5 h-5" />
                {language === "vi" ? "Tải tài liệu" : "Download Docs"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ComparisonTable />

      <Footer />
    </main>
  )
}
