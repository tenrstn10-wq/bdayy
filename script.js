/* ═══════════════════════════════════════════════════════════
   SISTEM BAHASA (i18n) — toggle ID | EN
   Hanya menerjemahkan teks UI (judul section, tombol, label,
   hint, navbar, modal). Pesan personal (surat, ucapan galeri,
   isi kupon, kartu ucapan, cerita timeline) TIDAK ikut toggle
   dan selalu tetap dalam Bahasa Indonesia.
   ═══════════════════════════════════════════════════════════ */
const I18N = {
  id: {
    'credit.text': 'DIBUAT OLEH MASTEN',
    'intro.status': 'Menyiapkan kejutan',
    'countdown.badge': '✦ Waktu Khusus Melisa ✦',
    'countdown.title': 'Menuju Hari Istimewa',
    'countdown.sub': 'Halaman ini terkunci hingga waktu hitung mundur menuju 21 September 2026 pukul 00:00 WIB tiba.',
    'countdown.pinBtn': 'Buka dengan PIN Rahasia',
    'unit.days': 'Hari', 'unit.hours': 'Jam', 'unit.mins': 'Menit', 'unit.secs': 'Detik',
    'theme.eyebrow': 'Personalisasi Tampilanmu',
    'theme.title': 'Pilih<br/>Tema Warna',
    'theme.sub': 'Sesuaikan warna tampilan sebelum masuk ke dalam ruang ini',
    'theme.next': 'Lanjutkan →',
    'pin.eyebrow': 'Ruang Rahasia Jarak Jauh',
    'pin.title': 'Khusus<br/>Untukmu',
    'pin.sub': 'Ada ruang sunyi yang sudah aku siapkan dengan hati, khusus untuk kamu seorang.',
    'pin.hint': 'Masukkan kode rahasiamu',
    'nav.home': 'Beranda', 'nav.map': 'Peta Jarak', 'nav.memories': 'Perjalanan',
    'nav.gallery': 'Galeri', 'nav.wishes': 'Tiup Lilin', 'nav.coupons': 'Kupon',
    'nav.gift': 'Kado', 'nav.letter': 'Surat', 'nav.greetingCard': 'Kartu Ucapan',
    'nav.sendMsg': 'Kirim Pesan',
    'hero.badge': 'Dari layar ini, untuk hatimu',
    'hero.greeting': 'Selamat Ulang Tahun',
    'hero.subLine': '— dari layar HP yang jadi saksi —',
    'hero.loveMeter': 'Meteran Cinta',
    'hero.loveMeterSub': 'Udah penuh dari tadi sebenernya 🤫',
    'hero.favoritePerson': 'Orang Favoritku',
    'hero.daysTogether': 'Hari Bersama',
    'hero.minsChat': 'Menit Obrolan',
    'hero.viewStory': 'Lihat Cerita Kita',
    'hero.share': 'Bagikan ✦',
    'hero.scrollHint': 'Geser ke bawah',
    'map.eyebrow': 'Titik Kordinat Kita',
    'map.chatClockLabel': 'Sudah Sejauh Ini Kita Ngobrol',
    'memories.eyebrow': 'Jejak Waktu',
    'memories.title': 'Obrolan yang<br/>Terus Nyambung',
    'gallery.eyebrow': 'Tangkapan Kamera',
    'gallery.title': 'Beberapa foto<br><span class="accent-script">Yang aku punya</span>',
    'gallery.hint': 'Ketuk sekali untuk pratinjau, ketuk 2 kali untuk melihat lebih dekat',
    'gallery.desc': 'Beberapa jepretan yang berhasil aku simpan dari momen-momen kita, kecil tapi berarti banget buat aku.',
    'wishes.eyebrow': 'Sudah waktunya',
    'wishes.title': 'Ucapkan satu harapan,<br/><span class="accent-script">Lalu tiup lilinnya.</span>',
    'wishes.instr': 'Nyalakan koreknya, seret ke lilin satu persatu sampai semuanya menyala, lalu tiup mic HP-mu untuk memadamkannya!',
    'wishes.matchHint': 'Seret korek api ke lilin · atau ketuk lilin setelah menyalakan korek',
    'wishes.blowBtn': 'Tiup Lilin (Gunakan Mic)',
    'wishes.granted': 'Harapanmu terkabul ✦',
    'coupons.eyebrow': 'Kado Tambahan',
    'coupons.title': 'Buku Kupon<br/><span class="accent-script">Pilihan Hati</span>',
    'coupons.instr': 'Pilih dan buka 1 kupon spesial yang paling kamu inginkan di bawah ini!',
    'coupons.vip1': 'Kupon VIP #1', 'coupons.vip2': 'Kupon VIP #2',
    'coupons.vip3': 'Kupon VIP #3', 'coupons.vip4': 'Kupon VIP #4',
    'coupons.tapOpen': 'Ketuk untuk membuka',
    'coupons.tapClaim': 'Ketuk untuk klaim via WA',
    'coupons.claimed': '✔ BERHASIL DIKLAIM',
    'coupons.unlockAll': '✦ Mau Buka Semua Kupon? Minta Akses ✦',
    'gift.eyebrow': 'Ada Kejutan Kecil',
    'gift.title': 'Kado Spesial<br/><span class="accent-script">Untukmu</span>',
    'gift.tapEnvelope': 'Ketuk amplop kado ini untuk membuka kejutannya!',
    'gift.tapForMore': '(Ketuk gambar untuk lainnya!)',
    'gift.desc': 'Ada kejutan kecil yang udah aku siapin khusus, semoga bisa bikin kamu senyum sepanjang hari.',
    'letter.eyebrow': 'Surat Kecil Untukmu',
    'letter.title': 'Buka Saat<br/><span class="accent-script">Kamu Siap</span>',
    'letter.tapEnvelope': 'Ketuk amplop untuk membaca surat',
    'letter.desc': 'Beberapa kata jujur dari hati yang pengen aku sampaikan, baca pelan-pelan ya.',
    'gcard.eyebrow': 'Satu Terakhir Buat Kamu',
    'gcard.title': 'Kartu Ucapan<br/><span class="accent-script">Digital</span>',
    'gcard.sub': 'Kartu kecil ini bisa kamu simpan sendiri sebagai kenang-kenangan ✦',
    'gcard.anotherMsg': '↻ Pesan Lain',
    'gcard.saveCard': '⬇ Simpan Kartu',
    'footer.eyebrow': 'Menutup Hari Ini',
    'footer.title': 'Buat Kamu<br/><span class="accent-script">Yang Special</span>',
    'footer.replyLabel': 'Tulis Balasan Untukku:',
    'footer.replyPh': 'Ketik pesan atau kesanmu di sini...',
    'footer.sendBtn': 'Kirim Balasan ke WhatsApp',
    'footer.backToTop': '↑ Kembali ke Atas',
    'lightbox.swipeHint': '← Geser untuk navigasi →',
    'lightbox.back': '← Balik',
    'letterModal.headLabel': 'Sebuah surat yang dikirim menyeberangi jarak',
    'modal.confirm': 'Konfirmasi', 'modal.cancel': 'Batal', 'modal.continue': 'Lanjut',
    'bypass.title': 'PIN Bypass Rahasia',
    'bypass.sub': 'Masukkan PIN untuk langsung membuka halaman ini',
    'bypass.open': 'Buka',
    'toast.screenshotSaved': 'Screenshot tersimpan! ✦',
    'toast.screenshotFailed': 'Gagal menyimpan screenshot, coba lagi ✦',
    'toast.cardSaved': 'Kartu ucapan tersimpan! ✦',
    'toast.cardFailed': 'Gagal menyimpan kartu ucapan, coba lagi ✦',
    'ask.oneCouponTitle': 'Satu kupon saja ✦',
    'ask.oneCouponMsg': 'Kamu hanya bisa memilih 1 kupon spesial! Kecuali kamu meminta akses khusus untuk membuka semuanya.',
    'ask.understand': 'Mengerti',
    'ask.claimedTitle': 'Sudah diklaim ✦',
    'ask.claimedMsg': 'Kupon "{name}" sudah pernah diklaim!',
    'ask.ok': 'Oke',
    'ask.claimTitle': 'Klaim kupon ✦',
    'ask.claimMsg': 'Mau klaim kupon "{name}" ini sekarang ke WhatsApp?',
    'ask.claim': 'Klaim',
    'ask.unlockAllTitle': 'Buka semua kupon ✦',
    'ask.unlockAllMsg': 'Mau membuka semua kupon sekaligus? Akan mengirim permintaan izin via WhatsApp.',
    'ask.requestAccess': 'Minta Akses',
    'theme.specialBadge': '✦ SPESIAL',
    'theme.locked': 'Terkunci',
  },
  en: {
    'credit.text': 'CREATED BY MASTEN',
    'intro.status': 'Preparing your surprise',
    'countdown.badge': '✦ A Special Time for Melisa ✦',
    'countdown.title': 'Counting Down to the Big Day',
    'countdown.sub': 'This page stays locked until the countdown reaches September 21, 2026 at 00:00 WIB.',
    'countdown.pinBtn': 'Unlock with Secret PIN',
    'unit.days': 'Days', 'unit.hours': 'Hours', 'unit.mins': 'Mins', 'unit.secs': 'Secs',
    'theme.eyebrow': 'Personalize Your View',
    'theme.title': 'Choose<br/>a Color Theme',
    'theme.sub': 'Adjust the look before stepping into this space',
    'theme.next': 'Continue →',
    'pin.eyebrow': 'A Secret Space Across Miles',
    'pin.title': 'Just For<br/>You',
    'pin.sub': "There's a quiet space I prepared with care, just for you.",
    'pin.hint': 'Enter your secret code',
    'nav.home': 'Home', 'nav.map': 'Distance', 'nav.memories': 'Our Story',
    'nav.gallery': 'Gallery', 'nav.wishes': 'Blow Candles', 'nav.coupons': 'Coupons',
    'nav.gift': 'Gift', 'nav.letter': 'Letter', 'nav.greetingCard': 'Greeting Card',
    'nav.sendMsg': 'Send Message',
    'hero.badge': 'From my screen to your heart',
    'hero.greeting': 'Happy Birthday',
    'hero.subLine': '— from the phone screen that witnessed it all —',
    'hero.loveMeter': 'Love Meter',
    'hero.loveMeterSub': "Honestly it's been full the whole time 🤫",
    'hero.favoritePerson': 'My Favorite Person',
    'hero.daysTogether': 'Days Together',
    'hero.minsChat': 'Minutes Talked',
    'hero.viewStory': 'See Our Story',
    'hero.share': 'Share ✦',
    'hero.scrollHint': 'Scroll down',
    'map.eyebrow': 'Our Coordinates',
    'map.chatClockLabel': "This Is How Long We've Talked",
    'memories.eyebrow': 'Trail of Time',
    'memories.title': 'Conversations That<br/>Keep Going',
    'gallery.eyebrow': 'Camera Roll',
    'gallery.title': 'A Few Photos<br><span class="accent-script">I Have</span>',
    'gallery.hint': 'Tap once for a preview, tap twice for a closer look',
    'gallery.desc': "A few snapshots I've kept from our moments together, small but they mean a lot to me.",
    'wishes.eyebrow': "It's time",
    'wishes.title': 'Make a wish,<br/><span class="accent-script">Then Blow The Candles.</span>',
    'wishes.instr': 'Light the match, drag it to each candle until they\'re all lit, then blow into your mic to put them out!',
    'wishes.matchHint': 'Drag the match to a candle · or tap a candle after lighting it',
    'wishes.blowBtn': 'Blow the Candles (Use Mic)',
    'wishes.granted': 'Your wish has been granted ✦',
    'coupons.eyebrow': 'A Little Extra',
    'coupons.title': 'Coupon Book<br/><span class="accent-script">Chosen With Love</span>',
    'coupons.instr': 'Pick and open 1 special coupon you want the most below!',
    'coupons.vip1': 'VIP Coupon #1', 'coupons.vip2': 'VIP Coupon #2',
    'coupons.vip3': 'VIP Coupon #3', 'coupons.vip4': 'VIP Coupon #4',
    'coupons.tapOpen': 'Tap to open',
    'coupons.tapClaim': 'Tap to claim via WA',
    'coupons.claimed': '✔ SUCCESSFULLY CLAIMED',
    'coupons.unlockAll': 'Want to Unlock All Coupons? Request Access!',
    'gift.eyebrow': 'A Little Surprise',
    'gift.title': 'A Special Gift<br/><span class="accent-script">For You</span>',
    'gift.tapEnvelope': 'Tap this gift envelope to open the surprise!',
    'gift.tapForMore': '(Tap the image for more!)',
    'gift.desc': "A little surprise I've prepared just for you, hope it makes you smile all day.",
    'letter.eyebrow': 'A Little Letter For You',
    'letter.title': 'Open When<br/><span class="accent-script">You\'re Ready</span>',
    'letter.tapEnvelope': 'Tap the envelope to read the letter',
    'letter.desc': 'A few honest words from my heart that I wanted to share, take your time reading them.',
    'gcard.eyebrow': 'One Last Thing For You',
    'gcard.title': 'Digital<br/><span class="accent-script">Greeting Card</span>',
    'gcard.sub': 'You can keep this little card as a memento ✦',
    'gcard.anotherMsg': '↻ Another Message',
    'gcard.saveCard': '⬇ Save Card',
    'footer.eyebrow': 'Closing This Day',
    'footer.title': 'For<br/><span class="accent-script">Someone Special</span>',
    'footer.replyLabel': 'Write Me a Reply:',
    'footer.replyPh': 'Type your message or thoughts here...',
    'footer.sendBtn': 'Send Reply on WhatsApp',
    'footer.backToTop': '↑ Back to Top',
    'lightbox.swipeHint': '← Swipe to navigate →',
    'lightbox.back': '← Back',
    'letterModal.headLabel': 'A letter sent across the distance',
    'modal.confirm': 'Confirm', 'modal.cancel': 'Cancel', 'modal.continue': 'Continue',
    'bypass.title': 'Secret PIN Bypass',
    'bypass.sub': 'Enter the PIN to unlock this page directly',
    'bypass.open': 'Unlock',
    'toast.screenshotSaved': 'Screenshot saved! ✦',
    'toast.screenshotFailed': 'Failed to save screenshot, try again ✦',
    'toast.cardSaved': 'Greeting card saved! ✦',
    'toast.cardFailed': 'Failed to save the greeting card, try again ✦',
    'ask.oneCouponTitle': 'Only one coupon ✦',
    'ask.oneCouponMsg': 'You can only pick 1 special coupon! Unless you request special access to unlock them all.',
    'ask.understand': 'Got it',
    'ask.claimedTitle': 'Already claimed ✦',
    'ask.claimedMsg': 'The "{name}" coupon has already been claimed!',
    'ask.ok': 'OK',
    'ask.claimTitle': 'Claim coupon ✦',
    'ask.claimMsg': 'Want to claim the "{name}" coupon now via WhatsApp?',
    'ask.claim': 'Claim',
    'ask.unlockAllTitle': 'Unlock all coupons ✦',
    'ask.unlockAllMsg': 'Want to unlock all coupons at once? This will send a permission request via WhatsApp.',
    'ask.requestAccess': 'Request Access',
    'theme.specialBadge': '✦ SPECIAL',
    'theme.locked': 'Locked',
  }
};
let currentLang = localStorage.getItem('site-lang') || 'id';
function t(key){ return (I18N[currentLang] && I18N[currentLang][key]) || I18N.id[key] || key; }
window.t = t;
function applyLanguage(){
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    el.innerHTML = t(key);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const key = el.getAttribute('data-i18n-ph');
    el.setAttribute('placeholder', t(key));
  });
  document.querySelectorAll('[data-i18n-label]').forEach(el=>{
    const key = el.getAttribute('data-i18n-label');
    el.setAttribute('data-label', t(key));
  });
  document.querySelectorAll('.lang-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang===currentLang);
  });
}
function setLanguage(lang){
  if(lang!==currentLang){
    currentLang = lang;
    localStorage.setItem('site-lang', lang);
    applyLanguage();
  }
}
document.addEventListener('DOMContentLoaded', applyLanguage);

