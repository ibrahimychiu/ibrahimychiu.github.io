const sources = [
  {
    id: "jud-search",
    title: "司法院裁判書查詢系統",
    kind: "primary",
    url: "https://judgment.judicial.gov.tw/FJUD/default.aspx",
    note: "本 app 的核心檢索入口。可用法院、案件類別、年度、字別、案號、裁判期間、案由、主文、全文內容等欄位交叉查詢。"
  },
  {
    id: "supreme-107-3",
    title: "最高法院107年度台上字第3號刑事判決",
    kind: "primary",
    url: "https://judgment.judicial.gov.tw/FJUD/data.aspx?ty=JD&id=TPSM%2c107%2c%e5%8f%b0%e4%b8%8a%2c3%2c20180830%2c1",
    note: "最高法院於2018-08-30駁回李宗瑞上訴。裁判全文載明被害人代號、構成要件、補強證據、同意抗辯與量刑裁量。"
  },
  {
    id: "high-104-23",
    title: "臺灣高等法院104年度侵上更(一)字第23號刑事判決",
    kind: "primary",
    url: "https://judgment.judicial.gov.tw/FJUD/data.aspx?ty=JD&id=TPHM%2c104%2c%e4%be%b5%e4%b8%8a%e6%9b%b4(%e4%b8%80)%2c23%2c20170307%2c1&ot=in",
    note: "本頁主要事實、時間、代號、罪名、宣告刑與構成要件判斷取自此更一審判決。"
  },
  {
    id: "supreme-news-107-3",
    title: "最高法院107年度台上字第3號新聞稿",
    kind: "primary",
    url: "https://jirs.judicial.gov.tw/GNNWS/NNWSS002.asp?id=363319",
    note: "新聞稿摘要第二審判決情形與最高法院駁回上訴結果。"
  },
  {
    id: "const-113-419",
    title: "憲法法庭113年審裁字第419號裁定",
    kind: "primary",
    url: "https://cons.judicial.gov.tw/docdata.aspx?fid=40&id=352879",
    note: "定應執行刑及執行指揮聲明異議後續憲法審查聲請，不受理。"
  },
  {
    id: "open-api",
    title: "司法院裁判書開放API規格說明",
    kind: "primary",
    url: "https://opendata.judicial.gov.tw/news/detail?newsId=3041",
    note: "司法院資料開放平台採帳密換 token；服務時間與資料範圍有限制，適合後續把本 app 串成可更新資料庫。"
  },
  {
    id: "pts-2014",
    title: "公視新聞：李宗瑞二審重判79年7月合併執行30年",
    kind: "media",
    url: "https://news.pts.org.tw/article/278218",
    note: "補充高院二審公開宣判時的法院與辯方說法。"
  },
  {
    id: "news-h",
    title: "公開民事求償報導：H女求償與隱私侵害",
    kind: "media",
    url: "https://www.stheadline.com/realtime-china/1697894/%E6%BA%96%E6%96%B0%E5%A8%98%E9%81%AD%E6%80%A7%E4%BE%B5%E5%81%B7%E6%8B%8D%E7%94%B7%E5%8F%8B%E6%82%94%E5%A9%9A-%E6%9D%8E%E5%AE%97%E7%91%9E%E5%86%8D%E5%88%A4%E8%B3%A053%E8%90%AC",
    note: "用於補充被害人化名與影像外流後的延續性損害；刑事事實仍以司法院刑事判決為準。"
  },
  {
    id: "mnews-lantern-2022",
    title: "鏡新聞：2022祥虎獻瑞慶元宵",
    kind: "media",
    url: "https://www.mnews.tw/story/20220215nm014",
    note: "作為2022花燈作品圖片與作品脈絡來源。"
  },
  {
    id: "yahoo-setn-lantern-2023",
    title: "Yahoo新聞／三立：2023兔耀福門喜臨春",
    kind: "media",
    url: "https://tw.news.yahoo.com/%E6%B7%AB%E5%AF%8C%E5%B0%91%E6%9D%8E%E5%AE%97%E7%91%9E%E8%8A%B1%E7%87%88%E9%80%A32%E5%B9%B4%E5%BE%97%E7%8D%8E-%E5%85%94%E5%B9%B4%E6%8B%BF%E4%BD%B3%E4%BD%9C-%E6%9C%80%E5%BF%AB4%E5%B9%B4%E5%BE%8C%E5%8F%AF%E7%94%B3%E8%AB%8B%E5%81%87%E9%87%8B-134030933.html",
    note: "作為2023花燈作品圖片與作品脈絡來源。"
  },
  {
    id: "udn-lantern-2024",
    title: "聯合新聞網：2024普羅民遮慶繁榮",
    kind: "media",
    url: "https://travel.udn.com/travel/story/7321/7785795",
    note: "作為2024花燈作品圖片與台南展出脈絡來源。"
  },
  {
    id: "mirror-lantern-2024",
    title: "鏡週刊：李宗瑞燈會作品連3年奪佳績",
    kind: "media",
    url: "https://www.mirrormedia.mg/story/20240222edi043",
    note: "整理2022、2023、2024花燈作品名稱與獎項。"
  },
  {
    id: "tvbs-lantern-2025",
    title: "TVBS：自在．悠游獲2025台灣燈會特優",
    kind: "media",
    url: "https://news.tvbs.com.tw/local/2776682",
    note: "說明2025作品自在．悠游、E055、製作歷程與環境保護理念。"
  },
  {
    id: "cnews-lantern-2025",
    title: "匯流新聞網：自在．悠游創作理念",
    kind: "media",
    url: "https://cnews.com.tw/224250212a01/",
    note: "補充自在．悠游以全球暖化、海洋與禪繞元素為創作理念。"
  },
  {
    id: "mirror-daily-lantern-2026",
    title: "鏡報：嬉遊臺北與駿馬歡騰慶豐年",
    kind: "media",
    url: "https://www.mirrordaily.news/story/47605",
    note: "說明2026台北燈節作品嬉遊臺北 - Chill Taipei，以及另參與作品駿馬歡騰慶豐年。"
  }
];

