const playersData = [{
  id: 'nhayashi',
  name: '林暢彦（はやし のぶひこ）',
  description: '人間。音響作家・デザイナー。1992年愛知県生まれ。主な 仕事にコンピュータ音楽『SILENCE TRADE』シリーズ（自主制作CD-R）、清原惟監督映画『ひとつのバガテル』音響デザイン等。CCMC2019、TOKYO WONDER WALL 2016入選。',
  url: 'http://example.com',
  imgFormat: '.jpg',
  time: '17:15',
  genre: 'コンピュータ音楽'
},{
  id: 'smartspeaker',
  name: '全日本スマートスピーカー楽協会イアマス支部',
  description: 'スマートスピーカー楽とは、音声操作に対応したAIアシスタント機能を持つスマートなスピーカーとしての機能を全無視し、楽器としてスマートスピーカーを扱い演奏を試みる音楽である。今回はGoogle Home miniを使った打楽器演奏を試みる。という妄想。',
  url: 'http://example.com',
  imgFormat: '.png',
  time: '17:40',
  genre: 'google home 楽団（Google Home Miniを打楽器と見立てたパフォーマンス）'
},{
  id: 'rakasako',
  name: '赤迫瑠奈',
  description: '',
  url: 'http://example.com',
  imgFormat: '.jpg',
  time: '17:55',
  genre: '環境音を使ったサウンド表現'
},{
  id: 'img2',   // motokiohkubo
  name: '大久保雅基',
  description: 'がんばります',
  url: 'http://example.com',
  imgFormat: '.jpg',
  time: '18:20',
  genre: 'computer music'
},{
  id: 'img1',   // skameda
  name: '亀田シゲル',
  description: '令和時代のペインティングってなんだろう',
  url: 'http://example.com',
  imgFormat: '.jpg',
  time: '18:50',
  genre: 'はじめての岐阜の夏'
},{
  id: 'thayashi',
  name: 'takeshi HAYASHI',
  description: '研究は、創った音を実態のある物理現象をして発生させる方法、Artubar System（音響管）。最近は、Lawrence English, Sarah Neufeld, William Basinsky に感動している。',
  url: 'http://example.com',
  imgFormat: '.png',
  time: '19:05',
  genre: 'プログレッシブ・インダストリアル・アンビエント少しプログロックなAmbient'
},{
  id: 'pohapipope',
  name: 'ぽぱぴぽぺ',
  description: `強めのメスになるため日々修行。</br>
水の都でも死なない、ために。</br>
旅先で必ず見るのは民家の屋根、</br>
実はマレーシア生まれ。`,
  url: 'http://example.com',
  imgFormat: '.jpg',
  time: '19:35',
  genre: '合同バンド'
},{
  id: 'mrt_ry',
  name: 'mrt(ry',
  description: 'ジャイアンリサイタル＝「自分のエゴを全世界に撒き散らすカラオケ」なので絶対気持ちいいだろうな〜〜〜と思いました、やってみたいことをやる勇気です、よろしくお願いします',
  url: 'http://example.com',
  imgFormat: '.png',
  time: '19:35',
  genre: '合同バンド'
}]

const timetableData = [{
  id: 'nhayashi',
  name: '林暢彦（はやし のぶひこ）',
  description: '人間。音響作家・デザイナー。1992年愛知県生まれ。主な 仕事にコンピュータ音楽『SILENCE TRADE』シリーズ（自主制作CD-R）、清原惟監督映画『ひとつのバガテル』音響デザイン等。CCMC2019、TOKYO WONDER WALL 2016入選。',
  url: 'http://example.com',
  imgFormat: '.jpg',
  time: '17:15',
  genre: 'コンピュータ音楽'
},{
  id: 'smartspeaker',
  name: '全日本スマートスピーカー楽協会イアマス支部',
  description: 'スマートスピーカー楽とは、音声操作に対応したAIアシスタント機能を持つスマートなスピーカーとしての機能を全無視し、楽器としてスマートスピーカーを扱い演奏を試みる音楽である。今回はGoogle Home miniを使った打楽器演奏を試みる。という妄想。',
  url: 'http://example.com',
  imgFormat: '.png',
  time: '17:40',
  genre: 'google home 楽団（Google Home Miniを打楽器と見立てたパフォーマンス）'
},{
  id: 'rakasako',
  name: '赤迫瑠奈',
  description: '',
  url: 'http://example.com',
  imgFormat: '.jpg',
  time: '17:55',
  genre: '環境音を使ったサウンド表現'
},{
  id: 'img2',   // motokiohkubo
  name: '大久保雅基',
  description: 'がんばります',
  url: 'http://example.com',
  imgFormat: '.jpg',
  time: '18:20',
  genre: 'computer music'
},{
  id: 'img1',   // skameda
  name: '亀田シゲル',
  description: '令和時代のペインティングってなんだろう',
  url: 'http://example.com',
  imgFormat: '.jpg',
  time: '18:50',
  genre: 'はじめての岐阜の夏'
},{
  id: 'thayashi',
  name: 'takeshi HAYASHI',
  description: '研究は、創った音を実態のある物理現象をして発生させる方法、Artubar System（音響管）。最近は、Lawrence English, Sarah Neufeld, William Basinsky に感動している。',
  url: 'http://example.com',
  imgFormat: '.png',
  time: '19:05',
  genre: 'プログレッシブ・インダストリアル・アンビエント少しプログロックなAmbient'
},{
  id: 'pohapipope',
  name: 'ぽぱぴぽぺ',
  description: `強めのメスになるため日々修行。</br>
水の都でも死なない、ために。</br>
旅先で必ず見るのは民家の屋根、</br>
実はマレーシア生まれ。`,
  url: 'http://example.com',
  imgFormat: '.jpg',
  time: '19:35',
  genre: '合同バンド'
}]

module.exports = {
  playersData,
  timetableData
}