"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Headphones,
  Building2,
  Globe,
  Facebook,
  Linkedin,
} from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const { language } = useI18n()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(language === "vi" ? "Tin nhắn đã được gửi thành công!" : "Message sent successfully!")
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: { vi: "Địa chỉ văn phòng", en: "Office Address" },
      content: "TT3-5 Khu đô thị Đại Kim mới, Định Công, Hoàng Mai, Hà Nội",
    },
    {
      icon: Phone,
      title: { vi: "Điện thoại", en: "Phone" },
      content: "Hotline: 0707.806.860 | Tel: 0931.487.231",
    },
    {
      icon: Mail,
      title: { vi: "Email", en: "Email" },
      content: "info@icss.com.vn",
    },
    {
      icon: Clock,
      title: { vi: "Giờ làm việc", en: "Working Hours" },
      content:
        language === "vi"
          ? "Thứ 2 - Thứ 6: 8:00 - 18:00\nThứ 7: 8:00 - 12:00"
          : "Mon - Fri: 8:00 AM - 6:00 PM\nSat: 8:00 AM - 12:00 PM",
    },
  ]

  const supportChannels = [
    {
      icon: Headphones,
      title: { vi: "Hỗ trợ Kỹ thuật 24/7", en: "24/7 Technical Support" },
      desc: {
        vi: "Đội ngũ kỹ thuật viên sẵn sàng hỗ trợ bạn mọi lúc qua hotline",
        en: "Technical team ready to support you anytime via hotline",
      },
      action: { vi: "0707.806.860", en: "0707.806.860" },
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MessageSquare,
      title: { vi: "Chat Trực tuyến", en: "Live Chat" },
      desc: {
        vi: "Trò chuyện trực tiếp với đội ngũ tư vấn viên của chúng tôi",
        en: "Chat directly with our consultants",
      },
      action: { vi: "Bắt đầu chat", en: "Start Chat" },
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Building2,
      title: { vi: "Tư vấn Doanh nghiệp", en: "Enterprise Consultation" },
      desc: {
        vi: "Đặt lịch tư vấn giải pháp riêng cho doanh nghiệp của bạn",
        en: "Schedule custom solution consultation for your business",
      },
      action: { vi: "Đặt lịch hẹn", en: "Schedule" },
      color: "from-purple-500 to-pink-500",
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
            {language === "vi" ? "Liên hệ với chúng tôi" : "Contact Us"}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            {language === "vi" ? "Kết nối" : "Get in"}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {language === "vi" ? "với ICS" : "Touch"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {language === "vi"
              ? "Đội ngũ ICS luôn sẵn sàng lắng nghe và hỗ trợ bạn 24/7"
              : "ICS team is always ready to listen and support you 24/7"}
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 h-11 px-8 text-base font-semibold"
          >
            <a href="https://icss.com.vn/gioi-thieu" target="_blank" rel="noopener noreferrer">
              {language === "vi" ? "Về chúng tôi" : "About Us"}
            </a>
          </Button>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div>
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                      <Send className="w-5 h-5 text-primary-foreground" />
                    </div>
                    {language === "vi" ? "Gửi tin nhắn cho chúng tôi" : "Send us a Message"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          {language === "vi" ? "Họ và tên" : "Full Name"} *
                        </Label>
                        <Input
                          id="name"
                          placeholder={language === "vi" ? "Nguyễn Văn A" : "John Doe"}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-secondary border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="example@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-secondary border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground">
                          {language === "vi" ? "Số điện thoại" : "Phone"}
                        </Label>
                        <Input
                          id="phone"
                          placeholder="0912 345 678"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-secondary border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-foreground">
                          {language === "vi" ? "Công ty" : "Company"}
                        </Label>
                        <Input
                          id="company"
                          placeholder={language === "vi" ? "Tên công ty của bạn" : "Your company name"}
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="bg-secondary border-border focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground">
                        {language === "vi" ? "Tiêu đề" : "Subject"} *
                      </Label>
                      <Input
                        id="subject"
                        placeholder={language === "vi" ? "Nội dung cần hỗ trợ" : "What can we help you with?"}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="bg-secondary border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        {language === "vi" ? "Nội dung tin nhắn" : "Message"} *
                      </Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder={
                          language === "vi" ? "Mô tả chi tiết yêu cầu của bạn..." : "Describe your request in detail..."
                        }
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="bg-secondary border-border focus:border-primary resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 h-12 text-base font-semibold"
                    >
                      {language === "vi" ? "Gửi tin nhắn" : "Send Message"}
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      {language === "vi"
                        ? "Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc"
                        : "We will respond within 24 business hours"}
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Contact Info & Support Channels */}
            <div className="space-y-8">
              {/* Contact Information Card */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    {language === "vi" ? "Thông tin Liên hệ" : "Contact Information"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-sm mb-1">{info.title[language]}</h3>
                        <p className="text-muted-foreground text-sm whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  ))}

                  {/* Social Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      {language === "vi" ? "Theo dõi:" : "Follow us:"}
                    </span>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-9 h-9 rounded-full border-border hover:border-primary hover:bg-primary/10 bg-transparent"
                      >
                        <Facebook className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-9 h-9 rounded-full border-border hover:border-primary hover:bg-primary/10 bg-transparent"
                      >
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-9 h-9 rounded-full border-border hover:border-primary hover:bg-primary/10 bg-transparent"
                      >
                        <Globe className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>


            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {language === "vi" ? "Vị trí Văn phòng" : "Office Location"}
            </h2>
            <p className="text-muted-foreground">TT3-5 Khu đô thị Đại Kim mới, Định Công, Hoàng Mai, Hà Nội</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.3022328949027!2d105.82842347471445!3d20.97632068065961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac5a5f3d1c0d%3A0x7e623c8d4e5a5c8a!2zVFQzLTUgS2h1IMSRw7QgdGjhu4sgxJDhuqFpIEtpbSBN4bubaSwgxJDhu4tuaCBDw7RuZywgSG_DoG5nIE1haSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1704067200000!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ICS Office Location"
              className="w-full"
            />
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
              asChild
            >
              <a
                href="https://www.google.com/maps/dir//TT3-5+Khu+%C4%91%C3%B4+th%E1%BB%8B+%C4%90%E1%BA%A1i+Kim+M%E1%BB%9Bi,+%C4%90%E1%BB%8Bnh+C%C3%B4ng,+Ho%C3%A0ng+Mai,+H%C3%A0+N%E1%BB%99i"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-4 h-4 mr-2" />
                {language === "vi" ? "Chỉ đường" : "Get Directions"}
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
              asChild
            >
              <a href="tel:0707806860">
                <Phone className="w-4 h-4 mr-2" />
                {language === "vi" ? "Gọi ngay" : "Call Now"}
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
              asChild
            >
              <a href="mailto:info@icss.com.vn">
                <Mail className="w-4 h-4 mr-2" />
                {language === "vi" ? "Gửi Email" : "Send Email"}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
