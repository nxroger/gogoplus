import React from 'https://esm.sh/react@18';

const navItems = ['AI 行程', '精選行程', '旅遊故事', '合作夥伴'];

const heroStats = [
  { value: '3 分鐘', label: '完成智慧行程規劃' },
  { value: '98%', label: '旅人滿意度與好評' },
  { value: '24/7', label: '真人顧問線上支援' }
];

const featuredTrips = [
  {
    title: '東京 AI 智慧攻略 4 日遊',
    description: '一次收集美食、購物與文化亮點。',
    tags: ['熱門', '親子友善'],
    image:
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: '首爾韓系時尚街拍 3 日遊',
    description: '深度走訪韓劇取景與人氣市集。',
    tags: ['姐妹旅行', '購物首選'],
    image:
      'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: '大阪親子樂園歡樂假期',
    description: '日本環球影城與海遊館雙重暢玩。',
    tags: ['家庭出遊', '主題樂園'],
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: '北海道雪白溫泉療癒行',
    description: '雪國秘境搭配星級溫泉旅宿。',
    tags: ['冬季限定', '療癒放鬆'],
    image:
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: '台北夜間城市美食地圖',
    description: '米其林小吃、深夜食堂一次收藏。',
    tags: ['在地嚮導', '美食饗宴'],
    image:
      'https://images.unsplash.com/photo-1508939549514-0a7aa59f5a05?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: '巴黎藝術漫步與凡爾賽',
    description: '沉浸世界級博物館與宮廷花園。',
    tags: ['文化巡禮', '奢華假期'],
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80'
  }
];

const localExperiences = [
  {
    title: '京都和服茶道體驗',
    description: '職人手把手示範抹茶禮儀，附攝影師紀錄。',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: '清邁叢林晨間熱氣球',
    description: '天際視角俯瞰山巒與古城，附豪華早餐。',
    image:
      'https://images.unsplash.com/photo-1526481280695-3c46973edc83?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: '台東部落秘境探訪',
    description: '與部落青年一起尋訪山林與海岸。',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: '巴塞隆納高第建築私旅',
    description: '專屬導覽深入聖家堂與米拉之家。',
    image:
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80'
  }
];

const desserts = [
  {
    title: '台中珍珠奶茶蛋糕',
    description: '每日現做限量供應，外帶熱銷第一。',
    price: 'NT$ 320',
    image:
      'https://images.unsplash.com/photo-1586985564150-6ba6c0237d97?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: '嘉義手作檸檬塔',
    description: '酸甜清爽搭配綿密奶霜。',
    price: 'NT$ 260',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: '鹿港古早味鳳梨酥',
    description: '嚴選鳳梨果肉與奶油黃金比例。',
    price: 'NT$ 480',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: '花蓮栗子奶油泡芙',
    description: '酥脆外皮與雙層鮮奶內餡。',
    price: 'NT$ 180',
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80'
  }
];

const stories = [
  {
    title: '關西賞楓鐵道迷人路線',
    excerpt: '搭乘私房鐵道穿梭京都、奈良與琵琶湖畔。',
    author: '旅人 Kiki',
    image:
      'https://images.unsplash.com/photo-1543248939-ff40856f65d4?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: '快閃新加坡的 48 小時',
    excerpt: 'AI 帶路品嚐米其林小販與濱海灣夜景。',
    author: '旅人 Yui',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: '巴黎人的週末日常',
    excerpt: '沿著塞納河散步，再進入小酒館談天。',
    author: '旅人 Marc',
    image:
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: '台南老屋文青散策',
    excerpt: '巷弄咖啡、手作選物與深夜小劇場。',
    author: '旅人 Wendy',
    image:
      'https://images.unsplash.com/photo-1470123808288-1e59739d9350?auto=format&fit=crop&w=1000&q=80'
  }
];

const tips = [
  '親子旅遊',
  '自由行',
  '在地美食',
  '文化巡禮',
  '海島度假',
  '滑雪行程',
  '夜市必吃',
  '城際交通',
  '免稅購物',
  '全包式旅宿'
];

const blogPosts = [
  {
    title: '香港高空酒吧懶人包',
    excerpt: 'AI 推薦 8 間必訪高空酒吧，一次打卡港都夜景。',
    meta: '行程攻略 · 8 分鐘閱讀'
  },
  {
    title: '沖繩親子海洋樂園全指南',
    excerpt: '安排海生館、星砂灘與海景飯店，一站式搞定。',
    meta: '家庭旅遊 · 6 分鐘閱讀'
  },
  {
    title: '荷蘭鬱金香花季交通懶人包',
    excerpt: '線上購票、交通銜接與最佳花況拍攝時間。',
    meta: '花季情報 · 5 分鐘閱讀'
  }
];

const footerLinks = [
  {
    heading: '服務介紹',
    links: ['AI 規劃', '客製旅程', '企業方案', '品牌故事']
  },
  {
    heading: '旅遊靈感',
    links: ['最新活動', '旅人故事', '熱門目的地', '季節主題']
  },
  {
    heading: '支援中心',
    links: ['常見問題', '聯絡客服', '隱私權政策', '使用條款']
  }
];