const categories = {
  center: { label: "核心被告", color: "#17212b" },
  victim: { label: "化名被害人", color: "#b7492f" },
  support: { label: "周邊人物", color: "#9a6a18" },
  process: { label: "司法體系", color: "#1f6b5d" },
  tech: { label: "科技/證據", color: "#275d91" },
  media: { label: "媒體/平台", color: "#685a8d" }
};

const lanternWorks = [
  {
    id: "lantern-2022",
    year: "2022",
    title: "祥虎獻瑞慶元宵",
    award: "台北燈節社會大眾組特優",
    context: "李宗瑞入獄後參與花燈製作學習班，首次參賽作品之一。",
    concept: "虎年節慶主題花燈，公開資料主要記錄作品名稱與獎項，創作理念細節較少。",
    source: "mnews-lantern-2022",
    image: "assets/lanterns/lantern-2022.jpg",
    imageCredit: "鏡新聞報導配圖"
  },
  {
    id: "lantern-2023",
    year: "2023",
    title: "兔耀福門喜臨春",
    award: "佳作",
    context: "連續參與花燈競賽的第二年作品。",
    concept: "兔年節慶主題花燈，公開資料主要記錄作品名稱與得獎結果。",
    source: "yahoo-setn-lantern-2023",
    image: "assets/lanterns/lantern-2023.jpg",
    imageCredit: "Yahoo新聞／三立報導配圖"
  },
  {
    id: "lantern-2024",
    year: "2024",
    title: "普羅民遮慶繁榮（龍）",
    award: "特優",
    context: "與4名獄友共同製作，作品於台南展出。",
    concept: "龍年主題作品。作品名稱以台南城市意象與繁榮慶典為主軸。",
    source: "udn-lantern-2024",
    image: "assets/lanterns/lantern-2024.jpg",
    imageCredit: "聯合新聞網報導配圖"
  },
  {
    id: "lantern-2025",
    year: "2025",
    title: "自在．悠游",
    award: "2025台灣燈會全國花燈競賽特優（E055）",
    context: "台北監獄花燈班5名學員共同製作，製程約9個月。",
    concept: "以全球暖化、海洋保護與禪繞繃布技巧為主題，呈現海底世界與環境危機。",
    source: "tvbs-lantern-2025",
    image: "assets/lanterns/lantern-2025.jpg",
    imageCredit: "TVBS報導配圖"
  },
  {
    id: "lantern-2026",
    year: "2026",
    title: "嬉遊臺北 - Chill Taipei",
    award: "2026台北燈節大型主題燈座類社會大專組特優／北市燈王",
    context: "台北監獄花燈班作品，於台北燈節展出。",
    concept: "以《西遊記》與台北城市景點為發想，呈現三藏師徒取經台北、遊歷城市的畫面。",
    source: "mirror-daily-lantern-2026",
    image: "assets/lanterns/lantern-2026.jpg",
    imageCredit: "鏡報報導配圖"
  }
];

