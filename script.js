/* =========================================================
   PORTFOLIO 0.1 CONFIG — EDIT LINKS & IMAGES HERE
   ========================================================= */
const PORTFOLIO_CONFIG = {
  portraitImage: "", // Example: "./assets/kai-portrait.jpg"
  emailPrimary: "fauzakaizakusetiawan@student.telkomuniversity.ac.id",
  emailSecondary: "kaizaku.telkomuniv@gmail.com",
  whatsappUrl: "https://wa.me/6280000000000", // Replace with your WhatsApp number
  githubUrl: "https://github.com/kaimiongmiong012",
  linkedinUrl: "https://www.linkedin.com/in/fauza-kaizaku-439338327",
  instagramUrl: "https://www.instagram.com/kaieaych"
};

const EDUCATION_DATA = [
  {
    year: "CURRENT — 5TH SEMESTER",
    name: "TELKOM UNIVERSITY PURWOKERTO",
    role: {
      en: "B.Sc. Informatics Engineering",
      id: "S1 Teknik Informatika"
    },
    city: "PURWOKERTO, CENTRAL JAVA",
    mapQuery: "Telkom University Purwokerto"
  },
  {
    year: "INDUSTRIAL INTERNSHIP",
    name: "PT. TELKOM INDONESIA REGIONAL IV",
    role: {
      en: "Web Developer & UI/UX Intern (Networking Division)",
      id: "Magang Web Developer & UI/UX (Divisi Networking)"
    },
    city: "SEMARANG, CENTRAL JAVA",
    mapQuery: "Telkom Regional IV Semarang"
  },
  {
    year: "VOCATIONAL HIGH SCHOOL",
    name: "SMK NEGERI 1 PURWOKERTO",
    role: {
      en: "Software Engineering (RPL)",
      id: "Rekayasa Perangkat Lunak (RPL)"
    },
    city: "PURWOKERTO, CENTRAL JAVA",
    mapQuery: "SMK Negeri 1 Purwokerto"
  },
  {
    year: "JUNIOR HIGH SCHOOL",
    name: "SMP NEGERI 24 SEMARANG",
    role: {
      en: "General Secondary Education",
      id: "Pendidikan Menengah Pertama"
    },
    city: "SEMARANG, CENTRAL JAVA",
    mapQuery: "SMP Negeri 24 Semarang"
  },
  {
    year: "ELEMENTARY SCHOOL",
    name: "SD MUHAMMADIYAH SAPEN",
    role: {
      en: "Primary Education",
      id: "Pendidikan Dasar"
    },
    city: "YOGYAKARTA, DIY",
    mapQuery: "SD Muhammadiyah Sapen Yogyakarta"
  }
];

