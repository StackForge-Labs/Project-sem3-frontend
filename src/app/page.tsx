import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/common/ui/button";
import { ThemeToggle } from "@/components/common/theme-toggle";

export default function HomePage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-indigo-600">
                <span className="text-lg font-bold text-white">N</span>
              </div>
              <span className="text-lg font-semibold text-slate-900 dark:text-white">
                NextApp
              </span>
            </div>
            <nav className="hidden gap-8 md:flex">
              <Link
                href="/"
                className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Trang chủ
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Giới thiệu
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Liên hệ
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Đăng nhập
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              Mới ra mắt
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-slate-900 dark:text-white md:text-6xl">
              Xây dựng sản phẩm
              <br />
              <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                nhanh hơn, tốt hơn
              </span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-gray-400">
              Nền tảng giúp bạn tập trung vào những gì quan trọng nhất. Đơn
              giản, hiệu quả và dễ sử dụng cho mọi dự án.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Bắt đầu ngay →
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-600 dark:border-gray-600 dark:text-gray-300"
              >
                Xem demo
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-r from-blue-100 to-indigo-100 opacity-50 blur-2xl dark:from-blue-900 dark:to-indigo-900" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                alt="Dashboard preview"
                width={800}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-slate-200 bg-white py-20 md:py-24 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              Tính năng nổi bật
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-400">
              Mọi thứ bạn cần để bắt đầu
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "⚡",
                title: "Nhanh chóng",
                desc: "Triển khai trong vài phút với hiệu suất tối ưu",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: "🔒",
                title: "An toàn",
                desc: "Bảo mật cấp doanh nghiệp với mã hóa end-to-end",
                color: "from-emerald-500 to-teal-500",
              },
              {
                icon: "🎨",
                title: "Linh hoạt",
                desc: "Tùy chỉnh theo nhu cầu với API mạnh mẽ",
                color: "from-violet-500 to-purple-500",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-slate-200 bg-linear-to-br from-slate-50 to-white p-8 transition-all hover:border-slate-300 hover:shadow-lg dark:border-gray-700 dark:from-gray-800 dark:to-gray-900 dark:hover:border-gray-600"
              >
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br ${feature.color} text-3xl shadow-lg`}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { value: "10K+", label: "Người dùng tin tưởng", icon: "👥" },
              { value: "99.9%", label: "Thời gian hoạt động", icon: "⚡" },
              { value: "24/7", label: "Hỗ trợ khách hàng", icon: "💬" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="mb-3 text-4xl">{stat.icon}</div>
                <div className="mb-2 text-4xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-slate-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-slate-200 bg-linear-to-br from-blue-600 to-indigo-600 py-20 md:py-24 dark:border-gray-800">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Sẵn sàng bắt đầu?
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            Tham gia cùng hàng nghìn người dùng đang sử dụng sản phẩm của chúng
            tôi
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Dùng thử miễn phí →
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-indigo-600">
                  <span className="text-sm font-bold text-white">N</span>
                </div>
                <span className="text-lg font-semibold text-slate-900 dark:text-white">
                  NextApp
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-gray-400">
                Xây dựng sản phẩm tốt hơn mỗi ngày
              </p>
            </div>
            {[
              { title: "Sản phẩm", links: ["Tính năng", "Giá cả", "Bảo mật"] },
              {
                title: "Công ty",
                links: ["Về chúng tôi", "Blog", "Tuyển dụng"],
              },
              { title: "Hỗ trợ", links: ["Trợ giúp", "Liên hệ", "Điều khoản"] },
            ].map((col, i) => (
              <div key={i}>
                <div className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
                  {col.title}
                </div>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href="/"
                        className="text-sm text-slate-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-600 dark:border-gray-800 dark:text-gray-400">
            © 2024 NextApp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
