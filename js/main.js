const modal = document.querySelector('.modal');
const bottomsPlay = document.querySelectorAll('.button-play__wrap');
const closeModal = document.querySelector('.close');
const closeStopVideo = document.querySelector('iframe');

bottomsPlay.forEach((item, i) => {
  item.addEventListener('click', () => {
    modal.classList.add('active');
  })
});

modal.addEventListener('click', () => {
  modal.classList.remove('active');
  stopVideo();
})

const stopVideo = () => {
  closeStopVideo.src = '';
  closeStopVideo.src = 'https://www.youtube.com/embed/tZeMfF45Gmc';
}