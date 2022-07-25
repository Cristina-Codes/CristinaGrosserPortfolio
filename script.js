// revealing text on hover of icons
const iconLI = document.querySelectorAll(".iconLI");

iconLI.forEach((listItem) => {
  listItem.addEventListener("mouseover", () => {
    listItem.classList.add("flip");
  });
  listItem.addEventListener("mouseout", () => {
    listItem.classList.remove("flip");
  });
});
