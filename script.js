const settings = {
  name: "Malaak",
  title: "Happy Birthday",
  heroMessage:
    "في كل لحظة، تذكرتكِ تجعل الروح تتوهج، وأحببتُكِ أكثر من أي كلمات يمكن أن تُكتب.",
  relationshipStart: new Date("2021-05-12T00:00:00"),
  loveLetter:
    "حبيبتي، أنتِ أجمل ما في حياتي، وأكرم ما في قلبي. كل يوم أتعلم منكِ معنى الحب الحقيقي، والضحك، والسكينة، والاحتفال بالوجود مع شخصٍ يجعل الدنيا أجمل. أتمنى لكِ عيد ميلاد مليء بالحب والبهجة والذكريات التي لا تمحى. أحبكِ إلى ما لا نهاية.",
  giftSurprise:
    "هذا صندوق صغير يحمل حبًا كبيرًا، وقلوبًا تتساقط في كل مرة تفتحين فيه ذكرى جميلة. أنتِ أجمل هدية في حياتي.",
  finalMessage:
    "شكرًا لأنكِ جزء من قصتي، ولأنكِ نجمة كل يوم. أسعد الناس من يملك قلبًا مثل قلبكِ، وأحبّهم من يختاره الله لي.",
  storyEvents: [
    {
      date: "أول رسالة",
      title: "بداية الحكاية",
      description: "بدأ كل شيء برسالة صغيرة حملت في طياتها أول ابتسامة من قلبٍ لم يعرف بعد كيف يحب.",
      icon: "fa-solid fa-envelope",
      image: "assets/images/photo1.jpg",
      side: "left",
    },
    {
      date: "أول مكالمة",
      title: "أول صوتٍ لكِ",
      description: "كانت مكالمة قصيرة، لكنها أخرجت من قلبي كل الهموم وأدخلت فيه صداقةً لا تُنسى.",
      icon: "fa-solid fa-phone",
      image: "assets/images/photo2.jpg",
      side: "right",
    },
    {
      date: "أول مقابلة",
      title: "أول لقاء حقيقي",
      description: "أول لقاء كان كأن الوقت توقف، والكون نفسه توقف ليشهد لحظة لم نكن نعرف أنها ستصبح ذكرى.",
      icon: "fa-solid fa-heart-crack",
      image: "assets/images/photo3.jpg",
      side: "left",
    },
    {
      date: "أول صورة",
      title: "أول لحظة تُحفظ",
      description: "صورة بسيطة، لكن فيها كل ما يشبه السعادة والهدوء والضوء الذي نبحث عنه في كل يوم.",
      icon: "fa-solid fa-camera",
      image: "assets/images/photo4.jpg",
      side: "right",
    },
    {
      date: "أجمل ذكرى",
      title: "المسافة أصبحت قريبة",
      description: "أجمل ذكرياتنا هي التي صنعناها خطوة بخطوة، حتى صارت في قلبينا مكانًا لا يحلّ عليه النسيان.",
      icon: "fa-solid fa-star",
      image: "assets/images/photo5.jpg",
      side: "left",
    },
    {
      date: "اليوم",
      title: "كل يومٍ جديد",
      description: "واليوم، ومع كل عيد ميلاد جديد، أُعيد لكِ الحب نفسه لكن بمشاعر أعمق وأقوى.",
      icon: "fa-solid fa-gift",
      image: "assets/images/photo6.jpg",
      side: "right",
    },
  ],
  galleryImages: [
    { src: "assets/images/photo1.jpg", alt: "صورة حب", title: "أول لحظة" },
    { src: "assets/images/photo2.jpg", alt: "صورة حب", title: "أول ضحكة" },
    { src: "assets/images/photo3.jpg", alt: "صورة حب", title: "أول لقاء" },
    { src: "assets/images/photo4.jpg", alt: "صورة حب", title: "أول ذكرى" },
    { src: "assets/images/photo5.jpg", alt: "صورة حب", title: "أجمل خريف" },
    { src: "assets/images/photo6.jpg", alt: "صورة حب", title: "ليلة من السعادة" },
  ],
};

