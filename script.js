// ============================================
// MENU DATA & TRANSLATIONS
// ============================================

const menuData = {
    company: {
        en: [
            {
                id: 'enterprise',
                title: 'Profile',
                subtitle: 'Defense-tech, delivered.',
                desc: 'We connect defense companies with Latin American markets. We drive growth through in-house marketing and strategic advisory.',
                cards: [
                    { title: '10 Years in Defense', desc: 'We help defense-tech startups and global firms grow in new markets. Ten years of dedicated industry experience.' },
                    { title: '50+ Completed Projects', desc: 'We deliver strategy, positioning, and market campaigns. We serve companies serious about expansion.' },
                    { title: 'Based in LATAM', desc: 'We are based in Colombia and operate across the region. We are on the ground where your next market is.' },
                    { title: 'Clean Operations', desc: 'We focus on selective partnerships and strict ethical standards. No shortcuts. No grey areas.' }
                ]
            },
            {
                id: 'solutions',
                title: 'Solutions',
                subtitle: 'End-to-end enablement.',
                desc: 'We provide localized support across the entire sales lifecycle. Our team helps you secure key defense contracts.',
                cards: [
                    { title: 'Access Gateway', desc: 'We connect defense companies and leaders with the Latin American region.' },
                    { title: 'Strategic Presence', desc: 'We provide direct representation and local intelligence.' },
                    { title: 'Market Access', desc: 'We unlock public procurement and military bids. We actively monitor regional tenders.' },
                    { title: 'Local Footprint', desc: 'Our teams are on the ground. We are embedded in key regional defense hubs.' }
                ]
            },
            {
                id: 'vision',
                title: 'Vision',
                subtitle: 'Technology meets tomorrow.',
                desc: 'We support open platforms, autonomous systems, and modern software. We protect critical assets from drones to deep space.',
                cards: [
                    { title: 'Open by Design', desc: 'We build open-source architectures. Our systems are transparent, auditable, and adaptable.' },
                    { title: 'Software-First', desc: 'Hardware is the body. Software is the mind. We focus on software-defined solutions.' },
                    { title: 'Drones to Deep Space', desc: 'We use the same engineering DNA. Our work spans from tactical UAVs to orbit.' },
                    { title: 'The Long Arc', desc: 'We build for the long term. We think in decades, not quarters.' }
                ]
            }
        ],
        tr: [
            {
                id: 'enterprise',
                title: 'Profil',
                subtitle: 'Türk Savunma Teknolojilerinin Latin Amerika Ekibi',
                desc: 'Türk mühendisliğini Latin Amerika fırsatlarıyla buluşturuyoruz. Bölgesel büyüme ve iş geliştirme ortağınızız.',
                cards: [
                    { title: '10+ Yıllık Tecrübe', desc: 'Savunma ve teknoloji firmalarına destek veriyoruz. On yılı aşkın sektör tecrübesine sahibiz.' },
                    { title: '50+ Başarılı Proje', desc: 'Bölgesel büyüme odaklı 50\'den fazla proje gerçekleştirdik. Pazarlama, satış ve konumlandırma çözümleri sunuyoruz.' },
                    { title: 'Kolombiya Merkezli, LATAM Genelinde Aktif', desc: 'Kolombiya merkezli ekibimizle bölge genelinde aktifiz. Yerel dinamiklere ve güçlü ilişki ağlarına sahibiz.' },
                    { title: 'Etik Değerlere Bağlıyız', desc: 'Uluslararası standartlara ve etik değerlere tam uyum sağlıyoruz. Süreçlerimizde şeffaflık önceliğimizdir.' }
                ]
            },
            {
                id: 'solutions',
                title: 'Çözümler',
                subtitle: 'Yeni Pazarlara Erişim. Güçlü Ortaklıklar. Kalıcı Bölgesel Varlık.',
                desc: 'Pazar erişiminden yerel ilişki yönetimine kadar destek veriyoruz. Süreçleri uçtan uca yönetiyoruz.',
                cards: [
                    { title: 'Doğru Kapılar', desc: 'Teknolojilerinizi doğru paydaşlarla buluşturuyoruz. Yeni fırsatlar yaratıyoruz.' },
                    { title: 'Sahada Güçlü Varlık', desc: 'Yerel ekiplerimizle sahada sürekli varlık gösteriyoruz. Güçlü ağlar kuruyoruz.' },
                    { title: 'İş Geliştirme ve Büyüme', desc: 'İş geliştirme ve stratejik ortaklıklar kuruyoruz. Bölgesel büyümeyi destekliyoruz.' },
                    { title: 'Dijital Pazarlama ve İletişim', desc: 'Marka iletişimiyle bölgesel görünürlük yaratıyoruz. Dijital pazarlama çözümleri sunuyoruz.' }
                ]
            },
            {
                id: 'vision',
                title: 'Vizyon',
                subtitle: 'Teknoloji yarın için değil.',
                desc: 'Açık platformları ve otonom sistemleri savunuyoruz. Kritik varlıkları drone\'lardan derin uzaya kadar koruyoruz.',
                cards: [
                    { title: 'Açık Kaynağı Destekliyoruz', desc: 'Açık kaynak mimarileri kullanıyoruz. Sistemlerimiz şeffaf, denetlenebilir ve uyarlanabilirdir.' },
                    { title: 'Yazılım Önemli Olandır', desc: 'Donanım bedendir. Yazılım ise akıldır. Geleceği yazılım tanımlar.' },
                    { title: 'Teknoloji Transferi ile Eşit Bir Dünya', desc: 'Mühendisliğin dünyayı daha iyi bir yer yapacağına inanıyoruz. Teknoloji odaklı çözümler geliştiriyoruz.' },
                    { title: 'Uzun Soluklu Ortaklık', desc: 'Bölgesel büyümede kalıcı ve stratejik bir ortağız. Güvenilir çözümler sunuyoruz.' }
                ]
            }
        ],
        es: [
            {
                id: 'enterprise',
                title: 'Perfil',
                subtitle: 'Acceso estratégico al mercado.',
                desc: 'Somos el principal socio de desarrollo de negocios en América Latina. Brindamos asesoría estratégica a empresas de defensa.',
                cards: [
                    { title: '10 Años en Defensa', desc: 'Ayudamos a startups y empresas globales a crecer en nuevos mercados. Contamos con una década de experiencia.' },
                    { title: '50+ Proyectos Completados', desc: 'Entregamos estrategia, posicionamiento y campañas de mercado. Apoyamos a empresas enfocadas en su expansión.' },
                    { title: 'Base en LATAM', desc: 'Nuestra sede está en Colombia y operamos en toda la región. Estamos presentes donde está su próximo mercado.' },
                    { title: 'Operación Limpia', desc: 'Cumplimos con controles de exportación y estándares éticos. Sin atajos. Sin zonas grises.' }
                ]
            },
            {
                id: 'solutions',
                title: 'Soluciones',
                subtitle: 'Habilitación de extremo a extremo.',
                desc: 'Ofrecemos soporte localizado en todo el desarrollo de negocios. Ayudamos a gestionar el ciclo de ventas.',
                cards: [
                    { title: 'Portal de Acceso', desc: 'Conectamos empresas de defensa y líderes tecnológicos con la región.' },
                    { title: 'Presencia Estratégica', desc: 'Brindamos representación directa sobre el terreno e inteligencia local.' },
                    { title: 'Acceso a Mercados', desc: 'Facilitamos el acceso a licitaciones militares. Monitoreamos convocatorias activas de forma continua.' },
                    { title: 'Presencia Local', desc: 'Contamos con una red activa sobre el terreno. Integramos equipos locales en centros de defensa clave.' }
                ]
            },
            {
                id: 'vision',
                title: 'Visión',
                subtitle: 'La tecnología se encuentra con el mañana.',
                desc: 'Desarrollamos plataformas abiertas y sistemas autónomos. Protegemos lo que importa, desde drones hasta el espacio profundo.',
                cards: [
                    { title: 'Abierto por Diseño', desc: 'Usamos arquitecturas de código abierto. Son transparentes, auditables y adaptables.' },
                    { title: 'Software Primero', desc: 'El hardware es el cuerpo. El software es la mente. El software define el futuro.' },
                    { title: 'Drones al Espacio', desc: 'Compartimos el mismo ADN de ingeniería. Trabajamos desde UAVs tácticos hasta misiones en órbita.' },
                    { title: 'Largo Plazo', desc: 'Diseñamos para el futuro. Pensamos en décadas, no en trimestres.' }
                ]
            }
        ]
    },
    resources: {
        en: [
            {
                id: 'defense-marketing',
                title: 'Defense Marketing',
                subtitle: 'Brand, Content & Positioning',
                desc: 'How defense companies build brands, win attention, and compete for contracts in the modern era.',
                cards: [
                    { title: 'Defense Tech Marketing 101', desc: 'How modern defense marketing became a competitive advantage', slug: 'dm-marketing-101' },
                    { title: 'Your Website Problem', desc: 'Why your website is losing you deals before you even pitch', slug: 'dm-website-sales' },
                    { title: 'Winning Attention', desc: 'The companies that win contracts start by being seen', slug: 'dm-winning-attention' },
                    { title: 'Beyond Capability Docs', desc: 'What procurement officials actually read and share', slug: 'dm-capability-docs' }
                ]
            },
            {
                id: 'playbook',
                title: 'Playbook',
                subtitle: 'Execution & Operations',
                desc: 'Tactical execution guides for entering markets, structuring deals, and getting trade shows right.',
                cards: [
                    { title: 'First 90 Days', desc: 'What to do when you land in a new defense market', slug: 'pb-first-90-days' },
                    { title: 'Partner Structures', desc: 'Local reps, distributors, or JVs and how to choose', slug: 'pb-local-reps' },
                    { title: 'Trade Show Playbook', desc: 'Which defense expos move the needle and which waste time', slug: 'pb-trade-shows' },
                    { title: 'Export Compliance', desc: 'The compliance checklist nobody hands you before your first deal', slug: 'pb-export-compliance' }
                ]
            },
            {
                id: 'market-pulse',
                title: 'Market Pulse',
                subtitle: 'Trends & Intelligence',
                desc: 'What is moving, what is shifting, and where the money is going in global defense.',
                cards: [
                    { title: 'Budget Trajectories', desc: 'Where defense spending is actually increasing in 2026', slug: 'mp-defense-budgets' },
                    { title: 'Procurement Shift', desc: 'How digital procurement is changing the rules of engagement', slug: 'mp-procurement-shift' },
                    { title: 'Software-Defined', desc: 'Why software is reshaping how militaries buy hardware', slug: 'mp-software-defined' },
                    { title: 'Five Cultures', desc: 'Five procurement cultures and five completely different playbooks', slug: 'mp-five-cultures' }
                ]
            },
            {
                id: 'field-notes',
                title: 'Field Notes',
                subtitle: 'On the Ground',
                desc: 'What you see, hear, and learn when you are actually there. Observations from the field.',
                cards: [
                    { title: 'Expo Reality', desc: 'What actually happens at a defense expo that nobody writes about', slug: 'fn-defense-expo' },
                    { title: 'Official Access', desc: 'The procurement official problem and how to solve it', slug: 'fn-procurement-official' },
                    { title: 'Deals at Dinner', desc: 'Why the best defense deals start at a restaurant, not a boardroom', slug: 'fn-deals-at-dinner' },
                    { title: 'Entry Mistakes', desc: 'Three things every market entry team gets wrong the first time', slug: 'fn-market-entry' }
                ]
            }
        ],
        tr: [
            {
                id: 'defense-marketing',
                title: 'Savunma Teknolojisi ve Ürün Pazarlaması',
                subtitle: 'Marka, İçerik ve Konumlandırma',
                desc: 'Savunma şirketleri marka oluşturmayı, görünür olmayı ve ihale rekabetinde öne çıkmayı nasıl başarıyor?',
                cards: [
                    { title: 'Savunma Teknolojisi ve Ürün Pazarlaması 101', desc: 'Pazarlama, savunma sanayiinde nasıl stratejik bir silaha dönüştü?', slug: 'dm-marketing-101' },
                    { title: 'Web Siteniz Sizi Satıyor mu?', desc: 'Henüz sunuma çıkmadan anlaşmaları neden kaybediyorsunuz?', slug: 'dm-website-sales' },
                    { title: 'Önce Görünür Ol', desc: 'İhaleleri kazanan şirketlerin ortak noktası: Süreç başlamadan önce tanınmak', slug: 'dm-winning-attention' },
                    { title: 'Yetenek Dokümanlarının Ötesi', desc: 'Satın alma yetkilileri gerçekte neyi okuyor, neyi paylaşıyor?', slug: 'dm-capability-docs' }
                ]
            },
            {
                id: 'playbook',
                title: 'Oyun Planı',
                subtitle: 'Uygulama ve Operasyonlar',
                desc: 'Yeni pazarlara giriş, ortaklık yapıları ve savunma fuarlarında sonuç alma rehberleri.',
                cards: [
                    { title: 'İlk 90 Gün', desc: 'Yeni bir savunma pazarına adım attığınızda yapmanız ve yapmamanız gerekenler', slug: 'pb-first-90-days' },
                    { title: 'Doğru Ortak, Doğru Model', desc: 'Yerel temsilci mi, distribütör mü, ortak girişim mi? Yanlış seçim iki yıla mal olur', slug: 'pb-local-reps' },
                    { title: 'Fuar Stratejisi', desc: 'Hangi savunma fuarları gerçekten iş getirir, hangileri zaman ve bütçe israfıdır?', slug: 'pb-trade-shows' },
                    { title: 'İhracat Uyum Rehberi', desc: 'İlk uluslararası anlaşmanızdan önce kimsenin size vermediği kontrol listesi', slug: 'pb-export-compliance' }
                ]
            },
            {
                id: 'market-pulse',
                title: 'Pazar Nabzı',
                subtitle: 'Trendler ve Bir Sonraki Adım',
                desc: 'Küresel savunma pazarında neler değişiyor, bütçeler nereye kayıyor, fırsatlar nerede doğuyor?',
                cards: [
                    { title: 'Bütçe Haritası 2026', desc: '2026\'da savunma harcamaları gerçekte nerede artıyor, nerede durağan?', slug: 'mp-defense-budgets' },
                    { title: 'Dijital Tedarik Devrimi', desc: 'Dijitalleşen ihale süreçleri oyunun kurallarını nasıl yeniden yazıyor?', slug: 'mp-procurement-shift' },
                    { title: 'Yazılım Her Şeyi Değiştiriyor', desc: 'Ordular neden artık donanımdan önce yazılıma bakıyor?', slug: 'mp-software-defined' },
                    { title: 'Beş Farklı Tedarik Kültürü', desc: 'Her ülkenin kendine özgü satın alma kültürü var ve her biri ayrı bir strateji gerektiriyor', slug: 'mp-five-cultures' }
                ]
            },
            {
                id: 'field-notes',
                title: 'Saha Notları',
                subtitle: 'Sahadan Gözlemler',
                desc: 'Fuarlarda, toplantılarda ve sahada yaşananlar, yani kimsenin yazmadığı ama herkesin bilmesi gereken gerçekler.',
                cards: [
                    { title: 'Fuarların Gerçek Yüzü', desc: 'Savunma fuarlarında yaşanan ama hiçbir raporda yer almayan gerçekler', slug: 'fn-defense-expo' },
                    { title: 'Doğru Kapıyı Açmak', desc: 'Satın alma yetkililerine ulaşmak neden bu kadar zor ve nasıl çözülür?', slug: 'fn-procurement-official' },
                    { title: 'Anlaşma Masada Değil, Yemekte Başlar', desc: 'Savunma iş geliştirmede resmi olmayan ortamların gücü', slug: 'fn-deals-at-dinner' },
                    { title: 'İlk Seferde Yapılan Üç Hata', desc: 'Yeni pazarlara giren her ekibin düştüğü aynı tuzaklar', slug: 'fn-market-entry' }
                ]
            }
        ],
        es: [
            {
                id: 'defense-marketing',
                title: 'Marketing de Defensa',
                subtitle: 'Marca, Contenido y Posicionamiento',
                desc: 'Cómo las empresas de defensa construyen marcas, ganan atención y compiten por contratos en la era moderna.',
                cards: [
                    { title: 'Marketing de Tecnología de Defensa 101', desc: 'Cómo el marketing de defensa moderno se convirtió en ventaja competitiva', slug: 'dm-marketing-101' },
                    { title: 'El Problema de tu Web', desc: 'Por qué tu sitio web te está perdiendo negocios antes de presentar', slug: 'dm-website-sales' },
                    { title: 'Ganar Atención', desc: 'Las empresas que ganan contratos comienzan por ser visibles', slug: 'dm-winning-attention' },
                    { title: 'Más Allá de los Docs', desc: 'Lo que los oficiales de compras realmente leen y comparten', slug: 'dm-capability-docs' }
                ]
            },
            {
                id: 'playbook',
                title: 'Guía Práctica',
                subtitle: 'Ejecución y Operaciones',
                desc: 'Guías tácticas para entrar en mercados, estructurar acuerdos y aprovechar ferias.',
                cards: [
                    { title: 'Primeros 90 Días', desc: 'Qué hacer cuando llegas a un nuevo mercado de defensa', slug: 'pb-first-90-days' },
                    { title: 'Estructuras de Socios', desc: 'Representantes locales, distribuidores o JVs y cómo elegir', slug: 'pb-local-reps' },
                    { title: 'Guía de Ferias', desc: 'Qué ferias de defensa generan resultados y cuáles pierden tiempo', slug: 'pb-trade-shows' },
                    { title: 'Cumplimiento Export.', desc: 'El checklist de cumplimiento que nadie te da antes del primer negocio', slug: 'pb-export-compliance' }
                ]
            },
            {
                id: 'market-pulse',
                title: 'Pulso del Mercado',
                subtitle: 'Tendencias e Inteligencia',
                desc: 'Qué se mueve, qué cambia y hacia dónde va el dinero en la defensa global.',
                cards: [
                    { title: 'Presupuestos', desc: 'Dónde realmente aumenta el gasto en defensa en 2026', slug: 'mp-defense-budgets' },
                    { title: 'Cambio en Compras', desc: 'Cómo las compras digitales están cambiando las reglas', slug: 'mp-procurement-shift' },
                    { title: 'Software-Defined', desc: 'Por qué el software redefine cómo los ejércitos compran hardware', slug: 'mp-software-defined' },
                    { title: 'Cinco Culturas', desc: 'Cinco culturas de compras y cinco guías completamente diferentes', slug: 'mp-five-cultures' }
                ]
            },
            {
                id: 'field-notes',
                title: 'Notas de Campo',
                subtitle: 'Desde el Terreno',
                desc: 'Lo que ves, escuchas y aprendes cuando realmente estás ahí. Observaciones del campo.',
                cards: [
                    { title: 'Realidad de Ferias', desc: 'Lo que realmente pasa en una feria de defensa que nadie escribe', slug: 'fn-defense-expo' },
                    { title: 'Acceso a Oficiales', desc: 'El problema del oficial de compras y cómo resolverlo', slug: 'fn-procurement-official' },
                    { title: 'Negocios en la Cena', desc: 'Por qué los mejores negocios de defensa comienzan en un restaurante', slug: 'fn-deals-at-dinner' },
                    { title: 'Errores de Entrada', desc: 'Tres cosas que todo equipo de entrada al mercado hace mal la primera vez', slug: 'fn-market-entry' }
                ]
            }
        ]
    },
    contact: {
        en: [
            {
                id: 'channels',
                title: 'Channels',
                subtitle: 'Reach out to us',
                desc: 'Connect with our team for business representation or partner inquiries.',
                cards: [
                    { title: 'Advisory', desc: 'advisory@gunery.com' },
                    { title: 'Media', desc: 'media@gunery.com' },
                    { title: 'Careers', desc: 'careers@gunery.com' },
                    { title: 'General', desc: 'info@gunery.com' }
                ]
            },
            {
                id: 'regions',
                title: 'Regions',
                subtitle: 'Bilateral touchpoints',
                desc: 'Find our primary advisory representatives and key offices in target countries.',
                cards: [
                    { title: 'Bogotá', desc: 'Colombia hub' },
                    { title: 'Ankara', desc: 'Turkey office' },
                    { title: 'Santiago', desc: 'Chile representation' },
                    { title: 'Lima', desc: 'Peru connection' }
                ]
            }
        ],
        tr: [
            {
                id: 'channels',
                title: 'Kanallar',
                subtitle: 'Bize ulaşın',
                desc: 'İş ortaklığı, temsilcilik veya basın talepleri için ekibimizle iletişime geçin.',
                cards: [
                    { title: 'Danışmanlık', desc: 'advisory@gunery.com' },
                    { title: 'Medya', desc: 'media@gunery.com' },
                    { title: 'Kariyer', desc: 'careers@gunery.com' },
                    { title: 'Genel', desc: 'info@gunery.com' }
                ]
            },
            {
                id: 'regions',
                title: 'Bölgeler',
                subtitle: 'İrtibat noktaları',
                desc: 'Hedef ülkelerdeki birincil danışmanlık temsilcilerimizi ve ofislerimizi bulun.',
                cards: [
                    { title: 'Bogota', desc: 'Kolombiya merkezi' },
                    { title: 'Ankara', desc: 'Türkiye ofisi' },
                    { title: 'Santiago', desc: 'Şili temsilciliği' },
                    { title: 'Lima', desc: 'Peru irtibatı' }
                ]
            }
        ],
        es: [
            {
                id: 'channels',
                title: 'Channels',
                subtitle: 'Reach out to us',
                desc: 'Connect with our team for business representation or partner inquiries.',
                cards: [
                    { title: 'Advisory', desc: 'advisory@gunery.com' },
                    { title: 'Media', desc: 'media@gunery.com' },
                    { title: 'Careers', desc: 'careers@gunery.com' },
                    { title: 'General', desc: 'info@gunery.com' }
                ]
            },
            {
                id: 'regions',
                title: 'Regions',
                subtitle: 'Bilateral touchpoints',
                desc: 'Find our primary advisory representatives and key offices in target countries.',
                cards: [
                    { title: 'Bogotá', desc: 'Colombia hub' },
                    { title: 'Ankara', desc: 'Turkey office' },
                    { title: 'Santiago', desc: 'Chile representation' },
                    { title: 'Lima', desc: 'Peru connection' }
                ]
            }
        ]
    }
};

