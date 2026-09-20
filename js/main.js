/* ==========================================================================
   1980s AI Photo Generator — Interactive Logic & Multi-Language Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initBeforeAfterSlider();
  initStyleTabs();
  initPricingToggle();
  initFaqAccordion();
  initMobileMenu();
});

/* ==========================================================================
   1. Multi-Language Switcher (EN / VI)
   ========================================================================== */
const translations = {
  en: {
    nav_features: "Features",
    nav_styles: "26+ Styles",
    nav_before_after: "Before & After",
    nav_pricing: "Pricing",
    nav_faq: "FAQ",
    nav_get_app: "Get App",
    
    hero_eyebrow: "THE 1980s PORTRAIT STUDIO",
    hero_title: "Turn Your Photo Into The 1980s",
    hero_subtitle: "Upload your photo and our precision AI recreates you in authentic 80s style — big feathered hair, vintage fashion, warm film grain — while preserving your true face identity.",
    hero_pill_1: "GPT-Image 2.5",
    hero_pill_2: "Face-preserving",
    hero_pill_3: "26+ Curated Styles",
    hero_btn_appstore_sub: "Download on the",
    hero_btn_appstore_title: "App Store",
    hero_btn_explore: "Explore Styles",
    badge_polaroid_title: "1985 Yearbook",
    badge_polaroid_sub: "35mm Analog Film Grain",
    floating_tag_1: "✨ Pure 80s Retro Vibe",
    floating_tag_2: "🔒 100% Face-Lock Tech",

    ba_eyebrow: "IDENTITY PRESERVATION",
    ba_title: "Your True Face, Pure 80s Vibe",
    ba_subtitle: "Unlike generic AI filters that replace you with a stranger, our precision model locks your unique facial structure, skin tone, and eyes while transforming only the fashion and atmosphere.",
    ba_label_before: "ORIGINAL (2026)",
    ba_label_after: "1985 RETRO AI",
    ba_hint: "Drag the slider to compare before and after",

    feat_eyebrow: "WHY PHOTOAI 1980s",
    feat_title: "Authentic Nostalgia Meets Cutting-Edge AI",
    feat_subtitle: "Designed specifically to recreate the exact textures, lighting and analog camera optics of the 1980s.",
    feat_1_title: "Face-Lock Technology",
    feat_1_desc: "Advanced neural networks preserve your eyes, smile, and facial structure so you are instantly recognizable in every vintage photo.",
    feat_2_title: "35mm Film & Halation",
    feat_2_desc: "Authentic Kodachrome and Ektachrome film emulation with organic grain, soft highlights, warm tungsten glow, and gentle vignette.",
    feat_3_title: "26+ Global Styles",
    feat_3_desc: "From 1985 American high school yearbooks and Bollywood retro to Tokyo City Pop, French Riviera, and Vietnamese nostalgia.",
    feat_4_title: "Multiple Aspect Ratios",
    feat_4_desc: "Export in 1:1 square, 9:16 portrait stories, 3:4 classic photo, 16:9 cinematic, or 3:2 standard 35mm formats.",
    feat_5_title: "Instant HD Generation",
    feat_5_desc: "Cloud GPU acceleration delivers ultra-high-resolution studio-grade portraits ready for printing or social media in seconds.",
    feat_6_title: "Privacy & Data Protection",
    feat_6_desc: "Your photos are encrypted, never sold, and never used to train public AI models. Delete photos or your account anytime.",

    styles_eyebrow: "STYLE SHOWCASE",
    styles_title: "Choose Your 1980s Persona",
    styles_subtitle: "Curated vintage collections across cultures, aesthetics, and iconic 80s moments.",
    tab_all: "All Styles",
    tab_popular: "Popular Styles",
    tab_world: "Around the World",
    tab_gender: "For You",
    tab_couple: "Couples",

    steps_eyebrow: "HOW IT WORKS",
    steps_title: "Travel Back in Time in 3 Easy Steps",
    steps_1_title: "1. Choose a Style",
    steps_1_desc: "Pick from 26+ authentic 1980s themes: Yearbook, Disco Rink, Bollywood, City Pop, or Vintage Wedding.",
    steps_2_title: "2. Upload a Photo",
    steps_2_desc: "Take a selfie or choose a clear portrait from your photo library. Good lighting gives the best results.",
    steps_3_title: "3. Get Your 80s Portrait",
    steps_3_desc: "Our AI transforms your hair, wardrobe, and lighting while locking your face. Save in HD or share immediately.",

    pricing_eyebrow: "RETRO PASS & CREDITS",
    pricing_title: "Simple, Transparent Pricing",
    pricing_subtitle: "Start with 3 free credits upon signup, plus 1 daily free bonus. Upgrade anytime for unlimited creative power.",
    pricing_tab_sub: "Monthly Plans",
    pricing_tab_pack: "Credit Packs",
    badge_popular: "MOST POPULAR",
    plan_basic_title: "Basic Plan",
    plan_basic_desc: "Perfect for nostalgic weekend creators",
    plan_basic_price: "$4.99",
    plan_basic_unit: "/ month",
    plan_basic_f1: "100 credits per month",
    plan_basic_f2: "Standard GPU queue",
    plan_basic_f3: "All 26+ retro styles",
    plan_basic_f4: "Full HD export",
    plan_basic_btn: "Get Basic",

    plan_pro_title: "Pro Plan",
    plan_pro_desc: "For content creators & retro enthusiasts",
    plan_pro_price: "$9.99",
    plan_pro_unit: "/ month",
    plan_pro_f1: "250 credits per month",
    plan_pro_f2: "Fast-track GPU queue",
    plan_pro_f3: "All styles + new releases",
    plan_pro_f4: "High-resolution 4K export",
    plan_pro_f5: "No watermarks",
    plan_pro_btn: "Start Pro",

    plan_studio_title: "Studio Plan",
    plan_studio_desc: "Maximum speed and creative volume",
    plan_studio_price: "$19.99",
    plan_studio_unit: "/ month",
    plan_studio_f1: "600 credits per month",
    plan_studio_f2: "Highest priority instant GPU",
    plan_studio_f3: "All premium AI models",
    plan_studio_f4: "Batch multi-photo generation",
    plan_studio_f5: "VIP customer support",
    plan_studio_btn: "Get Studio",

    pack_starter_title: "Starter Pack",
    pack_starter_desc: "Quick one-time top-up",
    pack_starter_price: "$1.99",
    pack_starter_unit: "one-time",
    pack_starter_f1: "30 credits instantly",
    pack_starter_f2: "Never expires",
    pack_starter_f3: "Full access to all styles",
    pack_starter_btn: "Buy 30 Credits",

    pack_value_title: "Value Pack",
    pack_value_desc: "Great balance of credits and price",
    pack_value_price: "$4.99",
    pack_value_unit: "one-time",
    pack_value_f1: "80 credits instantly",
    pack_value_f2: "Never expires",
    pack_value_f3: "High-resolution export",
    pack_value_btn: "Buy 80 Credits",

    pack_power_title: "Power Pack",
    pack_power_desc: "Best value per credit",
    pack_power_price: "$12.99",
    pack_power_unit: "one-time",
    pack_power_f1: "250 credits instantly",
    pack_power_f2: "Never expires",
    pack_power_f3: "Fast processing speed",
    pack_power_btn: "Buy 250 Credits",

    free_credits_banner: "🎁 3 Free Credits on Signup • +1 Free Credit Every Day You Check In!",

    faq_eyebrow: "GOT QUESTIONS?",
    faq_title: "Frequently Asked Questions",
    faq_q1: "How does the Face-Lock technology work?",
    faq_a1: "Our specialized neural pipeline maps your facial landmark geometry, eye shape, smile, and contours. It holds these key features intact while repainting the surrounding hair, wardrobe, and scene with authentic 1980s styling. You always look like yourself!",
    faq_q2: "Is my personal photo data safe and private?",
    faq_a2: "Yes, completely. Your photos are uploaded via TLS encryption to a private, access-restricted cloud storage bucket. They are processed solely to fulfill your generation request. We never sell your photos, and we never use your likeness to train public AI foundation models.",
    faq_q3: "Can I delete my uploaded and generated photos?",
    faq_a3: "Yes. You can delete any photo in your in-app Gallery at any time. You can also tap 'Delete Account' in your Profile settings, which permanently and immediately wipes all your photos, generation history, and account records from our servers.",
    faq_q4: "How do credits work?",
    faq_a4: "1 standard photo generation consumes 1 credit. You receive 3 free credits immediately when signing up, and 1 additional free credit daily. Monthly subscriptions and one-time credit packs are available if you want to generate more photos.",
    faq_q5: "What devices are supported?",
    faq_a5: "PhotoAI 1980s is designed for iOS 16.0 or later on iPhone and iPad. It is optimized for the latest Apple silicon with smooth animations and responsive haptics.",

    cta_title: "Ready to Travel Back in Time?",
    cta_subtitle: "Experience the magic of 1980s photography with your own face. Download free on the App Store today.",
    cta_btn: "Download PhotoAI 1980s",

    footer_desc: "The authentic 1980s AI portrait studio. Relive the golden age of feathered hair, cassette tapes, neon nights, and warm analog film.",
    footer_nav_title: "Navigation",
    footer_legal_title: "Legal & Privacy",
    footer_contact_title: "Contact & Support",
    footer_link_privacy: "Privacy Policy",
    footer_link_terms: "Terms of Service",
    footer_copyright: "© 2026 AppWorks 247. All rights reserved. 1980s AI Photo Generator."
  },
  vi: {
    nav_features: "Tính năng",
    nav_styles: "26+ Phong cách",
    nav_before_after: "Trước & Sau",
    nav_pricing: "Bảng giá",
    nav_faq: "Hỏi đáp",
    nav_get_app: "Tải ứng dụng",
    
    hero_eyebrow: "STUDIO ẢNH THẬP NIÊN 1980",
    hero_title: "Biến Ảnh Của Bạn Thành Thập Niên 1980",
    hero_subtitle: "Tải ảnh của bạn lên và công nghệ AI chuẩn xác sẽ tái hiện bạn trong phong cách thập niên 80 nguyên bản — mái tóc xù bồng bềnh, thời trang vintage, hạt phim ấm áp — trong khi vẫn giữ trọn vẹn nét mặt thật.",
    hero_pill_1: "GPT-Image 2.5",
    hero_pill_2: "Khóa nét gương mặt",
    hero_pill_3: "26+ Phong cách độc quyền",
    hero_btn_appstore_sub: "Tải trên",
    hero_btn_appstore_title: "App Store",
    hero_btn_explore: "Khám phá phong cách",
    badge_polaroid_title: "Kỷ yếu Năm 1985",
    badge_polaroid_sub: "Hạt phim 35mm hoài cổ",
    floating_tag_1: "✨ Phong cách Retro 80s đậm chất",
    floating_tag_2: "🔒 Công nghệ Face-Lock giữ trọn nét mặt",

    ba_eyebrow: "BẢO TỒN ĐƯỜNG NÉT GƯƠNG MẶT",
    ba_title: "Gương Mặt Thật Của Bạn, Đậm Chất Thập Niên 80",
    ba_subtitle: "Khác với các bộ lọc AI thông thường thay thế bạn bằng người xa lạ, mô hình chính xác của chúng tôi khóa trọn cấu trúc khuôn mặt, ánh mắt, nụ cười của bạn và chỉ biến hóa kiểu tóc, trang phục và không gian retro.",
    ba_label_before: "ẢNH GỐC HIỆN ĐẠI (2026)",
    ba_label_after: "ẢNH RETRO 1985 AI",
    ba_hint: "Kéo thanh trượt để so sánh ảnh trước và sau",

    feat_eyebrow: "VÌ SAO CHỌN PHOTOAI 1980s",
    feat_title: "Cảm Xúc Hoài Niệm Gặp Gỡ Đột Phá AI",
    feat_subtitle: "Được tối ưu chuyên biệt để tái hiện chính xác chất liệu ảnh, ánh sáng studio và hạt phim máy ảnh cơ thập niên 1980.",
    feat_1_title: "Công Nghệ Face-Lock",
    feat_1_desc: "Mạng nơ-ron nhận diện giữ nguyên đôi mắt, nụ cười và cấu trúc khuôn mặt để bất kỳ ai nhìn vào cũng nhận ra ngay chính bạn.",
    feat_2_title: "Hạt Phim 35mm & Halation",
    feat_2_desc: "Mô phỏng chân thực phim nhựa Kodachrome và Ektachrome cổ điển với hạt nhiễu tự nhiên, viền sáng mềm và tông màu ấm áp.",
    feat_3_title: "26+ Phong Cách Toàn Cầu",
    feat_3_desc: "Từ kỷ yếu trung học Mỹ 1985, sàn disco, Bollywood, đến phong cách Tokyo City Pop và nét đẹp hoài niệm Việt Nam thập niên 80.",
    feat_4_title: "Đa Dạng Tỉ Lệ Khung Hình",
    feat_4_desc: "Hỗ trợ xuất ảnh vuông 1:1, ảnh dọc 9:16 cho Story, tỉ lệ ảnh chân dung cổ điển 3:4, 4:3 và ảnh phim 3:2 chuẩn mực.",
    feat_5_title: "Tạo Ảnh Siêu Nét Tức Thì",
    feat_5_desc: "Hệ thống điện toán GPU đám mây mạnh mẽ xử lý và hoàn thiện ảnh chân dung độ phân giải cao chỉ trong vài giây.",
    feat_6_title: "Bảo Mật Dữ Liệu Tối Đa",
    feat_6_desc: "Ảnh được mã hóa an toàn, không bao giờ đem bán hay dùng để huấn luyện mô hình công cộng. Bạn có quyền xóa ảnh hoặc tài khoản bất cứ lúc nào.",

    styles_eyebrow: "BỘ SƯU TẬP PHONG CÁCH",
    styles_title: "Chọn Nhân Vật Thập Niên 1980 Của Bạn",
    styles_subtitle: "Những bộ sưu tập retro tinh tuyển qua các nền văn hóa, kỷ niệm và biểu tượng của thời kỳ hoàng kim.",
    tab_all: "Tất cả",
    tab_popular: "Thịnh hành nhất",
    tab_world: "Vòng quanh thế giới",
    tab_gender: "Dành riêng cho bạn",
    tab_couple: "Cặp đôi Retro",

    steps_eyebrow: "CÁCH THỨC HOẠT ĐỘNG",
    steps_title: "Trở Về Thập Niên 80 Chỉ Với 3 Bước",
    steps_1_title: "1. Chọn Phong Cách",
    steps_1_desc: "Chọn một trong 26+ chủ đề: Kỷ yếu 1985, Sàn Disco, Điện ảnh Bollywood, Tokyo City Pop hay Chân dung Studio.",
    steps_2_title: "2. Tải Ảnh Chân Dung",
    steps_2_desc: "Chụp ảnh selfie hoặc chọn một tấm ảnh rõ mặt từ thư viện ảnh điện thoại của bạn.",
    steps_3_title: "3. Nhận Ảnh Retro",
    steps_3_desc: "AI biến hình mái tóc, trang phục và ánh sáng vintage trong khi vẫn giữ nguyên mặt bạn. Lưu về máy hoặc chia sẻ ngay.",

    pricing_eyebrow: "GÓI ĐĂNG KÝ & CREDITS",
    pricing_title: "Bảng Giá Rõ Ràng, Minh Bạch",
    pricing_subtitle: "Nhận ngay 3 credits miễn phí khi mở tài khoản, cộng thêm 1 credit mỗi ngày điểm danh. Nâng cấp bất cứ khi nào bạn muốn.",
    pricing_tab_sub: "Gói Đăng Ký Tháng",
    pricing_tab_pack: "Gói Nạp Lẻ",
    badge_popular: "PHỔ BIẾN NHẤT",
    plan_basic_title: "Gói Cơ Bản (Basic)",
    plan_basic_desc: "Phù hợp để trải nghiệm sáng tạo cuối tuần",
    plan_basic_price: "$4.99",
    plan_basic_unit: "/ tháng",
    plan_basic_f1: "100 credits mỗi tháng",
    plan_basic_f2: "Hàng đợi GPU tiêu chuẩn",
    plan_basic_f3: "Mở khóa toàn bộ 26+ phong cách",
    plan_basic_f4: "Xuất ảnh Full HD",
    plan_basic_btn: "Chọn Gói Basic",

    plan_pro_title: "Gói Chuyên Nghiệp (Pro)",
    plan_pro_desc: "Dành cho nhà sáng tạo nội dung & tín đồ retro",
    plan_pro_price: "$9.99",
    plan_pro_unit: "/ tháng",
    plan_pro_f1: "250 credits mỗi tháng",
    plan_pro_f2: "Hàng đợi xử lý GPU ưu tiên tốc độ cao",
    plan_pro_f3: "Toàn bộ phong cách + cập nhật mới",
    plan_pro_f4: "Xuất ảnh độ phân giải siêu nét 4K",
    plan_pro_f5: "Không gắn hình mờ (watermark)",
    plan_pro_btn: "Chọn Gói Pro",

    plan_studio_title: "Gói Studio",
    plan_studio_desc: "Tối đa công suất và tốc độ cho người đam mê",
    plan_studio_price: "$19.99",
    plan_studio_unit: "/ tháng",
    plan_studio_f1: "600 credits mỗi tháng",
    plan_studio_f2: "Ưu tiên GPU cao nhất tức thì",
    plan_studio_f3: "Tất cả các mô hình AI cao cấp",
    plan_studio_f4: "Xử lý hàng loạt nhiều ảnh",
    plan_studio_f5: "Hỗ trợ khách hàng VIP",
    plan_studio_btn: "Chọn Gói Studio",

    pack_starter_title: "Gói Khởi Động",
    pack_starter_desc: "Nạp lẻ nhanh chóng",
    pack_starter_price: "$1.99",
    pack_starter_unit: "thanh toán một lần",
    pack_starter_f1: "30 credits dùng ngay",
    pack_starter_f2: "Không có hạn sử dụng",
    pack_starter_f3: "Dùng cho mọi phong cách",
    pack_starter_btn: "Nạp 30 Credits",

    pack_value_title: "Gói Tiết Kiệm",
    pack_value_desc: "Cân bằng tối ưu số lượng và chi phí",
    pack_value_price: "$4.99",
    pack_value_unit: "thanh toán một lần",
    pack_value_f1: "80 credits dùng ngay",
    pack_value_f2: "Không có hạn sử dụng",
    pack_value_f3: "Xuất ảnh độ phân giải cao",
    pack_value_btn: "Nạp 80 Credits",

    pack_power_title: "Gói Uy Lực (Power)",
    pack_power_desc: "Tiết kiệm nhất trên từng lượt tạo ảnh",
    pack_power_price: "$12.99",
    pack_power_unit: "thanh toán một lần",
    pack_power_f1: "250 credits dùng ngay",
    pack_power_f2: "Không có hạn sử dụng",
    pack_power_f3: "Tốc độ xử lý ưu tiên",
    pack_power_btn: "Nạp 250 Credits",

    free_credits_banner: "🎁 Tặng 3 Credits khi đăng ký • +1 Credit miễn phí mỗi ngày khi mở app!",

    faq_eyebrow: "BẠN CÓ THẮC MẮC?",
    faq_title: "Câu Hỏi Thường Gặp",
    faq_q1: "Công nghệ Face-Lock hoạt động như thế nào?",
    faq_a1: "Quy trình AI chuyên sâu của chúng tôi phân tích hình học các điểm mốc trên gương mặt, nếp cười và đôi mắt của bạn. Nó giữ nguyên những đặc điểm nhận dạng này trong khi vẽ lại mái tóc, quần áo và bối cảnh thập niên 80 xung quanh.",
    faq_q2: "Ảnh cá nhân của tôi có được bảo mật không?",
    faq_a2: "Hoàn toàn bảo mật. Ảnh của bạn được mã hóa truyền tải qua giao thức TLS tới kho lưu trữ đám mây bảo mật được kiểm soát quyền nghiêm ngặt. Ảnh chỉ phục vụ duy nhất cho việc tạo chân dung theo yêu cầu của bạn, không bao giờ bị bán hay dùng để huấn luyện AI công khai.",
    faq_q3: "Tôi có thể xóa ảnh đã tải lên và ảnh đã tạo không?",
    faq_a3: "Có. Bạn có thể xóa bất kỳ bức ảnh nào trong Thư viện ảnh của app bất cứ lúc nào. Bạn cũng có thể bấm 'Xóa tài khoản' (Delete Account) trong cài đặt hồ sơ để xóa sạch vĩnh viễn toàn bộ ảnh, dữ liệu và lịch sử khỏi máy chủ.",
    faq_q4: "Credits được tính như thế nào?",
    faq_a4: "1 lượt tạo ảnh tiêu tốn 1 credit. Bạn được tặng ngay 3 credits khi mở app lần đầu và 1 credit mỗi ngày khi điểm danh. Bạn có thể đăng ký gói tháng hoặc mua gói lẻ khi có nhu cầu tạo thêm.",
    faq_q5: "Ứng dụng hỗ trợ những thiết bị nào?",
    faq_a5: "PhotoAI 1980s hỗ trợ các thiết bị iPhone và iPad chạy iOS 16.0 trở lên, được tối ưu hóa mượt mà với cảm ứng haptic và giao diện hiện đại.",

    cta_title: "Sẵn Sàng Trở Về Thập Niên 1980?",
    cta_subtitle: "Trải nghiệm vẻ đẹp hoài niệm của nhiếp ảnh thập niên 80 với chính gương mặt bạn. Tải miễn phí trên App Store ngay hôm nay.",
    cta_btn: "Tải PhotoAI 1980s Ngay",

    footer_desc: "Studio ảnh AI thập niên 1980 đích thực. Sống lại kỷ nguyên của tóc bồng, băng cassette, ánh đèn neon và sắc màu phim analog.",
    footer_nav_title: "Điều hướng",
    footer_legal_title: "Pháp lý & Quyền riêng tư",
    footer_contact_title: "Liên hệ & Hỗ trợ",
    footer_link_privacy: "Chính sách quyền riêng tư",
    footer_link_terms: "Điều khoản dịch vụ",
    footer_copyright: "© 2026 AppWorks 247. Bảo lưu mọi quyền. 1980s AI Photo Generator."
  }
};

