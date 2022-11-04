window.onload = () => {
  const button = document.getElementsByClassName('button');
  const buttonBg = document.getElementsByClassName('clicked');

  console.log(button[0].offsetWidth);
  console.log(buttonBg[0].offsetWidth);

  console.log(button.length);

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('mousedown', function () {
      buttonBg[i].style.animationName = 'clicked';
    });
    button[i].addEventListener('mouseup', function () {
      buttonBg[i].style.animationName = 'none';
    });
    console.log(buttonBg[i]);
  }
};
