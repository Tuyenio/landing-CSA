"use client"

import { Badge } from "@/components/ui/badge"
import { Search, FileText, TestTube, Rocket, CheckCircle2, Calendar } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function RoadmapSection() {
  const { language } = useI18n()

  const roadmapSteps = [
    {
      week: language === "vi" ? "Tuần 1" : "Week 1",
      title: language === "vi" ? "KHẢO SÁT & ĐÁNH GIÁ" : "SURVEY & ASSESSMENT",
      description: language === "vi" 
        ? "Cài đặt Agent ở chế độ Log only, đánh giá rủi ro hiện hữu và thu thập dữ liệu."
        : "Install Agent in Log-only mode, assess existing risks and collect data.",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
    },
    {
      week: language === "vi" ? "Tuần 2" : "Week 2",
      title: language === "vi" ? "THIẾT KẾ CHÍNH SÁCH" : "POLICY DESIGN",
      description: language === "vi"
        ? "Xây dựng bộ quy tắc danh sách trắng phù hợp với văn hóa và quy trình doanh nghiệp."
        : "Build whitelist rules that fit your corporate culture and processes.",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
    },
    {
      week: language === "vi" ? "Tuần 3-4" : "Week 3-4",
      title: language === "vi" ? "CHẠY THỬ NGHIỆM & TINH CHỈNH" : "PILOT TEST & OPTIMIZATION",
      description: language === "vi"
        ? "Chạy thử nghiệm trên 200 máy đại diện, thu thập phản hồi và tối ưu chính sách."
        : "Run pilot test on 200 representative machines, collect feedback and optimize policies.",
      icon: TestTube,
      color: "from-orange-500 to-red-500",
    },
    {
      week: language === "vi" ? "Tuần 5-6" : "Week 5-6",
      title: language === "vi" ? "TRIỂN KHAI DIỆN RỘNG" : "FULL DEPLOYMENT",
      description: language === "vi"
        ? "Kích hoạt chế độ bảo vệ thời gian thực trên toàn bộ hệ thống. Đào tạo người dùng."
        : "Enable real-time protection across the entire system. Train end users.",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 via-background to-background relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            {language === "vi" ? "Quy trình triển khai" : "Deployment Process"}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {language === "vi" ? "LỘ TRÌNH & " : "ROADMAP & "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {language === "vi" ? "CAM KẾT" : "COMMITMENT"}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            {language === "vi" 
              ? "Triển khai nhanh chóng trong 6 tuần"
              : "Quick deployment within 6 weeks"}
          </p>
          <p className="text-base text-muted-foreground">
            {language === "vi"
              ? "Quy trình triển khai bài bản, đảm bảo không gián đoạn hoạt động kinh doanh."
              : "Systematic deployment process, ensuring no business disruption."}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical line for mobile, horizontal for desktop */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary md:hidden" />
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />
          
          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {roadmapSteps.map((step, index) => (
              <div key={index} className="relative pl-20 md:pl-0">
                {/* Mobile timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-background border-4 border-primary md:hidden" />
                
                {/* Desktop timeline dot */}
                <div className="hidden md:flex absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary items-center justify-center z-10">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Card */}
                <div className="group bg-card border-2 border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 duration-300">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Week badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                    <Calendar className="w-4 h-4" />
                    {step.week}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Check icon */}
                  <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>{language === "vi" ? "Hoàn thành" : "Completed"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {language === "vi" ? "Cam kết của chúng tôi" : "Our Commitment"}
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="p-4 bg-background/80 rounded-xl border border-border">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                    0đ
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "vi" ? "Chi phí triển khai ẩn" : "Hidden deployment costs"}
                  </p>
                </div>
                
                <div className="p-4 bg-background/80 rounded-xl border border-border">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                    24/7
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "vi" ? "Hỗ trợ tiếng Việt" : "Vietnamese support"}
                  </p>
                </div>
                
                <div className="p-4 bg-background/80 rounded-xl border border-border">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                    100%
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "vi" ? "Đảm bảo hoàn tiền nếu không hài lòng" : "Money-back guarantee if unsatisfied"}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
                >
                  {language === "vi" ? "Bắt đầu ngay" : "Get Started"}
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
                >
                  {language === "vi" ? "Liên hệ tư vấn" : "Contact Consultant"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
