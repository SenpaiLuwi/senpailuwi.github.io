document.addEventListener("DOMContentLoaded", () => {
  const titles = [
    "`Graphics Designer`",
    "`Digital Editor`",
    "`Game Developer`",
    "`Game Tester`",
    "`Data Analyst`",
    "`Graphic Editor`",
  ];

  const titleElement = document.getElementById("animated-title");
  const nameElement = document.getElementById("name-title");

  // Set custom name size
  nameElement.style.fontSize = "4rem"; // Customize as needed

  let index = 0;

  function cycleTitles() {
    titleElement.classList.add("fade-slide-up");

    setTimeout(() => {
      index = (index + 1) % titles.length;
      titleElement.textContent = titles[index];

      titleElement.classList.remove("fade-slide-up");
      titleElement.classList.add("fade-slide-down");

      setTimeout(() => {
        titleElement.classList.remove("fade-slide-down");
      }, 500);
    }, 500);
  }

  setInterval(cycleTitles, 5000);

  // Wait for full animation (4s) + 0.5s buffer
  setTimeout(() => {
    document.querySelector(".loader-wrapper").style.transition = "opacity 1s ease";
    document.querySelector(".loader-wrapper").style.opacity = 0;

    // Remove from DOM after fade
    setTimeout(() => {
      document.querySelector(".loader-wrapper").style.display = "none";
    }, 500);
  }, 2100);
});


document.addEventListener("DOMContentLoaded", () => {
  const dotCount = Math.floor(Math.random() * 11) + 50; 
  const body = document.body;

  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement("div");
    dot.classList.add("glow-dot");

    // Position randomly within viewport
    dot.style.top = `${Math.random() * 100}vh`;
    dot.style.left = `${Math.random() * 100}vw`;

    body.appendChild(dot);
  }
});


new FinisherHeader({
  "count": 500,
  "size": {
    "min": 2,
    "max": 13,
    "pulse": 0.1
  },
  "speed": {
    "x": {
      "min": 0,
      "max": 1.5
    },
    "y": {
      "min": 0,
      "max": 1.5
    }
  },
  "colors": {
    "background": "#1a1a1a",
    "particles": [
      "#27391c",
      "#255f38",
      "#1f7d53",
      "#e2dfd0"
    ]
  },
  "blending": "none",
  "opacity": {
    "center": 1,
    "edge": 0
  },
  "skew": 0,
  "shapes": [
    "c"
  ]
});