const nodes = [
  {
    id: "lee",
    label: "李宗瑞",
    sub: "被告",
    category: "center",
    x: 490,
    y: 360,
    r: 74,
    summary: "最高法院107年度台上字第3號判決上訴人。網絡以他為中心，展示高院更一審判決代號被害人、接送/邀約脈絡、司法機關與科技證據的連結。",
    tags: ["刑法第221條/225條", "妨害秘密", "偷拍影像", "應執行刑"],
    sourceStatus: "已查證臺灣高等法院104年度侵上更(一)字第23號與最高法院107年度台上字第3號。"
  },
  {
    id: "victim-a",
    label: "安安",
    sub: "C1",
    category: "victim",
    x: 220,
    y: 118,
    r: 48,
    summary: "最高法院判決提及C1部分：原審認定先有乘機性交犯意，過程中因C1驚醒並抗拒，改以強暴手段性交得逞。",
    tags: ["C1", "強制性交", "乘機轉強制", "補強證據"],
    sourceStatus: "已由最高法院107年度台上字第3號全文建立。"
  },
  {
    id: "victim-b",
    label: "白薇",
    sub: "C2",
    category: "victim",
    x: 168,
    y: 318,
    r: 48,
    summary: "最高法院判決提及C2部分：第三人關於C2是否喜歡被告的主觀推測，無從推認其已同意性交。",
    tags: ["C2", "同意抗辯", "主觀推測不足"],
    sourceStatus: "已由最高法院107年度台上字第3號全文建立。"
  },
  {
    id: "victim-c",
    label: "采寧",
    sub: "C3",
    category: "victim",
    x: 254,
    y: 548,
    r: 48,
    summary: "最高法院判決提及C3於偵訊具結陳述的證據能力，並討論後續詰問與證據能力問題。",
    tags: ["C3", "偵訊陳述", "證據能力"],
    sourceStatus: "已由最高法院107年度台上字第3號全文建立。"
  },
  {
    id: "victim-d",
    label: "丹寧",
    sub: "C5",
    category: "victim",
    x: 168,
    y: 448,
    r: 42,
    summary: "最高法院判決列為原審認定之被害人代號之一，涉及乘機性交相關判斷。",
    tags: ["C5", "乘機性交", "被害人陳述"],
    sourceStatus: "已由高院104年度侵上更(一)字第23號事實二與最高法院107年度台上字第3號建立。"
  },
  {
    id: "victim-e",
    label: "恩綺",
    sub: "C8",
    category: "victim",
    x: 286,
    y: 640,
    r: 42,
    summary: "最高法院判決列為原審認定之被害人代號之一，法院以被害人證詞、竊錄影片勘驗及其他證據綜合判斷。",
    tags: ["C8", "補強證據", "竊錄影片勘驗"],
    sourceStatus: "已由高院104年度侵上更(一)字第23號事實三與最高法院107年度台上字第3號建立。"
  },
  {
    id: "victim-f",
    label: "芳儀",
    sub: "C9",
    category: "victim",
    x: 662,
    y: 642,
    r: 42,
    summary: "最高法院判決提及C9部分，原判決變更檢察官起訴法條，認定成立乘機性交既遂。",
    tags: ["C9", "乘機性交既遂", "變更起訴法條"],
    sourceStatus: "已由最高法院107年度台上字第3號全文建立。"
  },
  {
    id: "victim-g",
    label: "桂庭",
    sub: "C10",
    category: "victim",
    x: 744,
    y: 590,
    r: 42,
    summary: "最高法院判決提及C10部分，原判決認定成立乘機性交未遂，並說明已給予辯論與防禦機會。",
    tags: ["C10", "乘機性交未遂", "防禦權"],
    sourceStatus: "已由最高法院107年度台上字第3號全文建立。"
  },
  {
    id: "victim-h",
    label: "海倫",
    sub: "H",
    category: "victim",
    x: 112,
    y: 210,
    r: 42,
    summary: "最高法院判決提及H女於影片中無身體反應或動作，且有拍打、推開等動作；原審認為整體情狀仍屬不知抗拒狀態。",
    tags: ["H", "不知抗拒", "乘機性交"],
    sourceStatus: "已由最高法院107年度台上字第3號全文建立。"
  },
  {
    id: "victim-i",
    label: "方晴",
    sub: "F",
    category: "victim",
    x: 130,
    y: 560,
    r: 42,
    summary: "最高法院判決列為被害人代號之一，原審將其納入乘機性交相關犯罪事實與證據判斷。",
    tags: ["F", "乘機性交", "證人陳述"],
    sourceStatus: "已由高院104年度侵上更(一)字第23號事實八與最高法院107年度台上字第3號建立。"
  },
  {
    id: "driver",
    label: "接送安排",
    sub: "司機/車輛",
    category: "support",
    x: 540,
    y: 104,
    r: 48,
    summary: "高院判決記載，丙女案中李宗瑞稱欲請司機送其返家，遭拒後拿走包包，使其為取回包包而搭車；甲2案亦有友人欲帶離、被告稱會送回家的脈絡。",
    tags: ["接送", "移動路徑", "返家承諾"],
    sourceStatus: "已由高院104年度侵上更(一)字第23號事實四、事實五核實。"
  },
  {
    id: "broker",
    label: "友人介紹/邀約",
    sub: "社交連結",
    category: "support",
    x: 726,
    y: 190,
    r: 48,
    summary: "高院判決記載多起由夜店、友人介紹、邀約續攤或餐敘延伸至住處的互動脈絡。此節點不指稱另有犯罪共犯，只呈現社交網絡入口。",
    tags: ["夜店", "友人介紹", "邀約續攤"],
    sourceStatus: "已由高院104年度侵上更(一)字第23號事實一、四、五、七、八核實。"
  },
  {
    id: "prosecutor",
    label: "檢方",
    sub: "起訴/上訴",
    category: "process",
    x: 392,
    y: 625,
    r: 48,
    summary: "整理起訴罪名、上訴理由與求刑/量刑意見。檢方視角可用來對照法院認定與辯方主張。",
    tags: ["起訴", "舉證", "求刑", "上訴"],
    sourceStatus: "已由高院104年度侵上更(一)字第23號與最高法院107年度台上字第3號核實起訴、上訴與變更法條爭點。"
  },
  {
    id: "court",
    label: "法院",
    sub: "審級",
    category: "process",
    x: 584,
    y: 625,
    r: 52,
    summary: "包含台北地院、台灣高院、最高法院及後續憲法法庭程序。負責事實認定、法律評價、量刑與應執行刑判斷。",
    tags: ["一審", "二審/更審", "第三審", "憲法審查"],
    sourceStatus: "已核實台北地院一審、高院更一審、最高法院第三審與憲法法庭後續程序。"
  },
  {
    id: "defense",
    label: "辯護人",
    sub: "上訴攻防",
    category: "process",
    x: 792,
    y: 500,
    r: 46,
    summary: "提出被告否認性侵、主張同意、悔意、量刑過重等辯護方向。可作為法律敘事比較。",
    tags: ["同意抗辯", "悔意", "上訴"],
    sourceStatus: "已由高院與最高法院判決核實同意抗辯、證據能力與量刑過重等攻防。"
  },
  {
    id: "camera",
    label: "偷拍設備/影像",
    sub: "數位證據",
    category: "tech",
    x: 490,
    y: 220,
    r: 50,
    summary: "手機、相機、硬碟與影像檔案是妨害秘密、數位證據與二次傷害的核心。",
    tags: ["數位證據", "影像留存", "外流風險"],
    sourceStatus: "最高法院新聞稿與媒體報導可建立脈絡；影像內容不得展示。"
  },
  {
    id: "platform",
    label: "網路平台",
    sub: "外流/下架",
    category: "media",
    x: 774,
    y: 332,
    r: 46,
    summary: "影像外流後的搜尋、下載、轉傳與下架治理，屬司法與科技課程的核心延伸問題。",
    tags: ["二次傷害", "平台治理", "被遺忘權"],
    sourceStatus: "以公開報導與法政策分析呈現，不展示影像或連結。"
  },
  {
    id: "media",
    label: "媒體",
    sub: "報導倫理",
    category: "media",
    x: 678,
    y: 72,
    r: 42,
    summary: "媒體報導一方面促成公共監督，另一方面可能造成標籤化與二次傷害。",
    tags: ["公共監督", "報導倫理", "匿名化"],
    sourceStatus: "作為課程分析節點。"
  }
];

