"use client"

import { Badge } from "@/components/ui/badge"
import { Check, X, Zap } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import Image from "next/image"

export function ComparisonSection() {
  const { language } = useI18n()

  const comparisonData = [
    {
      feature: language === "vi" ? "Smart Whitelist AI tự học" : "Smart AI Auto-learning Whitelist",
      csa: language === "vi" ? "Có (4 nguồn dữ liệu)" : "Yes (4 data sources)",
      symantec: language === "vi" ? "Không" : "No",
      microsoft: language === "vi" ? "Không" : "No",
      local: language === "vi" ? "Không" : "No",
      csaHighlight: true,
    },
    {
      feature: "False Positive",
      csa: "< 2%",
      symantec: "8-15%",
      microsoft: "10-12%",
      local: "15-25%",
      csaHighlight: true,
    },
    {
      feature: language === "vi" ? "Kiểm soát USB theo Serial Number" : "USB Control by Serial Number",
      csa: language === "vi" ? "Có + popup + email realtime" : "Yes + popup + email realtime",
      symantec: language === "vi" ? "Có (rất đắt)" : "Yes (very expensive)",
      microsoft: language === "vi" ? "Không native" : "Not native",
      local: language === "vi" ? "Cơ bản" : "Basic",
      csaHighlight: true,
    },
    {
      feature: language === "vi" ? "Geofencing + Giới hạn giờ ngoài VP" : "Geofencing + Off-hours Restrictions",
      csa: language === "vi" ? "Có" : "Yes",
      symantec: language === "vi" ? "Không" : "No",
      microsoft: language === "vi" ? "Không" : "No",
      local: language === "vi" ? "Không" : "No",
      csaHighlight: true,
    },
    {
      feature: "Endpoint Behavior Analytics",
      csa: "Native",
      symantec: language === "vi" ? "Module riêng (rất đắt)" : "Separate module (very expensive)",
      microsoft: language === "vi" ? "Không" : "No",
      local: language === "vi" ? "Rất yếu" : "Very weak",
      csaHighlight: true,
    },
    {
      feature: language === "vi" ? "Theo dõi file nhạy cảm (ổ ngoài, mạng)" : "Sensitive File Tracking (external, network)",
      csa: language === "vi" ? "Có" : "Yes",
      symantec: language === "vi" ? "Có (đắt)" : "Yes (expensive)",
      microsoft: language === "vi" ? "Chỉ cloud" : "Cloud only",
      local: language === "vi" ? "Không" : "No",
      csaHighlight: false,
    },
    {
      feature: language === "vi" ? "Báo cáo sử dụng phần mềm chi tiết" : "Detailed Software Usage Reports",
      csa: language === "vi" ? "Rất chi tiết" : "Very detailed",
      symantec: language === "vi" ? "Cơ bản" : "Basic",
      microsoft: language === "vi" ? "Không" : "No",
      local: language === "vi" ? "Sơ sài" : "Basic",
      csaHighlight: true,
    },
    {
      feature: language === "vi" ? "4 trong 1 (Asset + Perf + Deploy + DLP)" : "4-in-1 (Asset + Perf + Deploy + DLP)",
      csa: language === "vi" ? "Có" : "Yes",
      symantec: language === "vi" ? "Không" : "No",
      microsoft: language === "vi" ? "Không" : "No",
      local: language === "vi" ? "Không" : "No",
      csaHighlight: true,
    },
    {
      feature: language === "vi" ? "SLA phản hồi sự cố" : "Incident Response SLA",
      csa: language === "vi" ? "30 phút (Tiếng Việt 24/7)" : "30 min (Vietnamese 24/7)",
      symantec: "4-8h",
      microsoft: "2-6h",
      local: "1-4h",
      csaHighlight: true,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            {language === "vi" ? "So sánh giải pháp" : "Solution Comparison"}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {language === "vi" ? "TẠI SAO CHỌN " : "WHY CHOOSE "}
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
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground w-1/3">
                      {language === "vi" ? "Giải pháp kiểm soát thiết bị đầu cuối" : "Endpoint Control Solution"}
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold">
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
                    <th className="px-6 py-4 text-center text-sm font-semibold text-muted-foreground">
                      SYMANTEC/
                      <br />
                      FORCEPOINT
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-muted-foreground">
                      MICROSOFT
                      <br />
                      PURVIEW E5
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-muted-foreground">
                      {language === "vi" ? "NỘI ĐỊA KHÁC" : "OTHER LOCAL"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                  {comparisonData.map((row, index) => (
                    <tr 
                      key={index} 
                      className={`transition-colors hover:bg-secondary/30 ${
                        row.csaHighlight ? 'bg-primary/5' : ''
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-foreground">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                          row.csaHighlight 
                            ? 'bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30' 
                            : 'text-foreground'
                        }`}>
                          {row.csa.toLowerCase().includes('có') || row.csa.toLowerCase().includes('yes') || row.csa === 'Native' ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : null}
                          <span>{row.csa}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-muted-foreground">
                        {row.symantec.toLowerCase().includes('không') || row.symantec.toLowerCase() === 'no' ? (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        ) : (
                          row.symantec
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-muted-foreground">
                        {row.microsoft.toLowerCase().includes('không') || row.microsoft.toLowerCase() === 'no' ? (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        ) : (
                          row.microsoft
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-muted-foreground">
                        {row.local.toLowerCase().includes('không') || row.local.toLowerCase() === 'no' ? (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        ) : (
                          row.local
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            {language === "vi" 
              ? "Khám phá giải pháp CSA phù hợp với doanh nghiệp của bạn"
              : "Discover the CSA solution suitable for your business"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-90 transition-opacity"
            >
              {language === "vi" ? "Nhận tư vấn miễn phí" : "Get Free Consultation"}
            </a>
            <a
              href="/features"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
            >
              {language === "vi" ? "Xem chi tiết tính năng" : "View Feature Details"}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
