window.onload = () => {
  const button = document.getElementsByClassName('button');
  const buttonBg = document.getElementsByClassName('clicked');

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('mousedown', function () {
      buttonBg[i].style.animationName = 'clicked';
    });
    button[i].addEventListener('mouseup', function () {
      buttonBg[i].style.animationName = 'none';
    });
  }
};
