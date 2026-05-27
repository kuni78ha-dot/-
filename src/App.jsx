import React, { useMemo, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Clock } from 'lucide-react';

const scoreMap = {
  A: 2,
  B: 1,
  C: 0,
};

const sections = [
  {
    title: '活動全般',
    items: [
      'プロトコールを遵守した活動ができていたか',
      '現場滞在時間の短縮に努めているか',
      '隊の活動方針が隊員間で共有ができている',
      '傷病者へ愛護的な対応をしている粗暴な対応がないか',
    ],
  },
];

export default function EMSReviewApp() {
  const [scores, setScores] = useState({});

  const totalScore = useMemo(() => {
    return Object.values(scores).reduce((a, b) => a + (scoreMap[b] || 0), 0);
  }, [scores]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-sky-100 p-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="text-center py-4">
          <h1 className="text-4xl font-bold text-pink-600">
            救急活動評価アプリ
          </h1>
          <p className="text-gray-600 mt-2">
            ポップデザイン・スマホ対応版
          </p>
        </div>

        <Card className="rounded-3xl bg-yellow-100 border-0 shadow-xl">
          <CardContent className="p-6 text-center">
            <h2 className="text-3xl font-bold text-orange-600">合計点</h2>
            <p className="text-6xl font-extrabold mt-4 text-pink-600">
              {totalScore} 点
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
