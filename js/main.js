let year = document.getElementById("year");

year.innerHTML = new Date().getFullYear();

// Dark Mode
let darkmodeBtn = document.querySelector(".icon");
let root = document.querySelector(":root");
let nameEl = document.querySelector(".name");

darkmodeBtn.addEventListener("click", () => {
  if (root.className != "dark") {
    root.className = "dark";
    root.style.setProperty("--main-color", "#0C151D");
    root.style.setProperty("--text-color", "#A3ABB2");
    root.style.setProperty("--second-color", "#171F26");
    root.style.setProperty("--overlay-color", "#0C151D");
    nameEl.style.color = "white";
    darkmodeBtn.classList.add("fa-sun");
    darkmodeBtn.classList.remove("fa-moon");
    localStorage.setItem("dark-mode", "dark");
  } else {
    root.className = "light";
    root.style.setProperty("--main-color", "#e5e5e5");
    root.style.setProperty("--text-color", "#272727");
    root.style.setProperty("--second-color", "#fff");
    root.style.setProperty("--overlay-color", "#a3a3a3");
    nameEl.style.color = "black";
    darkmodeBtn.classList.add("fa-moon");
    darkmodeBtn.classList.remove("fa-sun");
    localStorage.setItem("dark-mode", "light");
  }
});

if (localStorage.getItem("dark-mode") == "dark") {
  darkmodeBtn.click();
}

// Tabs Buttons
let tabsContent = document.querySelector(".tabs-content");
let btnsArea = document.querySelector(".tabs-buttons");
let portfolioBtn = document.querySelector(".portfolio");
let skillsBtn = document.querySelector(".skills");
let portfoConent = document.querySelectorAll(".tabs-content .box");
let skillsConent = document.querySelectorAll(".tabs-content .progress");

portfolioBtn.addEventListener("click", () => {
  btnsArea.style.setProperty("--trans", "0");
  tabsContent.style.display = "grid";
  portfoConent.forEach((e) => {
    e.style.display = "block";
  });
  skillsConent.forEach((e) => {
    e.style.display = "none";
  });
});
skillsBtn.addEventListener("click", () => {
  btnsArea.style.setProperty("--trans", "100%");
  tabsContent.style.display = "block";
  portfoConent.forEach((e) => {
    e.style.display = "none";
  });
  skillsConent.forEach((e) => {
    e.style.display = "block";
  });
});
