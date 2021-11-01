// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const btns = document.querySelectorAll('button');
const modal = document.querySelector('.modal');

const handleClick = (e) => {
  const {type} = e.target.dataset;
  if (type === 'open') {
    modal.classList.add('open-modal');
  }
  if (type === 'close') {
    modal.classList.remove('open-modal');
  }
};

btns.forEach((btn) => btn.addEventListener('click', handleClick));
