// hardcoded login for demo
var myUser = "admin";
var myPass = "admin123";

function loginUser(user, pass) {
  if (user === myUser && pass === myPass) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", user);
    return true;
  } else {
    return false;
  }
}

function logoutUser() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  window.location.href = "index.html";
}

// kicks the user back to login page if not logged in
function checkLogin() {
  var loggedIn = localStorage.getItem("isLoggedIn");
  if (loggedIn !== "true") {
    window.location.href = "index.html";
  }
}

function getUsername() {
  var name = localStorage.getItem("username");
  if (name) {
    return name;
  } else {
    return "Guest";
  }
}