const edges = [
  { from: "lee", to: "victim-a", label: "C1 強制性交", layer: "victim" },
  { from: "lee", to: "victim-b", label: "C2 同意爭點", layer: "victim" },
  { from: "lee", to: "victim-c", label: "C3 證據能力", layer: "victim" },
  { from: "lee", to: "victim-d", label: "C5 乘機性交", layer: "victim" },
  { from: "lee", to: "victim-e", label: "C8 補強證據", layer: "victim" },
  { from: "lee", to: "victim-f", label: "C9 既遂", layer: "victim" },
  { from: "lee", to: "victim-g", label: "C10 未遂", layer: "victim" },
  { from: "lee", to: "victim-h", label: "H 不知抗拒", layer: "victim" },
  { from: "lee", to: "victim-i", label: "F 乘機性交", layer: "victim" },
  { from: "lee", to: "driver", label: "返家承諾/車輛脈絡", layer: "support" },
  { from: "lee", to: "broker", label: "友人介紹/邀約續攤", layer: "support" },
  { from: "driver", to: "victim-b", label: "甲2友人欲帶離", layer: "support" },
  { from: "driver", to: "victim-h", label: "丙女拒絕司機送返家", layer: "support" },
  { from: "broker", to: "victim-c", label: "夜店偶遇/護送說詞", layer: "support" },
  { from: "broker", to: "victim-f", label: "甲9因甲10結識", layer: "support" },
  { from: "lee", to: "camera", label: "拍攝/留存", layer: "tech" },
  { from: "camera", to: "platform", label: "散布風險", layer: "tech" },
  { from: "platform", to: "victim-b", label: "二次傷害", layer: "tech" },
  { from: "camera", to: "victim-a", label: "影片勘驗", layer: "tech" },
  { from: "camera", to: "victim-h", label: "影片勘驗", layer: "tech" },
  { from: "media", to: "platform", label: "報導與搜尋", layer: "tech" },
  { from: "prosecutor", to: "lee", label: "起訴/舉證", layer: "process" },
  { from: "court", to: "lee", label: "審判/量刑", layer: "process" },
  { from: "defense", to: "lee", label: "上訴/抗辯", layer: "process" },
  { from: "court", to: "prosecutor", label: "攻防審查", layer: "process" },
  { from: "court", to: "defense", label: "上訴意旨", layer: "process" },
  { from: "media", to: "victim-a", label: "匿名保護", layer: "media" },
  { from: "court", to: "victim-a", label: "採證認事", layer: "process" },
  { from: "court", to: "victim-h", label: "犯罪型態區分", layer: "process" }
];

