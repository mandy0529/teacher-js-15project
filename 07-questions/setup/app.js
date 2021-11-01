//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll('button');
const questions = document.querySelectorAll('.question');

const handleClick = (element) => {
  const target = element.target.parentNode.parentNode;
  questions.forEach((text) => {
    if (target === text) {
      text.classList.add('show');
    } else {
      text.classList.remove('show');
    }
  });
};

btns.forEach((btn) => btn.addEventListener('click', handleClick));