const CREDENTIALS_DATA = [
  {
    id: "01",
    year: "2025",
    issuer: "PT. TELKOM INDONESIA REGIONAL IV",
    shortTitle: "INDUSTRIAL INTERNSHIP",
    fullTitle: "INDUSTRIAL INTERNSHIP — SANGAT KOMPETEN",
    meta: "SEMARANG, INDONESIA • NETWORKING DIVISION",
    filename: "TELKOM_INTERNSHIP.JPG",
    image: "", // Drop certificate image path here later
    desc: {
      en: "Draft placeholder text for Telkom Indonesia Regional IV Semarang. Describe your role architecting and building the ISIM inventory system with PHP, Python, and MariaDB here when ready.",
      id: "Teks placeholder untuk magang PT. Telkom Indonesia Regional IV Semarang. Ganti bagian ini dengan deskripsi akhir mengenai kontribusimu membangun sistem ISIM."
    }
  },
  {
    id: "02",
    year: "2025",
    issuer: "ETS GLOBAL",
    shortTitle: "TOEIC SCORE 905",
    fullTitle: "ETS TOEIC OFFICIAL SCORE — 905 / 990",
    meta: "LISTENING 490 • READING 415",
    filename: "ETS_TOEIC_905.JPG",
    image: "",
    desc: {
      en: "Draft placeholder text for ETS TOEIC 905 certification. Use this space to highlight professional English fluency and peer interview coaching experience.",
      id: "Teks placeholder untuk sertifikat resmi ETS TOEIC 905. Gunakan ruang ini untuk menjelaskan kemampuan komunikasi profesional dan pengalaman bimbingan bahasa Inggris."
    }
  },
  {
    id: "03",
    year: "2026",
    issuer: "TELKOM UNIVERSITY / INTERVOL",
    shortTitle: "THE INDEX 2026",
    fullTitle: "THE INDONESIAN EXPERIENCE 2026 — LOGISTICS & EO",
    meta: "PURWOKERTO • INTERNATIONAL VOLUNTEER",
    filename: "THE_INDEX_2026.JPG",
    image: "",
    desc: {
      en: "Draft placeholder text for Intervol and The Index 2026. Add notes on logistics coordination, budgeting (RAB), and welcoming international guests.",
      id: "Teks placeholder untuk Intervol dan The Index 2026. Tambahkan detail mengenai koordinasi logistik, penyusunan RAB, dan penyambutan tamu internasional."
    }
  },
  {
    id: "04",
    year: "2025",
    issuer: "HUAWEI ICT ACADEMY",
    shortTitle: "HCIE-OPENGAUSS",
    fullTitle: "HUAWEI HCIE-OPENGAUSS V1.0 COURSE",
    meta: "DATABASE ARCHITECTURE • COMPLETION",
    filename: "HUAWEI_OPENGAUSS.JPG",
    image: "",
    desc: {
      en: "Draft placeholder text for Huawei ICT Academy HCIE-openGauss V1.0. Replace with specific database concepts and takeaways you want clients to notice.",
      id: "Teks placeholder untuk sertifikat Huawei ICT Academy HCIE-openGauss V1.0. Ganti dengan poin pembelajaran basis data yang ingin kamu tonjolkan."
    }
  },
  {
    id: "05",
    year: "2025",
    issuer: "GOOGLE DEVELOPER GROUPS ON CAMPUS",
    shortTitle: "GDG SKILL CAMP #3",
    fullTitle: "GDG ON CAMPUS SKILL CAMP #3",
    meta: "AI ALGORITHMS • TELKOM UNIVERSITY PURWOKERTO",
    filename: "GDG_SKILL_CAMP.JPG",
    image: "",
    desc: {
      en: "Draft placeholder text for Google Developer Groups On Campus Skill Camp #3. Swap this out later with your final concise summary.",
      id: "Teks placeholder untuk Google Developer Groups On Campus Skill Camp #3. Ubah bagian ini dengan ringkasan akhir versimu."
    }
  }
];

const PROJECT_BRIEFS = {
  isim: {
    tag: "ENTERPRISE WEB",
    title: "ISIM — TELKOM REGIONAL IV SEMARANG",
    body: {
      en: "Built for daily operational inventory tracking inside the Networking Division of PT. Telkom Indonesia Regional IV Semarang. Designed around clear tables, fast item lookup, and protected staff access.",
      id: "Dibangun untuk pencatatan inventaris operasional harian di Divisi Networking PT. Telkom Indonesia Regional IV Semarang dengan antarmuka tabel yang rapi dan akses staf terlindungi."
    },
    points: {
      en: [
        "Authentication flow with CAPTCHA and automated email verification.",
        "Live summary cards and charts for incoming vs. outgoing equipment.",
        "Full master item CRUD powered by Laravel, PHP, Python, and MariaDB."
      ],
      id: [
        "Alur login dengan CAPTCHA dan verifikasi email otomatis.",
        "Kartu ringkasan dan grafik pergerakan barang masuk serta keluar.",
        "Manajemen data barang master berbasis Laravel, PHP, Python, dan MariaDB."
      ]
    }
  },
  ecommerce: {
    tag: "E-COMMERCE",
    title: "APPAREL E-COMMERCE PLATFORM",
    body: {
      en: "End-to-end clothing storefront modeled after clean Scandinavian and Japanese retail grids, combining WordPress content management with custom UI styling and checkout workflows.",
      id: "Toko pakaian berbasis web yang terinspirasi dari katalog ritel minimalis, memadukan WordPress dengan penyesuaian antarmuka dan alur transaksi lengkap."
    },
    points: {
      en: [
        "Integrated Midtrans, Xendit, and direct bank transfer payment options.",
        "Implemented a live shipment tracking workflow for customers.",
        "Focused on uncluttered product hierarchy and mobile checkout clarity."
      ],
      id: [
        "Integrasi metode pembayaran Midtrans, Xendit, dan transfer bank.",
        "Fitur pelacakan pengiriman pesanan secara langsung.",
        "Fokus pada hierarki katalog produk yang bersih dan mudah dipakai."
      ]
    }
  }
};

