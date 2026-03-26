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
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600',
  },
  {
    icon: Video,
    title: '视频监控',
    description: '高清视频监控，远程实时查看，智能分析预警',
    features: ['高清画质', '远程查看', '智能预警'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-600',
  },
  {
    icon: DoorOpen,
    title: '门禁系统',
    description: '智能门禁管理，人脸识别，访客管理一体化',
    features: ['人脸识别', '访客管理', '权限控制'],
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-100',
    textColor: 'text-cyan-600',
  },
  {
    icon: Users,
    title: '巡检服务',
    description: '定期巡逻检查，隐患排查，安保人员驻场服务',
    features: ['定期巡逻', '隐患排查', '驻场服务'],
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-100',
    textColor: 'text-emerald-600',
  },
];

const advantages = [
  {
    icon: Clock,
    title: '24小时值守',
    description: '全天候监控中心，专业团队轮流值守，确保安全无死角',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Award,
    title: '专业资质',
    description: '拥有安防工程一级资质，专业技术人员持证上岗',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: CheckCircle2,
    title: '快速响应',
    description: '报警后5分钟内响应，城区15分钟内到达现场',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Users,
    title: '专业团队',
    description: '200+专业安保人员，定期培训，服务规范',
    color: 'from-emerald-500 to-emerald-600',
  },
];

const cases = [
  {
    icon: Building,
    title: '金融行业',
    description: '为多家银行、证券公司提供金库守护、网点安保服务',
    count: '50+',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: Store,
    title: '商业零售',
    description: '连锁商超、珠宝店、便利店联网报警覆盖',
    count: '200+',
    color: 'from-rose-400 to-pink-500',
  },
  {
    icon: Factory,
    title: '工业制造',
    description: '工厂园区安防系统建设与运营服务',
    count: '80+',
    color: 'from-emerald-400 to-green-500',
  },
  {
    icon: Building2,
    title: '住宅社区',
    description: '高端住宅、别墅区智能安防解决方案',
    count: '100+',
    color: 'from-violet-400 to-purple-500',
  },
];

const stats = [
  { label: '服务客户', value: '2000+', color: 'from-blue-500 to-blue-600' },
  { label: '覆盖城市', value: '50+', color: 'from-purple-500 to-purple-600' },
  { label: '专业团队', value: '200+', color: 'from-cyan-500 to-cyan-600' },
  { label: '服务年限', value: '15年', color: 'from-emerald-500 to-emerald-600' },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        {/* Gradient blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
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
      <section className="py-12 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 transform group-hover:scale-110 transition-transform`}>
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
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
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:bg-gradient-to-br ${service.color} transition-all duration-300`}>
                    <service.icon className={`h-7 w-7 ${service.textColor} group-hover:text-white transition-colors`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 ${service.bgColor} ${service.textColor} text-xs rounded-full font-medium`}
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
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${advantage.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
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
              <Card key={index} className="border-0 shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${caseItem.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                    <caseItem.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all">
                    {caseItem.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {caseItem.description}
                  </p>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${caseItem.color} bg-clip-text text-transparent`}>
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
      <section className="py-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            立即开启专业安防服务
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            免费上门评估，专业方案设计，快速安装部署
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 text-base px-8 shadow-lg">
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
