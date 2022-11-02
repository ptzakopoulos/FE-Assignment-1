window.onload = () => {
  // ~~~~~~~~~~ Element Variables ~~~~~~~~~~
  const allPrj = document.getElementsByClassName('project-item');
  const filters = document.getElementsByClassName('filter-item');

  const btCheck = (e) => {
    let id = e.target.id;
    let x = document.getElementsByClassName(id);

    for (let i = 0; i < filters.length; i++) {
      filters[i].style.border = 'none';
      filters[i].style.color = '#d5c7ba';
    }

    document.getElementById(id).style.borderBottom = '2px solid white';
    document.getElementById(id).style.color = 'white';

    for (let j = 0; j < allPrj.length; j++) {
      allPrj[j].style.display = 'none';
    }

    for (let k = 0; k < x.length; k++) {
      x[k].style.display = 'inline-block';
    }
    console.log(id);
  };

  document.getElementById('all').addEventListener('click', btCheck);
  document.getElementById('facial').addEventListener('click', btCheck);
  document.getElementById('body').addEventListener('click', btCheck);
  document.getElementById('bw').addEventListener('click', btCheck);
  document.getElementById('colored').addEventListener('click', btCheck);
};