/* ═══════════════════════════════════════════════════════════
   CONFIG — semua data yang bisa diubah dikumpulkan di sini
   (nama, tanggal, nomor WA, isi pesan, dll) agar mudah diedit
   ke depannya tanpa perlu mengulik logika di bawah.
   ═══════════════════════════════════════════════════════════ */
const CONFIG = {
  name: 'Melisa',
  targetDate: '2026-09-21T00:00:00',      // waktu countdown berakhir
  milestoneStart: [2026, 6, 11],          // [tahun, bulan(0-idx), tanggal] mulai kenal → 11 Juli 2026
  // Catatan keamanan: PIN ini tersimpan sebagai teks biasa di JavaScript sehingga
  // masih bisa dilihat lewat "Inspect Element" oleh siapa pun yang membuka source code.
  // Ini bukan masalah untuk kado personal seperti ini, tapi jangan pakai pola yang sama
  // untuk sesuatu yang butuh keamanan sungguhan.
  pin: '110726',
  whatsapp: '6281461232770',
  music: {
    // Ganti "art" dengan nama file foto cover masing-masing kalau punya foto yang beda-beda per lagu
    bgm:    { title: 'Monokrom',          artist: 'Tulus',            art: 'musik.jpg' },
    secret: { title: 'Lagu Spesial Kita', artist: 'Lagu Spesial',     art: 'musik.jpg' },
    gallery:{ title: 'Lagu Galeri Kita',   artist: 'Kenangan Berdua', art: 'musik.jpg' },
  },
  couponNames: ['Bebas Req Nyanyi', 'Cium 100x', 'Temenin Begadang', 'Bebas Makan/Minum Apa Aja'],
  giftData: [
    { title:'YEAYY HAPPY BIRTHDAY SAYANGGG! ✨', img:'cute1.gif', soundId:'sound-cute1' },
    { title:'AAAAAAA GEMESS BANGETT SAYANGG 😊', img:'cute2.gif', soundId:'sound-cute2' },
    { title:'MUACHHH MUACHHH MUACHHH MUACHHH 💋', img:'cute3.gif', soundId:'sound-cute3' },
    { title:'TERIMAKASIII SAYANGGGG 🥰', img:'cute4.gif', soundId:'sound-cute4' },
  ],
  blowWishes: [
    "Semoga tahun ini jadi tahun paling bahagia buat kamu, ya! 🤍",
    "Apapun impianmu tahun ini, semoga semesta bantu wujudin ya!",
    "Make a wish! Dan semoga aku jadi bagian dari kebahagiaan itu ✨",
    "Harapanmu terkabul, dan semoga senyumanmu tidak pernah pudar ✦",
    "Semua hal baik dan tulus selalu menyertai langkahmu ke depan 🌸",
  ],
  lightboxMessages: [
    'Dari sapaan sederhana, ternyata bisa tumbuh jadi cerita yang aku simpan baik-baik. ✦',
    'Telepon pertama itu ternyata bukan sekadar telepon. Ada rasa nyaman yang tinggal lebih lama.',
    'Semakin sering cerita, semakin aku tahu betapa menyenangkannya punya kamu di ujung sana.',
    'Layar memang memisahkan kita, tapi setiap panggilan selalu terasa seperti pulang sebentar.',
    'Tawa kamu punya cara sendiri untuk mengubah hari yang biasa jadi jauh lebih ringan.',
    'Ada malam-malam panjang yang rasanya cepat sekali karena obrolan kita.',
    'Terima kasih sudah hadir apa adanya, tanpa perlu jadi siapa-siapa selain dirimu sendiri.',
    'Dan sampai sekarang, aku masih bersyukur untuk setiap jarak yang berhasil kita lewati bersama.',
  ],
  greetingMessages: [
    'Sejauh apapun jaraknya, obrolan kita selalu berhasil bikin harinya terasa lebih dekat. Selamat ulang tahun ✦',
    'Semoga umur baru ini membawa lebih banyak alasan untuk kita tertawa bareng lewat telepon. Happy birthday!',
    'Terima kasih sudah jadi suara yang paling nyaman untuk didengar setiap hari. Selamat ulang tahun, sayang.',
    'Semoga semua doa baik yang kamu titipkan diam-diam, semuanya dikabulkan tahun ini. Happy birthday ✨',
  ],
  sounds: {
    // Isi dengan path file audio custom kamu sendiri (mp3/ogg pendek & ringan) kalau punya, contoh: 'klik.mp3'.
    // Kalau dibiarkan null, situs otomatis pakai nada lembut yang di-generate langsung di browser (tidak perlu file/CDN apa pun).
    soft:  null,   // dipakai untuk: buka kupon, buka amplop surat
    chime: null,   // dipakai untuk: menyalakan lilin
    success: null, // dipakai untuk: berhasil meniup lilin
  },
};

/* ═══ Deteksi device low-end / hemat performa (Tahap 1) ═══
   Kalau device terdeteksi lemah (CPU core sedikit / RAM kecil / mode hemat data / reduced-motion),
   beberapa animasi berat (hujan, kupu-kupu ekstra, cursor sparkle) otomatis dikurangi/dimatikan. */
const PERF_LITE = (() => {
  const cores = navigator.hardwareConcurrency || 4;
  const mem = navigator.deviceMemory || 4;
  const saveData = navigator.connection && navigator.connection.saveData;
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return reduced || saveData || cores <= 3 || mem <= 2;
})();
if (PERF_LITE) document.documentElement.classList.add('perf-lite-html');
if (PERF_LITE && document.body) document.body.classList.add('perf-lite');

const TARGET_DATE = new Date(CONFIG.targetDate);
let secretClickCount = 0;

function updateCountdown() {
  const diff = TARGET_DATE - new Date();
  if (diff <= 0) { triggerUnlockSequence(); return; }
  const d = Math.floor(diff/86400000);
  const h = Math.floor((diff%86400000)/3600000);
  const m = Math.floor((diff%3600000)/60000);
  const s = Math.floor((diff%60000)/1000);
  setCD('cd-days', d); setCD('cd-hours', h); setCD('cd-mins', m); setCD('cd-secs', s);
}
function setCD(id, val) {
  const el = document.getElementById(id);
  const str = String(val).padStart(2,'0');
  if (el.textContent === str) return;
  if (PERF_LITE) { el.textContent = str; return; }
  el.classList.add('flip');
  setTimeout(()=>{ el.textContent = str; }, 250);
  setTimeout(()=>{ el.classList.remove('flip'); }, 500);
}
setInterval(updateCountdown, 1000);
updateCountdown();

function secretBypassClick() {
  secretClickCount++;
  if (secretClickCount >= 5) { secretClickCount = 0; triggerUnlockSequence(); }
}
let bypassResolve;
function openBypassModal() {
  document.getElementById('pbm-input').value = '';
  document.getElementById('pbm-error').textContent = '';
  document.getElementById('pin-bypass-modal').classList.add('open');
  setTimeout(() => document.getElementById('pbm-input').focus(), 300);
}
function closeBypassModal() {
  document.getElementById('pin-bypass-modal').classList.remove('open');
}
function submitBypassPin() {
  const input = document.getElementById('pbm-input');
  const p = input.value.trim();
  if (p === CONFIG.pin) {
    closeBypassModal();
    triggerUnlockSequence();
  } else {
    document.getElementById('pbm-error').textContent = 'PIN salah, coba lagi ya!';
    if ("vibrate" in navigator) navigator.vibrate([100,50,100]);
    input.value = '';
    input.focus();
  }
}
function triggerUnlockSequence() {
  const colors = [...getThemeColors(), '#c084fc'];
  confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 }, colors });
  setTimeout(() => confetti({ particleCount: 80, spread: 100, origin: { x: 0.2, y: 0.5 }, colors }), 300);
  setTimeout(() => confetti({ particleCount: 80, spread: 100, origin: { x: 0.8, y: 0.5 }, colors }), 500);
  setTimeout(() => confetti({ particleCount: 60, spread: 60, origin: { y: 0.3 }, colors }), 700);

  const cs = document.getElementById('countdown-screen');
  cs.style.opacity = '0'; cs.style.pointerEvents = 'none';
  setTimeout(() => {
    cs.style.display = 'none';
    const ts = document.getElementById('theme-screen');
    ts.style.opacity = '1'; ts.style.transform = 'scale(1)'; ts.style.pointerEvents = 'auto';
    setIntroStage(2);
  }, 800);
}

