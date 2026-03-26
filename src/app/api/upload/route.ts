import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const type = formData.get('type') as string; // 'case' or 'qrcode'
    const caseId = formData.get('caseId') as string;

    if (!file) {
      return NextResponse.json(
        { error: '请选择要上传的图片' },
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

    let uploadDir: string;
    let filename: string;

    if (type === 'qrcode') {
      // 二维码上传
      uploadDir = path.join(process.cwd(), 'public', 'upload');
      if (!existsSync(uploadDir)) {
        await mkdir(uploadDir, { recursive: true });
      }
      const ext = file.name.split('.').pop();
      const timestamp = Date.now();
      filename = `qrcode_${timestamp}.${ext}`;
    } else if (type === 'case') {
      // 案例图片上传
      if (!caseId) {
        return NextResponse.json(
          { error: '请提供案例ID' },
          { status: 400 }
        );
      }
      uploadDir = path.join(process.cwd(), 'public', 'cases');
      if (!existsSync(uploadDir)) {
        await mkdir(uploadDir, { recursive: true });
      }
      const ext = file.name.split('.').pop();
      const timestamp = Date.now();
      filename = `case_${caseId}_${timestamp}.${ext}`;
    } else {
      return NextResponse.json(
        { error: '无效的上传类型' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filepath = path.join(uploadDir, filename);

    // 保存文件
    await writeFile(filepath, buffer);

    // 返回文件的公开访问路径
    const imageUrl = type === 'qrcode' ? `/upload/${filename}` : `/cases/${filename}`;

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