const hoverRecords = {
  "victim-a": {
    courtCode: "原審判決代號：甲1；最高法院判決代號對照：C1",
    source: "臺灣高等法院104年度侵上更(一)字第23號、最高法院107年度台上字第3號",
    legal: "強制性交、乘機性交、妨害秘密；重點在明示拒絕、抵抗、不知抗拒與竊錄。",
    snippets: [
      "判決原文：甲1多次喊叫「不要」，並伸手抵擋或以雙腿抵抗。",
      "判決原文：甲1不斷以雙手推丁○○，且大叫或發出哭叫聲，並對丁○○說：「不要」、「怎麼這樣」、「我沒辦法」。",
      "判決原文：甲1對丁○○說「我要去找我朋友了」、「拜託」、「不要這樣，我想找我朋友」。",
      "判決原文：丁○○乃敷衍稱：「OK，找你朋友」。",
      "判決引號索引：「不要」",
      "判決引號索引：「怎麼這樣」",
      "判決引號索引：「我沒辦法」",
      "判決引號索引：「我要去找我朋友了」",
      "判決引號索引：「拜託」",
      "判決引號索引：「不要這樣，我想找我朋友」",
      "判決引號索引：「OK，找你朋友」"
    ],
    caution: "此處只呈現判決中與違反意願、抗拒與構成要件相關的短句，不展示影像內容。"
  },
  "victim-b": {
    courtCode: "高院判決代號：甲2；最高法院新聞稿對照：C2",
    source: "臺灣高等法院104年度侵上更(一)字第23號",
    legal: "乘機性交、妨害秘密；重點在酒醉昏睡、友人欲帶離、被告阻止、影片勘驗。",
    snippets: [
      "判決原文：甲7等人欲帶甲2離去時，丁○○對甲7等人說不用，其會送甲2回家等語。",
      "判決原文：甲2證稱：我完全不記得到被告家後發生何事，因為我那時候到被告家時，我已經完全沒有知覺。",
      "判決原文：甲2證稱：被告跟她們說不用了，被告說會送我回去。",
      "判決原文：甲2證稱：我不願意在被告家過夜，我完全沒有同意跟被告發生性行為，我當時完全沒有意識。",
      "判決原文：勘驗記載甲2陸續有雙腿向上伸直、皺眉、右手伸向被告腹部、說好痛等不清楚之語言等行為。",
      "判決引號索引：「哈囉」",
      "判決引號索引：「好痛」"
    ],
    caution: "原審判決同時記載被告的合意抗辯，法院以友人證述、酒醉昏睡與勘驗結果綜合判斷。"
  },
  "victim-c": {
    courtCode: "高院判決代號：甲3；最高法院新聞稿對照：C3",
    source: "臺灣高等法院104年度侵上更(一)字第23號",
    legal: "乘機性交；重點在上車後不清楚、醒來後懷疑、意識清楚時不同意。",
    snippets: [
      "判決原文：甲3證稱：那次我喝多了而跟被告一起上計程車到被告家，我不記得為什麼會去被告家，上計程車以後就不太清楚。",
      "判決原文：甲3證稱：我當然不願意去被告家過夜，我不記得怎麼進去被告家。",
      "判決原文：甲3證稱：我意識清楚的時候，當然不願意跟被告發生性行為。",
      "判決原文：甲3證稱：離開被告家之前，有想過可能有跟被告發生關係，我很不舒服。"
    ],
    caution: "目前摘錄多為被害人證述，不是兩人逐字對話。"
  },
  "victim-d": {
    courtCode: "高院判決代號：甲5；最高法院新聞稿對照：C5",
    source: "臺灣高等法院104年度侵上更(一)字第23號、最高法院107年度台上字第3號",
    legal: "乘機性交；被告主張影片中有互動、有意識，法院綜合勘驗與證述判斷。",
    snippets: [
      "判決引號索引：「舒服嗎？」",
      "判決引號索引：「怎麼了？怎麼了？」",
      "判決引號索引：「睡一下、睡一下」",
      "判決引號索引：「躺去那邊，好不好」",
      "判決引號索引：「脫掉」",
      "判決引號索引：「怎麼脫」",
      "判決引號索引：「Oh,my god」"
    ],
    caution: "此節點列出高院判決中與意識狀態、回應能力及同意抗辯相關的短句索引。"
  },
  "victim-e": {
    courtCode: "高院判決代號：甲8；最高法院新聞稿對照：C8",
    source: "臺灣高等法院104年度侵上更(一)字第23號",
    legal: "乘機性交；重點在臉書對話是否足以成為有利被告證據、是否即時報警的評價。",
    snippets: [
      "判決提及被告與甲8在臉書上的對話紀錄，認為尚不能採為有利被告之證據。",
      "判決說明甲8即使有所懷疑，若無確切證據在手，未即時報警與常情無違。",
      "判決引號索引：「親一下」",
      "判決引號索引：「不要，我知道」",
      "判決引號索引：「不要，睡覺了」",
      "判決引號索引：「先睡覺了」",
      "判決引號索引：「我的喉嚨好痛」",
      "判決引號索引：「睡覺吧」",
      "判決引號索引：「很痛」",
      "判決引號索引：「我不想」",
      "判決引號索引：「不要、不要，一下要，一下要一下又不要，耍我」",
      "判決引號索引：「很痛、我不想」",
      "判決問答索引：「(妳跟丁○○發生性關係是妳自願的嗎？)是」",
      "判決問答索引：「(妳有因為酒醉或被告勉強妳的情況嗎？)我有酒醉，但我沒有抗拒，我是因為同意的」",
      "判決陳述索引：「我比較在意的部分是被告錄影的部分」"
    ],
    caution: "這裡是法院對對話紀錄證明力的評價，不是完整臉書逐字對話。"
  },
  "victim-f": {
    courtCode: "原審判決代號：甲9；最高法院判決代號對照：C9",
    source: "臺灣高等法院104年度侵上更(一)字第23號、最高法院107年度台上字第3號",
    legal: "乘機性交既遂；與甲10同一時段關聯，涉及接續犯意與起訴效力。",
    snippets: [
      "判決引號索引：「寶貝，我當天好像被下藥，不然不可能那麼醉」",
      "判決問答索引：「(在上開三部影片中，為何你都是要在甲10還沒有醒，或是他不在的時候對甲9為性行為？)我可能會有點尷尬，我當下可能會覺的不好意思或什麼的」",
      "判決引號索引：「I am hungry」",
      "判決引號索引：「這好噁」",
      "判決引號索引：「睡覺」",
      "判決引號索引：「No,no,no」",
      "判決引號索引：「Go sleep」",
      "判決引號索引：「Shit」"
    ],
    caution: "此節點列出判決中甲9段落附近可抽得之引號對話；甲9/甲10同段，需搭配判決上下文閱讀。"
  },
  "victim-g": {
    courtCode: "高院判決代號：甲10；最高法院新聞稿對照：C10",
    source: "臺灣高等法院104年度侵上更(一)字第23號、最高法院107年度台上字第3號",
    legal: "乘機性交未遂；重點在同一時段、辯論防禦機會與罪名告知。",
    snippets: [
      "判決引號索引：「Where is○○ (即甲9英文名)？」",
      "判決引號索引：「Do you fuck me？」",
      "判決引號索引：「I am sorry, we just… sorry…sorry…sorry…ok」",
      "判決引號索引：「不要偷看我」",
      "判決引號索引：「我要煎蛋」",
      "判決引號索引：「我想吃蛋」",
      "判決引號索引：「Nothing with you, it's nothing with you.」",
      "判決引號索引：「We just have sex and that's it.」",
      "判決引號索引：「Who？」",
      "判決引號索引：「No,nothing with who. Just…and I am so drunk…go sleep,go sleep.」"
    ],
    caution: "此節點列出高院判決事實七與勘驗段落中，與未遂、迴避、知覺狀態相關的短句索引。"
  },
  "victim-h": {
    courtCode: "高院判決代號：丙女；最高法院新聞稿對照：H",
    source: "臺灣高等法院104年度侵上更(一)字第23號",
    legal: "乘機性交、妨害秘密；重點在離開夜店、司機接送、拒絕、包包被拿走與不能抗拒。",
    snippets: [
      "丁○○稱欲請其司機開車送丙女返家。",
      "丙女拒絕該提議。",
      "判決記載丁○○拿走丙女包包，使其為拿回包包而搭乘丁○○之車。",
      "判決引號索引：「想不想要」",
      "判決引號索引：「我不要，我要離開」",
      "判決引號索引：「不要」",
      "判決引號索引：「我不要」",
      "判決引號索引：「what's happened」",
      "判決引號索引：「喜歡」",
      "判決引號索引：「舒服」"
    ],
    caution: "這段是接送安排節點的主要判決依據：司機送返家說詞、拒絕、包包與搭車。"
  },
  "victim-i": {
    courtCode: "高院判決代號：乙女；最高法院新聞稿對照：F",
    source: "臺灣高等法院104年度侵上更(一)字第23號、最高法院107年度台上字第3號",
    legal: "乘機性交、妨害秘密；重點在酒醉不知抗拒、手機/錄影設備竊錄、事後刪除影片與未即時報警的評價。",
    snippets: [
      "判決引號索引：「舒服、舒服」",
      "判決引號索引：「不喜歡」",
      "判決引號索引：「NO，NO」",
      "判決引號索引：「什麼NO啦」",
      "判決引號索引：「我很變態」",
      "判決引號索引：「what's happened」",
      "判決引號索引：「I don't know」",
      "判決引號索引：「喜不喜歡」",
      "判決引號索引：「喜歡」",
      "判決引號索引：「I don't know what's happened」",
      "判決引號索引：「What's happened、What's happened」",
      "判決引號索引：「舒不舒服」",
      "判決引號索引：「起來」",
      "判決引號索引：「抱著我」",
      "判決引號索引：「…sleep，睡覺」",
      "判決引號索引：「很痛」",
      "判決引號索引：「oh,my god」"
    ],
    caution: "此節點列出高院判決事實八與勘驗段落中，與意識狀態、竊錄及同意抗辯相關的短句索引。"
  }
};

const events = [
  {
    date: "2012",
    title: "案件曝光、偵查與數位證據問題浮現",
    linked: ["lee", "camera", "platform", "media"],
    text: "案件因性侵、偷拍影像與外流風險引發高度公共關注。展示上應只討論數位證據、留存與散布風險，不呈現影像內容。",
    source: "supreme-107-3"
  },
  {
    date: "2013.09",
    title: "台北地院一審",
    linked: ["lee", "court", "prosecutor", "defense"],
    text: "台北地院一審案號為101年度侵訴字第92號，併含102年度侵訴字第21號、102年度訴字第521號、102年度易字第171號等；高院更一審判決撤銷其中部分判斷後改判。",
    source: "jud-search"
  },
  {
    date: "2014.09.02",
    title: "台灣高院二審重判",
    linked: ["lee", "court", "victim-a", "victim-b", "camera"],
    text: "公開報導稱高院二審依強制性交、乘機性交、妨害秘密等罪提高刑度；法院公開說明重視性自主、身心損害與犯後態度。",
    source: "pts-2014"
  },
  {
    date: "2018.08.30",
    title: "最高法院107年度台上字第3號駁回上訴",
    linked: ["lee", "court", "defense"],
    text: "最高法院新聞稿記載，李宗瑞提起第三審上訴後，最高法院駁回上訴，全案確定。",
    source: "supreme-107-3"
  },
  {
    date: "2024.06.18",
    title: "憲法法庭113年審裁字第419號不受理",
    linked: ["lee", "court"],
    text: "李宗瑞就定應執行刑及檢察官執行指揮相關問題聲請裁判及法規範憲法審查，憲法法庭裁定不受理。",
    source: "const-113-419"
  }
];