const I18N = {
  en: {
    nav_about: "ABOUT",
    nav_education: "EDUCATION",
    nav_projects: "PROJECTS",
    nav_credentials: "CREDENTIALS",
    nav_contact: "CONTACT",
    hero_role: "UI/UX DESIGNER & PRODUCT IDEATOR",
    hero_sub: "INFORMATICS ENGINEERING STUDENT AT TELKOM UNIVERSITY PURWOKERTO. STRUCTURING IDEAS INTO CLEAR INTERFACES AND USABLE DIGITAL PRODUCTS.",
    hero_cta_projects: "VIEW PROJECTS",
    hero_cta_contact: "GET IN TOUCH",
    about_title: "ABOUT",
    about_lead: "I ORGANIZE CONCEPTS, DEFINE USER FLOWS, AND SHAPE CLEAN INTERFACES BEFORE HEAVY CODE BEGINS.",
    about_body: "Focused on Human-Computer Interaction and practical user experience. Beyond software, I bring detail-oriented precision from competing in an official hotel pastry competition and practical communication skills from peer English and interview coaching backed by an ETS TOEIC 905 score.",
    portrait_hint: "ADD PHOTO IN SCRIPT.JS CONFIG",
    edu_title: "EDUCATION & TRACK",
    open_maps: "OPEN MAPS",
    projects_title: "PROJECTS",
    proj_isim_desc: "Internal inventory management web application built during my internship for the Networking Division staff at PT. Telkom Indonesia Regional IV Semarang. Handles incoming/outgoing stock tracking, master item records, category controls, and real-time summary charts.",
    proj_ecom_desc: "Minimalist retail storefront inspired by modern clean apparel brands. Built with WordPress and custom front-end code, integrating real Indonesian payment gateways and live order shipment tracking.",
    proj_game_desc: "Originally built as a lightweight 2D Unity assignment. Play the browser edition below: press SPACE or CLICK to invert gravity and snap between floor and ceiling. Dodge both top and bottom spikes, and avoid falling through open gaps.",
    read_brief: "PROJECT BRIEF",
    cred_title: "CREDENTIALS",
    footer_semester: "5TH SEMESTER INFORMATICS ENGINEERING — TELKOM UNIVERSITY PURWOKERTO",
    footer_nav: "NAVIGATION",
    footer_contact: "DIRECT CONTACT"
  },
  id: {
    nav_about: "TENTANG",
    nav_education: "PENDIDIKAN",
    nav_projects: "PROYEK",
    nav_credentials: "SERTIFIKASI",
    nav_contact: "KONTAK",
    hero_role: "DESAINER UI/UX & PENGGAGAS PRODUK DIGITAL",
    hero_sub: "MAHASISWA TEKNIK INFORMATIKA TELKOM UNIVERSITY PURWOKERTO. MENYUSUN IDE MENJADI ANTARMUKA YANG JELAS DAN PRODUK DIGITAL YANG NYAMAN DIGUNAKAN.",
    hero_cta_projects: "LIHAT PROYEK",
    hero_cta_contact: "HUBUNGI SAYA",
    about_title: "TENTANG",
    about_lead: "SAYA MERANCANG KONSEP, ALUR PENGGUNA, DAN STRUKTUR ANTARMUKA YANG BERSIH SEBELUM TAHAP PENGKODEAN BERAT DIMULAI.",
    about_body: "Berfokus pada Interaksi Manusia dan Komputer serta pengalaman pengguna yang praktis. Di luar pengembangan digital, ketelitian saya juga diasah melalui kompetisi pastry resmi di hotel serta pengalaman membimbing rekan dalam bahasa Inggris dan simulasi wawancara kerja (ETS TOEIC 905).",
    portrait_hint: "TAMBAHKAN FOTO DI CONFIG SCRIPT.JS",
    edu_title: "PENDIDIKAN & JEJAK",
    open_maps: "BUKA MAPS",
    projects_title: "PROYEK",
    proj_isim_desc: "Aplikasi web manajemen inventaris internal yang dibangun saat magang untuk staf Divisi Networking PT. Telkom Indonesia Regional IV Semarang. Mengelola barang masuk/keluar, data barang master, kategori, serta grafik ringkasan.",
    proj_ecom_desc: "Website ritel pakaian minimalis yang dibangun dengan WordPress dan kode front-end khusus, dilengkapi integrasi payment gateway (Midtrans, Xendit, Transfer Bank) serta pelacakan pengiriman langsung.",
    proj_game_desc: "Awalnya dibuat sebagai tugas game 2D ringan di Unity. Mainkan versi browser di bawah: tekan SPASI atau KLIK untuk membalik gravitasi antara lantai dan langit-langit. Hindari duri atas-bawah dan jangan jatuh ke celah kosong.",
    read_brief: "RINGKASAN PROYEK",
    cred_title: "SERTIFIKASI",
    footer_semester: "MAHASISWA SEMESTER 5 TEKNIK INFORMATIKA — TELKOM UNIVERSITY PURWOKERTO",
    footer_nav: "NAVIGASI",
    footer_contact: "KONTAK LANGSUNG"
  }
};

