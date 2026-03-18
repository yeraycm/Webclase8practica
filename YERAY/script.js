const slideGroups = document.querySelectorAll(".slide-group");
let currentGroup = 0;

function showGroup(index) {
  slideGroups.forEach((group, i) => {
    group.classList.remove("active");

    const text = group.querySelector(".slide-text");
    const btn = group.querySelector(".hero-btn");
    const front = group.querySelector(".front-img");
    const back = group.querySelector(".back-img");

    if (text) text.style.animation = "none";
    if (btn) btn.style.animation = "none";
    if (front) front.style.animation = "none";
    if (back) back.style.animation = "none";
  });

  const activeGroup = slideGroups[index];
  activeGroup.classList.add("active");

  const text = activeGroup.querySelector(".slide-text");
  const btn = activeGroup.querySelector(".hero-btn");
  const front = activeGroup.querySelector(".front-img");
  const back = activeGroup.querySelector(".back-img");

  void activeGroup.offsetWidth;

  if (text) text.style.animation = "textEntrance 1s ease forwards";
  if (btn) {
    btn.style.animation = "buttonEntrance 1s ease forwards";
    btn.style.animationDelay = "0.35s";
  }
  if (front) {
    front.style.animation = "frontImageEntrance 1s ease forwards";
    front.style.animationDelay = "0.15s";
  }
  if (back) {
    back.style.animation = "backImageEntrance 1s ease forwards";
    back.style.animationDelay = "0.3s";
  }
}

showGroup(currentGroup);

setInterval(() => {
  currentGroup = (currentGroup + 1) % slideGroups.length;
  showGroup(currentGroup);
}, 4000);

const countdownText = document.getElementById("countdownText");

if (countdownText) {
  const endDate = new Date();
  endDate.setHours(endDate.getHours() + 10);

  function updateCountdown() {
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
      countdownText.textContent = "Countdown Expired !";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownText.textContent =
      `${days} Days ${hours} Hrs ${minutes} Min ${seconds} Sec`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}