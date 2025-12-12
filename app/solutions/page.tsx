"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SolutionsSection } from "@/components/solutions-section"
import { CTASection } from "@/components/cta-section"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n"
import { 
  Building2, Factory, GraduationCap, Landmark, Hospital, ShoppingBag, 
  Shield, Database, BarChart3, Settings, Check, ArrowRight 
} from "lucide-react"

export default function SolutionsPage() {
  const { language } = useI18n()

  const industrySolutions = [
    {
      icon: Building2,
      title: { vi: "Doanh nghiệp Vừa & Nhỏ", en: "SMB Enterprises" },
      desc: {
        vi: "Giải pháp tối ưu chi phí cho doanh nghiệp 50-500 endpoints. Triển khai nhanh, dễ quản lý.",
        en: "Cost-effective solution for 50-500 endpoints. Quick deployment, easy management.",
      },
      features: {
        vi: ["Quản lý USB tập trung", "Kiểm soát phần mềm", "Remote Assistance", "Báo cáo hiệu năng"],
        en: ["Centralized USB Management", "Software Control", "Remote Assistance", "Performance Reports"],
      },
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Factory,
      title: { vi: "Sản xuất & Công nghiệp", en: "Manufacturing & Industrial" },
      desc: {
        vi: "Bảo vệ dữ liệu thiết kế, công thức sản xuất. Chống rò rỉ bí mật công nghệ.",
        en: "Protect design data, manufacturing formulas. Prevent technology secret leaks.",
      },
      features: {
        vi: ["DLP nâng cao", "Giám sát file nhạy cảm", "AI hành vi bất thường", "Audit trail đầy đủ"],
        en: ["Advanced DLP", "Sensitive file monitoring", "AI abnormal behavior", "Complete audit trail"],
      },
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Landmark,
      title: { vi: "Ngân hàng & Tài chính", en: "Banking & Finance" },
      desc: {
        vi: "Tuân thủ quy định NHNN, ISO 27001. Bảo vệ dữ liệu khách hàng tuyệt đối.",
        en: "SBV, ISO 27001 compliance. Absolute customer data protection.",
      },
      features: {
        vi: ["Compliance ISO 27001", "Mã hóa dữ liệu", "Kiểm soát truy cập nghiêm ngặt", "Log chi tiết"],
        en: ["ISO 27001 Compliance", "Data Encryption", "Strict access control", "Detailed logging"],
      },
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: GraduationCap,
      title: { vi: "Giáo dục", en: "Education" },
      desc: {
        vi: "Quản lý phòng máy hiệu quả. Kiểm soát truy cập internet an toàn cho học sinh.",
        en: "Efficient computer lab management. Safe internet access control for students.",
      },
      features: {
        vi: ["Lọc website", "Giới hạn thời gian sử dụng", "Quản lý ứng dụng", "Báo cáo sử dụng"],
        en: ["Web Filtering", "Time usage limits", "Application management", "Usage reports"],
      },
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Hospital,
      title: { vi: "Y tế", en: "Healthcare" },
      desc: {
        vi: "Bảo vệ hồ sơ bệnh án điện tử. Tuân thủ quy định về bảo mật thông tin y tế.",
        en: "Protect electronic medical records. Healthcare information security compliance.",
      },
      features: {
        vi: ["Bảo mật y tế", "Mã hóa thiết bị", "Kiểm soát truy cập HSDL", "Audit trail"],
        en: ["Healthcare security", "Device encryption", "Medical record access control", "Audit trail"],
      },
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: ShoppingBag,
      title: { vi: "Bán lẻ", en: "Retail" },
      desc: {
        vi: "Bảo vệ dữ liệu POS, quản lý chuỗi cửa hàng. Giám sát từ xa hiệu quả.",
        en: "POS data protection, chain store management. Effective remote monitoring.",
      },
      features: {
        vi: ["Quản lý POS tập trung", "Giám sát từ xa", "Kiểm soát USB POS", "Báo cáo chi tiết"],
        en: ["Centralized POS management", "Remote monitoring", "POS USB control", "Detailed reports"],
      },
      gradient: "from-pink-500 to-rose-500",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 relative cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="mb-4 border-accent/50 text-accent">
            {language === "vi" ? "Giải pháp CSA" : "CSA Solutions"}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {language === "vi" ? "Giải pháp " : "Solutions "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              {language === "vi" ? "Toàn Diện" : "Comprehensive"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "vi"
              ? "Giải pháp 4-in-1 và các giải pháp theo ngành nghề đáp ứng mọi nhu cầu bảo mật endpoint"
              : "4-in-1 solution and industry-specific solutions for all endpoint security needs"}
          </p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              {language === "vi" ? "Giải pháp theo ngành" : "Industry Solutions"}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "vi" ? "Phù hợp với " : "Suitable for "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {language === "vi" ? "Mọi Ngành Nghề" : "Every Industry"}
              </span>
            </h2>
            <p className="text-muted-foreground">
              {language === "vi"
                ? "CSA được tùy chỉnh theo đặc thù từng ngành, đáp ứng các yêu cầu bảo mật riêng biệt"
                : "CSA is customized for each industry, meeting specific security requirements"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-3xl p-8 hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 duration-300 group relative overflow-hidden"
              >
                {/* Gradient background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <solution.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {solution.title[language]}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.desc[language]}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.features[language].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${solution.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${solution.gradient} text-white font-semibold text-sm hover:shadow-lg transition-all duration-300 group-hover:gap-3`}>
                    {language === "vi" ? "Tìm hiểu thêm" : "Learn More"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
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
