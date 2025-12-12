"use client"

import { Badge } from "@/components/ui/badge"
import { Shield, Settings, Database, BarChart3, ArrowRight, Sparkles } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function SolutionsSection() {
  const { language } = useI18n()

  const solutions = [
    {
      id: "endpoint-security",
      icon: Shield,
      title: "Endpoint Security",
      subtitle: language === "vi" ? "BẢO VỆ THIẾT BỊ ĐẦU CUỐI" : "ENDPOINT PROTECTION",
      description: language === "vi"
        ? "Bảo vệ thiết bị đầu cuối toàn diện với AI-powered threat detection"
        : "Comprehensive endpoint protection with AI-powered threat detection",
      features: [
        language === "vi" ? "Zero-Trust USB Whitelist" : "Zero-Trust USB Whitelist",
        language === "vi" ? "Phát hiện malware real-time" : "Real-time malware detection",
        language === "vi" ? "Kiểm soát Wi-Fi & Network" : "Wi-Fi & Network control",
        language === "vi" ? "Extension & Browser security" : "Extension & Browser security",
      ],
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      bgPattern: "bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]",
    },
    {
      id: "management",
      icon: Settings,
      title: "Management",
      subtitle: language === "vi" ? "QUẢN LÝ TẬP TRUNG" : "CENTRALIZED MANAGEMENT",
      description: language === "vi"
        ? "Quản lý tập trung, remote control mọi thiết bị trong hệ thống"
        : "Centralized management, remote control all devices in the system",
      features: [
        language === "vi" ? "Remote Assistance 24/7" : "Remote Assistance 24/7",
        language === "vi" ? "Quản lý phần mềm tập trung" : "Centralized software management",
        language === "vi" ? "IT Asset Inventory" : "IT Asset Inventory",
        language === "vi" ? "Policy deployment tự động" : "Automatic policy deployment",
      ],
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      bgPattern: "bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_50%)]",
    },
    {
      id: "dlp",
      icon: Database,
      title: "DLP",
      subtitle: language === "vi" ? "CHỐNG THẤT THOÁT DỮ LIỆU" : "DATA LOSS PREVENTION",
      description: language === "vi"
        ? "Chống thất thoát dữ liệu (Data Loss Prevention) hiệu quả"
        : "Effective Data Loss Prevention",
      features: [
        language === "vi" ? "Theo dõi file nhạy cảm" : "Sensitive file tracking",
        language === "vi" ? "Kiểm soát copy/paste" : "Copy/paste control",
        language === "vi" ? "Email & Transfer monitoring" : "Email & Transfer monitoring",
        language === "vi" ? "Encryption tự động" : "Automatic encryption",
      ],
      gradient: "from-orange-500 via-red-500 to-orange-600",
      bgPattern: "bg-[radial-gradient(circle_at_30%_70%,rgba(249,115,22,0.1),transparent_50%)]",
    },
    {
      id: "analysis",
      icon: BarChart3,
      title: "Analysis",
      subtitle: language === "vi" ? "PHÂN TÍCH THÔNG MINH" : "SMART ANALYTICS",
      description: language === "vi"
        ? "Phân tích hành vi, báo cáo thông minh với insights chi tiết"
        : "Behavior analysis, smart reports with detailed insights",
      features: [
        language === "vi" ? "AI hành vi bất thường" : "AI abnormal behavior",
        language === "vi" ? "Lịch sử sử dụng chi tiết" : "Detailed usage history",
        language === "vi" ? "Cảnh báo hiệu năng" : "Performance alerts",
        language === "vi" ? "Dashboard real-time" : "Real-time dashboard",
      ],
      gradient: "from-green-500 via-emerald-500 to-green-600",
      bgPattern: "bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.1),transparent_50%)]",
    },
  ]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            {language === "vi" ? "Giải pháp toàn diện" : "Comprehensive Solutions"}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {language === "vi" ? "4 Trụ Cột " : "4 Core "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              CSA Endpoint
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {language === "vi"
              ? "Giải pháp 4-in-1 toàn diện: Bảo mật, Quản lý, DLP và Phân tích"
              : "Comprehensive 4-in-1 solution: Security, Management, DLP and Analytics"}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className="group relative bg-card border-2 border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 ${solution.bgPattern} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Gradient Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${solution.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <solution.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title & Subtitle */}
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-2 block">
                    {solution.subtitle}
                  </span>
                  <h3 className="text-3xl font-bold text-foreground mb-3 flex items-center gap-2">
                    {solution.title}
                    <Sparkles className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {solution.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.gradient} group-hover:scale-150 transition-transform duration-300`} />
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${solution.gradient} text-white font-semibold text-sm hover:shadow-lg transition-all duration-300 group-hover:gap-3`}>
                  {language === "vi" ? "Tìm hiểu thêm" : "Learn More"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 rounded-2xl px-8 py-6 max-w-3xl">
            <p className="text-foreground font-semibold text-lg mb-4">
              {language === "vi" 
                ? "🚀 Giải pháp 4-in-1 duy nhất trên thị trường Việt Nam"
                : "🚀 The only 4-in-1 solution in Vietnamese market"}
            </p>
            <p className="text-muted-foreground mb-6">
              {language === "vi"
                ? "Tiết kiệm đến 60% chi phí so với mua riêng lẻ từng giải pháp"
                : "Save up to 60% compared to purchasing individual solutions"}
            </p>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
            >
              {language === "vi" ? "Xem chi tiết 12 tính năng" : "View 12 features in detail"}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