const elements = [
  {
    topic: "強制性交",
    law: "刑法第221條",
    issue: "是否以強暴、脅迫、恐嚇、催眠術或其他違反意願方法而性交。",
    evidence: "最高法院判決提及C1過程中驚醒並激烈抗拒，原審認定被告昇高犯意，改以強暴手段性交得逞。",
    linked: ["victim-a", "prosecutor", "court"]
  },
  {
    topic: "乘機性交",
    law: "刑法第225條",
    issue: "是否趁被害人陷於無法或難以擷取意願的無助狀態而為性交。",
    evidence: "最高法院判決說明，補強證據不必證明全部構成要件，只要與被害人指述相互印證，客觀上足以形成確信即可。",
    linked: ["victim-a", "victim-d", "victim-e", "victim-f", "victim-g", "victim-h", "victim-i", "court"]
  },
  {
    topic: "妨害秘密/偷拍",
    law: "刑法第315-1條等",
    issue: "是否無故以照相、錄影等方式竊錄他人非公開活動、身體隱私部位或性影像。",
    evidence: "最高法院判決將竊錄影片勘驗結果納入補強證據分析；app 僅呈現證據功能，不展示影像或露骨內容。",
    linked: ["camera", "platform", "victim-a", "victim-h", "court"]
  },
  {
    topic: "同意抗辯",
    law: "事實認定/證據法則",
    issue: "被告是否主張雙方合意；法院如何以被害人陳述、影像、當時狀態及其他證據推翻或採納。",
    evidence: "最高法院判決指出，被告擷取影片中被害人片段對話或反射動作，主張意識正常且有同意能力，原審認為不可採。",
    linked: ["defense", "victim-a", "victim-b", "victim-h", "court"]
  }
];

const dialogueRecords = [
  {
    title: "邀約、接送與離開場所",
    linked: ["lee", "driver", "broker", "victim-a", "victim-c"],
    status: "高院判決已建檔",
    text: "高院判決事實欄已核到夜店偶遇、友人介紹、邀約餐敘或續攤、稱會送回家、稱請司機送返家等脈絡。這些資料用來判斷被告如何把被害人帶至住處，以及被害人是否已有離開或返家的意思。",
    fields: ["99.07.31甲3夜店偶遇與護送說詞", "99.11.07甲5餐敘勸酒", "100.05.07甲2友人欲帶離與送回家說詞", "100.05.22丙女拒絕司機送返家", "100.07.21甲9甲10夜店續攤", "100.07.23乙女夜店赴約"]
  },
  {
    title: "意識狀態、不能抗拒與事後反應",
    linked: ["lee", "victim-a", "victim-h", "court"],
    status: "高院/最高法院已建檔",
    text: "高院判決以被害人證述、影片勘驗、飲酒與失憶情形、閉眼無反應或推拒等資料，認定多數被害人陷於不知或不能抗拒狀態；最高法院維持其補強證據與經驗法則判斷。",
    fields: ["酒醉/不明原因狀態", "閉眼或無自主反應", "推拒或表示不要", "事後失憶/懷疑", "未即時報警的法院評價"]
  },
  {
    title: "影片勘驗、片段對話與反射動作",
    linked: ["lee", "camera", "victim-a", "victim-h", "defense", "court"],
    status: "高院/最高法院已建檔",
    text: "高院判決列出電腦桌前錄影設備、手機、照片與影片數量，並逐案說明片段對話或肢體反應不能直接等同有效同意；最高法院認為原審採證與補強證據法則並無違法。",
    fields: ["不詳錄影設備", "手機拍攝", "照片/影片數量", "勘驗中的短句", "妨害秘密與二次傷害"]
  },
  {
    title: "辯方同意說與法院回應",
    linked: ["lee", "defense", "court", "victim-b", "victim-c"],
    status: "高院/最高法院已建檔",
    text: "最高法院判決認為，上訴意旨多是對原判決已說明指駁事項、採證認事職權，再以己見重為事實爭執，與第三審合法上訴理由不合。",
    fields: ["合意性交抗辯", "臉書/事後往來抗辯", "意識正常抗辯", "未即時報警抗辯", "第三審上訴合法性"]
  }
];

const sentencing = [
  {
    factor: "侵害法益",
    text: "最高法院判決指出，原判決綜合審酌被告嚴重侵害被害人性自主決定權，使其等心靈受創至深，罪責重大。",
    linked: ["victim-a", "victim-b", "victim-h", "court"],
    source: "supreme-107-3"
  },
  {
    factor: "犯行數量與罪數",
    text: "高院更一審附表一列八項宣告刑：甲3、甲5、甲8、甲2、丙女、乙女各為乘機性交罪有期徒刑4年10月；甲1為強制性交罪有期徒刑5年；甲9/甲10同一事實為乘機性交罪有期徒刑5年2月。最高法院駁回上訴後確定。",
    linked: ["lee", "court", "prosecutor"],
    source: "high-104-23"
  },
  {
    factor: "刑法第57條與裁量界線",
    text: "最高法院判決說明，刑之量定屬法院職權裁量；如以行為人責任為基礎，斟酌刑法第57條各款，在法定刑內且未明顯失出失入，第三審不得任意指摘違法。",
    linked: ["lee", "defense", "court"],
    source: "supreme-107-3"
  },
  {
    factor: "犯後態度與有利/不利資料",
    text: "最高法院判決記載，原審兼衡各次犯罪情節、智識程度、職業、生活狀況、捐助賑災行為及犯後態度，並依累犯規定加重其刑。",
    linked: ["lee", "defense", "court"],
    source: "supreme-107-3"
  },
  {
    factor: "應執行刑與比例原則",
    text: "2024年憲法法庭裁定記載，聲請人主張定應執行刑規定界限模糊、違反平等與比例等原則；裁定因期限與要件問題不受理。",
    linked: ["lee", "court"],
    source: "const-113-419"
  }
];