let currentLang = "en";
let activeEduIndex = 0;
let activeCredIndex = 0;
let slabRotationY = 0;
let magChars = [];

/* =========================================================
   1. PROXIMITY MAGNIFY ENGINE (DRAG/HOVER ACROSS WORDS)
   ========================================================= */
function wrapTextNodes(element) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
  const textNodes = [];
  let node;
  while ((node = walker.nextNode())) {
    if (node.nodeValue.trim() !== "") textNodes.push(node);
  }

  textNodes.forEach((textNode) => {
    const frag = document.createDocumentFragment();
    const parts = textNode.nodeValue.split(/(\s+)/);
    parts.forEach((part) => {
      if (/^\s+$/.test(part)) {
        frag.appendChild(document.createTextNode(part));
      } else if (part.length > 0) {
        const wordSpan = document.createElement("span");
        wordSpan.className = "mag-word";
        for (const ch of part) {
          const charSpan = document.createElement("span");
          charSpan.className = "mag-char";
          charSpan.textContent = ch;
          wordSpan.appendChild(charSpan);
        }
        frag.appendChild(wordSpan);
      }
    });
    textNode.parentNode.replaceChild(frag, textNode);
  });
}

function initMagnify() {
  document.querySelectorAll("[data-magnify]").forEach((el) => {
    if (!el.dataset.magReady) {
      wrapTextNodes(el);
      el.dataset.magReady = "1";
    }
  });
  magChars = Array.from(document.querySelectorAll(".mag-char"));
}

function resetMagnifyElement(el, newText) {
  delete el.dataset.magReady;
  el.textContent = newText;
  wrapTextNodes(el);
  el.dataset.magReady = "1";
  magChars = Array.from(document.querySelectorAll(".mag-char"));
}

let pointerX = -9999;
let pointerY = -9999;
let magFrame = null;

function updateMagnify() {
  magFrame = null;
  const radius = 95;
  const vh = window.innerHeight;

  for (let i = 0; i < magChars.length; i++) {
    const ch = magChars[i];
    const rect = ch.getBoundingClientRect();
    if (rect.bottom < -40 || rect.top > vh + 40) continue;

    const cx = rect.left + rect.width * 0.5;
    const cy = rect.top + rect.height * 0.5;
    const dist = Math.hypot(pointerX - cx, pointerY - cy);

    if (dist < radius) {
      const ratio = 1 - dist / radius;
      const scale = 1 + ratio * 0.24;
      ch.style.transform = `scale(${scale.toFixed(3)}) translateY(${(-ratio * 2.5).toFixed(2)}px)`;
    } else if (ch.style.transform) {
      ch.style.transform = "";
    }
  }
}

