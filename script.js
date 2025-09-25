const cards = document.querySelectorAll('.card');
const music = document.getElementById('bgMusic');
const playBtn = document.getElementById('playMusic');
const butterflyContainer = document.getElementById('butterflyContainer');

function createButterfly() {
  const butterfly = document.createElement("div");
  butterfly.classList.add("butterfly");

  // Random pastel color
  const colors = ["#f6d6d6", "#c2e7d9", "#a3c4f3"];
  butterfly.style.color = colors[Math.floor(Math.random() * colors.length)];

  butterfly.textContent = "🦋"; // actually shows the butterfly emoji
  butterfly.style.left = Math.random() * window.innerWidth + "px";

butterflyContainer.appendChild(butterfly);

  setTimeout(() => butterfly.remove(), 12000);
}

// Keep butterflies always floating
setInterval(createButterfly, 1500);

// Flip card + burst of butterflies
cards.forEach(card => {
  card.addEventListener("click", () => {
    // burst of butterflies on click
    for (let i = 0; i < 8; i++) {
      setTimeout(createButterfly, i * 150);
    }

    // wait before showing content
    setTimeout(() => {
      if (card.dataset.img) {
        // show image
        card.style.backgroundImage = `url(${card.dataset.img})`;
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";
      } 
      if (card.dataset.note) {
        // show note
        card.textContent = card.dataset.note;
        card.style.backgroundColor = "#fff";  
        card.style.color = "#2b2d42";         
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