let currentLang = localStorage.getItem('photoai_lang') || 'en';

function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll('.lang-btn');
  
  applyLanguage(currentLang);

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang && lang !== currentLang) {
        currentLang = lang;
        localStorage.setItem('photoai_lang', currentLang);
        applyLanguage(currentLang);
      }
    });
  });
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  
  // Update buttons state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Apply all data-i18n attributes
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Also handle elements with separate data-en and data-vi
  document.querySelectorAll('[data-en][data-vi]').forEach(el => {
    el.textContent = (lang === 'vi') ? el.getAttribute('data-vi') : el.getAttribute('data-en');
  });
}

/* ==========================================================================
   2. Interactive Before / After Slider
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.querySelector('.comparison-slider-wrapper');
  const afterWrapper = document.querySelector('.comparison-after-wrapper');
  const afterImg = document.querySelector('.comparison-after-wrapper img');
  const handle = document.querySelector('.comparison-handle');

  if (!container || !afterWrapper || !handle) return;

  let isDragging = false;

  function updateSlider(xPos) {
    const rect = container.getBoundingClientRect();
    let percentage = ((xPos - rect.left) / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    afterWrapper.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
    
    // Maintain inner image scale matching the container
    if (afterImg) {
      afterImg.style.width = `${rect.width}px`;
    }
  }

  // Handle window resizing
  window.addEventListener('resize', () => {
    const rect = container.getBoundingClientRect();
    if (afterImg) {
      afterImg.style.width = `${rect.width}px`;
    }
  });

  // Mouse events
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch events
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Initial set
  const rect = container.getBoundingClientRect();
  if (afterImg) {
    afterImg.style.width = `${rect.width}px`;
  }
}

/* ==========================================================================
   3. Style Showcase Category Tabs
   ========================================================================== */
function initStyleTabs() {
  const tabs = document.querySelectorAll('.style-tab-btn');
  const cards = document.querySelectorAll('.style-card');

  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.getAttribute('data-category');

      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* ==========================================================================
   4. Pricing Toggle (Subscriptions vs Credit Packs)
   ========================================================================== */
function initPricingToggle() {
  const toggleBtns = document.querySelectorAll('.pricing-toggle-btn');
  const subGrid = document.querySelector('.pricing-grid-subscription');
  const packGrid = document.querySelector('.pricing-grid-packs');

  if (!toggleBtns.length || !subGrid || !packGrid) return;

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-target');
      if (target === 'packs') {
        subGrid.style.display = 'none';
        packGrid.style.display = 'grid';
      } else {
        subGrid.style.display = 'grid';
        packGrid.style.display = 'none';
      }
    });
  });
}

/* ==========================================================================
   5. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other items
      items.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      // Toggle current
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   6. Mobile Menu Drawer
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const drawer = document.querySelector('.mobile-drawer');

  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  // Close when clicking a link
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}
