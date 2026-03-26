import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const caseId = formData.get('caseId') as string;

    if (!file) {
      return NextResponse.json(
        { error: '请选择要上传的图片' },
        { status: 400 }
      );
    }

    if (!caseId) {
      return NextResponse.json(
        { error: '请提供案例ID' },
        { status: 400 }
      );
    }

    // 验证文件类型
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: '仅支持 JPG、PNG、WEBP 格式的图片' },
        { status: 400 }
      );
    }

    // 验证文件大小（最大 5MB）
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: '图片大小不能超过 5MB' },
        { status: 400 }
      );
    }

    // 确保目标目录存在
    const uploadDir = path.join(process.cwd(), 'public', 'cases');
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // 生成文件名：案例ID_时间戳.扩展名
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // 获取文件扩展名
    const ext = file.name.split('.').pop();
    const timestamp = Date.now();
    const filename = `case_${caseId}_${timestamp}.${ext}`;
    const filepath = path.join(uploadDir, filename);

    // 保存文件
    await writeFile(filepath, buffer);

    // 返回文件的公开访问路径
    const imageUrl = `/cases/${filename}`;

    return NextResponse.json({
      success: true,
      imageUrl,
      filename,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: '图片上传失败，请稍后重试' },
      { status: 500 }
    );
  }
}