/* ═══ Kunci Tema Diamond Starlight — buka dengan mengucapkan (atau mengetik) "aku sayang sama kamu" ═══
   Kalau browser mendukung voice-to-text, mic yang dipakai. Kalau tidak (misalnya Safari/iPhone),
   otomatis fallback ke kolom ketik manual. Kuncinya BERULANG — begitu tema lain dipilih, tema
   Diamond terkunci lagi, jadi harus diucapkan/diketik ulang tiap mau balik ke tema ini.
   Catatan keamanan: sama seperti PIN, DIAMOND_BYPASS_KEY ini teks biasa yang kelihatan lewat
   "Inspect Element" — cukup buat kunci pribadi kamu sendiri, bukan proteksi sungguhan. */
const DIAMOND_PHRASE = 'aku sayang sama kamu';
const DIAMOND_BYPASS_KEY = 'MASTEN2026';
let diamondPendingCard = null;
let diamondRecognition = null;
let diamondUnlockedThisTime = false;

function normalizeSpeech(s){
  return (s||'').toLowerCase().normalize('NFKD').replace(/[^a-z\s]/g,'').replace(/\s+/g,' ').trim();
}
function relockDiamondCard(){
  diamondUnlockedThisTime = false;
  const dcard = document.querySelector('.theme-card[data-theme="diamond"]');
  if (dcard) dcard.classList.add('locked');
}

function openDiamondLockModal(card){
  diamondPendingCard = card;
  const m = document.getElementById('diamond-lock-modal');
  document.getElementById('dlm-error').textContent = '';
  document.getElementById('dlm-input').value = '';
  document.getElementById('dlm-status').textContent = 'Ketuk mic lalu ucapkan kalimatnya';
  document.getElementById('dlm-mic-btn').classList.remove('listening');
  document.getElementById('dlm-text-wrap').style.display = 'none';
  document.getElementById('dlm-submit-btn').style.display = 'none';
  document.getElementById('dlm-text-toggle').style.display = 'inline';
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    document.getElementById('dlm-mic-wrap').style.display = 'none';
    showDiamondTextFallback();
  } else {
    document.getElementById('dlm-mic-wrap').style.display = 'flex';
  }
  m.classList.add('open');
}
function closeDiamondLockModal(){
  document.getElementById('diamond-lock-modal').classList.remove('open');
  if (diamondRecognition) { try{ diamondRecognition.abort(); }catch(e){} }
}
function showDiamondTextFallback(){
  document.getElementById('dlm-text-wrap').style.display = 'block';
  document.getElementById('dlm-submit-btn').style.display = 'inline-block';
  document.getElementById('dlm-text-toggle').style.display = 'none';
  setTimeout(()=>document.getElementById('dlm-input').focus(), 100);
}
function startDiamondListen(){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const statusEl = document.getElementById('dlm-status');
  const btn = document.getElementById('dlm-mic-btn');
  if (!SR) { showDiamondTextFallback(); return; }
  try {
    diamondRecognition = new SR();
    diamondRecognition.lang = 'id-ID';
    diamondRecognition.continuous = false;
    diamondRecognition.interimResults = false;
    diamondRecognition.maxAlternatives = 3;
    btn.classList.add('listening');
    statusEl.textContent = 'Mendengarkan...';
    diamondRecognition.onresult = (e) => {
      let matched = false;
      for (let i = 0; i < e.results[0].length; i++) {
        if (normalizeSpeech(e.results[0][i].transcript) === normalizeSpeech(DIAMOND_PHRASE)) { matched = true; break; }
      }
      btn.classList.remove('listening');
      if (matched) {
        statusEl.textContent = 'Cocok! Membuka...';
        handleDiamondSuccess();
      } else {
        statusEl.textContent = 'Belum pas, coba lagi ya';
        if ("vibrate" in navigator) navigator.vibrate([80,40,80]);
      }
    };
    diamondRecognition.onerror = () => {
      btn.classList.remove('listening');
      statusEl.textContent = 'Mic gagal / ditolak — coba ketik manual aja';
      showDiamondTextFallback();
    };
    diamondRecognition.onend = () => btn.classList.remove('listening');
    diamondRecognition.start();
  } catch(e) {
    btn.classList.remove('listening');
    showDiamondTextFallback();
  }
}
function submitDiamondText(){
  const val = document.getElementById('dlm-input').value;
  const errEl = document.getElementById('dlm-error');
  if (normalizeSpeech(val) === normalizeSpeech(DIAMOND_PHRASE) || val.trim() === DIAMOND_BYPASS_KEY) {
    handleDiamondSuccess();
  } else {
    errEl.textContent = 'Belum pas, coba lagi ya';
    if ("vibrate" in navigator) navigator.vibrate([80,40,80]);
  }
}
function handleDiamondSuccess(){
  diamondUnlockedThisTime = true;
  const card = diamondPendingCard;
  if (card) card.classList.remove('locked');
  try{ playFx('success'); }catch(e){}
  setTimeout(()=>{
    closeDiamondLockModal();
    if (card) selectTheme('diamond', card);
  }, 500);
}

function selectTheme(theme, card) {
  if (theme === 'diamond' && !diamondUnlockedThisTime) { openDiamondLockModal(card); return; }
  if (theme !== 'diamond') relockDiamondCard();
  document.querySelectorAll('.theme-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  document.body.className = (document.body.className.replace(/\btheme-\S+/g,'') + ' theme-' + theme).trim();
  if (theme === 'diamond') triggerDiamondReveal(card);
}

/* Kartu meledak jadi serpihan kristal sesaat setelah diketuk (efek "pecah kristal"). */
function shatterCard(card){
  if (!card) return;
  card.classList.add('shattering');
  const rect = card.getBoundingClientRect();
  const shardCount = PERF_LITE ? 5 : 12;
  for (let i = 0; i < shardCount; i++){
    const s = document.createElement('span');
    s.className = 'diamond-shard';
    const sx = (Math.random() - 0.5) * rect.width * 2.1;
    const sy = (Math.random() - 0.5) * rect.height * 2.1 - 18;
    const sr = (Math.random() - 0.5) * 560;
    s.style.setProperty('--sx', sx + 'px');
    s.style.setProperty('--sy', sy + 'px');
    s.style.setProperty('--sr', sr + 'deg');
    s.style.left = (Math.random() * rect.width) + 'px';
    s.style.top = (Math.random() * rect.height) + 'px';
    card.appendChild(s);
    setTimeout(() => s.remove(), 800);
  }
  setTimeout(() => card.classList.remove('shattering'), 550);
}

let diamondRevealBusy = false;
function triggerDiamondReveal(card){
  if (diamondRevealBusy) return;
  diamondRevealBusy = true;

  shatterCard(card);

  const flash = document.getElementById('flash');
  if (flash) {
    flash.style.transition = 'opacity 0.12s ease';
    flash.style.opacity = '0.6';
    setTimeout(() => { flash.style.transition = 'opacity 0.7s ease'; flash.style.opacity = '0'; }, 130);
  }
  const dColors = ['#FFFFFF', '#C9F0FF', '#EAD9FF', '#FFD9EC', '#FFF3D6'];
  if (typeof confetti === 'function') {
    confetti({ particleCount: 110, spread: 100, origin: { y: 0.4 }, colors: dColors, shapes: ['star', 'circle'], scalar: 1.05, zIndex: 20600 });
    setTimeout(() => confetti({ particleCount: 60, spread: 110, origin: { x: 0.12, y: 0.5 }, colors: dColors, shapes: ['star'], zIndex: 20600 }), 200);
    setTimeout(() => confetti({ particleCount: 60, spread: 110, origin: { x: 0.88, y: 0.5 }, colors: dColors, shapes: ['star'], zIndex: 20600 }), 350);
  }

  setTimeout(() => {
    const t = document.getElementById('toast');
    if (t) {
      t.textContent = '✦ Diamond Starlight aktif — kilaunya beda dari yang lain ✦';
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 2600);
    }
  }, 900);

  // Bonus rahasia yang cuma muncul kalau tema ini yang dipilih — muncul belakangan, sebagai "hadiah" penutup momennya.
  setTimeout(() => {
    openDiamondSecretModal();
    diamondRevealBusy = false;
  }, 2500);
}
function openDiamondSecretModal(){
  const m = document.getElementById('diamond-secret-modal');
  if (!m || !document.body.classList.contains('theme-diamond')) return;
  m.classList.add('open');
  if (typeof playKilauSequence === 'function') playKilauSequence();
}
(function(){
  const closeBtn = document.getElementById('diamond-secret-close');
  const modal = document.getElementById('diamond-secret-modal');
  if (closeBtn) closeBtn.onclick = () => modal.classList.remove('open');
  if (modal) modal.onclick = (x) => { if (x.target === modal) modal.classList.remove('open'); };
})();

/* ============================================================
   KILAU YANG CUMA KAMU PUNYA — rasi Virgo -> morph jadi "Melisa"
   Diputar ulang dari awal setiap kali diamond-secret-modal dibuka.
   ============================================================ */
(function(){
  const NS = 'http://www.w3.org/2000/svg';
  // Titik rasi Virgo (disederhanakan, viewBox 300x400) dan urutan garis penghubungnya.
  const VIRGO_PTS = {
    beta:[60,90], eta:[110,65], gamma:[150,120], delta:[195,85], epsilon:[240,50],
    zeta:[165,190], iota:[175,260], kappa:[210,310], alpha:[185,370]
  };
  const VIRGO_EDGES = [
    ['beta','eta'],['eta','gamma'],['gamma','delta'],['delta','epsilon'],
    ['gamma','zeta'],['zeta','iota'],['iota','kappa'],['kappa','alpha']
  ];
  const edgePath = ([a,b]) => `M${VIRGO_PTS[a][0]},${VIRGO_PTS[a][1]} L${VIRGO_PTS[b][0]},${VIRGO_PTS[b][1]}`;
  const SRC_PATHS = VIRGO_EDGES.map(edgePath);
  // 8 goresan sederhana bergaya "garis konstelasi" yang bersama-sama membentuk tulisan MELISA.
  // Diposisikan di area atas-tengah kotak (y 75-145 dari viewBox 300x400), tiap huruf dikasih jarak.
  const WORD_PATHS = [
    'M33,145 L33,75 L54,120 L75,75 L75,145',                                   // M
    'M115,75 L89,75 L89,145 L115,145 L115,135 L97,135 L97,115 L112,115',       // E
    'M129,75 L129,145 L151,145',                                               // L
    'M170,78 L170,142',                                                        // I
    'M221,85 C207,70 189,78 191,95 C193,112 217,108 219,125 C221,142 203,150 189,135', // S
    'M235,145 L251,75 L267,145 L260,120 L243,120 L251,75'                      // A
  ];
  // Sinkronkan jumlah goresan sumber & tujuan (8 titik sumber -> 6 huruf tujuan, sisanya numpang di huruf terdekat)
  while (WORD_PATHS.length < SRC_PATHS.length) WORD_PATHS.push(WORD_PATHS[WORD_PATHS.length-1]);

  let rafId = null;
  function playKilauSequence(){
    const svg = document.getElementById('ds-svg');
    const overlay = document.getElementById('ds-overlay');
    if (!svg) return;
    if (rafId) cancelAnimationFrame(rafId);
    overlay.classList.remove('show');
    svg.innerHTML = '';

    // 1) Gambar titik-titik bintang + garis rasi (stroke-draw).
    const dots = [];
    Object.values(VIRGO_PTS).forEach(([x,y]) => {
      const c = document.createElementNS(NS,'circle');
      c.setAttribute('cx',x); c.setAttribute('cy',y); c.setAttribute('r',3.4);
      c.setAttribute('class','ds-dot'); c.style.opacity = '0';
      svg.appendChild(c); dots.push(c);
    });
    const lines = SRC_PATHS.map(d => {
      const p = document.createElementNS(NS,'path');
      p.setAttribute('d', d); p.setAttribute('class','ds-line');
      svg.appendChild(p);
      const len = p.getTotalLength();
      p.style.strokeDasharray = len; p.style.strokeDashoffset = len;
      return { el: p, len };
    });

    dots.forEach((d, i) => setTimeout(() => { d.style.transition = 'opacity .4s ease'; d.style.opacity = '1'; }, i * 140));
    lines.forEach((l, i) => {
      setTimeout(() => {
        l.el.style.transition = 'stroke-dashoffset .5s ease';
        l.el.style.strokeDashoffset = '0';
      }, 250 + i * 220);
    });

    // 2) Morph rasi -> tulisan "Melisa" (true path morph pakai flubber), mulai ~2.6s.
    setTimeout(() => {
      if (typeof flubber === 'undefined') { showKilauOverlay(overlay); return; }
      const wordEls = SRC_PATHS.map(() => {
        const p = document.createElementNS(NS,'path');
        p.setAttribute('class','ds-word');
        svg.appendChild(p);
        return p;
      });
      let interpolators;
      try {
        interpolators = flubber.interpolateAll(SRC_PATHS, WORD_PATHS, { maxSegmentLength: 4 });
      } catch(e) { showKilauOverlay(overlay); return; }
      lines.forEach(l => l.el.style.opacity = '0');
      dots.forEach(d => d.style.opacity = '0');

      const dur = 1500, stagger = 70;
      const start = performance.now();
      function tick(now){
        let allDone = true;
        interpolators.forEach((fn, i) => {
          const local = now - (start + i * stagger);
          const t = Math.max(0, Math.min(1, local / dur));
          if (t < 1) allDone = false;
          const eased = 1 - Math.pow(1 - t, 3);
          wordEls[i].setAttribute('d', fn(eased));
        });
        if (!allDone) rafId = requestAnimationFrame(tick);
        else setTimeout(() => showKilauOverlay(overlay), 500);
      }
      rafId = requestAnimationFrame(tick);
    }, 2600);
  }
  function showKilauOverlay(overlay){
    if (overlay) overlay.classList.add('show');
  }
  window.playKilauSequence = playKilauSequence;
})();

