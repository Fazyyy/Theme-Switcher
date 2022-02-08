function themeSwitch() {
  var element = document.getElementById("body");
  var themeButton = document.getElementById("theme-switch");
  element.classList.toggle("dark");
  themeButton.classList.toggle("on");
} 