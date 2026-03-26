import Link from 'next/link';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  services: [
    { name: '联网报警', href: '/services#alarm' },
    { name: '视频监控', href: '/services#monitor' },
    { name: '门禁系统', href: '/services#access' },
    { name: '巡检服务', href: '/services#patrol' },
  ],
  company: [
    { name: '公司介绍', href: '/about' },
    { name: '成功案例', href: '/cases' },
    { name: '资质荣誉', href: '/about#honor' },
    { name: '联系我们', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">皓天泽</span>
                <span className="text-xs text-gray-400">专业联网报警服务</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              郑州皓天泽数智科技有限公司是一家专业的联网报警运营服务公司，致力于为客户提供全方位的安防解决方案，保障您的生命财产安全。
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-4">服务项目</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold mb-4">关于我们</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold mb-4">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-400">
                <Phone className="h-4 w-4 mr-3 text-blue-500" />
                0371-68891110
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Mail className="h-4 w-4 mr-3 text-blue-500" />
                service@anxin.com
              </li>
              <li className="flex items-start text-sm text-gray-400">
                <MapPin className="h-4 w-4 mr-3 text-blue-500 mt-0.5" />
                <span>河南省郑州市高新技术产业开发区<br/>翠竹街1号107幢1单元5楼</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 郑州皓天泽数智科技有限公司 版权所有
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 items-center">
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              隐私政策
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              服务条款
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              京ICP备XXXXXXXX号
            </Link>
            <Link href="/admin/login" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              管理员登录
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
