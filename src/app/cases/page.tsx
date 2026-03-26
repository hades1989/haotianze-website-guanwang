import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Building,
  Store,
  Factory,
  Building2,
  MapPin,
  Calendar,
  CheckCircle2,
  Phone,
  Upload,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '成功案例',
  description: '安信护卫成功服务案例，覆盖金融、零售、制造、地产等多个行业',
};

const industries = [
  { id: 'finance', name: '金融行业', icon: Building },
  { id: 'retail', name: '商业零售', icon: Store },
  { id: 'manufacture', name: '工业制造', icon: Factory },
  { id: 'realestate', name: '住宅社区', icon: Building2 },
];

const cases = [
  {
    id: 1,
    title: '某国有银行省级分行安防系统升级',
    industry: 'finance',
    location: '北京市朝阳区',
    date: '2023年',
    description: '为某国有银行省级分行提供全面的安防系统升级服务，包括联网报警、视频监控、门禁系统等，实现与总行监控中心联网。',
    services: ['联网报警', '视频监控', '门禁系统', '安保驻场'],
    highlights: [
      '覆盖50+营业网点和金库',
      '与公安110联动',
      '24小时监控中心值守',
      '连续3年零安全事故',
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: '某连锁珠宝品牌全国门店联网报警',
    industry: 'retail',
    location: '全国',
    date: '2022-2024年',
    description: '为某知名连锁珠宝品牌全国200+门店提供联网报警服务，实现统一的监控管理和应急响应。',
    services: ['联网报警', '视频监控', '紧急报警'],
    highlights: [
      '覆盖全国200+门店',
      '统一监控平台管理',
      '报警响应时间<5分钟',
      '有效阻止多起盗窃事件',
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: '某大型工业园区综合安防系统',
    industry: 'manufacture',
    location: '上海市浦东新区',
    date: '2023年',
    description: '为占地500亩的大型工业园区建设综合安防系统，包括周界报警、视频监控、门禁管理、巡更系统等。',
    services: ['周界报警', '视频监控', '门禁系统', '巡更系统'],
    highlights: [
      '园区周界全覆盖监控',
      '智能分析预警系统',
      '电子巡更管理系统',
      '安保团队驻场服务',
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: '某高端别墅社区智能安防系统',
    industry: 'realestate',
    location: '深圳市南山区',
    date: '2023年',
    description: '为高端别墅社区打造智能安防系统，实现可视对讲、人脸识别、车辆管理、智能家居联动等功能。',
    services: ['可视对讲', '人脸识别', '车辆管理', '智能家居'],
    highlights: [
      '人脸识别无感通行',
      '访客预约管理系统',
      '车辆自动识别放行',
      '业主满意度98%',
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: '某证券公司总部安防系统建设',
    industry: 'finance',
    location: '上海市陆家嘴',
    date: '2022年',
    description: '为某证券公司总部建设高等级安防系统，包括机房监控、金库守护、要员保护等特殊安防需求。',
    services: ['机房监控', '金库守护', '门禁系统', '要员保护'],
    highlights: [
      '达到银行级安防标准',
      '双重认证门禁系统',
      '机房环境实时监控',
      '专业安保团队24小时值守',
    ],
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: '某连锁便利店区域联网报警',
    industry: 'retail',
    location: '广东省广州市',
    date: '2023年',
    description: '为某连锁便利店品牌广州区域150+门店提供联网报警服务，有效降低夜间盗窃事件发生率。',
    services: ['联网报警', '视频监控', '夜间巡逻'],
    highlights: [
      '覆盖150+门店',
      '夜间盗窃事件降低90%',
      '快速出警处置',
      '保险理赔协助',
    ],
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=600&fit=crop',
  },
];

export default function CasesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              成功案例
            </h1>
            <p className="text-xl text-blue-100">
              服务2000+客户，覆盖多个行业领域
            </p>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
            <div className="flex flex-wrap gap-3">
              <Badge variant="default" className="px-4 py-2 text-sm cursor-pointer bg-blue-600">
                全部
              </Badge>
              {industries.map((industry) => (
                <Badge
                  key={industry.id}
                  variant="outline"
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-blue-50"
                >
                  <industry.icon className="h-4 w-4 mr-2" />
                  {industry.name}
                </Badge>
              ))}
            </div>
            <Link href="/admin/upload">
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                上传图片
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((caseItem) => (
              <Card key={caseItem.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-blue-600">
                      {industries.find(i => i.id === caseItem.industry)?.name}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {caseItem.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {caseItem.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {caseItem.date}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {caseItem.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseItem.services.map((service, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-1">
                    {caseItem.highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2000+</div>
              <div className="text-gray-600">服务客户</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">覆盖城市</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15年</div>
              <div className="text-gray-600">行业经验</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">客户满意度</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            想了解适合您的安防方案？
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            联系我们，获取专业顾问的一对一咨询服务
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Phone className="mr-2 h-5 w-5" />
            0371-68891110
          </Button>
        </div>
      </section>
    </div>
  );
}
