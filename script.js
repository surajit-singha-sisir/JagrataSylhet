window.onload = function () {
  nav();
  hamburgerClick();
};
print = console.log;
function nav() {
  const dropDown = document.querySelectorAll("#dropDown");
  dropDown.forEach((item) => {
    item.querySelector("ol").classList.toggle("hide");
    item.onclick = () => {
      const ol = item.querySelector("ol");
      ol.classList.toggle("hide");
      item.querySelector('#navDrop i').classList.toggle('chevronRotate');

    };
  });
}

// HAMBURGER SHOWS
function hamburgerClick() {
  const hamburger = document.querySelector(".category .hamburger");
  hamburger.style.cursor ='pointer';
  hamburger.style.zIndex ='2';
  
  hamburger.onclick = () => {
    hamburger.classList.toggle('bi-list');
    hamburger.classList.add('bi-x-lg');
  };
}