// ====== DOM References ======
const heroTitle = document.getElementById("heroTitle");
const heroName = document.getElementById("heroName");
const heroMessage = document.getElementById("heroMessage");
const unlockScreen = document.getElementById("unlockScreen");
const pageContent = document.getElementById("pageContent");
const unlockForm = document.getElementById("unlockForm");
const passwordInput = document.getElementById("passwordInput");
const unlockMessage = document.getElementById("unlockMessage");
const togglePasswordVisibility = document.getElementById("togglePasswordVisibility");
const storyTimeline = document.getElementById("storyTimeline");
const galleryGrid = document.getElementById("galleryGrid");
const finalTitle = document.getElementById("finalTitle");
const finalName = document.getElementById("finalName");
const finalMessage = document.getElementById("finalMessage");
const letterContent = document.getElementById("letterContent");
const giftSurprise = document.getElementById("giftSurprise");
const startJourneyButton = document.getElementById("startJourney");
const envelopeButton = document.getElementById("envelopeButton");
const giftBox = document.getElementById("giftBox");
const birthdayMusic = document.getElementById("birthdayMusic");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightbox = document.getElementById("closeLightbox");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");
const confettiLayer = document.getElementById("confettiLayer");
const backgroundLayer = document.getElementById("backgroundLayer");
const cursorGlow = document.getElementById("cursorGlow");
const musicPlayer = document.getElementById("musicPlayer");
const playerToggle = document.getElementById("playerToggle");
const playerProgress = document.getElementById("playerProgress");

let currentGalleryIndex = 0;
let isMusicPlaying = false;
// Detect touch devices (phones/tablets)
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

// ====== Content ======
function setContent() {
  if (heroTitle) heroTitle.textContent = settings.title;
  heroName.textContent = settings.name;
  heroMessage.textContent = settings.heroMessage;
  finalTitle.textContent = settings.title;
  finalName.textContent = settings.name;
  finalMessage.textContent = settings.finalMessage;
  letterContent.innerHTML = `<p>${settings.loveLetter}</p>`;
  giftSurprise.innerHTML = `<p>${settings.giftSurprise}</p>`;

  storyTimeline.innerHTML = settings.storyEvents
    .map(
      (event) => `
        <article class="story-card ${event.side} reveal">
          <div class="story-content">
            <div class="story-icon"><i class="${event.icon}"></i></div>
            <div class="story-date">${event.date}</div>
            <div class="story-title">${event.title}</div>
            <div class="story-desc">${event.description}</div>
          </div>
          <div class="story-media">
            <img src="${event.image}" alt="${event.title}" loading="lazy" />
          </div>
        </article>
      `
    )
    .join("");

  galleryGrid.innerHTML = settings.galleryImages
    .map(
      (image, index) => `
        <button class="gallery-item ripple" type="button" data-title="${image.title}" data-index="${index}">
          <img src="${image.src}" alt="${image.alt}" loading="lazy" />
        </button>
      `
    )
    .join("");
}

// ====== Gallery Interactions ======
function initGalleryInteractions() {
  if (!galleryGrid) return;
  galleryGrid.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      galleryGrid.classList.add("hovered");
      item.classList.add("focus");
    });
    item.addEventListener("mouseleave", () => {
      galleryGrid.classList.remove("hovered");
      item.classList.remove("focus");
    });
    item.addEventListener("focus", () => {
      galleryGrid.classList.add("hovered");
      item.classList.add("focus");
    });
    item.addEventListener("blur", () => {
      galleryGrid.classList.remove("hovered");
      item.classList.remove("focus");
    });
  });
}

// ====== Background Particles ======
function createDecorations() {
  // Use lighter decoration counts on touch devices to improve performance
  const layers = isTouchDevice
    ? [
        { type: "spark", count: 8 },
        { type: "heart", count: 4 },
        { type: "particle", count: 6 },
      ]
    : [
        { type: "spark", count: 60 },
        { type: "heart", count: 24 },
        { type: "particle", count: 36 },
      ];

  layers.forEach((layer) => {
    for (let i = 0; i < layer.count; i += 1) {
      const element = document.createElement("div");
      element.className = layer.type;
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
      element.style.animationDelay = `${Math.random() * 4}s`;
      element.style.opacity = `${0.2 + Math.random() * 0.8}`;
      if (layer.type === "heart") {
        element.innerHTML = '<i class="fa-solid fa-heart"></i>';
      }
      backgroundLayer.appendChild(element);
    }
  });
}

// ====== Confetti ======
function spawnConfetti(count = 24) {
  const colors = ["#ff5fa2", "#f5c97b", "#ffffff", "#ffb4d1", "#c2387a"];
  // Reduce confetti on touch devices
  const effectiveCount = isTouchDevice ? Math.min(count, 8) : count;
  for (let i = 0; i < effectiveCount; i += 1) {
    const piece = document.createElement("div");
    piece.className = "confetti";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = "-20px";
    piece.style.setProperty("--x", `${(Math.random() - 0.5) * 240}px`);
    piece.style.animationDuration = `${3 + Math.random() * 2}s`;
    confettiLayer.appendChild(piece);
    setTimeout(() => piece.remove(), 5000);
  }
}

