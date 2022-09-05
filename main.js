let dropdownLis = document.querySelectorAll(".dropdownLi");

function navDrop() {
  dropdownLis.forEach((el) => {
    el.addEventListener("click", () => {
      if (el.querySelector(".dropBox").classList.contains("active")) {
        el.classList.remove("active");
        el.querySelector(".dropBox").classList.remove("active");
      } else {
        el.classList.add("active");
        el.querySelector(".dropBox").classList.add("active");
      }
    });
  });
}

navDrop();

let barsBtn = document.querySelector(".barsBtn");
let sideNav = document.querySelector(".side-nav");

barsBtn.onclick = function () {
  if (sideNav.classList.contains("active")) {
    barsBtn.classList.remove("active");
    sideNav.classList.remove("active");
  } else {
    barsBtn.classList.add("active");
    sideNav.classList.add("active");
  }
};
