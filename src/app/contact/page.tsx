'use client';

import { useState } from 'react';
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

export default function ContactPage() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        company: '',
        email: '',
        service: '',
        message: '',
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
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
                      <p className="text-2xl font-bold text-blue-600">0371-68891110</p>
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
                      <p className="text-lg text-gray-700">service@anxin.com</p>
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
                      <p className="text-gray-700">河南省郑州市高新技术产业开发区</p>
                      <p className="text-gray-700">翠竹街1号107幢1单元5楼</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">营业时间</h3>
                      <p className="text-gray-700">周一至周五：9:00 - 18:00</p>
                      <p className="text-gray-700">周六日：10:00 - 16:00</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Contact */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">快速咨询</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  扫描下方二维码，添加企业微信客服，获取一对一专业咨询服务
                </p>
                <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center border">
                  <span className="text-gray-400 text-sm text-center">二维码<br/>占位图</span>
                </div>
              </div>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">公司位置</h2>
            <p className="text-gray-600">河南省郑州市高新技术产业开发区翠竹街1号107幢1单元5楼</p>
          </div>
          <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Building className="h-16 w-16 mx-auto mb-4" />
              <p>地图加载中...</p>
              <p className="text-sm">实际项目中可集成百度地图/高德地图</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