// ====== Ripple ======
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  circle.className = "ripple-effect";
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 1.2;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = `${event.clientX - rect.left}px`;
  circle.style.top = `${event.clientY - rect.top}px`;
  button.appendChild(circle);
  setTimeout(() => circle.remove(), 700);
}

// ====== Love Counter ======
function updateCounter() {
  const now = new Date();
  const diff = now - settings.relationshipStart;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const dEl = document.querySelector('[data-unit="days"]');
  const hEl = document.querySelector('[data-unit="hours"]');
  const mEl = document.querySelector('[data-unit="minutes"]');
  const sEl = document.querySelector('[data-unit="seconds"]');
  if (dEl) dEl.textContent = String(days).padStart(2, "0");
  if (hEl) hEl.textContent = String(hours).padStart(2, "0");
  if (mEl) mEl.textContent = String(minutes).padStart(2, "0");
  if (sEl) sEl.textContent = String(seconds).padStart(2, "0");
}

// ====== Music ======
async function toggleMusic() {
  try {
    await birthdayMusic.play();
    isMusicPlaying = true;
    playerToggle.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } catch (error) {
    console.warn("Audio playback was blocked", error);
  }
}

function initMusicPlayer() {
  if (!birthdayMusic || !playerToggle) return;

  playerToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (birthdayMusic.paused) {
      birthdayMusic.play();
      playerToggle.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
      birthdayMusic.pause();
      playerToggle.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
  });

  birthdayMusic.addEventListener("timeupdate", () => {
    if (birthdayMusic.duration && playerProgress) {
      const percent = (birthdayMusic.currentTime / birthdayMusic.duration) * 100;
      playerProgress.style.width = percent + "%";
    }
  });

  birthdayMusic.addEventListener("play", () => {
    playerToggle.innerHTML = '<i class="fa-solid fa-pause"></i>';
  });

  birthdayMusic.addEventListener("pause", () => {
    playerToggle.innerHTML = '<i class="fa-solid fa-play"></i>';
  });
}

// ====== Lightbox ======
function openLightbox(index) {
  currentGalleryIndex = index;
  const img = settings.galleryImages[index];
  lightboxImage.src = img.src;
  lightboxImage.alt = img.alt;
  if (lightboxCaption) lightboxCaption.textContent = img.title;
  lightbox.classList.remove("hidden");
}

function closeLightboxView() {
  lightbox.classList.add("hidden");
}

function navigateLightbox(direction) {
  currentGalleryIndex =
    (currentGalleryIndex + direction + settings.galleryImages.length) %
    settings.galleryImages.length;
  const img = settings.galleryImages[currentGalleryIndex];
  lightboxImage.src = img.src;
  lightboxImage.alt = img.alt;
  if (lightboxCaption) lightboxCaption.textContent = img.title;
}

// ====== Unlock ======
function unlockExperience() {
  if (passwordInput.value === "2272003") {
    unlockScreen.style.opacity = "0";
    unlockScreen.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      unlockScreen.classList.add("hidden");
      pageContent.classList.remove("hidden");
      requestAnimationFrame(() => pageContent.classList.add("visible"));
      toggleMusic();
      setTimeout(() => {
        musicPlayer.classList.add("visible");
      }, 600);
    }, 500);
    unlockMessage.textContent = "";
    passwordInput.value = "";
  } else {
    unlockMessage.textContent = "كلمة المرور غلط حبيبتي بس اللي تقدر تكتبو .";
    unlockScreen.querySelector(".unlock-card")?.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-8px)" },
        { transform: "translateX(8px)" },
        { transform: "translateX(0)" },
      ],
      { duration: 300, iterations: 1 }
    );
  }
}

// ====== Reveal on Scroll ======
function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((item) => observer.observe(item));
}

