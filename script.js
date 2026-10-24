const pages = [...document.querySelectorAll(".page")];
const dots = [...document.querySelectorAll(".dot")];
const petals = document.getElementById("petals");
const musicToggle = document.getElementById("musicToggle");
const musicText = document.getElementById("musicText");
const audio = document.getElementById("weddingAudio");

let current = 1;
let musicStarted = false;

// JioSaavn pages cannot be used directly as an <audio src>.
// Put a legally usable MP3 at assets/music/wedding-song.mp3 to enable
// direct in-page playback. The Listen to Song button links to JioSaavn.
audio.src = "assets/music/wedding-song.mp3";

function goTo(pageNumber) {
  const target = Math.max(1, Math.min(5, Number(pageNumber)));
  pages.forEach(p => p.classList.toggle("active", Number(p.dataset.page) === target));
  dots.forEach(d => d.classList.toggle("active", Number(d.dataset.pageDot) === target));
  current = target;
  burstPetals(target === 1 ? 30 : 16);
}

function burstPetals(count = 16) {
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "petal";
    p.style.left = Math.random() * 100 + "vw";
    p.style.setProperty("--drift", ((Math.random() - .5) * 35) + "vw");
    p.style.animationDuration = (5 + Math.random() * 5) + "s";
    p.style.animationDelay = (Math.random() * 1.5) + "s";
    p.style.transform = `rotate(${Math.random()*360}deg)`;
    petals.appendChild(p);
    setTimeout(() => p.remove(), 12000);
  }
}

function startMusic() {
  if (musicStarted) return;
  musicStarted = true;
  audio.play().then(() => {
    musicToggle.classList.add("playing");
    musicText.textContent = "Music On";
  }).catch(() => {
    musicText.textContent = "Add MP3";
  });
}

document.getElementById("openInvitation").addEventListener("click", () => {
  startMusic();
  goTo(2);
});

document.querySelectorAll("[data-next]").forEach(btn => {
  btn.addEventListener("click", () => goTo(btn.dataset.next));
});

dots.forEach(dot => {
  dot.addEventListener("click", () => goTo(dot.dataset.pageDot));
});

musicToggle.addEventListener("click", () => {
  if (!musicStarted) {
    musicStarted = true;
  }
  if (audio.paused) {
    audio.play().then(() => {
      musicToggle.classList.add("playing");
      musicText.textContent = "Music On";
    }).catch(() => {
      musicText.textContent = "Add MP3";
    });
  } else {
    audio.pause();
    musicToggle.classList.remove("playing");
    musicText.textContent = "Music";
  }
});

document.getElementById("replay").addEventListener("click", () => {
  goTo(1);
  musicStarted = false;
  audio.pause();
  audio.currentTime = 0;
  musicToggle.classList.remove("playing");
  musicText.textContent = "Music";
});

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight" && current < 5) goTo(current + 1);
  if (e.key === "ArrowLeft" && current > 1) goTo(current - 1);
});

let touchStartX = 0;
document.addEventListener("touchstart", e => touchStartX = e.changedTouches[0].clientX, {passive:true});
document.addEventListener("touchend", e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 60) {
    if (dx < 0 && current < 5) goTo(current + 1);
    if (dx > 0 && current > 1) goTo(current - 1);
  }
}, {passive:true});

// Ambient petals, kept light so mobile devices stay smooth.
setInterval(() => burstPetals(3), 2200);
burstPetals(24);