const searchPlan = [
  "最高法院107年度台上字第3號：第三審駁回上訴、補強證據、同意抗辯、量刑裁量。",
  "臺灣高等法院104年度侵上更(一)字第23號：主要事實、代號、逐案勘驗、罪名與附表一宣告刑。",
  "最高法院新聞稿363319：C1、C2、C3、C5、C8、C9、C10、H、F等匿名代號與案件摘要。",
  "憲法法庭113年審裁字第419號：定應執行刑與執行指揮後續聲請不受理。",
  "民事最高法院107年度台上字第1146號至1151號新聞稿：貞操權、隱私權與非財產上損害賠償脈絡。"
];

const state = {
  selectedId: "lee",
  tab: "profile",
  layer: "all",
  query: "",
  selectedLanternId: "lantern-2026",
  hoverCloseTimer: null,
  hoverLocked: false
};

const byId = Object.fromEntries(nodes.map((node) => [node.id, node]));
const sourceById = Object.fromEntries(sources.map((source) => [source.id, source]));

function sourceLink(id) {
  const source = sourceById[id];
  return `<a href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a>`;
}

function relatedToSelected(item) {
  return !item.linked || item.linked.includes(state.selectedId) || state.selectedId === "lee";
}

function matchesQueryNode(node) {
  const q = state.query.trim().toLowerCase();
  if (!q) return true;
  return JSON.stringify(node).toLowerCase().includes(q);
}

function visibleEdges() {
  return edges.filter((edge) => state.layer === "all" || edge.layer === state.layer);
}

function visibleNodeIds() {
  const ids = new Set(["lee"]);
  visibleEdges().forEach((edge) => {
    ids.add(edge.from);
    ids.add(edge.to);
  });
  return ids;
}

function renderLegend() {
  document.querySelector("#legend").innerHTML = Object.entries(categories).map(([, category]) => (
    `<span><i style="background:${category.color}"></i>${category.label}</span>`
  )).join("");
}

function renderNetwork() {
  const svg = document.querySelector("#network");
  const ids = visibleNodeIds();
  const edgeMarkup = visibleEdges().map((edge) => {
    const from = byId[edge.from];
    const to = byId[edge.to];
    const highlight = edge.from === state.selectedId || edge.to === state.selectedId ? "highlight" : "";
    const dim = !ids.has(edge.from) || !ids.has(edge.to);
    if (dim) return "";
    const mx = (from.x + to.x) / 2;
    const my = (from.y + to.y) / 2;
    return `
      <line class="edge ${highlight}" x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}"></line>
      <text class="edge-label" x="${mx}" y="${my - 8}" text-anchor="middle">${edge.label}</text>
    `;
  }).join("");

  const nodeMarkup = nodes.map((node) => {
    const filteredOut = !ids.has(node.id) || !matchesQueryNode(node);
    const selected = node.id === state.selectedId ? "selected" : "";
    const dim = filteredOut ? "dim" : "";
    const color = categories[node.category].color;
    return `
      <g class="node ${selected} ${dim}" data-id="${node.id}" transform="translate(${node.x} ${node.y})">
        <circle r="${node.r}" fill="${color}"></circle>
        <text text-anchor="middle" y="-4">${node.label}</text>
        <text class="sub" text-anchor="middle" y="16">${node.sub}</text>
      </g>
    `;
  }).join("");

  svg.innerHTML = edgeMarkup + nodeMarkup;
  svg.querySelectorAll(".node").forEach((node) => {
    node.addEventListener("click", () => {
      state.selectedId = node.dataset.id;
      renderAll();
    });
    node.addEventListener("mouseenter", (event) => showHoverCard(node.dataset.id, event));
    node.addEventListener("mousemove", (event) => moveHoverCard(event));
    node.addEventListener("mouseleave", hideHoverCard);
  });
}

function showHoverCard(id, event) {
  const record = hoverRecords[id];
  const card = document.querySelector("#hoverCard");
  clearTimeout(state.hoverCloseTimer);
  if (!record) {
    card.classList.remove("visible");
    card.setAttribute("aria-hidden", "true");
    return;
  }

  const node = byId[id];
  card.innerHTML = `
    <h3>${node.label} · ${node.sub}</h3>
    <p><strong>${record.courtCode}</strong></p>
    <p>${record.legal}</p>
    <ul>
      ${record.snippets.map((snippet) => `<li><span class="dialogue">${snippet}</span></li>`).join("")}
    </ul>
    <p class="source-note">來源：${record.source}<br>${record.caution}</p>
  `;
  card.classList.add("visible");
  card.setAttribute("aria-hidden", "false");
  moveHoverCard(event);
}

function moveHoverCard(event) {
  const card = document.querySelector("#hoverCard");
  if (!card.classList.contains("visible")) return;
  const panel = document.querySelector(".graph-panel");
  const rect = panel.getBoundingClientRect();
  const cardWidth = card.offsetWidth || 390;
  const cardHeight = card.offsetHeight || 260;
  let left = event.clientX - rect.left + 18;
  let top = event.clientY - rect.top + 18;

  if (left + cardWidth > rect.width - 12) left = event.clientX - rect.left - cardWidth - 18;
  if (top + cardHeight > rect.height - 12) top = rect.height - cardHeight - 12;
  if (left < 12) left = 12;
  if (top < 12) top = 12;

  card.style.left = `${left}px`;
  card.style.top = `${top}px`;
}

function hideHoverCard() {
  if (state.hoverLocked) return;
  state.hoverCloseTimer = setTimeout(() => {
    if (state.hoverLocked) return;
    const card = document.querySelector("#hoverCard");
    card.classList.remove("visible");
    card.setAttribute("aria-hidden", "true");
  }, 180);
}

function forceHideHoverCard() {
  clearTimeout(state.hoverCloseTimer);
  const card = document.querySelector("#hoverCard");
  card.classList.remove("visible");
  card.setAttribute("aria-hidden", "true");
}

