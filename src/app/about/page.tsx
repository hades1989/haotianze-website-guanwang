'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Shield,
  Award,
  Users,
  Target,
  History,
  CheckCircle2,
  Phone,
  Building,
} from 'lucide-react';

interface Milestone {
  year: string;
  event: string;
}

interface Honor {
  title: string;
  description: string;
}

interface AboutConfig {
  milestones: Milestone[];
  honors: Honor[];
}

const team = [
  {
    title: '管理层',
    count: '15人',
    desc: '平均行业经验15年以上',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: '技术团队',
    count: '50人',
    desc: '持证上岗工程师',
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: '安保团队',
    count: '150人',
    desc: '专业培训安保人员',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    title: '客服团队',
    count: '20人',
    desc: '7×24小时服务',
    color: 'from-emerald-500 to-emerald-600',
  },
];

export default function AboutPage() {
  const [config, setConfig] = useState<AboutConfig>({
    milestones: [],
    honors: [],
  });

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    try {
      const response = await fetch('/api/about');
      const data = await response.json();
      setConfig(data);
    } catch (error) {
      console.error('Failed to load about config:', error);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              关于皓天泽
            </h1>
            <p className="text-xl text-purple-100">
              15年专业安防经验，守护2000+客户安全
            </p>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                公司简介
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  郑州皓天泽数智科技有限公司是一家专业的联网报警运营服务公司。公司总部位于河南省郑州市，在全国多个城市设有服务网点。
                </p>
                <p>
                  我们专注于为金融、零售、制造、地产等行业客户提供全方位的安防解决方案，包括联网报警、视频监控、门禁系统、巡检服务等。
                </p>
                <p>
                  经过15年的发展，公司已获得安防工程一级资质、ISO9001质量管理体系认证等资质，服务客户超过2000家，在行业内享有良好声誉。
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">安防工程一级资质</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">ISO9001认证</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">AAA级信用企业</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/about/company-intro.jpg"
                  alt="皓天泽科技"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">企业使命</h3>
                <p className="text-gray-600">
                  用专业守护安全，用科技创造价值，为社会提供值得信赖的安防服务
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">企业愿景</h3>
                <p className="text-gray-600">
                  成为国内领先的安防运营服务商，让每一个客户都能享受专业的安全守护
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">核心价值观</h3>
                <p className="text-gray-600">
                  专业、诚信、创新、共赢，以客户为中心，以服务为根本
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development History */}
      <section id="history" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">发展历程</h2>
            <p className="text-gray-600">从起步到领先，15年的成长之路</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200" />
              
              {/* Timeline items */}
              <div className="space-y-8">
                {config.milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <History className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <span className="text-blue-600 font-semibold">{milestone.year}</span>
                      <p className="text-gray-700 mt-1">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honors */}
      <section id="honor" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">资质荣誉</h2>
            <p className="text-gray-600">专业资质认证，品质值得信赖</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.honors.map((honor, index) => (
              <Card key={index} className="border-0 shadow-md text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {honor.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {honor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">专业团队</h2>
            <p className="text-gray-600">200+专业人员，为您提供优质服务</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((item, index) => (
              <Card key={index} className="border-0 shadow-md text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{item.count}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{item.title}</div>
                  <div className="text-sm text-gray-500">{item.desc}</div>
                </CardContent>
              </Card>
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
            期待与您合作
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            无论您有任何安防需求，我们都将竭诚为您服务
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg">
            <Phone className="mr-2 h-5 w-5" />
            0371-68891110
          </Button>
        </div>
      </section>
    </div>
  );
}
