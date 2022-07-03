const panels = document.querySelectorAll(".panel");

console.log(panels);
function removeAll() {
  panels.forEach(function (panel) {
    panel.classList.remove("active");
  });
}

panels.forEach(function (panel) {
  panel.addEventListener("click", function (event) {
    removeAll();
    event.currentTarget.classList.add("active");
  });
});