function getThemeColors() {
  const s = getComputedStyle(document.body);
  return [s.getPropertyValue('--g1').trim(), s.getPropertyValue('--g2').trim(), '#ffffff'];
}
function launchConfetti(colors, opts) {
  const c = colors || getThemeColors();
  confetti({ particleCount: 100, spread: 80, origin:{y:0.5}, colors:c, shapes:['star','circle'], ...(opts||{}) });
  setTimeout(()=>confetti({particleCount:60,spread:120,origin:{x:0.1,y:0.6},colors:c}),250);
  setTimeout(()=>confetti({particleCount:60,spread:120,origin:{x:0.9,y:0.6},colors:c}),400);
}

let globalRipsRef = [];
let isPlaying = false;
let isUsingSecretSong = false;
let isUsingGallerySong = false;
let musicExp = false;

const bgm = document.getElementById('bgm-audio');
const secretAudio = document.getElementById('secret-audio');
const galleryAudio = document.getElementById('gallery-audio');
const bubble = document.getElementById('music-bubble');
const toggleBtn = document.getElementById('spotify-toggle');
function syncPlayIcons(playing){
  // Update badge play/pause di bulatan collapsed + overlay di foto album expanded,
  // TANPA menimpa <img> foto album (dulu pakai toggleBtn.textContent yang malah menghapus fotonya).
  const icon = playing ? '❚❚' : '▶';
  const badge = document.getElementById('mb-play-badge');
  const overlay = document.getElementById('mp-play-icon');
  if (badge) badge.textContent = icon;
  if (overlay) overlay.textContent = icon;
  document.getElementById('mb-icon-photo') && document.getElementById('mb-icon-photo').classList.toggle('spinning', playing);
  document.getElementById('mp-art-img') && document.getElementById('mp-art-img').classList.toggle('spinning', playing);
}

const CORRECT = CONFIG.pin;
let pin = '';

document.getElementById('keypad').addEventListener('click', e => {
  const btn = e.target.closest('.pin-key');
  if (!btn) return;
  const v = btn.dataset.val;
  if (v === 'del') pin = pin.slice(0,-1);
  else if (pin.length < 6) pin += v;
  updatePins();
  if (pin.length === 6) {
    setTimeout(() => {
      if (pin === CORRECT) {
        unlockSite();
      } else {
        const pd = document.getElementById('pin-display');
        document.getElementById('pc-error').textContent = 'Kode salah. Coba lagi ya!';
        if ("vibrate" in navigator) navigator.vibrate([100,50,100]);
        pd.classList.add('pin-shake');
        setTimeout(() => pd.classList.remove('pin-shake'), 450);
        pin = ''; updatePins();
        setTimeout(() => document.getElementById('pc-error').textContent = '', 2400);
      }
    }, 180);
  }
});

function updatePins() {
  for (let i = 0; i < 6; i++) {
    const b = document.getElementById('pb'+i);
    b.classList.toggle('filled', i < pin.length);
    b.classList.toggle('dot', i < pin.length);
  }
}

/* ═══ TAHAP 4 — Sound Effect halus untuk interaksi penting ═══
   Kalau CONFIG.sounds diisi path file custom, itu yang dipakai. Kalau kosong (null),
   otomatis fallback ke nada lembut yang di-generate langsung di browser (Web Audio API),
   jadi tidak bergantung pada file atau CDN eksternal mana pun. */
let fxAudioCtx = null;
function getFxCtx(){
  if (!fxAudioCtx) fxAudioCtx = new (window.AudioContext||window.webkitAudioContext)();
  if (fxAudioCtx.state === 'suspended') fxAudioCtx.resume().catch(()=>{});
  return fxAudioCtx;
}
function playFx(type){
  const customUrl = CONFIG.sounds && CONFIG.sounds[type];
  if (customUrl) {
    const a = new Audio(customUrl); a.volume = 0.55; a.play().catch(()=>{});
    return;
  }
  try {
    const ctx = getFxCtx();
    const now = ctx.currentTime;
    const freqMap = { soft:[660,880], chime:[880,1175], success:[660,880,1320] };
    const freqs = freqMap[type] || [700];
    freqs.forEach((f,i) => {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.type = 'sine'; osc.frequency.value = f;
      const start = now + i*0.09;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.13, start+0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, start+0.4);
      osc.connect(gain).connect(ctx.destination);
      osc.start(start); osc.stop(start+0.45);
    });
  } catch(e) {}
}

function updateMilestone() {
  const start = new Date(...CONFIG.milestoneStart);
  const diff = Math.abs(new Date() - start);
  document.getElementById('days-count').textContent = Math.floor(diff/86400000);
  document.getElementById('hours-count').textContent = Math.floor(diff/60000).toLocaleString();
}
updateMilestone();
setInterval(updateMilestone, 60000);

/* ═══ TAHAP 3 — Jam Obrolan Real-Time (ticking tiap detik, bukan cuma dihitung sekali) ═══ */
function updateChatClock() {
  const start = new Date(...CONFIG.milestoneStart);
  const diff = Math.abs(new Date() - start);
  const d = Math.floor(diff/86400000);
  const h = Math.floor((diff%86400000)/3600000);
  const m = Math.floor((diff%3600000)/60000);
  const s = Math.floor((diff%60000)/1000);
  const set = (id,v) => { const el = document.getElementById(id); if (el) el.textContent = String(v); };
  set('cc-days', d); set('cc-hours', h); set('cc-mins', m); set('cc-secs', s);
}
updateChatClock();
setInterval(updateChatClock, 1000);

/* ═══ TAHAP 3 — Peta Rute Animasi (SVG line-drawing saat section muncul) ═══ */
(function(){
  const mapInner = document.querySelector('#map .map-section-inner');
  const pathEl = document.querySelector('#map .route-path');
  if (pathEl) {
    const len = Math.ceil(pathEl.getTotalLength());
    pathEl.style.strokeDasharray = len;
    pathEl.style.strokeDashoffset = len;
  }
  if (!mapInner) return;
  const mapObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        mapInner.classList.add('in-view');
        mapObs.unobserve(mapInner);
      }
    });
  }, { threshold: 0.35 });
  mapObs.observe(mapInner);
})();

function startLoveMeter() {
  const fill = document.getElementById('love-fill');
  const pct = document.getElementById('love-pct');
  if (!fill) return;
  requestAnimationFrame(() => { fill.style.width = '100%'; });
  let p = 0;
  const iv = setInterval(() => {
    p = Math.min(p + 2, 100);
    pct.textContent = p + '%';
    if (p >= 100) { clearInterval(iv); pct.textContent = '100% ♥'; }
  }, 28);
}

(function() {
  if (PERF_LITE) return; // cursor sparkle dimatikan total di device low-end (juga sudah di-hide lewat CSS .perf-lite)
  let lastT = 0;
  function createSparkle(x, y, burst) {
    if (!document.body.classList.contains('unlocked')) return;
    const count = burst ? 10 : 1;
    for (let i = 0; i < count; i++) {
      const s = document.createElement('div');
      s.className = 'cursor-sparkle';
      const size = Math.random() * (burst ? 9 : 6) + 3;
      const angle = Math.random() * Math.PI * 2;
      const vel = Math.random() * (burst ? 4 : 2) + 0.5;
      let vx = Math.cos(angle) * vel;
      let vy = Math.sin(angle) * vel - (burst ? 2 : 0.5);
      let lx = x + (Math.random()-0.5)*8;
      let ly = y + (Math.random()-0.5)*8;
      let life = 1;
      s.style.cssText = `width:${size}px;height:${size}px;left:${lx}px;top:${ly}px;`;
      document.body.appendChild(s);
      (function anim() {
        life -= burst ? 0.045 : 0.055;
        if (life <= 0) { s.remove(); return; }
        lx += vx; ly += vy; vy += 0.06;
        s.style.left = lx + 'px';
        s.style.top = ly + 'px';
        s.style.opacity = life * 0.9;
        s.style.transform = `scale(${life})`;
        requestAnimationFrame(anim);
      })();
    }
  }
  document.addEventListener('mousemove', e => {
    const now = Date.now();
    if (now - lastT < 45) return;
    lastT = now;
    createSparkle(e.clientX, e.clientY, false);
  });
  document.addEventListener('click', e => createSparkle(e.clientX, e.clientY, true));
})();

const HEART_CHARS = ['♥','❤','💕','💗','💖','✨','⭐','💫','🌸'];
let heartsInterval = null;

function startFloatingHearts() {
  if (heartsInterval) return;
  if (PERF_LITE) return; // dimatikan di device low-end (juga sudah di-hide lewat CSS .perf-lite)
  heartsInterval = setInterval(spawnHeart, 3000);
  spawnHeart();
}

function spawnHeart() {
  if (!document.body.classList.contains('unlocked')) return;
  const h = document.createElement('div');
  h.className = 'heart-float';
  h.textContent = HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)];
  const dur = 4 + Math.random() * 4;
  h.style.cssText = `
    left:${Math.random()*85+5}vw;
    bottom:${Math.random()*15+5}vh;
    font-size:${0.75 + Math.random()*0.8}rem;
    animation-duration:${dur}s;
    animation-delay:${Math.random()*0.5}s;
    z-index:6;
  `;
  document.body.appendChild(h);
  setTimeout(() => h.remove(), (dur + 1) * 1000);
}

(function() {
  const sectionIds = ['hero','map','memories','gallery','wishes','coupons','gift-section','letter','greeting-card-section','footer-section'];
  const labelKeys = ['nav.home','nav.map','nav.memories','nav.gallery','nav.wishes','nav.coupons','nav.gift','nav.letter','nav.greetingCard','nav.sendMsg'];
  const dotsEl = document.getElementById('side-dots');

  sectionIds.forEach((id, i) => {
    const dot = document.createElement('div');
    dot.className = 'sd-dot';
    dot.setAttribute('data-i18n-label', labelKeys[i]);
    dot.setAttribute('data-label', t(labelKeys[i]));
    dot.onclick = () => document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    dotsEl.appendChild(dot);
  });

  function updateDots() {
    const pos = scrollY + innerHeight * 0.45;
    sectionIds.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      const active = pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight;
      dotsEl.children[i].classList.toggle('active', active);
    });
  }
  window.addEventListener('scroll', updateDots, { passive: true });
  updateDots();
})();

