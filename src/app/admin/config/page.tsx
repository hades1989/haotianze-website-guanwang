'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Loader2, Save, CheckCircle2, Clock, Upload, X } from 'lucide-react';

interface ContactConfig {
  email: string;
  phone: string;
  address: string;
  businessHours: string;
  qrcode: string;
  updatedAt: string;
}

export default function ConfigPage() {
  const [config, setConfig] = useState<ContactConfig>({
    email: '',
    phone: '',
    address: '',
    businessHours: '',
    qrcode: '',
    updatedAt: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    try {
      const response = await fetch('/api/config');
      const data = await response.json();
      setConfig(data);
    } catch (error) {
      setMessage({ type: 'error', text: '加载配置失败' });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      const response = await fetch('/api/config', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: config.email,
          phone: config.phone,
          address: config.address,
          businessHours: config.businessHours,
          qrcode: config.qrcode,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: '配置保存成功！' });
        setConfig(data.config);
      } else {
        setMessage({ type: 'error', text: data.error || '保存失败' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: '保存失败，请稍后重试' });
    } finally {
      setSaving(false);
    }
  };

  const handleUploadQrcode = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setMessage(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', 'qrcode');

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setConfig({ ...config, qrcode: data.imageUrl });
        setMessage({ type: 'success', text: '二维码上传成功！' });
      } else {
        setMessage({ type: 'error', text: data.error || '上传失败' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: '上传失败，请稍后重试' });
    } finally {
      setUploading(false);
      // 清空文件输入
      e.target.value = '';
    }
  };

  const handleRemoveQrcode = () => {
    setConfig({ ...config, qrcode: '' });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">联系信息配置</h1>
          <p className="text-gray-600">更新网站的联系方式信息</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>编辑联系信息</CardTitle>
            <CardDescription>
              这些信息将显示在网站的联系我们页面
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">电子邮箱</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="请输入邮箱地址"
                    value={config.email}
                    onChange={(e) => setConfig({ ...config, email: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">联系电话</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="请输入联系电话"
                    value={config.phone}
                    onChange={(e) => setConfig({ ...config, phone: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <Label htmlFor="address">公司地址</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Textarea
                    id="address"
                    placeholder="请输入公司地址"
                    value={config.address}
                    onChange={(e) => setConfig({ ...config, address: e.target.value })}
                    className="pl-10 min-h-[100px]"
                    required
                  />
                </div>
              </div>

              {/* Business Hours */}
              <div className="space-y-2">
                <Label htmlFor="businessHours">营业时间</Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Textarea
                    id="businessHours"
                    placeholder="请输入营业时间（每行一条）"
                    value={config.businessHours}
                    onChange={(e) => setConfig({ ...config, businessHours: e.target.value })}
                    className="pl-10 min-h-[80px]"
                  />
                </div>
                <p className="text-sm text-gray-500">每行一条，例如：周一至周五：9:00 - 18:00</p>
              </div>

              {/* QR Code Upload */}
              <div className="space-y-2">
                <Label htmlFor="qrcode">企业微信二维码</Label>
                {config.qrcode ? (
                  <div className="flex items-start gap-4 p-4 border rounded-lg bg-gray-50">
                    <img
                      src={config.qrcode}
                      alt="二维码"
                      className="w-32 h-32 object-contain rounded"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 mb-2">已上传二维码</p>
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        onClick={handleRemoveQrcode}
                      >
                        <X className="mr-2 h-4 w-4" />
                        删除二维码
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 mb-3">点击上传二维码图片</p>
                    <Input
                      id="qrcode"
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      onChange={handleUploadQrcode}
                      disabled={uploading}
                      className="cursor-pointer"
                    />
                    <p className="text-xs text-gray-500 mt-2">支持 JPG、PNG、WEBP 格式，最大 5MB</p>
                  </div>
                )}
                {uploading && (
                  <p className="text-sm text-blue-600 flex items-center">
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    上传中...
                  </p>
                )}
              </div>

              {/* Message */}
              {message && (
                <div
                  className={`p-4 rounded-lg flex items-start gap-2 ${
                    message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                  }`}
                >
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{message.text}</span>
                </div>
              )}

              {/* Last Updated */}
              {config.updatedAt && (
                <p className="text-sm text-gray-500">
                  最后更新: {new Date(config.updatedAt).toLocaleString('zh-CN')}
                </p>
              )}

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                disabled={saving}
              >
                {saving ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    保存中...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-5 w-5" />
                    保存配置
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
