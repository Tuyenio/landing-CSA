"use client"

import { Badge } from "@/components/ui/badge"
import { 
  Usb, 
  AppWindow, 
  Globe, 
  Shield, 
  Monitor, 
  AlertTriangle, 
  Wifi,
  Puzzle,
  Brain,
  Headset,
  History,
  HardDrive,
  Gauge,
  ArrowRight 
} from "lucide-react"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"

export function FeaturesSection() {
  const { language } = useI18n()

  const features = [
    {
      id: "performance-alert",
      icon: Gauge,
      title: language === "vi" ? "Cảnh báo hiệu năng máy" : "Performance Alert",
      subtitle: language === "vi" ? "GIÁM SÁT REAL-TIME" : "REAL-TIME MONITORING",
      description: language === "vi" 
        ? "Theo dõi CPU, RAM, Disk theo thời gian thực với cảnh báo tự động khi vượt ngưỡng cho phép."
        : "Monitor CPU, RAM, Disk in real-time with automatic alerts when exceeding thresholds.",
      points: [
        language === "vi" ? "Giám sát hiệu năng 24/7" : "24/7 performance monitoring",
        language === "vi" ? "Cảnh báo vượt ngưỡng tức thì" : "Instant threshold alerts",
        language === "vi" ? "Dashboard trực quan real-time" : "Real-time visual dashboard",
        language === "vi" ? "Báo cáo chi tiết theo thời gian" : "Detailed time-based reports",
      ],
      image: "/images/machine-status.png",
      color: "primary",
    },
    {
      id: "security-control",
      icon: Shield,
      title: language === "vi" ? "Kiểm soát bảo mật tổng quát" : "General Security Control",
      subtitle: language === "vi" ? "BẢO MẬT TOÀN DIỆN" : "COMPREHENSIVE SECURITY",
      description: language === "vi"
        ? "Tổng quan tình trạng bảo mật toàn hệ thống, phát hiện và cảnh báo lỗ hổng bảo mật ngay lập tức."
        : "Overview of system-wide security status, detect and alert vulnerabilities immediately.",
      points: [
        language === "vi" ? "Quét lỗ hổng tự động" : "Automatic vulnerability scanning",
        language === "vi" ? "Tổng quan bảo mật tập trung" : "Centralized security overview",
        language === "vi" ? "Cảnh báo mối đe dọa ngay lập tức" : "Instant threat alerts",
        language === "vi" ? "Báo cáo tuân thủ chi tiết" : "Detailed compliance reports",
      ],
      image: "/images/storage-control.png",
      color: "accent",
    },
    {
      id: "usb-whitelist",
      icon: Usb,
      title: language === "vi" ? "Kiểm soát USB Whitelist" : "USB Whitelist Control",
      subtitle: language === "vi" ? "ZERO-TRUST USB" : "ZERO-TRUST USB",
      description: language === "vi"
        ? "Chỉ cho phép thiết bị USB đã đăng ký Serial Number. Zero-Trust cho mọi thiết bị USB."
        : "Only allow registered USB devices by Serial Number. Zero-Trust for all USB devices.",
      points: [
        language === "vi" ? "Whitelist theo Serial Number" : "Serial Number whitelist",
        language === "vi" ? "Chặn USB lạ tự động" : "Auto-block unknown USB",
        language === "vi" ? "Cảnh báo popup + email realtime" : "Popup + email alerts realtime",
        language === "vi" ? "Log chi tiết mọi thiết bị" : "Detailed device logging",
      ],
      image: "/images/disabled-device.png",
      color: "primary",
    },
    {
      id: "software-control",
      icon: AppWindow,
      title: language === "vi" ? "Kiểm soát phần mềm" : "Software Control",
      subtitle: language === "vi" ? "QUẢN LÝ ỨNG DỤNG" : "APPLICATION MANAGEMENT",
      description: language === "vi"
        ? "Quản lý cài đặt và gỡ phần mềm. Chặn phần mềm lậu, không có phép sử dụng."
        : "Manage software installation and removal. Block unauthorized and pirated software.",
      points: [
        language === "vi" ? "Whitelist phần mềm cho phép" : "Software whitelist",
        language === "vi" ? "Chặn cài đặt không phép" : "Block unauthorized installation",
        language === "vi" ? "Quản lý license tập trung" : "Centralized license management",
        language === "vi" ? "Báo cáo sử dụng chi tiết" : "Detailed usage reports",
      ],
      image: "/images/software-control.png",
      color: "accent",
    },
    {
      id: "wifi-whitelist",
      icon: Wifi,
      title: language === "vi" ? "Kiểm soát Wi-Fi Whitelist" : "Wi-Fi Whitelist Control",
      subtitle: language === "vi" ? "MẠNG AN TOÀN" : "SECURE NETWORK",
      description: language === "vi"
        ? "Chỉ cho phép kết nối Wi-Fi đã được phê duyệt. Chặn hotspot cá nhân và mạng không an toàn."
        : "Only allow approved Wi-Fi connections. Block personal hotspots and unsafe networks.",
      points: [
        language === "vi" ? "Whitelist Wi-Fi doanh nghiệp" : "Enterprise Wi-Fi whitelist",
        language === "vi" ? "Chặn hotspot cá nhân" : "Block personal hotspots",
        language === "vi" ? "Cảnh báo kết nối lạ" : "Alert on unknown connections",
        language === "vi" ? "Log lịch sử kết nối" : "Connection history logs",
      ],
      image: "/images/block-url.png",
      color: "primary",
    },
    {
      id: "browser-control",
      icon: Globe,
      title: language === "vi" ? "Kiểm soát trình duyệt" : "Browser Control",
      subtitle: language === "vi" ? "WEB FILTERING" : "WEB FILTERING",
      description: language === "vi"
        ? "Quản lý website được truy cập. Chặn site độc hại, giải trí và không phù hợp công việc."
        : "Manage website access. Block malicious, entertainment and work-inappropriate sites.",
      points: [
        language === "vi" ? "Blacklist/Whitelist website" : "Website blacklist/whitelist",
        language === "vi" ? "Chặn site độc hại tự động" : "Auto-block malicious sites",
        language === "vi" ? "Lọc theo danh mục" : "Category-based filtering",
        language === "vi" ? "Báo cáo truy cập chi tiết" : "Detailed access reports",
      ],
      image: "/images/block-url.png",
      color: "accent",
    },
    {
      id: "extension-control",
      icon: Puzzle,
      title: language === "vi" ? "Kiểm soát Extension" : "Extension Control",
      subtitle: language === "vi" ? "BROWSER SECURITY" : "BROWSER SECURITY",
      description: language === "vi"
        ? "Whitelist extension trình duyệt được phép. Ngăn chặn extension độc hại và không an toàn."
        : "Whitelist allowed browser extensions. Block malicious and unsafe extensions.",
      points: [
        language === "vi" ? "Whitelist extension an toàn" : "Safe extension whitelist",
        language === "vi" ? "Chặn extension độc hại" : "Block malicious extensions",
        language === "vi" ? "Kiểm soát quyền truy cập" : "Access permission control",
        language === "vi" ? "Cảnh báo extension lạ" : "Alert on unknown extensions",
      ],
      image: "/images/software-control.png",
      color: "primary",
    },
    {
      id: "abnormal-behavior",
      icon: Brain,
      title: language === "vi" ? "Kiểm soát hành vi bất thường" : "Abnormal Behavior Detection",
      subtitle: language === "vi" ? "AI-POWERED DETECTION" : "AI-POWERED DETECTION",
      description: language === "vi"
        ? "AI phát hiện hành vi lạ: copy file lúc nửa đêm, gửi email số lượng lớn, truy cập dữ liệu nhạy cảm."
        : "AI detects unusual behavior: midnight file copying, mass emailing, sensitive data access.",
      points: [
        language === "vi" ? "AI phát hiện pattern bất thường" : "AI anomaly pattern detection",
        language === "vi" ? "Cảnh báo hành vi nguy hiểm" : "Dangerous behavior alerts",
        language === "vi" ? "Phân tích theo thời gian" : "Time-based analysis",
        language === "vi" ? "Machine learning tự học" : "Self-learning machine learning",
      ],
      image: "/images/abnormal-behavior.png",
      color: "accent",
    },
    {
      id: "remote-assistance",
      icon: Headset,
      title: language === "vi" ? "Remote Assistance" : "Remote Assistance",
      subtitle: language === "vi" ? "HỖ TRỢ TỪ XA" : "REMOTE SUPPORT",
      description: language === "vi"
        ? "Hỗ trợ từ xa nhanh chóng, an toàn. IT có thể can thiệp và xử lý sự cố mà không cần đến tận nơi."
        : "Quick and secure remote support. IT can intervene and resolve issues without being on-site.",
      points: [
        language === "vi" ? "Hỗ trợ từ xa an toàn" : "Secure remote support",
        language === "vi" ? "Điều khiển máy từ xa" : "Remote machine control",
        language === "vi" ? "Chuyển file nhanh chóng" : "Quick file transfer",
        language === "vi" ? "Ghi log mọi phiên làm việc" : "Log all support sessions",
      ],
      image: "/images/machine-status.png",
      color: "primary",
    },
    {
      id: "web-history",
      icon: History,
      title: language === "vi" ? "Lịch sử duyệt web" : "Web Browsing History",
      subtitle: language === "vi" ? "WEB TRACKING" : "WEB TRACKING",
      description: language === "vi"
        ? "Theo dõi lịch sử truy cập web chi tiết theo thời gian, người dùng và thiết bị."
        : "Track detailed web access history by time, user and device.",
      points: [
        language === "vi" ? "Log đầy đủ URL truy cập" : "Complete URL access logs",
        language === "vi" ? "Theo dõi theo user/device" : "Track by user/device",
        language === "vi" ? "Báo cáo top websites" : "Top websites reports",
        language === "vi" ? "Tìm kiếm lịch sử nhanh" : "Quick history search",
      ],
      image: "/images/block-url.png",
      color: "accent",
    },
    {
      id: "software-history",
      icon: Monitor,
      title: language === "vi" ? "Lịch sử sử dụng phần mềm" : "Software Usage History",
      subtitle: language === "vi" ? "APPLICATION TRACKING" : "APPLICATION TRACKING",
      description: language === "vi"
        ? "Ghi nhận thời gian sử dụng và tần suất sử dụng từng ứng dụng. Phân tích năng suất làm việc."
        : "Record usage time and frequency of each application. Analyze work productivity.",
      points: [
        language === "vi" ? "Tracking thời gian sử dụng" : "Usage time tracking",
        language === "vi" ? "Phân tích năng suất" : "Productivity analysis",
        language === "vi" ? "Top applications report" : "Top applications report",
        language === "vi" ? "Cảnh báo lãng phí thời gian" : "Time-wasting alerts",
      ],
      image: "/images/software-control.png",
      color: "primary",
    },
    {
      id: "asset-management",
      icon: HardDrive,
      title: language === "vi" ? "Quản lý phần cứng & phần mềm" : "Hardware & Software Management",
      subtitle: language === "vi" ? "IT ASSET INVENTORY" : "IT ASSET INVENTORY",
      description: language === "vi"
        ? "Inventory đầy đủ: CPU, RAM, Disk, License phần mềm, Software version. Quản lý tài sản IT tập trung."
        : "Complete inventory: CPU, RAM, Disk, Software license, Software version. Centralized IT asset management.",
      points: [
        language === "vi" ? "Inventory tự động" : "Automatic inventory",
        language === "vi" ? "Quản lý license tập trung" : "Centralized license management",
        language === "vi" ? "Cảnh báo hardware lỗi thời" : "Outdated hardware alerts",
        language === "vi" ? "Báo cáo tài sản chi tiết" : "Detailed asset reports",
      ],
      image: "/images/machine-status.png",
      color: "accent",
    },
  ]

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <a 
            href="/features"
            className="inline-block hover:scale-105 transition-transform"
          >
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary cursor-pointer hover:bg-primary/10">
              {language === "vi" ? "12 Tính năng chính" : "12 Key Features"}
            </Badge>
          </a>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            {language === "vi" ? "Giải pháp " : "Comprehensive "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {language === "vi" ? "Toàn Diện" : "Solution"}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {language === "vi" 
              ? "Bảo vệ endpoint với 12 tính năng quản lý, bảo mật và phân tích toàn diện"
              : "Comprehensive endpoint protection with 12 features for management, security and analytics"}
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              id={feature.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    feature.color === "primary" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                  }`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                    {feature.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-2 text-balance">{feature.title}</h3>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>

                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          feature.color === "primary" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                        }`}
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    const videoSection = document.getElementById("video-section")
                    videoSection?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className={`inline-flex items-center gap-2 text-sm font-semibold group cursor-pointer ${
                    feature.color === "primary" ? "text-primary hover:text-primary/80" : "text-accent hover:text-accent/80"
                  } transition-colors`}
                >
                  {language === "vi" ? "Tìm hiểu thêm" : "Learn More"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden border-2 border-border shadow-xl group bg-card feature-card">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={800}
                    height={500}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
