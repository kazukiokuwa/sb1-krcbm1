import React from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="space-y-8">
      <h2 className="text-3xl font-bold">Contact</h2>
      
      <div className="bg-white p-8 rounded-lg shadow-sm border border-zinc-200">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="w-6 h-6" />
          <h3 className="text-xl font-semibold">Get in touch</h3>
        </div>
        
        <p className="text-zinc-600 mb-8">
          お気軽にご連絡ください。新しい機会やコラボレーションについて
          お話できることを楽しみにしています。
        </p>
        
        <a
          href="mailto:kazukiokuwa14@gmail.com"
          className="inline-flex items-center gap-2 bg-zinc-900 text-zinc-100 px-6 py-3 rounded-lg hover:bg-zinc-800 transition-colors"
        >
          <Mail size={20} />
          メールを送る
        </a>
      </div>
    </section>
  );
}