let visualizerTimer = null;
function updateVisualizerBars() {
  const bars = document.querySelectorAll('#mp-visualizer .mp-bar');
  bars.forEach((b, i) => {
    b.classList.toggle('playing', isPlaying);
    b.style.setProperty('--bar-max', (8 + Math.random() * 22) + 'px');
    b.style.setProperty('--wave-speed', (.42 + Math.random() * .38) + 's');
    b.style.animationDelay = (-Math.random() * .7) + 's';
  });
  clearInterval(visualizerTimer);
  if (isPlaying) {
    visualizerTimer = setInterval(() => {
      bars.forEach(b => {
        b.style.setProperty('--bar-max', (7 + Math.random() * 23) + 'px');
      });
    }, 520);
  }
}

function sendWhatsAppMessage() {
  const msg = document.getElementById('wa-custom-msg').value.trim() || "Makasih banyak ya websitenya! Seru banget kejutan ulang tahunnya ✦";
  window.open('https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(msg), '_blank');
}

(function() {
  const cv = document.getElementById('stars-canvas');
  const cx = cv.getContext('2d');
  let stars = [], W, H;
  function resize() { W = cv.width = innerWidth; H = cv.height = innerHeight; }
  function init() {
    resize(); stars = [];
    const n = Math.floor(W * H / (PERF_LITE ? 2600 : 1200));
    for (let i = 0; i < n; i++) {
      stars.push({ x:Math.random()*W, y:Math.random()*H, r:Math.random()*1.2, a:Math.random(), spd:0.003+Math.random()*0.006, phase:Math.random()*Math.PI*2 });
    }
  }
  let t = 0;
  function draw() {
    cx.clearRect(0,0,W,H); t += 0.01;
    stars.forEach(s => {
      const alpha = s.a*(0.5+0.5*Math.sin(t*s.spd*10+s.phase));
      cx.beginPath(); cx.arc(s.x,s.y,s.r,0,Math.PI*2);
      cx.fillStyle = 'rgba(244,239,234,'+alpha+')'; cx.fill();
    });
    requestAnimationFrame(draw);
  }
  init();
  window.startStars = draw;
  window.addEventListener('resize', init);
})();

(function() {
  const cv = document.getElementById('rain-canvas');
  const cx = cv.getContext('2d');
  let W, H, drops = [], rips = [];
  globalRipsRef = rips;
  const r = (a,b) => Math.random()*(b-a)+a;
  function newDrop() {
    const layer = Math.random();
    if (layer < 0.33) return { x:r(0,W),y:r(-H,0),len:r(8,14),spd:r(2,3.5),a:r(0.04,0.11),w:r(0.4,0.7),blur:2 };
    if (layer < 0.66) return { x:r(0,W),y:r(-H,0),len:r(14,24),spd:r(4,6),a:r(0.11,0.24),w:r(0.7,1.1),blur:0 };
    return { x:r(0,W),y:r(-H,0),len:r(26,44),spd:r(7,11),a:r(0.26,0.44),w:r(1.1,1.8),blur:0 };
  }
  function init() {
    W=cv.width=innerWidth; H=cv.height=innerHeight; drops=[]; rips.length=0;
    const n=Math.floor(W*H/(PERF_LITE?24000:10000));
    for(let i=0;i<n;i++){let d=newDrop();d.y=r(0,H);drops.push(d);}
  }
  function draw() {
    cx.clearRect(0,0,W,H);
    const g2 = getComputedStyle(document.body).getPropertyValue('--g2').trim()||'#E2C96A';
    // Kalau tema Diamond Starlight aktif, hujan biasa berubah jadi hujan kristal berkilau (bukan cuma warna beda, bentuknya juga beda).
    const isDiamond = document.body.classList.contains('theme-diamond');
    drops.forEach(d=>{
      cx.save();
      if (isDiamond){
        cx.translate(d.x,d.y);
        cx.rotate(Math.PI/4);
        const size = Math.max(2.6, d.w*3.4);
        cx.globalAlpha = Math.min(1, d.a*1.7);
        cx.shadowColor = g2; cx.shadowBlur = 7;
        cx.fillStyle = '#fff';
        cx.fillRect(-size/2,-size/2,size,size);
      } else {
        if(d.blur>0) cx.filter='blur('+d.blur+'px)';
        cx.beginPath();cx.moveTo(d.x,d.y);cx.lineTo(d.x-1.2,d.y+d.len);
        cx.strokeStyle=g2;cx.globalAlpha=d.a;cx.lineWidth=d.w;cx.stroke();
      }
      cx.restore();
      d.y+=d.spd; d.x-=0.25;
      if(d.y>H-r(6,45)){rips.push({x:d.x,y:H-r(3,22),rv:0.9,mx:r(8,20),a:0.36,color:g2,is3D:false});d.y=-d.len;d.x=r(0,W);}
    });
    for(let i=rips.length-1;i>=0;i--){
      const rp=rips[i];
      cx.save();cx.beginPath();
      cx.ellipse(rp.x,rp.y,rp.rv,rp.rv*0.3,0,0,Math.PI*2);
      cx.strokeStyle=rp.color;cx.globalAlpha=rp.a;cx.lineWidth=rp.is3D?0.8:0.5;cx.stroke();cx.restore();
      rp.rv+=0.38;rp.a-=0.015;
      if(rp.a<=0||rp.rv>=rp.mx) rips.splice(i,1);
    }
    requestAnimationFrame(draw);
  }
  init();
  // Di device low-end, efek hujan (salah satu animasi terberat) langsung dimatikan sepenuhnya, bukan sekadar dikurangi.
  window.startRain = PERF_LITE ? function(){} : draw;
  window.addEventListener('resize', init);
})();

(function() {
  const total = PERF_LITE ? 3 : 7; // kurangi jumlah kupu-kupu di device low-end
  const bflies = [];
  for (let i = 0; i < total; i++) {
    const w = document.createElement('div');
    w.className = 'butterfly-wrapper';
    w.innerHTML = '<svg class="butterfly-svg" viewBox="0 0 100 100"><path d="M50 50 C 20 10, 0 20, 5 50 C 10 80, 40 90, 50 50 Z" fill="url(#gradTheme)" opacity="0.88"/><path d="M50 50 C 80 10, 100 20, 95 50 C 90 80, 60 90, 50 50 Z" fill="url(#gradTheme)" opacity="0.88"/><ellipse cx="50" cy="50" rx="3" ry="20" fill="#111"/><circle cx="50" cy="28" r="2.5" fill="#111"/><path d="M49 26 Q 40 15, 35 18" stroke="#111" stroke-width="1.5" fill="none"/><path d="M51 26 Q 60 15, 65 18" stroke="#111" stroke-width="1.5" fill="none"/></svg>';
    document.body.appendChild(w);
    const sh = document.createElement('div');
    sh.className = 'butterfly-shadow';
    document.body.appendChild(sh);
    const depth = 0.5 + Math.random() * 0.7;
    bflies.push({ el:w,sh:sh,x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-0.5)*1.0,vy:(Math.random()-0.5)*1.0,depth,rt:0 });
  }
  function animate() {
    const H = innerHeight;
    bflies.forEach(b => {
      b.x+=b.vx; b.y+=b.vy;
      b.vx+=(Math.random()-0.5)*0.14; b.vy+=(Math.random()-0.5)*0.14;
      const ms=1.2*b.depth,sp=Math.sqrt(b.vx*b.vx+b.vy*b.vy);
      if(sp>ms){b.vx=b.vx/sp*ms;b.vy=b.vy/sp*ms;}
      const m=65;
      if(b.x<-m)b.x=innerWidth+m;if(b.x>innerWidth+m)b.x=-m;
      if(b.y<-m)b.y=H+m;if(b.y>H+m)b.y=-m;
      const rot=Math.atan2(b.vy,b.vx)*(180/Math.PI)+90;
      b.el.style.left=b.x+'px';b.el.style.top=b.y+'px';
      b.el.style.zIndex=Math.floor(b.depth*10);
      b.el.style.transform='translate(-50%,-50%) scale('+b.depth+') rotate('+rot+'deg)';
      const shy=b.y+(70*b.depth);
      if(shy<H){
        b.sh.style.display='block';b.sh.style.left=b.x+'px';b.sh.style.top=shy+'px';
        const hf=Math.max(0.18,b.depth-(b.y/H)*0.38);
        b.sh.style.transform='translate(-50%,-50%) scale('+(hf*1.2)+','+(hf*0.35)+')';
        b.sh.style.opacity=''+(hf*0.28);
      } else { b.sh.style.display='none'; }
      b.rt++;
      if(b.y>H*0.65&&b.rt>100&&globalRipsRef){
        if(Math.random()<0.4){
          const g2=getComputedStyle(document.body).getPropertyValue('--g2').trim()||'#E2C96A';
          globalRipsRef.push({x:b.x,y:H-20,rv:0.8,mx:(10+Math.random()*12)*b.depth,a:0.28*b.depth,color:g2,is3D:true});
          b.rt=0;
        }
      }
    });
    requestAnimationFrame(animate);
  }
  window.startButterflies = animate;
})();

const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  const max = document.body.scrollHeight - innerHeight;
  document.getElementById('scroll-bar').style.width = (scrollY/max*100)+'%';
  const pos = scrollY + 200;
  document.querySelectorAll('section').forEach(sec => {
    if(pos>=sec.offsetTop && pos<sec.offsetTop+sec.offsetHeight){
      const id='#'+sec.id;
      navLinks.forEach(l => {
        const active = l.getAttribute('href') === id;
        if(active && !l.classList.contains('active')){
          navLinks.forEach(x=>x.classList.remove('active'));
          l.classList.add('active');
          l.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});
        }
      });
    }
  });
},{passive:true});

bubble.addEventListener('click', function() {
  if(!musicExp){this.classList.add('expanded');musicExp=true;}
});
document.addEventListener('click', e => {
  if(musicExp && !document.getElementById('music-player').contains(e.target)){
    bubble.classList.remove('expanded'); musicExp=false;
  }
});

function getCurrentAudio() {
  return isUsingGallerySong ? galleryAudio : (isUsingSecretSong ? secretAudio : bgm);
}

toggleBtn.addEventListener('click', e => {
  e.stopPropagation();
  const a = getCurrentAudio();
  if(isPlaying){ a.pause(); isPlaying=false; syncPlayIcons(false); }
  else { a.play().then(()=>{isPlaying=true;syncPlayIcons(true);updateVisualizerBars();}).catch(()=>{}); }
  updateVisualizerBars();
});

setInterval(() => {
  const a = getCurrentAudio();
  if(isPlaying && !isNaN(a.duration)){
    document.getElementById('current-time').textContent = fmt(a.currentTime);
    document.getElementById('total-duration').textContent = fmt(a.duration);
    document.getElementById('progress-bar-fill').style.width = (a.currentTime/a.duration*100)+'%';
  }
}, 300);

document.getElementById('progress-bar-bg').addEventListener('click', e => {
  e.stopPropagation();
  const a = getCurrentAudio();
  if(!isNaN(a.duration)){
    a.currentTime = ((e.clientX-e.currentTarget.getBoundingClientRect().left)/e.currentTarget.offsetWidth)*a.duration;
  }
});

function fmt(s){ const m=Math.floor(s/60),sc=Math.floor(s%60); return m+':'+(sc<10?'0':'')+sc; }

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('on'); });
}, { threshold: 0.08 });
document.querySelectorAll('.fi').forEach(el => {
  if(el.closest('#hero')) el.classList.add('on');
  else obs.observe(el);
  // Konten selalu ditangani observer per-elemen ini (independen dari chapterObs di bawah),
  // supaya reveal-nya konsisten & tidak nyangkut blur di section mana pun.
});

