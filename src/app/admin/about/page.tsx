'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Save, CheckCircle2, Plus, Trash2, History, Award } from 'lucide-react';

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
  updatedAt: string;
}

export default function AboutConfigPage() {
  const [config, setConfig] = useState<AboutConfig>({
    milestones: [],
    honors: [],
    updatedAt: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    try {
      const response = await fetch('/api/about');
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
      const response = await fetch('/api/about', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          milestones: config.milestones,
          honors: config.honors,
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

  const addMilestone = () => {
    setConfig({
      ...config,
      milestones: [...config.milestones, { year: '', event: '' }],
    });
  };

  const updateMilestone = (index: number, field: 'year' | 'event', value: string) => {
    const newMilestones = [...config.milestones];
    newMilestones[index][field] = value;
    setConfig({ ...config, milestones: newMilestones });
  };

  const removeMilestone = (index: number) => {
    setConfig({
      ...config,
      milestones: config.milestones.filter((_, i) => i !== index),
    });
  };

  const addHonor = () => {
    setConfig({
      ...config,
      honors: [...config.honors, { title: '', description: '' }],
    });
  };

  const updateHonor = (index: number, field: 'title' | 'description', value: string) => {
    const newHonors = [...config.honors];
    newHonors[index][field] = value;
    setConfig({ ...config, honors: newHonors });
  };

  const removeHonor = (index: number) => {
    setConfig({
      ...config,
      honors: config.honors.filter((_, i) => i !== index),
    });
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
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">关于我们配置</h1>
          <p className="text-gray-600">管理公司发展历程和资质荣誉信息</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Milestones */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5" />
                发展历程
              </CardTitle>
              <CardDescription>
                记录公司发展历程中的重要里程碑事件
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {config.milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-1 space-y-2">
                      <div>
                        <Label htmlFor={`milestone-year-${index}`}>年份</Label>
                        <Input
                          id={`milestone-year-${index}`}
                          placeholder="如：2009"
                          value={milestone.year}
                          onChange={(e) => updateMilestone(index, 'year', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor={`milestone-event-${index}`}>事件描述</Label>
                        <Input
                          id={`milestone-event-${index}`}
                          placeholder="如：公司成立"
                          value={milestone.event}
                          onChange={(e) => updateMilestone(index, 'event', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    {config.milestones.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeMilestone(index)}
                        className="mt-6 text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={addMilestone}
                  className="w-full"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  添加里程碑
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Honors */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                资质荣誉
              </CardTitle>
              <CardDescription>
                展示公司获得的资质认证和荣誉奖项
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {config.honors.map((honor, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-1 space-y-2">
                      <div>
                        <Label htmlFor={`honor-title-${index}`}>荣誉名称</Label>
                        <Input
                          id={`honor-title-${index}`}
                          placeholder="如：安防工程一级资质"
                          value={honor.title}
                          onChange={(e) => updateHonor(index, 'title', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor={`honor-desc-${index}`}>描述说明</Label>
                        <Input
                          id={`honor-desc-${index}`}
                          placeholder="简要描述该荣誉"
                          value={honor.description}
                          onChange={(e) => updateHonor(index, 'description', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    {config.honors.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeHonor(index)}
                        className="mt-6 text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={addHonor}
                  className="w-full"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  添加荣誉
                </Button>
              </div>
            </CardContent>
          </Card>

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
      </div>
    </div>
  );
}