// ============================================
// ARTICLE CONTENT DATA
// ============================================

const articleContent = {
    // -------------------------------------------------------
    // DEFENSE MARKETING
    // -------------------------------------------------------
    'dm-marketing-101': {
        en: {
            category: 'Defense Marketing',
            title: 'Defense Tech Marketing 101',
            desc: 'The defense industry used to sell behind closed doors. That era is ending. Here is what replaced it.',
            readTime: '6 min read',
            date: 'June 2026',
            thumbnail: 'thumbnails/dm-marketing-101.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>Defense procurement is no longer a closed-room game. Decision-makers Google you before they meet you</li>
                        <li>The companies investing in brand, content, and digital presence are winning more often</li>
                        <li>Marketing in defense is not about flashy ads. It is about credibility at scale</li>
                        <li>If your competitor looks more professional online, they start the conversation ahead of you</li>
                    </ul>
                </div>

                <h2>The Old Way Is Dying</h2>
                <p>For decades, defense companies sold the same way. A handshake at a trade show. A phone call from a retired general. A PowerPoint deck passed through the right channels. Marketing was an afterthought, if it was a thought at all.</p>
                <p>That model still exists. But it is no longer enough.</p>
                <p>Something shifted in the last five years. Procurement officials got younger. Research moved online. Decision-makers started forming opinions about companies long before any formal meeting happened. And the companies that understood this early? They started winning disproportionately.</p>

                <div class="article-pullquote">
                    <p>"The first impression now happens on a screen, not across a table. If your digital presence does not match the quality of your product, you have already lost ground."</p>
                </div>

                <h2>What Changed</h2>
                <p>Three things happened almost simultaneously.</p>
                <p>First, a generational shift inside defense ministries. The colonels and procurement leads of today grew up with the internet. They research vendors the same way they research everything else. They look at websites, read articles, check LinkedIn profiles. If your company looks like it has not updated its website since 2014, they notice.</p>
                <p>Second, the competitive landscape expanded. More companies are entering the defense space than ever before. Startups, mid-size firms, foreign entrants. When there are more players at the table, differentiation matters more. And differentiation starts with how you present yourself.</p>
                <p>Third, the definition of "credibility" evolved. It used to be enough to have a strong track record and the right relationships. Now credibility includes thought leadership, content quality, visual identity, and how clearly you communicate what you do. It is still about substance. But substance without visibility is a missed opportunity.</p>

                <div class="article-divider"></div>

                <h2>What Good Defense Marketing Actually Looks Like</h2>
                <p>This is not about running Facebook ads or going viral on social media. Defense marketing is about building a professional, credible, and findable presence that works for you 24 hours a day.</p>
                <p>It means having a website that clearly communicates your capabilities in language your buyer understands. It means producing content that demonstrates expertise without giving away proprietary information. It means showing up at trade shows with materials that match the quality of your engineering.</p>
                <p>The bar is not as high as people think. Most defense companies are so far behind on this that even basic improvements create real competitive separation.</p>

                <h3>The Bottom Line</h3>
                <p>Defense marketing is not a trend. It is an operational reality. The companies that ignore it will keep wondering why their competitors keep getting the first meeting. The ones that invest in it will understand exactly why.</p>
            `
        },
        tr: {
            category: 'Savunma Teknolojisi ve Ürün Pazarlaması',
            title: 'Savunma Teknolojisi ve Ürün Pazarlaması 101',
            desc: 'Savunma sanayii yıllarca kapalı kapılar ardında satış yaptı. O dönem kapanıyor. İşte yerini alan yeni gerçeklik.',
            readTime: '6 dk okuma',
            date: 'Haziran 2026',
            thumbnail: 'thumbnails/dm-marketing-101.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkan Noktalar</div>
                    <ul>
                        <li>Savunma tedariki artık kapalı kapılar ardında yürümüyor. Karar vericiler sizinle tanışmadan önce sizi Google'da arıyor</li>
                        <li>Markaya, içeriğe ve dijital varlığa yatırım yapan şirketler daha sık kazanıyor</li>
                        <li>Savunmada pazarlama gösterişli reklamlar değil, ölçeklenebilir güvenilirlik meselesidir</li>
                        <li>Rakibiniz dijitalde sizden profesyonel görünüyorsa, görüşmeye sizden önde başlar</li>
                    </ul>
                </div>

                <h2>Eski Düzen Çöküyor</h2>
                <p>On yıllar boyunca savunma şirketleri hep aynı yöntemle sattı. Fuarda bir el sıkışma. Emekli bir generalden gelen telefon. Doğru kanallardan aktarılan bir PowerPoint sunumu. Pazarlama, akla bile gelmezdi; gelse de en sona kalırdı.</p>
                <p>Bu model hâlâ var. Ama artık yetmiyor.</p>
                <p>Son beş yılda bir şeyler değişti. Satın alma yetkilileri gençleşti. Araştırma süreci dijitale taşındı. Karar vericiler, resmi bir toplantı gerçekleşmeden çok önce şirketler hakkında kanaat oluşturmaya başladı. Bunu erken fark eden şirketler mi? Orantısız bir şekilde kazanmaya başladılar.</p>

                <div class="article-pullquote">
                    <p>"İlk izlenim artık bir masanın karşısında değil, bir ekranda oluşuyor. Dijital varlığınız ürününüzün kalitesiyle eşleşmiyorsa, 1-0 geride başlıyorsunuz demektir."</p>
                </div>

                <h2>Ne Değişti?</h2>
                <p>Neredeyse eş zamanlı olarak üç şey yaşandı.</p>
                <p>Birincisi, savunma bakanlıklarında kuşak değişimi. Bugünün albayları ve tedarik sorumluları internetle büyüdü. Tedarikçileri araştırırken başka her konuyu araştırdıkları yöntemi kullanıyorlar: web sitelerine bakıyorlar, makaleleri okuyorlar, LinkedIn profillerini inceliyorlar. Şirketinizin web sitesi 2014'ten beri güncellenmemiş gibi görünüyorsa, bunu fark ediyorlar.</p>
                <p>İkincisi, rekabet ortamı genişledi. Savunma alanına her zamankinden fazla şirket giriyor (start-up'lar, orta ölçekli firmalar, yabancı oyuncular). Masada daha fazla rakip olduğunda farklılaşma daha çok önem kazanıyor. Ve farklılaşma, kendinizi nasıl sunduğunuzla başlıyor.</p>
                <p>Üçüncüsü, "güvenilirlik" tanımı evrildi. Eskiden güçlü bir sicil ve doğru ilişkiler yeterliydi. Artık güvenilirlik; düşünce liderliği, içerik kalitesi, görsel kimlik ve ne yaptığınızı ne kadar net anlattığınızı da kapsıyor. Hâlâ öz önemli. Ama görünürlük olmadan öz, kaçırılmış bir fırsattır.</p>

                <div class="article-divider"></div>

                <h2>İyi Savunma Teknolojisi ve Ürün Pazarlaması Nasıl Görünür?</h2>
                <p>Bu, Facebook reklamları vermek ya da sosyal medyada viral olmak değil. Savunma teknoloji ve ürün pazarlaması; profesyonel, güvenilir ve bulunabilir bir dijital varlık inşa etmektir; yani günde 24 saat sizin için çalışan bir varlık.</p>
                <p>Alıcınızın anlayacağı dilde yeteneklerinizi açıkça anlatan bir web sitesine sahip olmak demektir. Özel bilgileri ifşa etmeden uzmanlığınızı gösteren içerikler üretmek demektir. Fuarlara, mühendislik kalitenizle eşleşen materyallerle çıkmak demektir.</p>
                <p>Çıta, insanların düşündüğü kadar yüksek değil. Savunma şirketlerinin büyük çoğunluğu bu konuda o kadar geride ki, temel iyileştirmeler bile gerçek bir rekabet avantajı yaratıyor.</p>

                <h3>Sonuç</h3>
                <p>Savunma teknoloji ve ürün pazarlaması bir trend değil. Operasyonel bir gerçeklik. Bunu görmezden gelen şirketler, rakiplerinin neden hep ilk toplantıyı aldığını sormaya devam edecek. Yatırım yapanlar ise nedenini çoktan anlamış olacak.</p>
            `
        }
    },
    'dm-website-sales': {
        en: {
            category: 'Defense Marketing',
            title: 'Your Website Is Your Worst Sales Rep (And You Don\'t Even Know It)',
            desc: 'Most defense company websites actively hurt their business. Here is the uncomfortable truth about what buyers see.',
            readTime: '5 min read',
            date: 'May 2026',
            thumbnail: 'thumbnails/dm-website-sales.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>Procurement officials check your website before they agree to a meeting</li>
                        <li>Most defense company websites look like they were built in 2012 and never touched again</li>
                        <li>A bad website does not just fail to impress. It actively undermines credibility</li>
                        <li>You do not need a million-dollar redesign. You need clarity, speed, and professionalism</li>
                    </ul>
                </div>

                <h2>The Experiment Nobody Runs</h2>
                <p>Here is a quick exercise. Open your company website on your phone right now. Pretend you have never heard of your company. Give yourself thirty seconds.</p>
                <p>Can you tell what the company does? Can you find the capabilities that matter? Does it feel like a company you would trust with a multi-million-dollar defense contract?</p>
                <p>If you hesitated on any of those questions, you have a problem. And the problem is costing you more than you think.</p>

                <div class="article-pullquote">
                    <p>"Your website is not a brochure. It is your first meeting. And right now, most defense companies are showing up to that meeting in wrinkled clothes."</p>
                </div>

                <h2>What Procurement Officials Actually Do</h2>
                <p>Talk to anyone who has sat on the buyer side of a defense acquisition and they will tell you the same thing. Before a formal meeting, before a capability presentation, before anything official happens, they look you up.</p>
                <p>They check your website. They look at your leadership page. They read whatever content is available. They are forming an opinion before you even know you are being evaluated.</p>
                <p>And here is the thing. They are comparing you to every other company they are evaluating at the same time. If your competitor has a clean, modern site with clear messaging and you have a cluttered page with stock photos and dense paragraphs, guess who starts with more credibility.</p>

                <div class="article-divider"></div>

                <h2>The Three Things That Actually Matter</h2>
                <h3>Clarity</h3>
                <p>What do you do? Who do you do it for? Why should someone choose you? If a visitor cannot answer these three questions within ten seconds, your website is failing at its most basic job.</p>

                <h3>Speed</h3>
                <p>If your website takes more than three seconds to load, a significant percentage of visitors leave before they see anything. This is not an opinion. It is data that has been confirmed across every industry, including defense.</p>

                <h3>Professionalism</h3>
                <p>This one is simple. Your website should look like it belongs to the kind of company you want to be perceived as. If you are selling advanced defense technology, your digital presence should reflect that level of sophistication.</p>

                <h3>The Fix Is Simpler Than You Think</h3>
                <p>You do not need to rebuild everything from scratch. Start with your homepage. Rewrite it like a human being will read it. Update your visuals. Make sure it works on mobile. These are not revolutionary changes. They are baseline expectations that most defense companies still have not met.</p>
            `
        },
        tr: {
            category: 'Savunma Teknolojisi ve Ürün Pazarlaması',
            title: 'Web Siteniz En Kötü Satış Temsilciniz (Ve Bunu Bilmiyorsunuz)',
            desc: 'Savunma şirketlerinin web siteleri çoğu zaman işlerine zarar veriyor. İşte alıcıların gördüğü rahatsız edici tablo.',
            readTime: '5 dk okuma',
            date: 'Mayıs 2026',
            thumbnail: 'thumbnails/dm-website-sales.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkan Noktalar</div>
                    <ul>
                        <li>Satın alma yetkilileri toplantıya karar vermeden önce web sitenizi inceliyor</li>
                        <li>Savunma şirketlerinin web sitelerinin çoğu 2012'de yapılmış ve bir daha dokunulmamış gibi görünüyor</li>
                        <li>Kötü bir web sitesi sadece etkilemekte başarısız olmaz, güvenilirliğinizi aktif olarak baltalar</li>
                        <li>Milyon dolarlık bir yeniden tasarıma ihtiyacınız yok. Netlik, hız ve profesyonellik yeterli</li>
                    </ul>
                </div>

                <h2>Kimsenin Yapmadığı Deney</h2>
                <p>Hızlı bir egzersiz. Şu anda şirketinizin web sitesini telefonunuzdan açın. Şirketinizi hiç duymamış gibi davranın. Kendinize otuz saniye verin.</p>
                <p>Şirketin ne yaptığını anlayabiliyor musunuz? Önemli yetenekleri bulabiliyor musunuz? Milyonlarca dolarlık bir savunma sözleşmesi için güveneceğiniz bir şirket gibi hissediyor mu?</p>
                <p>Bu sorulardan herhangi birinde tereddüt ettiyseniz, bir sorununuz var. Ve bu sorun size düşündüğünüzden çok daha pahalıya mal oluyor.</p>

                <div class="article-pullquote">
                    <p>"Web siteniz bir broşür değil. İlk toplantınız. Ve şu anda savunma şirketlerinin çoğu bu toplantıya buruşuk kıyafetlerle çıkıyor."</p>
                </div>

                <h2>Satın Alma Yetkilileri Gerçekte Ne Yapıyor?</h2>
                <p>Bir savunma ihalesinin alıcı tarafında oturmuş herhangi biriyle konuşun, aynı şeyi söyleyecektir. Resmi toplantıdan önce, yetenek sunumundan önce, herhangi bir şey resmileşmeden önce sizi araştırıyorlar.</p>
                <p>Web sitenize bakıyorlar. Yönetim kadronuzu inceliyorlar. Erişebildikleri her içeriği okuyorlar. Siz daha değerlendirildiğinizden haberdar bile olmadan, hakkınızda kanaat oluşturuyorlar.</p>
                <p>Ve işte mesele burada. Aynı anda değerlendirdikleri diğer tüm şirketlerle sizi kıyaslıyorlar. Rakibinizin temiz, modern bir sitesi ve net mesajları varsa, sizinse dağınık bir sayfanız, stok fotoğraflarınız ve sıkıştırılmış paragraflarınız varsa, tahmin edin kim daha fazla güvenilirlikle başlıyor.</p>

                <div class="article-divider"></div>

                <h2>Gerçekten Önemli Olan Üç Şey</h2>
                <h3>Netlik</h3>
                <p>Ne yapıyorsunuz? Kimin için yapıyorsunuz? Neden sizi seçsinler? Bir ziyaretçi bu üç soruyu on saniye içinde yanıtlayamıyorsa, web siteniz en temel işini yapamıyor demektir.</p>

                <h3>Hız</h3>
                <p>Web sitenizin yüklenmesi üç saniyeden fazla sürüyorsa, ziyaretçilerin önemli bir bölümü hiçbir şey görmeden ayrılıyor. Bu bir görüş değil. Savunma dahil her sektörde doğrulanmış bir veri.</p>

                <h3>Profesyonellik</h3>
                <p>Bu basit. Web siteniz, algılanmak istediğiniz türde bir şirkete ait görünmelidir. İleri savunma teknolojisi satıyorsanız, dijital varlığınız da o düzeyde sofistike olmalıdır.</p>

                <h3>Çözüm Düşündüğünüzden Daha Kolay</h3>
                <p>Her şeyi sıfırdan kurmanıza gerek yok. Ana sayfanızla başlayın. Onu bir insanın okuyacağı gibi yeniden yazın. Görsellerinizi güncelleyin. Mobilde çalıştığından emin olun. Bunlar devrimci değişiklikler değil. Savunma şirketlerinin çoğunun hâlâ karşılayamadığı temel beklentiler.</p>
            `
        }
    },
    'dm-winning-attention': {
        en: {
            category: 'Defense Marketing',
            title: 'The Companies That Win Contracts Start by Winning Attention',
            desc: 'Before the RFP, before the demo, before the handshake. The real competition starts earlier than you think.',
            readTime: '7 min read',
            date: 'April 2026',
            thumbnail: 'thumbnails/dm-winning-attention.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>The companies that shape the conversation before the RFP drops have a structural advantage</li>
                        <li>Visibility is not vanity. In defense, being known is being considered</li>
                        <li>Content, presence at events, and strategic communications create pre-sale positioning</li>
                        <li>Most companies wait for opportunities. The smart ones create awareness before opportunities exist</li>
                    </ul>
                </div>

                <h2>The Race Before the Race</h2>
                <p>Here is something most defense companies do not talk about. By the time an RFP drops, the decision is already half made.</p>
                <p>Not officially. Not on paper. But in practice, the procurement team has already been researching. They have already been to conferences. They have already read articles. They have already formed impressions about which companies are serious players and which ones they have never heard of.</p>
                <p>If you are hearing about an opportunity for the first time when the tender goes public, you are already behind. The companies that win consistently are the ones that were visible long before the formal process began.</p>

                <div class="article-pullquote">
                    <p>"In defense, the sale does not start when you submit a proposal. It starts the first time someone in the procurement chain hears your name and thinks, 'I know that company.'"</p>
                </div>

                <h2>How Visibility Creates Advantage</h2>
                <p>This is not about being famous. It is about being findable and familiar when it matters.</p>
                <p>When a defense ministry starts exploring a new capability requirement, they look at the market. They talk to colleagues. They search online. They attend industry events. At every one of these touchpoints, you are either present or absent.</p>
                <p>The companies that show up in these early-stage conversations, through published content, through industry event participation, through a strong digital presence, get something invaluable. They get considered before the competition even begins.</p>

                <div class="article-divider"></div>

                <h2>Three Ways to Build Pre-Sale Visibility</h2>
                <h3>Publish What You Know</h3>
                <p>You do not need to give away secrets. But sharing informed perspectives on market trends, technology adoption, and operational challenges positions your company as a knowledgeable player. Buyers trust companies that demonstrate understanding of their world.</p>

                <h3>Show Up Where It Matters</h3>
                <p>Not every trade show is worth attending. But the ones that matter to your target market should see you consistently. Not just a booth. Speaking slots, hosted dinners, targeted side meetings. Presence with purpose.</p>

                <h3>Build a Digital Footprint</h3>
                <p>Your website, your LinkedIn presence, your published articles. These are working for you or against you every single day. The question is whether you are managing them intentionally or leaving them on autopilot.</p>

                <h3>The Real Cost of Being Invisible</h3>
                <p>The opportunities you never hear about are the ones that cost you the most. Because you cannot compete for something you were never considered for. Visibility is not a nice-to-have in defense. It is the price of admission to the conversations that matter.</p>
            `
        },
        tr: {
            category: 'Savunma Teknolojisi ve Ürün Pazarlaması',
            title: 'İhaleleri Kazanan Şirketler Önce Dikkati Kazanıyor',
            desc: 'RFP\'den önce, demodan önce, el sıkışmadan önce. Gerçek rekabet düşündüğünüzden çok daha erken başlıyor.',
            readTime: '7 dk okuma',
            date: 'Nisan 2026',
            thumbnail: 'thumbnails/dm-winning-attention.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkan Noktalar</div>
                    <ul>
                        <li>İhale yayınlanmadan önce gündemi şekillendiren şirketler, yapısal bir avantaja sahiptir</li>
                        <li>Görünürlük bir kibir meselesi değildir. Savunmada tanınmak, değerlendirmeye alınmak demektir</li>
                        <li>İçerik, etkinlik varlığı ve stratejik iletişim, satış öncesi konumlandırma yaratır</li>
                        <li>Çoğu şirket fırsatların gelmesini bekler. Akıllı olanlar fırsatlar doğmadan farkındalık inşa eder</li>
                    </ul>
                </div>

                <h2>Yarıştan Önceki Yarış</h2>
                <p>Savunma şirketlerinin çoğunun konuşmadığı bir gerçek var. Bir ihale yayınlandığında, karar aslında yarı yarıya verilmiş oluyor.</p>
                <p>Resmi olarak değil. Kağıt üzerinde değil. Ama pratikte, tedarik ekibi çoktan araştırma yapmıştır. Konferanslara gitmiştir. Makaleleri okumuştur. Hangi şirketlerin ciddi oyuncu olduğu, hangilerini hiç duymadıkları konusunda izlenimlerini çoktan oluşturmuştur.</p>
                <p>Bir fırsatı ilk kez ihale yayınlandığında duyuyorsanız, zaten gerideysiniz. Sürekli kazanan şirketler, resmi süreç başlamadan çok önce görünür olanlardır.</p>

                <div class="article-pullquote">
                    <p>"Savunmada satış, teklif sunduğunuzda başlamaz. Tedarik zincirindeki birinin adınızı duyup 'Bu şirketi tanıyorum' dediği an başlar."</p>
                </div>

                <h2>Görünürlük Nasıl Avantaj Yaratır?</h2>
                <p>Mesele ünlü olmak değil. Önemli anlarda bulunabilir ve tanıdık olmak.</p>
                <p>Bir savunma bakanlığı yeni bir yetenek ihtiyacını araştırmaya başladığında, pazara bakar. Meslektaşlarıyla konuşur. İnternette arar. Sektörel etkinliklere katılır. Bu temas noktalarının her birinde ya varsınız ya yoksunuz.</p>
                <p>Bu erken aşama konuşmalarda yer alan şirketler (yayınlanan içerikler, etkinlik katılımları ve güçlü dijital varlıklar sayesinde) paha biçilmez bir şey elde eder. Rekabet daha başlamadan değerlendirmeye alınırlar.</p>

                <div class="article-divider"></div>

                <h2>Satış Öncesi Görünürlük İnşa Etmenin Üç Yolu</h2>
                <h3>Bildiğinizi Paylaşın</h3>
                <p>Sırlarınızı vermenize gerek yok. Ama pazar trendleri, teknoloji benimseme süreçleri ve operasyonel zorluklar hakkında bilinçli bakış açıları paylaşmak, şirketinizi bilgili bir oyuncu olarak konumlandırır. Alıcılar, dünyalarını anlayan şirketlere güvenir.</p>

                <h3>Doğru Yerlerde Olun</h3>
                <p>Her fuar katılmaya değmez. Ama hedef pazarınız için önemli olanlar sizi sürekli görmelidir. Sadece bir stant değil. Konuşma slotları, özel davetli yemekleri, hedefli yan toplantılar. Amaca yönelik varlık.</p>

                <h3>Dijital Ayak İzi Oluşturun</h3>
                <p>Web siteniz, LinkedIn varlığınız, yayınlanmış makaleleriniz. Bunlar her gün sizin için ya da aleyhinize çalışıyor. Soru şu: bunları bilinçli mi yönetiyorsunuz, yoksa otopilota mı bıraktınız?</p>

                <h3>Görünmez Olmanın Gerçek Maliyeti</h3>
                <p>Hiç duymadığınız fırsatlar, size en pahalıya mal olanlardır. Çünkü hiç değerlendirmeye alınmadığınız bir şey için rekabet edemezsiniz. Savunmada görünürlük bir lüks değildir. Önemli konuşmalara dahil olmanın bedelidir.</p>
            `
        }
    },
    'dm-capability-docs': {
        en: {
            category: 'Defense Marketing',
            title: 'Nobody Reads Your Capability Statement. Here Is What They Read Instead',
            desc: 'Defense companies pour weeks into capability documents. Procurement teams spend seconds on them. What actually gets read?',
            readTime: '5 min read',
            date: 'March 2026',
            thumbnail: 'thumbnails/dm-capability-docs.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>The traditional capability statement is dead as a primary sales tool</li>
                        <li>Procurement officials skim. They do not read 40-page PDFs cover to cover</li>
                        <li>What gets read: one-pagers, case summaries, clear web pages, and LinkedIn posts</li>
                        <li>The format matters as much as the content. Make it scannable or it gets skipped</li>
                    </ul>
                </div>

                <h2>The Uncomfortable Truth</h2>
                <p>Your team spent three weeks on that capability statement. Design, review cycles, approvals. It is forty pages of comprehensive, detailed, beautifully formatted technical documentation.</p>
                <p>Nobody reads it.</p>
                <p>That is not an exaggeration. Talk to procurement officials off the record and they will tell you the same thing. They receive dozens of capability statements. They have time to actually read almost none of them. What happens instead is a quick scroll, a glance at the executive summary, and a decision about whether to dig deeper based on first impressions.</p>

                <div class="article-pullquote">
                    <p>"We receive more capability documents than we can possibly review. What catches my attention is not length. It is clarity. Tell me what you do, show me where you have done it, and make it easy to find."</p>
                </div>

                <h2>What Actually Gets Attention</h2>
                <h3>The One-Pager</h3>
                <p>A single page that answers three questions. What do you do? Where have you done it? Why should we care? If you can distill your entire value proposition onto one page that a busy official can read in sixty seconds, you are already ahead of ninety percent of your competitors.</p>

                <h3>The Case Summary</h3>
                <p>Not a detailed case study. A short, specific summary. Which country? Which customer type? What problem? What result? Two paragraphs maximum. Real specifics beat general claims every time.</p>

                <h3>Your Website</h3>
                <p>This is the capability statement that people actually read. It is the one they can access instantly, forward to a colleague, and revisit without digging through an email attachment. Your website is your always-on capability document.</p>

                <div class="article-divider"></div>

                <h2>The Format Matters</h2>
                <p>Defense companies tend to over-communicate. The instinct is to include everything, because leaving something out feels like a risk. But in practice, more information creates more noise. And noise gets ignored.</p>
                <p>The companies that communicate effectively in defense do something counterintuitive. They say less. They say it more clearly. And they make it incredibly easy to find.</p>
                <p>Your capability statement should still exist. But it should not be your primary sales tool. It should be the backup document for someone who is already interested, not the thing that creates interest in the first place.</p>
            `
        },
        tr: {
            category: 'Savunma Teknolojisi ve Ürün Pazarlaması',
            title: 'Yetenek Dokümanınızı Kimse Okumuyor. İşte Gerçekte Okunan Şey',
            desc: 'Savunma şirketleri yetenek dokümanlarına haftalar harcıyor. Tedarik ekipleri ise saniyeler ayırıyor. Peki gerçekte ne okunuyor?',
            readTime: '5 dk okuma',
            date: 'Mart 2026',
            thumbnail: 'thumbnails/dm-capability-docs.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkan Noktalar</div>
                    <ul>
                        <li>Geleneksel yetenek dokümanı, birincil satış aracı olarak ömrünü tamamladı</li>
                        <li>Satın alma yetkilileri göz gezdiriyor. 40 sayfalık PDF'leri baştan sona okumuyorlar</li>
                        <li>Okunan şeyler: tek sayfalık özetler, vaka analizleri, net web sayfaları ve LinkedIn paylaşımları</li>
                        <li>Format, içerik kadar önemli. Taranabilir yapmazsanız atlanır</li>
                    </ul>
                </div>

                <h2>Rahatsız Edici Gerçek</h2>
                <p>Ekibiniz o yetenek dokümanına üç hafta harcadı. Tasarım, revizyon döngüleri, onaylar. Kırk sayfalık kapsamlı, detaylı, güzel biçimlendirilmiş teknik dokümantasyon.</p>
                <p>Kimse okumadı.</p>
                <p>Bu bir abartı değil. Satın alma yetkilileriyle gayri resmi konuşun, hepsi aynı şeyi söyleyecektir. Düzinelerce yetenek dokümanı alıyorlar. Neredeyse hiçbirini gerçekten okuyacak zamanları yok. Olan şu: hızlıca kaydırma, yönetici özetine bir bakış ve ilk izlenime göre daha derine inip inmeme kararı.</p>

                <div class="article-pullquote">
                    <p>"İnceleyebileceğimizden çok daha fazla yetenek dokümanı alıyoruz. Dikkatimi çeken şey uzunluk değil, netliktir. Ne yaptığınızı söyleyin, nerede yaptığınızı gösterin ve bulmamı kolaylaştırın."</p>
                </div>

                <h2>Gerçekte Neye Dikkat Ediliyor?</h2>
                <h3>Tek Sayfa</h3>
                <p>Üç soruyu yanıtlayan tek bir sayfa. Ne yapıyorsunuz? Nerede yaptınız? Neden umursamalıyız? Tüm değer önerinizi, meşgul bir yetkilinin altmış saniyede okuyabileceği tek sayfaya sığdırabilirseniz, rakiplerinizin yüzde doksanının önündesiniz.</p>

                <h3>Vaka Özeti</h3>
                <p>Detaylı bir vaka çalışması değil. Kısa, spesifik bir özet. Hangi ülke? Ne tür bir müşteri? Ne sorun? Ne sonuç? Maksimum iki paragraf. Gerçek detaylar, genel iddiaları her zaman yener.</p>

                <h3>Web Siteniz</h3>
                <p>İnsanların gerçekten okuduğu yetenek dokümanı budur. Anında erişilebilen, bir meslektaşa iletilebilen ve e-posta ekini eşelemeden tekrar ziyaret edilebilen dokümandır. Web siteniz, her zaman açık olan yetenek dokümanınızdır.</p>

                <div class="article-divider"></div>

                <h2>Format Önemli</h2>
                <p>Savunma şirketleri aşırı iletişim kurma eğilimindedir. İçgüdü, her şeyi dahil etmektir, çünkü bir şeyi dışarıda bırakmak risk gibi hissedilir. Ama pratikte, daha fazla bilgi daha fazla gürültü yaratır. Ve gürültü görmezden gelinir.</p>
                <p>Savunmada etkili iletişim kuran şirketler, sezgiye aykırı bir şey yapar. Daha az söylerler. Daha net söylerler. Ve bulmayı inanılmaz kolay yaparlar.</p>
                <p>Yetenek dokümanınız hâlâ var olmalı. Ama birincil satış aracınız olmamalı. Zaten ilgilenen biri için destekleyici doküman olmalı, ilgiyi ilk başta yaratacak şey değil.</p>
            `
        }
    },

    // -------------------------------------------------------
    // PLAYBOOK
    // -------------------------------------------------------
    'pb-first-90-days': {
        en: {
            category: 'Playbook',
            title: 'Your First 90 Days in a New Defense Market',
            desc: 'You just landed in a new country with a mandate to build a defense business. Here is what the first three months should look like.',
            readTime: '7 min read',
            date: 'June 2026',
            thumbnail: 'thumbnails/pb-first-90-days.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>The first 90 days are for learning, not selling. Resist the pressure to close deals early</li>
                        <li>Map the institutional landscape before you map your pipeline</li>
                        <li>Find three to five people who understand the local defense ecosystem and listen to them</li>
                        <li>Your first trip should produce a reality check, not a sales forecast</li>
                    </ul>
                </div>

                <h2>Day 1 Through 30: Listen</h2>
                <p>Most companies get this wrong immediately. They land in a new market, set up meetings with potential customers, and start pitching. Within the first month, they have presented their capabilities to a dozen people who smiled politely and said they would be in touch.</p>
                <p>Nobody gets in touch.</p>
                <p>The first thirty days should not be about selling. They should be about understanding. Who buys what you sell? How do they buy it? What does the procurement process actually look like from the inside? Who are the competitors already in this market? What have they gotten right? What have they gotten wrong?</p>

                <div class="article-pullquote">
                    <p>"The biggest mistake new entrants make is assuming their home market playbook works everywhere. It does not. The first month is for learning the local rules of the game."</p>
                </div>

                <h2>Day 31 Through 60: Connect</h2>
                <p>Once you understand the landscape, start building relationships with purpose. Not random networking. Targeted introductions to the people who matter in your specific sector.</p>
                <p>This means identifying the right institutional contacts, the relevant trade associations, the local industry players who are already operating in the space you want to enter. It means attending the right events. Not as an exhibitor. As a participant who is there to learn and connect.</p>
                <p>The goal by day sixty is simple. You should be able to name five people in the local defense ecosystem who know your company name and understand what you do.</p>

                <div class="article-divider"></div>

                <h2>Day 61 Through 90: Assess</h2>
                <p>Now you have enough information to make a real decision. Is this market worth the investment? Is the opportunity real or theoretical? Do you have the right partners? Is the competitive landscape manageable?</p>
                <p>This is when you write the honest assessment. Not the optimistic version for the board. The real one. The one that says "here is what we learned, here is what is true, and here is what we recommend."</p>
                <p>The companies that succeed in new defense markets are the ones that take these ninety days seriously. The ones that rush through them usually end up repeating the process a year later, having spent significant money with nothing to show for it.</p>
            `
        },
        tr: {
            category: 'Oyun Planı',
            title: 'Yeni Bir Savunma Pazarında İlk 90 Gün',
            desc: 'Yeni bir ülkeye savunma işi kurmak üzere geldiniz. İlk üç ay nasıl görünmeli? İşte adım adım rehber.',
            readTime: '7 dk okuma',
            date: 'Haziran 2026',
            thumbnail: 'thumbnails/pb-first-90-days.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkan Noktalar</div>
                    <ul>
                        <li>İlk 90 gün öğrenmek için, satmak için değil. Erken anlaşma kapma baskısına direnin</li>
                        <li>Pipeline'ınızı haritalamadan önce kurumsal peyzajı haritalayın</li>
                        <li>Yerel savunma ekosistemini anlayan üç-beş kişi bulun ve onları dinleyin</li>
                        <li>İlk ziyaretiniz bir satış tahmini değil, gerçeklik kontrolü üretmelidir</li>
                    </ul>
                </div>

                <h2>1. Günden 30. Güne: Dinleyin</h2>
                <p>Çoğu şirket bunu en baştan yanlış yapar. Yeni bir pazara inerler, potansiyel müşterilerle toplantılar ayarlarlar ve satış sunumuna başlarlar. İlk ay içinde, nazikçe gülümseyen ve "iletişimde olalım" diyen bir düzine kişiye yeteneklerini sunmuşlardır.</p>
                <p>Kimse iletişime geçmez.</p>
                <p>İlk otuz gün satışla ilgili olmamalıdır. Anlamakla ilgili olmalıdır. Sattığınız şeyi kim alıyor? Nasıl alıyor? Tedarik süreci içeriden gerçekte nasıl görünüyor? Bu pazarda zaten olan rakipler kimler? Neyi doğru yaptılar? Neyi yanlış yaptılar?</p>

                <div class="article-pullquote">
                    <p>"Yeni girenlerin yaptığı en büyük hata, kendi pazarlarındaki oyun planının her yerde işe yaradığını varsaymaktır. Yaramaz. İlk ay, yerel oyunun kurallarını öğrenmek içindir."</p>
                </div>

                <h2>31. Günden 60. Güne: Bağlantı Kurun</h2>
                <p>Peyzajı anladığınızda, amaca yönelik ilişkiler kurmaya başlayın. Rastgele networking değil. Sizin sektörünüzde önemli olan kişilerle hedefli tanıştırmalar.</p>
                <p>Bu, doğru kurumsal temas noktalarını, ilgili ticari birlikleri, girmek istediğiniz alanda zaten faaliyet gösteren yerel sektör oyuncularını tespit etmek demektir. Doğru etkinliklere katılmak demektir. Katılımcı olarak. Öğrenmek ve bağlantı kurmak için orada olan biri olarak.</p>
                <p>Altmışıncı güne kadar hedef basit. Yerel savunma ekosisteminde şirketinizin adını bilen ve ne yaptığınızı anlayan beş kişi sayabilmelisiniz.</p>

                <div class="article-divider"></div>

                <h2>61. Günden 90. Güne: Değerlendirin</h2>
                <p>Artık gerçek bir karar verecek kadar bilginiz var. Bu pazar yatırıma değer mi? Fırsat gerçek mi yoksa teorik mi? Doğru ortaklarınız var mı? Rekabet ortamı yönetilebilir mi?</p>
                <p>Dürüst değerlendirmeyi yazma zamanı. Yönetim kurulu için iyimser versiyonu değil. Gerçeğini. "Şunları öğrendik, durum bu ve önerimiz şu" diyen versiyonu.</p>
                <p>Yeni savunma pazarlarında başarılı olan şirketler, bu doksan günü ciddiye alanlardır. Aceleyle geçiştirenler ise genellikle bir yıl sonra aynı süreci tekrar eder; hem de önemli para harcamış ve gösterecek hiçbir şeyleri olmadan.</p>
            `
        }
    },
    'pb-local-reps': {
        en: {
            category: 'Playbook',
            title: 'Local Reps, Distributors, or JVs: Pick Wrong and You Lose Two Years',
            desc: 'The partner structure decision is one of the most consequential choices in defense market entry. Most companies make it too fast.',
            readTime: '6 min read',
            date: 'May 2026',
            thumbnail: 'thumbnails/pb-local-reps.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>There is no universal right answer. The best structure depends on the market, the product, and the sales cycle</li>
                        <li>A bad local partner is worse than no local partner at all</li>
                        <li>Most companies choose partners too quickly based on who approaches them first</li>
                        <li>The exit clause in your partnership agreement is more important than the entry terms</li>
                    </ul>
                </div>

                <h2>The Three Models</h2>
                <p>Every defense company entering a foreign market faces the same structural question. Do you hire a local representative? Do you appoint a distributor? Or do you form a joint venture with a local company?</p>
                <p>Each model has real advantages and real risks. And the wrong choice does not just slow you down. It can lock you out of a market for years.</p>

                <h3>The Local Representative</h3>
                <p>A local rep is an individual or small firm that acts as your eyes, ears, and front door in the market. They handle introductions, attend meetings on your behalf, and navigate the institutional landscape. The advantage is flexibility and cost. The risk is dependency on a single person and limited bandwidth.</p>

                <h3>The Distributor</h3>
                <p>A distributor takes a more active commercial role. They hold inventory, manage customer relationships, and often handle after-sales support. The advantage is that they bring existing infrastructure and customer access. The risk is that they also represent other products, sometimes including your competitors.</p>

                <h3>The Joint Venture</h3>
                <p>A JV means creating a shared entity with a local partner. This is the heaviest model and usually only makes sense for large, long-term market commitments. The advantage is deep local integration. The risk is complexity, shared control, and extremely difficult exits.</p>

                <div class="article-pullquote">
                    <p>"The partner you choose in month three will define your market position for the next three to five years. Treat this decision with the seriousness it deserves."</p>
                </div>

                <div class="article-divider"></div>

                <h2>The Mistake Most Companies Make</h2>
                <p>Here is the pattern. A company decides to enter a new market. At their first trade show, someone approaches them and says "I can represent you here." The person seems connected, speaks confidently, and knows the right names. The company signs an agreement within a few months.</p>
                <p>Eighteen months later, nothing has happened. No contracts. No real pipeline. And the company is locked into an exclusivity agreement that prevents them from working with anyone else in that market.</p>
                <p>The fix is unglamorous but essential. Due diligence. Reference checks. A trial period before exclusivity. And an exit clause that protects you if the relationship does not produce results.</p>
            `
        },
        tr: {
            category: 'Oyun Planı',
            title: 'Yerel Temsilci, Distribütör ya da Ortak Girişim: Yanlış Seçim İki Yıla Mal Olur',
            desc: 'Ortaklık yapısı kararı, savunma pazarına girişte en belirleyici tercihlerden biridir. Çoğu şirket bu kararı çok çabuk verir.',
            readTime: '6 dk okuma',
            date: 'Mayıs 2026',
            thumbnail: 'thumbnails/pb-local-reps.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkan Noktalar</div>
                    <ul>
                        <li>Evrensel bir doğru cevap yok. En iyi yapı pazara, ürüne ve satış döngüsüne bağlıdır</li>
                        <li>Kötü bir yerel ortak, hiç ortak olmamasından daha kötüdür</li>
                        <li>Çoğu şirket, kendilerine ilk yaklaşan kişiye göre çok hızlı ortak seçiyor</li>
                        <li>Ortaklık sözleşmenizdeki çıkış maddesi, giriş şartlarından daha önemlidir</li>
                    </ul>
                </div>

                <h2>Üç Model</h2>
                <p>Yabancı bir pazara giren her savunma şirketi aynı yapısal soruyla karşılaşır. Yerel bir temsilci mi tutacaksınız? Bir distribütör mü atayacaksınız? Yoksa yerel bir şirketle ortak girişim mi kuracaksınız?</p>
                <p>Her modelin gerçek avantajları ve gerçek riskleri var. Ve yanlış tercih sizi sadece yavaşlatmaz. Yıllarca bir pazarın dışında tutabilir.</p>

                <h3>Yerel Temsilci</h3>
                <p>Yerel temsilci, pazardaki gözünüz, kulağınız ve ön kapınız olan bir kişi veya küçük firmadır. Tanıştırmaları yönetir, sizin adınıza toplantılara katılır ve kurumsal yapıda yol alır. Avantajı esneklik ve maliyet. Riski tek bir kişiye bağımlılık ve sınırlı kapasitedir.</p>

                <h3>Distribütör</h3>
                <p>Distribütör daha aktif bir ticari rol üstlenir. Stok tutar, müşteri ilişkilerini yönetir ve genellikle satış sonrası desteği de sağlar. Avantajı mevcut altyapı ve müşteri erişimi getirmesidir. Riski ise başka ürünleri de (bazen rakiplerinizinkini de dahil) temsil etmesidir.</p>

                <h3>Ortak Girişim</h3>
                <p>Ortak girişim, yerel bir ortakla paylaşılan bir yapı oluşturmak demektir. En ağır modeldir ve genellikle yalnızca büyük, uzun vadeli pazar taahhütleri için anlamlıdır. Avantajı derin yerel entegrasyondur. Riski karmaşıklık, paylaşılan kontrol ve son derece zor çıkışlardır.</p>

                <div class="article-pullquote">
                    <p>"Üçüncü ayda seçtiğiniz ortak, önümüzdeki üç-beş yıldaki pazar konumunuzu belirleyecek. Bu karara hak ettiği ciddiyetle yaklaşın."</p>
                </div>

                <div class="article-divider"></div>

                <h2>Çoğu Şirketin Yaptığı Hata</h2>
                <p>Kalıp şu. Bir şirket yeni pazara girmeye karar verir. İlk fuarında biri yaklaşır ve "sizi burada temsil edebilirim" der. Kişi bağlantılı görünür, özgüvenle konuşur ve doğru isimleri bilir. Şirket birkaç ay içinde anlaşma imzalar.</p>
                <p>On sekiz ay sonra hiçbir şey olmamıştır. Sözleşme yok. Gerçek bir pipeline yok. Ve şirket, o pazarda başka biriyle çalışmasını engelleyen bir münhasırlık anlaşmasına kilitlenmiştir.</p>
                <p>Çözüm gösterişsiz ama hayatidir. Durum tespiti. Referans kontrolü. Münhasırlık öncesi deneme süresi. Ve ilişki sonuç vermezse sizi koruyan bir çıkış maddesi.</p>
            `
        }
    },
    'pb-trade-shows': {
        en: {
            category: 'Playbook',
            title: 'Trade Shows That Actually Move the Needle',
            desc: 'Defense companies spend hundreds of thousands on exhibition booths. Most of them cannot tell you what they got in return.',
            readTime: '6 min read',
            date: 'April 2026',
            thumbnail: 'thumbnails/pb-trade-shows.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>The booth is the least important part of your trade show strategy</li>
                        <li>Pre-scheduled meetings with qualified contacts drive more value than walk-up traffic</li>
                        <li>Not all defense expos are created equal. Some move business, some are just networking theater</li>
                        <li>The real ROI happens in the side meetings, dinners, and follow-ups around the main event</li>
                    </ul>
                </div>

                <h2>The Booth Trap</h2>
                <p>Companies love booths. They are tangible. They are visual. You can take photos and post them on LinkedIn. Leadership can walk the floor and feel productive.</p>
                <p>But here is the question nobody asks after the show. How many qualified leads came from the booth? How many turned into meetings? How many of those meetings turned into pipeline?</p>
                <p>The honest answer, for most companies, is uncomfortable. The booth generated a lot of foot traffic, a stack of business cards, and very little that translated into actual business.</p>

                <div class="article-pullquote">
                    <p>"If your trade show strategy is 'build a booth, staff it, and see who walks up,' you are doing expensive networking. That is not a sales strategy."</p>
                </div>

                <h2>What Actually Works</h2>
                <p>The companies that get real value from defense exhibitions do something different. They treat the show as a platform for pre-arranged engagements, not a passive waiting game.</p>
                <p>Weeks before the event, they identify who will be attending. They reach out to procurement officials, potential partners, and existing contacts. They schedule specific meetings with specific agendas. The booth exists as a meeting point, not as the strategy itself.</p>
                <p>They also invest heavily in what happens around the main event. Hosted dinners with five to eight carefully selected guests. Private demonstrations for qualified prospects. Informal conversations that could never happen in a formal procurement setting.</p>

                <div class="article-divider"></div>

                <h2>Choosing the Right Shows</h2>
                <p>Not every defense expo deserves your time and budget. The key factors to evaluate are straightforward. Who attends as buyers, not just exhibitors? What is the procurement activity level in that market? And does the show attract decision-makers or just observers?</p>
                <p>Some regional defense exhibitions punch well above their weight because they attract genuine procurement delegations from multiple countries. Others look impressive on paper but are primarily attended by other exhibitors looking at each other.</p>
                <p>Ask companies who have exhibited before. Not for the polished testimonial. For the honest assessment of what they actually got out of it.</p>
            `
        },
        tr: {
            category: 'Oyun Planı',
            title: 'Gerçekten İş Getiren Savunma Fuarları',
            desc: 'Savunma şirketleri fuar stantlarına yüz binlerce dolar harcıyor. Çoğu karşılığında ne kazandığını söyleyemiyor.',
            readTime: '6 dk okuma',
            date: 'Nisan 2026',
            thumbnail: 'thumbnails/pb-trade-shows.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkan Noktalar</div>
                    <ul>
                        <li>Stant, fuar stratejinizin en az önemli parçasıdır</li>
                        <li>Nitelikli kişilerle önceden planlanan toplantılar, stant ziyaretçilerinden çok daha fazla değer üretir</li>
                        <li>Her savunma fuarı aynı değildir. Bazıları iş getirir, bazıları sadece networking tiyatrosudur</li>
                        <li>Gerçek yatırım getirisi, ana etkinliğin etrafındaki yan toplantılarda, yemeklerde ve takiplerde ortaya çıkar</li>
                    </ul>
                </div>

                <h2>Stant Tuzağı</h2>
                <p>Şirketler stantları sever. Somuttur. Görseldir. Fotoğraf çekip LinkedIn'e koyabilirsiniz. Yönetim katını gezebilir ve üretken hissedebilir.</p>
                <p>Ama işte fuardan sonra kimsenin sormadığı soru: Stanttan kaç nitelikli potansiyel müşteri geldi? Kaçı toplantıya dönüştü? O toplantıların kaçı gerçek bir satış hattına dönüştü?</p>
                <p>Dürüst cevap, çoğu şirket için rahatsız edicidir. Stant çok sayıda ziyaretçi, bir yığın kartvizit ve gerçek işe dönüşen çok az şey üretti.</p>

                <div class="article-pullquote">
                    <p>"Fuar stratejiniz 'stant kur, personel yerleştir, kim gelirse görelim' ise, pahalı bir networking yapıyorsunuz. Bu bir satış stratejisi değil."</p>
                </div>

                <h2>Asıl İşe Yarayan Ne?</h2>
                <p>Savunma fuarlarından gerçek değer çıkaran şirketler farklı bir şey yapar. Fuarı önceden planlanmış görüşmeler için bir platform olarak kullanırlar, pasif bir bekleme oyunu olarak değil.</p>
                <p>Etkinlikten haftalar önce kimin katılacağını tespit ederler. Satın alma yetkililerine, potansiyel ortaklara ve mevcut ilişkilere ulaşırlar. Belirli gündemlerle belirli toplantılar ayarlarlar. Stant bir buluşma noktası olarak vardır, stratejinin kendisi olarak değil.</p>
                <p>Ana etkinliğin etrafında olanlara da ciddi yatırım yaparlar. Dikkatle seçilmiş beş-sekiz davetliyle yemekler. Nitelikli adaylar için özel gösteriler. Resmi tedarik ortamında asla gerçekleşemeyecek gayri resmi konuşmalar.</p>

                <div class="article-divider"></div>

                <h2>Doğru Fuarları Seçmek</h2>
                <p>Her savunma fuarı zamanınızı ve bütçenizi hak etmez. Değerlendirilecek temel faktörler açıktır. Sadece katılımcı olarak değil, alıcı olarak kimler katılıyor? O pazardaki satın alma aktivite seviyesi nedir? Fuar karar vericileri mi, yoksa sadece gözlemcileri mi çekiyor?</p>
                <p>Bazı bölgesel savunma fuarları, birden fazla ülkeden gerçek tedarik heyetleri çektikleri için boylarından büyük iş yapar. Diğerleri kağıt üzerinde etkileyici görünür ama ağırlıklı olarak birbirlerine bakan diğer katılımcılar tarafından ziyaret edilir.</p>
                <p>Daha önce katılmış şirketlere sorun. Cilalı referans için değil. Gerçekte ne elde ettiklerinin dürüst değerlendirmesi için.</p>
            `
        }
    },
    'pb-export-compliance': {
        en: {
            category: 'Playbook',
            title: 'The Export Compliance Checklist Nobody Gives You',
            desc: 'Export compliance is not optional. But finding a clear, practical guide before your first international defense deal is surprisingly hard.',
            readTime: '8 min read',
            date: 'March 2026',
            thumbnail: 'thumbnails/pb-export-compliance.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>Export compliance is not a box-checking exercise. Getting it wrong can end your business</li>
                        <li>Every country has different import requirements, and they change frequently</li>
                        <li>End-user certificates, offset requirements, and re-transfer restrictions vary dramatically by market</li>
                        <li>Compliance is not a cost center. Done right, it is a competitive differentiator</li>
                    </ul>
                </div>

                <h2>Why This Matters More Than You Think</h2>
                <p>Most defense companies understand that export compliance is important. Far fewer understand what it actually involves when they start doing business in a new country for the first time.</p>
                <p>The regulations are complex. They vary by country of origin, country of destination, product classification, and end-user type. And the consequences of getting it wrong are not a fine and a warning. They can include criminal liability, loss of export privileges, and permanent exclusion from government contracting.</p>

                <div class="article-pullquote">
                    <p>"Compliance is not the boring part of the deal. It is the part that determines whether you get to do deals at all."</p>
                </div>

                <h2>The Practical Checklist</h2>
                <h3>Step 1: Know Your Classification</h3>
                <p>Before you can export anything, you need to know exactly how your product is classified under your home country's export control regime. This determines which licenses you need, which destinations are restricted, and what level of government approval is required.</p>

                <h3>Step 2: Understand the Destination</h3>
                <p>Every importing country has its own requirements for defense purchases. Some require end-user certificates issued by specific government agencies. Some have offset obligations that mandate local content, technology transfer, or counter-trade. Some have restrictions on re-transfer that limit what the buyer can do with your product after purchase.</p>

                <h3>Step 3: Map the Approval Timeline</h3>
                <p>License approvals take time. In some cases, months. If you promise a customer a delivery timeline without accounting for the export license process, you are setting yourself up for a problem. Build the regulatory timeline into your commercial proposal from the beginning.</p>

                <h3>Step 4: Document Everything</h3>
                <p>If you cannot prove you followed the rules, it does not matter that you did. Maintain records of every communication, every certificate, every approval. This is not bureaucracy. It is insurance.</p>

                <div class="article-divider"></div>

                <h2>Compliance as Advantage</h2>
                <p>Here is something that surprises many companies. In markets where corruption and regulatory shortcuts have been common, a demonstrably clean compliance record is actually a selling point. Procurement officials in many countries are under increasing pressure to work with partners who will not create problems down the line.</p>
                <p>Companies with strong compliance programs do not just avoid risk. They earn trust. And in defense, trust is the currency that everything else is built on.</p>
            `
        },
        tr: {
            category: 'Oyun Planı',
            title: 'Kimsenin Size Vermediği İhracat Uyum Kontrol Listesi',
            desc: 'İhracat uyumu seçenek değildir. Ama ilk uluslararası savunma anlaşmanızdan önce açık ve pratik bir rehber bulmak şaşırtıcı derecede zordur.',
            readTime: '8 dk okuma',
            date: 'Mart 2026',
            thumbnail: 'thumbnails/pb-export-compliance.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkan Noktalar</div>
                    <ul>
                        <li>İhracat uyumu kutu işaretleme egzersizi değildir. Yanlış yapmak işinizi bitirebilir</li>
                        <li>Her ülkenin farklı ithalat gereksinimleri var ve bunlar sıklıkla değişiyor</li>
                        <li>Son kullanıcı sertifikaları, offset gereksinimleri ve devir kısıtlamaları pazardan pazara dramatik şekilde değişir</li>
                        <li>Uyum bir maliyet kalemi değildir. Doğru uygulandığında rekabet avantajıdır</li>
                    </ul>
                </div>

                <h2>Bu Neden Düşündüğünüzden Daha Önemli?</h2>
                <p>Savunma şirketlerinin çoğu ihracat uyumunun önemli olduğunu biliyor. Çok daha azı, yeni bir ülkede ilk kez iş yapmaya başladığında bunun gerçekte ne içerdiğini anlıyor.</p>
                <p>Mevzuat karmaşıktır. Menşe ülkeye, hedef ülkeye, ürün sınıflandırmasına ve son kullanıcı tipine göre değişir. Ve yanlış yapmanın sonuçları bir ceza ve uyarı değildir. Cezai sorumluluk, ihracat ayrıcalıklarının kaybı ve devlet ihalelerinden kalıcı men kapsamına girebilir.</p>

                <div class="article-pullquote">
                    <p>"Uyum, anlaşmanın sıkıcı kısmı değildir. Anlaşma yapıp yapamayacağınızı belirleyen kısmıdır."</p>
                </div>

                <h2>Pratik Kontrol Listesi</h2>
                <h3>Adım 1: Sınıflandırmanızı Bilin</h3>
                <p>Herhangi bir şeyi ihraç etmeden önce, ürününüzün kendi ülkenizin ihracat kontrol rejimi altında tam olarak nasıl sınıflandırıldığını bilmeniz gerekir. Bu, hangi lisanslara ihtiyacınız olduğunu, hangi hedeflerin kısıtlı olduğunu ve ne düzeyde hükümet onayı gerektiğini belirler.</p>

                <h3>Adım 2: Hedef Ülkeyi Anlayın</h3>
                <p>Her ithalatçı ülkenin savunma alımları için kendine özgü gereksinimleri vardır. Bazıları belirli devlet kurumları tarafından verilen son kullanıcı sertifikaları talep eder. Bazılarının yerel içerik, teknoloji transferi veya karşı ticaret gerektiren offset yükümlülükleri vardır. Bazılarının alıcının satın alma sonrası ürünle ne yapabileceğini sınırlayan devir kısıtlamaları vardır.</p>

                <h3>Adım 3: Onay Sürecini Haritalayın</h3>
                <p>Lisans onayları zaman alır. Bazı durumlarda aylar. İhracat lisans sürecini hesaba katmadan müşteriye teslimat takvimi vaat ediyorsanız, kendinizi bir soruna hazırlıyorsunuz. Düzenleyici takvimi en başından ticari teklifinize dahil edin.</p>

                <h3>Adım 4: Her Şeyi Belgeleyin</h3>
                <p>Kurallara uyduğunuzu kanıtlayamıyorsanız, uymuş olmanızın bir önemi yoktur. Her iletişimin, her sertifikanın, her onayın kaydını tutun. Bu bürokrasi değil. Sigortadır.</p>

                <div class="article-divider"></div>

                <h2>Avantaj Olarak Uyum</h2>
                <p>Birçok şirketi şaşırtan bir şey var. Yolsuzluk ve düzenleyici kestirmelerin yaygın olduğu pazarlarda, kanıtlanabilir temiz bir uyum sicili aslında bir satış argümanıdır. Birçok ülkedeki satın alma yetkilileri, ilerde sorun yaratmayacak ortaklarla çalışmak için artan baskı altındadır.</p>
                <p>Güçlü uyum programlarına sahip şirketler sadece riskten kaçınmaz. Güven kazanır. Ve savunmada güven, diğer her şeyin üzerine inşa edildiği para birimidir.</p>
            `
        }
    },

    // -------------------------------------------------------
    // MARKET PULSE
    // -------------------------------------------------------
    'mp-defense-budgets': {
        en: {
            category: 'Market Pulse',
            title: 'Where Defense Budgets Are Actually Growing in 2026',
            desc: 'Everyone talks about rising defense spending. But the money is not going where most people assume.',
            readTime: '6 min read',
            date: 'June 2026',
            thumbnail: 'thumbnails/mp-defense-budgets.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>Global defense spending is up, but growth is concentrated in specific regions and categories</li>
                        <li>Emerging markets are increasing modernization budgets faster than traditional defense powers</li>
                        <li>Technology-intensive acquisitions are growing faster than traditional platform procurement</li>
                        <li>Budget growth does not automatically mean market access. Procurement infrastructure matters</li>
                    </ul>
                </div>

                <h2>The Headline vs. The Reality</h2>
                <p>The headlines are dramatic. Global defense spending hits new records. Budgets surging worldwide. Arms race accelerating.</p>
                <p>The reality is more nuanced. Yes, overall defense spending is increasing. But the growth is not uniform. It is concentrated in specific regions, specific capability areas, and specific types of acquisition. If you are making business decisions based on aggregate global numbers, you are working with the wrong map.</p>

                <div class="article-pullquote">
                    <p>"A growing defense budget and a growing opportunity for your company are two very different things. The first is a macro trend. The second requires understanding what is actually being bought and by whom."</p>
                </div>

                <h2>Where the Growth Is Real</h2>
                <p>Several emerging defense markets are increasing their modernization spending at rates that outpace traditional military powers. These are countries that have historically maintained smaller, less technology-intensive armed forces and are now investing in capability upgrades across multiple domains.</p>
                <p>The spending increases are real. But they come with important caveats. Budget allocation does not equal procurement execution. Many countries that announce significant modernization programs take years to move from budget approval to actual tender publication. The gap between announced spending and executable opportunity is where most companies miscalculate.</p>

                <div class="article-divider"></div>

                <h2>What Is Being Bought</h2>
                <p>The composition of defense spending is shifting as much as the volume. Traditional platform procurement, big hardware purchases like aircraft and armored vehicles, is still happening. But the fastest-growing categories are technology-intensive: surveillance systems, communications infrastructure, cybersecurity, autonomous platforms, and software-defined capabilities.</p>
                <p>This shift matters because it changes who can compete. Technology-focused defense companies, including smaller and mid-size firms, are finding opportunities in segments that were previously dominated by large prime contractors. The barrier to entry is lower. But the competition is fiercer.</p>

                <h3>Budget Growth Does Not Equal Market Access</h3>
                <p>A country can double its defense budget and still be inaccessible if the procurement infrastructure is not mature, if the regulatory framework is unclear, or if incumbent relationships block new entrants. Budget data tells you where money exists. Ground-level intelligence tells you whether you can actually access it.</p>
            `
        },
        tr: {
            category: 'Pazar Nabzı',
            title: '2026\'da Savunma Bütçeleri Gerçekte Nerede Büyüyor?',
            desc: 'Herkes artan savunma harcamalarından bahsediyor. Ama para çoğu kişinin varsaydığı yere gitmiyor.',
            readTime: '6 dk okuma',
            date: 'Haziran 2026',
            thumbnail: 'thumbnails/mp-defense-budgets.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkan Noktalar</div>
                    <ul>
                        <li>Küresel savunma harcamaları artıyor, ancak büyüme belirli bölge ve kategorilerde yoğunlaşıyor</li>
                        <li>Gelişen pazarlar modernizasyon bütçelerini geleneksel savunma güçlerinden daha hızlı artırıyor</li>
                        <li>Teknoloji yoğun alımlar, geleneksel platform tedarikinden daha hızlı büyüyor</li>
                        <li>Bütçe artışı otomatik olarak pazar erişimi anlamına gelmiyor. Tedarik altyapısı önemlidir</li>
                    </ul>
                </div>

                <h2>Manşet ile Gerçeklik</h2>
                <p>Manşetler dramatik. Küresel savunma harcamaları yeni rekorlar kırıyor. Bütçeler dünya çapında yükseliyor. Silahlanma yarışı hızlanıyor.</p>
                <p>Gerçek daha nüanslı. Evet, toplam savunma harcaması artıyor. Ama büyüme homojen değil. Belirli bölgelerde, belirli yetenek alanlarında ve belirli alım türlerinde yoğunlaşıyor. İş kararlarınızı toplu küresel rakamlara göre veriyorsanız, yanlış haritayla çalışıyorsunuz.</p>

                <div class="article-pullquote">
                    <p>"Büyüyen bir savunma bütçesi ile şirketiniz için büyüyen bir fırsat, birbirinden çok farklı şeyler. Birincisi makro trend. İkincisi, gerçekte neyin alındığını ve kimin aldığını anlamayı gerektirir."</p>
                </div>

                <h2>Büyümenin Gerçek Olduğu Yerler</h2>
                <p>Birçok gelişen savunma pazarı, modernizasyon harcamalarını geleneksel askeri güçleri geride bırakacak oranlarda artırıyor. Bunlar tarihsel olarak daha küçük, daha az teknoloji yoğun silahlı kuvvetler sürdürmüş ve şimdi birden fazla alanda yetenek yükseltmelerine yatırım yapan ülkeler.</p>
                <p>Harcama artışları gerçek. Ama önemli uyarılarla birlikte geliyorlar. Bütçe tahsisi, tedarik uygulaması anlamına gelmiyor. Önemli modernizasyon programları açıklayan birçok ülke, bütçe onayından fiili ihale yayınına geçmek için yıllar harcıyor. Açıklanan harcama ile uygulanabilir fırsat arasındaki boşluk, çoğu şirketin yanlış hesapladığı yerdir.</p>

                <div class="article-divider"></div>

                <h2>Ne Alınıyor?</h2>
                <p>Savunma harcamalarının bileşimi, hacmi kadar değişiyor. Geleneksel platform tedariği (uçak ve zırhlı araç gibi büyük donanım alımları) hâlâ yapılıyor. Ama en hızlı büyüyen kategoriler teknoloji yoğun olanlar: gözetim sistemleri, haberleşme altyapısı, siber güvenlik, otonom platformlar ve yazılım tanımlı yetenekler.</p>
                <p>Bu kayma önemli çünkü kimin rekabet edebileceğini değiştiriyor. Teknoloji odaklı savunma şirketleri (küçük ve orta ölçekli firmalar dahil) daha önce büyük ana yüklenicilerin hakim olduğu segmentlerde fırsatlar buluyor. Giriş bariyeri daha düşük. Ama rekabet daha şiddetli.</p>

                <h3>Bütçe Artışı Pazar Erişimi Değildir</h3>
                <p>Bir ülke savunma bütçesini ikiye katlayabilir ve yine de erişilemez olabilir; tedarik altyapısı olgun değilse, düzenleyici çerçeve belirsizse veya yerleşik ilişkiler yeni girenleri engelliyorsa. Bütçe verileri paranın nerede olduğunu söyler. Saha analizi, gerçekten erişip erişemeyeceğinizi söyler.</p>
            `
        }
    },
    'mp-procurement-shift': {
        en: {
            category: 'Market Pulse',
            title: 'The Procurement Modernization Wave Nobody Saw Coming',
            desc: 'Defense procurement is going digital. Slowly, unevenly, and with consequences nobody fully anticipated.',
            readTime: '6 min read',
            date: 'May 2026',
            thumbnail: 'thumbnails/mp-procurement-shift.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>Multiple defense ministries are digitizing their procurement processes simultaneously</li>
                        <li>Digital procurement increases transparency but also increases competition</li>
                        <li>Companies that used to win through relationships alone are finding the ground shifting</li>
                        <li>Early adoption of digital procurement tools creates measurable competitive advantage</li>
                    </ul>
                </div>

                <h2>The Quiet Revolution</h2>
                <p>It did not make headlines. There was no announcement, no industry conference keynote. But over the last three years, something significant happened in defense procurement across multiple emerging markets.</p>
                <p>They went digital.</p>
                <p>Tender portals replaced phone calls. Online registration systems replaced walk-in visits to procurement offices. Digital submission platforms replaced physical document delivery. And the implications are bigger than most companies realize.</p>

                <div class="article-pullquote">
                    <p>"Digital procurement is not just a format change. It is a power shift. It makes procurement more transparent, more competitive, and harder to navigate for companies that relied on informal channels."</p>
                </div>

                <h2>What This Means in Practice</h2>
                <p>For decades, defense procurement in many markets operated through informal networks. If you knew the right people, you heard about opportunities early. If you did not, you might never hear about them at all.</p>
                <p>Digital procurement platforms change that dynamic. Tenders are published openly. Requirements are documented formally. Evaluation criteria are specified in advance. This is objectively better for the integrity of the process. But it also means that the companies who relied primarily on relationship-based intelligence are losing their information advantage.</p>
                <p>The companies adapting fastest are the ones that combine traditional relationship management with systematic digital monitoring. They still know the right people. But they also have systems in place to track published tenders, monitor procurement timelines, and respond to opportunities that are now visible to a much wider competitive field.</p>

                <div class="article-divider"></div>

                <h2>The Uneven Rollout</h2>
                <p>Not every market is moving at the same speed. Some countries have implemented sophisticated e-procurement systems that are genuinely functional. Others have launched digital platforms that exist on paper but still require in-person engagement for anything meaningful.</p>
                <p>The gap between digital aspiration and operational reality varies dramatically. Understanding where each market actually sits on this spectrum is critical for companies deciding where to invest their business development resources.</p>
            `
        },
        tr: {
            category: 'Pazar Nabzı',
            title: 'Kimsenin Beklemediği Tedarik Modernizasyonu Dalgası',
            desc: 'Savunma tedariği dijitalleşiyor. Yavaşça, düzensizce ve kimsenin tam olarak öngöremediği sonuçlarla.',
            readTime: '6 dk okuma',
            date: 'Mayıs 2026',
            thumbnail: 'thumbnails/mp-procurement-shift.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkan Noktalar</div>
                    <ul>
                        <li>Birçok savunma bakanlığı eş zamanlı olarak tedarik süreçlerini dijitalleştiriyor</li>
                        <li>Dijital tedarik şeffaflığı artırıyor ama rekabeti de artırıyor</li>
                        <li>Yalnızca ilişkilerle kazanan şirketler, zeminin kaydığını hissediyor</li>
                        <li>Dijital tedarik araçlarının erken benimsenmesi ölçülebilir rekabet avantajı yaratıyor</li>
                    </ul>
                </div>

                <h2>Sessiz Devrim</h2>
                <p>Manşetlere çıkmadı. Bir açıklama yapılmadı, bir konferans sunumu olmadı. Ama son üç yılda birden fazla gelişen pazarda savunma tedarikinde önemli bir şey oldu.</p>
                <p>Dijitale geçtiler.</p>
                <p>İhale portalları telefon aramalarının yerini aldı. Çevrimiçi kayıt sistemleri, tedarik ofislerine gidişlerin yerini aldı. Dijital başvuru platformları, fiziksel belge tesliminin yerini aldı. Ve sonuçları çoğu şirketin farkında olduğundan çok daha büyük.</p>

                <div class="article-pullquote">
                    <p>"Dijital tedarik sadece bir format değişikliği değil. Bir güç kaymasıdır. Tedariki daha şeffaf, daha rekabetçi ve gayri resmi kanallara güvenen şirketler için daha zor gezilebilir hale getiriyor."</p>
                </div>

                <h2>Pratikte Ne Anlama Geliyor?</h2>
                <p>On yıllar boyunca birçok pazardaki savunma tedariği gayri resmi ağlar üzerinden yürüdü. Doğru kişileri tanıyorsanız, fırsatları erken duyardınız. Tanımıyorsanız, hiç duymayabilirdiniz.</p>
                <p>Dijital tedarik platformları bu dinamiği değiştiriyor. İhaleler açıkça yayınlanıyor. Gereksinimler resmi olarak belgeleniyor. Değerlendirme kriterleri önceden belirleniyor. Bu, sürecin bütünlüğü açısından nesnel olarak daha iyi. Ama aynı zamanda öncelikli olarak ilişki temelli bilgi erişimine dayanan şirketlerin bilgi avantajlarını kaybettiği anlamına geliyor.</p>
                <p>En hızlı uyum sağlayan şirketler, geleneksel ilişki yönetimini sistematik dijital takiple birleştirenler. Hâlâ doğru insanları tanıyorlar. Ama aynı zamanda yayınlanan ihaleleri takip etmek, tedarik takvimlerini izlemek ve artık çok daha geniş bir rekabet alanına görünür olan fırsatlara yanıt vermek için sistemleri var.</p>

                <div class="article-divider"></div>

                <h2>Düzensiz Yaygınlaşma</h2>
                <p>Her pazar aynı hızda ilerlemiyor. Bazı ülkeler gerçekten işlevsel sofistike e-tedarik sistemleri kurmuştur. Diğerleri kağıt üzerinde var olan ama anlamlı herhangi bir şey için hâlâ yüz yüze etkileşim gerektiren dijital platformlar başlatmıştır.</p>
                <p>Dijital hedef ile operasyonel gerçeklik arasındaki açık dramatik biçimde değişiyor. Her pazarın bu yelpazede gerçekte nerede durduğunu anlamak, iş geliştirme kaynaklarını nereye yatıracağına karar veren şirketler için kritiktir.</p>
            `
        }
    },
    'mp-software-defined': {
        en: {
            category: 'Market Pulse',
            title: 'Software-Defined Defense Is Reshaping How Militaries Buy',
            desc: 'The shift from hardware-centric to software-centric defense is not coming. It is already here. And it is changing procurement faster than acquisition systems can adapt.',
            readTime: '7 min read',
            date: 'April 2026',
            thumbnail: 'thumbnails/mp-software-defined.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>Militaries are shifting spending from hardware platforms to the software that runs on them</li>
                        <li>Traditional acquisition frameworks were built for tanks and aircraft, not software updates</li>
                        <li>This creates opportunities for technology companies but also procurement friction</li>
                        <li>The companies that bridge the gap between software innovation and defense procurement culture will win</li>
                    </ul>
                </div>

                <h2>Hardware Is the Body. Software Is the Mind.</h2>
                <p>A radar system is only as good as its signal processing software. An armored vehicle is defined as much by its electronic warfare suite as by its armor grade. A surveillance system is really a data platform with cameras attached.</p>
                <p>This is not a prediction. This is the current state of modern defense technology. And it is creating a fundamental tension in how militaries buy equipment.</p>

                <div class="article-pullquote">
                    <p>"Procurement systems designed to buy a tank over a seven-year cycle are now being asked to buy software that needs updating every six months. That is not a minor process tweak. That is a structural mismatch."</p>
                </div>

                <h2>The Procurement Gap</h2>
                <p>Most defense procurement frameworks were designed for hardware. Long development cycles, fixed specifications, multi-year contracts, and acceptance testing based on physical performance criteria. These systems work well for buying ships, aircraft, and vehicles.</p>
                <p>They work terribly for buying software.</p>
                <p>Software is iterative. It needs continuous updates, rapid deployment, and flexible specifications. The idea of freezing software requirements three years before delivery and expecting the result to be relevant is, frankly, absurd. But that is exactly what many procurement systems still require.</p>

                <div class="article-divider"></div>

                <h2>The Opportunity</h2>
                <p>For technology-focused defense companies, this gap is actually an opportunity. Militaries know their procurement processes are not well-suited to software acquisition. They are actively looking for solutions, for companies that can deliver software-defined capabilities within the constraints of existing acquisition frameworks while helping those frameworks evolve.</p>
                <p>The companies that succeed will be the ones that speak both languages. They need to understand software development and they need to understand defense procurement. The technology alone is not enough. The ability to package that technology in a way that acquisition officials can actually buy is what separates the winners from the frustrated.</p>

                <h3>What This Means for Market Entry</h3>
                <p>If you are a software-focused defense company entering a new market, your biggest challenge is probably not technical. It is procedural. Can the procurement system in your target market actually buy what you are selling? If the answer is "not easily," that does not mean the market is closed. It means you need to invest in helping the customer understand how to acquire your product within their existing framework.</p>
            `
        },
        tr: {
            category: 'Pazar Nabzı',
            title: 'Yazılım Tanımlı Savunma Orduların Satın Alma Biçimini Değiştiriyor',
            desc: 'Donanım merkezli savunmadan yazılım merkezli savunmaya geçiş gelecekte değil, şu anda yaşanıyor. Ve tedarik süreçlerini, alım sistemlerinin adapte olabildiğinden daha hızlı dönüştürüyor.',
            readTime: '7 dk okuma',
            date: 'Nisan 2026',
            thumbnail: 'thumbnails/mp-software-defined.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkan Noktalar</div>
                    <ul>
                        <li>Ordular harcamalarını donanım platformlarından, onların üzerinde çalışan yazılıma kaydırıyor</li>
                        <li>Geleneksel alım çerçeveleri tanklar ve uçaklar için inşa edildi, yazılım güncellemeleri için değil</li>
                        <li>Bu durum teknoloji şirketleri için fırsat yaratıyor ama aynı zamanda tedarik sürtünmesi de doğuruyor</li>
                        <li>Yazılım inovasyonu ile savunma tedarik kültürü arasındaki boşluğu kapatanlar kazanacak</li>
                    </ul>
                </div>

                <h2>Donanım Bedendir. Yazılım Akıldır.</h2>
                <p>Bir radar sistemi ancak sinyal işleme yazılımı kadar iyidir. Bir zırhlı araç, zırh kalitesi kadar elektronik harp süiti ile de tanımlanır. Bir gözetim sistemi aslında kameralar eklenmiş bir veri platformudur.</p>
                <p>Bu bir öngörü değil. Modern savunma teknolojisinin mevcut durumudur. Ve orduların ekipman satın alma biçiminde temel bir gerilim yaratıyor.</p>

                <div class="article-pullquote">
                    <p>"Yedi yıllık bir döngüde tank almak için tasarlanan tedarik sistemlerinden şimdi altı ayda bir güncellenmesi gereken yazılım almaları isteniyor. Bu küçük bir süreç ayarlaması değil. Yapısal bir uyumsuzluktur."</p>
                </div>

                <h2>Tedarik Açığı</h2>
                <p>Savunma tedarik çerçevelerinin çoğu donanım için tasarlandı. Uzun geliştirme döngüleri, sabit şartnameler, çok yıllık sözleşmeler ve fiziksel performans kriterlerine dayalı kabul testleri. Bu sistemler gemi, uçak ve araç almak için iyi çalışıyor.</p>
                <p>Yazılım almak için berbat çalışıyor.</p>
                <p>Yazılım yinelemelidir. Sürekli güncellemelere, hızlı dağıtıma ve esnek şartnamelere ihtiyaç duyar. Yazılım gereksinimlerini teslimattan üç yıl önce dondurup sonucun geçerli olmasını beklemek, açıkçası absürttür. Ama birçok tedarik sistemi hâlâ tam olarak bunu gerektiriyor.</p>

                <div class="article-divider"></div>

                <h2>Fırsat</h2>
                <p>Teknoloji odaklı savunma şirketleri için bu boşluk aslında bir fırsattır. Ordular, tedarik süreçlerinin yazılım alımına uygun olmadığını biliyor. Aktif olarak çözüm arıyorlar: mevcut alım çerçevelerinin kısıtlamaları içinde yazılım tanımlı yetenekler sunabilecek ve aynı zamanda bu çerçevelerin evrilmesine yardımcı olabilecek şirketleri.</p>
                <p>Başarılı olacak şirketler, her iki dili de konuşanlar olacak. Yazılım geliştirmeyi anlamaları gerekiyor ve savunma tedariğini anlamaları gerekiyor. Tek başına teknoloji yeterli değil. O teknolojiyi, alım yetkililerinin gerçekten satın alabileceği şekilde paketleme yeteneği, kazananları hayal kırıklığına uğrayanlardan ayıran şeydir.</p>

                <h3>Pazar Girişi İçin Ne Anlama Geliyor?</h3>
                <p>Yeni bir pazara giren yazılım odaklı bir savunma şirketiyseniz, en büyük zorluğunuz muhtemelen teknik değildir. Prosedüreldir. Hedef pazarınızdaki tedarik sistemi, sattığınız şeyi gerçekten satın alabilir mi? Cevap "kolay değil" ise, bu pazarın kapalı olduğu anlamına gelmez. Müşterinin ürününüzü mevcut çerçeveleri dahilinde nasıl tedarik edeceğini anlamasına yardımcı olmaya yatırım yapmanız gerektiği anlamına gelir.</p>
            `
        }
    },
    'mp-five-cultures': {
        en: {
            category: 'Market Pulse',
            title: 'Five Procurement Cultures, Five Different Playbooks',
            desc: 'Defense procurement is not a universal process. It is deeply cultural. And if you apply one playbook everywhere, you will lose everywhere.',
            readTime: '7 min read',
            date: 'March 2026',
            thumbnail: 'thumbnails/mp-five-cultures.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>Procurement culture varies as much as national culture. Ignoring this is a strategic error</li>
                        <li>Some markets are process-driven, some are relationship-driven, most are a mix of both</li>
                        <li>Understanding the local procurement culture saves months of misdirected effort</li>
                        <li>The company that adapts its approach to each market will outperform the one that applies a template</li>
                    </ul>
                </div>

                <h2>The Universal Playbook Myth</h2>
                <p>Here is a common mistake. A company succeeds in one defense market and assumes the same approach will work in the next one. They use the same pitch, the same partner structure, the same timeline expectations.</p>
                <p>It almost never works.</p>
                <p>Defense procurement is not just a technical process. It is a cultural one. The way decisions get made, who influences those decisions, how trust is built, what role formal process plays versus informal relationships. All of this varies dramatically from country to country.</p>

                <div class="article-pullquote">
                    <p>"Every defense market has its own rhythm. The company that tries to force its home-market tempo onto a foreign buyer will always feel like it is pushing against a current."</p>
                </div>

                <h2>The Spectrum</h2>
                <h3>Process-Driven Markets</h3>
                <p>Some markets run procurement almost entirely through formal, documented processes. Tenders are published with clear specifications. Evaluation criteria are defined in advance. Decisions are traceable and auditable. In these markets, your proposal quality, technical compliance, and pricing strategy are the primary variables.</p>

                <h3>Relationship-Driven Markets</h3>
                <p>Other markets run on relationships. The formal process exists, but the real decisions happen before the tender drops. Who you know, how long they have known you, and whether you have demonstrated commitment to the market over time. In these markets, showing up with the best product and the best price is necessary but not sufficient.</p>

                <h3>The Hybrid</h3>
                <p>Most markets are actually a mix of both. They have formal processes that matter, but within those processes, relationships and trust influence outcomes. Understanding the exact ratio in each market is the key to effective positioning.</p>

                <div class="article-divider"></div>

                <h2>Practical Implications</h2>
                <p>If you are entering a process-driven market, invest in proposal quality, compliance documentation, and technical precision. Your written submission will carry the weight.</p>
                <p>If you are entering a relationship-driven market, invest in time. In presence. In building trust before you need it. Your first year should be about establishing credibility, not closing deals.</p>
                <p>If you are entering a hybrid market, you need both. And you need to understand which elements of the process are formal and which are influenced by relationships. Getting this wrong means either over-investing in paperwork that nobody reads or under-investing in relationships that actually matter.</p>
            `
        },
        tr: {
            category: 'Pazar Nabzı',
            title: 'Beş Tedarik Kültürü, Beş Farklı Oyun Planı',
            desc: 'Savunma tedariği evrensel bir süreç değildir. Derinden kültüreldir. Ve tek bir oyun planını her yere uygularsanız, her yerde kaybedersiniz.',
            readTime: '7 dk okuma',
            date: 'Mart 2026',
            thumbnail: 'thumbnails/mp-five-cultures.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkan Noktalar</div>
                    <ul>
                        <li>Tedarik kültürü, ulusal kültür kadar değişkendir. Bunu görmezden gelmek stratejik bir hatadır</li>
                        <li>Bazı pazarlar süreç odaklıdır, bazıları ilişki odaklıdır, çoğu her ikisinin karışımıdır</li>
                        <li>Yerel tedarik kültürünü anlamak, yanlış yönlendirilmiş aylarca çabadan kurtarır</li>
                        <li>Yaklaşımını her pazara uyarlayan şirket, şablon uygulayanı her zaman geçer</li>
                    </ul>
                </div>

                <h2>Evrensel Oyun Planı Efsanesi</h2>
                <p>Yaygın bir hata. Bir şirket bir savunma pazarında başarılı olur ve aynı yaklaşımın sonrakinde de işe yarayacağını varsayar. Aynı sunumu, aynı ortaklık yapısını, aynı süre beklentilerini kullanırlar.</p>
                <p>Neredeyse hiçbir zaman işe yaramaz.</p>
                <p>Savunma tedariği sadece teknik bir süreç değildir. Kültürel bir süreçtir. Kararların nasıl verildiği, bu kararları kimin etkilediği, güvenin nasıl inşa edildiği, resmi sürecin gayri resmi ilişkilere karşı ne rol oynadığı. Tüm bunlar ülkeden ülkeye dramatik şekilde farklılık gösterir.</p>

                <div class="article-pullquote">
                    <p>"Her savunma pazarının kendine özgü bir ritmi var. Kendi iç pazarının temposunu yabancı alıcıya dayatmaya çalışan şirket, her zaman akıntıya karşı kürek çekiyormuş gibi hissedecektir."</p>
                </div>

                <h2>Yelpaze</h2>
                <h3>Süreç Odaklı Pazarlar</h3>
                <p>Bazı pazarlar tedariği neredeyse tamamen resmi, belgelenmiş süreçlerle yürütür. İhaleler açık şartnamelerle yayınlanır. Değerlendirme kriterleri önceden belirlenir. Kararlar izlenebilir ve denetlenebilirdir. Bu pazarlarda teklifinizin kalitesi, teknik uyumunuz ve fiyatlandırma stratejiniz birincil değişkenlerdir.</p>

                <h3>İlişki Odaklı Pazarlar</h3>
                <p>Diğer pazarlar ilişkilerle yürür. Resmi süreç vardır, ama asıl kararlar ihale yayınlanmadan önce verilir. Kimi tanıdığınız, ne zamandır tanıdıkları ve pazara zaman içinde bağlılık gösterip göstermediğiniz. Bu pazarlarda en iyi ürün ve en iyi fiyatla ortaya çıkmak gerekli ama yeterli değildir.</p>

                <h3>Hibrit Model</h3>
                <p>Çoğu pazar aslında her ikisinin karışımıdır. Önemli olan resmi süreçleri vardır, ama bu süreçler içinde ilişkiler ve güven sonuçları etkiler. Her pazardaki tam oranı anlamak, etkili konumlandırmanın anahtarıdır.</p>

                <div class="article-divider"></div>

                <h2>Pratik Sonuçlar</h2>
                <p>Süreç odaklı bir pazara giriyorsanız, teklif kalitesine, uyum belgelerine ve teknik hassasiyete yatırım yapın. Yazılı başvurunuz belirleyici olacaktır.</p>
                <p>İlişki odaklı bir pazara giriyorsanız, zamana yatırım yapın. Varlığa. İhtiyacınız olmadan önce güven inşa etmeye. İlk yılınız anlaşma kapatmakla değil, güvenilirlik oluşturmakla ilgili olmalıdır.</p>
                <p>Hibrit bir pazara giriyorsanız, ikisine de ihtiyacınız var. Ve sürecin hangi unsurlarının resmi olduğunu, hangilerinin ilişkilerden etkilendiğini anlamanız gerekiyor. Bunu yanlış yapmak, ya kimsenin okumadığı evrak işlerine aşırı yatırım yapmak ya da gerçekten önemli olan ilişkilere yetersiz yatırım yapmak demektir.</p>
            `
        }
    },

    // -------------------------------------------------------
    // FIELD NOTES
    // -------------------------------------------------------
    'fn-defense-expo': {
        en: {
            category: 'Field Notes',
            title: 'What You Actually See at a Defense Expo (That Nobody Writes About)',
            desc: 'The official story of defense exhibitions is polished and professional. The actual experience is something else entirely.',
            readTime: '5 min read',
            date: 'June 2026',
            thumbnail: 'thumbnails/fn-defense-expo.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>The most valuable conversations at defense expos happen outside the exhibition hall</li>
                        <li>Booth size has almost no correlation with business results</li>
                        <li>The companies that come with pre-scheduled meetings leave with real opportunities</li>
                        <li>The most common mistake is treating the expo as the strategy rather than a tool within a strategy</li>
                    </ul>
                </div>

                <h2>The Real Show</h2>
                <p>Walk into any major defense exhibition and the first thing you notice is the scale. Massive booths with full-scale vehicle mockups. LED walls running cinematic product videos. Staff in matching suits handing out branded bags.</p>
                <p>It looks impressive. It feels important. And most of it is theater.</p>
                <p>The real show happens in the meeting rooms behind the booths. In the hotel lobbies. In the restaurants nearby. In the quiet conversations between people who already know each other and are using the expo as a convenient reason to be in the same city at the same time.</p>

                <div class="article-pullquote">
                    <p>"The best thing about a defense expo is that it puts five hundred people you need to meet in the same zip code for three days. The worst thing is when companies waste that by standing behind a booth waiting for someone to walk up."</p>
                </div>

                <h2>What Nobody Tells You</h2>
                <p>The delegation visits that look so impressive in photos? Most of them are fifteen-minute walkthroughs where the VIPs barely slow down. Getting a real conversation with a senior procurement official at a booth is rare. Getting one over coffee at the hotel next door is much more likely.</p>
                <p>The business cards you collect at the booth? Most of them will never respond to your follow-up email. The three meetings you had that were pre-scheduled with people who actually have budget authority? Those are the ones that turn into pipeline.</p>

                <div class="article-divider"></div>

                <h2>How to Actually Win at an Expo</h2>
                <p>Show up with a plan. Not a hope. A plan. Know exactly who you want to meet, why you want to meet them, and what you want to accomplish in each conversation.</p>
                <p>Book your meetings before you book your booth. If you cannot fill your meeting schedule before the event, reconsider whether you need a booth at all. Some of the most effective expo participants do not have booths. They have a meeting room, a calendar full of appointments, and a dinner reservation for ten.</p>
                <p>And follow up within 48 hours. Not a generic "nice to meet you" email. A specific, personalized follow-up that references what you discussed and proposes a concrete next step. The follow-up is where the expo investment either pays off or evaporates.</p>
            `
        },
        tr: {
            category: 'Saha Notları',
            title: 'Bir Savunma Fuarında Gerçekte Gördüğünüz Ama Kimsenin Yazmadığı Şeyler',
            desc: 'Savunma fuarlarının resmi hikayesi cilalı ve profesyoneldir. Gerçek deneyim tamamen başka bir şeydir.',
            readTime: '5 dk okuma',
            date: 'Haziran 2026',
            thumbnail: 'thumbnails/fn-defense-expo.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkan Noktalar</div>
                    <ul>
                        <li>Savunma fuarlarındaki en değerli konuşmalar sergi salonunun dışında gerçekleşir</li>
                        <li>Stant büyüklüğünün iş sonuçlarıyla neredeyse hiçbir korelasyonu yoktur</li>
                        <li>Önceden planlanmış toplantılarla gelen şirketler, gerçek fırsatlarla ayrılır</li>
                        <li>En yaygın hata, fuarı strateji içindeki bir araç yerine stratejinin kendisi olarak görmektir</li>
                    </ul>
                </div>

                <h2>Asıl Gösteri</h2>
                <p>Herhangi bir büyük savunma fuarına girin, ilk dikkatinizi çeken ölçektir. Gerçek boyutlu araç maketleriyle devasa stantlar. Sinematik ürün videoları yayınlayan LED duvarlar. Takım elbiseli personel markalı çantalar dağıtıyor.</p>
                <p>Etkileyici görünüyor. Önemli hissediyor. Ve çoğu tiyatrodur.</p>
                <p>Asıl gösteri stantların arkasındaki toplantı odalarında gerçekleşir. Otel lobilerde. Yakındaki restoranlarda. Birbirlerini zaten tanıyan ve fuarı aynı şehirde aynı anda bulunmak için uygun bir neden olarak kullanan insanlar arasındaki sessiz konuşmalarda.</p>

                <div class="article-pullquote">
                    <p>"Savunma fuarının en iyi tarafı, tanışmanız gereken beş yüz kişiyi üç gün boyunca aynı bölgeye koymasıdır. En kötü tarafı ise şirketlerin bunu, stantın arkasında durup birinin gelmesini bekleyerek harcamasıdır."</p>
                </div>

                <h2>Kimsenin Söylemediği Şey</h2>
                <p>Fotoğraflarda çok etkileyici görünen heyet ziyaretleri mi? Çoğu, VIP'lerin güçlükle yavaşladığı on beş dakikalık yürüyüşlerdir. Bir stantta kıdemli bir satın alma yetkilisiyle gerçek bir konuşma yakalamak nadirdir. Yandaki otelde bir kahve eşliğinde yakalamak çok daha olasıdır.</p>
                <p>Stantta topladığınız kartvizitler mi? Çoğu takip e-postanıza asla yanıt vermeyecek. Bütçe yetkisi olan kişilerle önceden ayarladığınız üç toplantı mı? İşte pipeline'a dönüşenler bunlar.</p>

                <div class="article-divider"></div>

                <h2>Bir Fuarda Gerçekten Nasıl Kazanılır?</h2>
                <p>Bir planla gelin. Bir umutla değil. Bir planla. Kiminle tanışmak istediğinizi, neden tanışmak istediğinizi ve her konuşmada ne başarmak istediğinizi tam olarak bilin.</p>
                <p>Stantınızı ayırtmadan önce toplantılarınızı ayırtın. Etkinlik öncesinde toplantı takviminizi dolduramıyorsanız, stanta ihtiyacınız olup olmadığını yeniden değerlendirin. En etkili fuar katılımcılarından bazılarının stantı yoktur. Bir toplantı odaları, randevularla dolu bir takvimleri ve on kişilik bir yemek rezervasyonları vardır.</p>
                <p>Ve 48 saat içinde takip yapın. Genel bir "tanıştığımıza memnun oldum" e-postası değil. Konuştuğunuz konuya atıfta bulunan ve somut bir sonraki adım öneren spesifik, kişiselleştirilmiş bir takip. Fuar yatırımının karşılığını verdiği ya da buharlaştığı yer, bu takiptir.</p>
            `
        }
    },
    'fn-procurement-official': {
        en: {
            category: 'Field Notes',
            title: 'The Procurement Official Problem',
            desc: 'Getting access to the right person in a defense ministry is the oldest challenge in the industry. It is also the most misunderstood.',
            readTime: '5 min read',
            date: 'May 2026',
            thumbnail: 'thumbnails/fn-procurement-official.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>Access is not the real problem. Relevance is. Officials take meetings with companies they perceive as credible</li>
                        <li>Cold outreach to procurement officials almost never works in defense</li>
                        <li>Introductions through trusted intermediaries remain the most effective access channel</li>
                        <li>Building a relationship with one well-connected official is worth more than emailing fifty</li>
                    </ul>
                </div>

                <h2>The Real Problem</h2>
                <p>Every defense company that enters a new market hits the same wall. You know who the buyer is. You know what they need. You know your product is a fit. But you cannot get in the room.</p>
                <p>The assumption is usually that access is the problem. If only you could get a meeting, you could win the business. So companies try everything. Cold emails to ministry contacts. LinkedIn messages. Requests through embassies. Approaches at trade shows.</p>
                <p>Most of it goes nowhere.</p>
                <p>But the problem is not really access. The problem is relevance. Procurement officials take meetings all the time. They just take them with companies they already know, or companies that come recommended by people they trust. Showing up as an unknown entity asking for time is not an access problem. It is a credibility problem.</p>

                <div class="article-pullquote">
                    <p>"Nobody in defense procurement ignores a company they think might solve their problem. They ignore companies they have never heard of who are asking for something without offering anything in return."</p>
                </div>

                <div class="article-divider"></div>

                <h2>What Actually Works</h2>
                <h3>The Warm Introduction</h3>
                <p>The single most effective way to get a meeting with a procurement official is through someone they already trust. A local representative who has an existing relationship. A retired military officer who serves as an advisor. A colleague from another ministry who can make a credible recommendation.</p>

                <h3>The Value-First Approach</h3>
                <p>Instead of asking for a meeting, offer something useful. An industry briefing. A market analysis. An invitation to a relevant event. When you lead with value instead of a sales pitch, the dynamic changes entirely.</p>

                <h3>The Long Game</h3>
                <p>Some relationships take years to build. The official you meet briefly at a conference in 2026 might become the decision-maker on a program in 2028. The companies that maintain these relationships patiently, without expecting immediate returns, are the ones that consistently find themselves in the right conversations at the right time.</p>
            `
        },
        tr: {
            category: 'Saha Notları',
            title: 'Satın Alma Yetkilisi Sorunu',
            desc: 'Savunma bakanlığında doğru kişiye ulaşmak, sektörün en eski zorluğudur. Aynı zamanda en yanlış anlaşılanıdır.',
            readTime: '5 dk okuma',
            date: 'Mayıs 2026',
            thumbnail: 'thumbnails/fn-procurement-official.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkan Noktalar</div>
                    <ul>
                        <li>Asıl sorun erişim değil, alaka düzeyidir. Karar vericiler, yalnızca güvenilir buldukları şirketlerle bir araya gelir.</li>
                        <li>Satın alma yetkililerine doğrudan yapılan soğuk aramalar veya e-postalar, savunma sanayiinde neredeyse hiç sonuç vermez.</li>
                        <li>Güvenilir referanslar ve aracılar vasıtasıyla tanıştırılmak, kapıları açan en etkili yöntemdir.</li>
                        <li>Nüfuz sahibi tek bir yetkiliyle köklü bir güven ilişkisi kurmak, onlarca adrese soğuk e-posta göndermekten katbekat değerlidir.</li>
                    </ul>
                </div>

                <h2>Asıl Sorun</h2>
                <p>Yeni bir pazara giren her savunma şirketi aynı duvarla karşılaşır. Alıcının kim olduğunu biliyorsunuz. Neye ihtiyaçları olduğunu biliyorsunuz. Ürününüzün uygun olduğunu biliyorsunuz. Ama odaya giremiyorsunuz.</p>
                <p>Varsayım genellikle erişimin sorun olduğudur. Keşke bir toplantı alabilsek, işi kazanabilirdik. Bu yüzden şirketler her şeyi dener. Bakanlık kişilerine soğuk e-postalar. LinkedIn mesajları. Büyükelçilikler aracılığıyla talepler. Fuarlarda yaklaşımlar.</p>
                <p>Çoğu bir yere varmaz.</p>
                <p>Ama sorun gerçekte erişim değildir. Sorun ilgilikliktir. Satın alma yetkilileri sürekli toplantı yapar. Sadece zaten tanıdıkları veya güvendikleri kişilerin tavsiye ettiği şirketlerle yapar. Bilinmeyen bir kuruluş olarak gelip vakit istemek bir erişim sorunu değildir. Bir güvenilirlik sorunudur.</p>

                <div class="article-pullquote">
                    <p>"Savunma tedarikinde hiç kimse, sorunlarını çözebileceğini düşündüğü bir şirketi görmezden gelmez. Daha önce hiç duymadıkları, karşılığında bir şey sunmadan bir şey isteyen şirketleri görmezden gelirler."</p>
                </div>

                <div class="article-divider"></div>

                <h2>Gerçekte Ne İşe Yarıyor?</h2>
                <h3>Sıcak Tanıştırma</h3>
                <p>Bir satın alma yetkilisiyle toplantı almanın en etkili yolu, zaten güvendikleri biri aracılığıyladır. Mevcut ilişkisi olan yerel bir temsilci. Danışman olarak görev yapan emekli bir askeri yetkili. Güvenilir bir tavsiye yapabilecek başka bir bakanlıktan bir meslektaş.</p>

                <h3>Önce Değer Yaklaşımı</h3>
                <p>Toplantı istemek yerine, faydalı bir şey sunun. Sektör brifingleri. Pazar analizi. İlgili bir etkinliğe davet. Satış sunumu yerine değerle liderlik ettiğinizde, dinamik tamamen değişir.</p>

                <h3>Uzun Oyun</h3>
                <p>Bazı ilişkilerin kurulması yıllar alır. 2026'da bir konferansta kısaca tanıştığınız yetkili, 2028'de bir programın karar vericisi olabilir. Bu ilişkileri sabırla, ani getiri beklemeden sürdüren şirketler, doğru zamanda doğru konuşmalarda kendilerini bulanlar olur.</p>
            `
        }
    },
    'fn-deals-at-dinner': {
        en: {
            category: 'Field Notes',
            title: 'Why the Best Defense Deals Start at Dinner',
            desc: 'The formal procurement process determines who wins. But the relationships that shape those outcomes are built over meals, not in meeting rooms.',
            readTime: '5 min read',
            date: 'April 2026',
            thumbnail: 'thumbnails/fn-deals-at-dinner.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>Defense business development is fundamentally relationship-driven in most markets</li>
                        <li>The informal settings where trust is built are as important as the formal meetings where deals are discussed</li>
                        <li>Cultural fluency around dining, protocol, and hospitality is an underrated professional skill</li>
                        <li>The companies that invest in relationship infrastructure outperform those that focus only on proposals</li>
                    </ul>
                </div>

                <h2>The Unofficial Meeting</h2>
                <p>Here is something that everyone in defense business development knows but nobody puts in a strategy document. The most important conversations happen over dinner.</p>
                <p>Not every conversation. Not every deal. But the ones where trust gets built, where real concerns get aired, where someone tells you what they actually need instead of what the RFP says they need. Those conversations happen when people are relaxed. When the formal dynamics are set aside. When it is just two people talking honestly about a shared challenge.</p>

                <div class="article-pullquote">
                    <p>"You learn more about a market over three dinners than you do in thirty PowerPoint presentations. The formal meetings tell you what people are supposed to say. The informal ones tell you what they actually think."</p>
                </div>

                <h2>Why This Works</h2>
                <p>Defense procurement is a high-trust business. The products are expensive, the stakes are high, and the consequences of choosing the wrong partner are severe. In that environment, procurement officials are not just evaluating products. They are evaluating people.</p>
                <p>Can they trust you? Will you deliver what you promise? Will you still be responsive after the contract is signed? These are questions that cannot be answered by a proposal document. They get answered through repeated personal interaction over time.</p>
                <p>And personal interaction, real personal interaction, happens most naturally in informal settings. A dinner. A coffee meeting. A side conversation at a conference. These are not perks of the job. They are the job.</p>

                <div class="article-divider"></div>

                <h2>The Cultural Variable</h2>
                <p>This dynamic exists everywhere, but its intensity varies by culture. In some markets, the relationship dimension of defense business is so strong that no amount of technical superiority can compensate for weak personal connections. In others, the relationship matters but sits alongside a robust formal process that carries independent weight.</p>
                <p>Understanding where your target market falls on this spectrum is essential. Under-investing in relationships in a relationship-driven market is fatal. Over-investing in relationships in a process-driven market is wasteful.</p>
                <p>The skill is knowing which is which. And that knowledge only comes from being there.</p>
            `
        },
        tr: {
            category: 'Saha Notları',
            title: 'En İyi Savunma Anlaşmaları Neden Yemekte Başlar?',
            desc: 'Resmi tedarik süreci kazananı belirler. Ama bu sonuçları şekillendiren ilişkiler toplantı odalarında değil, yemek masalarında kurulur.',
            readTime: '5 dk okuma',
            date: 'Nisan 2026',
            thumbnail: 'thumbnails/fn-deals-at-dinner.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkan Noktalar</div>
                    <ul>
                        <li>Savunma iş geliştirme, çoğu pazarda temelde ilişki odaklıdır</li>
                        <li>Güvenin inşa edildiği gayri resmi ortamlar, anlaşmaların konuşulduğu resmi toplantılar kadar önemlidir</li>
                        <li>Yemek, protokol ve ev sahipliği konusunda kültürel akıcılık, hafife alınan profesyonel bir beceridir</li>
                        <li>İlişki altyapısına yatırım yapan şirketler, yalnızca tekliflere odaklananları geride bırakır</li>
                    </ul>
                </div>

                <h2>Resmi Olmayan Toplantı</h2>
                <p>Savunma iş geliştirmede herkesin bildiği ama kimsenin strateji belgesine yazmadığı bir şey var. En önemli konuşmalar yemekte gerçekleşir.</p>
                <p>Her konuşma değil. Her anlaşma değil. Ama güvenin kurulduğu, gerçek kaygıların dile getirildiği, birinin size RFP'nin söylediği yerine gerçekte neye ihtiyaç duyduğunu anlattığı konuşmalar. Bu konuşmalar insanlar rahatken olur. Resmi dinamikler kenara konduğunda. Sadece iki kişi ortak bir zorluk hakkında dürüstçe konuşurken.</p>

                <div class="article-pullquote">
                    <p>"Bir pazar hakkında üç yemekte, otuz PowerPoint sunumundan daha fazla şey öğrenirsiniz. Resmi toplantılar insanların ne söylemesi gerektiğini anlatır. Gayri resmi olanlar gerçekte ne düşündüklerini."</p>
                </div>

                <h2>Neden İşe Yarıyor?</h2>
                <p>Savunma tedariği yüksek güven gerektiren bir iştir. Ürünler pahalıdır, riskler yüksektir ve yanlış ortak seçmenin sonuçları ağırdır. Bu ortamda satın alma yetkilileri sadece ürünleri değerlendirmez. İnsanları değerlendirir.</p>
                <p>Size güvenebilirler mi? Söz verdiğinizi teslim edecek misiniz? Sözleşme imzalandıktan sonra hâlâ ulaşılabilir olacak mısınız? Bunlar bir teklif dokümanıyla yanıtlanamayacak sorulardır. Zaman içinde tekrarlanan kişisel etkileşimle yanıtlanırlar.</p>
                <p>Ve kişisel etkileşim, gerçek kişisel etkileşim, en doğal şekilde gayri resmi ortamlarda gerçekleşir. Bir yemek. Bir kahve buluşması. Bir konferansta yan konuşma. Bunlar işin yan faydaları değildir. İşin kendisidir.</p>

                <div class="article-divider"></div>

                <h2>Kültürel Değişken</h2>
                <p>Bu dinamik her yerde vardır, ama yoğunluğu kültüre göre değişir. Bazı pazarlarda savunma işinin ilişki boyutu o kadar güçlüdür ki, hiçbir teknik üstünlük zayıf kişisel bağlantıları telafi edemez. Diğerlerinde ilişki önemlidir ama bağımsız ağırlık taşıyan güçlü bir resmi sürecin yanında durur.</p>
                <p>Hedef pazarınızın bu yelpazede nereye düştüğünü anlamak hayatidir. İlişki odaklı bir pazarda ilişkilere az yatırım yapmak ölümcüldür. Süreç odaklı bir pazarda aşırı yatırım yapmak israftır.</p>
                <p>Beceri, hangisinin hangisi olduğunu bilmektir. Ve bu bilgi ancak orada olmaktan gelir.</p>
            `
        }
    },
    'fn-market-entry': {
        en: {
            category: 'Field Notes',
            title: 'Three Things Every Market Entry Team Gets Wrong the First Time',
            desc: 'After watching dozens of companies enter new defense markets, the pattern of first-time mistakes is remarkably consistent.',
            readTime: '6 min read',
            date: 'March 2026',
            thumbnail: 'thumbnails/fn-market-entry.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>Overestimating the speed of defense procurement is the number one mistake</li>
                        <li>Underestimating the importance of local presence is the number two mistake</li>
                        <li>Treating the region as a single market is the number three mistake</li>
                        <li>All three mistakes are preventable with better upfront intelligence and realistic expectations</li>
                    </ul>
                </div>

                <h2>Mistake 1: The Timeline Fantasy</h2>
                <p>Every company that enters a new defense market has a timeline. It usually looks something like this. Quarter one, establish presence. Quarter two, build pipeline. Quarter three, submit proposals. Quarter four, win contract.</p>
                <p>It almost never works like that.</p>
                <p>Defense procurement cycles are long. Not "a few months longer than commercial" long. Genuinely, structurally long. From initial engagement to signed contract, eighteen to thirty-six months is normal. For larger programs, it can be longer.</p>
                <p>Companies that plan for a twelve-month return on their market entry investment are setting themselves up for frustration. The ones that plan for thirty-six months and structure their resources accordingly are the ones that are still in the market five years later, winning business.</p>

                <div class="article-pullquote">
                    <p>"The single most common reason companies abandon a promising defense market is unrealistic timeline expectations. They quit at month fourteen, right before things were about to start moving."</p>
                </div>

                <h2>Mistake 2: The Remote Management Illusion</h2>
                <p>It is tempting to believe you can manage a new market remotely. Fly in for trade shows. Have a local contact who checks in periodically. Run the business development from headquarters.</p>
                <p>In commercial markets, remote management can work. In defense, it almost never does. The relationship intensity, the institutional complexity, and the need for real-time local intelligence make physical presence not just helpful but essential.</p>
                <p>This does not mean you need a full office on day one. But it means someone needs to be on the ground regularly enough to build real relationships, understand the real dynamics, and respond to opportunities in real time.</p>

                <div class="article-divider"></div>

                <h2>Mistake 3: The Single-Market Assumption</h2>
                <p>A region is not a market. It is a collection of distinct markets that happen to share a geographic area. Each country has its own defense ministry, its own procurement rules, its own budget cycle, its own political dynamics, and its own competitive landscape.</p>
                <p>Companies that develop a "regional strategy" without differentiating between individual country dynamics inevitably allocate resources incorrectly. They invest heavily in a market that is not yet ready while ignoring one that is actively buying. Or they apply a strategy that worked in one country to a neighbor where the dynamics are completely different.</p>
                <p>The fix is straightforward but requires discipline. Treat each country as its own market. Assess each one independently. And allocate resources based on where the real opportunity is, not where the map suggests it should be.</p>
            `
        },
        tr: {
            category: 'Saha Notları',
            title: 'Her Pazara Giriş Ekibinin İlk Seferinde Yaptığı Üç Hata',
            desc: 'Düzinelerce şirketin yeni savunma pazarlarına girişini izledikten sonra, ilk kez yapılan hataların örüntüsü dikkat çekici biçimde tutarlıdır.',
            readTime: '6 dk okuma',
            date: 'Mart 2026',
            thumbnail: 'thumbnails/fn-market-entry.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkan Noktalar</div>
                    <ul>
                        <li>Savunma tedarik hızını aşırı tahmin etmek bir numaralı hatadır</li>
                        <li>Yerel varlığın önemini hafife almak iki numaralı hatadır</li>
                        <li>Bölgeyi tek bir pazar olarak görmek üç numaralı hatadır</li>
                        <li>Üç hatanın tamamı, daha iyi bir ön araştırma ve gerçekçi beklentilerle önlenebilir</li>
                    </ul>
                </div>

                <h2>Hata 1: Zaman Çizelgesi Hayali</h2>
                <p>Yeni bir savunma pazarına giren her şirketin bir zaman çizelgesi vardır. Genellikle şöyle görünür. Birinci çeyrek, varlık oluştur. İkinci çeyrek, pipeline kur. Üçüncü çeyrek, teklif sun. Dördüncü çeyrek, sözleşme kazan.</p>
                <p>Neredeyse hiçbir zaman böyle işlemez.</p>
                <p>Savunma tedarik döngüleri uzundur. "Ticariden birkaç ay daha uzun" anlamında değil. Gerçekten, yapısal olarak uzun. İlk temastan imzalanmış sözleşmeye, on sekiz-otuz altı ay normaldir. Daha büyük programlar için daha uzun olabilir.</p>
                <p>Pazar girişi yatırımlarından on iki ayda geri dönüş planlayan şirketler, hayal kırıklığına hazırlanıyor. Otuz altı ay planlayan ve kaynaklarını buna göre yapılandıranlar ise beş yıl sonra hâlâ pazarda olan ve iş kazananlardır.</p>

                <div class="article-pullquote">
                    <p>"Şirketlerin umut vadeden bir savunma pazarını terk etmesinin en yaygın nedeni, gerçekçi olmayan süre beklentileridir. On dördüncü ayda bırakırlar, tam işlerin hareket etmeye başlayacağı noktada."</p>
                </div>

                <h2>Hata 2: Uzaktan Yönetim İllüzyonu</h2>
                <p>Yeni bir pazarı uzaktan yönetebileceğinize inanmak cazip. Fuarlar için uçun. Periyodik kontrol eden yerel bir bağlantınız olsun. İş geliştirmeyi merkezden yürütün.</p>
                <p>Ticari pazarlarda uzaktan yönetim işe yarayabilir. Savunmada neredeyse hiçbir zaman yaramaz. İlişki yoğunluğu, kurumsal karmaşıklık ve anlık yerel bilgilere duyulan ihtiyaç, fiziksel varlığı sadece yararlı değil, zorunlu kılar.</p>
                <p>Bu, birinci günden tam bir ofise ihtiyacınız olduğu anlamına gelmiyor. Ama birinin gerçek ilişkiler kurmak, gerçek dinamikleri anlamak ve fırsatlara anlık yanıt vermek için yeterince düzenli olarak sahada olması gerektiği anlamına geliyor.</p>

                <div class="article-divider"></div>

                <h2>Hata 3: Tek Pazar Varsayımı</h2>
                <p>Bir bölge bir pazar değildir. Aynı coğrafi alanı paylaşan farklı pazarların toplamıdır. Her ülkenin kendi savunma bakanlığı, kendi tedarik kuralları, kendi bütçe döngüsü, kendi siyasi dinamikleri ve kendi rekabet ortamı vardır.</p>
                <p>Ülke dinamiklerini birbirinden ayırmadan "bölgesel strateji" geliştiren şirketler, kaçınılmaz olarak kaynakları yanlış dağıtır. Henüz hazır olmayan bir pazara ağır yatırım yaparken, aktif olarak alım yapan bir pazarı görmezden gelirler. Ya da bir ülkede işe yarayan stratejiyi, dinamiklerin tamamen farklı olduğu komşuya uygularlar.</p>
                <p>Çözüm basit ama disiplin gerektirir. Her ülkeyi kendi pazarı olarak görün. Her birini bağımsız olarak değerlendirin. Ve kaynakları, gerçek fırsatın nerede olduğuna göre dağıtın, haritanın önerdiği yere göre değil.</p>
            `
        }
    }
};

