"use client"

import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n"
import { Check, X } from "lucide-react"
import Image from "next/image"

export function ComparisonTable() {
  const { language } = useI18n()

  const comparisonData = [
    {
      feature: language === "vi" ? "Smart Whitelist AI tự học" : "Smart Whitelist AI Self-learning",
      csa: "Có (4 nguồn dữ liệu)",
      symantec: "❌",
      microsoft: "❌",
      local: "❌",
    },
    {
      feature: language === "vi" ? "False Positive" : "False Positive Rate",
      csa: "< 2%",
      symantec: "8-15%",
      microsoft: "10-12%",
      local: "15-25%",
      isHighlight: true,
    },
    {
      feature: language === "vi" ? "Kiểm soát USB theo Serial Number" : "USB Serial Number Control",
      csa: language === "vi" ? "Có + popup + email realtime" : "Yes + popup + real-time email",
      symantec: language === "vi" ? "Có (rất đắt)" : "Yes (very expensive)",
      microsoft: "❌",
      local: language === "vi" ? "Cơ bản" : "Basic",
    },
    {
      feature: language === "vi" ? "Geofencing + Giới hạn giờ ngoài VP" : "Geofencing + Off-hours Limits",
      csa: "✓",
      symantec: "❌",
      microsoft: "❌",
      local: "❌",
    },
    {
      feature: language === "vi" ? "Endpoint Behavior Analytics" : "Endpoint Behavior Analytics",
      csa: "Native",
      symantec: language === "vi" ? "Module riêng (rất đắt)" : "Separate module (very expensive)",
      microsoft: "❌",
      local: language === "vi" ? "Rất yếu" : "Very weak",
    },
    {
      feature: language === "vi" ? "Theo dõi file nhạy cảm (ổ ngoài, mạng)" : "Sensitive File Tracking (External, Network)",
      csa: "✓",
      symantec: language === "vi" ? "Có (đắt)" : "Yes (expensive)",
      microsoft: language === "vi" ? "Chỉ cloud" : "Cloud only",
      local: "❌",
    },
    {
      feature: language === "vi" ? "Báo cáo sử dụng phần mềm chi tiết" : "Detailed Software Usage Reports",
      csa: language === "vi" ? "Rất chi tiết" : "Very detailed",
      symantec: language === "vi" ? "Cơ bản" : "Basic",
      microsoft: "❌",
      local: language === "vi" ? "Sơ sài" : "Superficial",
    },
    {
      feature: language === "vi" ? "4 trong 1 (Asset + Perf + Deploy + DLP)" : "4-in-1 (Asset + Perf + Deploy + DLP)",
      csa: "✓",
      symantec: "❌",
      microsoft: "❌",
      local: "❌",
    },
    {
      feature: language === "vi" ? "SLA phản hồi sự cố" : "Incident Response SLA",
      csa: language === "vi" ? "30 phút (Tiếng Việt 24/7)" : "30 min (Vietnamese 24/7)",
      symantec: "4-8h",
      microsoft: "2-6h",
      local: language === "vi" ? "1-4h" : "1-4h",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            {language === "vi" ? "So sánh giải pháp" : "Solution Comparison"}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {language === "vi" ? "Tại Sao Chọn " : "Why Choose "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              CSA?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {language === "vi"
              ? "CSA vượt trội với công nghệ AI độc quyền, hỗ trợ tiếng Việt 24/7 và chi phí hợp lý."
              : "CSA excels with proprietary AI technology, Vietnamese 24/7 support and reasonable costs."}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-primary/10 to-accent/10 border-b-2 border-border">
                <th className="text-left px-6 py-4 font-bold text-foreground">
                  {language === "vi" ? "Giải pháp kiểm soát thiết bị đầu cuối" : "Endpoint Control Solutions"}
                </th>
                <th className="text-center px-4 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-white border-2 border-primary/30 shadow-lg flex items-center justify-center">
                      <Image 
                        src="/images/csa-logo.png" 
                        alt="CSA Logo" 
                        width={56} 
                        height={56}
                        className="object-contain p-1"
                      />
                    </div>
                    <span className="text-sm font-bold text-primary">CSA</span>
                  </div>
                </th>
                <th className="text-center px-4 py-4">
                  <div className="text-sm font-semibold text-foreground whitespace-nowrap">
                    SYMANTEC/<br />FORCEPOINT
                  </div>
                </th>
                <th className="text-center px-4 py-4">
                  <div className="text-sm font-semibold text-foreground whitespace-nowrap">
                    MICROSOFT<br />PURVIEW E5
                  </div>
                </th>
                <th className="text-center px-4 py-4">
                  <div className="text-sm font-semibold text-foreground whitespace-nowrap">
                    {language === "vi" ? "NỘI ĐỊA KHÁC" : "OTHER LOCAL"}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-border transition-colors ${
                    row.isHighlight ? "bg-primary/5" : "hover:bg-secondary/50"
                  }`}
                >
                  <td className="px-6 py-4 font-semibold text-foreground">
                    {row.feature}
                  </td>
                  <td className="text-center px-4 py-4">
                    <div
                      className={`inline-flex items-center justify-center px-3 py-2 rounded-full text-sm font-semibold ${
                        row.csa.includes("Có") || row.csa === "✓" || row.csa === "Native"
                          ? "bg-green-500/20 text-green-600 dark:text-green-400"
                          : "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                      }`}
                    >
                      {row.csa}
                    </div>
                  </td>
                  <td className="text-center px-4 py-4 text-foreground">
                    {row.symantec === "❌" ? (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    ) : (
                      <span className="text-sm">{row.symantec}</span>
                    )}
                  </td>
                  <td className="text-center px-4 py-4 text-foreground">
                    {row.microsoft === "❌" ? (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    ) : (
                      <span className="text-sm">{row.microsoft}</span>
                    )}
                  </td>
                  <td className="text-center px-4 py-4 text-foreground">
                    {row.local === "❌" ? (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    ) : (
                      <span className="text-sm">{row.local}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: language === "vi" ? "Công nghệ AI độc quyền" : "Proprietary AI Technology",
              desc: language === "vi" ? "Smart Whitelist với 4 nguồn dữ liệu, False Positive < 2%" : "Smart Whitelist with 4 data sources, False Positive < 2%",
              icon: "🤖"
            },
            {
              title: language === "vi" ? "Hỗ trợ Tiếng Việt 24/7" : "Vietnamese 24/7 Support",
              desc: language === "vi" ? "SLA 30 phút, hỗ trợ tiếng Việt trên toàn bộ hệ thống" : "30-minute SLA, Vietnamese support across the system",
              icon: "🇻🇳"
            },
            {
              title: language === "vi" ? "Chi phí hợp lý" : "Reasonable Pricing",
              desc: language === "vi" ? "Giải pháp 4-in-1, tiết kiệm 60% so với mua riêng lẻ" : "4-in-1 solution, save 60% vs individual purchases",
              icon: "💰"
            }
          ].map((benefit, i) => (
            <div key={i} className="bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:-translate-y-2 duration-300 text-center group">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
