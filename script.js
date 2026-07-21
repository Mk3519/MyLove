const settings = {
  name: "حبيبتي",
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
const closeLightbox = document.getElementById("closeLightbox");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");
const confettiLayer = document.getElementById("confettiLayer");
const backgroundLayer = document.getElementById("backgroundLayer");
const cursorGlow = document.getElementById("cursorGlow");
let currentGalleryIndex = 0;
let isMusicPlaying = false;

function setContent() {
  heroName.textContent = settings.name;
  heroMessage.textContent = settings.heroMessage;
  finalName.textContent = settings.name;
  finalMessage.textContent = settings.finalMessage;
  letterContent.innerHTML = `<p>${settings.loveLetter}</p>`;
  giftSurprise.innerHTML = `<p>${settings.giftSurprise}</p>`;

  storyTimeline.innerHTML = settings.storyEvents
    .map(
      (event, index) => `
        <article class="story-card ${event.side} reveal">
          <div class="story-content">
            <div class="story-icon"><i class="${event.icon}"></i></div>
            <div class="story-date">${event.date}</div>
            <div class="story-title">${event.title}</div>
            <div class="story-desc">${event.description}</div>
          </div>
          <div class="story-media">
            <img src="${event.image}" alt="${event.title}" />
          </div>
        </article>
      `
    )
    .join("");

  galleryGrid.innerHTML = settings.galleryImages
    .map(
      (image, index) => `
        <button class="gallery-item ripple" type="button" data-title="${image.title}" data-index="${index}">
          <img src="${image.src}" alt="${image.alt}" />
        </button>
      `
    )
    .join("");
}

function createDecorations() {
  const layers = [
    { type: "spark", count: 70 },
    { type: "heart", count: 28 },
    { type: "particle", count: 40 },
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

function spawnConfetti(count = 24) {
  for (let i = 0; i < count; i += 1) {
    const piece = document.createElement("div");
    piece.className = "confetti";
    const colors = ["#ff5fa2", "#ffd166", "#ffffff", "#ffb4d1"];
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `-20px`;
    piece.style.setProperty("--x", `${(Math.random() - 0.5) * 220}px`);
    confettiLayer.appendChild(piece);
    setTimeout(() => piece.remove(), 4200);
  }
}

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

function updateCounter() {
  const now = new Date();
  const diff = now - settings.relationshipStart;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.querySelector('[data-unit="days"]').textContent = String(days).padStart(2, "0");
  document.querySelector('[data-unit="hours"]').textContent = String(hours).padStart(2, "0");
  document.querySelector('[data-unit="minutes"]').textContent = String(minutes).padStart(2, "0");
  document.querySelector('[data-unit="seconds"]').textContent = String(seconds).padStart(2, "0");
}

async function toggleMusic() {
  try {
    await birthdayMusic.play();
    isMusicPlaying = true;
  } catch (error) {
    console.warn("Audio playback was blocked", error);
  }
}

function openLightbox(index) {
  currentGalleryIndex = index;
  lightboxImage.src = settings.galleryImages[index].src;
  lightboxImage.alt = settings.galleryImages[index].alt;
  lightbox.classList.remove("hidden");
}

function closeLightboxView() {
  lightbox.classList.add("hidden");
}

function navigateLightbox(direction) {
  currentGalleryIndex = (currentGalleryIndex + direction + settings.galleryImages.length) % settings.galleryImages.length;
  lightboxImage.src = settings.galleryImages[currentGalleryIndex].src;
  lightboxImage.alt = settings.galleryImages[currentGalleryIndex].alt;
}

function unlockExperience() {
  if (passwordInput.value === "2272003") {
    unlockScreen.classList.add("hidden");
    pageContent.classList.remove("hidden");
    pageContent.classList.add("visible");
    unlockMessage.textContent = "";
    passwordInput.value = "";
    toggleMusic();
  } else {
    unlockMessage.textContent = "كلمة المرور غير صحيحة، حاول مرة أخرى.";
  }
}

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
    { threshold: 0.16 }
  );

  items.forEach((item) => observer.observe(item));
}

function setupMagnetic() {
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

function setupParallax() {
  document.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;
    cursorGlow.style.transform = `translate(${event.clientX - 120}px, ${event.clientY - 120}px)`;
    document.querySelector(".hero-content")?.style.setProperty("transform", `translate3d(${x * 0.4}px, ${y * 0.4}px, 0)`);
  });
}

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
  document.body.classList.add("journey-started");
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
  if (event.target === lightbox) {
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
  if (event.target.closest(".gallery-item")) {
    const item = event.target.closest(".gallery-item");
    const index = Number(item.getAttribute("data-index"));
    openLightbox(index);
  }
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".ripple")) {
    createRipple(event);
  }
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".ripple")) {
    createRipple(event);
  }
});

setContent();
createDecorations();
setupReveal();
setupMagnetic();
setupParallax();
updateCounter();
setInterval(updateCounter, 1000);
window.setInterval(() => spawnConfetti(6), 2200);
