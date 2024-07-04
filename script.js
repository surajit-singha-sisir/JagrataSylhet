window.onload = function () {
  nav();
  hamburgerClick();
  resNav();
};
print = console.log;
function nav() {
  const dropDown = document.querySelectorAll(
    ".category .categoryList #dropDown"
  );
  dropDown.forEach((item) => {
    item.querySelector("li").classList.toggle("hide");
    item.onclick = () => {
      const li = item.querySelector("li");
      li.classList.toggle("hide");
      item.querySelector("#navDrop i").classList.toggle("chevronRotate");
    };
  });
}
function resNav() {
  const dropDown = document.querySelectorAll(
    ".jagrataResNav .categoryList #dropDown"
  );
  dropDown.forEach((item) => {
    item.querySelector("li").classList.toggle("hide");

    item.onclick = () => {
      const li = item.querySelector("li");
      li.classList.toggle("hide");
      item.querySelector("#navDrop i").classList.toggle("chevronRotate");

      const dropdownContent = item.querySelector("li");
      if (
        dropdownContent.style.height &&
        dropdownContent.style.height !== "0px"
      ) {
        dropdownContent.style.height = "0px";
      } else {
        dropdownContent.style.height = dropdownContent.scrollHeight + "px";
      }
    };
  });
}

// HAMBURGER SHOWS
function hamburgerClick() {
  const hamburger = document.querySelector(".category .hamburger");
  hamburger.style.cursor = "pointer";
  const jagrataResNav = document.querySelector(".jagrataResNav");
  
  const body = document.body;

  hamburger.onclick = () => {
    hamburger.classList.toggle("bi-list");
    hamburger.classList.toggle("bi-x-lg");
    jagrataResNav.classList.contains("hide")
      ? jagrataResNav.classList.remove("hide")
      : jagrataResNav.classList.add("hide");

      // SCROLL OFF
    body.classList.contains("crollless")
      ? body.classList.remove("crollless")
      : body.classList.add("crollless");
  };
}
