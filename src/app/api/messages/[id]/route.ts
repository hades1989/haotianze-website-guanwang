import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const MESSAGES_PATH = path.join(process.cwd(), 'data', 'messages.json');

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    if (!status || !['unread', 'read', 'replied'].includes(status)) {
      return NextResponse.json(
        { error: '无效的状态值' },
        { status: 400 }
      );
    }

    // 读取现有留言
    const data = await fs.readFile(MESSAGES_PATH, 'utf-8');
    const messages = JSON.parse(data);

    // 找到并更新留言
    const messageIndex = messages.findIndex((msg: any) => msg.id === id);
    if (messageIndex === -1) {
      return NextResponse.json(
        { error: '留言不存在' },
        { status: 404 }
      );
    }

    messages[messageIndex].status = status;

    // 保存更新
    await fs.writeFile(MESSAGES_PATH, JSON.stringify(messages, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: '状态更新成功',
    });
  } catch (error) {
    console.error('Update message status error:', error);
    return NextResponse.json(
      { error: '状态更新失败' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // 读取现有留言
    const data = await fs.readFile(MESSAGES_PATH, 'utf-8');
    let messages = JSON.parse(data);

    // 删除留言
    messages = messages.filter((msg: any) => msg.id !== id);

    // 保存更新
    await fs.writeFile(MESSAGES_PATH, JSON.stringify(messages, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: '留言删除成功',
    });
  } catch (error) {
    console.error('Delete message error:', error);
    return NextResponse.json(
      { error: '留言删除失败' },
      { status: 500 }
    );
  }
}
