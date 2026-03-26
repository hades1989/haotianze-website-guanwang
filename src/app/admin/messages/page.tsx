'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  Building,
  Calendar,
  MessageSquare,
  Trash2,
  Check,
  Eye,
  Loader2,
  RefreshCw,
} from 'lucide-react';

interface Message {
  id: string;
  name: string;
  phone: string;
  company?: string;
  email?: string;
  service?: string;
  message: string;
  status: 'unread' | 'read' | 'replied';
  createdAt: string;
}

const statusConfig = {
  unread: { label: '未读', color: 'bg-blue-100 text-blue-700' },
  read: { label: '已读', color: 'bg-gray-100 text-gray-700' },
  replied: { label: '已回复', color: 'bg-green-100 text-green-700' },
};

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Failed to load messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    setUpdating(id);
    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        await loadMessages();
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    } finally {
      setUpdating(null);
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm('确定要删除这条留言吗？')) return;

    setDeleting(id);
    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await loadMessages();
      }
    } catch (error) {
      console.error('Failed to delete message:', error);
    } finally {
      setDeleting(null);
    }
  };

  const getStatusBadge = (status: string) => {
    const config = statusConfig[status as keyof typeof statusConfig];
    return (
      <Badge className={config.color}>
        {config.label}
      </Badge>
    );
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
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">用户留言</h1>
            <p className="text-gray-600">查看和管理网站用户的留言</p>
          </div>
          <Button
            variant="outline"
            onClick={loadMessages}
            disabled={loading}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            刷新
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600 font-medium">未读留言</p>
                  <p className="text-3xl font-bold text-blue-700">
                    {messages.filter(m => m.status === 'unread').length}
                  </p>
                </div>
                <Mail className="h-8 w-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-2 border-purple-200 bg-purple-50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-600 font-medium">已读留言</p>
                  <p className="text-3xl font-bold text-purple-700">
                    {messages.filter(m => m.status === 'read').length}
                  </p>
                </div>
                <Eye className="h-8 w-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-2 border-green-200 bg-green-50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 font-medium">已回复</p>
                  <p className="text-3xl font-bold text-green-700">
                    {messages.filter(m => m.status === 'replied').length}
                  </p>
                </div>
                <Check className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Messages List */}
        {messages.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <MessageSquare className="h-16 w-16 mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500 text-lg">暂无留言</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <Card key={message.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    {/* Left: Content */}
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {message.name}
                        </h3>
                        {getStatusBadge(message.status)}
                      </div>

                      {/* Contact Info */}
                      <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          {message.phone}
                        </div>
                        {message.email && (
                          <div className="flex items-center gap-1">
                            <Mail className="h-4 w-4" />
                            {message.email}
                          </div>
                        )}
                        {message.company && (
                          <div className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            {message.company}
                          </div>
                        )}
                        {message.service && (
                          <Badge variant="outline" className="text-xs">
                            {message.service}
                          </Badge>
                        )}
                      </div>

                      {/* Date */}
                      <div className="flex items-center gap-1 text-xs text-gray-400 mb-3">
                        <Calendar className="h-3 w-3" />
                        {new Date(message.createdAt).toLocaleString('zh-CN')}
                      </div>

                      {/* Message */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700">{message.message}</p>
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex flex-col gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateStatus(message.id, 'read')}
                        disabled={updating === message.id}
                        title="标记为已读"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateStatus(message.id, 'replied')}
                        disabled={updating === message.id}
                        title="标记为已回复"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => deleteMessage(message.id)}
                        disabled={deleting === message.id}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        title="删除"
                      >
                        {deleting === message.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