/* ═══════════ TAHAP 2 — Chapter Reveal (storytelling) ═══════════
   Tiap section (selain Hero) diberi nomor babak besar ("01","02", dst) yang muncul
   sesaat sebelum section-nya sendiri fade+scale ke kondisi penuh. Ini lapisan efek
   TAMBAHAN saja — tidak menyentuh/menahan reveal konten .fi sama sekali. */
(function(){
  const chapterSections = Array.from(document.querySelectorAll('.page section')).filter(s => s.id !== 'hero');
  chapterSections.forEach((sec, idx) => {
    const num = document.createElement('div');
    num.className = 'chapter-num';
    num.textContent = String(idx+1).padStart(2,'0');
    num.setAttribute('aria-hidden','true');
    sec.insertBefore(num, sec.firstChild);
  });
  const chapterObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const sec = e.target;
      sec.classList.add('chapter-in');
      const revealDelay = PERF_LITE ? 0 : 550;
      setTimeout(() => { sec.classList.add('chapter-revealed'); }, revealDelay);
      chapterObs.unobserve(sec);
    });
  }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
  chapterSections.forEach(sec => chapterObs.observe(sec));
})();

const photos = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img7.jpg','img8.jpg'];
let currentLBIndex = 0;

function prevLB() { renderLB(currentLBIndex-1); }
function nextLB() { renderLB(currentLBIndex+1); }

(function() {
  const lb = document.getElementById('lightbox');
  let touchStartX = 0, touchStartY = 0;
  lb.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });
  lb.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) nextLB();
      else prevLB();
    }
  }, { passive: true });
})();

document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('open')) return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextLB();
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   prevLB();
  if (e.key === 'Escape') closeLB();
});

const giftData = CONFIG.giftData;
let gIdx = 0;
function stopAllSounds(){ giftData.forEach(g=>{const s=document.getElementById(g.soundId);if(s){s.pause();s.currentTime=0;}}); }
function playSound(i){ stopAllSounds();const s=document.getElementById(giftData[i].soundId);if(s)s.play().catch(()=>{}); }
function openGift(){ document.getElementById('gift-before').style.display='none';document.getElementById('gift-after').style.display='block';playSound(gIdx); }
function changeGif(e){ e.stopPropagation();gIdx=(gIdx+1)%giftData.length;document.getElementById('gift-rtitle').textContent=giftData[gIdx].title;document.getElementById('gif-img').src=giftData[gIdx].img;playSound(gIdx); }

const matchEl = document.getElementById('match');
let dragging = false, sx = 0, sy = 0, lit = 0, micListening = false;

function lightCandle(idx) {
  const fl = document.getElementById('flame'+idx);
  if (fl.style.display === 'block') return;
  fl.style.display = 'block';
  const candle = fl.closest('.candle');
  if (candle) candle.classList.add('lit-up');
  playFx('chime');
  lit++;
  const bb = document.getElementById('blow-btn');
  const ht = document.getElementById('match-hint');
  bb.style.opacity = Math.min(lit * 0.2, 1);
  if (lit >= 5) {
    bb.style.pointerEvents = 'auto';
    ht.textContent = 'Semua lilin menyala! Sekarang tiup! 🕯️';
    setTimeout(() => {
      const ma = document.getElementById('matchbox-area');
      ma.style.opacity = '0'; ma.style.pointerEvents = 'none';
      setTimeout(() => ma.style.display = 'none', 500);
    }, 400);
  }
}

matchEl.addEventListener('pointerdown', e => {
  dragging = true;
  matchEl.setPointerCapture(e.pointerId);
  matchEl.classList.add('lit');
  sx = e.clientX; sy = e.clientY;
});

matchEl.addEventListener('pointermove', e => {
  if(!dragging) return;
  matchEl.style.transform = 'translate('+(e.clientX-sx)+'px,'+(e.clientY-sy)+'px)';
  document.querySelectorAll('.candle').forEach((c, idx) => {
    const fl = document.getElementById('flame'+idx);
    if(fl.style.display !== 'block'){
      const cr = c.getBoundingClientRect();
      const mr = matchEl.getBoundingClientRect();
      if(mr.left<cr.right && mr.right>cr.left && mr.top<cr.bottom && mr.bottom>cr.top){
        lightCandle(idx);
      }
    }
  });
});

function resetMatch(){ dragging=false; matchEl.classList.remove('lit'); matchEl.style.transform='translate(0,0)'; }
matchEl.addEventListener('pointerup', resetMatch);
matchEl.addEventListener('pointercancel', resetMatch);

document.querySelectorAll('.candle').forEach((c, idx) => {
  c.classList.add('tappable-ready');
  c.addEventListener('click', () => {
    if (matchEl.classList.contains('lit')) {
      lightCandle(idx);
    }
  });
});

function initMicAndBlow() {
  const statusEl = document.getElementById('mic-status');
  const btnEl = document.getElementById('blow-btn');
  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){ blowCandles(); return; }
  statusEl.textContent = "Mengizinkan mic... Silakan tiup HP-mu!";
  btnEl.style.display = 'none';
  navigator.mediaDevices.getUserMedia({ audio:true, video:false })
    .then(stream => {
      const ac = new(window.AudioContext||window.webkitAudioContext)();
      const analyser = ac.createAnalyser();
      ac.createMediaStreamSource(stream).connect(analyser);
      analyser.fftSize = 256;
      const buf = new Uint8Array(analyser.frequencyBinCount);
      micListening = true;
      statusEl.textContent = "🎤 Silakan tiup lilinnya sekarang!";
      function check() {
        if(!micListening) return;
        analyser.getByteFrequencyData(buf);
        const avg = buf.reduce((a,b)=>a+b,0)/buf.length;
        if(avg>20){ micListening=false; stream.getTracks().forEach(t=>t.stop()); statusEl.textContent=""; blowCandles(); }
        else requestAnimationFrame(check);
      }
      check();
    })
    .catch(() => { statusEl.textContent=""; blowCandles(); });
}

function blowCandles() {
  document.querySelectorAll('.candle-flame').forEach(f => f.classList.add('extinguished'));
  document.querySelectorAll('.smoke-wrap').forEach(w => w.classList.add('active'));
  document.getElementById('blow-btn').style.display = 'none';
  document.getElementById('mic-status').style.display = 'none';
  playFx('success');
  
  const chosenWish = CONFIG.blowWishes[Math.floor(Math.random() * CONFIG.blowWishes.length)];
  const wishEl = document.getElementById('wish-granted');
  wishEl.textContent = chosenWish;
  wishEl.classList.add('on');
  
  setTimeout(() => launchConfetti(), 200);
}

function setIntroStage(n){
  const wrap=document.getElementById('intro-progress');
  if(!wrap) return;
  wrap.classList.add('show');
  wrap.querySelectorAll('.ip-dot').forEach(d=>{
    const s=+d.dataset.stage;
    d.classList.toggle('active', s===n);
    d.classList.toggle('done', s<n);
  });
}
function hideIntroProgress(){
  const wrap=document.getElementById('intro-progress');
  if(wrap) wrap.classList.remove('show');
}
function spawnShootingStar(){
  const layer=document.getElementById('shooting-star-layer');
  if(!layer) return;
  const star=document.createElement('div');
  star.className='shooting-star go';
  star.style.top=(8+Math.random()*30)+'%';
  star.style.left=(-8-Math.random()*6)+'%';
  layer.appendChild(star);
  star.addEventListener('animationend', ()=>star.remove());
}
(function(){
  const pl=document.getElementById('pre-loader');
  setTimeout(()=>{ if(pl) pl.classList.add('hide'); }, 450);
  const l=document.getElementById('intro-loader');
  for(let i=0;i<20;i++){const x=document.createElement('span');x.className='intro-star';const a=Math.random()*Math.PI*2,d=70+Math.random()*160;x.style.setProperty('--sx',Math.cos(a)*d+'px');x.style.setProperty('--sy',Math.sin(a)*d+'px');x.style.animationDelay=(.4+Math.random()*1.6)+'s';l.appendChild(x)}
  // Wordmark math: M starts dead-center (--m-shift defaults to 0px, untouched until reveal).
  // At reveal time we shift M left by (gap+textWidth)/2 and slide "ASTEN" in from the right by
  // (monoWidth+gap)/2 — this keeps the finished word "MASTEN" perfectly centered on screen
  // regardless of text/font width. Values are computed but NOT applied until t=3000ms, so the
  // CSS transition doesn't fire early and M stays put at dead-center until the reveal moment.
  const mono=document.getElementById('intro-mono-anchor'), rest=document.getElementById('intro-wordmark-rest');
  function computeShift(){
    // monoW is the SVG box (112px), but the drawn "M" glyph sits inset inside that box with
    // ~24.5px of empty space on its right edge — so gap is set negative to pull "ASTEN" in
    // closer, landing the visible glyph-to-letter gap at roughly 8-10px instead of ~30px+.
    const monoW=112, gap=-14, textW=(rest&&rest.offsetWidth)||0;
    return {m:-(gap+textW)/2, t:(monoW+gap)/2};
  }
  // Cinematic curtain: monogram draws itself (~.4s-2s), glows, then at ~3s the "M" expands into
  // "MASTEN" (M slides left, ASTEN fades in) as curtains part (~3s-4.05s) to reveal the page.
  if(!PERF_LITE){ setTimeout(()=>spawnShootingStar(),1100); setTimeout(()=>spawnShootingStar(),2300); }
  setTimeout(()=>{
    if(!mono||!rest) return;
    const s=computeShift();
    mono.style.setProperty('--m-shift',s.m+'px');
    rest.style.setProperty('--text-shift',s.t+'px');
    rest.classList.add('reveal');
    try{ playFx('chime'); }catch(e){}
  },3700);
  setTimeout(()=>{
    l.classList.add('hide');
    const cs=document.getElementById('countdown-screen');
    if(cs) cs.classList.add('reveal');
    setIntroStage(1);
  },5100);
})();
function scheduleCountdownShootingStar(){
  if(document.body.classList.contains('unlocked') || PERF_LITE) return;
  const cs=document.getElementById('countdown-screen');
  if(cs && cs.style.display!=='none' && getComputedStyle(cs).display!=='none') spawnShootingStar();
  setTimeout(scheduleCountdownShootingStar, 8000+Math.random()*6000);
}
setTimeout(scheduleCountdownShootingStar, 6000);
function proceedToPin(){const t=document.getElementById('theme-screen'),p=document.getElementById('passcode-screen');p.style.display='flex';p.style.opacity='0';p.style.transform='scale(1.03)';p.style.pointerEvents='auto';setTimeout(()=>{p.style.opacity='1';p.style.transform='scale(1)'},150);setTimeout(()=>{t.style.opacity='0';t.style.transform='scale(0.97)'},300);setTimeout(()=>t.style.display='none',900);setIntroStage(3)}
function unlockSite(){const p=document.getElementById('passcode-screen'),n=document.getElementById('name-intro');p.style.opacity='0';p.style.transform='scale(0.97)';p.style.pointerEvents='none';setTimeout(()=>{p.style.display='none';n.classList.add('show');setIntroStage(4);setTimeout(()=>{const c=getThemeColors();confetti({particleCount:180,spread:100,origin:{y:.5},colors:c});try{ playFx('success'); }catch(e){}},1800);setTimeout(()=>{n.style.opacity='0';document.body.classList.add('unlocked');hideIntroProgress();document.getElementById('music-player').style.display='block';bgm.volume=1;bgm.play().then(()=>{isPlaying=true;syncPlayIcons(true);updateVisualizerBars()}).catch(()=>{});if(window.startStars)requestAnimationFrame(window.startStars);if(window.startRain)requestAnimationFrame(window.startRain);if(window.startButterflies)requestAnimationFrame(window.startButterflies);setTimeout(()=>{n.classList.remove('show');n.style.opacity='';document.getElementById('side-dots').classList.add('show');startLoveMeter();startFloatingHearts()},700)},4300)},600)}

