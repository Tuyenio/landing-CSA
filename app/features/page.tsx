"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n"
import { 
  Gauge, Shield, Usb, AppWindow, Wifi, Globe, Puzzle, Brain, 
  Headset, History, Monitor, HardDrive, CheckCircle2, ArrowRight 
} from "lucide-react"
import Image from "next/image"

export default function FeaturesPage() {
  const { language } = useI18n()

  const allFeatures = [
    {
      id: "performance-alert",
      icon: Gauge,
      title: { vi: "Cảnh báo hiệu năng máy", en: "Performance Alert" },
      desc: { vi: "Giám sát CPU, RAM, Disk real-time. Cảnh báo khi vượt ngưỡng cho phép.", en: "Monitor CPU, RAM, Disk real-time. Alert when exceeding thresholds." },
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "security-control",
      icon: Shield,
      title: { vi: "Kiểm soát bảo mật tổng quát", en: "General Security Control" },
      desc: { vi: "Tổng quan tình trạng bảo mật toàn hệ thống, phát hiện lỗ hổng.", en: "System-wide security overview, vulnerability detection." },
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "usb-whitelist",
      icon: Usb,
      title: { vi: "Kiểm soát USB Whitelist", en: "USB Whitelist Control" },
      desc: { vi: "Zero-Trust cho USB. Chỉ cho phép thiết bị đã đăng ký Serial Number.", en: "Zero-Trust for USB. Only allow registered Serial Number devices." },
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "software-control",
      icon: AppWindow,
      title: { vi: "Kiểm soát phần mềm", en: "Software Control" },
      desc: { vi: "Quản lý cài đặt/gỡ phần mềm. Chặn phần mềm lậu, không phép.", en: "Manage software install/uninstall. Block unauthorized software." },
      color: "from-orange-500 to-red-500",
    },
    {
      id: "wifi-whitelist",
      icon: Wifi,
      title: { vi: "Kiểm soát Wi-Fi Whitelist", en: "Wi-Fi Whitelist Control" },
      desc: { vi: "Chỉ kết nối Wi-Fi được phê duyệt. Chặn hotspot cá nhân.", en: "Only approved Wi-Fi connections. Block personal hotspots." },
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: "browser-control",
      icon: Globe,
      title: { vi: "Kiểm soát trình duyệt", en: "Browser Control" },
      desc: { vi: "Quản lý website được truy cập. Block site độc hại, giải trí.", en: "Manage website access. Block malicious, entertainment sites." },
      color: "from-cyan-500 to-teal-500",
    },
    {
      id: "extension-control",
      icon: Puzzle,
      title: { vi: "Kiểm soát Extension", en: "Extension Control" },
      desc: { vi: "Whitelist extension trình duyệt. Ngăn chặn extension độc hại.", en: "Browser extension whitelist. Block malicious extensions." },
      color: "from-pink-500 to-rose-500",
    },
    {
      id: "abnormal-behavior",
      icon: Brain,
      title: { vi: "Kiểm soát hành vi bất thường", en: "Abnormal Behavior Detection" },
      desc: { vi: "AI phát hiện hành vi lạ: copy file đêm, gửi mail số lượng lớn.", en: "AI detects unusual behavior: midnight file copying, mass emailing." },
      color: "from-violet-500 to-purple-500",
    },
    {
      id: "remote-assistance",
      icon: Headset,
      title: { vi: "Remote Assistance", en: "Remote Assistance" },
      desc: { vi: "Hỗ trợ từ xa nhanh chóng. IT can thiệp mà không cần đến chỗ.", en: "Quick remote support. IT intervenes without being on-site." },
      color: "from-green-500 to-lime-500",
    },
    {
      id: "web-history",
      icon: History,
      title: { vi: "Lịch sử duyệt web", en: "Web Browsing History" },
      desc: { vi: "Theo dõi lịch sử truy cập web chi tiết theo thời gian.", en: "Track detailed web access history by time." },
      color: "from-amber-500 to-yellow-500",
    },
    {
      id: "software-history",
      icon: Monitor,
      title: { vi: "Lịch sử sử dụng phần mềm", en: "Software Usage History" },
      desc: { vi: "Ghi nhận thời gian, tần suất sử dụng từng ứng dụng.", en: "Record usage time and frequency of each application." },
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: "asset-management",
      icon: HardDrive,
      title: { vi: "Quản lý phần cứng & phần mềm", en: "Hardware & Software Management" },
      desc: { vi: "Inventory đầy đủ: CPU, RAM, Disk, License, Software version.", en: "Complete inventory: CPU, RAM, Disk, License, Software version." },
      color: "from-slate-500 to-gray-500",
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
            {language === "vi" ? "12 Tính năng chính" : "12 Key Features"}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {language === "vi" ? "12 Tính năng chính" : "12 Key Features"}
          </h1>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {language === "vi" ? "Giải pháp Toàn Diện" : "Comprehensive Solution"}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === "vi"
                ? "Bảo vệ endpoint với 12 tính năng quản lý, bảo mật và phân tích toàn diện"
                : "Protect endpoints with 12 comprehensive management, security and analytics features"}
            </p>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "vi"
              ? "Khám phá 12 tính năng bảo mật, quản lý và phân tích mạnh mẽ của CSA Endpoint"
              : "Explore 12 powerful security, management and analytics features of CSA Endpoint"}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allFeatures.map((feature, index) => (
              <a 
                key={index}
                href={`/#${feature.id}`}
                className="group"
              >
                <div
                  id={feature.id}
                  className="bg-card border-2 border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 duration-300 relative overflow-hidden h-full cursor-pointer"
                >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {feature.title[language]}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc[language]}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{language === "vi" ? "Đã kích hoạt" : "Activated"}</span>
                  </div>
                </div>
              </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "vi" ? "Điểm Nổi Bật" : "Key Highlights"}
            </h2>
            <p className="text-muted-foreground">
              {language === "vi" 
                ? "CSA cung cấp giải pháp 4-in-1 toàn diện cho doanh nghiệp"
                : "CSA provides comprehensive 4-in-1 solution for enterprises"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: language === "vi" ? "Endpoint Security" : "Endpoint Security",
                desc: language === "vi" ? "Bảo vệ thiết bị đầu cuối" : "Endpoint protection",
                icon: Shield,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Management",
                desc: language === "vi" ? "Quản lý tập trung" : "Centralized management",
                icon: Monitor,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "DLP",
                desc: language === "vi" ? "Chống thất thoát dữ liệu" : "Data loss prevention",
                icon: HardDrive,
                color: "from-orange-500 to-red-500"
              },
              {
                title: "Analysis",
                desc: language === "vi" ? "Phân tích thông minh" : "Smart analytics",
                icon: Brain,
                color: "from-green-500 to-emerald-500"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
