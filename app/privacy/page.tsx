"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n"
import { Shield, Lock, Eye, FileText, Server, UserCheck } from "lucide-react"

export default function PrivacyPage() {
  const { language } = useI18n()

  const sections = [
    {
      icon: FileText,
      title: { vi: "Thu thập thông tin", en: "Information Collection" },
      content: { 
        vi: "Chúng tôi thu thập thông tin cá nhân như tên, email, số điện thoại và thông tin công ty khi bạn đăng ký sử dụng dịch vụ CSA. Thông tin này được sử dụng để cung cấp dịch vụ, hỗ trợ khách hàng và cải thiện sản phẩm.",
        en: "We collect personal information such as name, email, phone number and company information when you register to use CSA services. This information is used to provide services, customer support and improve products."
      }
    },
    {
      icon: Lock,
      title: { vi: "Bảo mật thông tin", en: "Information Security" },
      content: { 
        vi: "CSA sử dụng các biện pháp bảo mật tiên tiến bao gồm mã hóa SSL/TLS, xác thực đa yếu tố và kiểm soát truy cập nghiêm ngặt để bảo vệ dữ liệu khách hàng. Chúng tôi tuân thủ các tiêu chuẩn bảo mật quốc tế như ISO 27001.",
        en: "CSA uses advanced security measures including SSL/TLS encryption, multi-factor authentication and strict access control to protect customer data. We comply with international security standards such as ISO 27001."
      }
    },
    {
      icon: Eye,
      title: { vi: "Sử dụng thông tin", en: "Information Usage" },
      content: { 
        vi: "Thông tin của bạn được sử dụng để: (1) Cung cấp và duy trì dịch vụ CSA, (2) Gửi thông báo quan trọng về dịch vụ, (3) Hỗ trợ kỹ thuật và khách hàng, (4) Cải thiện và phát triển sản phẩm, (5) Tuân thủ các yêu cầu pháp lý.",
        en: "Your information is used to: (1) Provide and maintain CSA services, (2) Send important service notifications, (3) Technical and customer support, (4) Improve and develop products, (5) Comply with legal requirements."
      }
    },
    {
      icon: Server,
      title: { vi: "Lưu trữ dữ liệu", en: "Data Storage" },
      content: { 
        vi: "Dữ liệu của bạn được lưu trữ trên máy chủ an toàn tại Việt Nam và tuân thủ Luật An ninh mạng. Chúng tôi sử dụng các trung tâm dữ liệu đạt tiêu chuẩn Tier 3 với backup định kỳ và disaster recovery plan.",
        en: "Your data is stored on secure servers in Vietnam and complies with Cybersecurity Law. We use Tier 3 standard data centers with regular backups and disaster recovery plans."
      }
    },
    {
      icon: UserCheck,
      title: { vi: "Quyền của người dùng", en: "User Rights" },
      content: { 
        vi: "Bạn có quyền: (1) Truy cập và xem thông tin cá nhân, (2) Yêu cầu sửa đổi thông tin không chính xác, (3) Yêu cầu xóa dữ liệu cá nhân, (4) Từ chối nhận email marketing, (5) Rút lại sự đồng ý xử lý dữ liệu bất cứ lúc nào.",
        en: "You have the right to: (1) Access and view personal information, (2) Request correction of inaccurate information, (3) Request deletion of personal data, (4) Opt-out of marketing emails, (5) Withdraw data processing consent at any time."
      }
    },
    {
      icon: Shield,
      title: { vi: "Chia sẻ thông tin", en: "Information Sharing" },
      content: { 
        vi: "CSA cam kết KHÔNG bán, cho thuê hoặc chia sẻ thông tin cá nhân của bạn cho bên thứ ba vì mục đích thương mại. Chúng tôi chỉ chia sẻ thông tin khi: (1) Có sự đồng ý của bạn, (2) Yêu cầu pháp lý, (3) Bảo vệ quyền lợi hợp pháp của ICS.",
        en: "CSA commits NOT to sell, rent or share your personal information to third parties for commercial purposes. We only share information when: (1) You consent, (2) Legal requirement, (3) Protect ICS's legitimate interests."
      }
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
            {language === "vi" ? "Chính sách bảo mật" : "Privacy Policy"}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {language === "vi" ? "Chính Sách " : "Privacy "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {language === "vi" ? "Bảo Mật" : "Policy"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "vi"
              ? "CSA cam kết bảo vệ quyền riêng tư và thông tin cá nhân của bạn một cách tối đa"
              : "CSA is committed to protecting your privacy and personal information to the fullest extent"}
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            {language === "vi" ? "Cập nhật lần cuối: 11/12/2025" : "Last updated: December 11, 2025"}
          </p>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-3xl p-8 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <section.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {section.title[language]}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {section.content[language]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/30 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {language === "vi" ? "Liên hệ về Chính sách Bảo mật" : "Contact Regarding Privacy Policy"}
            </h2>
            <p className="text-muted-foreground text-center mb-6 leading-relaxed">
              {language === "vi"
                ? "Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật hoặc cách chúng tôi xử lý dữ liệu của bạn, vui lòng liên hệ:"
                : "If you have any questions about our privacy policy or how we handle your data, please contact:"}
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="text-center">
                <p className="font-semibold text-foreground">Công ty TNHH Giải pháp CNTT ICS</p>
                <p className="text-muted-foreground">Email: info@icss.com.vn</p>
                <p className="text-muted-foreground">Hotline: 0707.806.860</p>
                <p className="text-muted-foreground text-sm mt-2">
                  TT3-5 Khu đô thị Đại Kim mới, Định Công, Hoàng Mai, Hà Nội
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/30 mt-4"
              >
                {language === "vi" ? "Liên hệ ngay" : "Contact Now"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
