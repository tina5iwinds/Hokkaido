import { DailyItinerary, LuggageItem, ShoppingItem } from './types';

export const APP_CONFIG = {
  gasApiUrl: 'https://script.google.com/macros/s/AKfycbwGR_PkBW4AV-j2LtCvmPXsxCyfG9LFxGkD3nxy6eRwQvKer4JLE6lf7ca_rVkHzz3CwA/exec',
  defaultCurrency: 'JPY',
  sheetName: '2026冬北海道', // 使用指定的工作表名稱
};

export const LUGGAGE_WARNINGS = {
  'carry-on': '⚠️ 液體容器限 100ml 以內，且裝入透明夾鏈袋。',
  'checked': '🚫 嚴禁攜帶行動電源、鋰電池及打火機於托運行李。'
};

export const ITINERARY_DATA: DailyItinerary[] = [
  {
    date: '2026/02/10',
    dayLabel: 'Day 1 - 抵達札幌',
    hotel: '札幌 JR東日本大都會高級飯店',
    hotelMapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Premier+Sapporo',
    items: [
      {
        id: '1-1',
        time: '12:30',
        title: 'TPE 桃園機場 T1',
        transport: { type: 'flight', detail: '前往新千歲 CTS | 3時50分' },
        location: { description: '台北桃園國際機場 T1' },
        notes: ['請提前 3 小時抵達機場', '午餐於機上或機場解決']
      },
      {
        id: '1-2',
        time: '17:20',
        title: 'CTS 新千歲機場',
        location: { description: '新千歲機場國際線航廈' },
        notes: ['冬季通關與領行李建議預留 50 分鐘', 'JR 快速エアポート 前往札幌市區']
      },
      {
        id: '1-3',
        time: '18:45',
        title: '晚餐：和牛富士山',
        isHighlight: true,
        icon: '🍲',
        location: { description: '和牛しゃぶしゃぶ・すき養 富士山', address: '北海道札幌市中央區', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Wagyu+Shabu+Fujiyama+Sapporo' },
        notes: ['✅ 已預約', '推薦：黑毛和牛壽喜燒']
      },
      {
        id: '1-4',
        time: '20:00',
        title: '飯店 Check-in',
        location: { description: '札幌 JR東日本大都會高級飯店' },
        notes: ['便利商店補給', '早點休息應對明日雪祭']
      }
    ]
  },
  {
    date: '2026/02/11',
    dayLabel: 'Day 2 - 札幌雪祭 × 藻岩山',
    hotel: '札幌 JR東日本大都會高級飯店',
    items: [
      {
        id: '2-1',
        time: '08:30',
        title: '早餐時間',
        notes: ['推薦：Saera 三明治 或 宮越屋咖啡']
      },
      {
        id: '2-2',
        time: '09:30',
        title: '札幌雪祭 (大通會場)',
        isHighlight: true,
        icon: '❄️',
        location: { description: '大通公園', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Odori+Park+Sapporo+Snow+Festival' },
        notes: ['規模最大的主會場', '注意防寒保暖']
      },
      {
        id: '2-3',
        time: '12:15',
        title: '午餐：悠 札幌拉麵',
        icon: '🍜',
        location: { description: '札幌拉麵 悠', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sapporo+Ramen+Haruka' }
      },
      {
        id: '2-4',
        time: '13:30',
        title: '市區逛街',
        icon: '🛍️',
        notes: ['SHIRO / Animate / 藥妝 / 植村秀']
      },
      {
        id: '2-5',
        time: '16:30',
        title: '藻岩山山頂夜景',
        isHighlight: true,
        icon: '🌃',
        location: { description: '藻岩山展望台', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Mt.+Moiwa+Ropeway' },
        notes: ['日本新三大夜景', '備案：若停駛改往 JR Tower T38']
      },
      {
        id: '2-6',
        time: '19:30',
        title: '札幌市區晚餐',
        notes: ['簡單用餐後回飯店休息']
      }
    ]
  },
  {
    date: '2026/02/12',
    dayLabel: 'Day 3 - 冰濤祭 × 支笏湖溫泉',
    hotel: '支笏湖 第一寶亭留 翠山亭',
    hotelMapUrl: 'https://www.google.com/maps/search/?api=1&query=Shikotsuko+Daiichi+Hotel+Suizantei',
    items: [
      {
        id: '3-1',
        time: '09:00',
        title: '退房與行李寄放'
      },
      {
        id: '3-2',
        time: '11:00',
        title: '午餐：四季花丸',
        isHighlight: true,
        icon: '🍣',
        location: { description: '四季花丸 北口店' },
        notes: ['✅ 已預約']
      },
      {
        id: '3-3',
        time: '14:00',
        title: '搭乘飯店接駁車',
        transport: { type: 'bus', detail: 'JR千歲站 → 飯店' }
      },
      {
        id: '3-4',
        time: '15:30',
        title: '支笏湖冰濤祭',
        isHighlight: true,
        icon: '🧊',
        location: { description: '支笏湖温泉', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Lake+Shikotsu+Ice+Festival' },
        notes: ['欣賞藍色冰雕', '晚上點燈非常夢幻']
      },
      {
        id: '3-5',
        time: '18:00',
        title: '飯店晚餐與溫泉',
        icon: '♨️',
        notes: ['開啟放空模式']
      }
    ]
  },
  {
    date: '2026/02/13',
    dayLabel: 'Day 4 - 登別地獄谷',
    hotel: '登別 Mahoroba 飯店',
    hotelMapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Mahoroba+Noboribetsu',
    items: [
      {
        id: '4-1',
        time: '09:00',
        title: '早晨溫泉與早餐'
      },
      {
        id: '4-2',
        time: '11:00',
        title: '飯店接駁至 JR 千歲',
        transport: { type: 'bus', detail: '回程接駁' }
      },
      {
        id: '4-3',
        time: '13:24',
        title: 'JR千歲 → 登別',
        transport: { type: 'train', detail: 'JR 特急列車' }
      },
      {
        id: '4-4',
        time: '15:30',
        title: '地獄谷與溫泉街',
        icon: '🌋',
        location: { description: '登別地獄谷', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Noboribetsu+Jigokudani' },
        notes: ['硫磺味極重', '飯店晚餐後享受夜間溫泉']
      }
    ]
  },
  {
    date: '2026/02/14',
    dayLabel: 'Day 5 - 移動往函館',
    hotel: '函館 JR旅館',
    hotelMapUrl: 'https://www.google.com/maps/search/?api=1&query=JR+Inn+Hakodate',
    items: [
      {
        id: '5-1',
        time: '09:03',
        title: 'JR登別 → 函館',
        transport: { type: 'train', detail: '特急北斗號 | 約 2.5 小時' }
      },
      {
        id: '5-2',
        time: '14:00',
        title: '函館護國神社',
        icon: '⛩️',
        location: { description: '函館護國神社', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hakodate+Gokoku+Shrine' }
      },
      {
        id: '5-3',
        time: '16:30',
        title: '晚餐：まるたま小屋',
        location: { description: 'まるたま小屋' }
      },
      {
        id: '5-4',
        time: '18:30',
        title: '八幡坂夜拍',
        icon: '📸',
        location: { description: '八幡坂', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hachimanzaka+Slope' }
      },
      {
        id: '5-5',
        time: '19:30',
        title: '函館山夜景',
        isHighlight: true,
        icon: '🌃',
        notes: ['天氣好才上山', '百萬美金夜景']
      }
    ]
  },
  {
    date: '2026/02/15',
    dayLabel: 'Day 6 - 函館市區散策',
    hotel: '函館 JR旅館',
    items: [
      {
        id: '6-1',
        time: '09:30',
        title: '函館朝市',
        icon: '🦑',
        location: { description: '函館朝市', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hakodate+Morning+Market' },
        notes: ['品嚐海鮮蓋飯', '釣花枝體驗']
      },
      {
        id: '6-2',
        time: '11:30',
        title: '湯倉神社',
        icon: '⛩️',
        location: { description: '湯倉神社', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Yukura+Shrine' }
      },
      {
        id: '6-3',
        time: '13:30',
        title: '日歸溫泉：湯之川 萬惣',
        isHighlight: true,
        icon: '♨️',
        location: { 
          description: '函館湯之川溫泉 飯店萬惣 (Banso)', 
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Banso+Hakodate' 
        },
        notes: [
          '欣賞懷舊與時尚並存的溫泉空間', 
          '日歸溫泉開放時間通常為 15:00 開始', 
          '需確認當日是否提供日歸服務'
        ]
      },
      {
        id: '6-4',
        time: '16:00',
        title: '五稜郭塔',
        isHighlight: true,
        icon: '⭐',
        location: { description: '五稜郭公園', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Goryokaku+Tower' },
        notes: ['俯瞰星形城堡遺址']
      },
      {
        id: '6-5',
        time: '17:30',
        title: '晚餐：旬花',
        location: { description: '旬花 五稜郭店' }
      }
    ]
  },
  {
    date: '2026/02/16',
    dayLabel: 'Day 7 - 函館 → 台北',
    items: [
      {
        id: '7-1',
        time: '09:50',
        title: '前往函館機場',
        transport: { type: 'taxi', detail: '離開飯店' }
      },
      {
        id: '7-2',
        time: '12:20',
        title: 'HKD 函館機場',
        transport: { type: 'flight', detail: 'IT237 前往桃園 | 4時40分' },
        location: { description: '函館機場' },
        notes: ['16:00 抵達台北']
      }
    ]
  }
];

export const INITIAL_PACKING_LIST: LuggageItem[] = [
  // Carry-on 隨身行李
  { id: 'co-1', name: '護照', category: 'carry-on', completed: false },
  { id: 'co-2', name: '錢包（日幣&信用卡）', category: 'carry-on', completed: false },
  { id: 'co-3', name: '行動電源', category: 'carry-on', completed: false },
  { id: 'co-4', name: '手套/圍巾/毛帽', category: 'carry-on', completed: false },
  { id: 'co-5', name: '保濕乳液/護唇膏', category: 'carry-on', completed: false },
  { id: 'co-6', name: '暖暖包', category: 'carry-on', completed: false },

  // Checked 託運行李
  { id: 'ch-1', name: '換洗衣物（發熱衣、毛衣）', category: 'checked', completed: false },
  { id: 'ch-2', name: '厚外套（羽絨 or 防風）', category: 'checked', completed: false },
  { id: 'ch-3', name: '雪鞋/防滑鞋', category: 'checked', completed: false },
  { id: 'ch-4', name: '保養品', category: 'checked', completed: false },
  { id: 'ch-5', name: '防滑釘鞋套', category: 'checked', completed: false },
  { id: 'ch-6', name: '雨傘/輕便雨衣', category: 'checked', completed: false },
];

export const INITIAL_SHOPPING_LIST: ShoppingItem[] = [
  { id: 's-1', name: 'SHIRO 香氛', completed: false },
  { id: 's-2', name: '白色戀人/六花亭', completed: false },
  { id: 's-3', name: '北菓樓 年輪蛋糕', completed: false },
];