let fadeTimer2;
function switchMusicSmooth(next,title,artist,art){
  const cur=getCurrentAudio();if(cur===next)return;clearInterval(fadeTimer2);
  const playing=isPlaying;
  document.getElementById('mp-title-txt').textContent=title;
  document.getElementById('mp-artist-txt').textContent=artist;
  if(art){
    const mbImg=document.getElementById('mb-icon-img'), mpImg=document.getElementById('mp-art-img');
    if(mbImg) mbImg.src=art;
    if(mpImg) mpImg.src=art;
  }
  // True crossfade: lagu lama meredup DAN lagu baru menguat secara bersamaan,
  // jadi tidak ada jeda kosong atau lonjakan volume di tengah transisi.
  next.currentTime=0; next.volume=0;
  if(playing) next.play().catch(()=>{});
  const startVol=cur.volume; const steps=26; let i=0;
  fadeTimer2=setInterval(()=>{
    i++;
    const t=i/steps;
    cur.volume=Math.max(0,startVol*(1-t));
    next.volume=Math.min(1,t);
    if(i>=steps){
      clearInterval(fadeTimer2);
      cur.pause(); cur.volume=startVol||1;
      next.volume=1;
    }
  },35);
  isPlaying=playing;isUsingGallerySong=next===galleryAudio;isUsingSecretSong=next===secretAudio;
  syncPlayIcons(playing);
}

function buildThumbs(){const t=document.getElementById('lb-thumbs');if(!t)return;t.innerHTML=photos.map((p,i)=>`<img class="lb-thumb" src="${p}" alt="Thumbnail ${i+1}" onclick="event.stopPropagation();renderLB(${i})">`).join('')}
const messages = CONFIG.lightboxMessages;

function renderLB(i){
  currentLBIndex=(i+photos.length)%photos.length;
  document.getElementById('lb-flip')?.classList.remove('message-open');
  document.getElementById('lb-content').innerHTML='<img src="'+photos[currentLBIndex]+'" alt="Foto '+(currentLBIndex+1)+'">';
  document.getElementById('lb-counter').textContent=(currentLBIndex+1)+' / '+photos.length;
  document.querySelectorAll('.lb-thumb').forEach((x,n)=>x.classList.toggle('active',n===currentLBIndex));
  const im=new Image();
  im.onload=()=>{
    const c=document.createElement('canvas'),x=c.getContext('2d');
    c.width=c.height=20;x.drawImage(im,0,0,20,20);let R=0,G=0,B=0;
    [[2,2],[17,2],[2,17],[17,17],[10,10]].forEach(q=>{const d=x.getImageData(q[0],q[1],1,1).data;R+=d[0];G+=d[1];B+=d[2]});
    document.getElementById('lb-bg-color').style.backgroundColor=`rgb(${R/5},${G/5},${B/5})`;
  };
  im.src=photos[currentLBIndex];
}

function openLB(i){renderLB(i);buildThumbs();document.getElementById('lightbox').classList.add('open');document.body.style.overflow='hidden';switchMusicSmooth(galleryAudio,CONFIG.music.gallery.title,CONFIG.music.gallery.artist,CONFIG.music.gallery.art)}
function closeLB(){document.getElementById('lightbox').classList.remove('open');document.body.style.overflow='';switchMusicSmooth(bgm,CONFIG.music.bgm.title,CONFIG.music.bgm.artist,CONFIG.music.bgm.art)}

/* ═══ SCRIPT GALERI HALAMAN DEPAN: WAJIB 2 KALI KLIK/TAP ═══ */
(function(){
  const grid = document.querySelector('#gallery .gal-grid');
  if (!grid) return;
  // Device tanpa hover asli (HP/tablet) pakai class .touch-active yang dikontrol
  // penuh oleh JS, supaya efek "hover" selalu bisa dilepas (tidak nyangkut).
  const isTouch = window.matchMedia && window.matchMedia('(hover: none)').matches;

  function clearActive(){ grid.querySelectorAll('.gal-item.touch-active').forEach(x=>x.classList.remove('touch-active')); }

  grid.querySelectorAll('.gal-item').forEach(item => {
    const i = Number(item.dataset.photo);
    let clickTimeout = null;
    
    item.addEventListener('click', e => {
      e.stopPropagation();
      if (clickTimeout !== null) {
        clearTimeout(clickTimeout);
        clickTimeout = null;
        if (isTouch) clearActive();
        openLB(i); // Membuka lightbox hanya saat 2 kali klik/tap cepat
      } else {
        clickTimeout = setTimeout(() => {
          clickTimeout = null;
          if (isTouch) {
            // Tap 1 kali di HP: toggle preview foto ini, lepas preview foto lain
            const wasActive = item.classList.contains('touch-active');
            clearActive();
            if (!wasActive) item.classList.add('touch-active');
          }
          // Di desktop, klik 1 kali diabaikan (hanya mentrigger hover CSS)
        }, 350);
      }
    });
  });

  // Tap di luar foto galeri (HP) → lepas semua preview yang lagi aktif
  if (isTouch) {
    document.addEventListener('click', e => {
      if (!e.target.closest('#gallery .gal-item')) clearActive();
    });
  }
})();

/* ═══ SCRIPT LIGHTBOX PESAN RAHASIA: WAJIB 2 KALI KLIK/TAP ═══ */
(function(){
  const c = document.getElementById('lb-content');
  if(!c) return;
  let lbClickTimeout = null;

  c.addEventListener('click', e => {
    e.stopPropagation();
    if (lbClickTimeout !== null) {
      clearTimeout(lbClickTimeout);
      lbClickTimeout = null;
      toggleLBMessage(e); // Membuka pesan rahasia saat 2 kali klik/tap cepat
    } else {
      lbClickTimeout = setTimeout(() => {
        lbClickTimeout = null;
        // Klik 1 kali di lightbox diabaikan
      }, 350);
    }
  });
})();

let lbType;
function toggleLBMessage(e){
  e.stopPropagation();
  const f=document.getElementById('lb-flip');
  if(f.classList.toggle('message-open')){
    const el=document.getElementById('lb-message-text'),m=messages[currentLBIndex];
    el.textContent='';let i=0;clearInterval(lbType);
    lbType=setInterval(()=>{el.textContent=m.slice(0,++i);if(i>=m.length)clearInterval(lbType)},40)
  }else clearInterval(lbType);
}

function typeLetter(){
  const els=[document.querySelector('.ltr-sal'),...document.querySelectorAll('.ltr-text p'),document.querySelector('.ltr-sig')];
  els.forEach(e=>{e.dataset.full=e.textContent;e.textContent=''});
  let n=0;
  function go(){
    if(n>=els.length)return;
    const e=els[n++],txt=e.dataset.full,cur=document.createElement('span');
    cur.className='ltr-typing-cursor';cur.textContent='|';e.appendChild(cur);let i=0;
    const iv=setInterval(()=>{cur.before(document.createTextNode(txt[i++]||''));if(i>=txt.length){cur.remove();clearInterval(iv);setTimeout(go,180)}},35)
  }
  go();
}

function openLetter(){document.getElementById('env-container').classList.add('opening');playFx('soft');setTimeout(()=>{document.getElementById('letter-modal').classList.add('open');document.body.style.overflow='hidden';switchMusicSmooth(secretAudio,CONFIG.music.secret.title,CONFIG.music.secret.artist,CONFIG.music.secret.art);typeLetter()},380)}
function closeLetter(){document.getElementById('letter-modal').classList.remove('open');document.getElementById('env-container').classList.remove('opening');document.body.style.overflow='';switchMusicSmooth(bgm,CONFIG.music.bgm.title,CONFIG.music.bgm.artist,CONFIG.music.bgm.art)}

let customResolve;
function askModal(title,msg,ok='Lanjut'){return new Promise(r=>{customResolve=r;document.getElementById('custom-modal-title').textContent=title;document.getElementById('custom-modal-msg').textContent=msg;document.getElementById('custom-modal-ok').textContent=ok;document.getElementById('custom-modal').classList.add('open')})}
document.getElementById('custom-modal-ok').onclick=()=>{document.getElementById('custom-modal').classList.remove('open');customResolve?.(true);customResolve=null};
document.getElementById('custom-modal-cancel').onclick=()=>{document.getElementById('custom-modal').classList.remove('open');customResolve?.(false);customResolve=null};

const couponNames = CONFIG.couponNames;
let selectedCouponIndex = null, allCouponsUnlocked = false;

function initCouponFlips(){
  document.querySelectorAll('.coupon-card').forEach(card=>{
    if(card.parentElement.classList.contains('c-front'))return;
    const wrap=document.createElement('div'),inner=document.createElement('div'),front=document.createElement('div'),back=document.createElement('div');
    wrap.className='coupon-flip';wrap.id='coupon-flip-'+card.id.split('-')[1];
    inner.className='coupon-flip-inner';front.className='c-front';back.className='c-back';
    card.replaceWith(wrap);front.appendChild(card);
    const clone=card.cloneNode(true);clone.classList.remove('mystery');back.appendChild(clone);
    inner.append(front,back);wrap.appendChild(inner);
  })
}
initCouponFlips();

