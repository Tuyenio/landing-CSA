"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { useI18n } from "@/lib/i18n"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { language } = useI18n()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert(language === "vi" ? "Đang phát triển" : "Coming soon")
    }, 1000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border-2 border-border rounded-2xl shadow-2xl max-w-md w-full relative animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-lg transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">
              {language === "vi" ? "Đăng nhập" : "Login"}
            </h2>
            <p className="text-muted-foreground">
              {language === "vi"
                ? "Đăng nhập để quản lý tin tức và nhận thông báo bảo mật"
                : "Login to manage news and receive security alerts"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {language === "vi" ? "Email" : "Email"}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === "vi" ? "nhập email" : "enter email"}
                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background hover:border-primary/30 focus:border-primary outline-none transition-colors"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {language === "vi" ? "Mật khẩu" : "Password"}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={language === "vi" ? "nhập mật khẩu" : "enter password"}
                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background hover:border-primary/30 focus:border-primary outline-none transition-colors"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 mt-6"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {language === "vi" ? "Đang đăng nhập..." : "Logging in..."}
                </span>
              ) : (
                language === "vi" ? "Đăng nhập" : "Login"
              )}
            </button>
          </form>

          {/* Forgot Password Link */}
          <div className="mt-4 text-center">
            <a
              href="#"
              className="text-sm text-primary hover:underline"
            >
              {language === "vi" ? "Quên mật khẩu?" : "Forgot password?"}
            </a>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-muted-foreground">
                {language === "vi" ? "hoặc" : "or"}
              </span>
            </div>
          </div>

          {/* Info Text */}
          <p className="text-sm text-muted-foreground text-center">
            {language === "vi"
              ? "Liên hệ với chúng tôi để tạo tài khoản"
              : "Contact us to create an account"}
          </p>
          <a
            href="/contact"
            className="w-full mt-3 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors text-center block"
          >
            {language === "vi" ? "Liên hệ" : "Contact"}
          </a>
        </div>
      </div>
    </div>
  )
}
