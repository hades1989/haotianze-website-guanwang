import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const CONFIG_PATH = path.join(process.cwd(), 'data', 'about-config.json');

export async function GET() {
  try {
    const data = await fs.readFile(CONFIG_PATH, 'utf-8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({
      milestones: [
        { year: '2009', event: '公司成立，开展联网报警业务' },
        { year: '2012', event: '获得安防工程一级资质' },
        { year: '2015', event: '服务客户突破1000家' },
        { year: '2018', event: '业务拓展至全国50个城市' },
        { year: '2020', event: '引入智能分析预警系统' },
        { year: '2023', event: '服务客户突破2000家' }
      ],
      honors: [
        { title: '安防工程一级资质', description: '中国安全防范产品行业协会颁发的最高等级资质' },
        { title: 'ISO9001质量管理体系认证', description: '国际标准化组织质量管理体系认证' },
        { title: 'AAA级信用企业', description: '中国质量认证中心颁发的企业信用等级证书' },
        { title: '安防行业十佳企业', description: '中国安防协会评选的优秀安防企业' }
      ],
      updatedAt: new Date().toISOString(),
    });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { milestones, honors } = body;

    if (!milestones || !honors) {
      return NextResponse.json(
        { error: '请提供完整信息' },
        { status: 400 }
      );
    }

    const config = {
      milestones,
      honors,
      updatedAt: new Date().toISOString(),
    };

    await fs.writeFile(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: '配置更新成功',
      config,
    });
  } catch (error) {
    console.error('Update about config error:', error);
    return NextResponse.json(
      { error: '配置更新失败' },
      { status: 500 }
    );
  }
}
