'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building,
} from 'lucide-react';

interface ContactConfig {
  email: string;
  phone: string;
  address: string;
  businessHours: string;
  qrcode: string;
}

export default function ContactPage() {
  const [config, setConfig] = useState<ContactConfig>({
    email: 'service@anxin.com',
    phone: '0371-68891110',
    address: '河南省郑州市高新技术产业开发区翠竹街1号107幢1单元5楼',
    businessHours: '周一至周五：9:00 - 18:00\n周六日：10:00 - 16:00',
    qrcode: '',
  });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    try {
      const response = await fetch('/api/config');
      const data = await response.json();
      setConfig(data);
    } catch (error) {
      console.error('Failed to load config:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          company: '',
          email: '',
          service: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
              联系我们
            </h1>
            <p className="text-xl text-purple-100">
              我们随时准备为您提供专业的安防咨询服务
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                联系方式
              </h2>
              
              <div className="space-y-6">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">服务热线</h3>
                      <p className="text-2xl font-bold text-blue-600">{config.phone}</p>
                      <p className="text-sm text-gray-500 mt-1">7×24小时服务</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">电子邮箱</h3>
                      <p className="text-lg text-gray-700">{config.email}</p>
                      <p className="text-sm text-gray-500 mt-1">商务合作咨询</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">公司地址</h3>
                      {config.address.split('\n').map((line, index) => (
                        <p key={index} className="text-gray-700">{line}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">营业时间</h3>
                      {config.businessHours.split('\n').map((line, index) => (
                        <p key={index} className="text-gray-700">{line}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Contact */}
              {config.qrcode && (
                <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="h-6 w-6 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">快速咨询</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    扫描下方二维码，添加企业微信客服，获取一对一专业咨询服务
                  </p>
                  <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center border shadow-sm">
                    <img src={config.qrcode} alt="企业微信二维码" className="w-full h-full object-contain rounded-lg" />
                  </div>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                在线留言
              </h2>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">姓名 *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="请输入您的姓名"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">联系电话 *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="请输入联系电话"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">公司名称</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="请输入公司名称"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">电子邮箱</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="请输入电子邮箱"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">咨询服务</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">请选择咨询服务</option>
                        <option value="alarm">联网报警</option>
                        <option value="monitor">视频监控</option>
                        <option value="access">门禁系统</option>
                        <option value="patrol">巡检服务</option>
                        <option value="other">其他服务</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">留言内容 *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="请简要描述您的需求..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                        提交成功！我们的工作人员将在24小时内与您联系。
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                        提交失败，请稍后重试或直接拨打服务热线。
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        '提交中...'
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          提交留言
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">公司位置</h2>
            <p className="text-gray-600">{config.address.replace('\n', ' ')}</p>
          </div>
          <div className="aspect-video bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <iframe
              src="https://uri.amap.com/marker?position=113.537000,34.820000&name=皓天泽科技&coordinate=wgs84&callnative=1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="公司位置地图"
            ></iframe>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://uri.amap.com/navigation?to=113.537000,34.820000,皓天泽科技&mode=car&coordinate=wgs84&callnative=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
            >
              <MapPin className="h-5 w-5 mr-2" />
              高德地图导航
            </a>
            <a
              href="https://api.map.baidu.com/marker?location=34.820000,113.537000&title=皓天泽科技&content=河南省郑州市高新技术产业开发区翠竹街1号107幢1单元5楼&output=html&src=webapp.lbsapi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-lg hover:from-emerald-700 hover:to-cyan-700 transition-all shadow-md hover:shadow-lg"
            >
              <Building className="h-5 w-5 mr-2" />
              百度地图导航
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
