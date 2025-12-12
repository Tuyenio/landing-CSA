"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

type Language = "vi" | "en"

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.home": { vi: "Trang chủ", en: "Home" },
  "nav.features": { vi: "Tính năng", en: "Features" },
  "nav.solutions": { vi: "Giải pháp", en: "Solutions" },
  "nav.docs": { vi: "Tài liệu", en: "Documents" },
  "nav.blog": { vi: "Tin tức", en: "Blog" },
  "nav.contact": { vi: "Liên hệ", en: "Contact" },
  "nav.trialBtn": { vi: "Dùng thử miễn phí", en: "Free Trial" },

  // Hero Section
  "hero.badge": { vi: "Giải pháp An ninh Endpoint #1 Việt Nam", en: "#1 Endpoint Security Solution in Vietnam" },
  "hero.title1": { vi: "Kiểm soát", en: "Complete" },
  "hero.title2": { vi: "Toàn diện", en: "Control" },
  "hero.title3": { vi: "Bảo vệ", en: "Absolute" },
  "hero.title4": { vi: "Tuyệt đối", en: "Protection" },
  "hero.subtitle": {
    vi: "CSA giúp doanh nghiệp quản lý thiết bị đầu cuối, kiểm soát ứng dụng và ngăn chặn rò rỉ dữ liệu với công nghệ AI tiên tiến.",
    en: "CSA helps enterprises manage endpoints, control applications and prevent data leakage with advanced AI technology.",
  },
  "hero.demoBtn": { vi: "Yêu cầu Demo miễn phí", en: "Request Free Demo" },
  "hero.videoBtn": { vi: "Xem video giới thiệu", en: "Watch Introduction" },
  "hero.stat1": { vi: "Doanh nghiệp tin dùng", en: "Trusted Enterprises" },
  "hero.stat2": { vi: "Endpoints được bảo vệ", en: "Protected Endpoints" },
  "hero.stat3": { vi: "Uptime cam kết", en: "Uptime Guaranteed" },
  "hero.scroll": { vi: "Khám phá thêm", en: "Explore More" },
  "hero.floatOnline": { vi: "Đang hoạt động", en: "Active" },
  "hero.floatBlocked": { vi: "15 thiết bị hôm nay", en: "15 devices today" },

  // Features Section
  "features.badge": { vi: "Tính năng nổi bật", en: "Key Features" },
  "features.title": { vi: "Giải pháp Bảo mật", en: "Comprehensive Endpoint" },
  "features.titleHighlight": { vi: "Endpoint Toàn diện", en: "Security Solution" },
  "features.subtitle": {
    vi: "CSA cung cấp bộ công cụ đầy đủ để kiểm soát, giám sát và bảo vệ mọi thiết bị đầu cuối trong doanh nghiệp.",
    en: "CSA provides complete tools to control, monitor and protect all endpoints in the enterprise.",
  },
  "features.learnMore": { vi: "Tìm hiểu thêm", en: "Learn More" },

  // Device Control Feature
  "feature.device.title": { vi: "Quản lý & Kiểm soát Thiết bị Ngoại vi", en: "Peripheral Device Management & Control" },
  "feature.device.subtitle": { vi: "Device Control", en: "Device Control" },
  "feature.device.desc": {
    vi: "Ngăn chặn rò rỉ dữ liệu qua các cổng kết nối vật lý. Kiểm soát USB dựa trên VID, PID, Serial Number. Thiết lập chế độ chỉ đọc hoặc chặn hoàn toàn.",
    en: "Prevent data leakage via physical ports. Control USB based on VID, PID, Serial Number. Set read-only or complete block mode.",
  },
  "feature.device.point1": {
    vi: "Whitelist USB theo VID/PID/Serial Number",
    en: "USB Whitelist by VID/PID/Serial Number",
  },
  "feature.device.point2": { vi: "Kiểm soát Bluetooth và truyền file", en: "Bluetooth and file transfer control" },
  "feature.device.point3": { vi: "Cảnh báo tức thời khi phát hiện vi phạm", en: "Instant alerts on policy violations" },
  "feature.device.point4": { vi: "Chế độ Read-only hoặc Block hoàn toàn", en: "Read-only or complete Block mode" },

  // App Security Feature
  "feature.app.title": { vi: "Bảo mật Ứng dụng & Danh sách trắng", en: "App Security & Whitelist" },
  "feature.app.subtitle": { vi: "Smart App Security", en: "Smart App Security" },
  "feature.app.desc": {
    vi: "Chỉ cho phép chạy các phần mềm được phê duyệt. Tự động chặn phần mềm lạ và mã độc. Quản lý phiên bản và bản quyền phần mềm (Software Asset Management).",
    en: "Only allow approved software to run. Automatically block unknown software and malware. Manage software versions and licenses (Software Asset Management).",
  },
  "feature.app.point1": { vi: "Cơ chế Whitelist thông minh", en: "Intelligent Whitelist mechanism" },
  "feature.app.point2": { vi: "Quản lý phiên bản phần mềm", en: "Software version management" },
  "feature.app.point3": { vi: "Giới hạn thời gian sử dụng ứng dụng", en: "Application usage time limits" },
  "feature.app.point4": { vi: "Software Asset Management tích hợp", en: "Integrated Software Asset Management" },

  // Web Control Feature
  "feature.web.title": { vi: "Kiểm soát Mạng & Truy cập Web", en: "Network & Web Access Control" },
  "feature.web.subtitle": { vi: "Network & Web Control", en: "Network & Web Control" },
  "feature.web.desc": {
    vi: "Quản lý môi trường mạng và hành vi lướt web. Chỉ cho phép kết nối WIFI được công ty quy định. Thiết lập Geofencing theo vị trí địa lý.",
    en: "Manage network environment and browsing behavior. Only allow company-approved WiFi connections. Set up Geofencing by geographic location.",
  },
  "feature.web.point1": {
    vi: "WIFI Whitelist - Chỉ kết nối mạng cho phép",
    en: "WiFi Whitelist - Connect only to allowed networks",
  },
  "feature.web.point2": { vi: "Geofencing - Hàng rào địa lý", en: "Geofencing - Geographic boundaries" },
  "feature.web.point3": { vi: "Lọc Web theo Whitelist/Blacklist", en: "Web filtering by Whitelist/Blacklist" },
  "feature.web.point4": { vi: "Giám sát lịch sử duyệt web", en: "Browsing history monitoring" },

  // DLP Feature
  "feature.dlp.title": { vi: "Giám sát & Chống thất thoát dữ liệu", en: "Monitoring & Data Loss Prevention" },
  "feature.dlp.subtitle": { vi: "Data Loss Prevention", en: "Data Loss Prevention" },
  "feature.dlp.desc": {
    vi: "Bảo vệ dữ liệu nhạy cảm với Screen Watermark hiển thị thông tin nhân viên. Ghi nhật ký toàn bộ hành vi truy xuất file. Tự động phát hiện hành vi bất thường.",
    en: "Protect sensitive data with Screen Watermark displaying employee info. Log all file access behaviors. Automatically detect abnormal behaviors.",
  },
  "feature.dlp.point1": { vi: "Screen Watermark chống chụp màn hình", en: "Screen Watermark anti-screenshot" },
  "feature.dlp.point2": { vi: "File Access Log chi tiết", en: "Detailed File Access Log" },
  "feature.dlp.point3": { vi: "Phát hiện hành vi bất thường tự động", en: "Automatic abnormal behavior detection" },
  "feature.dlp.point4": { vi: "Cảnh báo khi sao chép dữ liệu nhạy cảm", en: "Alert on sensitive data copying" },

  // Management Feature
  "feature.mgmt.title": { vi: "Quản trị Từ xa & Hỗ trợ", en: "Remote Management & Support" },
  "feature.mgmt.subtitle": { vi: "Remote Management", en: "Remote Management" },
  "feature.mgmt.desc": {
    vi: "Hỗ trợ từ xa tích hợp sẵn (như TeamViewer nhưng bảo mật hơn). Triển khai Agent tự động qua MSI/GPO. Quản lý tài sản IT tập trung.",
    en: "Built-in remote support (like TeamViewer but more secure). Auto-deploy Agent via MSI/GPO. Centralized IT asset management.",
  },
  "feature.mgmt.point1": { vi: "Remote Desktop tích hợp bảo mật", en: "Secure integrated Remote Desktop" },
  "feature.mgmt.point2": { vi: "Silent Install qua MSI/GPO", en: "Silent Install via MSI/GPO" },
  "feature.mgmt.point3": { vi: "Asset Management tự động", en: "Automatic Asset Management" },
  "feature.mgmt.point4": { vi: "Dashboard giám sát thời gian thực", en: "Real-time monitoring Dashboard" },

  "feature.report.title": { vi: "Kiểm soát Hành vi Bất thường Endpoint", en: "Endpoint Abnormal Behavior Control" },
  "feature.report.subtitle": { vi: "Abnormal Behavior Control", en: "Abnormal Behavior Control" },
  "feature.report.desc": {
    vi: "Định nghĩa và phát hiện các hành vi bất thường trên thiết bị đầu cuối. Thiết lập ngưỡng cảnh báo theo thời gian, số lượng file và loại hành động (xóa, ghi, sao chép).",
    en: "Define and detect abnormal behaviors on endpoints. Set alert thresholds by time, file quantity and action type (delete, write, copy).",
  },
  "feature.report.point1": { vi: "Định nghĩa hành vi bất thường tùy chỉnh", en: "Custom abnormal behavior definition" },
  "feature.report.point2": { vi: "Giám sát External Disk & Network Disk", en: "Monitor External & Network Disk" },
  "feature.report.point3": {
    vi: "Thiết lập ngưỡng theo thời gian và số lượng",
    en: "Set thresholds by time and quantity",
  },
  "feature.report.point4": {
    vi: "Cảnh báo khi Delete/Write/Copy bất thường",
    en: "Alert on abnormal Delete/Write/Copy",
  },

  // How It Works Section
  "how.badge": { vi: "Quy trình triển khai", en: "Deployment Process" },
  "how.title": { vi: "Triển khai trong", en: "Deploy in" },
  "how.titleHighlight": { vi: "4 Bước Đơn Giản", en: "4 Simple Steps" },
  "how.step1.title": { vi: "Cài đặt Agent", en: "Install Agent" },
  "how.step1.desc": {
    vi: "Triển khai CSA Agent qua MSI package hoặc GPO chỉ trong 5 phút",
    en: "Deploy CSA Agent via MSI package or GPO in just 5 minutes",
  },
  "how.step2.title": { vi: "Thiết lập Policy", en: "Setup Policy" },
  "how.step2.desc": {
    vi: "Cấu hình chính sách bảo mật từ Console quản trị tập trung",
    en: "Configure security policies from centralized admin console",
  },
  "how.step3.title": { vi: "Giám sát Real-time", en: "Real-time Monitor" },
  "how.step3.desc": {
    vi: "Theo dõi trạng thái endpoint và nhận cảnh báo tức thì",
    en: "Track endpoint status and receive instant alerts",
  },
  "how.step4.title": { vi: "Báo cáo và Phân tích", en: "Reports and Analytics" },
  "how.step4.desc": {
    vi: "Export báo cáo Excel, phân tích rủi ro, tuân thủ compliance",
    en: "Export Excel reports, risk analysis, compliance tracking",
  },

  // Why Choose Section
  "why.badge": { vi: "Tại sao chọn ICS", en: "Why Choose ICS" },
  "why.title": { vi: "Đối tác", en: "Your Trusted" },
  "why.titleHighlight": { vi: "Đáng Tin Cậy", en: "Partner" },
  "why.subtitle": {
    vi: "ICS cam kết mang đến giải pháp bảo mật endpoint tiên tiến nhất cho doanh nghiệp Việt Nam.",
    en: "ICS commits to delivering the most advanced endpoint security solution for Vietnamese enterprises.",
  },
  "why.item1.title": { vi: "Công nghệ cAIoT", en: "cAIoT Technology" },
  "why.item1.desc": {
    vi: "Tích hợp AI + IoT để phát hiện và phản ứng với mối đe dọa tự động, nhanh chóng và chính xác.",
    en: "Integrate AI + IoT to detect and respond to threats automatically, quickly and accurately.",
  },
  "why.item2.title": { vi: "Đội ngũ Chuyên gia", en: "Expert Team" },
  "why.item2.desc": {
    vi: "10+ năm kinh nghiệm trong lĩnh vực An ninh mạng Doanh nghiệp tại Việt Nam và Quốc tế.",
    en: "10+ years of experience in Enterprise Cybersecurity in Vietnam and International.",
  },
  "why.item3.title": { vi: "Hỗ trợ 24/7", en: "24/7 Support" },
  "why.item3.desc": {
    vi: "Hotline 0707.806.860 - Phản hồi trong 15 phút. Đội ngũ kỹ thuật sẵn sàng hỗ trợ bất cứ lúc nào.",
    en: "Hotline 0707.806.860 - Response within 15 minutes. Technical team ready to support anytime.",
  },
  "why.item4.title": { vi: "Đạt chuẩn Quốc tế", en: "International Standards" },
  "why.item4.desc": {
    vi: "Tuân thủ ISO 27001, GDPR, Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.",
    en: "Compliant with ISO 27001, GDPR, Decree 13/2023/ND-CP on personal data protection.",
  },

  // Trust Section
  "trust.badge": { vi: "Khách hàng tin dùng", en: "Trusted By" },
  "trust.title": { vi: "Được", en: "Trusted by" },
  "trust.titleHighlight": { vi: "Doanh nghiệp Tin Tưởng", en: "Leading Enterprises" },
  "trust.testimonial": {
    vi: "CSA đã giúp chúng tôi kiểm soát hoàn toàn việc sử dụng USB trong công ty. Rủi ro rò rỉ dữ liệu giảm 95% sau 3 tháng triển khai.",
    en: "CSA helped us completely control USB usage in the company. Data leakage risk reduced by 95% after 3 months of deployment.",
  },
  "trust.author": { vi: "Giám đốc CNTT - Công ty ABC", en: "IT Director - ABC Company" },

  // CTA Section
  "cta.title": { vi: "Sẵn sàng Bảo vệ Doanh nghiệp của Bạn?", en: "Ready to Protect Your Enterprise?" },
  "cta.subtitle": {
    vi: "Đăng ký dùng thử miễn phí 30 ngày - Không cần thẻ tín dụng",
    en: "Register for a 30-day free trial - No credit card required",
  },
  "cta.form.name": { vi: "Họ và tên", en: "Full Name" },
  "cta.form.email": { vi: "Email công ty", en: "Company Email" },
  "cta.form.phone": { vi: "Số điện thoại", en: "Phone Number" },
  "cta.form.company": { vi: "Tên công ty", en: "Company Name" },
  "cta.form.endpoints": { vi: "Số lượng máy tính", en: "Number of Endpoints" },
  "cta.form.submit": { vi: "Nhận Bản Demo Ngay", en: "Get Demo Now" },
  "cta.note": {
    vi: "Chúng tôi sẽ liên hệ trong vòng 24h làm việc",
    en: "We will contact you within 24 business hours",
  },

  // Footer
  "footer.tagline": {
    vi: "Bảo vệ Tài sản Số của Doanh nghiệp Việt với giải pháp Endpoint Security toàn diện và tiên tiến nhất.",
    en: "Protect Digital Assets with the most comprehensive and advanced Endpoint Security solution.",
  },
  "footer.quickLinks": { vi: "Liên kết nhanh", en: "Quick Links" },
  "footer.contact": { vi: "Liên hệ", en: "Contact" },
  "footer.newsletter": { vi: "Đăng ký nhận tin", en: "Newsletter" },
  "footer.newsletterDesc": {
    vi: "Nhận thông tin mới nhất về bảo mật endpoint và các giải pháp an ninh mạng.",
    en: "Get the latest information about endpoint security and cybersecurity solutions.",
  },
  "footer.emailPlaceholder": { vi: "Email của bạn", en: "Your Email" },
  "footer.subscribe": { vi: "Đăng ký", en: "Subscribe" },
  "footer.copyright": {
    vi: "CÔNG TY CỔ PHẦN AN NINH MẠNG QUỐC TẾ - ICS",
    en: "INTERNATIONAL CYBER SECURITY JSC - ICS",
  },
  "footer.about": { vi: "Về chúng tôi", en: "About Us" },
  "footer.features": { vi: "Tính năng sản phẩm", en: "Product Features" },
  "footer.pricing": { vi: "Bảng giá", en: "Pricing" },
  "footer.privacy": { vi: "Chính sách bảo mật", en: "Privacy Policy" },
  "footer.terms": { vi: "Điều khoản sử dụng", en: "Terms of Service" },

  // Theme
  "theme.light": { vi: "Sáng", en: "Light" },
  "theme.dark": { vi: "Tối", en: "Dark" },
  "theme.system": { vi: "Hệ thống", en: "System" },

  "blog.badge": { vi: "Tin tức & Kiến thức", en: "News & Insights" },
  "blog.title": { vi: "Tin tức", en: "Blog" },
  "blog.titleHighlight": { vi: "Kiến thức Bảo mật", en: "Security Insights" },
  "blog.subtitle": {
    vi: "Cập nhật xu hướng, kiến thức và best practices về bảo mật endpoint cho doanh nghiệp",
    en: "Updates on trends, knowledge and best practices in endpoint security",
  },
  "blog.readMore": { vi: "Đọc thêm", en: "Read more" },
  "blog.viewAll": { vi: "Xem tất cả bài viết", en: "View all posts" },
  "blog.subscribe": { vi: "Đăng ký nhận bản tin", en: "Subscribe to Newsletter" },
  "blog.subscribeDesc": {
    vi: "Nhận thông tin mới nhất về bảo mật endpoint và các giải pháp an ninh mạng hàng tuần.",
    en: "Get the latest information about endpoint security and cybersecurity solutions weekly.",
  },

  // Contact Page
  "contact.badge": { vi: "Liên hệ với chúng tôi", en: "Contact Us" },
  "contact.title": { vi: "Kết nối", en: "Get in" },
  "contact.titleHighlight": { vi: "với ICS", en: "Touch" },
  "contact.subtitle": {
    vi: "Đội ngũ ICS luôn sẵn sàng lắng nghe và hỗ trợ bạn 24/7",
    en: "ICS team is always ready to listen and support you 24/7",
  },
  "contact.sendMessage": { vi: "Gửi tin nhắn cho chúng tôi", en: "Send us a Message" },
  "contact.info": { vi: "Thông tin Liên hệ", en: "Contact Information" },
  "contact.support": { vi: "Kênh Hỗ trợ", en: "Support Channels" },
  "contact.location": { vi: "Vị trí Văn phòng", en: "Office Location" },
  "contact.getDirections": { vi: "Chỉ đường", en: "Get Directions" },
  "contact.callNow": { vi: "Gọi ngay", en: "Call Now" },
  "contact.sendEmail": { vi: "Gửi Email", en: "Send Email" },
}

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi")

  const t = useCallback(
    (key: string) => {
      const entry = translations[key]
      if (entry) {
        return entry[language]
      }
      return key
    },
    [language],
  )

  return <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider")
  }
  return context
}