window.addEventListener("pointermove", (e) => {
  pointerX = e.clientX;
  pointerY = e.clientY;
  if (!magFrame) magFrame = requestAnimationFrame(updateMagnify);
});

window.addEventListener("pointerleave", () => {
  pointerX = -9999;
  pointerY = -9999;
  if (!magFrame) magFrame = requestAnimationFrame(updateMagnify);
});

/* =========================================================
   2. EDUCATION & GOOGLE MAPS SYNC
   ========================================================= */
function renderEducation() {
  const list = document.getElementById("eduList");
  list.innerHTML = "";

  EDUCATION_DATA.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `edu-item${index === activeEduIndex ? " active" : ""}`;
    btn.innerHTML = `
      <span class="edu-year">${item.year}</span>
      <span class="edu-name">${item.name}</span>
      <span class="edu-role">${item.role[currentLang]}</span>
    `;
    btn.addEventListener("click", () => {
      activeEduIndex = index;
      renderEducation();
      updateMapPanel(item);
    });
    list.appendChild(btn);
  });

  updateMapPanel(EDUCATION_DATA[activeEduIndex]);
}

function updateMapPanel(item) {
  document.getElementById("mapCity").textContent = item.city;
  const mapTitle = document.getElementById("mapTitle");
  resetMagnifyElement(mapTitle, item.name);

  const encoded = encodeURIComponent(item.mapQuery);
  document.getElementById("mapIframe").src =
    `https://maps.google.com/maps?q=${encoded}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  document.getElementById("mapExternalLink").href =
    `https://www.google.com/maps/search/?api=1&query=${encoded}`;
}

/* =========================================================
   3. THICK 3D ROTATING CREDENTIAL SLAB + RIGHT PANEL
   ========================================================= */
function renderCredential(direction = 0) {
  const item = CREDENTIALS_DATA[activeCredIndex];
  const slab = document.getElementById("cardSlab");
  const panel = document.getElementById("credDetailPanel");

  if (direction !== 0) {
    slabRotationY += direction * 360;
    slab.style.transform = `rotateY(${slabRotationY}deg)`;
    panel.classList.add("switching");
  }

  const applyContent = () => {
    document.getElementById("cardIndex").textContent = `${item.id} / 0${CREDENTIALS_DATA.length}`;
    document.getElementById("cardYear").textContent = item.year;
    document.getElementById("cardIssuer").textContent = item.issuer;
    document.getElementById("cardTitle").textContent = item.shortTitle;
    document.getElementById("cardBackCode").textContent = `REF — ${item.id}`;
    document.getElementById("credCounter").textContent = `${item.id} OF 0${CREDENTIALS_DATA.length}`;

    const imgBox = document.getElementById("cardImageBox");
    if (item.image) {
      imgBox.innerHTML = `<img src="${item.image}" alt="${item.shortTitle}" />`;
    } else {
      imgBox.innerHTML = `
        <svg class="missing-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect x="6" y="8" width="36" height="32" rx="6" stroke="currentColor" stroke-width="2.5" />
          <circle cx="17" cy="19" r="3" fill="currentColor" />
          <path d="M9 35L19 25L26 32L32 26L39 35" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="missing-label">${item.filename}</span>
      `;
    }

    document.getElementById("detailIssuer").textContent = item.issuer;
    document.getElementById("detailMeta").textContent = item.meta;
    resetMagnifyElement(document.getElementById("detailTitle"), item.fullTitle);
    resetMagnifyElement(document.getElementById("detailDesc"), item.desc[currentLang]);
    panel.classList.remove("switching");
  };

  if (direction !== 0) {
    setTimeout(applyContent, 240);
  } else {
    applyContent();
  }
}

