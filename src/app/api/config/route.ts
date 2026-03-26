import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const CONFIG_PATH = path.join(process.cwd(), 'data', 'contact-config.json');

export async function GET() {
  try {
    const data = await fs.readFile(CONFIG_PATH, 'utf-8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({
      email: 'service@anxin.com',
      phone: '0371-68891110',
      address: '河南省郑州市高新技术产业开发区翠竹街1号107幢1单元5楼',
      businessHours: '周一至周五：9:00 - 18:00\n周六日：10:00 - 16:00',
      qrcode: '',
      updatedAt: new Date().toISOString(),
    });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, phone, address, businessHours, qrcode } = body;

    if (!email || !phone || !address) {
      return NextResponse.json(
        { error: '请填写完整信息' },
        { status: 400 }
      );
    }

    const config = {
      email,
      phone,
      address,
      businessHours: businessHours || '周一至周五：9:00 - 18:00\n周六日：10:00 - 16:00',
      qrcode: qrcode || '',
      updatedAt: new Date().toISOString(),
    };

    await fs.writeFile(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: '配置更新成功',
      config,
    });
  } catch (error) {
    console.error('Update config error:', error);
    return NextResponse.json(
      { error: '配置更新失败' },
      { status: 500 }
    );
  }
}