// ============================================
// MAIN PAGE INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Accordion Elements
    const accordion = document.getElementById('servicesAccordion');
    const accordionItems = accordion.querySelectorAll('.accordion-item');

    // Language Selector Elements
    const langButtons = document.querySelectorAll('.lang-btn');
    const taglineTexts = document.querySelectorAll('.tagline-text');
    let currentLang = 'en';

    // UI Translation Strings for Resources and Articles
    const uiTranslations = {
        en: {
            readMore: "Read more",
            moreArticles: "More Articles",
            share: "Share",
            copied: "Copied!",
            resources: "Resources",
            guneryResources: "Gunery Resources"
        },
        tr: {
            readMore: "Devamını oku",
            moreArticles: "Diğer Makaleler",
            share: "Paylaş",
            copied: "Kopyalandı!",
            resources: "Kaynaklar",
            guneryResources: "Gunery Kaynaklar"
        },
        es: {
            readMore: "Leer más",
            moreArticles: "Más Artículos",
            share: "Compartir",
            copied: "¡Copiado!",
            resources: "Recursos",
            guneryResources: "Recursos de Gunery"
        }
    };

    // Helper to get translated article content
    function getArticle(slug) {
        const entry = articleContent[slug];
        if (!entry) return null;
        return entry[currentLang] || entry.en || entry;
    }

    // Navigation and Mega Menu Elements
    const navItems = document.querySelectorAll('.nav-item');
    const megaMenu = document.getElementById('megaMenu');
    const megaLeft = document.getElementById('megaLeft');
    const megaRight = document.getElementById('megaRight');

    let activeMenu = null;
    let menuTimeout = null;

    // --------------------------------------------
    // ACCORDION LOGIC
    // --------------------------------------------
    accordionItems.forEach((item) => {
        const trigger = item.querySelector('.accordion-trigger');
        const panel = item.querySelector('.accordion-panel');

        trigger.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all panels
            accordionItems.forEach((otherItem) => {
                const otherPanel = otherItem.querySelector('.accordion-panel');
                const otherTrigger = otherItem.querySelector('.accordion-trigger');
                otherItem.classList.remove('active');
                otherPanel.style.maxHeight = null;
                otherTrigger.setAttribute('aria-expanded', 'false');
            });

            // Open clicked panel if it wasn't already open
            if (!isActive) {
                item.classList.add('active');
                panel.style.maxHeight = panel.scrollHeight + 'px';
                trigger.setAttribute('aria-expanded', 'true');
                accordion.classList.add('has-active');
            } else {
                accordion.classList.remove('has-active');
            }
        });
    });

    // --------------------------------------------
    // MEGA MENU RENDERING & LOGIC
    // --------------------------------------------

    const contactTranslations = {
        en: {
            directMessage: "Direct Message",
            reachOut: "Reach out to us",
            connectDesc: "Connect with our team for business representation or partner inquiries.",
            locations: "Locations",
            locationsDesc: "We are a global always-on team based in Bogotá and Medellín in Colombia, and Ankara and Istanbul in Türkiye.",
            namePlaceholder: "Name",
            surnamePlaceholder: "Surname",
            companyPlaceholder: "Company",
            emailPlaceholder: "Company Email",
            messagePlaceholder: "Message",
            sendBtn: "Send Message",
            sendingBtn: "Sending...",
            sentBtn: "Message Sent",
            successTitle: "Thank you!",
            successDesc: "Your message has been sent. Our team will get back to you shortly."
        },
        tr: {
            directMessage: "Doğrudan Mesaj",
            reachOut: "Bize ulaşın",
            connectDesc: "İş ortaklığı ve temsilcilik talepleriniz için ekibimizle iletişime geçin.",
            locations: "Ofisler",
            locationsDesc: "Kolombiya'da Bogota ve Medellin, Türkiye'de Ankara ve İstanbul merkezli, küresel ve her zaman hareket halinde olan bir ekibiz.",
            namePlaceholder: "Ad",
            surnamePlaceholder: "Soyad",
            companyPlaceholder: "Şirket",
            emailPlaceholder: "Şirket E-postası",
            messagePlaceholder: "Mesaj",
            sendBtn: "Mesajı Gönder",
            sendingBtn: "Gönderiliyor...",
            sentBtn: "Mesaj Gönderildi",
            successTitle: "Teşekkürler!",
            successDesc: "Mesajınız iletildi. Ekibimiz en kısa sürede sizinle iletişime geçecektir."
        },
        es: {
            directMessage: "Mensaje Directo",
            reachOut: "Contáctenos",
            connectDesc: "Conéctese con nuestro equipo para representación comercial o consultas de socios.",
            locations: "Ubicaciones",
            locationsDesc: "Somos un equipo global siempre en movimiento con sede en Bogotá y Medellín en Colombia, y Ankara y Estambul en Turquía.",
            namePlaceholder: "Nombre",
            surnamePlaceholder: "Apellido",
            companyPlaceholder: "Empresa",
            emailPlaceholder: "Correo de la Empresa",
            messagePlaceholder: "Mensaje",
            sendBtn: "Enviar Mensaje",
            sendingBtn: "Enviando...",
            sentBtn: "Mensaje Enviado",
            successTitle: "¡Gracias!",
            successDesc: "Su mensaje ha sido enviado. Nuestro equipo se pondrá en contacto con usted en breve."
        }
    };

    function validateEmailField(input) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value.trim())) {
            input.classList.add('invalid');
            return false;
        } else {
            input.classList.remove('invalid');
            return true;
        }
    }

    function handleContactSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const nameInput = form.querySelector('[name="name"]');
        const surnameInput = form.querySelector('[name="surname"]');
        const emailInput = form.querySelector('[name="email"]');
        const messageInput = form.querySelector('[name="message"]');
        const submitBtn = form.querySelector('button[type="submit"]');
        const successPanel = form.nextElementSibling;
        
        let isValid = true;
        
        [nameInput, surnameInput, messageInput].forEach(input => {
            if (!input) return;
            if (input.value.trim() === '') {
                input.classList.add('invalid');
                isValid = false;
            } else {
                input.classList.remove('invalid');
            }
        });
        
        if (emailInput) {
            if (emailInput.value.trim() === '') {
                emailInput.classList.add('invalid');
                isValid = false;
            } else {
                if (!validateEmailField(emailInput)) {
                    isValid = false;
                }
            }
        }
        
        if (!isValid) {
            form.classList.add('shake');
            setTimeout(() => {
                form.classList.remove('shake');
            }, 500);
            return;
        }
        
        const t = contactTranslations[currentLang] || contactTranslations['en'];
        submitBtn.disabled = true;
        submitBtn.classList.add('sending');
        submitBtn.querySelector('.btn-text').textContent = t.sendingBtn;
        
        const formData = new FormData(form);
        formData.append('form-name', 'contact');
        
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            submitBtn.classList.remove('sending');
            submitBtn.classList.add('success');
            submitBtn.querySelector('.btn-text').textContent = t.sentBtn;
            
            form.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            form.style.opacity = '0';
            form.style.transform = 'translateY(-10px)';
            form.style.pointerEvents = 'none';
            
            setTimeout(() => {
                form.style.display = 'none';
                successPanel.style.display = 'flex';
                successPanel.style.opacity = '0';
                successPanel.style.transform = 'translateY(10px)';
                
                successPanel.offsetHeight; // reflow
                
                successPanel.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                successPanel.style.opacity = '1';
                successPanel.style.transform = 'translateY(0)';
            }, 400);
        })
        .catch(error => {
            console.error('Error submitting to Netlify Forms:', error);
            submitBtn.disabled = false;
            submitBtn.classList.remove('sending');
            submitBtn.querySelector('.btn-text').textContent = t.sendBtn;
            let errMsg = 'Failed to send message. Please try again.';
            if (currentLang === 'tr') {
                errMsg = 'Mesaj gönderilemedi, lütfen tekrar deneyin.';
            } else if (currentLang === 'es') {
                errMsg = 'No se pudo enviar el mensaje, por favor intente nuevamente.';
            }
            alert(errMsg);
        });
    }

    function renderContactMenu(lang) {
        const t = contactTranslations[lang] || contactTranslations['en'];
        
        // Render Left Column (Contact Info Panel)
        megaLeft.innerHTML = `
            <div class="contact-info-panel">
                <div class="contact-info-section">
                    <div class="contact-info-label">${t.directMessage}</div>
                    <h2 class="contact-info-title">${t.reachOut}</h2>
                    <p class="contact-info-desc">${t.connectDesc}</p>
                </div>
                <div class="contact-info-section">
                    <div class="contact-info-label">${t.locations}</div>
                    <p class="contact-info-desc locations-text">${t.locationsDesc}</p>
                </div>
            </div>
        `;

        // Check if form already exists to avoid resetting user input
        let contactForm = megaRight.querySelector('#contact-form');
        if (contactForm) {
            const successPanel = megaRight.querySelector('.contact-success-panel');
            if (successPanel && successPanel.style.display === 'flex') {
                // Reset the form if it was submitted previously
                contactForm.reset();
                contactForm.style.display = 'block';
                contactForm.style.opacity = '1';
                contactForm.style.transform = 'none';
                contactForm.style.pointerEvents = 'auto';
                successPanel.style.display = 'none';
                
                const submitBtn = contactForm.querySelector('#contact-submit-btn');
                submitBtn.disabled = false;
                submitBtn.classList.remove('success', 'sending');
                submitBtn.querySelector('.btn-text').textContent = t.sendBtn;
                
                contactForm.querySelectorAll('.invalid').forEach(input => input.classList.remove('invalid'));
                contactForm.querySelectorAll('.has-value').forEach(input => input.classList.remove('has-value'));
            } else {
                // Just update texts
                megaRight.querySelector('#label-name').textContent = t.namePlaceholder;
                megaRight.querySelector('#label-surname').textContent = t.surnamePlaceholder;
                megaRight.querySelector('#label-company').textContent = t.companyPlaceholder;
                megaRight.querySelector('#label-email').textContent = t.emailPlaceholder;
                megaRight.querySelector('#label-message').textContent = t.messagePlaceholder;
                
                const submitBtn = megaRight.querySelector('#contact-submit-btn');
                if (submitBtn) {
                    const btnText = submitBtn.querySelector('.btn-text');
                    if (submitBtn.classList.contains('sending')) {
                        btnText.textContent = t.sendingBtn;
                    } else if (submitBtn.classList.contains('success')) {
                        btnText.textContent = t.sentBtn;
                    } else {
                        btnText.textContent = t.sendBtn;
                    }
                }
                return;
            }
        }

        // Render Right Column (Contact Form Structure)
        megaRight.innerHTML = `
            <div class="contact-form-container">
                <form id="contact-form" novalidate>
                    <div class="contact-form-grid">
                        <div class="form-group">
                            <input type="text" id="contact-name" name="name" required placeholder=" ">
                            <label for="contact-name" id="label-name">${t.namePlaceholder}</label>
                        </div>
                        <div class="form-group">
                            <input type="text" id="contact-surname" name="surname" required placeholder=" ">
                            <label for="contact-surname" id="label-surname">${t.surnamePlaceholder}</label>
                        </div>
                        <div class="form-group">
                            <input type="text" id="contact-company" name="company" placeholder=" ">
                            <label for="contact-company" id="label-company">${t.companyPlaceholder}</label>
                        </div>
                        <div class="form-group">
                            <input type="email" id="contact-email" name="email" required placeholder=" ">
                            <label for="contact-email" id="label-email">${t.emailPlaceholder}</label>
                        </div>
                    </div>
                    <div class="form-group textarea-group">
                        <textarea id="contact-message" name="message" required placeholder=" "></textarea>
                        <label for="contact-message" id="label-message">${t.messagePlaceholder}</label>
                    </div>
                    <button type="submit" id="contact-submit-btn" class="contact-btn">
                        <span class="btn-text">${t.sendBtn}</span>
                        <span class="btn-icon">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" stroke-width="1.2"/>
                            </svg>
                        </span>
                    </button>
                </form>
                <div class="contact-success-panel" style="display: none;">
                    <div class="success-icon-container">
                        <div class="success-glow"></div>
                        <svg class="success-checkmark" viewBox="0 0 52 52">
                            <circle class="success-checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                            <path class="success-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                        </svg>
                    </div>
                    <h3 class="success-title">${t.successTitle}</h3>
                    <p class="success-desc">${t.successDesc}</p>
                </div>
            </div>
        `;

        const form = megaRight.querySelector('#contact-form');
        form.addEventListener('submit', handleContactSubmit);

        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            // Helper to set label classes on load/change
            const checkValue = () => {
                if (input.value.trim() !== '') {
                    input.classList.add('has-value');
                } else {
                    input.classList.remove('has-value');
                }
            };
            input.addEventListener('blur', () => {
                checkValue();
                if (input.type === 'email' && input.value.trim() !== '') {
                    validateEmailField(input);
                }
            });
            input.addEventListener('input', () => {
                input.classList.remove('invalid');
            });
        });
    }

    function renderMegaMenu(menuType, lang) {
        if (menuType === 'contact') {
            megaMenu.classList.add('contact-mode');
            renderContactMenu(lang);
            return;
        }
        megaMenu.classList.remove('contact-mode');

        const data = menuData[menuType][lang];
        if (!data) return;

        // Render Left list
        megaLeft.innerHTML = '';
        data.forEach((group, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = `mega-item ${index === 0 ? 'active' : ''}`;
            itemElement.setAttribute('data-id', group.id);
            itemElement.innerHTML = `
                <div class="mega-item-title">${group.title}</div>
                <div class="mega-item-sub">${group.subtitle}</div>
                <div class="mega-item-desc">${group.desc}</div>
            `;
            
            // Hover left item changes right side content
            itemElement.addEventListener('mouseenter', () => {
                megaLeft.querySelectorAll('.mega-item').forEach(el => el.classList.remove('active'));
                itemElement.classList.add('active');
                renderMegaCards(group.cards, activeMenu === 'resources');
            });

            megaLeft.appendChild(itemElement);
        });

        // Render Right cards for the first item by default
        renderMegaCards(data[0].cards, menuType === 'resources');
    }

    function renderMegaCards(cards, isResource) {
        megaRight.innerHTML = '';
        cards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'mega-card' + (isResource && card.slug ? ' clickable' : '');

            if (isResource && card.slug) {
                // Get article data for preview
                const article = getArticle(card.slug);
                const excerpt = article ? article.desc : card.desc;
                const category = article ? article.category : 'Resource';
                const readTime = article ? article.readTime : '';
                const thumbnail = article ? article.thumbnail : '';

                cardElement.innerHTML = `
                    <div class="mega-card-preview">
                        <div class="mega-card-thumb" data-gradient="${index % 4}">
                            ${thumbnail ? `<img class="mega-card-thumb-img" src="${thumbnail}" alt="${card.title}" />` : ''}
                            <div class="mega-card-thumb-gradient"></div>
                            <div class="mega-card-thumb-pattern"></div>
                            <div class="mega-card-thumb-glow"></div>
                            <span class="mega-card-thumb-label">${category} · ${readTime}</span>
                        </div>
                        <div class="mega-card-preview-body">
                            <div class="mega-card-preview-title">${card.title}</div>
                            <div class="mega-card-preview-excerpt">${excerpt}</div>
                            <div class="mega-card-preview-cta">
                                ${uiTranslations[currentLang].readMore}
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" stroke-width="1.2"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="mega-card-front">
                        <div class="mega-card-icon">
                            <span></span><span></span><span></span>
                            <span></span><span></span><span></span>
                            <span></span><span></span><span></span>
                        </div>
                        <div class="mega-card-info">
                            <div class="mega-card-title">${card.title}</div>
                            <div class="mega-card-desc">${card.desc}</div>
                        </div>
                    </div>
                `;
            } else {
                cardElement.innerHTML = `
                    <div class="mega-card-icon">
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                    </div>
                    <div class="mega-card-info">
                        <div class="mega-card-title">${card.title}</div>
                        <div class="mega-card-desc">${card.desc}</div>
                    </div>
                `;
            }

            if (isResource && card.slug) {
                cardElement.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openArticle(card.slug);
                });
            }
            megaRight.appendChild(cardElement);
        });
    }

    // Show menu dropdown
    function showMenu(menuType) {
        if (menuTimeout) clearTimeout(menuTimeout);
        activeMenu = menuType;

        // Mark active navigation item
        navItems.forEach(item => {
            if (item.getAttribute('data-menu') === menuType) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Render content
        renderMegaMenu(menuType, currentLang);

        // Dynamically align mega menu bottom edge with services accordion bottom edge
        const accordion = document.getElementById('servicesAccordion');
        if (accordion && window.innerWidth > 768) {
            const accordionRect = accordion.getBoundingClientRect();
            // 76px is the absolute top offset of the mega menu
            const calculatedHeight = Math.round(accordionRect.bottom - 76);
            // Cap at a minimum of 450px to ensure card content readability on short screens
            const finalHeight = Math.max(450, calculatedHeight);
            
            megaMenu.style.height = finalHeight + 'px';
            megaMenu.style.maxHeight = finalHeight + 'px';
        } else {
            megaMenu.style.height = '';
            megaMenu.style.maxHeight = '';
        }

        megaMenu.classList.add('active');
    }

    // Hide menu dropdown
    function hideMenu() {
        if (menuTimeout) clearTimeout(menuTimeout);
        menuTimeout = setTimeout(() => {
            megaMenu.classList.remove('active');
            megaMenu.style.maxHeight = '0px'; // Force height animation slide closed
            navItems.forEach(item => item.classList.remove('active'));
            activeMenu = null;
        }, 200);
    }

    // Event listeners for main navigation buttons
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const menuType = item.getAttribute('data-menu');
            showMenu(menuType);
        });
        item.addEventListener('mouseleave', hideMenu);
    });

    // Event listeners to keep mega menu open while hovering it
    megaMenu.addEventListener('mouseenter', () => {
        if (menuTimeout) clearTimeout(menuTimeout);
    });
    megaMenu.addEventListener('mouseleave', hideMenu);


    // --------------------------------------------
    // LANGUAGE SWITCHER LOGIC
    // --------------------------------------------
    function switchLanguage(lang) {
        currentLang = lang;

        // 1. Update main nav items translations
        navItems.forEach(item => {
            const keyText = item.getAttribute(`data-${lang}`);
            if (keyText) item.textContent = keyText;
        });

        // 2. Update tagline visibility
        taglineTexts.forEach(tagline => {
            if (tagline.getAttribute('data-lang') === lang) {
                tagline.style.display = 'block';
            } else {
                tagline.style.display = 'none';
            }
        });

        // 3. Translate accordion elements using data attributes
        const translatableElements = accordion.querySelectorAll('[data-en], [data-tr], [data-es]');
        translatableElements.forEach(element => {
            const newText = element.getAttribute(`data-${lang}`);
            if (newText) {
                element.innerHTML = newText;
            }
        });

        // 4. Recalculate open accordion height
        const activeItem = accordion.querySelector('.accordion-item.active');
        if (activeItem) {
            const panel = activeItem.querySelector('.accordion-panel');
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }

        // 5. If mega menu is open, re-render it in target language
        if (activeMenu) {
            renderMegaMenu(activeMenu, currentLang);
        }

        // 6. If mobile drawer is active, re-render it in target language
        if (mobileDrawer && mobileDrawer.classList.contains('active')) {
            renderMobileDrawer(currentLang);
        }
    }

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetLang = button.getAttribute('data-lang');
            if (targetLang === currentLang) return;

            // Update switcher UI state
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update URL search parameter for shareability (e.g. on WhatsApp)
            const url = new URL(window.location.href);
            url.searchParams.set('lang', targetLang);
            window.history.replaceState(null, '', url.pathname + url.search + url.hash);

            switchLanguage(targetLang);
        });
    });

    // --------------------------------------------
    // PARALLAX BACKGROUND EFFECT
    // --------------------------------------------
    const videoEl = document.getElementById('bgVideo');
    let rafId = null;

    document.addEventListener('mousemove', (e) => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
            const xPercent = (e.clientX / window.innerWidth - 0.5) * 2;
            const yPercent = (e.clientY / window.innerHeight - 0.5) * 2;
            const moveX = xPercent * 4;
            const moveY = yPercent * 4;
            videoEl.style.transform = `scale(1.05) translate(${moveX}px, ${moveY}px)`;
        });
    });

    // --------------------------------------------
    // ARTICLE MODAL SYSTEM
    // --------------------------------------------
    const articleOverlay = document.getElementById('articleOverlay');
    const articleClose = document.getElementById('articleClose');
    const articleScroll = document.getElementById('articleScroll');
    const articleContainer = document.getElementById('articleContainer');
    const articleProgressBar = document.getElementById('articleProgressBar');

    // Helper: get related articles for sidebar
    function getRelatedArticles(currentSlug) {
        const current = getArticle(currentSlug);
        if (!current) return [];

        const related = [];
        const allSlugs = Object.keys(articleContent);

        // Same category first
        allSlugs.forEach(slug => {
            const art = getArticle(slug);
            if (art && slug !== currentSlug && art.category === current.category) {
                related.push({ slug, ...art });
            }
        });

        // Then other categories (pick 2-3 from each)
        const otherCategories = {};
        allSlugs.forEach(slug => {
            const art = getArticle(slug);
            if (art && slug !== currentSlug && art.category !== current.category) {
                if (!otherCategories[art.category]) otherCategories[art.category] = [];
                if (otherCategories[art.category].length < 2) {
                    otherCategories[art.category].push({ slug, ...art });
                }
            }
        });

        return { sameCategory: related, otherCategories };
    }

    function openArticle(slug) {
        const content = getArticle(slug);
        if (!content) return;

        // Set hash for shareable URL
        history.pushState(null, '', `#/resources/${slug}`);

        // Close mega menu
        megaMenu.classList.remove('active');
        navItems.forEach(item => item.classList.remove('active'));
        activeMenu = null;

        // Get related articles for sidebar
        const related = getRelatedArticles(slug);

        // Build sidebar HTML
        let sidebarHTML = '';

        // Same category section
        if (related.sameCategory && related.sameCategory.length > 0) {
            sidebarHTML += `
                <div class="article-sidebar-section">
                    <div class="article-sidebar-label">${content.category}</div>
                    ${related.sameCategory.map(r => `
                        <a class="article-sidebar-item" href="#" data-slug="${r.slug}">
                            <img class="article-sidebar-item-thumb" src="${r.thumbnail}" alt="${r.title}">
                            <div class="article-sidebar-item-info">
                                <span class="article-sidebar-item-title">${r.title}</span>
                                <span class="article-sidebar-item-time">${r.readTime}</span>
                            </div>
                        </a>
                    `).join('')}
                </div>
            `;
        }

        // Other categories
        if (related.otherCategories) {
            Object.keys(related.otherCategories).forEach(cat => {
                const items = related.otherCategories[cat];
                if (items.length > 0) {
                    sidebarHTML += `
                        <div class="article-sidebar-section">
                            <div class="article-sidebar-label">${cat}</div>
                            ${items.map(r => `
                                <a class="article-sidebar-item" href="#" data-slug="${r.slug}">
                                    <img class="article-sidebar-item-thumb" src="${r.thumbnail}" alt="${r.title}">
                                    <div class="article-sidebar-item-info">
                                        <span class="article-sidebar-item-title">${r.title}</span>
                                        <span class="article-sidebar-item-time">${r.readTime}</span>
                                    </div>
                                </a>
                            `).join('')}
                        </div>
                    `;
                }
            });
        }

        // Build article HTML with banner and sidebar
        articleContainer.innerHTML = `
            <div class="article-banner" style="background-image: url('${content.thumbnail}');">
                <div class="article-banner-fade"></div>
                <div class="article-banner-content">
                    <div class="article-breadcrumb">
                        ${uiTranslations[currentLang].resources} <span>&#8594;</span> <span>${content.category}</span>
                    </div>
                    <div class="article-category">${content.category}</div>
                </div>
            </div>
            <div class="article-layout">
                <div class="article-main">
                    <header class="article-hero">
                        <h1>${content.title}</h1>
                        <p class="article-hero-desc">${content.desc}</p>
                        <div class="article-meta">
                            <div class="article-meta-item">
                                <svg class="article-meta-icon" viewBox="0 0 16 16" fill="none">
                                    <rect x="2" y="2" width="12" height="12" rx="2" stroke="white" stroke-width="1"/>
                                    <line x1="2" y1="6" x2="14" y2="6" stroke="white" stroke-width="1"/>
                                    <line x1="6" y1="2" x2="6" y2="6" stroke="white" stroke-width="1"/>
                                </svg>
                                ${content.date}
                            </div>
                            <div class="article-meta-item">
                                <svg class="article-meta-icon" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="6" stroke="white" stroke-width="1"/>
                                    <line x1="8" y1="4" x2="8" y2="8" stroke="white" stroke-width="1"/>
                                    <line x1="8" y1="8" x2="11" y2="10" stroke="white" stroke-width="1"/>
                                </svg>
                                ${content.readTime}
                            </div>
                            <button class="article-share-btn" id="articleShareBtn">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M4.5 6.5L9.5 3.5M4.5 7.5L9.5 10.5M5 7A1.5 1.5 0 1 1 2 7a1.5 1.5 0 0 1 3 0zM12 3A1.5 1.5 0 1 1 9 3a1.5 1.5 0 0 1 3 0zM12 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" stroke="currentColor" stroke-width="1"/>
                                </svg>
                                ${uiTranslations[currentLang].share}
                            </button>
                        </div>
                    </header>
                    <div class="article-body">
                        ${content.body}
                    </div>
                    <footer class="article-footer">
                        <span class="article-footer-label">${uiTranslations[currentLang].guneryResources}</span>
                        <img src="Gunery Type Logo - White.png" alt="Gunery" class="article-footer-logo">
                    </footer>
                </div>
                <aside class="article-sidebar">
                    <div class="article-sidebar-header">${uiTranslations[currentLang].moreArticles}</div>
                    ${sidebarHTML}
                </aside>
            </div>
        `;

        // Reset scroll and show overlay
        articleScroll.scrollTop = 0;
        articleProgressBar.style.width = '0%';
        articleOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Bind sidebar navigation
        articleContainer.querySelectorAll('.article-sidebar-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSlug = item.getAttribute('data-slug');
                if (targetSlug && getArticle(targetSlug)) {
                    articleScroll.scrollTop = 0;
                    openArticle(targetSlug);
                }
            });
        });

        // Bind share button
        const shareBtn = document.getElementById('articleShareBtn');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                const url = window.location.href;
                navigator.clipboard.writeText(url).then(() => {
                    shareBtn.classList.add('copied');
                    shareBtn.innerHTML = `
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M3 7L6 10L11 4" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                        ${uiTranslations[currentLang].copied}
                    `;
                    setTimeout(() => {
                        shareBtn.classList.remove('copied');
                        shareBtn.innerHTML = `
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M4.5 6.5L9.5 3.5M4.5 7.5L9.5 10.5M5 7A1.5 1.5 0 1 1 2 7a1.5 1.5 0 0 1 3 0zM12 3A1.5 1.5 0 1 1 9 3a1.5 1.5 0 0 1 3 0zM12 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" stroke="currentColor" stroke-width="1"/>
                            </svg>
                            ${uiTranslations[currentLang].share}
                        `;
                    }, 2000);
                });
            });
        }
    }

    function closeArticle() {
        articleOverlay.classList.remove('active');
        document.body.style.overflow = '';
        articleProgressBar.style.width = '0%';

        // Clear hash
        history.pushState(null, '', window.location.pathname);
    }

    // Close button
    articleClose.addEventListener('click', closeArticle);

    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && articleOverlay.classList.contains('active')) {
            closeArticle();
        }
    });

    // Click outside article
    articleOverlay.addEventListener('click', (e) => {
        if (e.target === articleOverlay || e.target === articleScroll) {
            closeArticle();
        }
    });

    // Reading progress bar
    articleScroll.addEventListener('scroll', () => {
        const scrollTop = articleScroll.scrollTop;
        const scrollHeight = articleScroll.scrollHeight - articleScroll.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        articleProgressBar.style.width = progress + '%';
    });

    // --------------------------------------------
    // HASH-BASED ROUTING (Shareable URLs)
    // --------------------------------------------
    function handleHash() {
        const hash = window.location.hash;
        const match = hash.match(/^#\/resources\/(.+)$/);
        if (match) {
            const slug = match[1];
            if (getArticle(slug)) {
                openArticle(slug);
            }
        }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHash);

    // Check hash on page load
    handleHash();

    // Dynamically update mega menu height on window resize if open
    window.addEventListener('resize', () => {
        if (activeMenu) {
            const accordion = document.getElementById('servicesAccordion');
            if (accordion && window.innerWidth > 768) {
                const accordionRect = accordion.getBoundingClientRect();
                const calculatedHeight = Math.round(accordionRect.bottom - 76);
                const finalHeight = Math.max(450, calculatedHeight);
                megaMenu.style.height = finalHeight + 'px';
                megaMenu.style.maxHeight = finalHeight + 'px';
            } else {
                megaMenu.style.height = '';
                megaMenu.style.maxHeight = '';
            }
        }
    });

    // ============================================
    // MOBILE DRAWER LOGIC & DYNAMIC ACCORDIONS
    // ============================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerNav = document.getElementById('drawerNav');
    const drawerLangSwitcher = document.getElementById('drawerLangSwitcher');

    if (mobileMenuToggle && mobileDrawer) {
        mobileMenuToggle.addEventListener('click', () => {
            const isActive = mobileDrawer.classList.contains('active');
            if (isActive) {
                closeMobileDrawer();
            } else {
                openMobileDrawer();
            }
        });
    }

    function openMobileDrawer() {
        mobileMenuToggle.classList.add('active');
        mobileDrawer.classList.add('active');
        document.body.classList.add('scroll-locked');
        renderMobileDrawer(currentLang);
    }

    function closeMobileDrawer() {
        mobileMenuToggle.classList.remove('active');
        mobileDrawer.classList.remove('active');
        document.body.classList.remove('scroll-locked');
    }

    function renderMobileDrawer(lang) {
        if (!drawerNav || !drawerLangSwitcher) return;

        // 1. Language switcher inside drawer
        let langButtonsHTML = '';
        const headerLangBtns = document.querySelectorAll('.header .lang-btn');
        headerLangBtns.forEach((btn, idx) => {
            const btnLang = btn.getAttribute('data-lang');
            const isActive = btnLang === lang ? 'active' : '';
            langButtonsHTML += `<button class="drawer-lang-btn ${isActive}" data-lang="${btnLang}">${btnLang.toUpperCase()}</button>`;
            if (idx < headerLangBtns.length - 1) {
                langButtonsHTML += `<span class="drawer-lang-sep">—</span>`;
            }
        });
        drawerLangSwitcher.innerHTML = langButtonsHTML;

        // Bind clicks for drawer language buttons
        drawerLangSwitcher.querySelectorAll('.drawer-lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetLang = btn.getAttribute('data-lang');
                if (targetLang === currentLang) return;
                
                // Find matching button in main switcher and click it
                const mainBtn = document.querySelector(`.header .lang-btn[data-lang="${targetLang}"]`);
                if (mainBtn) mainBtn.click();
            });
        });

        // 2. Navigation items inside drawer
        // Group 1: Company Accordion
        const companyData = menuData.company[lang];
        let companyHTML = '';
        if (companyData) {
            companyHTML = `
                <div class="drawer-sub-list">
                    ${companyData.map((group) => `
                        <div class="drawer-sub-section" data-group="${group.id}">
                            <button class="drawer-sub-trigger">
                                <span>${group.title}</span>
                                <svg class="drawer-arrow" width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="white" stroke-width="1.5"/></svg>
                            </button>
                            <div class="drawer-sub-panel">
                                <div class="drawer-cards-list">
                                    ${group.cards.map(card => `
                                        <div class="drawer-card">
                                            <div class="drawer-card-title">${card.title}</div>
                                            <div class="drawer-card-desc">${card.desc}</div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Group 2: Resources Accordion
        const resourcesData = menuData.resources[lang];
        let resourcesHTML = '';
        if (resourcesData) {
            resourcesHTML = `
                <div class="drawer-sub-list">
                    ${resourcesData.map((group) => `
                        <div class="drawer-sub-section" data-group="${group.id}">
                            <button class="drawer-sub-trigger">
                                <span>${group.title}</span>
                                <svg class="drawer-arrow" width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="white" stroke-width="1.5"/></svg>
                            </button>
                            <div class="drawer-sub-panel">
                                <div class="drawer-articles-list">
                                    ${group.cards.map(card => {
                                        const article = getArticle(card.slug);
                                        const thumb = article ? article.thumbnail : '';
                                        const rTime = article ? article.readTime : '';
                                        const cat = article ? article.category : '';
                                        return `
                                            <div class="drawer-article-item" data-slug="${card.slug}">
                                                ${thumb ? `<img class="drawer-article-thumb" src="${thumb}" alt="${card.title}">` : ''}
                                                <div class="drawer-article-info">
                                                    <span class="drawer-article-title">${card.title}</span>
                                                    <span class="drawer-article-meta">${cat} · ${rTime}</span>
                                                </div>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Group 3: Contact Form & Info Accordion
        const ct = contactTranslations[lang] || contactTranslations['en'];
        const contactHTML = `
            <div class="drawer-contact-panel">
                <div class="drawer-contact-info">
                    <div class="drawer-contact-section">
                        <div class="drawer-contact-label">${ct.directMessage}</div>
                        <div class="drawer-contact-title">${ct.reachOut}</div>
                        <p class="drawer-contact-desc">${ct.connectDesc}</p>
                    </div>
                    <div class="drawer-contact-section">
                        <div class="drawer-contact-label">${ct.locations}</div>
                        <p class="drawer-contact-desc">${ct.locationsDesc}</p>
                    </div>
                </div>
                <div class="drawer-contact-form-container">
                    <form id="drawer-contact-form" novalidate>
                        <div class="contact-form-grid">
                            <div class="form-group">
                                <input type="text" id="drawer-contact-name" name="name" required placeholder=" ">
                                <label for="drawer-contact-name">${ct.namePlaceholder}</label>
                            </div>
                            <div class="form-group">
                                <input type="text" id="drawer-contact-surname" name="surname" required placeholder=" ">
                                <label for="drawer-contact-surname">${ct.surnamePlaceholder}</label>
                            </div>
                            <div class="form-group">
                                <input type="text" id="drawer-contact-company" name="company" placeholder=" ">
                                <label for="drawer-contact-company">${ct.companyPlaceholder}</label>
                            </div>
                            <div class="form-group">
                                <input type="email" id="drawer-contact-email" name="email" required placeholder=" ">
                                <label for="drawer-contact-email">${ct.emailPlaceholder}</label>
                            </div>
                        </div>
                        <div class="form-group textarea-group">
                            <textarea id="drawer-contact-message" name="message" required placeholder=" "></textarea>
                            <label for="drawer-contact-message">${ct.messagePlaceholder}</label>
                        </div>
                        <button type="submit" id="drawer-contact-submit-btn" class="contact-btn">
                            <span class="btn-text">${ct.sendBtn}</span>
                            <span class="btn-icon">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" stroke-width="1.2"/>
                                </svg>
                            </span>
                        </button>
                    </form>
                    <div class="contact-success-panel" style="display: none; padding: 20px 0;">
                        <div class="success-icon-container">
                            <div class="success-glow"></div>
                            <svg class="success-checkmark" viewBox="0 0 52 52">
                                <circle class="success-checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                                <path class="success-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                        </div>
                        <h3 class="success-title">${ct.successTitle}</h3>
                        <p class="success-desc">${ct.successDesc}</p>
                    </div>
                </div>
            </div>
        `;

        // Retrieve labels based on main nav content (to support localizations)
        const companyLabel = document.querySelector('.header .nav-item[data-menu="company"]').textContent || 'Company';
        const resourcesLabel = document.querySelector('.header .nav-item[data-menu="resources"]').textContent || 'Resources';
        const contactLabel = document.querySelector('.header .nav-item[data-menu="contact"]').textContent || 'Contact';

        drawerNav.innerHTML = `
            <div class="drawer-nav-item" data-menu="company">
                <button class="drawer-nav-trigger">
                    <span>${companyLabel}</span>
                    <svg class="drawer-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="white" stroke-width="1.5"/></svg>
                </button>
                <div class="drawer-nav-panel">
                    ${companyHTML}
                </div>
            </div>
            <div class="drawer-nav-item" data-menu="resources">
                <button class="drawer-nav-trigger">
                    <span>${resourcesLabel}</span>
                    <svg class="drawer-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="white" stroke-width="1.5"/></svg>
                </button>
                <div class="drawer-nav-panel">
                    ${resourcesHTML}
                </div>
            </div>
            <div class="drawer-nav-item" data-menu="contact">
                <button class="drawer-nav-trigger">
                    <span>${contactLabel}</span>
                    <svg class="drawer-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="white" stroke-width="1.5"/></svg>
                </button>
                <div class="drawer-nav-panel">
                    ${contactHTML}
                </div>
            </div>
        `;

        // Bind root accordion toggles inside drawer
        drawerNav.querySelectorAll('.drawer-nav-item').forEach(item => {
            const trigger = item.querySelector('.drawer-nav-trigger');
            const panel = item.querySelector('.drawer-nav-panel');
            
            trigger.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close other root accordions
                drawerNav.querySelectorAll('.drawer-nav-item').forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.drawer-nav-panel').style.maxHeight = null;
                    }
                });

                if (isActive) {
                    item.classList.remove('active');
                    panel.style.maxHeight = null;
                } else {
                    item.classList.add('active');
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                }
            });
        });

        // Bind sub-accordion toggles inside Company and Resources panels
        drawerNav.querySelectorAll('.drawer-sub-section').forEach(sub => {
            const trigger = sub.querySelector('.drawer-sub-trigger');
            const panel = sub.querySelector('.drawer-sub-panel');
            
            trigger.addEventListener('click', () => {
                const isActive = sub.classList.contains('active');
                const parentPanel = sub.closest('.drawer-nav-panel');

                // Close other sibling sub-sections
                const siblings = sub.parentElement.querySelectorAll('.drawer-sub-section');
                siblings.forEach(otherSub => {
                    if (otherSub !== sub) {
                        otherSub.classList.remove('active');
                        otherSub.querySelector('.drawer-sub-panel').style.maxHeight = null;
                    }
                });

                if (isActive) {
                    sub.classList.remove('active');
                    panel.style.maxHeight = null;
                    // Adjust parent panel height
                    if (parentPanel) {
                        parentPanel.style.maxHeight = parentPanel.scrollHeight + 'px';
                    }
                } else {
                    sub.classList.add('active');
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                    // Adjust parent panel height to fit the expanded sub-panel
                    if (parentPanel) {
                        parentPanel.style.maxHeight = (parentPanel.scrollHeight + panel.scrollHeight) + 'px';
                    }
                }
            });
        });

        // Bind article item clicks inside Resources sub-accordions
        drawerNav.querySelectorAll('.drawer-article-item').forEach(item => {
            item.addEventListener('click', () => {
                const slug = item.getAttribute('data-slug');
                if (slug) {
                    closeMobileDrawer();
                    openArticle(slug);
                }
            });
        });

        // Bind Contact Form input blur states
        const drawerForm = drawerNav.querySelector('#drawer-contact-form');
        if (drawerForm) {
            drawerForm.addEventListener('submit', handleContactSubmit);
            
            const inputs = drawerForm.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                const checkValue = () => {
                    if (input.value.trim() !== '') {
                        input.classList.add('has-value');
                    } else {
                        input.classList.remove('has-value');
                    }
                };
                input.addEventListener('blur', () => {
                    checkValue();
                    if (input.type === 'email' && input.value.trim() !== '') {
                        validateEmailField(input);
                    }
                });
                input.addEventListener('input', () => {
                    input.classList.remove('invalid');
                });
            });
        }
    }

    // Check URL for language parameter on load
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    const supportedLangs = Array.from(langButtons).map(btn => btn.getAttribute('data-lang'));
    
    if (urlLang && supportedLangs.includes(urlLang.toLowerCase()) && urlLang.toLowerCase() !== 'en') {
        const targetLang = urlLang.toLowerCase();
        // Update switcher UI state
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === targetLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        switchLanguage(targetLang);
    }
});