function initCredentialTilt() {
  const viewport = document.getElementById("cardViewport");
  const slab = document.getElementById("cardSlab");

  viewport.addEventListener("pointermove", (e) => {
    const rect = viewport.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    slab.style.transition = "transform 0.12s ease-out";
    slab.style.transform = `rotateY(${slabRotationY + x * 26}deg) rotateX(${-y * 18}deg)`;
  });

  viewport.addEventListener("pointerleave", () => {
    slab.style.transition = "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)";
    slab.style.transform = `rotateY(${slabRotationY}deg) rotateX(0deg)`;
  });

  document.getElementById("prevCredBtn").addEventListener("click", () => {
    slab.style.transition = "transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)";
    activeCredIndex = (activeCredIndex - 1 + CREDENTIALS_DATA.length) % CREDENTIALS_DATA.length;
    renderCredential(-1);
  });

  document.getElementById("nextCredBtn").addEventListener("click", () => {
    slab.style.transition = "transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)";
    activeCredIndex = (activeCredIndex + 1) % CREDENTIALS_DATA.length;
    renderCredential(1);
  });
}

/* =========================================================
   4. GEOMETRY-STYLE GRAVITY FLIP RUNNER (SPIKES + VOID GAPS)
   ========================================================= */
function initGravityRunner() {
  const canvas = document.getElementById("gravityCanvas");
  const ctx = canvas.getContext("2d");
  const overlay = document.getElementById("gameOverlay");
  const overlayTitle = document.getElementById("overlayTitle");
  const overlaySub = document.getElementById("overlaySub");
  const startBtn = document.getElementById("gameStartBtn");
  const resetBtn = document.getElementById("gameResetBtn");
  const scoreEl = document.getElementById("gameScore");
  const bestEl = document.getElementById("gameBest");
  const stageEl = document.getElementById("gameStage");

  const W = canvas.width;
  const H = canvas.height;
  const RAIL_H = 34;

  let running = false;
  let speed = 5.4;
  let distance = 0;
  let best = 0;
  let obstacles = [];
  let gaps = [];
  let trail = [];
  let spawnTimer = 0;
  let gapTimer = 110;

  const player = {
    x: 150,
    y: H - RAIL_H - 34,
    size: 32,
    vy: 0,
    gravityDir: 1, // 1 = floor, -1 = ceiling
    grounded: true,
    angle: 0
  };

  function resetGame(autoStart = false) {
    speed = 5.4;
    distance = 0;
    obstacles = [];
    gaps = [];
    trail = [];
    spawnTimer = 45;
    gapTimer = 115;

    player.y = H - RAIL_H - player.size;
    player.vy = 0;
    player.gravityDir = 1;
    player.grounded = true;
    player.angle = 0;

    scoreEl.textContent = "000";
    stageEl.textContent = "01";
    running = autoStart;

    if (autoStart) {
      overlay.classList.add("hidden");
    } else {
      overlay.classList.remove("hidden");
    }
  }

  function flipGravity() {
    if (!running) {
      resetGame(true);
      return;
    }
    if (player.grounded) {
      player.gravityDir *= -1;
      player.grounded = false;
      player.vy = player.gravityDir * 4.5;
    }
  }

  function triggerGameOver(reason) {
    running = false;
    const finalScore = Math.floor(distance);
    if (finalScore > best) {
      best = finalScore;
      bestEl.textContent = String(best).padStart(3, "0");
    }
    overlayTitle.textContent = reason;
    overlaySub.textContent = `DISTANCE ${String(finalScore).padStart(3, "0")} — RESET TO STAGE 01`;
    startBtn.textContent = "TRY AGAIN";
    overlay.classList.remove("hidden");
  }

  function isOverGap(surface, px, pw) {
    const center = px + pw * 0.5;
    return gaps.some((g) => g.surface === surface && center > g.x + 6 && center < g.x + g.w - 6);
  }

  function update() {
    if (!running) return;

    distance += 0.18;
    const stage = Math.min(9, 1 + Math.floor(distance / 80));
    speed = 5.4 + (stage - 1) * 0.65;
    scoreEl.textContent = String(Math.floor(distance)).padStart(3, "0");
    stageEl.textContent = String(stage).padStart(2, "0");

    // Spawn floor & ceiling spikes
    spawnTimer--;
    if (spawnTimer <= 0) {
      const surface = Math.random() > 0.5 ? "bottom" : "top";
      const count = Math.random() > 0.62 ? 2 : 1;
      const spikeW = 26;
      const spikeH = 28;
      // Avoid placing spike directly inside an upcoming gap
      const overlapsGap = gaps.some((g) => g.surface === surface && Math.abs(g.x - W) < g.w + 45);
      if (!overlapsGap) {
        for (let i = 0; i < count; i++) {
          obstacles.push({ x: W + 30 + i * spikeW, w: spikeW, h: spikeH, surface });
        }
      }
      spawnTimer = Math.max(38, 76 - stage * 4) + Math.floor(Math.random() * 24);
    }

    // Spawn void gaps in floor or ceiling
    gapTimer--;
    if (gapTimer <= 0) {
      const surface = Math.random() > 0.5 ? "bottom" : "top";
      gaps.push({ x: W + 60, w: 92 + Math.floor(Math.random() * 34), surface });
      gapTimer = 115 + Math.floor(Math.random() * 65);
    }

    // Move obstacles & gaps
    obstacles.forEach((o) => (o.x -= speed));
    gaps.forEach((g) => (g.x -= speed));
    obstacles = obstacles.filter((o) => o.x + o.w > -40);
    gaps = gaps.filter((g) => g.x + g.w > -40);

    // Player gravity physics
    player.vy += player.gravityDir * 1.18;
    player.y += player.vy;

    const floorY = H - RAIL_H - player.size;
    const ceilY = RAIL_H;

    if (player.gravityDir === 1) {
      if (player.y >= floorY && !isOverGap("bottom", player.x, player.size)) {
        player.y = floorY;
        player.vy = 0;
        player.grounded = true;
        player.angle = Math.round(player.angle / (Math.PI / 2)) * (Math.PI / 2);
      } else {
        player.grounded = false;
        player.angle += 0.14;
      }
    } else {
      if (player.y <= ceilY && !isOverGap("top", player.x, player.size)) {
        player.y = ceilY;
        player.vy = 0;
        player.grounded = true;
        player.angle = Math.round(player.angle / (Math.PI / 2)) * (Math.PI / 2);
      } else {
        player.grounded = false;
        player.angle -= 0.14;
      }
    }

    // Trail
    trail.push({ x: player.x, y: player.y, alpha: 0.3 });
    if (trail.length > 9) trail.shift();
    trail.forEach((t) => {
      t.x -= speed * 0.7;
      t.alpha *= 0.82;
    });

    // Void fall detection
    if (player.y > H + 12 || player.y + player.size < -12) {
      triggerGameOver("FELL INTO VOID GAP");
      return;
    }

    // Spike collision (slightly forgiving hitbox)
    const pad = 6;
    for (const o of obstacles) {
      const oy = o.surface === "bottom" ? H - RAIL_H - o.h : RAIL_H;
      const hitX = player.x + player.size - pad > o.x + 5 && player.x + pad < o.x + o.w - 5;
      const hitY = player.y + player.size - pad > oy + 5 && player.y + pad < oy + o.h - 5;
      if (hitX && hitY) {
        triggerGameOver("HIT OBSTACLE");
        return;
      }
    }
  }

  function drawRoundedRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  function draw() {
    ctx.fillStyle = "#ecece8";
    ctx.fillRect(0, 0, W, H);

    // Subtle architectural grid lines
    ctx.strokeStyle = "rgba(18, 18, 18, 0.06)";
    ctx.lineWidth = 1;
    const offset = (distance * 24) % 60;
    for (let x = -offset; x < W; x += 60) {
      ctx.beginPath();
      ctx.moveTo(x, RAIL_H);
      ctx.lineTo(x, H - RAIL_H);
      ctx.stroke();
    }

    // Draw solid floor & ceiling concrete rails
    ctx.fillStyle = "#181818";
    ctx.fillRect(0, 0, W, RAIL_H);
    ctx.fillRect(0, H - RAIL_H, W, RAIL_H);

    // Carve out void gaps in floor & ceiling
    ctx.fillStyle = "#ecece8";
    gaps.forEach((g) => {
      if (g.surface === "top") {
        ctx.fillRect(g.x, 0, g.w, RAIL_H + 1);
      } else {
        ctx.fillRect(g.x, H - RAIL_H - 1, g.w, RAIL_H + 1);
      }
    });

    // Draw spikes
    ctx.fillStyle = "#121212";
    obstacles.forEach((o) => {
      ctx.beginPath();
      if (o.surface === "bottom") {
        const base = H - RAIL_H;
        ctx.moveTo(o.x, base);
        ctx.lineTo(o.x + o.w * 0.5, base - o.h);
        ctx.lineTo(o.x + o.w, base);
      } else {
        const base = RAIL_H;
        ctx.moveTo(o.x, base);
        ctx.lineTo(o.x + o.w * 0.5, base + o.h);
        ctx.lineTo(o.x + o.w, base);
      }
      ctx.closePath();
      ctx.fill();
    });

    // Motion trail
    trail.forEach((t) => {
      ctx.fillStyle = `rgba(18, 18, 18, ${t.alpha.toFixed(2)})`;
      drawRoundedRect(t.x, t.y, player.size, player.size, 7);
      ctx.fill();
    });

    // Polished rounded geometric cube player
    ctx.save();
    ctx.translate(player.x + player.size * 0.5, player.y + player.size * 0.5);
    ctx.rotate(player.angle);
    ctx.fillStyle = "#121212";
    drawRoundedRect(-player.size * 0.5, -player.size * 0.5, player.size, player.size, 8);
    ctx.fill();

    // Inner core detail (gives orientation & gravity polish)
    ctx.fillStyle = "#f4f4f2";
    drawRoundedRect(-7, -7, 14, 14, 3);
    ctx.fill();
    ctx.restore();
  }

  function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
  }

  startBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    resetGame(true);
  });
  resetBtn.addEventListener("click", () => resetGame(true));
  canvas.addEventListener("pointerdown", flipGravity);

  window.addEventListener("keydown", (e) => {
    if (e.code === "Space" && document.activeElement.tagName !== "BUTTON") {
      const rect = canvas.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        e.preventDefault();
        flipGravity();
      }
    }
  });

  resetGame(false);
  loop();
}

