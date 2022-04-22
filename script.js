const imgCont = document.querySelector('.imgContainer');
const img = document.querySelector('#me');

imgCont.addEventListener('mouseover', () => {
  img.setAttribute('src', './assets/Optimized-IMG_9269.jpeg');
  img.classList.add('hikerMe');
})

imgCont.addEventListener('mouseout', () => {
  img.setAttribute('src', './assets/Optimized-IMG_1863.jpg');
  img.classList.remove('hikerMe');
})