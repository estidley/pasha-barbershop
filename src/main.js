const button = document.querySelector(".menu-button");
const navigation = document.querySelector("#mobile-nav");
if (button && navigation) {
  const closeMenu = () => {
    button.setAttribute("aria-expanded", "false");
    button.textContent = "Menu";
    navigation.hidden = true;
  };
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    button.textContent = open ? "Menu" : "Close";
    navigation.hidden = open;
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !navigation.hidden) {
      closeMenu();
      button.focus();
    }
  });
  window.addEventListener("resize", () => {
    if (getComputedStyle(button).display === "none") closeMenu();
  });
}
