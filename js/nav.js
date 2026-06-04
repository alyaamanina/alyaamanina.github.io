function toggleMenu() {
  var menu = document.getElementById("mobileMenu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}

function showUsername() {
  var nameBox = document.getElementById("navUsername");
  if (nameBox) {
    nameBox.textContent = "Hi, " + getUsername();
  }
}

window.onload = function () {
  showUsername();
  if (typeof updateBadge === "function") {
    updateBadge();
  }
};
