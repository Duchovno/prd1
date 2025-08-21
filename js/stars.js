const starContainer = document.getElementById("stars");

for (let i = 0; i < 100; i++) {
  let star = document.createElement("div");
  star.classList.add("star");
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";
  star.style.animationDelay = (Math.random() * 5) + "s";
  starContainer.appendChild(star);
}
