const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.style.color = "blue";
}

function handleMouseenter() {
  h1.innerText = "Mouse is here";
}

function handleMouseleave() {
  h1.innerText = "Mouse left";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copied");
}

function handleWindowOffline() {
  alert("No WIFI");
}

function handleWindowOnline() {
  alert("WIFI connected");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseenter);
h1.addEventListener("mouseleave", handleMouseleave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