function wireHoverCard() {
  const card = document.querySelector("#hoverCard");
  card.addEventListener("mouseenter", () => {
    clearTimeout(state.hoverCloseTimer);
    state.hoverLocked = true;
  });
  card.addEventListener("mouseleave", () => {
    state.hoverLocked = false;
    forceHideHoverCard();
  });
}

function renderProfile(node) {
  const nodeEdges = edges.filter((edge) => edge.from === node.id || edge.to === node.id);
  return `
    <div class="detail-title">
      <div>
        <h2>${node.label}</h2>
        <p>${node.sub} · ${categories[node.category].label}</p>
      </div>
      <span class="status-pill">已建檔</span>
    </div>
    <p class="note">${node.summary}</p>
    <div class="tag-row">${node.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
    <div class="record">
      <h3>資料狀態</h3>
      <p>${node.sourceStatus}</p>
    </div>
    <div class="record">
      <h3>直接連結</h3>
      ${nodeEdges.map((edge) => {
        const other = byId[edge.from === node.id ? edge.to : edge.from];
        return `<p><strong>${other.label}</strong>：${edge.label}</p>`;
      }).join("") || `<p>無直接連結。</p>`}
    </div>
    ${node.id === "lee" ? renderLanternWorks() : ""}
  `;
}

function renderLanternWorks() {
  const selected = lanternWorks.find((work) => work.id === state.selectedLanternId) || lanternWorks[0];
  return `
    <section class="lantern-section" aria-label="花燈作品">
      <div class="record">
        <h3>服刑期間花燈作品</h3>
        <p>此區呈現公開報導中的後續社會敘事：技能教化、矯正制度與公共觀感。它不改變前述犯罪事實與司法判斷。</p>
        <div class="lantern-grid">
          ${lanternWorks.map((work) => `
            <button class="lantern-card ${work.id === selected.id ? "active" : ""}" type="button" data-lantern-id="${work.id}">
              <img src="${work.image}" alt="${work.year}年花燈作品「${work.title}」" loading="lazy" />
              <span>${work.year}</span>
              <strong>${work.title}</strong>
              <small>${work.award}</small>
            </button>
          `).join("")}
        </div>
      </div>
      <article class="lantern-detail">
        <figure class="lantern-figure">
          <img src="${selected.image}" alt="${selected.year}年花燈作品「${selected.title}」" />
          <figcaption>${selected.imageCredit}</figcaption>
        </figure>
        <div class="detail-title">
          <div>
            <h2>${selected.title}</h2>
            <p>${selected.year} · ${selected.award}</p>
          </div>
          <span class="status-pill">花燈作品</span>
        </div>
        <p><strong>製作/展出脈絡：</strong>${selected.context}</p>
        <p><strong>作品主題：</strong>${selected.concept}</p>
        <p>來源：${sourceLink(selected.source)}</p>
      </article>
    </section>
  `;
}

function renderEvents() {
  const rows = events.filter(relatedToSelected);
  return rows.map((item) => `
    <article class="record">
      <time>${item.date}</time>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <p>來源：${sourceLink(item.source)}</p>
    </article>
  `).join("") || `<div class="empty">目前沒有與此節點直接連結的時間資料。</div>`;
}

function renderElements() {
  const elementRows = elements.filter(relatedToSelected).map((item) => `
    <article class="matrix-row">
      <strong>${item.topic}<br />${item.law}</strong>
      <div>
        <h3>法律爭點</h3>
        <p>${item.issue}</p>
        <h3>對話/證據重點</h3>
        <p>${item.evidence}</p>
      </div>
    </article>
  `).join("");

  const dialogueRows = dialogueRecords.filter(relatedToSelected).map((item) => `
    <article class="record">
      <span class="status-pill">${item.status}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <p><strong>建議欄位：</strong>${item.fields.join("、")}</p>
    </article>
  `).join("");

  return `
    ${elementRows || `<div class="empty">目前沒有直接連結的構成要件資料。</div>`}
    <h2>對話與證據索引</h2>
    ${dialogueRows || `<div class="empty">此節點尚無對話紀錄抽取規格。</div>`}
  `;
}

function renderSentencing() {
  return sentencing.filter(relatedToSelected).map((item) => `
    <article class="record">
      <h3>${item.factor}</h3>
      <p>${item.text}</p>
      <p>來源：${sourceLink(item.source)}</p>
    </article>
  `).join("") || `<div class="empty">目前沒有與此節點直接連結的量刑資料。</div>`;
}

function renderSources() {
  return `
    <div class="record">
      <h3>司法院查證索引</h3>
      <p>本頁已依司法院裁判書、最高法院新聞稿與憲法法庭資料重新整理。下列索引可用來回查每個節點與量刑欄位的來源。</p>
      ${searchPlan.map((line) => `<p class="quote">${line}</p>`).join("")}
    </div>
    ${sources.map((source) => `
      <article class="source-card">
        <h3>${source.title}</h3>
        <p>${source.kind === "primary" ? "主要來源" : "輔助來源"}：${source.note}</p>
        <p><a href="${source.url}" target="_blank" rel="noreferrer">${source.url}</a></p>
      </article>
    `).join("")}
  `;
}

function renderDetail() {
  const node = byId[state.selectedId];
  let html = "";
  if (state.tab === "profile") html = renderProfile(node);
  if (state.tab === "events") html = renderEvents();
  if (state.tab === "elements") html = renderElements();
  if (state.tab === "sentencing") html = renderSentencing();
  if (state.tab === "sources") html = renderSources();
  document.querySelector("#detailContent").innerHTML = html;
  wireLanternCards();
}

function wireLanternCards() {
  document.querySelectorAll(".lantern-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedLanternId = card.dataset.lanternId;
      renderDetail();
    });
  });
}

function renderTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === state.tab);
  });
}

function renderAll() {
  renderLegend();
  renderNetwork();
  renderTabs();
  renderDetail();
}

document.querySelector("#layerSelect").addEventListener("change", (event) => {
  state.layer = event.target.value;
  renderAll();
});

document.querySelector("#searchInput").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderNetwork();
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    state.tab = tab.dataset.tab;
    renderAll();
  });
});

wireHoverCard();
renderAll();
