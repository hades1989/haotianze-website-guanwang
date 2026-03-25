'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Shield } from 'lucide-react';

const navigation = [
  { name: '首页', href: '/' },
  { name: '服务项目', href: '/services' },
  { name: '成功案例', href: '/cases' },
  { name: '关于我们', href: '/about' },
  { name: '联系我们', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">皓天泓</span>
            <span className="text-xs text-gray-500">专业联网报警服务</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="h-4 w-4 mr-2 text-blue-600" />
            <span className="font-medium">0371-68891110</span>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            免费咨询
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Phone className="h-4 w-4 mr-2 text-blue-600" />
                  <span className="font-medium">0371-68891110</span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  免费咨询
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
