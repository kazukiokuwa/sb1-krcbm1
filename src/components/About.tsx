import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-700">専門性と興味分野</h3>
            <p className="text-gray-600 leading-relaxed">
              会社経営に興味を持ち、M&A業界へ飛び込む決意をしました。企業の価値創造と
              持続可能な成長に情熱を注いでいます。
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-700">主要なスキル</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FFB5B5] rounded-full"></span>
                ラテアート
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#95D5B2] rounded-full"></span>
                toC営業
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#95B5D5] rounded-full"></span>
                コミュニケーション能力
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">バックグラウンド</h3>
          <p className="text-gray-600 leading-relaxed">
            スターバックスコーヒーでの経験を活かし、お客様との関係構築とサービス提供に
            おける細やかな気配りを身につけました。また、toC営業の経験を通じて、
            顧客ニーズの理解と効果的な提案力を磨いてきました。
          </p>
        </div>
      </div>
    </section>
  );
}