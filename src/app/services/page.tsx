import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Shield,
  Video,
  DoorOpen,
  Users,
  CheckCircle2,
  Phone,
  Clock,
  AlertTriangle,
  Monitor,
  Key,
  FileText,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '服务项目',
  description: '安信护卫提供联网报警、视频监控、门禁系统、巡检服务等全方位安防解决方案',
};

const services = [
  {
    id: 'alarm',
    icon: Shield,
    title: '联网报警服务',
    subtitle: '24小时实时监控，快速响应处置',
    description: '通过专业的报警主机和探测器，实现对防护区域的实时监控。一旦发生警情，系统自动报警至监控中心，专业安保团队快速响应处置。',
    features: [
      '红外探测器、门磁、玻璃破碎探测器等多类型探测设备',
      '24小时监控中心值守，警情实时处理',
      '报警后5分钟内响应，城区15分钟内到达现场',
      '与公安110联动，确保第一时间处置',
      '定期设备巡检维护，确保系统稳定运行',
    ],
    benefits: [
      { icon: Clock, title: '24小时值守', desc: '全天候监控中心' },
      { icon: AlertTriangle, title: '快速响应', desc: '5分钟内响应' },
      { icon: CheckCircle2, title: '专业处置', desc: '培训持证上岗' },
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    id: 'monitor',
    icon: Video,
    title: '视频监控服务',
    subtitle: '高清画质，远程实时查看',
    description: '采用高清网络摄像机，实现全天候视频监控。支持远程实时查看、录像回放、智能分析预警等功能，让您随时随地掌握安全动态。',
    features: [
      '200万-800万像素高清网络摄像机',
      '支持手机APP、电脑远程实时查看',
      '智能移动侦测、人脸识别、越界报警',
      '云端存储与本地存储双备份',
      '录像保存30天以上，支持快速检索回放',
    ],
    benefits: [
      { icon: Monitor, title: '高清画质', desc: '800万像素' },
      { icon: Video, title: '远程查看', desc: '随时随地' },
      { icon: AlertTriangle, title: '智能预警', desc: '主动防范' },
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    id: 'access',
    icon: DoorOpen,
    title: '门禁系统服务',
    subtitle: '智能门禁管理，访客一体化',
    description: '提供人脸识别、指纹、刷卡等多种开门方式，实现人员进出的有效管控。支持访客预约、临时授权、考勤管理等功能。',
    features: [
      '人脸识别、指纹、刷卡、密码多种开门方式',
      '访客预约登记，临时授权管理',
      '人员进出记录实时上传，可追溯查询',
      '与视频监控联动，进出抓拍留证',
      '支持考勤、就餐等一卡通应用',
    ],
    benefits: [
      { icon: Key, title: '多种认证', desc: '人脸/指纹/刷卡' },
      { icon: Users, title: '访客管理', desc: '预约授权' },
      { icon: FileText, title: '记录查询', desc: '可追溯' },
    ],
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-100',
  },
  {
    id: 'patrol',
    icon: Users,
    title: '巡检安保服务',
    subtitle: '定期巡逻检查，隐患排查',
    description: '提供专业的安保人员驻场服务和定期巡逻检查服务。包括门岗值守、巡逻检查、隐患排查、应急处理等，全方位保障客户安全。',
    features: [
      '专业安保人员驻场服务',
      '24小时门岗值守，人员车辆出入管理',
      '定期巡逻检查，电子巡更系统记录',
      '安全隐患排查，及时整改建议',
      '突发事件应急处理，消防设施检查维护',
    ],
    benefits: [
      { icon: Users, title: '专业团队', desc: '持证上岗' },
      { icon: CheckCircle2, title: '隐患排查', desc: '定期检查' },
      { icon: Clock, title: '应急响应', desc: '快速处置' },
    ],
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-100',
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              专业安防服务
            </h1>
            <p className="text-xl text-purple-100">
              从方案设计到运营维护，一站式安防解决方案
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image/Icon Side */}
                  <div className="w-full lg:w-2/5">
                    <div className={`aspect-video rounded-2xl bg-gradient-to-br ${service.bgColor} to-white flex items-center justify-center shadow-lg`}>
                      <service.icon className={`h-32 w-32 text-transparent bg-clip-text bg-gradient-to-br ${service.color}`} />
                    </div>
                  </div>
                  
                  {/* Content Side */}
                  <div className="w-full lg:w-3/5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all">
                          {service.title}
                        </h2>
                        <p className="text-purple-600 font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">服务特点</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Benefits */}
                    <div className="grid grid-cols-3 gap-4">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="text-center p-3 bg-gray-50 rounded-lg">
                          <benefit.icon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                          <div className="text-sm font-medium text-gray-900">{benefit.title}</div>
                          <div className="text-xs text-gray-500">{benefit.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-4">
            需要定制化的安防方案？
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            我们的专业顾问将根据您的实际需求，提供最适合的安防解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg">
              <Phone className="mr-2 h-5 w-5" />
              0371-68891110
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              在线咨询
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
