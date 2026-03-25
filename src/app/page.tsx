import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Shield,
  Video,
  DoorOpen,
  Users,
  Clock,
  Award,
  CheckCircle2,
  Phone,
  ArrowRight,
  Building,
  Store,
  Factory,
  Building2,
} from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: '联网报警',
    description: '24小时实时监控，快速响应报警，专业安保团队随时待命',
    features: ['实时监控', '快速响应', '专业处置'],
  },
  {
    icon: Video,
    title: '视频监控',
    description: '高清视频监控，远程实时查看，智能分析预警',
    features: ['高清画质', '远程查看', '智能预警'],
  },
  {
    icon: DoorOpen,
    title: '门禁系统',
    description: '智能门禁管理，人脸识别，访客管理一体化',
    features: ['人脸识别', '访客管理', '权限控制'],
  },
  {
    icon: Users,
    title: '巡检服务',
    description: '定期巡逻检查，隐患排查，安保人员驻场服务',
    features: ['定期巡逻', '隐患排查', '驻场服务'],
  },
];

const advantages = [
  {
    icon: Clock,
    title: '24小时值守',
    description: '全天候监控中心，专业团队轮流值守，确保安全无死角',
  },
  {
    icon: Award,
    title: '专业资质',
    description: '拥有安防工程一级资质，专业技术人员持证上岗',
  },
  {
    icon: CheckCircle2,
    title: '快速响应',
    description: '报警后5分钟内响应，城区15分钟内到达现场',
  },
  {
    icon: Users,
    title: '专业团队',
    description: '200+专业安保人员，定期培训，服务规范',
  },
];

const cases = [
  {
    icon: Building,
    title: '金融行业',
    description: '为多家银行、证券公司提供金库守护、网点安保服务',
    count: '50+',
  },
  {
    icon: Store,
    title: '商业零售',
    description: '连锁商超、珠宝店、便利店联网报警覆盖',
    count: '200+',
  },
  {
    icon: Factory,
    title: '工业制造',
    description: '工厂园区安防系统建设与运营服务',
    count: '80+',
  },
  {
    icon: Building2,
    title: '住宅社区',
    description: '高端住宅、别墅区智能安防解决方案',
    count: '100+',
  },
];

const stats = [
  { label: '服务客户', value: '2000+' },
  { label: '覆盖城市', value: '50+' },
  { label: '专业团队', value: '200+' },
  { label: '服务年限', value: '15年' },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              专业联网报警运营服务
              <br />
              <span className="text-blue-300">守护您的生命财产安全</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              24小时实时监控，快速响应报警，专业团队处置
              <br />
              为您提供全方位的安防解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-base px-8">
                <Phone className="mr-2 h-5 w-5" />
                立即咨询：0371-68891110
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base px-8">
                了解更多
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              核心服务
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              提供从安防咨询、方案设计、设备安装到运营管理的一站式服务
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <service.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                查看所有服务
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              为什么选择我们
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              15年专业安防经验，为2000+客户提供安全保障
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              成功案例
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              服务覆盖金融、零售、制造、地产等多个行业
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cases.map((caseItem, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <caseItem.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {caseItem.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {caseItem.description}
                  </p>
                  <div className="text-2xl font-bold text-blue-600">
                    {caseItem.count}
                    <span className="text-sm font-normal text-gray-500 ml-1">客户</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/cases">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                查看更多案例
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            立即开启专业安防服务
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            免费上门评估，专业方案设计，快速安装部署
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-base px-8">
              <Phone className="mr-2 h-5 w-5" />
              0371-68891110
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base px-8">
                在线咨询
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
