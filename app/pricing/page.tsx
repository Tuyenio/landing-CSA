"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"
import { Check, Zap, Settings, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const { language } = useI18n()

  const pricingPlans = [
    {
      name: language === "vi" ? "Gói Full Tính Năng" : "Full Features Package",
      price: "100",
      currency: "USD",
      period: language === "vi" ? "/user/năm" : "/user/year",
      desc: language === "vi" 
        ? "Truy cập đầy đủ tất cả 12 tính năng CSA. Phù hợp cho doanh nghiệp cần bảo mật toàn diện."
        : "Full access to all 12 CSA features. Perfect for enterprises needing comprehensive security.",
      features: [
        language === "vi" ? "✅ Tất cả 12 tính năng chính" : "✅ All 12 core features",
        language === "vi" ? "✅ Cảnh báo hiệu năng real-time" : "✅ Real-time performance alerts",
        language === "vi" ? "✅ Kiểm soát USB Whitelist" : "✅ USB Whitelist Control",
        language === "vi" ? "✅ Kiểm soát phần mềm & trình duyệt" : "✅ Software & Browser Control",
        language === "vi" ? "✅ AI phát hiện hành vi bất thường" : "✅ AI abnormal behavior detection",
        language === "vi" ? "✅ Remote Assistance 24/7" : "✅ Remote Assistance 24/7",
        language === "vi" ? "✅ Lịch sử đầy đủ (Web + App)" : "✅ Complete history (Web + App)",
        language === "vi" ? "✅ Quản lý phần cứng & phần mềm" : "✅ Hardware & Software Management",
        language === "vi" ? "✅ DLP & File Monitoring" : "✅ DLP & File Monitoring",
        language === "vi" ? "✅ Dashboard & Reports" : "✅ Dashboard & Reports",
        language === "vi" ? "✅ Hỗ trợ kỹ thuật 24/7 (Tiếng Việt)" : "✅ 24/7 Technical Support (Vietnamese)",
        language === "vi" ? "✅ Cập nhật miễn phí" : "✅ Free updates",
      ],
      recommended: true,
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      buttonText: language === "vi" ? "Chọn gói này" : "Choose this plan",
    },
    {
      name: language === "vi" ? "Gói Tùy Chỉnh" : "Custom Package",
      price: language === "vi" ? "Liên hệ" : "Contact",
      currency: "",
      period: "",
      desc: language === "vi"
        ? "Giải pháp tùy chỉnh theo nhu cầu riêng của doanh nghiệp. Chỉ trả tiền cho những tính năng bạn cần."
        : "Customized solution for your specific business needs. Pay only for the features you need.",
      features: [
        language === "vi" ? "🎯 Chọn lựa tính năng theo nhu cầu" : "🎯 Select features as needed",
        language === "vi" ? "🎯 Giá linh hoạt, tiết kiệm" : "🎯 Flexible, cost-effective pricing",
        language === "vi" ? "🎯 Tùy chỉnh theo ngành nghề" : "🎯 Industry-specific customization",
        language === "vi" ? "🎯 Tích hợp hệ thống hiện có" : "🎯 Integration with existing systems",
        language === "vi" ? "🎯 SLA cam kết riêng" : "🎯 Dedicated SLA commitment",
        language === "vi" ? "🎯 Đào tạo on-site" : "🎯 On-site training",
        language === "vi" ? "🎯 Hỗ trợ 1-1 dedicated" : "🎯 Dedicated 1-1 support",
        language === "vi" ? "🎯 Tư vấn miễn phí" : "🎯 Free consultation",
      ],
      recommended: false,
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      buttonText: language === "vi" ? "Liên hệ tư vấn" : "Contact Sales",
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
            {language === "vi" ? "Bảng giá" : "Pricing"}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {language === "vi" ? "Bảng Giá " : "Pricing "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {language === "vi" ? "Minh Bạch" : "Transparent"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "vi"
              ? "Chọn gói phù hợp với nhu cầu doanh nghiệp của bạn. Không phí ẩn, không ràng buộc dài hạn."
              : "Choose the plan that fits your business needs. No hidden fees, no long-term commitments."}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-card border-2 rounded-3xl p-8 md:p-10 transition-all duration-300 ${
                  plan.recommended
                    ? 'border-primary shadow-2xl shadow-primary/20 scale-105'
                    : 'border-border hover:border-primary/50 hover:shadow-xl'
                }`}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r ${plan.gradient} text-white font-semibold text-sm shadow-lg`}>
                      <Star className="w-4 h-4 fill-current" />
                      {language === "vi" ? "Khuyên dùng" : "Recommended"}
                    </div>
                  </div>
                )}

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 rounded-3xl`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    {plan.recommended ? (
                      <Zap className="w-8 h-8 text-white" />
                    ) : (
                      <Settings className="w-8 h-8 text-white" />
                    )}
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    {plan.currency ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                          {plan.price}
                        </span>
                        <span className="text-2xl font-semibold text-muted-foreground">
                          {plan.currency}
                        </span>
                        <span className="text-muted-foreground">
                          {plan.period}
                        </span>
                      </div>
                    ) : (
                      <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                        {plan.price}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {plan.desc}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.recommended ? 'text-primary' : 'text-accent'}`} />
                        <span className="text-foreground text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link href="/contact">
                    <Button
                      className={`w-full py-6 text-base font-semibold rounded-full ${
                        plan.recommended
                          ? `bg-gradient-to-r ${plan.gradient} text-white hover:opacity-90 shadow-lg shadow-primary/30`
                          : 'bg-secondary text-foreground hover:bg-secondary/80'
                      }`}
                    >
                      {plan.buttonText}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === "vi" ? "Bạn cần hỗ trợ?" : "Need Help?"}
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            {language === "vi"
              ? "Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn giúp bạn chọn gói phù hợp nhất"
              : "Our expert team is ready to help you choose the most suitable package"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 px-8 py-6 text-base font-semibold rounded-full shadow-lg shadow-primary/30">
                {language === "vi" ? "Liên hệ ngay" : "Contact Now"}
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base font-semibold rounded-full">
                {language === "vi" ? "Xem tính năng" : "View Features"}
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                value: "500+",
                label: language === "vi" ? "Khách hàng tin dùng" : "Trusted Clients"
              },
              {
                value: "99.9%",
                label: language === "vi" ? "Uptime đảm bảo" : "Guaranteed Uptime"
              },
              {
                value: "24/7",
                label: language === "vi" ? "Hỗ trợ tiếng Việt" : "Vietnamese Support"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