async function revealCoupon(i){
  const w=document.getElementById('coupon-flip-'+i);
  if(selectedCouponIndex!==null&&!allCouponsUnlocked&&selectedCouponIndex!==i&&!w.classList.contains('flipped')){
    await askModal(t('ask.oneCouponTitle'),t('ask.oneCouponMsg'),t('ask.understand'));
    return;
  }
  if(!w.classList.contains('flipped')){
    w.classList.add('flipped');selectedCouponIndex=i;playFx('soft');
    if(!allCouponsUnlocked)for(let j=0;j<4;j++)if(j!==i)document.getElementById('coupon-flip-'+j).classList.add('locked');
    return;
  }
  const card=w.querySelector('.c-front .coupon-card');
  if(card.classList.contains('claimed')){
    await askModal(t('ask.claimedTitle'),t('ask.claimedMsg').replace('{name}',couponNames[i]),t('ask.ok'));
    return;
  }
  if(await askModal(t('ask.claimTitle'),t('ask.claimMsg').replace('{name}',couponNames[i]),t('ask.claim'))){
    card.classList.add('claimed');
    document.getElementById('stat-'+i).textContent=t('coupons.claimed');
    window.open('https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent('Haloo! Aku mau klaim kupon web ulang tahunku: *'+couponNames[i]+'* ✦'),'_blank');
  }
}

async function requestUnlockAll(){
  if(await askModal(t('ask.unlockAllTitle'),t('ask.unlockAllMsg'),t('ask.requestAccess'))){
    allCouponsUnlocked=true;
    document.querySelectorAll('.coupon-flip').forEach(x=>x.classList.remove('locked'));
    window.open('https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent('Haloo! Aku mau minta izin buat buka SEMUA kupon misteri di web ulang tahunku dong! Boleh ya? ✦'),'_blank');
  }
}

(function(){
  document.querySelectorAll('.page section').forEach(sec=>{
    const w=document.createElement('div');
    w.className='reaction-wrap';
    w.innerHTML='<button class="reaction-plus">+</button><span class="reaction-count"></span><div class="reaction-menu"><button class="reaction-btn">❤️</button><button class="reaction-btn">🥹</button><button class="reaction-btn">😂</button><button class="reaction-btn">✨</button></div>';
    sec.appendChild(w);
    let n=+sessionStorage.getItem('rx-'+sec.id)||0,c=w.querySelector('.reaction-count');
    if(n)c.textContent=n,c.classList.add('show');
    w.querySelector('.reaction-plus').onclick=e=>{e.stopPropagation();w.classList.toggle('open')};
    w.querySelectorAll('.reaction-btn').forEach(b=>b.onclick=e=>{
      n++;sessionStorage.setItem('rx-'+sec.id,n);c.textContent=n;c.classList.add('show');
      const f=document.createElement('span');f.className='reaction-float';f.textContent=b.textContent;
      f.style.left=e.clientX+'px';f.style.top=e.clientY+'px';document.body.appendChild(f);
      setTimeout(()=>f.remove(),1000);w.classList.remove('open')
    })
  })
})();

(function(){
  let n=0,t;
  const e=document.getElementById('favorite-person'),m=document.getElementById('secret-modal');
  function openSecret(){
    m.classList.add('open');
    if (document.body.classList.contains('theme-diamond') && typeof playUntukKamuSequence === 'function') {
      playUntukKamuSequence();
    }
  }
  e.onclick=x=>{x.preventDefault();n++;clearTimeout(t);t=setTimeout(()=>n=0,1800);if(n>=7){n=0;document.getElementById('hero').classList.add('shake-soft');setTimeout(openSecret,550)}};
  document.getElementById('secret-close').onclick=()=>m.classList.remove('open');
  m.onclick=x=>{if(x.target===m)m.classList.remove('open')}
})();

/* ============================================================
   UNTUK KAMU (tema Diamond Starlight) — kabut -> partikel random
   -> berkumpul jadi siluet hati -> foto muncul -> teks pesan.
   Diputar ulang dari awal setiap kali secret-modal dibuka.
   ============================================================ */
(function(){
  let raf = null;
  function heartPoint(t){
    // Kurva hati parametrik klasik (t: 0..2π)
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13*Math.cos(t) - 5*Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t);
    return [x, -y]; // flip supaya lancip hati mengarah ke bawah di kanvas (y ke bawah)
  }
  function buildHeartTargets(cx, cy, scale, count){
    const pts = [];
    const layers = [1, 0.8, 0.62, 0.44, 0.28, 0.14];
    const perLayer = Math.ceil(count / layers.length);
    layers.forEach(layerScale => {
      for (let i = 0; i < perLayer; i++){
        const t = (i / perLayer) * Math.PI * 2;
        const [hx, hy] = heartPoint(t);
        pts.push([cx + hx * scale * layerScale, cy + hy * scale * layerScale]);
      }
    });
    return pts;
  }

  function playUntukKamuSequence(){
    const stage = document.getElementById('sm-stage');
    const canvas = document.getElementById('sm-canvas');
    const photoFrame = document.getElementById('sm-photo-frame');
    const message = document.getElementById('sm-message');
    if (!stage || !canvas) return;
    if (raf) cancelAnimationFrame(raf);
    photoFrame.classList.remove('show');
    message.classList.remove('show');

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = stage.clientWidth || 300, h = stage.clientHeight || 400;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cx = w / 2, cy = h * 0.46;
    // Kurva hati parametrik: rentang x kira-kira -16..16 (lebar 32), y kira-kira -17..12 (tinggi 29).
    // Skala dihitung dari lebar & tinggi kotak yang tersedia supaya hati tidak kepotong di tepi.
    const scale = Math.min((w * 0.5) / 32, (h * 0.34) / 29);
    const COUNT = 170;
    const targets = buildHeartTargets(cx, cy, scale, COUNT);
    const particles = targets.map(() => ({
      x: cx + (Math.random()-0.5) * w * 0.6,
      y: cy + (Math.random()-0.5) * h * 0.6,
      vx: (Math.random()-0.5) * 1.6,
      vy: (Math.random()-0.5) * 1.6,
      r: 2.6 + Math.random() * 2.4
    }));

    // Hitung outline hati persis (layer terluar) dalam koordinat piksel kotak,
    // dipakai untuk memposisikan & meng-clip foto/gif/video biar pas dengan siluet partikel.
    const outline = [];
    const OUTLINE_N = 72;
    for (let i = 0; i < OUTLINE_N; i++){
      const t = (i / OUTLINE_N) * Math.PI * 2;
      const [hx, hy] = heartPoint(t);
      outline.push([cx + hx * scale, cy + hy * scale]);
    }
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    outline.forEach(([x,y]) => { if(x<minX)minX=x; if(x>maxX)maxX=x; if(y<minY)minY=y; if(y>maxY)maxY=y; });
    const pad = scale * 1.2;
    const frameLeft = minX - pad, frameTop = minY - pad;
    const frameW = (maxX - minX) + pad*2, frameH = (maxY - minY) + pad*2;
    photoFrame.style.left = frameLeft + 'px';
    photoFrame.style.top = frameTop + 'px';
    photoFrame.style.width = frameW + 'px';
    photoFrame.style.height = frameH + 'px';
    const clipD = 'M' + outline.map(([x,y]) => `${x - frameLeft},${y - frameTop}`).join(' L') + ' Z';
    photoFrame.style.clipPath = `path('${clipD}')`;
    photoFrame.style.webkitClipPath = `path('${clipD}')`;

    const t0 = performance.now();
    const FOG_HOLD = 900;      // kabut penuh nutupin card
    const FOG_CLEAR = 1600;    // kabut mengembun dari tengah + partikel muncul & gerak random
    const CONVERGE = 1700;     // partikel berkumpul jadi hati
    const HOLD_HEART = 500;    // jeda hati utuh sebelum foto muncul
    const T_FOG_END = FOG_HOLD + FOG_CLEAR;
    const T_CONVERGE_END = T_FOG_END + CONVERGE;
    const T_PHOTO = T_CONVERGE_END + HOLD_HEART;
    const T_MESSAGE = T_PHOTO + 700;
    const maxR = Math.hypot(w, h) * 0.62;

    function drawFog(elapsed){
      ctx.clearRect(0,0,w,h);
      let fogRadius = 0, fogAlpha = 1;
      if (elapsed < FOG_HOLD){
        fogAlpha = 1; fogRadius = 0;
      } else if (elapsed < T_FOG_END){
        const p = (elapsed - FOG_HOLD) / FOG_CLEAR;
        fogRadius = p * maxR; fogAlpha = 1;
      } else {
        fogAlpha = 0;
      }
      if (fogAlpha > 0){
        const grad = ctx.createRadialGradient(cx, cy, Math.max(fogRadius,0), cx, cy, Math.max(fogRadius,0) + Math.max(w,h)*0.5);
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(0.001, 'rgba(255,255,255,0)');
        grad.addColorStop(0.02, 'rgba(232,236,245,0.9)');
        grad.addColorStop(1, 'rgba(214,220,236,0.96)');
        ctx.fillStyle = grad;
        ctx.fillRect(0,0,w,h);
      }
    }

    function tick(now){
      const elapsed = now - t0;
      drawFog(elapsed);

      if (elapsed > FOG_HOLD){
        let mode = 'drift';
        let convP = 0;
        if (elapsed >= T_FOG_END){
          mode = 'converge';
          convP = Math.min(1, (elapsed - T_FOG_END) / CONVERGE);
          convP = 1 - Math.pow(1 - convP, 2);
        }
        particles.forEach((pt, i) => {
          if (mode === 'drift'){
            pt.x += pt.vx; pt.y += pt.vy;
            if (pt.x < 0 || pt.x > w) pt.vx *= -1;
            if (pt.y < 0 || pt.y > h) pt.vy *= -1;
          } else {
            const tgt = targets[i];
            pt.x += (tgt[0] - pt.x) * (0.06 + convP*0.05);
            pt.y += (tgt[1] - pt.y) * (0.06 + convP*0.05);
          }
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI*2);
          ctx.fillStyle = 'rgba(238,243,255,0.95)';
          ctx.shadowColor = 'rgba(210,225,255,0.9)';
          ctx.shadowBlur = 5;
          ctx.fill();
        });
      }

      if (elapsed < T_PHOTO + 600){
        raf = requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0,0,w,h);
      }
    }
    raf = requestAnimationFrame(tick);

    setTimeout(() => photoFrame.classList.add('show'), T_PHOTO);
    setTimeout(() => message.classList.add('show'), T_MESSAGE);
  }
  window.playUntukKamuSequence = playUntukKamuSequence;
})();

(function(){
  // Rapikan: tombol collapse pemutar musik sudah ada di HTML (#mp-collapse-btn),
  // jadi cukup pakai elemen itu langsung tanpa membuat duplikatnya lewat JS.
  const b=document.getElementById('music-bubble');
  const c=document.getElementById('mp-collapse-btn');
  c.onclick=e=>{e.stopPropagation();b.classList.remove('expanded');musicExp=false};
  c.style.display='none';
  b.addEventListener('click',()=>{if(b.classList.contains('expanded'))c.style.display='flex';else c.style.display='none'})
})();

(function(){
  let busy=false;
  addEventListener('scroll',()=>{
    if(busy)return;busy=true;
    requestAnimationFrame(()=>{
      const y=scrollY,a=document.querySelectorAll('.ab');
      if(a[0])a[0].style.transform=`translateY(${y*.08}px)`;
      if(a[1])a[1].style.transform=`translateY(${y*-.05}px)`;
      document.getElementById('stars-canvas').style.transform=`translateY(${y*.03}px)`;
      busy=false;
    })
  },{passive:true})
})();

(function(){
  function ensureHtml2Canvas(){
    if (window.html2canvas) return Promise.resolve();
    return new Promise((res,rej)=>{
      const s=document.createElement('script');
      s.src='https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
      document.head.appendChild(s);
      s.onload=res; s.onerror=rej;
    });
  }
  window.ensureHtml2Canvas = ensureHtml2Canvas; // dipakai bareng oleh fitur share hero & kartu ucapan (Tahap 5)

  document.getElementById('share-btn').onclick=async()=>{
    try{
      await ensureHtml2Canvas();
      const c=await html2canvas(document.getElementById('hero'),{backgroundColor:null,scale:2,useCORS:true}),x=c.getContext('2d'),g=getComputedStyle(document.body),q=x.createLinearGradient(0,0,c.width,c.height);
      q.addColorStop(0,g.getPropertyValue('--g4'));q.addColorStop(.5,g.getPropertyValue('--g2'));q.addColorStop(1,g.getPropertyValue('--g1'));
      x.strokeStyle=q;x.lineWidth=6;x.strokeRect(8,8,c.width-16,c.height-16);
      const a=document.createElement('a');a.download='melisa-birthday.png';a.href=c.toDataURL();a.click();
      const t=document.getElementById('toast');t.textContent=window.t('toast.screenshotSaved');t.classList.add('show');
      setTimeout(()=>t.classList.remove('show'),2000)
    }catch(e){
      const t=document.getElementById('toast');t.textContent=window.t('toast.screenshotFailed');t.classList.add('show');
      setTimeout(()=>t.classList.remove('show'),2500)
    }
  }
})();

/* ═══════════ TAHAP 5 — Kartu Ucapan Digital (Ending) ═══════════ */
function formatGreetingDate(){
  return TARGET_DATE.toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' });
}
function renderGreetingCard(){
  const nameEl = document.getElementById('gc-name');
  const msgEl = document.getElementById('gc-message');
  const dateEl = document.getElementById('gc-date');
  if (!nameEl) return;
  nameEl.textContent = CONFIG.name;
  msgEl.textContent = CONFIG.greetingMessages[Math.floor(Math.random()*CONFIG.greetingMessages.length)];
  dateEl.textContent = formatGreetingDate();
}
function regenerateGreetingCard(){ renderGreetingCard(); }

/* Pilihan template desain kartu ucapan: paper / gold / minimal */
const GC_TEMPLATE_BG = { paper:'#F4EFEA', gold:'#160A38', minimal:'#ffffff' };
function selectGreetingTemplate(tpl){
  const card = document.getElementById('greeting-card');
  if(!card || !GC_TEMPLATE_BG[tpl]) return;
  card.classList.remove('tpl-paper','tpl-gold','tpl-minimal');
  card.classList.add('tpl-'+tpl);
  document.querySelectorAll('.gcard-tpl-btn').forEach(b=>b.classList.toggle('active', b.dataset.tpl===tpl));
  playFx('soft');
}

async function downloadGreetingCard(){
  try{
    await ensureHtml2Canvas();
    const el = document.getElementById('greeting-card');
    const activeTpl = ['paper','gold','minimal'].find(t=>el.classList.contains('tpl-'+t)) || 'paper';
    const c = await html2canvas(el, { backgroundColor:GC_TEMPLATE_BG[activeTpl], scale:2, useCORS:true });
    const a = document.createElement('a');
    a.download = 'kartu-ucapan-'+CONFIG.name.toLowerCase()+'.png';
    a.href = c.toDataURL();
    a.click();
    const t=document.getElementById('toast'); t.textContent=window.t('toast.cardSaved'); t.classList.add('show');
    setTimeout(()=>t.classList.remove('show'),2000);
  }catch(e){
    const t=document.getElementById('toast'); t.textContent=window.t('toast.cardFailed'); t.classList.add('show');
    setTimeout(()=>t.classList.remove('show'),2500);
  }
}
renderGreetingCard();
