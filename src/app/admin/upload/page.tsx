'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, CheckCircle2, XCircle, Loader2, Image as ImageIcon } from 'lucide-react';

const cases = [
  { id: 1, title: '某国有银行省级分行安防系统升级' },
  { id: 2, title: '某连锁珠宝品牌全国门店联网报警' },
  { id: 3, title: '某大型工业园区综合安防系统' },
  { id: 4, title: '某高端别墅社区智能安防系统' },
  { id: 5, title: '某证券公司总部安防系统建设' },
  { id: 6, title: '某连锁便利店区域联网报警' },
];

export default function UploadPage() {
  const [selectedCaseId, setSelectedCaseId] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<{ success: boolean; message: string; imageUrl?: string } | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadResult(null);
      
      // 创建预览
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      setUploadResult({
        success: false,
        message: '请选择要上传的图片',
      });
      return;
    }

    if (!selectedCaseId) {
      setUploadResult({
        success: false,
        message: '请选择要上传的案例',
      });
      return;
    }

    setUploading(true);
    setUploadResult(null);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('caseId', selectedCaseId);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setUploadResult({
          success: true,
          message: '图片上传成功！',
          imageUrl: result.imageUrl,
        });
        
        // 重置表单
        setFile(null);
        setPreview(null);
        setSelectedCaseId('');
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        setUploadResult({
          success: false,
          message: result.error || '上传失败，请稍后重试',
        });
      }
    } catch (error) {
      setUploadResult({
        success: false,
        message: '网络错误，请稍后重试',
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              案例图片上传
            </h1>
            <p className="text-gray-600">
              上传成功案例的展示图片（支持 JPG、PNG、WEBP 格式，最大 5MB）
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleUpload} className="space-y-6">
                {/* 选择案例 */}
                <div className="space-y-2">
                  <Label htmlFor="case">选择案例</Label>
                  <select
                    id="case"
                    value={selectedCaseId}
                    onChange={(e) => setSelectedCaseId(e.target.value)}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">请选择案例</option>
                    {cases.map((caseItem) => (
                      <option key={caseItem.id} value={caseItem.id}>
                        {caseItem.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 上传图片 */}
                <div className="space-y-2">
                  <Label htmlFor="file">选择图片</Label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="file"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      {preview ? (
                        <div className="relative w-full h-full">
                          <img
                            src={preview}
                            alt="预览"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <span className="text-white text-sm">点击更换图片</span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-12 h-12 mb-3 text-gray-400" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">点击上传</span> 或拖拽图片到此处
                          </p>
                          <p className="text-xs text-gray-500">
                            支持 JPG、PNG、WEBP 格式，最大 5MB
                          </p>
                        </div>
                      )}
                      <input
                        id="file"
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/jpeg,image/jpg,image/png,image/webp"
                        onChange={handleFileSelect}
                      />
                    </label>
                  </div>
                  {file && (
                    <p className="text-sm text-gray-600">
                      已选择: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                  )}
                </div>

                {/* 上传结果 */}
                {uploadResult && (
                  <div
                    className={`p-4 rounded-lg flex items-start gap-3 ${
                      uploadResult.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                    }`}
                  >
                    {uploadResult.success ? (
                      <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <p className="font-medium">{uploadResult.message}</p>
                      {uploadResult.success && uploadResult.imageUrl && (
                        <p className="text-sm mt-1">图片路径: {uploadResult.imageUrl}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* 提交按钮 */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={uploading}
                >
                  {uploading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      上传中...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-5 w-5" />
                      上传图片
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* 已上传图片列表 */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <ImageIcon className="h-5 w-5" />
                已上传的图片
              </h3>
              <p className="text-sm text-gray-500">
                上传的图片保存在 public/cases 目录中
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">
                  提示：上传后请在案例页面代码中更新对应的 image 路径
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