/* =========================================================
   5. PROJECT MODAL, LANGUAGE SWITCHER & CONFIG BINDING
   ========================================================= */
function applyLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const text = I18N[lang][key];
    if (!text) return;
    if (el.hasAttribute("data-magnify")) {
      resetMagnifyElement(el, text);
    } else {
      el.textContent = text;
    }
  });

  renderEducation();
  renderCredential(0);
}

function initModal() {
  const modal = document.getElementById("projectModal");
  const closeBtn = document.getElementById("modalCloseBtn");

  document.querySelectorAll("[data-open-project]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const data = PROJECT_BRIEFS[btn.dataset.openProject];
      if (!data) return;
      document.getElementById("modalTag").textContent = data.tag;
      document.getElementById("modalTitle").textContent = data.title;
      document.getElementById("modalBody").textContent = data.body[currentLang];

      const list = document.getElementById("modalPoints");
      list.innerHTML = data.points[currentLang].map((p) => `<li>${p}</li>`).join("");
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    });
  });

  const close = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };

  closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function applyConfig() {
  if (PORTFOLIO_CONFIG.portraitImage) {
    document.getElementById("portraitBox").innerHTML =
      `<img src="${PORTFOLIO_CONFIG.portraitImage}" alt="Fauza Kaizaku Setiawan" />`;
  }
  const email1 = document.getElementById("emailPrimaryLink");
  email1.href = `mailto:${PORTFOLIO_CONFIG.emailPrimary}`;
  email1.textContent = PORTFOLIO_CONFIG.emailPrimary;

  const email2 = document.getElementById("emailSecondaryLink");
  email2.href = `mailto:${PORTFOLIO_CONFIG.emailSecondary}`;
  email2.textContent = PORTFOLIO_CONFIG.emailSecondary;

  document.getElementById("whatsappLink").href = PORTFOLIO_CONFIG.whatsappUrl;
  document.getElementById("githubLink").href = PORTFOLIO_CONFIG.githubUrl;
  document.getElementById("linkedinLink").href = PORTFOLIO_CONFIG.linkedinUrl;
  document.getElementById("instagramLink").href = PORTFOLIO_CONFIG.instagramUrl;
}

document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  initMagnify();
  renderEducation();
  renderCredential(0);
  initCredentialTilt();
  initGravityRunner();
  initModal();

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 12);
  });
});