const App = () => {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-overlay" />
        <nav className="navbar">
          <div className="brand">
            <span className="brand-logo">Go</span>
            <span className="brand-text">GoPlus</span>
          </div>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item} href="#" className="nav-link">
                {item}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button className="ghost-btn">登入</button>
            <button className="primary-btn">立即體驗</button>
          </div>
        </nav>

        <div className="hero-body">
          <div className="hero-copy">
            <span className="pill">AI 智慧旅遊平台</span>
            <h1>
              高速定製旅程？
              <br />AI 幫你安排！
            </h1>
            <p>
              只要輸入旅遊靈感，我們的 AI 顧問就能在數分鐘內生成
              <strong> 專屬行程、預算與交通安排</strong>。
            </p>
            <div className="hero-actions">
              <button className="primary-btn large">開始規劃</button>
              <button className="ghost-btn large">觀看示範</button>
            </div>
            <div className="hero-input">
              <input type="text" placeholder="想去哪裡？輸入目的地或旅遊關鍵字" />
              <button className="primary-btn">生成行程</button>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-header">
              <span className="badge">AI 建議</span>
              <span className="time">2024 春季版</span>
            </div>
            <h3>東京 4 日風格旅</h3>
            <ul className="itinerary">
              <li>
                <span>Day 1</span>
                <p>晴空塔 · 淺草寺人力車 · 隅田川夜遊船</p>
              </li>
              <li>
                <span>Day 2</span>
                <p>代官山選物 · 表參道咖啡 · 澀谷夜景</p>
              </li>
              <li>
                <span>Day 3</span>
                <p>上野美術館 · 谷中銀座散步 · 日式居酒屋</p>
              </li>
              <li>
                <span>Day 4</span>
                <p>築地市場 · 銀座購物 · 成田機場退稅</p>
              </li>
            </ul>
            <button className="secondary-btn">下載完整行程</button>
          </div>
        </div>

        <div className="hero-stats">
          {heroStats.map((stat) => (
            <div key={stat.value} className="stat-card">
              <h4>{stat.value}</h4>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </header>

      <main>
        <section className="section">
          <div className="section-header">
            <div>
              <h2>AI 精選行程推薦</h2>
              <p>依照你的旅遊偏好，推薦最熱門也最適合的客製方案。</p>
            </div>
            <button className="ghost-btn">瀏覽全部行程</button>
          </div>
          <div className="card-grid">
            {featuredTrips.map((trip) => (
              <article key={trip.title} className="trip-card">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${trip.image})` }}
                />
                <div className="card-body">
                  <div className="card-tags">
                    {trip.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3>{trip.title}</h3>
                  <p>{trip.description}</p>
                  <button className="text-btn">查看行程細節 →</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-light">
          <div className="section-header">
            <div>
              <h2>當地文化體驗</h2>
              <p>結合在地達人的故事，打造比旅遊書更深入的行程亮點。</p>
            </div>
            <button className="ghost-btn">預約達人</button>
          </div>
          <div className="card-grid small">
            {localExperiences.map((exp) => (
              <article key={exp.title} className="experience-card">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${exp.image})` }}
                />
                <div className="card-body">
                  <h3>{exp.title}</h3>
                  <p>{exp.description}</p>
                  <button className="text-btn">了解更多 →</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-highlight">
          <div className="section-header">
            <div>
              <h2>旅人最愛甜點伴手禮</h2>
              <p>把旅途中最甜的滋味帶回家，每樣都是嚴選合作店家。</p>
            </div>
            <button className="ghost-btn">查看取貨方式</button>
          </div>
          <div className="card-grid dessert">
            {desserts.map((item) => (
              <article key={item.title} className="dessert-card">
                <img src={item.image} alt={item.title} />
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="dessert-footer">
                    <span className="price">{item.price}</span>
                    <button className="secondary-btn">加入旅程</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <h2>旅人故事精選</h2>
              <p>追蹤旅人足跡，參考真實心得調整你的專屬行程。</p>
            </div>
            <button className="ghost-btn">投稿我的旅程</button>
          </div>
          <div className="card-grid stories">
            {stories.map((story) => (
              <article key={story.title} className="story-card">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${story.image})` }}
                >
                  <span className="story-author">{story.author}</span>
                </div>
                <div className="card-body">
                  <h3>{story.title}</h3>
                  <p>{story.excerpt}</p>
                  <button className="text-btn">閱讀全文 →</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section keywords">
          <h2>熱搜關鍵字</h2>
          <p>看看旅人們正在搜尋的主題，靈感瞬間湧現。</p>
          <div className="keyword-list">
            {tips.map((tip) => (
              <span key={tip} className="keyword">
                #{tip}
              </span>
            ))}
          </div>
        </section>

        <section className="section section-light">
          <div className="section-header">
            <div>
              <h2>最新旅遊靈感</h2>
              <p>掌握趨勢話題，讓你的行程永遠走在最前面。</p>
            </div>
            <button className="ghost-btn">訂閱週報</button>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.title} className="blog-card">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="meta">{post.meta}</span>
                <button className="text-btn">收藏文章 →</button>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-logo">Go</span>
            <span className="brand-text">GoPlus</span>
          </div>
          <p>
            由 AI 與旅遊專家共同打造的智慧旅遊平台，
            幫你把靈感轉換成實際出發的旅程。
          </p>
        </div>
        <div className="footer-links">
          {footerLinks.map((column) => (
            <div key={column.heading} className="footer-column">
              <h4>{column.heading}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} GoGoPlus Travel Tech.</span>
          <div className="footer-bottom-links">
            <a href="#">服務條款</a>
            <a href="#">隱私權政策</a>
            <a href="#">Cookie 設定</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