// ====== Magnetic Buttons ======
function setupMagnetic() {
  // Disable magnetic pointer effects on touch devices (expensive and causes jitter)
  if (isTouchDevice) return;
  document.querySelectorAll(".magnetic").forEach((element) => {
    element.addEventListener("pointermove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const offsetX = (x / rect.width - 0.5) * 8;
      const offsetY = (y / rect.height - 0.5) * 8;
      element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
    element.addEventListener("pointerleave", () => {
      element.style.transform = "";
    });
  });
}

// ====== Parallax / Cursor Glow ======
function setupParallax() {
  // Throttle mousemove updates with requestAnimationFrame
  if (isTouchDevice) {
    // hide or reduce cursor glow on touch devices
    if (cursorGlow) cursorGlow.style.display = "none";
    return;
  }
  let rafPending = false;
  document.addEventListener(
    "mousemove",
    (event) => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;
        const x = (event.clientX / window.innerWidth - 0.5) * 8;
        const y = (event.clientY / window.innerHeight - 0.5) * 8;
        const heroInner = document.querySelector(".hero-inner");
        if (heroInner) {
          heroInner.style.setProperty("transform", `translate3d(${x * 0.3}px, ${y * 0.3}px, 0)`);
        }
        rafPending = false;
      });
    },
    { passive: true }
  );
}

// ====== Hero Animation ======
function animateHero() {
  const h1 = document.getElementById("heroTitle");
  const nameEl = document.getElementById("heroName");
  const message = document.getElementById("heroMessage");
  const startBtn = document.getElementById("startJourney");
  if (!h1 || !nameEl) return;

  function splitToSpans(el, step = 0.04) {
    const text = el.textContent || "";
    const chars = Array.from(text);
    el.innerHTML = "";
    chars.forEach((ch, i) => {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = ch === " " ? "\u00A0" : ch;
      span.style.animationDelay = `${i * step}s`;
      el.appendChild(span);
    });
    return chars.length;
  }

  splitToSpans(h1, 0.045);
  const nameCount = splitToSpans(nameEl, 0.06);

  const delay = nameCount * 0.06 + 0.6;
  setTimeout(() => {
    nameEl.classList.add("shine");
    if (message) message.classList.add("show");
    if (startBtn) startBtn.classList.add("show");
  }, delay * 1000);
}

// ====== Scroll Progress ======
function updateScrollProgress() {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollHeight <= 0) return;
  const progress = (window.scrollY / scrollHeight) * 100;
  document.querySelector(".scroll-progress").style.width = progress + "%";
}

// ====== Event Listeners ======
unlockForm.addEventListener("submit", (event) => {
  event.preventDefault();
  unlockExperience();
});

togglePasswordVisibility.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  togglePasswordVisibility.innerHTML = isPassword
    ? '<i class="fa-solid fa-eye-slash"></i>'
    : '<i class="fa-solid fa-eye"></i>';
});

startJourneyButton.addEventListener("click", async (event) => {
  createRipple(event);
  await toggleMusic();
  spawnConfetti();
  document.getElementById("story").scrollIntoView({ behavior: "smooth", block: "start" });
});

envelopeButton.addEventListener("click", (event) => {
  createRipple(event);
  envelopeButton.classList.toggle("open");
  letterContent.classList.toggle("hidden");
});

giftBox.addEventListener("click", (event) => {
  createRipple(event);
  giftBox.classList.add("open");
  giftSurprise.classList.remove("hidden");
  spawnConfetti(40);
});

closeLightbox.addEventListener("click", closeLightboxView);
prevImage.addEventListener("click", () => navigateLightbox(-1));
nextImage.addEventListener("click", () => navigateLightbox(1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox || event.target.classList.contains("lightbox-backdrop")) {
    closeLightboxView();
  }
});

document.addEventListener("keydown", (event) => {
  if (lightbox.classList.contains("hidden")) return;
  if (event.key === "Escape") closeLightboxView();
  if (event.key === "ArrowRight") navigateLightbox(1);
  if (event.key === "ArrowLeft") navigateLightbox(-1);
});

document.addEventListener("click", (event) => {
  const item = event.target.closest(".gallery-item");
  if (item) {
    openLightbox(Number(item.getAttribute("data-index")));
    return;
  }
  if (event.target.closest(".ripple")) {
    createRipple(event);
  }
});

document.addEventListener("scroll", updateScrollProgress, { passive: true });

// ====== Init ======
setContent();
animateHero();
// Create lighter decorations on touch devices, or skip heavy ones
createDecorations();
setupReveal();
setupMagnetic();
setupParallax();
initGalleryInteractions();
initMusicPlayer();
updateCounter();
setInterval(updateCounter, 1000);
// Only spawn recurring confetti on non-touch devices to avoid performance issues
if (!isTouchDevice) window.setInterval(() => spawnConfetti(6), 2400);
