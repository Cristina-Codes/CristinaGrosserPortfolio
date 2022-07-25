// const imgCont = document.querySelector('.imgContainer');
// const img = document.querySelector('#me');

// imgCont.addEventListener('mouseover', () => {
//   img.setAttribute('src', './assets/Optimized-IMG_9269.jpeg');
//   img.classList.add('hikerMe');
// })

// imgCont.addEventListener('mouseout', () => {
//   img.setAttribute('src', './assets/Optimized-IMG_1863.jpg');
//   img.classList.remove('hikerMe');
// })

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
