import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const MESSAGES_PATH = path.join(process.cwd(), 'data', 'messages.json');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, company, email, service, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: '请填写必要信息' },
        { status: 400 }
      );
    }

    // 读取现有留言
    let messages = [];
    try {
      const data = await fs.readFile(MESSAGES_PATH, 'utf-8');
      messages = JSON.parse(data);
    } catch (error) {
      // 文件不存在，使用空数组
    }

    // 创建新留言
    const newMessage = {
      id: Date.now().toString(),
      name,
      phone,
      company: company || '',
      email: email || '',
      service: service || '',
      message,
      status: 'unread', // unread, read, replied
      createdAt: new Date().toISOString(),
    };

    // 添加到留言列表
    messages.unshift(newMessage);

    // 保存留言
    await fs.writeFile(MESSAGES_PATH, JSON.stringify(messages, null,2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: '留言提交成功',
    });
  } catch (error) {
    console.error('Save message error:', error);
    return NextResponse.json(
      { error: '留言提交失败' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const data = await fs.readFile(MESSAGES_PATH, 'utf-8');
    const messages = JSON.parse(data);
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json([]);
  }
}
