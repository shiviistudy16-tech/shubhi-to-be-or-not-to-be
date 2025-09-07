const cards = document.querySelectorAll('.card');
const music = document.getElementById('bgMusic');
const playBtn = document.getElementById('playMusic');

// Butterfly generator
function createButterfly() {
  const butterfly = document.createElement("div");
  butterfly.classList.add("butterfly");

  // Random pastel color
  const colors = ["#f6d6d6", "#c2e7d9", "#a3c4f3"];
  butterfly.style.color = colors[Math.floor(Math.random() * colors.length)];

  butterfly.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(butterfly);

  setTimeout(() => butterfly.remove(), 4000);
}

// Flip card + butterflies (handles both images and text notes)
cards.forEach(card => {
  card.addEventListener("click", () => {
    // generate butterflies
    for (let i = 0; i < 8; i++) setTimeout(createButterfly, i * 150);

    setTimeout(() => {
      if (card.dataset.img) {
        card.style.backgroundImage = `url(${card.dataset.img})`;
      } 
      if (card.dataset.note) {
        card.textContent = card.dataset.note;
        card.style.backgroundColor = "#fff";  // make text readable
        card.style.color = "#2b2d42";         // text color
        card.style.fontWeight = "bold";
        card.style.display = "flex";
        card.style.justifyContent = "center";
        card.style.alignItems = "center";
        card.style.textAlign = "center";
        card.style.padding = "10px";
      }
      card.classList.add("flipped");
    }, 1200);
  });
});

// Music controls
playBtn.addEventListener("click", () => {
  music.play();
  playBtn.style.display = "none";
});
